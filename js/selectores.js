console.log("-----por etiqueta-----");
let tag = $("p");

tag.map((element, index) => {
  console.log(element, index);
});

console.log("-----por id-----");
let idTag = $("#main-page");

idTag.map((element, index) => {
  console.log(element, index);
});

console.log("-----por clase-----");
let classTag = $(".content");

classTag.map((element, index) => {
  console.log(element, index);
});
