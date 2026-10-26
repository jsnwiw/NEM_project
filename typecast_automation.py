import os
from typecast import Typecast
from typecast.models import TTSRequest, SmartPrompt

# Ensure you have set the TYPECAST_API_KEY environment variable, or replace with your key.
<<<<<<< HEAD
client = Typecast(api_key=os.getenv("__pltWiGzQz9EVYbCLVPmWzJjsp9uCP2oZavK39FztGL7", "__pltWiGzQz9EVYbCLVPmWzJjsp9uCP2oZavK39FztGL7"))
=======
client = Typecast(api_key=os.getenv("__pltWiGzQz9EVYbCLVPmWzJjsp9uCP2oZavK39FztGL7"))
>>>>>>> 3e4d1ce335fa9c81664b5c9da7b31f15cdcf7dfa

def generate_smart_voice(text: str, previous_text: str = "", next_text: str = ""):
    """Generate speech with smart emotion context using Typecast API.

    Args:
        text: The main text to synthesize.
        previous_text: Optional preceding context for emotion shaping.
        next_text: Optional following context for emotion shaping.
    """
    request = TTSRequest(
        text=text,
        model="ssfm-v30",
        prompt=SmartPrompt(
            emotion_type="smart",
            previous_text=previous_text,
            next_text=next_text,
        ),
    )
<<<<<<< HEAD
    # Call Typecast TTS without console notifications
=======
    print("Calling Typecast TTS...")
>>>>>>> 3e4d1ce335fa9c81664b5c9da7b31f15cdcf7dfa
    response = client.text_to_speech(request)
    return response.audio_data

def save_audio(audio_bytes: bytes, filename: str = "typecast_output.wav"):
    """Save the raw audio bytes to a WAV file."""
    with open(filename, "wb") as f:
        f.write(audio_bytes)
<<<<<<< HEAD
    # No console output
=======
    print(f"Audio saved to {filename}")
>>>>>>> 3e4d1ce335fa9c81664b5c9da7b31f15cdcf7dfa

if __name__ == "__main__":
    # Example usage with smart emotion surrounding context.
    text = "Oh my gosh, we actually did it and it finally worked out!"
    prev = "I feel like I'm walking on air"
    nxt = "I am literally bursting with happiness"
    audio = generate_smart_voice(text, previous_text=prev, next_text=nxt)
    save_audio(audio)
