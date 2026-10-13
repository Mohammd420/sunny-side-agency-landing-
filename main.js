//Get dom elements
let navUl = document.querySelector('.nav-lnks');
let opentNavBtn = document.querySelector('.hamburger');
let body = document.body;
let imgs = document.querySelectorAll('.gallery .gallery-box .box img ');
let toTopBtn = document.querySelector('.scroll-top');

opentNavBtn.addEventListener('click', () => {
    navUl.classList.toggle('open')
});

imgs.forEach(img => {
    img.addEventListener('click', () => {
        //Ignore scroll top top img
        if (img.className !== 'arrow') {
            let imgDiv = document.createElement('div');
            let cloesBtn = document.createElement('span');
            cloesBtn.textContent = 'X';
            //Remove popup
            cloesBtn.addEventListener('click', function () {
                imgDiv.remove();
            })
            imgDiv.append(cloesBtn)
            imgDiv.className = 'img-popup';
            let newImg = document.createElement('img');
            newImg.setAttribute('src', img.src)
            imgDiv.append(newImg);
            document.body.appendChild(imgDiv);
        };
    });
});

//Add scroll top top btn
window.onscroll = function (e) {
    if (window.scrollY >= 100) {
        toTopBtn.style.transform = 'translateX(-20px)';
    } else if (window.scrollY <= 100) {
        toTopBtn.style.transform = 'translateX(140px)';
    };
    toTopBtn.addEventListener('click', function () {
        window.scrollTo(0, 0)
    });
};