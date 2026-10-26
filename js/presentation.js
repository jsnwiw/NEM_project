// presentation.js
// PPT 8개 슬라이드 완전 연동 15분 Typecast AI 자동 발표 엔진 + 16:9 실제 PPT 슬라이드 화면 뷰어 + 지도/패널 연동

var presentationSlides = [
  {
    slideNumber: 1,
    badge: "SLIDE 01 · 표지 및 인트로",
    category: "PROJECT INTRODUCTION",
    title: "대한민국 인프라 소외지역 실시간 정밀 분석 지도",
    subtitle: "전국 229개 전 지자체 13대 핵심 인프라 결핍 진단 및 Typecast TTS 자동화 플랫폼",
    audio: "audio/slide_01.mp3",
    duration: 135,
    script: "안녕하십니까. 지금부터 대한민국 인프라 소외지역 실시간 정밀 분석 지도 플랫폼에 대한 최종 성과 발표를 시작하겠습니다. 본 프로젝트는 국토의 균형 발전과 모든 국민의 기본적 생활권 보장을 위해, 수도권과 비수도권, 그리고 도서 및 산간 오지 간에 날로 심화되고 있는 인프라 격차를 데이터에 기반하여 정밀하게 측정하고 진단하고자 기획되었습니다. 전국 17개 광역자치단체와 229개 시군구 기초지자체 전수, 그리고 울릉도, 독도, 백령도와 같은 도서 산간 18대 대표 취약지구의 방대한 공공 데이터를 수집하고 정밀 가공하여, 13대 핵심 생활 인프라의 결핍 현황을 고해상도 위성 지도 상에 실시간으로 시각화하는 차세대 웹 GIS 시스템을 구축하였습니다. 특히, 오늘 발표는 타입캐스트 인공지능 음성 엔진을 통해 전체 8개 핵심 슬라이드를 약 15분 동안 심층적으로 시연하며, 지도 화면과 데이터 패널이 음성 해설과 실시간으로 연동되는 자동화 프레젠테이션으로 진행됩니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.setView) {
        map.setView([36.1, 127.8], 7.2);
      }
      if (typeof selectAllCategories === 'function') {
        selectAllCategories();
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide dark-slide">
          <div>
            <div style="display:inline-flex; align-items:center; gap:6px; background:rgba(14,165,233,0.18); border:1px solid #0ea5e9; color:#38bdf8; font-size:11px; font-weight:700; padding:4px 12px; border-radius:20px; margin-bottom:12px;">
              🛰️ 초고화질 위성 Web GIS & AI 음성 시연
            </div>
            <h1 style="font-size:clamp(18px, 2.7vw, 28px); font-weight:800; line-height:1.25; margin:0 0 10px 0; color:#ffffff; letter-spacing:-0.5px;">
              대한민국 인프라 소외지역<br><span style="color:#38bdf8;">실시간 정밀 분석 지도</span>
            </h1>
            <p style="font-size:clamp(11px, 1.3vw, 13px); color:#94a3b8; margin:0; line-height:1.5;">
              전국 229개 전 지자체 13대 핵심 인프라 결핍 진단 및 Typecast TTS 자동화 플랫폼
            </p>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:14px;">
            <div style="background:#1e293b; border:1px solid #334155; border-radius:10px; padding:10px 12px;">
              <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:4px;">📍 전국 229개소 전수 진단</div>
              <div style="font-size:10.5px; color:#cbd5e1; line-height:1.4;">17개 광역시도 및 주요 도서 전수 검색</div>
            </div>
            <div style="background:#1e293b; border:1px solid #334155; border-radius:10px; padding:10px 12px;">
              <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:4px;">📊 13대 핵심 결핍 지표</div>
              <div style="font-size:10.5px; color:#cbd5e1; line-height:1.4;">응급의료·교통·난방·소멸위험 등 연동</div>
            </div>
            <div style="background:#1e293b; border:1px solid #334155; border-radius:10px; padding:10px 12px;">
              <div style="font-size:12px; font-weight:700; color:#38bdf8; margin-bottom:4px;">🔊 Typecast AI TTS</div>
              <div style="font-size:10.5px; color:#cbd5e1; line-height:1.4;">ssfm-v30 고음질 음성 및 자막 싱크</div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 2,
    badge: "SLIDE 02 · 문제 정의 및 현황",
    category: "01. BACKGROUND & PROBLEM",
    title: "지역 간 심화되는 인프라 불균형과 사각지대",
    audio: "audio/slide_02.mp3",
    duration: 130,
    script: "두 번째 슬라이드에서는 본 프로젝트의 기획 배경과 문제 정의에 대해 말씀드리겠습니다. 현재 대한민국은 수도권 일극 집중 현상이 심화되면서, 지방 소멸과 비수도권 인프라 사각지대가 국민의 생명과 직결된 수준에 도달했습니다. 저희 연구진이 조사한 실태 분석 결과에 따르면, 권역외상센터와 중증 응급실까지의 도달 시간은 수도권의 경우 평균 3분에 불과하지만, 의료 취약지역의 경우 무려 54분이 소요되어 골든타임을 확보하기가 매우 어렵습니다. 뿐만 아니라, 평균 소멸위험지수는 0.14로 초고위험 단계에 진입하였으며, 도시가스 보급률은 수도권 91% 대비 취약지구는 14.2%에 불과하고, 농어촌 버스 배차간격 역시 110분에 달해 기본적인 대중교통 이용조차 큰 제약을 받고 있습니다. 이처럼 의료, 교통, 에너지, 소방 등 일상생활에 필수적인 인프라의 결핍은 지역 주민의 삶의 질을 떨어뜨리고 인구 유출을 가속화시키는 악순환을 유발하고 있습니다.",
    action: function() {
      if (typeof overlayLayerMap !== 'undefined' && overlayLayerMap['emergency'] && typeof map !== 'undefined') {
        if (!map.hasLayer(overlayLayerMap['emergency'])) {
          map.addLayer(overlayLayerMap['emergency']);
        }
        const btn = document.querySelector('.layer-toggle-btn[data-layer="emergency"]');
        if (btn) btn.classList.add('active');
      } else if (typeof toggleOverlayLayer === 'function') {
        toggleOverlayLayer('emergency');
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px; letter-spacing:0.5px;">01. BACKGROUND & PROBLEM</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">지역 간 심화되는 인프라 불균형과 사각지대</h2>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:10px; flex:1;">
            <div style="background:#ffffff; border-top:4px solid #ef4444; border-radius:10px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between; border-left:1px solid #f1f5f9; border-right:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9;">
              <div>
                <div style="font-size:12.5px; font-weight:700; color:#ef4444; margin-bottom:6px;">🚨 응급의료 골든타임 결핍</div>
                <div style="font-size:11px; color:#475569; line-height:1.45;">수도권 3분 vs 소외지역 54분<br>전국 18대 취약지구 내 중증 외상·응급실 부재로 인한 생명 직결 위협</div>
              </div>
              <div style="font-size:10.5px; font-weight:700; color:#ef4444; background:rgba(239,68,68,0.1); padding:4px 6px; border-radius:6px; text-align:center;">도달시간 18배 격차</div>
            </div>
            <div style="background:#ffffff; border-top:4px solid #f59e0b; border-radius:10px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between; border-left:1px solid #f1f5f9; border-right:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9;">
              <div>
                <div style="font-size:12.5px; font-weight:700; color:#f59e0b; margin-bottom:6px;">📉 지방소멸 고위험 가속화</div>
                <div style="font-size:11px; color:#475569; line-height:1.45;">평균 소멸위험지수 0.14<br>청년층 유출과 고령화 심화, 분만 산부인과 0개 시군구 증가로 인구 절벽 직면</div>
              </div>
              <div style="font-size:10.5px; font-weight:700; color:#f59e0b; background:rgba(245,158,11,0.1); padding:4px 6px; border-radius:6px; text-align:center;">초고위험 지수 0.14</div>
            </div>
            <div style="background:#ffffff; border-top:4px solid #007aff; border-radius:10px; padding:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between; border-left:1px solid #f1f5f9; border-right:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9;">
              <div>
                <div style="font-size:12.5px; font-weight:700; color:#007aff; margin-bottom:6px;">⚡ 필수 에너지/교통 격차</div>
                <div style="font-size:11px; color:#475569; line-height:1.45;">도시가스 14.2% vs 91%<br>버스 배차 110분 vs 수도권 9분, 대중교통 및 난방의 심각한 구조적 소외</div>
              </div>
              <div style="font-size:10.5px; font-weight:700; color:#007aff; background:rgba(0,122,255,0.1); padding:4px 6px; border-radius:6px; text-align:center;">배차간격 12배 격차</div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 3,
    badge: "SLIDE 03 · 핵심 목표 및 솔루션",
    category: "02. CORE GOAL & SOLUTION",
    title: "데이터 기반의 직관적 Web GIS 진단 플랫폼",
    audio: "audio/slide_03.mp3",
    duration: 120,
    script: "세 번째 슬라이드는 이러한 국가적 위기를 극복하기 위해 저희가 제시하는 데이터 기반의 통합 솔루션입니다. 과거의 인프라 통계는 방대한 텍스트 보고서나 단편적인 엑셀 표 형태로만 제공되어, 일반 국민과 정책 입안자가 특정 지역의 결핍 수준을 한눈에 체감하기 어려웠습니다. 저희 플랫폼은 전국 229개 지자체 전역을 정밀 공간 좌표로 매핑하고, 검색 시 해당 지역을 중심으로 반경 26km에 달하는 인프라 영향권 버퍼 원을 실시간으로 투사합니다. 이를 통해 해당 권역 내에 응급실, 소방서, 대중교통망이 어느 정도 수준으로 갖추어져 있는지를 13대 지표 진단 패널을 통해 직관적으로 확인할 수 있습니다. 또한, 도로망에 가려지지 않는 고해상도 에스리 위성 지도와 선명한 한글 행정 지명 라벨을 결합하여, 누구나 손쉽게 취약 권역의 지리적 환경과 인프라 분포를 정밀 분석할 수 있는 환경을 구현했습니다.",
    action: function() {
      const sidebar = document.getElementById('sidebarWrapper');
      if (sidebar && sidebar.classList.contains('collapsed')) {
        if (typeof toggleSidebarPanel === 'function') toggleSidebarPanel();
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px;">02. CORE GOAL & SOLUTION</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">데이터 기반의 직관적 Web GIS 진단 플랫폼</h2>
          </div>
          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px; margin-top:10px; flex:1;">
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 12px; border-left:4px solid #007aff; display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12.5px; font-weight:700; color:#007aff; margin-bottom:4px;">🌐 전수 조사 & 정밀 매핑</div>
              <div style="font-size:11px; color:#475569; line-height:1.45;">229개 시·군·구 및 18대 취약지구 전수 DB 구축<br>초성/지명 자동완성 및 실시간 26km 권역 버퍼 투사</div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 12px; border-left:4px solid #007aff; display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12.5px; font-weight:700; color:#007aff; margin-bottom:4px;">📊 13대 지표 통합 분석 패널</div>
              <div style="font-size:11px; color:#475569; line-height:1.45;">응급, 소방, 교육, 교통, 일자리, 소멸위험 등<br>다차원 인프라 데이터를 한눈에 파악하는 직관적 UI</div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 12px; border-left:4px solid #007aff; display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12.5px; font-weight:700; color:#007aff; margin-bottom:4px;">🛰️ 고해상도 위성 지도 & UX</div>
              <div style="font-size:11px; color:#475569; line-height:1.45;">Esri 위성 지도 + 한글 지명 레이어 상시 탑재<br>iOS 글래스모피즘 디자인 및 모바일 반응형 뷰 스위처</div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px 12px; border-left:4px solid #007aff; display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:12.5px; font-weight:700; color:#007aff; margin-bottom:4px;">🔊 AI 음성 해설 & 브리핑</div>
              <div style="font-size:11px; color:#475569; line-height:1.45;">Typecast API 연동을 통한 브리핑 자동 음성 합성<br>음성 재생 싱크 자막 및 원클릭 자동 시연 제공</div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 4,
    badge: "SLIDE 04 · 13대 핵심 인프라 결핍 진단 체계",
    category: "03. 13 INFRASTRUCTURE INDICATORS",
    title: "국토 균형발전을 위한 3대 영역 13대 진단 지표",
    audio: "audio/slide_04.mp3",
    duration: 156,
    script: "네 번째 슬라이드에서는 본 플랫폼의 핵심 두뇌 역할을 하는 13대 핵심 인프라 결핍 진단 체계를 상세히 설명드리겠습니다. 저희는 국토교통부와 행정안전부의 인프라 평가지표를 기반으로, 크게 보건 안전, 생활 기반, 성장 미래라는 세 가지 중점 영역으로 분류 체계를 설계하였습니다. 첫 번째 보건 안전 영역에서는 골든타임 30km 권역외상센터 접근성을 평가하는 응급의료, 7분 골든타임 도달률을 분석하는 소방 안전, 그리고 독거노인 돌봄 인력을 평가하는 복지 인프라를 포함합니다. 두 번째 생활 기반 영역에서는 광역철도 및 농어촌 버스 배차간격을 분석하는 교통 철도, 도시가스 배관망 보급률을 측정하는 에너지 난방, 그리고 광역 상수도 보급률과 대형마트 접근성을 종합 평가합니다. 마지막 성장 미래 영역에서는 초중고 학령인구 추이를 분석하는 교육, 공공체육 및 문화시설, 5G 통신 음영 구역, 국가산업단지 기반의 양질의 일자리, 친환경 녹지율, 그리고 가임기 여성 인구 기반의 인구소멸위험지수까지 정밀 산출합니다. 이 13대 지표는 단순한 숫자가 아닌, 각 지자체의 생존 지수를 대변하는 객관적 나침반 역할을 수행합니다.",
    action: function() {
      if (typeof overlayLayerMap !== 'undefined' && overlayLayerMap['extinction'] && typeof map !== 'undefined') {
        if (!map.hasLayer(overlayLayerMap['extinction'])) {
          map.addLayer(overlayLayerMap['extinction']);
        }
        const btn = document.querySelector('.layer-toggle-btn[data-layer="extinction"]');
        if (btn) btn.classList.add('active');
      } else if (typeof toggleOverlayLayer === 'function') {
        toggleOverlayLayer('extinction');
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px;">03. 13 INFRASTRUCTURE INDICATORS</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">국토 균형발전을 위한 13대 핵심 진단 지표</h2>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:10px; flex:1;">
            <div style="background:#fff; border:1px solid #fee2e2; border-radius:10px; padding:10px; border-top:3px solid #ef4444;">
              <div style="font-size:12px; font-weight:700; color:#ef4444; margin-bottom:6px;">🏥 보건·안전 인프라</div>
              <div style="font-size:10.5px; color:#475569; line-height:1.5;">
                • 🚨 <b>응급의료</b>: 30km 권역외상 접근성<br>
                • 🚒 <b>소방안전</b>: 7분 골든타임 도달률<br>
                • 🏠 <b>복지돌봄</b>: 독거노인 맞춤 복지인력
              </div>
            </div>
            <div style="background:#fff; border:1px solid #dbeafe; border-radius:10px; padding:10px; border-top:3px solid #007aff;">
              <div style="font-size:12px; font-weight:700; color:#007aff; margin-bottom:6px;">🚆 생활·기반 인프라</div>
              <div style="font-size:10.5px; color:#475569; line-height:1.5;">
                • 🚆 <b>교통철도</b>: 버스 배차 및 철도망<br>
                • ⚡ <b>에너지난방</b>: 도시가스(LNG) 보급<br>
                • 💧 <b>상수도</b>: 광역·지방 상수도율<br>
                • 🛒 <b>생활상권</b>: 대형마트·종합상권
              </div>
            </div>
            <div style="background:#fff; border:1px solid #d1fae5; border-radius:10px; padding:10px; border-top:3px solid #10b981;">
              <div style="font-size:12px; font-weight:700; color:#10b981; margin-bottom:6px;">🌱 성장·미래 인프라</div>
              <div style="font-size:10.5px; color:#475569; line-height:1.5;">
                • 📚 <b>교육</b>: 학령인구 및 학교·도서관<br>
                • 🎭 <b>문화체육</b>: 공연장·체육시설<br>
                • 📡 <b>디지털통신</b>: 5G 커버리지 음영<br>
                • 💼 <b>일자리</b>: 국가산업단지 일자리<br>
                • 📉 <b>소멸위험</b>: 실시간 위험지수
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 5,
    badge: "SLIDE 05 · 시스템 구조 및 기술 스택",
    category: "04. ARCHITECTURE & TECH STACK",
    title: "고성능 클라이언트 중심 경량 Web GIS 아키텍처",
    audio: "audio/slide_05.mp3",
    duration: 118,
    script: "다섯 번째 슬라이드는 본 시스템의 구조와 고성능 웹 GIS 아키텍처에 대한 설명입니다. 본 플랫폼은 무거운 서버 렌더링에 의존하지 않고, 최신 웹 표준 기술인 리플렛 라이브러리와 마커 클러스터 기술을 적용하여 수백 개의 지자체 핀을 실시간으로 최적화 렌더링합니다. 이를 통해 사용자가 지도를 확대하거나 축소할 때 핀이 지저분하게 겹치는 현상을 원천 차단하고, 클러스터 배지를 클릭하면 해당 군집이 부드럽게 펼쳐지도록 구현했습니다. 또한 애플 아이오에스 특유의 세련된 글래스모피즘 사용자 인터페이스를 전면 적용하여, 반투명 블러 효과와 부드러운 애니메이션을 통해 뛰어난 시각적 몰입감을 제공합니다. 특히 모바일, 아이패드, 노트북, 4K 데스크톱 모니터에 이르기까지 화면 해상도를 자동으로 감지하여 최적의 뷰를 제공하는 반응형 뷰 스위처와 좌측 패널 슬라이딩 핸들을 탑재하여 모바일 사용성 또한 극대화하였습니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([37.5665, 126.978], 9);
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px;">04. ARCHITECTURE & TECH STACK</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">경량 고성능 클라이언트 Web GIS 아키텍처</h2>
          </div>
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-top:10px; flex:1;">
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span style="font-size:9.5px; font-weight:700; color:#0ea5e9; background:rgba(14,165,233,0.1); padding:2px 6px; border-radius:4px;">GIS Engine</span>
                <div style="font-size:12px; font-weight:700; color:#1e293b; margin:6px 0 4px 0;">Leaflet.js + MarkerCluster</div>
                <div style="font-size:10px; color:#64748b; line-height:1.4;">수백 개 핀 겹침 원천 차단 및 26km 권역 동적 버퍼 투사</div>
              </div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span style="font-size:9.5px; font-weight:700; color:#007aff; background:rgba(0,122,255,0.1); padding:2px 6px; border-radius:4px;">Satellite Map</span>
                <div style="font-size:12px; font-weight:700; color:#1e293b; margin:6px 0 4px 0;">Esri World Imagery</div>
                <div style="font-size:10px; color:#64748b; line-height:1.4;">글로벌 초고해상도 위성 타일 + 선명한 한글 행정 라벨</div>
              </div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span style="font-size:9.5px; font-weight:700; color:#8b5cf6; background:rgba(139,92,246,0.1); padding:2px 6px; border-radius:4px;">UI / UX</span>
                <div style="font-size:12px; font-weight:700; color:#1e293b; margin:6px 0 4px 0;">iOS Glassmorphism</div>
                <div style="font-size:10px; color:#64748b; line-height:1.4;">블러 효과 & 반응형 뷰 스위처 (모바일/태블릿 완벽 지원)</div>
              </div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span style="font-size:9.5px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px;">AI Voice</span>
                <div style="font-size:12px; font-weight:700; color:#1e293b; margin:6px 0 4px 0;">Typecast REST API</div>
                <div style="font-size:10px; color:#64748b; line-height:1.4;">ssfm-v30 고음질 AI 성우 오디오 및 실시간 자막 싱크</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 6,
    badge: "SLIDE 06 · AI 음성 브리핑 및 자동화 시연",
    category: "05. AI VOICE & NARRATION",
    title: "Typecast AI TTS를 활용한 실시간 음성 브리핑",
    audio: "audio/slide_06.mp3",
    duration: 141,
    script: "여섯 번째 슬라이드는 본 프로젝트의 대표적인 혁신 기능인 타입캐스트 인공지능 음성 브리핑 연동 기술입니다. 보고서나 정적인 웹사이트를 단순히 열람하는 것에 그치지 않고, AI 성우가 직접 프레젠테이션을 발표하듯 음성 해설을 전달함으로써 정보 전달력을 비약적으로 끌어올렸습니다. 타입캐스트의 첨단 음성 합성 모델인 ssfm-v30을 연동하여, 자연스러운 호흡과 억양으로 각 슬라이드의 핵심 요약을 브리핑합니다. 음성 재생과 동시에 하단에는 실시간 자막 싱크가 표시되며, 슬라이드 진행에 맞추어 지도의 중심 좌표와 레이어가 스스로 이동하며 현장감 넘치는 시연을 자동으로 수행합니다. 또한, 네트워크 환경에 구애받지 않고 언제 어디서나 끊김 없이 발표가 진행될 수 있도록 사전 렌더링된 고음질 오디오 스트림과 브라우저 내장 음성 합성 엔진을 결합한 3중 안전 장치를 완비하였습니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([35.1796, 129.0756], 9);
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px;">05. AI VOICE & NARRATION</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">Typecast AI 음성 브리핑 시스템 연동</h2>
          </div>
          <div style="display:grid; grid-template-columns:1.1fr 0.9fr; gap:12px; margin-top:10px; flex:1;">
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
              <div style="font-size:12px; font-weight:700; color:#007aff; margin-bottom:8px;">🎙️ 음성 브리핑 시스템 주요 특징</div>
              <div style="font-size:11px; color:#475569; line-height:1.6;">
                1. <b>원클릭 자동 발표</b>: 상단 버튼 클릭 시 팝업 및 자동 실행<br>
                2. <b>ssfm-v30 전문 AI 성우</b>: 딕션과 톤이 명확한 전문 아나운서 음성<br>
                3. <b>실시간 자막 싱크</b>: 음성 재생과 함께 하이라이트 텍스트 제공<br>
                4. <b>지도 액션 동기화</b>: 슬라이드에 맞춰 지도 좌표 및 레이어 자동 이동
              </div>
            </div>
            <div style="background:#0f172a; border-radius:10px; padding:12px; color:#fff; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="font-size:11px; font-weight:700; color:#38bdf8; margin-bottom:6px;">🔊 실시간 AI 음성 재생 중</div>
                <div style="font-size:11px; color:#cbd5e1; line-height:1.4; background:#1e293b; padding:8px 10px; border-radius:6px; border:1px solid #334155;">
                  "타입캐스트의 첨단 음성 합성 모델인 ssfm-v30을 연동하여 지도의 좌표 이동과 음성이 완벽하게 동기화됩니다."
                </div>
              </div>
              <div style="font-size:10px; color:#10b981; font-weight:600; text-align:right;">● Typecast Engine Active</div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 7,
    badge: "SLIDE 07 · 기대 효과 및 향후 발전 방향",
    category: "06. IMPACT & FUTURE VISION",
    title: "지역 소멸 대응 및 정책 의사결정 지원 플랫폼",
    audio: "audio/slide_07.mp3",
    duration: 112,
    script: "일곱 번째 슬라이드는 본 플랫폼이 가져올 사회적 가치와 기대 효과, 그리고 향후 로드맵입니다. 첫째, 중앙정부와 지자체는 한정된 공공 예산을 집행할 때 감이나 정치적 판단이 아닌, 본 플랫폼의 13대 지표 데이터를 바탕으로 가장 지원이 시급한 소외지역에 우선순위를 두고 예산을 투입할 수 있습니다. 둘째, 일반 국민과 언론은 자신이 살고 있는 지역의 인프라 결핍 현주소를 한눈에 확인하고, 알 권리를 보장받으며 국토 균형발전에 대한 사회적 공감대를 형성할 수 있습니다. 향후 발전 방향으로는, 기상청 실시간 재난 API와 산불 및 폭설 데이터의 완전 자동 연동, 그리고 인공지능 기반의 향후 10년 인구 감소 및 인프라 소멸 예측 시뮬레이션 모델을 추가 탑재하여 국가 대표 공간정보 플랫폼으로 도약하고자 합니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.flyTo) {
        map.flyTo([36.1, 127.8], 7.2);
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide light-slide">
          <div>
            <div style="font-size:11px; font-weight:700; color:#007aff; text-transform:uppercase; margin-bottom:4px;">06. IMPACT & FUTURE VISION</div>
            <h2 style="font-size:clamp(16px, 2.2vw, 22px); font-weight:800; color:#1e293b; margin:0;">지역 소멸 대응 및 정책 의사결정 지원 플랫폼</h2>
          </div>
          <div style="display:grid; grid-template-rows:repeat(3, 1fr); gap:8px; margin-top:10px; flex:1;">
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; display:flex; align-items:center; gap:10px;">
              <span style="font-size:18px;">🏛️</span>
              <div>
                <div style="font-size:12px; font-weight:700; color:#007aff;">정책 수립 데이터 근거 제공</div>
                <div style="font-size:10.5px; color:#475569;">지자체별 인프라 결핍도를 객관화하여 예산 우선순위 배분 및 정책 지원</div>
              </div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; display:flex; align-items:center; gap:10px;">
              <span style="font-size:18px;">👥</span>
              <div>
                <div style="font-size:12px; font-weight:700; color:#007aff;">대국민 정보 접근성 및 알 권리 보장</div>
                <div style="font-size:10.5px; color:#475569;">복잡한 공공 데이터를 지도와 AI 음성으로 누구나 쉽게 이해하도록 제공</div>
              </div>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; display:flex; align-items:center; gap:10px;">
              <span style="font-size:18px;">🔮</span>
              <div>
                <div style="font-size:12px; font-weight:700; color:#007aff;">향후 고도화 로드맵</div>
                <div style="font-size:10.5px; color:#475569;">기상청 실시간 재난 API 연동 및 AI 기반 10년 인구 감소 시뮬레이션 모델 결합</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    slideNumber: 8,
    badge: "SLIDE 08 · 마무리 및 Q&A",
    category: "CONCLUSION & Q&A",
    title: "감사합니다 - 질의응답 (Q&A)",
    audio: "audio/slide_08.mp3",
    duration: 94,
    script: "마지막으로 여덟 번째 슬라이드, 종합 결론 및 마무리입니다. 대한민국 인프라 소외지역 실시간 정밀 분석 지도는 기술을 통해 소외된 이웃과 지역을 돌아보고, 보다 안전하고 지속 가능한 대한민국을 만들기 위한 데이터 중심의 실천적 솔루션입니다. 상단의 파워포인트 다운로드 버튼을 통해 오늘 발표된 모든 슬라이드와 고해상도 디자인이 반영된 공식 발표 자료를 즉시 다운로드하실 수 있습니다. 약 15분 동안 진행된 본 자동 발표를 끝까지 경청해 주신 모든 분들께 진심으로 감사드립니다. 이상으로 대한민국 인프라 소외지역 실시간 정밀 분석 지도 플랫폼 발표를 모두 마치겠습니다. 감사합니다. 이제 질문이 있으시면 편하게 질의응답을 진행해 주시기 바랍니다.",
    action: function() {
      if (typeof map !== 'undefined' && map.setView) {
        map.setView([36.1, 127.8], 7.2);
      }
    },
    renderSlide: function() {
      return `
        <div class="ppt-slide dark-slide" style="justify-content:center; align-items:center; text-align:center;">
          <div>
            <h1 style="font-size:clamp(26px, 3.8vw, 38px); font-weight:800; color:#fff; margin:0 0 10px 0;">감사합니다</h1>
            <p style="font-size:clamp(12px, 1.5vw, 15px); color:#38bdf8; font-weight:600; margin:0 0 18px 0;">
              대한민국 인프라 소외지역 실시간 정밀 분석 지도
            </p>
            <div style="display:inline-block; background:#1e293b; border:1px solid #334155; padding:8px 20px; border-radius:24px; color:#94a3b8; font-size:12px; font-weight:600;">
              💬 질의응답 (Q&A)
            </div>
          </div>
        </div>
      `;
    }
  }
];

var presentationText = presentationSlides.map(s => `[${s.badge}] ${s.title}\n${s.summary}`).join('\n\n');

// 총 발표 예상 시간 계산 (초 단위, 약 1006초 = 16.7분)
var TOTAL_PRESENTATION_SECONDS = presentationSlides.reduce((acc, cur) => acc + (cur.duration || 120), 0);

var currentSlideIndex = 0;
var isAutoPresenting = false;
var autoPresentationTimeout = null;
var slideSafetyTimer = null;
var currentAudio = null;
var isPresentationMuted = false;
var isPipMode = false;

// 시간 포맷 헬퍼 (초 -> MM:SS)
function formatTimeMS(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// 누적 경과 시간 계산
function getAccumulatedTime(slideIndex, currentAudioCurrentTime) {
  let acc = 0;
  for (let i = 0; i < slideIndex; i++) {
    acc += presentationSlides[i].duration || 120;
  }
  return acc + (currentAudioCurrentTime || 0);
}

// 슬라이드 재생 엔진
function playSlide(index) {
  clearAllSlideTimers();

  if (index < 0 || index >= presentationSlides.length) {
    stopAutoPresentation();
    const statusElem = document.getElementById('presentationStatus');
    if (statusElem) statusElem.innerHTML = "🎉 <b>약 15분간의 전체 자동 발표가 성공적으로 완료되었습니다!</b>";
    const timeStatus = document.getElementById('presentationTimeStatus');
    if (timeStatus) timeStatus.textContent = `${formatTimeMS(TOTAL_PRESENTATION_SECONDS)} / ${formatTimeMS(TOTAL_PRESENTATION_SECONDS)}`;
    const pBar = document.getElementById('presentationProgressBar');
    if (pBar) pBar.style.width = '100%';
    return;
  }

  currentSlideIndex = index;
  const slide = presentationSlides[index];

  // 🖥️ 실제 16:9 PPT 슬라이드 UI 렌더링
  renderSlideContent(slide);

  // 🗺️ 지도 또는 패널 연동 액션 실행
  if (typeof slide.action === 'function') {
    try { slide.action(); } catch (e) { console.error("슬라이드 지도 액션 에러:", e); }
  }

  // 🔊 Typecast AI 고음질 음성 재생
  playSlideAudio(slide, () => {
    if (!isAutoPresenting) return;

    const statusElem = document.getElementById('presentationStatus');
    if (statusElem) {
      statusElem.innerHTML = `⏳ <b>다음 슬라이드로 자동 전환 중... (${index + 1}/${presentationSlides.length})</b>`;
    }

    autoPresentationTimeout = setTimeout(() => {
      if (isAutoPresenting) {
        playSlide(currentSlideIndex + 1);
      }
    }, 1500);
  });
}

// 오디오 재생 및 상태 동기화 함수
function playSlideAudio(slide, onEndedCallback) {
  let hasEnded = false;
  const finishOnce = () => {
    if (hasEnded) return;
    hasEnded = true;
    if (slideSafetyTimer) {
      clearTimeout(slideSafetyTimer);
      slideSafetyTimer = null;
    }
    if (onEndedCallback) onEndedCallback();
  };

  const statusElem = document.getElementById('presentationStatus');
  const timeStatus = document.getElementById('presentationTimeStatus');

  if (isPresentationMuted) {
    if (statusElem) statusElem.innerHTML = `🔇 <b>${slide.badge}</b> 진행 중 (음소거)`;
    let curSec = 0;
    const durSec = slide.duration || 120;
    const interval = setInterval(() => {
      if (!isAutoPresenting || isPresentationMuted === false) {
        clearInterval(interval);
        return;
      }
      curSec += 1;
      const totalElapsed = getAccumulatedTime(currentSlideIndex, curSec);
      if (timeStatus) timeStatus.textContent = `${formatTimeMS(totalElapsed)} / ${formatTimeMS(TOTAL_PRESENTATION_SECONDS)}`;
      if (curSec >= durSec) {
        clearInterval(interval);
        finishOnce();
      }
    }, 1000);
    return;
  }

  try {
    currentAudio = new Audio(slide.audio);
    currentAudio.preload = "auto";

    currentAudio.addEventListener('timeupdate', () => {
      if (!currentAudio) return;
      const cur = currentAudio.currentTime || 0;
      const dur = currentAudio.duration || slide.duration || 120;
      const totalElapsed = getAccumulatedTime(currentSlideIndex, cur);

      if (timeStatus) {
        timeStatus.textContent = `${formatTimeMS(totalElapsed)} / ${formatTimeMS(TOTAL_PRESENTATION_SECONDS)}`;
      }

      const pBar = document.getElementById('presentationProgressBar');
      if (pBar) {
        const percent = Math.min(100, (totalElapsed / TOTAL_PRESENTATION_SECONDS) * 100);
        pBar.style.width = `${percent}%`;
      }

      if (statusElem) {
        statusElem.innerHTML = `🔊 <b>${slide.badge}</b> Typecast AI 해설 재생 중 (${formatTimeMS(cur)} / ${formatTimeMS(dur)})`;
      }
    });

    currentAudio.onended = () => {
      finishOnce();
    };

    currentAudio.onerror = (e) => {
      console.warn("오디오 파일 재생 오류, 브라우저 Web Speech로 안전 대체:", e);
      fallbackToBrowserTTS(slide.script, finishOnce);
    };

    const playPromise = currentAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn("오디오 자동 재생 대기:", err);
        if (statusElem) {
          statusElem.innerHTML = `⚠️ <b>오디오 권한 필요:</b> 아래 [▶️ 자동 발표 시작] 버튼을 눌러주세요.`;
        }
        slideSafetyTimer = setTimeout(finishOnce, (slide.duration || 120) * 1000);
      });
    }

    slideSafetyTimer = setTimeout(() => {
      console.log("안전 타이머에 의해 다음 슬라이드로 전환");
      finishOnce();
    }, ((slide.duration || 120) + 3) * 1000);

  } catch (err) {
    console.error("Audio 생성 예외 발생:", err);
    fallbackToBrowserTTS(slide.script, finishOnce);
  }
}

// 브라우저 내장 Web Speech API 백업
function fallbackToBrowserTTS(text, onEnded) {
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ko-KR';
      u.rate = 1.0;
      window._activeSpeechUtterance = u;
      u.onend = onEnded;
      u.onerror = onEnded;
      window.speechSynthesis.speak(u);
    } catch (e) {
      setTimeout(onEnded, 8000);
    }
  } else {
    setTimeout(onEnded, 8000);
  }
}

// 타이머 및 사운드 즉시 정리
function clearAllSlideTimers() {
  if (slideSafetyTimer) {
    clearTimeout(slideSafetyTimer);
    slideSafetyTimer = null;
  }
  if (autoPresentationTimeout) {
    clearTimeout(autoPresentationTimeout);
    autoPresentationTimeout = null;
  }
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  window._activeSpeechUtterance = null;
}

// 슬라이드 UI 렌더링 (실제 16:9 와이드 PPT 슬라이드 캔버스 반영)
function renderSlideContent(slide) {
  const viewer = document.getElementById('pptSlideViewer');
  if (viewer && typeof slide.renderSlide === 'function') {
    viewer.innerHTML = slide.renderSlide();
  }

  const captionElem = document.getElementById('presentationCaption');
  if (captionElem) {
    captionElem.innerHTML = `🎙️ <b>Typecast AI 나레이션 전문:</b><br><span style="color:#1d1d1f; font-weight:500;">"${slide.script}"</span>`;
    captionElem.scrollTop = 0;
  }

  const progressElem = document.getElementById('presentationProgress');
  if (progressElem) {
    progressElem.textContent = `${slide.slideNumber} / ${presentationSlides.length}`;
  }

  const statusElem = document.getElementById('presentationStatus');
  if (statusElem) {
    statusElem.innerHTML = `🔊 <b>${slide.badge}</b> 준비 중...`;
  }
}

// 자동 발표 시작
function startAutoPresentation() {
  isAutoPresenting = true;
  currentSlideIndex = 0;
  updateAutoPresentationUI();
  playSlide(currentSlideIndex);
}

// 자동 발표 일시 정지
function stopAutoPresentation() {
  isAutoPresenting = false;
  clearAllSlideTimers();
  updateAutoPresentationUI();

  const statusElem = document.getElementById('presentationStatus');
  if (statusElem) {
    statusElem.innerHTML = `⏸️ <b>자동 발표가 일시정지되었습니다.</b>`;
  }
}

// 이전 / 다음 슬라이드 수동 이동
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

// 버튼 상태 UI 업데이트
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

// 음성 켜기 / 끄기 토글
function togglePresentationAudio() {
  isPresentationMuted = !isPresentationMuted;
  const btn = document.getElementById('presentationMuteBtn');
  if (btn) {
    if (isPresentationMuted) {
      btn.innerHTML = "🔇 음소거 됨";
      btn.className = "ios-btn tutorial-nav-btn";
      if (currentAudio) currentAudio.pause();
    } else {
      btn.innerHTML = "🔊 음성 켜짐";
      btn.className = "ios-btn btn-apple-blue tutorial-nav-btn";
      if (currentAudio && isAutoPresenting) currentAudio.play();
    }
  }
}

// 🗺️ 지도 동시 보기 (PIP 미니 플로팅 창 모드) 토글
function togglePresentationPipMode() {
  const overlay = document.getElementById('presentationModalOverlay');
  const pipBtn = document.getElementById('presentationPipBtn');
  if (!overlay) return;

  isPipMode = !isPipMode;
  if (isPipMode) {
    overlay.classList.add('pip-mode');
    if (pipBtn) pipBtn.innerHTML = "🖥️ 슬라이드 크게 보기";
  } else {
    overlay.classList.remove('pip-mode');
    if (pipBtn) pipBtn.innerHTML = "🗺️ 지도 동시 보기";
  }
}

// PPT 다운로드
function downloadPresentationPPT() {
  const link = document.createElement('a');
  link.href = 'presentation.pptx';
  link.download = '대한민국_인프라_소외지역_분석_발표자료.pptx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 전역 바인딩
window.presentationSlides = presentationSlides;
window.startAutoPresentation = startAutoPresentation;
window.stopAutoPresentation = stopAutoPresentation;
window.playSlide = playSlide;
window.nextPresentationSlide = nextPresentationSlide;
window.prevPresentationSlide = prevPresentationSlide;
window.togglePresentationAudio = togglePresentationAudio;
window.togglePresentationPipMode = togglePresentationPipMode;
window.downloadPresentationPPT = downloadPresentationPPT;
