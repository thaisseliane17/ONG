
const imagens = [
  "img/banner1.png",
  "img/banner2.png"
];

let index= 0;

const banner = document.getElementById("banner1");


setInterval(() => {
  index= (index + 1) % imagens.length;
  banner.src = imagens[index];
}, 2000); // troca a cada 3 segundos

//outro
let angulo = 0;

setInterval(() => {
    angulo += 5; // gira de 5 em 5 graus
    document.getElementById('imagem').style.transform = `rotate(${angulo}deg)`;
}, 50); // a cada 50 milissegundos
