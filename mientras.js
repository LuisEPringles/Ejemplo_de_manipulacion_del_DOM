const h1 = document.querySelector('h1');
const valor1 = document.querySelector('#calculo1');
const valor2 = document.querySelector('#calculo2');
const btn =document.querySelector('#botoncito')
const parrafo= document.querySelector('#pid');
// const te = document.createElement('img');
// te.setAttribute("src",'./assets/play-icon.png')
// console.log(valorInput.value);

// parrafo.innerHTML=""
// parrafo.append(te);

// h1.innerHTML='Patito feo';
btn.addEventListener('click', delBoton);

function delBoton(){
   const resulta = valor1.value + valor2.value;
   
   parrafo.innerText= resulta;
}