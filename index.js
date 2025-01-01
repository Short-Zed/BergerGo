

// loading page
const loading_page = document.querySelector('.loading_page');
const logo_berger = loading_page.querySelector('img');


// this function hide loading page after 5 sec 
const loading = ()=>{

    logo_berger.classList.add("logo_berger-active");

    setTimeout(()=>{

        loading_page.style.display = "none";

    },5000);

}


window.addEventListener("load",()=>{

    loading();


});
