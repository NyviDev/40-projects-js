const buttons = document.querySelectorAll(".tab-container");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content"); 

about.addEventListener("click", (e) => {
    const dataID = e.target.dataset.id;

    if (dataID) {
        buttons.forEach((button) => {
            button.classList.remove("active")
            e.target.classList.add("active")
        })

        contents.forEach((content) => {
            content.classList.remove("active");
        })

        const element = document.getElementById(dataID);
        element.classList.add("active");
    }
})