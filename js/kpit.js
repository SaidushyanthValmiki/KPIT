// const dropdownItems = document.querySelectorAll(".navbar-nav .nav-item");
// var link = document.getElementsByClassName("solutions")
// dropdownItems.forEach(function (item) {
    // item.addEventListener("mouseenter", function () {
    //     var dropdownMenu = this.querySelector(".dropdown-menu");

    //     console.log(link)

    //     if (dropdownMenu) {
    //         dropdownMenu.style.display = "block";
    //         dropdownMenu.style.left = 0;
    //         dropdownMenu.style.marginTop = "";
        
    //     }
    // });

//     item.addEventListener("click", function (item) {
//         var dropdownMenu = this.querySelector(".dropdown-menu");
//         if (dropdownMenu) {
//             dropdownMenu.style.display = "none";
        
//         }
//     });
// });


const navEl = document.querySelector('.eeee');
const nav1 = document.querySelector('.eee1');


window.addEventListener('scroll', () => {
    if(window.scrollY >200) {
        navEl.classList.add('d-none');
        nav1.classList.remove('d-none')
        
    }
    else{
        navEl.classList.remove('d-none');
        nav1.classList.add('d-none')
        
    }
    
});
