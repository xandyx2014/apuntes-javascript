/**
 * DOM :Document Obcjet Molde uno de lo mas importante
 * .body
 * .links
 * .scripts
 * .image
 * .head
 * .stylesheet
 * 
 * Obtener elemtos del DOM
 * document.getElementById('id')
 * document.querySelectorAll('cssSelector')
 * document.querySelector('cssSelector');
 * 
 * si no se encuentra el (los elementos) se devuelve null
 * querySelector() querySelectorAll()
 * se puede ejecutar desde el documento o desde un elemento
 * querySelectorAll() no devuelve un array,es necesario expandirlo
 * [...document.querySelectorAll(selector)]
 * 
 * let menu=document.getElementById('#id'),
 * menuLinks= [...menu.querySelectorAll('a')];
 * 
 * 
 * DOM traversing
 * ir moviendonos el el dom
 *  Hermanos
 *      element.nextElementSibling : hermano siguiente
 *      element.nextSibling :hermano siguiente (nodo) 
 *      element.previousElementSibling:hermano anterior
 *      elemente.previusSibling:hermano anterio (nodo)
 *  Padres
 * 
 *      element.parentElement:padre
 *      element.parentNode():padre(nodo)
 *  Hijos
 *      element.children:lista de hijos
 *      element.firstElementChild
 *      element.firstchild : primero hijo
 *      element.Lastchild:ultimo hijo
 *      element.LastElementChild     
 *      element.childNodes : todos los nodos hijos
 * 
 * Propiedades de los Elementos
 * 
 *  Contenido
 *      .textContent -> texto plano del elemento lectura y escritura
 *      .innerHtml : html de texto plano
 *      .attributes:atributos del eleemnto
 *  attributos
 *      .atrributes()
 *      .getAttribute('attr')
 *      .setAtribute('attr','value')
 *      .removeAttribute('attr')
 *  Clases
 *  .classList()
 *  .add('classname')
 *  .remove('clasname')
 *  .toggle('classname')
 * .contains('classname'):devuelte true si el elemente tiene esa classname
 * 
 * 
 * 
 * Estilos css
 * .style
 *  .cssProperty (usar calmeCase) //solo usarlos si vas  a hacerlo calculos
 * //para estilos dinamicos o efecto
 * 
 * 
 * 
 * 
 * 
 * Trasnformar el Dom
 * Crear elemento
 *      document.createElement('tagName')
 * Insertar Elementos
 *      Element.appendChild(childElement); insertar un elemento al final de l padre
 *          Elelem.parent.appendChild(eleemnto);
 * 
 *     Element.insertBefore(); :insertar un elemento antes del otro
 *          // Elementparent.insertBefore(newElement,nextElement);
 *                  *newElement = nuevoelelemtno
 *                  *nextElement : elemento ya existente
 * 
 * Eliminar y Mover Elemento 
 *      parent.removeChild(element)
 *          elimina element de part :devuelve el elemento q se ha eliminado
 *      element.remove(); devuelve undefined
 */        
let menu=document.getElementById('menu'),
 menuLinks= [...menu.querySelectorAll('a')];
 menuItems= [...menu.querySelectorAll('li')];
 let items= document.querySelectorAll("li");
 let newelement=document.createElement('li');
//  newelement.textContent='soy un nuevo eleemnto';
// let item = menuItems[0];
// menu.appendChild(newelement);
// menu.insertBefore(newelement,menuItems[0]);
// newelement.remove();
let el = menu.removeChild(menuItems[0]);
menu.appendChild(el);


// console.log(item)



