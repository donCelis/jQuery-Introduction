//Manipular el DOM

//Editar texto
/* $(".btn-danger").on("click", () => {
  $("p").text("Hola Mundo");
}); */

//Editar html
/* $(".btn-danger").on("click", () => {
  $("p").html('<a href="#">Hola Mundo</a>');
}); */

//Editar atributos
/* $(".btn-danger").on("click", () => {
  $('.img-fluid').attr('src', './images/file1.jpg')
}); */

$(".agregar").on("click", (e) => {
  //Evita que el navegador se refresque
  e.preventDefault();

  //Captura el input y el valor
  let contentTag = $("#contenido"),
    valueTag = contentTag.val();

  //Función para crear las columnas
  const addCol = (text) => {
    let template = `
      <div class="col-md-3 mb-3">
        <div class="content bg-dark text-light p-3 rounded">
          <p>
            ${text}
          </p>
        </div>
      </div>`;
    return template;
  };

  //Valida que el input no esté vacio
  if (valueTag === "") {
    contentTag.after('<p class="text-danger mt-2">Campo vacio</p>');
  } else {
    //Agrega columnas al row
    $("#columns").append(addCol(valueTag));
    //Borrar el contenido del placeholder
    contentTag.val("");
  }

  //Borrar las columnas en determinado tiempo
  /* setTimeout(()=>{
    $(".row .content").remove()
  }, 5000) */
});

//Editar clases
console.log();

$(".btn-danger")
  .eq(0)
  .on("click", (e) => {
    $(e.currentTarget).toggleClass("btn-danger");
    $(e.currentTarget).toggleClass("btn-info");
    $(e.currentTarget).css({fontSize: '2em', color: "red"});
  });