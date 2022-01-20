document.addEventListener('DOMContentLoaded', () => {
    changeText("This is really cool!");
})

function changeText (string) {
   const p = document.querySelector('p');
   p.innerHTML = string

}

console.log('1st Place');