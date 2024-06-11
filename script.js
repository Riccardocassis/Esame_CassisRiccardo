
const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
})


// button read more/ less//

document.getElementById("read-more-btn").addEventListener("click", toggleReadMore);

function toggleReadMore() {
    var additionalText = document.getElementById("additional-text");
    var readMoreBtn = document.getElementById("read-more-btn");

    if (additionalText.style.display === "none" || additionalText.style.display === "") {
        additionalText.style.display = "block";
        readMoreBtn.innerText = "Read Less";
    } else {
        additionalText.style.display = "none";
        readMoreBtn.innerText = "Read More";
    }
}


 