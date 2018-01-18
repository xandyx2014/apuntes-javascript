let saludo = "hola";
let saludo2 =`Biendnevido, ${saludo}`;
// string (texto);
// number (numeros);
// boolean ()
let num=5;
let hola="hola";

console.log(hola.indexOf("a"));
for (let index = 0; index <= hola.length; index++) {

    console.log("hola" + index);

}
let contraseña="12345";
 /*do {
    contraseña=prompt("ingrese la contraseña");

} while (contraseña!="123");*/
contraseña=="3" ? console.log("Bienvenido"):console.log("incorrecto");
for(let variable_a_reccorer of contraseña)
{
    console.log(variable_a_reccorer);
}
let aray= [1,2,3,4];
//agrega al array al principioo
aray.push(666);
aray.unshift(1000,1001);
//elima un solo eleemnto sin parametros
//.pop() al final
//.shift() al inicio
let eliminado = aray.pop();
console.log(eliminado + " el numero eliminado");
//.join()
//lo q hace un array de un string trarsformar
//separador es por defecto una coma
console.log(aray.join("-"));
//splice();
//añade o quita elemento
//splice(indexacomensar,numberelementeaborrar,itemsadd)
//slice(indexacomensar,indexaterminar) seleciona los elementos a elimianr y crea otro array
aray.splice();
//Es7
//  parametro => // valor retornado
//()=>console.log("nueva fomra de funcion");
let numberarray= [1,2,3,4];
let numberindex=numberarray.findIndex(el=> el >3);
console.log(numberindex);
//iteradores
//son objetos q contiene un metodo next();
//ese metodo devuelve otro objeto con dos propiedades
//value , done
// .keys() .values() .entries()

let iterador =  numberarray.entries();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
//objetos
//propiedades y metodos
/*let myobjeto =
{
    proierdad:valor2,
    propiedad2:valor3
}*/
let yo=
{

    nombre:'andy',
    edad:19,
    paiz:'bolivia',
    coloresfavoritos:['blanco','negro'],
    hola:
    {
        saludodia:'buenos dias',
        saludonoche:'buenas noches'
    },
    saludo(){
    return 'buenos dias';

    }
}
//console.log(yo.hola.saludodia);
//operadores
//delete -> elimina una propiedad
// in ->devuelve tru si existe la propiedad


console.log(yo.hasOwnProperty('nombre'));

//es6
//copiar objeto
let yo2=Object.assign({},yo);
//asignar variables existentes a propiedades
let a= 'hola',b='mundo';
let miobjeto =
{
    a,b
}
//expresiones en propiedades
//
let myobject2=
{
    [a+b]:"...."
}
console.log(myobject2);
//3 metodos recorrer array sin utilisar ciclos
//.map()
//.filter()
//.reduce()
let myobjecto3=
[
     {
        nombre:'andy',
        calificacion:200
    },

    {
        nombre:'maria'
        ,
        calificacion:14
    },
    {
        nombre:'jose'
        ,
        calificacion:5
    },
    {
        nombre:'Pedro'
        ,
        calificacion:50
    }
]
let nuevoarray= myobjecto3.map(myobjecto3=> myobjecto3.nombre);
console.log(nuevoarray);
//filter(callback);
let estudiantesaprobados = myobjecto3.filter(myobjecto3 => myobjecto3.calificacion > 10);
console.log(estudiantesaprobados);
let estudiantesaprobadonombre= estudiantesaprobados.map(estudiantesaprobados=>estudiantesaprobados.nombre);
console.log(estudiantesaprobadonombre);

//reduce(callback(prev,current,[index,arra])[,initial])
let numeros=[2,4,6,8,10,70,80];
let suma = numeros.reduce((a,b)=>a+b);
console.log(suma);
let max = numeros.reduce((a,b)=> a>b?a:b);
/*a>b? a:b;
if(a>b) return a
else return b
*/
console.log(max);
let promedio = numeros.reduce((a,b,i,arra)=>
{
    b+=a;
    return i==arra.length-1? b/arra.length:b;
}
);
console.log(promedio);
// let mejorestudiante = numeros.reduce((a,b)=>a.);
let mejorestudiante= myobjecto3.reduce((a,b)=> {
    if (a.calificacion>b.calificacion)
    {
        return a

    }
    else
    {
        return b

    }

});
console.log(mejorestudiante);
//----------------------funciones----------------------------
// la funciones son bloques de codigo reutilizables
//
// function nombrefuncion(parametro1,parametro2,parametro3)
//{    //codigo     }
function sumar(a,b)
{
    return a+b;
}
console.log(sumar(5,4));
let obj =
{
    nombre: 'objecto',
    sumar(a,b)
    {
        return a+b;
    }
}
obj.sumar(5,3);

//funcion dentra de otra funcion
function restar(a)
{
    return function(b)
    {
        return a-b;
    }
}
let miresta= restar(5)(3);
console.log(miresta);
function restar2(a)
{
    return function ()
    {
        return a;
    }
}
console.log(restar2(5)());
// funciones autoinvocadas
let mimultiplicacion = (function multiplicar(a,b)
{
    return a*b;
})(5,2);
console.log(mimultiplicacion);

//scope en funciones patron de diseñp
//scope es un area donde las variables existen
(function(w,d)
{
    //bla bla bla
})(window,document);

//funcion construtura
let Paiz = function (nombre,monera)
{
    this.nombre=nombre;
    this.monera=monera;
};
let peru = new Paiz("Bolivia","Bolivianos");
console.log(peru.nombre);
// apply() y call()
//llamar una funcion indirectamente
function add(a,b,c,d)
{
    return a+b+c;
}
let valores = [2,3,4,5];
//let myadd=add(valores);
//console.log(myadd);
let myadd= add.apply(undefined,valores);
console.log(myadd);
//llamada
let myotheradd=add.call(undefined,2,3,4);
console.log(myotheradd);
//tipo de funciones
//funciones por deficion y por expresion
//definicion.-
function nombrefuncionpordefinicion()
{
    //cuerpo de la funciones
}
nombrefuncionpordefinicion();
//expresion
let funcionporexpression= function()
{
    //cuerpo de la funcion
}
funcionporexpression();
let c = console.log;
c('hola mundo');
//funciones nombradas y funcion anonimas
//las funciones con nombre pueden ser invocadas o llamarse de manera incursiva
//la funciones anonimas son pasadas como un callback o
//callback = es una funciones q es ejecutado por otra luego
//de un proceso
//elemento.addEventListener('click',function(){//cuerpo de la funcion anonima});
//funciones de flecha (arrow function)es6
//las funciones de fleca son funciones anonimas
//syntax :  (param1,param2,param3,....) = > //valor de retorno
let sumar123 = (a,b)=>a+b;
console.log(sumar123(55,4));
//para codigo mas largo para arrow function
let sumar1234= (a,c)=>
{
    if (a>c) {
        return a
    }
    return c;
};
console.log(sumar1234(10,5));
/*let potenciaalcuadrado = (a)=>
{
    if (typeof (a) =='number') {
        return a*a;
    }
}*/
let potenciaalcuadrado = (a) => typeof(a)=='number'?a*a:undefined;
let micuadro = potenciaalcuadrado(6);
console.log(micuadro);
let devuelveobjecto = (a,b)=>({a,b});
let myobjectodevuelto = devuelveobjecto(5,4);
console.log(myobjectodevuelto);
console.log(typeof (myobjectodevuelto));
//parametros
function sumar12345(a,b,c) {
    //operador
    return [...arguments].reduce((a,b)=>a+b);
}
console.log(sumar12345(2,4,6,8,10,12,14,16,19));
let numeros1231232 = [2,3,4,5,6];
//parametros de ems6 por defecto
function sumar312(a,b=2)
{
    return a+b;
}
console.log(sumar312(1));console.log(sumar312(1));
//parametrso rest
//parametros sin medida
//la funcion va a recibir cuanto parametrso quiera
//elements es un array
//
function parametrores(...elements) // (elemento_obligatorio,elementoolbigatorio,...elemnento sin limites)
{
  return elements.reduce((a,b)=>a+b);
}
console.log(parametrores(2,3,4,5,6,7,1000));
//scope es el ambito o contexto donde se eejecuta su funcion y existe
//sus varaibles
//





/* ---CLOSURES---- */   

function saludarexterno() {
    let saludo="hola"
    return function saludarinterno()
    {
        console.log(saludo);
    }
}
saludarexterno()();
function afuera ()
{
    let numero = 1;
    return function ()
    {
        numero++;
        console.log(numero);
    }
}
afuera()();
afuera()();
afuera()();
let aumentarnumero = afuera();
aumentarnumero();//output 2
aumentarnumero();// ouput 3
aumentarnumero();//output 4
//------------------this-----------------
let myobj12345=
{
    nombre:'Andy',
    saludar()
    {
        console.log(` hola ${this.nombre}` );
    }
}
'use strict';
myobj12345.saludar();
function checkthis()
{
    console.log(this);
}
checkthis();//output window object
//window es el super padre  el objecto global

        // lexical this
        /*function   Boy(edad)
        {
            this.edad=0;
            //setInterval(function,time);
            setInterval(()=>{this.edad++},1000);
        }
        let juanito = new Boy();*/