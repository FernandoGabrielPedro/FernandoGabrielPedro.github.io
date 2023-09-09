function navbarEvent() {
    const navbarToggle = document.querySelector('#navbar__toggle');
    const navbarItemList = document.querySelector('#navbar__icon-list');

    if(navbarToggle.className == "fa-solid fa-bars fa-4x fa-inverse navbar__toggle navbar__toggle--is-active") {
        navbarToggle.className = "fa-solid fa-bars fa-4x fa-inverse navbar__toggle";
        navbarItemList.className = "navbar__icon-list navbar__icon-list--is-disabled";
    } else {
        navbarToggle.className = "fa-solid fa-bars fa-4x fa-inverse navbar__toggle navbar__toggle--is-active";
        navbarItemList.className = "navbar__icon-list";
    }
}

function headerBackgroundEvent() {
    const navbarBackground = document.querySelector('#navbar__background');

    if (window.scrollY == 0) {
        navbarBackground.className = "navbar__background navbar__background--is-disabled";
    } else {
        navbarBackground.className = "navbar__background";
    }
}

function homeTextEvent() {
    const homeButton = document.querySelector('#home__button');
    const homeCollapsibleText = document.querySelectorAll(".home__collapsible-text")

    if(homeButton.className == "button button--vertical-margin--big home__button--is-active") {
        homeButton.className = "button button--vertical-margin--big";
        homeButton.innerHTML = 'Mais <i class="fa-solid fa-angles-right button__icon-more"></i>'

        for(let i = 0; i < homeCollapsibleText.length; i++)
            homeCollapsibleText[i].className = "home__collapsible-text home__collapsible-text--is-inactive text text--has-paragraph-indent text--size--small text--weight--thin text--align--justify";
    } else {
        homeButton.className = "button button--vertical-margin--big home__button--is-active";
        homeButton.innerHTML = 'Menos <i class="fa-solid fa-angles-left button__icon-more"></i>'

        for(let i = 0; i < homeCollapsibleText.length; i++)
            homeCollapsibleText[i].className = "home__collapsible-text text text--has-paragraph-indent text--size--small text--weight--thin text--align--justify";
    }
}

function experienceListEvent() {
    const experienceButton = document.querySelector('#experience__button');
    const experienceCollapsibleText = document.querySelectorAll(".experience__job-item-collapsible")

    if(experienceButton.className == "button experience__button--is-active") {
        experienceButton.className = "button";
        experienceButton.innerHTML = 'Mais <i class="fa-solid fa-angles-right button__icon-more"></i>'

        for(let i = 0; i < experienceCollapsibleText.length; i++)
            experienceCollapsibleText[i].className = "experience__job-item experience__job-item-collapsible experience__job-item-collapsible--is-inactive";
    } else {
        experienceButton.className = "button experience__button--is-active";
        experienceButton.innerHTML = 'Menos <i class="fa-solid fa-angles-left button__icon-more"></i>'

        for(let i = 0; i < experienceCollapsibleText.length; i++)
            experienceCollapsibleText[i].className = "experience__job-item experience__job-item-collapsible";
    }
}

function educationListEvent() {
    const educationButton = document.querySelector('#education__button');
    const educationCollapsibleText = document.querySelectorAll(".education__education-item-collapsible")

    if(educationButton.className == "button education__button--is-active") {
        educationButton.className = "button";
        educationButton.innerHTML = 'Mais <i class="fa-solid fa-angles-right button__icon-more"></i>'

        for(let i = 0; i < educationCollapsibleText.length; i++)
            educationCollapsibleText[i].className = "education__education-item education__education-item-collapsible education__education-item-collapsible--is-inactive";
    } else {
        educationButton.className = "button education__button--is-active";
        educationButton.innerHTML = 'Menos <i class="fa-solid fa-angles-left button__icon-more"></i>'

        for(let i = 0; i < educationCollapsibleText.length; i++)
            educationCollapsibleText[i].className = "education__education-item education__education-item-collapsible";
    }
}

function portfolioProgrammingEvent() {
    document.querySelector('#portfolio__programming-button').className = "portfolio__top-button";
    document.querySelector('#portfolio__webdesign-button').className = "portfolio__top-button portfolio__top-button--is-inactive";
    document.querySelector('#portfolio__consulting-button').className = "portfolio__top-button portfolio__top-button--is-inactive";

    const websiteContainer = document.querySelector('#portfolio__website-container');
    const websiteList = document.querySelectorAll('.portfolio__website-image');

    websiteContainer.classList.add("portfolio__website-container--is-away");
    setTimeout(() => {
        websiteList[0].src = "assets/websites/website1.png";
        websiteList[1].src = "assets/websites/website2.png";
        websiteList[2].src = "assets/websites/website3.png";
        websiteList[3].src = "assets/websites/website4.png";
        websiteList[4].src = "assets/websites/website5.png";
        websiteList[5].src = "assets/websites/website6.png";
    }, 200)
    setTimeout(() => {websiteContainer.classList.remove("portfolio__website-container--is-away")}, 500)
}
function portfolioWebdesignEvent() {
    document.querySelector('#portfolio__programming-button').className = "portfolio__top-button portfolio__top-button--is-inactive";
    document.querySelector('#portfolio__webdesign-button').className = "portfolio__top-button";
    document.querySelector('#portfolio__consulting-button').className = "portfolio__top-button portfolio__top-button--is-inactive";

    const websiteContainer = document.querySelector('#portfolio__website-container');
    const websiteList = document.querySelectorAll('.portfolio__website-image');

    websiteContainer.classList.add("portfolio__website-container--is-away");
    setTimeout(() => {
        websiteList[0].src = "assets/websites/website7.png";
        websiteList[1].src = "assets/websites/website8.png";
        websiteList[2].src = "assets/websites/website9.png";
        websiteList[3].src = "assets/websites/website10.png";
        websiteList[4].src = "assets/websites/website11.png";
        websiteList[5].src = "assets/websites/website12.png";
    }, 200)
    setTimeout(() => {websiteContainer.classList.remove("portfolio__website-container--is-away")}, 500)
}
function portfolioConsultingEvent() {
    document.querySelector('#portfolio__programming-button').className = "portfolio__top-button portfolio__top-button--is-inactive";
    document.querySelector('#portfolio__webdesign-button').className = "portfolio__top-button portfolio__top-button--is-inactive";
    document.querySelector('#portfolio__consulting-button').className = "portfolio__top-button";

    const websiteContainer = document.querySelector('#portfolio__website-container');
    const websiteList = document.querySelectorAll('.portfolio__website-image');

    websiteContainer.classList.add("portfolio__website-container--is-away");
    setTimeout(() => {
        websiteList[0].src = "assets/websites/website13.png";
        websiteList[1].src = "assets/websites/website14.png";
        websiteList[2].src = "assets/websites/website15.png";
        websiteList[3].src = "assets/websites/website16.png";
        websiteList[4].src = "assets/websites/website17.png";
        websiteList[5].src = "assets/websites/website18.png";
    }, 200)
    setTimeout(() => {websiteContainer.classList.remove("portfolio__website-container--is-away")}, 500)
}

function portfolioMoreButtonEvent() {
    const websiteContainer = document.querySelector('#portfolio__website-container');
    const websiteInnerContainer = document.querySelector('#portfolio__website-inner-container');
    const websiteList = document.querySelectorAll('.portfolio__website-image-container');
    const carouselControlPrev = document.querySelectorAll('.carousel-control-prev');
    const carouselControlNext = document.querySelectorAll('.carousel-control-next');
    const portfolioMoreButton = document.querySelector('#portfolio__more-button');

    if(websiteContainer.className == "portfolio__website-container carousel slide") {
        websiteContainer.classList.add("portfolio__website-container--is-away");

        setTimeout(() => {
            websiteContainer.className = "portfolio__website-container portfolio__website-container--is-away";
            websiteInnerContainer.className = "portfolio__website-inner-container--grid";

            for(let i = 0; i < 6; i++)
                websiteList[i].className = "portfolio__website-image-container";

            carouselControlPrev.className = "carousel-control-prev carousel-control-inactive";
            carouselControlNext.className = "carousel-control-next carousel-control-inactive";

            portfolioMoreButton.innerHTML = 'Menos <i class="fa-solid fa-angles-left button__icon-more"></i>';
        }, 200)

        setTimeout(() => {websiteContainer.classList.remove("portfolio__website-container--is-away")}, 500)
    } else {
        websiteContainer.classList.add("portfolio__website-container--is-away");

        setTimeout(() => {
            websiteContainer.className = "portfolio__website-container carousel slide portfolio__website-container--is-away";
            websiteInnerContainer.className = "portfolio__website-inner-container--carousel carousel-inner";

            websiteList[0].className = "portfolio__website-image-container carousel-item active"
            for(let i = 1; i < 6; i++)
                websiteList[i].className = "portfolio__website-image-container carousel-item";

            carouselControlPrev.className = "carousel-control-prev";
            carouselControlNext.className = "carousel-control-next";

            portfolioMoreButton.innerHTML = 'Mais <i class="fa-solid fa-angles-right button__icon-more"></i>';
        }, 200)

        setTimeout(() => {websiteContainer.classList.remove("portfolio__website-container--is-away")}, 500)
    }
}

document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('email-form');
    const result = document.getElementById('form-result');

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.className = "footer__forms-result";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.className = "footer__forms-result footer__forms-result--is-success";
                result.querySelector('.text').innerHTML = "E-mail sent successfully!";
            } else {
                console.log(response);
                result.querySelector('.text').innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.className = "footer__forms-result footer__forms-result--is-failure";
            result.querySelector('.text').innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.classList.add("footer__forms-result--is-disabled");
            }, 3000);
            setTimeout(() => {
                result.className = "footer__forms-result footer__forms-result--is-disabled";
                result.querySelector('.text').innerHTML = "Processing...";
            }, 4000);
        });
});

document.onscroll = function() {headerBackgroundEvent()};

document.querySelector('#navbar__toggle')
    .addEventListener('click', navbarEvent);

document.querySelector('#home__button')
    .addEventListener('click', homeTextEvent);

document.querySelector('#experience__button')
    .addEventListener('click', experienceListEvent);

document.querySelector('#education__button')
    .addEventListener('click', educationListEvent);

document.querySelector('#portfolio__programming-button')
    .addEventListener('click', portfolioProgrammingEvent);
document.querySelector('#portfolio__webdesign-button')
    .addEventListener('click', portfolioWebdesignEvent);
document.querySelector('#portfolio__consulting-button')
    .addEventListener('click', portfolioConsultingEvent);

document.querySelector('#portfolio__more-button')
    .addEventListener('click', portfolioMoreButtonEvent);