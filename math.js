/**
 * Objecto Math
 * 
 * solo tiene propiedades y metodo estaticos
 * 
 * metodos
 * 
 * .max(a,b,c,d);
 * .min(a,b,c,d....n);
 * .random(); -> numero aletoriao 0-1
 * .floor() -> redonde hacia abajo un decimal
 * .ceil()-> redonde hacia arriba un decimal
 * .round() redondea un decimal a su entero mas cercano
 * .pow(x,n)-> eleve x al exponenete
 * .sqrt(n)->la raiz de n 
 * 
 */
//hi
const randomValor = 100;
let arr = [1,2,3,4,5,6]
console.log(Math.max(...arr));//espress operator
console.log(Math.min(...arr));//espress operator
console.log(Math.floor(Math.random()*randomValor));
let gerRandoNumber =(min,max)=>
{
   return  Math.floor(Math.random()*(max-min) + min );
}

console.log(gerRandoNumber(5,10));
let array = ['jose','calors','rebeca','pepe','pedro','juan'];
console.log(array[gerRandoNumber(0,array.length)]);
let count =0;
let guestNumber = numMachine => 
{
    let numPlayer;
    do {
        numPlayer=Number(prompt('adivina el numero d ela maquina'));
        count++;
        if(numPlayer>numMachine)
        {
            alert(`tu numero es mayor que el de la maquina intentos :${count}`)
            
        }
        else if(numPlayer<numMachine)
        {
            alert( `tu numero es menor que el de la maquina intentos :${count}`);
            
        }
        else
        {
            alert('adivinaste el numero');
        }
    } while (numPlayer!=numMachine);
}
//guestNumber(gerRandoNumber(1,10));