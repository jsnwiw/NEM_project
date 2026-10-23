/**
 * 재해 알림 및 모달 팝업 제어 로직
 */

/**
 * 재해 알림 모달 열기
 */
function openDisasterModal() {
  const modal = document.getElementById('disasterModalOverlay');
  if (modal) {
    modal.classList.add('active');
  }
}

/**
 * 재해 알림 모달 닫기
 */
function closeDisasterModal() {
  const modal = document.getElementById('disasterModalOverlay');
  if (modal) {
    modal.classList.remove('active');
  }
}

/**
 * 발표 모달 열기 및 자동 발표 시작
 */
function openPresentationModal() {
  const modal = document.getElementById('presentationModalOverlay');
  if (modal) {
    modal.classList.add('active');
    // 자동 발표 모듈 초기화 및 1단계 슬라이드부터 자동 발표 시작
    if (typeof startAutoPresentation === 'function') {
      startAutoPresentation();
    }
  }
}

/**
 * 발표 모달 닫기
 */
function closePresentationModal() {
  const modal = document.getElementById('presentationModalOverlay');
  if (modal) {
    modal.classList.remove('active');
  }
  // 모달 닫힐 때 음성 및 타이머 정지
  if (typeof stopAutoPresentation === 'function') {
    stopAutoPresentation();
  }
}

/**
 * 자동 발표 토글 버튼 (재생 / 일시정지)
 */
function toggleAutoPresentation() {
  if (typeof isAutoPresenting !== 'undefined' && isAutoPresenting) {
    if (typeof stopAutoPresentation === 'function') stopAutoPresentation();
  } else {
    if (typeof startAutoPresentation === 'function') startAutoPresentation();
  }
}

function closeModalOnBackdrop(e, id) {
  if (e.target.id === id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
    }
    if (id === 'presentationModalOverlay' && typeof stopAutoPresentation === 'function') {
      stopAutoPresentation();
    }
  }
}

/**
 * 🌊 [호우/대설 경보] 도서 및 산간 취약 지역 항목 클릭 핸들러
 */
function handleDisasterRainSnowClick() {
  if (typeof triggerRainSnowDisaster === 'function') {
    triggerRainSnowDisaster();
  }
}

/**
 * 🔥 [산불 주의보] 항목 클릭 핸들러
 */
function handleWildfireClick() {
  if (typeof triggerWildfireDisaster === 'function') {
    triggerWildfireDisaster();
  }
}


