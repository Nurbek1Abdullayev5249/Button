let request;
let i = 0;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const frame = document.getElementById("frame");
const getDiv = document.getElementsByClassName("dot");

// 60Hz
const performAnimation = () => {
    // requestAnimationFrame(performAnimation);
    getDiv[0].insertAdjacentHTML("afterend", "<div class='dot'></div>");
    console.log(i++);
};

start.addEventListener("click", function () {
    console.log(i);

    request=setInterval(performAnimation, 1000/60)
    // requestAnimationFrame(performAnimation);
});

stop.addEventListener("click", function () {
    clearInterval(request);
    // cancelAnimationFrame(performAnimation);
});
