let spans = document.querySelectorAll(".skillscontent span")
let section = document.querySelector(".skills")
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop ) {
        spans.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
}