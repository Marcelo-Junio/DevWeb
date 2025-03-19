// Alterar dinamicamente o título a cada 3 segundos
document.getElementById("titulo");
let titulo = document.getElementById("titulo");
let botaoTitulo = document.getElementById("mudarTitulo");

let textos = ["Lasanha Tradicional", "Receita Especial!", "Delícia Italiana!"];
let index = 0;

    botaoTitulo.addEventListener("click", () => {
        index = (index + 1) % textos.length;
        titulo.textContent = textos[index];
    });

//Alterar a imagem ao passar o mouse
let img = document.getElementById("lasanhaImg");
img.addEventListener("mouseenter", () => {
    img.src = "https://static.itdg.com.br/images/360-240/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg";
});
img.addEventListener("mouseleave", () => {
    img.src = "lasanha.jpeg";
});

//Mudar o fundo ao clicar no botãoEEEE
let botaoFundo = document.getElementById("mudarFundo");
let cores = ["#2C95DB", "#DB572C", "#2CDB72", "#DB2C95"];
let indexCor = 0;

botaoFundo.addEventListener("click", () => {
    indexCor = (indexCor + 1) % cores.length;
    document.body.style.backgroundImage = `linear-gradient(to right, ${cores[indexCor]}, #40515C)`;
});

// Mostrar/Ocultar a lista de ingredientes
let botaoIngredientes = document.getElementById("toggleIngredientes");
let ingredientes = document.getElementById("ingredientes");

botaoIngredientes.addEventListener("click", () => {
    if (ingredientes.style.display === "none") {
        ingredientes.style.display = "block";
    } else {
        ingredientes.style.display = "none";
    }
});
