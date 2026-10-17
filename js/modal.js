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
 * 모달 배경(Backdrop) 클릭 시 닫기
 */
function closeModalOnBackdrop(e, id) {
  if (e.target.id === id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
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


