import os
import argparse
from pathlib import Path

try:
    from typecast import Typecast
    from typecast.models import TTSRequest, SmartPrompt
except ImportError as e:
    raise ImportError(
        "Typecast SDK not installed. Run 'python -m pip install --upgrade typecast-python'"
    ) from e


def _create_client(api_key: str = None) -> Typecast:
    """Create a Typecast client.

    The API key is read from the `TYPECAST_API_KEY` environment variable if
    `api_key` is omitted.
    """
    api_key = api_key or os.getenv("TYPECAST_API_KEY")
    if not api_key:
        raise ValueError(
            "TYPECAST_API_KEY environment variable not set and no API key provided."
        )
    return Typecast(api_key=api_key)


def synthesize(
    client: Typecast,
    text: str,
    model: str = "ssfm-v30",
    smart: bool = False,
    previous_text: str = "",
    next_text: str = "",
) -> bytes:
    """Generate speech audio bytes for a single piece of text.

    Args:
        client: Initialized Typecast client.
        text: Main text to synthesize.
        model: Typecast model identifier (default ``ssfm-v30``).
        smart: If ``True`` use ``SmartPrompt`` for emotion/context.
        previous_text: Optional preceding context for ``SmartPrompt``.
        next_text: Optional succeeding context for ``SmartPrompt``.
    Returns:
        Raw audio data (WAV format).
    """
    if smart:
        request = TTSRequest(
            text=text,
            model=model,
            prompt=SmartPrompt(
                emotion_type="smart",
                previous_text=previous_text,
                next_text=next_text,
            ),
        )
    else:
        request = TTSRequest(text=text, model=model)
    response = client.text_to_speech(request)
    return response.audio_data


def _ensure_dir(path: Path):
    path.mkdir(parents=True, exist_ok=True)


def main():
    parser = argparse.ArgumentParser(
        description="Batch TTS generation using Typecast API."
    )
    parser.add_argument(
        "--input",
        required=True,
        help="Path to a text file (one sentence per line) or a CSV file with a 'text' column.",
    )

    parser.add_argument(
        "--demo",
        action="store_true",
        help="Run a quick demo with a preset sentence and save to 'demo.wav'.",
    )
    parser.add_argument(
        "--output-dir",
        default="tts_outputs",
        help="Directory to store generated WAV files (ignored in demo mode).",
    )
    parser.add_argument(
        "--model",
        default="ssfm-v30",
        help="Typecast model identifier (default: ssfm-v30).",
    )
    parser.add_argument(
        "--smart",
        action="store_true",
        help="Enable SmartPrompt for emotion-aware synthesis.",
    )
    parser.add_argument(
        "--api-key",
        help="Typecast API key; if omitted, reads from TYPECAST_API_KEY env var.",
    )
    if args.demo:
        # Quick demo: synthesize a preset sentence and save to demo.wav
        demo_text = "안녕하세요, Typecast TTS 자동 시연에 오신 것을 환영합니다."
        try:
            audio = synthesize(client, demo_text, model=args.model, smart=args.smart)
            demo_path = Path('demo.wav')
            demo_path.write_bytes(audio)
            print(f"Demo audio saved to {demo_path.resolve()}")
        except Exception as exc:
            print(f"Demo generation failed: {exc}")
        return

    client = _create_client(api_key=args.api_key)
    out_dir = Path(args.output_dir)
    _ensure_dir(out_dir)

    # Load input lines
    texts = []
    input_path = Path(args.input)
    if not input_path.is_file():
        raise FileNotFoundError(f"Input file not found: {input_path}")
    if input_path.suffix.lower() == ".csv":
        import csv
        with input_path.open(newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            if "text" not in reader.fieldnames:
                raise ValueError("CSV must contain a 'text' column.")
            for row in reader:
                texts.append(row["text"].strip())
    else:
        # Treat as plain text file, one line per entry
        with input_path.open(encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line:
                    texts.append(line)

    total = len(texts)
    if total == 0:
        print("No text entries found in the input file.")
        return

    print(f"Generating {total} audio file(s) using model '{args.model}'...")
    for idx, txt in enumerate(texts, start=1):
        try:
            audio = synthesize(
                client,
                txt,
                model=args.model,
                smart=args.smart,
                previous_text="" if idx == 1 else texts[idx - 2],
                next_text="" if idx == total else texts[idx],
            )
            out_file = out_dir / f"tts_{idx:04d}.wav"
            out_file.write_bytes(audio)
            print(f"[{{idx}}/{{total}}] Saved: {{out_file}}")
        except Exception as exc:
            print(f"[{{idx}}/{{total}}] Error processing text: {{txt[:30]}}... -> {{exc}}")

    print("Batch TTS generation completed.")


if __name__ == "__main__":
    main()
