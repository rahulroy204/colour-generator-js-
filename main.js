const btn = document.querySelector("#btn");
// make rgb color generator
const rgbMaker = () => {
    const red = 24;
    const green = 42;
    const blue = 0;
    console.log(`rgb(${red},${green},${blue})`);
};
btn.addEventListener("click", () => {
    rgbMaker
})
console.log("hhh");