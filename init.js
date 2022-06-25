const stars = 1000;

for(let i = 0; i < stars; i++){
    let createStar = document.createElement("div");
    createStar.className = "stars";
    let random = randomStarsGenerator();
    createStar.style.left = random[0] + "px";
    createStar.style.top = random[1] + "px";
    document.body.append(createStar);
}
function randomStarsGenerator(){
    let x = window.innerWidth;
    let y = window.innerHeight;
    
    let random_x = Math.floor(Math.random()*x);
    let random_y = Math.floor(Math.random()*y);

    return [random_x, random_y];

}
