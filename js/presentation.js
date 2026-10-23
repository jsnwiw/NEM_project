// presentation.js
// PPT 8개 슬라이드 완전 연동 자동 발표 엔진 (지도/패널 액션 + TTS 음성 해설 + 자막 싱크 + PPT 다운로드)

var presentationSlides = [
  {
    slideNumber: 1,
    badge: "SLIDE 01 · 표지 및 인트로",
    title: "대한민국 인프라 소외지역 실시간 정밀 분석 지도",
    summary: "• 전국 229개 전 지자체(시·군·구) 및 18대 대표 취약지구 전수 조사\n• 13대 핵심 인프라 결핍 진단 및 실시간 스트리밍 Web GIS\n• Typecast AI TTS 음성 브리핑 및 자동화 파이프라인 탑재",
    script: "안녕하십니까. 지금부터 대한민국 인프라 소외지역 실시간 정밀 분석 지도 플랫폼 발표를 시작하겠습니다. 본 프로젝트는 전국 229개 시군구 전수와 18대 대표 취약지구의 13대 핵심 인프라 결핍 현황을 실시간으로 분석하고 시각화하는 고정밀 웹 GIS 플랫폼입니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.setView) {
        map.setView([36.1, 127.8], 7.2);
      }
      if (typeof selectAllCategories === 'function') {
        selectAllCategories();
      }
    }
  },
  {
    slideNumber: 2,
    badge: "SLIDE 02 · 문제 정의 및 현황",
    title: "지역 간 심화되는 인프라 불균형과 사각지대",
    summary: "• 🚨 응급의료 골든타임 결핍: 수도권 3분 vs 소외지역 54분\n• 📉 지방소멸 고위험 가속화: 평균 소멸위험지수 0.14 (초고위험)\n• ⚡ 필수 생활 에너지/교통 격차: 도시가스 14.2% vs 91%, 버스 배차 110분 vs 9분",
    script: "먼저 기획 배경입니다. 수도권과 비수도권 간의 인프라 양극화는 생명과 직결된 수준에 도달했습니다. 중증 응급실 도달 시간은 소외지역의 경우 54분이 소요되며, 도시가스 보급률은 14%에 불과하여 지역 주민의 안전과 기본 생활권이 심각하게 위협받고 있습니다.",
    action: function() {
      if (typeof toggleOverlayLayer === 'function') {
        toggleOverlayLayer('emergency');
      }
    }
  },
  {
    slideNumber: 3,
    badge: "SLIDE 03 · 핵심 목표 및 솔루션",
    title: "데이터 기반의 직관적 Web GIS 진단 플랫폼",
    summary: "• 🌐 전수 조사 & 정밀 매핑: 229개 지자체 + 실시간 26km 권역 버퍼 투사\n• 📊 13대 지표 통합 패널: 응급, 소방, 교육, 교통 등 원스톱 진단\n• 🛰️ 고해상도 위성 UX: Esri 위성 베이스맵 + 한국어 라벨 상시 탑재\n• 🔊 AI 음성 시연: Typecast API 연동 실시간 음성 브리핑 및 자막 싱크",
    script: "이에 따라 저희는 데이터에 기반한 실시간 해결책을 제시합니다. 229개 전 지자체의 정밀 매핑과 26km 결핍 권역 버퍼 투사, 그리고 13대 지표 진단 패널을 결합하여 복잡한 공공 데이터를 누구나 직관적으로 파악할 수 있는 솔루션을 완성했습니다.",
    action: function() {
      const sidebar = document.getElementById('sidebarWrapper');
      if (sidebar && sidebar.classList.contains('collapsed')) {
        if (typeof toggleSidebarPanel === 'function') toggleSidebarPanel();
      }
    }
  },
  {
    slideNumber: 4,
    badge: "SLIDE 04 · 13대 핵심 인프라 결핍 진단 체계",
    title: "국토 균형발전을 위한 3대 영역 13대 진단 지표",
    summary: "• 🏥 보건·안전: 응급의료(30km 권역), 소방/안전(7분 골든타임), 복지/돌봄\n• 🚆 생활·기반: 교통/철도(배차간격), 에너지/난방(LNG 배관망), 상수도, 상권\n• 🌱 성장·미래: 교육, 문화/체육, 통신(5G 음영), 일자리, 환경, 소멸위험지수",
    script: "진단 체계는 크게 세 가지 영역으로 구성됩니다. 응급실과 소방서 접근성을 포함한 보건 안전 인프라, 교통 및 도시가스와 같은 생활 기반 인프라, 그리고 교육과 일자리, 인구소멸위험지수를 아우르는 성장 미래 인프라까지 13개 지표를 다각도로 평가합니다.",
    action: function() {
      if (typeof toggleOverlayLayer === 'function') {
        toggleOverlayLayer('extinction');
      }
    }
  },
  {
    slideNumber: 5,
    badge: "SLIDE 05 · 시스템 구조 및 기술 스택",
    title: "고성능 클라이언트 중심 경량 Web GIS 아키텍처",
    summary: "• Leaflet.js + MarkerCluster: 초고속 렌더링 및 핀 클러스터링으로 겹침 완벽 방지\n• Esri World Imagery: 글로벌 위성 타일 + 선명한 한글 행정명 단독 라벨링\n• Apple iOS Glassmorphism UI: 프레임워크 종속 없는 반응형 뷰 스위처\n• Typecast TTS REST API: Base64 스트리밍 오디오 변환 및 자막 동기화",
    script: "시스템 구조는 빠르고 가벼운 반응형 웹 GIS로 설계되었습니다. Leaflet과 마커 클러스터를 적용해 수백 개의 마커가 겹치지 않고 쾌적하게 렌더링되며, Esri 초고화질 위성 지도와 애플 감성의 반응형 글래스모피즘 인터페이스를 제공합니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([37.5665, 126.978], 9);
      }
    }
  },
  {
    slideNumber: 6,
    badge: "SLIDE 06 · AI 음성 브리핑 및 자동화 시연",
    title: "Typecast AI TTS를 활용한 실시간 음성 브리핑",
    summary: "• 원클릭 자동 발표 모달을 통한 8대 슬라이드 오디오 가이드 실행\n• ssfm-v30 고음질 한국어 AI 성우 모델 연동 및 브라우저 Web Speech 엔진 백업\n• 음성 재생과 실시간으로 연동되는 하이라이트 자막(Caption) 시스템\n• 슬라이드 진행에 맞춘 지도 위치 및 레이어 자동 전환 연동",
    script: "특히 이번 버전에는 타입캐스트 AI 음성 합성 기술이 탑재되었습니다. 버튼 하나로 지금 보시는 것처럼 지도 화면 이동과 레이어 변경이 음성 해설과 완벽하게 싱크되어 현장감 있는 프레젠테이션과 브리핑을 스스로 수행합니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([35.1796, 129.0756], 9);
      }
    }
  },
  {
    slideNumber: 7,
    badge: "SLIDE 07 · 기대 효과 및 향후 발전 방향",
    title: "지역 소멸 대응 및 정책 의사결정 지원 플랫폼",
    summary: "• 🏛️ 정책 수립 데이터 근거: 지자체별 인프라 결핍 객관화로 예산 우선순위 배분 지원\n• 👥 대국민 알 권리 보장: 복잡한 공공 데이터를 지도와 AI 음성으로 알기 쉽게 전달\n• 🔮 향후 로드맵: AI 인구 감소 예측 모델 연동 및 취약계층 복지 서비스 확장",
    script: "본 플랫폼은 지자체와 정부 부처의 공공 인프라 예산 집행에 객관적인 데이터 근거를 제시하며, 취약지역 주민들에게도 인프라 정보 접근성을 획기적으로 개선합니다. 향후 인구 예측 시뮬레이션 모델과의 융합도 준비하고 있습니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([36.1, 127.8], 7.2);
      }
    }
  },
  {
    slideNumber: 8,
    badge: "SLIDE 08 · 마무리 및 Q&A",
    title: "감사합니다 - 질의응답 (Q&A)",
    summary: "• 대한민국 인프라 소외지역 실시간 정밀 분석 지도\n• PPT 슬라이드 다운로드 및 발표 대본 파일 연동 완료\n• 경청해 주셔서 대단히 감사합니다.",
    script: "이상으로 대한민국 인프라 소외지역 실시간 정밀 분석 지도 플랫폼에 대한 발표를 마치겠습니다. 경청해 주셔서 대단히 감사합니다. 질의응답을 진행하도록 하겠습니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.setView) {
        map.setView([36.1, 127.8], 7.2);
      }
    }
  }
];

var presentationText = presentationSlides.map(s => `[${s.badge}] ${s.title}\n${s.summary}`).join('\n\n');

var currentSlideIndex = 0;
var isAutoPresenting = false;
var autoPresentationTimeout = null;
var currentAudio = null;

// 음성 합성 함수 (Typecast API 우선 시도, 실패/키부재 시 브라우저 내장 Web Speech API로 100% 무중단 자동 재생)
async function speakPresentationText(text, onEndedCallback) {
  let playedWithTypecast = false;
  try {
    if (typeof generateSpeech === 'function') {
      const apiKey = typeof getApiKey === 'function' ? getApiKey() : '';
      if (apiKey && apiKey !== 'YOUR_TYPECAST_API_KEY') {
        const audioBlob = await generateSpeech(text);
        const url = URL.createObjectURL(audioBlob);
        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = new Audio(url);
        currentAudio.onended = () => {
          if (onEndedCallback) onEndedCallback();
        };
        await currentAudio.play();
        playedWithTypecast = true;
      }
    }
  } catch (err) {
    console.warn("Typecast API 호출 실패, 브라우저 내장 TTS로 자동 전환:", err);
  }

  // Typecast 미설정 또는 실패 시: 브라우저 Web Speech API로 100% 동작
  if (!playedWithTypecast) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const koVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KR'));
      if (koVoice) utterance.voice = koVoice;

      utterance.onend = () => {
        if (onEndedCallback) onEndedCallback();
      };
      utterance.onerror = (e) => {
        console.warn("SpeechSynthesis error:", e);
        if (onEndedCallback) onEndedCallback();
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        if (onEndedCallback) onEndedCallback();
      }, 5000);
    }
  }
}

// 자동 발표 시작
function startAutoPresentation() {
  isAutoPresenting = true;
  currentSlideIndex = 0;
  updateAutoPresentationUI();
  playSlide(currentSlideIndex);
}

// 자동 발표 정지
function stopAutoPresentation() {
  isAutoPresenting = false;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (autoPresentationTimeout) {
    clearTimeout(autoPresentationTimeout);
    autoPresentationTimeout = null;
  }
  updateAutoPresentationUI();
}

// 슬라이드 재생
function playSlide(index) {
  if (index < 0 || index >= presentationSlides.length) {
    stopAutoPresentation();
    const statusElem = document.getElementById('presentationStatus');
    if (statusElem) statusElem.innerHTML = "🎉 <b>8개 슬라이드 전체 자동 발표가 성공적으로 완료되었습니다!</b>";
    return;
  }

  currentSlideIndex = index;
  const slide = presentationSlides[index];

  // 슬라이드 화면 갱신
  renderSlideContent(slide);

  // 지도 또는 패널 연동 액션 실행
  if (typeof slide.action === 'function') {
    try { slide.action(); } catch (e) { console.error(e); }
  }

  const statusElem = document.getElementById('presentationStatus');
  if (statusElem) {
    statusElem.innerHTML = `🔊 <b>${slide.badge}</b> 음성 해설 재생 중... (${index + 1}/${presentationSlides.length})`;
  }

  // 음성 재생 및 다음 슬라이드로 자동 전환
  speakPresentationText(slide.script, () => {
    if (!isAutoPresenting) return;
    
    if (statusElem) {
      statusElem.innerHTML = `⏳ 다음 슬라이드로 자동 전환 중... (${index + 1}/${presentationSlides.length})`;
    }

    autoPresentationTimeout = setTimeout(() => {
      if (isAutoPresenting) {
        playSlide(currentSlideIndex + 1);
      }
    }, 1500);
  });
}

// 슬라이드 UI 렌더링
function renderSlideContent(slide) {
  const contentElem = document.getElementById('presentationContent');
  if (contentElem) {
    contentElem.innerHTML = `
      <div style="background: rgba(0,122,255,0.06); border-left: 4px solid #007aff; border-radius: 8px; padding: 12px 14px; margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size: 11px; font-weight: 700; color: #007aff; text-transform: uppercase;">${slide.badge}</span>
          <span style="font-size: 11px; background: rgba(0,122,255,0.12); color:#007aff; font-weight:700; padding:2px 8px; border-radius:10px;">PPT Slide ${slide.slideNumber}</span>
        </div>
        <h3 style="font-size: 17px; margin: 6px 0 8px 0; color: #1d1d1f; font-weight:700;">${slide.title}</h3>
        <p style="font-size: 13.5px; line-height: 1.6; color: #3a3a3c; white-space: pre-line;">${slide.summary}</p>
      </div>
    `;
  }

  const captionElem = document.getElementById('presentationCaption');
  if (captionElem) {
    captionElem.innerHTML = `🎙️ <b>AI 나레이션 대본:</b> <i>"${slide.script}"</i>`;
  }

  const progressElem = document.getElementById('presentationProgress');
  if (progressElem) {
    progressElem.textContent = `${slide.slideNumber} / ${presentationSlides.length}`;
  }
}

// 이전 / 다음 수동 컨트롤
function nextPresentationSlide() {
  if (currentSlideIndex < presentationSlides.length - 1) {
    playSlide(currentSlideIndex + 1);
  }
}

function prevPresentationSlide() {
  if (currentSlideIndex > 0) {
    playSlide(currentSlideIndex - 1);
  }
}

function updateAutoPresentationUI() {
  const btn = document.getElementById('autoPresentationToggleBtn');
  if (btn) {
    if (isAutoPresenting) {
      btn.innerHTML = "⏹️ 발표 일시정지";
      btn.className = "ios-btn btn-apple-red";
    } else {
      btn.innerHTML = "▶️ 자동 발표 시작";
      btn.className = "ios-btn btn-apple-success";
    }
  }
}

// PPT 파일 다운로드 / 열기 함수
function downloadPresentationPPT() {
  const link = document.createElement('a');
  link.href = '대한민국_인프라_소외지역_분석_발표자료.pptx';
  link.download = '대한민국_인프라_소외지역_분석_발표자료.pptx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.presentationSlides = presentationSlides;
window.startAutoPresentation = startAutoPresentation;
window.stopAutoPresentation = stopAutoPresentation;
window.playSlide = playSlide;
window.nextPresentationSlide = nextPresentationSlide;
window.prevPresentationSlide = prevPresentationSlide;
window.downloadPresentationPPT = downloadPresentationPPT;
