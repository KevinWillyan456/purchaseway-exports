const btnStart = $("#start-button");
const header = $(".cabecalho");
const footer = $(".rodape");

btnStart.click(() => {
  header.addClass("hidden-element");
  footer.addClass("hidden-element");
});

console.log(btnStart);
