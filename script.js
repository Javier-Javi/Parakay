const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const myImage = new Image(100, 110);
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = new Audio("aya.mp3");

//yes button        
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Halaaa rhennn ang ganda ganda mo!!!! Crush mo nga ako, love youuu!!! <3 ";
    gif.style.width = "380px";
    gif.src = "peach-cat-blushing.gif";
    myImage.src = 'RHEN.png';
    document.body.appendChild(myImage);
    audio.play();
    yesBtn.remove();
    noBtn.remove();
    

    //for mobile 
    if (window.innerWidth <= 800){
        gif.style.width = "100px";
    }

});

//for no button
noBtn.addEventListener("mouseover", moveNoButton); //desktop
noBtn.addEventListener("touchstart", moveNoButton); //mobile
    
function moveNoButton(){
    const noBtnReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtn.offsetWidth - 500; 
    const maxY = window.innerHeight - noBtn.offsetHeight - 500;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
