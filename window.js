/**
 * 
 * objecto window -> es el padre de todos los objectPosition: 
 * window.alert ();
 * window.console.log()
 */

 /**
  * 
  propiedades
  window.innerWidth
  window.innerHeight
  window.outerWidth
  window.outerHeight
  Coordeandadas de la venta

    window.screenX
      window.screenY
  ---Scroll
      
      window.scrollY
      window.scrollX
  --localStorage   
    sessionStorage
    Storage

  --Metoos de windows
  alert()
  prompt()
  confirm()
  
  --Manipular Ventana
  .open('url');
  .close();
  .getSelection();
  .getSelection().toString()
  .getComputerStyle(element)
  .scrollTo(x,y) : nos envia a la posicion x,y
  .scrollBy(x,y) :suma a la posicion x,y

  --history objecto     :historial de la seccion actual y la pestaña abierta
    .back()
    .forward()
    .go(n) :  n positivo (adelante) n  negativo atas
  */
  /**
   * navigator : Objecto
   * 
   * 
   * 
   * GeoLocation es un objecto con 3 metodos
   * .clearWatch()
   * .watchPosition()
   * .getCurrentPosition(succes[,error,options])
   * 
   * 
   */
  // let coords = navigator.geolocation.getCurrentPosition(function(geoPosition)
  // {
  //   let coords = geoPosition.coords,
  //   lat = coords.latitude,
  //   long = coords.longitude;
  //   console.log(lat,long);
  // });
  
  /**
   * Location : obtiene la ubicacion de la pagina acutal
   * .href : url
   * .pathname :ruta dentro del domunio
   * .origin : protocolo hostname
   * .protocol : protocola + hostname
   * .hostname : http , https
   * .host : hostname port
   * .port : puerto
   * .search : parametro de la busqueda ?=1
   * 
   */
  

  
   /* function getCurrentPosition(ContainerElement)
    {
      let url =location.href,
      links = [...ContainerElement.querySelectorAll('a')];
      links.map(link=>
        {
          if(link.href==url) return link.classList.add('active');
        });
    }
    getCurrentPosition(document.getElementById('menu'));*/
    
