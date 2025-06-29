const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image2");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;
        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");

        image.setAttribute("src", `img/iphone16_${id}.png`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 300);
    });
});