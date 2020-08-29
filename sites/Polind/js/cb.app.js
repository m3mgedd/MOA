var sidebarLi = document.querySelectorAll(".sidebar li");

if(sidebarLi !== null) {
    for(i = 0; i < sidebarLi.length; i++){
        sidebarLi[i].addEventListener('click', () => {
            sidebarLi[i].classList.add("active");
        });
    }
}