const inputs = document.querySelectorAll('.controls input');

function update() {
    if (this.name === "image") {
        console.log(this.value);
        const imgPath = URL.createObjectURL(this.files[0]);
        const img = document.querySelector('img');
        img.src = imgPath;
        console.log(img);
        return;
    }
    const root = document.documentElement;
    const suffix = this.dataset.sizing || '';
    // console.log(this.name, this.value, this.dataset.sizing);
    // console.log(root);
    root.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));


// console.log(inputs);