/**
 * 
 * Timers
 * setTimeout(callback,time) espera n tiempo y luego ejecuta la funcion
 * setInterval(callback,time)  repite la funcion sierta cantidad de veces
 * 
 * 
 */
// let counter = (num) =>console.log( ++num);
// // console.log(counter(1));
//  setTimeout(()=>{counter(1)}, 1000);
//  let count =0;
// let myInterval = setInterval(function()
// {
//     console.log(++count)
//     if (count==5) {
//         clearInterval(myInterval);
//     }

// },1000);

/**
 * Ejercisio reloj:
 */
let reloj  = setInterval(function()
{
    document.body.innerHTML=new Date().toLocaleTimeString();
},1000)
let count=5;
/*let myInterval = setInterval(
function()
{
    console.log(--count);
     if (count==0) {
         clearInterval(myInterval);
         alert('fin');
     }
},1000);*/
