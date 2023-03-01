const sliders = document.querySelectorAll(".slider input");

function CssUpdate() {
    console.log(this.value);
    const chiz = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + chiz);
}

sliders.forEach(slider => slider.addEventListener("change", CssUpdate));
sliders.forEach(slider => slider.addEventListener("mousemove", CssUpdate));