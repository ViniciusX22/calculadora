var previousTheme = "light"; // tema atual/anterior (ao novo)
var themes = { // temas disponíveis
  "dark": {
    images: ["delete-white.png"],
    boxClass: "box-shadow-dark",
    bodyBgColor: "black",
    color: "white",
    boxBgColor: "#222"
  },
  "light": {
    images: ["delete-black.png"],
    boxClass: "box-shadow-light",
    bodyBgColor: "white",
    color: "black",
    boxBgColor: "#f0f0f0"
  },
  "ruby": {
	images: ['delete-white.png'],
	boxClass: "box-shadow-dark",
	bodyBgColor: "#BC0101",
	color: "white",
	boxBgColor: "#222"
  },
  "golden": {
	images: ['delete-white.png'],
	boxClass: "box-shadow-dark",
	bodyBgColor: "#CC9900",
	color: "white",
	boxBgColor: "black"
  }
}

function setTheme(theme) {
  theme = theme.toLowerCase(); // deixa em letra minúscula
  $("body").css({backgroundColor: themes[theme].bodyBgColor, color: themes[theme].color}); // muda a cor do fundo e da letra
  // muda a classe e a cor do fundo
  $("#box-calc").css("background-color",themes[theme].boxBgColor).addClass(themes[theme].boxClass).removeClass(themes[previousTheme].boxClass);
  // muda a cor do fundo do display para a mesma do fundo da página
  $("#display").css("background-color",themes[theme].bodyBgColor);
  // espera 1.8 segundos
  setTimeout(function(){
    // define as imagens correspondentes ao tema para os respectivos elementos img
    for (var i = 0; i < themes[theme].images.length; i++) {
      $(".image").eq(i).attr("src", "_images/"+themes[theme].images[i]);
    }
  }, 1800);
  previousTheme = theme; // define o tema anterior
}

$(function(){
  // define o tema
  setTheme("light");
  // roda a animação de entrada
  animation();
  // define os handlers para os botões
  $("#table-buttons td").click(getKey)
});

function animation(){
  $("#box-calc").addClass(themes[previousTheme].boxClass); // muda a classe para a animação
  setTimeout(function(){$("#box-buttons, #display").fadeIn(1500)}, 750); // em 1s exibe os botões com 2s de duração
}
