// date requeire ser instanciado apr ausarse
let date = new Date(),
date2 =new Date();
date.setFullYear(1980);
date.setMinutes(58),
date.setHours(20);
date.setDate(21);
date.setMonth(11);

console.dir(date + "\n" + date2);
//metodos get del objeto Date
/**
 * .getFullYear()
 * .getMonth() 0->enero
 * .getHours()
 * .getSeconds()
 * .getMilliseconds()
 * .getDate -> fecha de mes
 * .getDay-> Dia de la semana 0->Domingo
 * .getTime() -> 1 de enero de 1970
 */ 
let date3 = new Date();
console.log(date3.getTime());
/**
 * eJERCISIO 1 imprimi9r la fecha y hora en nuestro 
 * formato personalisado
 */
 /**
 */
let date4 = new Date();
let objecto =
{
	nombre : 'andy',
	apellido:'macias'
}
function valor (objecto)
{
	objecto.nom
}

let getStringDay = day =>
{
    let days =['Domingo','lunes','martes','miercoles','jueves','viernes','Sabado'];
    return days[day.getDay()];
}
let getStringMonth = month =>
{
    let months =['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return months[month.getMonth()];
}
let dateFormated = `${getStringDay(date4)} de ${date4.getDate()} de ${getStringMonth(date4)}
de ${date4.getFullYear()} , 05:31pm`;
console.log(dateFormated);





