document.addEventListener('DOMContentLoaded', () => {


    // =========================================================
    const currentPizzaID = 'banana'; 


    // =========================================================
    // 피자 ID와 컬렉션 이미지, 위치(class) 매핑
    // =========================================================
    const pizzaCollectionMap = {
        'banana': { 
            className: '.PC_hide',       // 1번 자리
            imgSrc: 'source/PC_collection_banana.png' 
        },
        'berlusconi': { 
            className: '.PC_hide2',      // 2번 자리 (사슴뿔)
            imgSrc: 'source/PC_collection_ber.png' 
        },
        'ant': { 
            className: '.PC_hide3',      // 3번 자리
            imgSrc: 'source/PC_collection_ant.png' 
        },
        'fish': { 
            className: '.PC_hide4',      // 4번 자리 (모스크바)
            imgSrc: 'source/PC_collection_moskva.png' 
        },
        'pea': { 
            className: '.PC_hide5',      // 5번 자리 (완두콩)
            imgSrc: 'source/PC_collection_wan.png' 
        },
        'spaghetti': { 
            className: '.PC_hide6',      // 6번 자리
            imgSrc: 'source/PC_collection_spa.png' 
        }
    };

    // =========================================================
    // 1. 방문 기록 저장하기 (localStorage)
    // =========================================================
    
    // 기존에 저장된 '본 피자 목록'을 가져오기. 없으면 빈 배열 [] 로 시작.
    let viewedPizzas = JSON.parse(localStorage.getItem('wwp_viewed_list')) || [];

    // 현재 페이지의 피자가 목록에 없으면 추가하고 다시 저장합니다.
    if (currentPizzaID && !viewedPizzas.includes(currentPizzaID)) {
        viewedPizzas.push(currentPizzaID);
        localStorage.setItem('wwp_viewed_list', JSON.stringify(viewedPizzas));
    }

    // =========================================================
    // 2. 컬렉션 이미지 업데이트 (물음표 -> 피자 이미지)
    // =========================================================
    
    // 저장된 목록을 하나씩 확인하면서 이미지를 교체
    viewedPizzas.forEach(pizzaID => {
        const data = pizzaCollectionMap[pizzaID];
        
        if (data) {
            // 해당 클래스를 가진 div 안의 img 태그를 찾기
            const targetDiv = document.querySelector(data.className);
            if (targetDiv) {
                const targetImg = targetDiv.querySelector('img');
                if (targetImg) {
                    // 이미지 소스를 컬렉션 이미지로 변경
                    targetImg.src = data.imgSrc;
                    targetImg.alt = pizzaID + " Collection";

                    
                    targetImg.classList.add('mini-pizza');
                }
            }
        }
    });

    //버튼 이벤트
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = 'choose.html'; // 혹은 choose.html
        });
    }
});