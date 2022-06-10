import './assets/sass/styles.scss';
import 'normalize.css/normalize.css';

console.log("hello from K 14 hhhhhh is not funny it is so sad ): i help in someday to i can to go from here to better pleacc")

// (function () {
//     const closeBanners = document.querySelectorAll(".c-banner__close");
//     closeBanners.forEach(closeBanners => {
//         closeBanner.addEventListener("click", event => {
//             const banner = event.target.parentNode;
//             banner.classList.add("collapse");
//         })
//     })
// })();

const closeBanners = document.querySelectorAll(".c-banner__close");
closeBanners.forEach(closeBanner => {
    closeBanner.addEventListener("click", function (event) {
        const banner = event.target.parentNode;
        banner.classList.add("collapse");


        // delete element after transition end
        banner.addEventListener("transitionend", function (event) {
            if (event.target === this) {
                this.remove();
            }
        })
    })
})