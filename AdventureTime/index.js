const openMenuBtn = document.querySelector(".menu .burger-btn");
const closeMenuBtn = document.querySelector(".menu .close-btn");
const showMenu = gsap.timeline()
showMenu.to(".list-items", {
  x: "-100%",
  duration: 0.5,
  ease: "power1.out",
});
showMenu.pause();
openMenuBtn.addEventListener("click", () => {
  showMenu.play();
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "flex";

});
closeMenuBtn.addEventListener("click",()=>{
    showMenu.reverse()
    openMenuBtn.style.display = "flex";
    closeMenuBtn.style.display = "none";
})
