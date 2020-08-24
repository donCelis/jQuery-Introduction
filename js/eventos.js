let btnActive = $(".active");

//Con una función creada
function active() {
  console.log("click");
}

//btnActive.click(active)

//Función anónima
/* btnActive.click(function(){
  console.log('click')
}) */

//Función flecha
//btnActive.click(() => console.log('click') )

//btnActive.mouseenter((e) => console.log('Mouse Enter'))
//btnActive.mouseleave(() => console.log('Mouse Leave'))

//Pasar varios eventos a un selector
let events = {
  click: (e) => $(e.currentTarget).hide(),
  mouseenter: (e) => $(e.currentTarget).css('color', 'white'),
  mouseleave: (e) => $(e.currentTarget).css('color', 'red'),
  dblclick: () => console.log('Double Click')
};

btnActive.on(events);
