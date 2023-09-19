window.onload = function () {
    // header 마우스 오버시 헤더 슬라이드 메뉴 나오기
    const mainHd = document.querySelectorAll('.main_header');
    const menuBar = document.querySelectorAll('.main_menu_wrap');
    for (let i = 0; i < menuBar.length; i++) {
        menuBar[i].addEventListener('mouseover', function () {
            mainHd[i].classList.add('open');
        });
    }
    for (let i = 0; i < mainHd.length; i++) {
        mainHd[i].addEventListener('mouseout', function () {
            mainHd[i].classList.remove('open');
        });
    }

    // 스크롤시 header 색상 번경
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.querySelector('.main_header').classList.add('mainhd_white');
        } else if (window.scrollY > 0) {
            document.querySelector('.main_header').classList.remove('mainhd_white');
        }
    });

    const mainSliderBt = document.querySelectorAll('.main_slider');
    const mainImg = document.querySelectorAll('.main_img');
    const mainText = document.querySelectorAll('.main_text');
    for (let i = 0; i < mainSliderBt.length; i++) {
        mainImg[i].style.display = 'none';
        mainText[i].classList.remove('open');

        mainSliderBt[i].addEventListener('click', function () {
            mainImg[i].style.display = 'block';
            mainText[i].classList.add('open');
        });
    }

    // main 버튼 클릭시 이미지 + 텍스트 변경
    const mainText01 = document.querySelectorAll('.main_tx01');
    const mainText02 = document.querySelectorAll('.main_tx02');
    const mainText03 = document.querySelectorAll('.main_tx03');
    const mainImg01 = document.querySelectorAll('.main_img_01');
    const mainImg02 = document.querySelectorAll('.main_img_02');
    const mainImg03 = document.querySelectorAll('.main_img_03');

    const sliderBt01 = document.querySelectorAll('.slider_bt01');
    for (let i = 0; i < sliderBt01.length; i++) {
        sliderBt01[i].addEventListener('click', function () {
            mainText01[i].classList.add('open');
            mainText02[i].classList.remove('open');
            mainText03[i].classList.remove('open');
            mainImg01[i].style.display = 'block';
            mainImg02[i].style.display = 'none';
            mainImg03[i].style.display = 'none';
        });
    }
    const sliderBt02 = document.querySelectorAll('.slider_bt02');
    for (let i = 0; i < sliderBt02.length; i++) {
        sliderBt02[i].addEventListener('click', function () {
            mainText02[i].classList.add('open');
            mainText01[i].classList.remove('open');
            mainText03[i].classList.remove('open');
            mainImg02[i].style.display = 'block';
            mainImg01[i].style.display = 'none';
            mainImg03[i].style.display = 'none';
        });
    }
    const sliderBt03 = document.querySelectorAll('.slider_bt03');
    for (let i = 0; i < sliderBt03.length; i++) {
        sliderBt03[i].addEventListener('click', function () {
            mainText03[i].classList.add('open');
            mainText01[i].classList.remove('open');
            mainText02[i].classList.remove('open');
            mainImg03[i].style.display = 'block';
            mainImg01[i].style.display = 'none';
            mainImg02[i].style.display = 'none';
        });
    }

    // 자동 main화면 전환
    let imgIndex = 0;
    // main slider 클릭시 색상 변경

    function slideShow() {
        let mainImg = document.getElementsByClassName('ani_main_img');
        let colorBt = document.getElementsByClassName('main_slider');
        let text = document.getElementsByClassName('main_text');

        for (let i = 0; i < mainImg.length; i++) {
            mainImg[i].style.display = 'none';
            colorBt[i].classList.remove('red');
            text[i].classList.remove('open');
        }

        mainImg[imgIndex].style.display = 'block';
        colorBt[imgIndex].classList.add('red');
        text[imgIndex].classList.add('open');
        setTimeout(slideShow, 6000);

        if (imgIndex == mainImg.length - 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
    }

    document.querySelectorAll('.main_slider').forEach((button, i, buttons) => {
        button.addEventListener('click', (e) => {
            if ((i = 2)) {
                imgIndex = 0;
            }
            buttons.forEach((btn) => btn.classList.remove('red'));
            e.target.classList.add('red');
        });
    });
    slideShow();

    // 페이지 로드시 chat icon 열렸다 닫혔다
    document.querySelector('.chat1').classList.add('active');
    setTimeout(() => {
        document.querySelector('.chat1').classList.remove('active');
    }, 900);
    document.querySelector('.chat2').classList.add('active');
    setTimeout(() => {
        document.querySelector('.chat2').classList.remove('active');
    }, 900);
    // chat icon 마우스 오버시 width변경
    const chatIcon = document.querySelectorAll('.chat_content');
    for (let i = 0; i < chatIcon.length; i++) {
        chatIcon[i].addEventListener('mouseover', function () {
            chatIcon[i].classList.add('active');
        });
    }
    for (let i = 0; i < chatIcon.length; i++) {
        chatIcon[i].addEventListener('mouseout', function () {
            chatIcon[i].classList.remove('active');
        });
    }

    // pg2 해당 페이지 도착시 애니메이션 동작
    window.addEventListener('scroll', fnUpDown);
    function fnUpDown() {
        const UpDown = document.querySelectorAll('.ani_updown');
        for (var i = 0; i < UpDown.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = UpDown[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                UpDown[i].classList.add('active');
            }
        }
    }

    // pg3페이지되면 scroll icon보여지기
    const scrollIcon = document.querySelector('.scroll_icon_wrap');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollIcon.classList.add('close');
        } else {
            scrollIcon.classList.remove('close');
        }
        if (window.scrollY > 1200) {
            scrollIcon.classList.remove('close');
        }
        if (window.scrollY > 4100) {
            scrollIcon.classList.add('close');
        }
    });

    // // 스크롤 위치
    // addEventListener("mousewheel", e => {
    // const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
    // // 방향과 현 스크롤 위치
    // console.log(direction, window.scrollY);
    // });

    // pg3 스크롤 하면 text 고정
    const content = document.querySelector('.pg3_hd_tt');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 1700) {
            content.classList.add('fixed');
        } else {
            content.classList.remove('fixed');
        }

        if (window.scrollY > 4000) {
            content.classList.remove('fixed');
        }
    });
    // Pg3 스크롤 하면 top값 변경
    const contentSc = document.querySelector('.pg3_sc');
    let topSize = 0;
    addEventListener('mousewheel', (e) => {
        if (e.wheelDelta > 0) {
            topSize += 5;
            contentSc.style.top = topSize + 'px';
        } else {
            topSize -= 5;
            contentSc.style.top = topSize + 'px';
        }
    });
    // 다른페이지 되면 pg3원래 top값으로 변경
    window.addEventListener('scroll', function () {
        if (window.scrollY > 4000) {
            contentSc.style.top = '0px';
        }
    });
    window.addEventListener('scroll', function () {
        if (window.scrollY < 1300) {
            contentSc.style.top = '0px';
        }
    });

    // pg4 체크박스 클릭시 class 추가
    const pg4Bt = document.querySelectorAll('.content_type_03_bt');
    const map = document.querySelectorAll('.pg4_click_img');
    for (let i = 0; i < pg4Bt.length; i++) {
        pg4Bt[i].addEventListener('click', function () {
            pg4Bt[i].classList.toggle('active');
            map[i + 1].classList.toggle('close');
        });
    }

    // select box 클릭시 이벤트
    const selectBox = document.querySelectorAll('.footer_seletbox');
    const selectOption = document.querySelectorAll('.footer_sb_option');
    const upDown = document.querySelectorAll('.up_down');
    for (let i = 0; i < selectBox.length; i++) {
        selectBox[i].addEventListener('click', function () {
            selectOption[i].classList.toggle('close');
        });
    }
    // 태블릿/모바일 버튼 클릭시 이벤트 추가
    const menuCancelBt = document.querySelectorAll('.popupmenu_cancel');
    const menuBt = document.querySelectorAll('.m_menu_bt');
    const popupMenu = document.querySelectorAll('.popup_menu');
    const searchBt = document.querySelectorAll('.m_search_bt');
    const seachCancelBT = document.querySelectorAll('.m_seach_bt');
    const popupSeach = document.querySelectorAll('.popup_seach');
    const wrap = document.querySelectorAll('.wrap');
    // x버튼 클릭시 popup 닫힘
    for (let i = 0; i < menuCancelBt.length; i++) {
        menuCancelBt[i].addEventListener('click', function () {
            popupMenu[i].style.display = 'none';
            wrap[i].style.display = 'block';
        });
    }
    // 메뉴버튼 클릭시 popup 열림
    for (let i = 0; i < menuBt.length; i++) {
        menuBt[i].addEventListener('click', function () {
            popupMenu[i].style.display = 'block';
            wrap[i].style.display = 'none';
        });
    }
    // 서치 버튼 클릭시 seach 메뉴 열림
    for (let i = 0; i < searchBt.length; i++) {
        searchBt[i].addEventListener('click', function () {
            popupSeach[i].style.display = 'block';
            popupSeach[i].classList.remove('ani_short');
            popupSeach[i].classList.add('ani_long');
        });
    }
    // x버튼 클릭시 popup 닫힘
    for (let i = 0; i < seachCancelBT.length; i++) {
        seachCancelBT[i].addEventListener('click', function () {
            popupSeach[i].style.display = 'none';
            popupSeach[i].classList.remove('ani_long');
            popupSeach[i].classList.add('ani_short');
        });
    }

    // list 클릭시 이벤트
    const tabList = document.querySelectorAll('.popup_menu_list');
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].querySelector('.popup_menu_main_wrap').addEventListener('click', function (e) {
            for (let j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('open');
            }
            this.parentNode.classList.add('open');
        });
    }

    // input text입력시 버튼 나오기
    const idForm = document.querySelectorAll('#popup_input');
    const ipCancelBt = document.querySelectorAll('.ip_cancel_bt');
    for (let i = 0; i < idForm.length; i++) {
        idForm[i].addEventListener('keydown', function () {
            ipCancelBt[i].classList.remove('ip_cancel_bt');
        });
    }
    const ipCancelBti = document.querySelectorAll('.m_icon_ip_cancel');
    for (let i = 0; i < ipCancelBti.length; i++) {
        ipCancelBti[i].addEventListener('click', function () {
            ipCancelBt[i].classList.add('ip_cancel_bt');
        });
    }
};
