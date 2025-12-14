document.addEventListener('DOMContentLoaded', () => {

    // 메인 화면에 들어오면 방문기록 지우기
    localStorage.removeItem('wwp_viewed_list');


    const pizzaImage = document.querySelector('.pizza-image');
    const btn = document.querySelector('.btn');
    
    // 회전 관련 변수 설정
    const SLICES = 6;
    const SNAP_ANGLE = 360 / SLICES; // 60도
    const PAUSE_DURATION_MS = 300; // 0.3초 일시 정지 (밀리초)
    let currentAngle = 0; // 현재 회전 각도
    
    // =========================================================
    // 1. 피자 스냅 회전 로직
    // =========================================================

    function startRotation() {
        // 다음 스냅 각도를 계산 (현재 각도에서 60도 추가)
        currentAngle += SNAP_ANGLE; 
        
        // 피자 이미지에 새로운 transform 속성 적용 (회전)
        pizzaImage.style.transform = `translateX(-50%) scale(0.9) rotate(${currentAngle}deg)`;
        
        // 회전이 끝난 후(transition duration 후) 일시 정지 및 다음 회전 준비
        setTimeout(() => {
            // 0.5초(PAUSE_DURATION_MS) 동안 멈춘 후, 다음 회전 시작
            setTimeout(startRotation, PAUSE_DURATION_MS);
            
        }, 1500); // 1500ms는 CSS transition 시간(1.5s)과 일치해야 함
    }

    // 페이지 로드 시 회전 시작
    if (pizzaImage) {
        // 첫 번째 회전은 페이지 로드 후 1초 후에 시작 (준비 시간)
        setTimeout(startRotation, 1000); 
    }
    
    // =========================================================
    // 2. 버튼 클릭 이벤트
    // =========================================================

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = 'choose.html';
        });
    }
});




