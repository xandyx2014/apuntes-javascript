/**
 * 
 * un Evento es cualquier cosa q sucede en la aplicacion
 * 
 * Como reconocer los eventos disponibles en un objecto
 *  console.dir(obj)
 *  todo los que comienso con on son eventos
 * Como aplico una function a un evento
 * 
 * objecto.onEvenet=function(){}    (no recomendable)
 * onEvent = enento del objeto
 * Se recomienda usar addEventListener
 * objeto.addEventListener('event',function(){});
 * event: Es el Nombre del evento sin on
 * Eventos comunes
 * De mouse
 * 'click':cuando el usuaro hace click
 * 'dblclick'
 * 'mousedown'
 * 'mouseenter'
 * 'mouseLeave'
 * 'mousemove'
 * 'mouseout'
 * 'mouseover'
 * 'mouseup'
 * 'mousewheel'
 * 
 * DE TECLADO
 * 
 * 'keydown'
 * 'keyup'
 * 
 * de formulario
 * 'submit':cuando se envia el formulario
 * 'change':cambio de valor de un input
 * DE WINDOW
 * 'resize':cuando se redimensiona la venta
 * 'scroll':cuando se hace scrool
 * 'load':cuando se carga completamente la pagina webb
 * 'DOMContentLoaded':cuando se rendideriza el DOM
 * 
 */
let menu=document.getElementById('menu'),
menuLinks= [...menu.querySelectorAll('a')];
menuItems= [...menu.querySelectorAll('li')];
let items= document.querySelectorAll("li");
let newelement=document.createElement('li');

menu.addEventListener('click',(e)=>
{
   if (e.target.tagName==='A')
   console.log(e.target.textContent);
}
);
/**
 * Delegacion de enevtos
 *  
 * 
 */