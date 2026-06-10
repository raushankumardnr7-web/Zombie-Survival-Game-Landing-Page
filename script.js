function showMessage(){

alert(
"🎮 Game Launching Soon!"
);

}

function watchTrailer(){

window.open(
"https://youtu.be/PuzBdcpVyHI",
"_blank"
);

}

/* Floating particles */

for(let i=0;i<50;i++){

const particle =
document.createElement("div");

particle.style.position="fixed";

particle.style.width="3px";
particle.style.height="3px";

particle.style.background="#00ffcc";

particle.style.left=
Math.random()*100+"vw";

particle.style.top=
Math.random()*100+"vh";

particle.style.opacity=".6";

particle.style.pointerEvents="none";

document.body.appendChild(
particle
);

}