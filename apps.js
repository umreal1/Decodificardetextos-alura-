var inputText = document.querySelector("#input_text");
var output = document.querySelector("#output_text");

function encriptitador() {
    var texto = inputText.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");
    
    document.getElementById("output_text").innerHTML = '<textarea readonly class="Estrutura__Conteudo__Texto__area__final__texto" id="output_text">' + resultCripto + '</textarea>' + '<button id="copiar" onclick="copiar()" class="Estrutura__Conteudo__Texto__area__final__botao">copiar</button>'

}

function descriptitador() {
    var texto = inputText.value;
    
    var resultDescripto = texto.replace(/enter/g, "e").replace(/ai/g, "a").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById("output_text").innerHTML = '<textarea readonly class="Estrutura__Conteudo__Texto__area__final__texto" id="output_text">' + resultDescripto + '</textarea>' + '<button id="copiar" onclick="copiar()" class="Estrutura__Conteudo__Texto__area__final__botao">copiar</button>'

}

   function copiar() {
    var textCop = document.getElementById("input_text");

    textCop.select();
    document.execCommand('copy');
}
