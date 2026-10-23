// tts_demo.js
// Simple demo for Typecast TTS using fetch (REST API)
// Requires a valid TYPECAST_API_KEY environment variable or you can embed the key (not recommended).

// Load API key from a meta tag or environment variable (for local dev you can set it in a .env file)
function getApiKey() {
  const meta = document.querySelector('meta[name="typecast-api-key"]');
  if (meta) return meta.getAttribute('content');
  console.warn('API key not found in meta tag.');
  return '';
}

// Generate speech for a given text
async function generateSpeech(text, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('Typecast API key is required');

  const payload = {
    text: text,
    model: options.model || 'ssfm-v30',
    // If you want smart emotion, uncomment the following block:
    // prompt: {
    //   emotion_type: 'smart',
    //   previous_text: options.previous_text || '',
    //   next_text: options.next_text || ''
    // }
  };

  const response = await fetch('https://api.typecast.ai/v1/tts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Typecast API error: ${response.status} ${err}`);
  }

  // The API returns a JSON with a base64-encoded audio_data field
  const data = await response.json();
  if (!data.audio_data) throw new Error('No audio data returned');
  const audioBlob = base64ToBlob(data.audio_data, 'audio/wav');
  return audioBlob;
}

// Helper: convert base64 string to Blob
function base64ToBlob(base64, mime) {
  const byteChars = atob(base64);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) {
    byteNumbers[i] = byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mime });
}

// Demo UI: click button to play demo speech
async function runDemo() {
  const demoText = '안녕하세요, Typecast TTS 자동 시연에 오신 것을 환영합니다.';
  try {
    const audioBlob = await generateSpeech(demoText);
    const url = URL.createObjectURL(audioBlob);
    const audio = new Audio(url);
    audio.play();
  } catch (e) {
    console.error('Demo failed:', e);
    alert('Demo failed: ' + e.message);
  }
}

// Expose runDemo for HTML button onclick
// Play presentation TTS
async function runPresentationDemo() {
  try {
    // Show subtitle/caption
    const captionElem = document.getElementById('presentationCaption');
    const statusElem = document.getElementById('presentationStatus');
    if (captionElem) captionElem.textContent = presentationText;
    if (statusElem) statusElem.textContent = '🔊 재생 중...';
    const audioBlob = await generateSpeech(presentationText);
    const url = URL.createObjectURL(audioBlob);
    const audio = new Audio(url);
    audio.play();
    audio.onended = () => {
      if (captionElem) captionElem.textContent = '';
      if (statusElem) statusElem.textContent = '✅ 재생 완료';
      setTimeout(() => {
        if (statusElem) statusElem.textContent = '';
      }, 2000);
    };
  } catch (e) {
    console.error('Presentation demo failed:', e);
    alert('Presentation demo failed: ' + e.message);
  }
}
window.runPresentationDemo = runPresentationDemo;
