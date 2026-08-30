const mainScreen = document.getElementById("main-screen");
const menuScreen = document.getElementById("menu-screen");

const enterButton = document.getElementById("enter-button");
const backButton = document.getElementById("back-button");


// 입장
enterButton.addEventListener("click", () => {

    mainScreen.classList.remove("active");

    setTimeout(() => {
        menuScreen.classList.add("active");
    }, 300);

});


// 메인으로 돌아가기
backButton.addEventListener("click", () => {

    menuScreen.classList.remove("active");

    setTimeout(() => {
        mainScreen.classList.add("active");
    }, 300);

});