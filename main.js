const form = document.querySelector("form");
const input = document.querySelector(".computation");
const buttons = document.querySelectorAll('button')
form.onclick = (e) => {
  e.preventDefault();
};
handleCancel = () => {
  input.value = ''
};

// input.removeEventListener('focus')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.target.classList.toggle('pressed')
        setTimeout(() => {
            e.target.classList.toggle("pressed");
        },200)
    })
})