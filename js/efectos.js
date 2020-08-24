//Efectos
//$('p').hide()

//$('p').show()

/* $(".active").on("click", () => {
  $("p").toggle(1000);
}); */

/* $(".active").on("click", () => {
  $("p").toggle("fast");
}); */

/* $(".active").on("click", () => {
  $("p").toggle("slow");
}); */

//Animaciones
//$(".active").on("click", () => $("p").fadeToggle(1000));
//$(".active").on("click", () => $("p").fadeOut(1000));

//Ocultar un párrafo seleccionado
//$("p").on("click", (e) => $(e.currentTarget).fadeOut());
//Mostrar todos los párrafos
//$(".active").on("click", () => $(".row").fadeIn());

//Slide
//$(".slide").on("click", () => $(".row").slideToggle());

//Animate -> Solo anima valores en números

$(".animate").on("click", () => {
  if ($(".content").css("opacity") === "1") {
    $(".content").animate({ height: "50%", opacity: "0.5" });
  } else {
    $(".content").animate({ height: "100%", opacity: "1" });
  }
});