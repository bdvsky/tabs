const images = document.querySelectorAll('.img');
const btns = document.querySelectorAll('.btn');
const btnsContainer = document.querySelector('.btns');

function showTab(el = 0) {
    images[el].classList.add('show');
    images[el].classList.remove('hide');
}

function hideTab() {
    images.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
     
        });
    }

hideTab();
showTab();

btnsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if(target && target.classList.contains('btn')) {
        btns.forEach((item,i) => {
            if(target == item) {
                item.classList.add('main_font');
                hideTab();
                showTab(i);
            } else {
                item.classList.remove('main_font');
            }
        });
    }
});

