import os
from typecast import Typecast
from typecast.models import TTSRequest, SmartPrompt, Output

# Typecast API 클라이언트 초기화 (사용자 API 키 설정)
API_KEY = os.getenv("TYPECAST_API_KEY", "__pltWiGzQz9EVYbCLVPmWzJjsp9uCP2oZavK39FztGL7")
client = Typecast(api_key=API_KEY)

def generate_smart_voice(text: str, previous_text: str = "", next_text: str = "", voice_id: str = "tc_66860d30b8d89a792aa89a51"):
    """Typecast API를 활용하여 감정 컨텍스트가 포함된 고음질 음성을 생성합니다."""
    request = TTSRequest(
        text=text,
        voice_id=voice_id,
        model="ssfm-v30",
        prompt=SmartPrompt(
            emotion_type="smart",
            previous_text=previous_text,
            next_text=next_text,
        ),
        output=Output(audio_format="mp3", audio_tempo=0.95)
    )
    response = client.text_to_speech(request)
    return response.audio_data

def save_audio(audio_bytes: bytes, filename: str = "typecast_output.mp3"):
    """음성 바이너리를 오디오 파일로 저장합니다."""
    with open(filename, "wb") as f:
        f.write(audio_bytes)

if __name__ == "__main__":
    text = "대한민국 인프라 소외지역 실시간 정밀 분석 지도 플랫폼에 오신 것을 환영합니다."
    audio = generate_smart_voice(text)
    save_audio(audio)
