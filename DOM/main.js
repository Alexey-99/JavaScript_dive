//document object model (DOM)

/* const div = document.getElementById('div'); */
const btn = document.getElementById('btn');

/* btn.addEventListener('click', () => {
     div.classList.toggle('hide'); 
    div.style.fontSize = '50px';
    div.style.color = 'red'
}); */

const showMessage = () => {
    alert('Ты нажал на кнопку');
}

btn.onclick = showMessage;
btn.addEventListener('click', () => {
    showMessage();
})

console.log(btn)
