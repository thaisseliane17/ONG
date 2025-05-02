
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


//cookie

function setCookie(nome, valor, dias) {
  const data = new Date();
  data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expira = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + encodeURIComponent(valor) + ";" + expira + ";path=/";
}

// Função para ler cookie
function getCookie(nome) {
  const nomeEQ = nome + "=";
  const partes = document.cookie.split(';');
  for (let i = 0; i < partes.length; i++) {
    let c = partes[i].trim();
    if (c.indexOf(nomeEQ) === 0) {
      return decodeURIComponent(c.substring(nomeEQ.length));
    }
  }
  return null;
}

// Atualiza as informações da visita
function atualizarMensagem() {
  const nome = getCookie("nome");
  let visitas = parseInt(getCookie("visitas")) || 0;
  const ultimaVisita = getCookie("ultimaVisita");
  const agora = new Date().toLocaleString();

  visitas++;
  setCookie("visitas", visitas, 30);
  setCookie("ultimaVisita", agora, 30);

  const msg = document.getElementById("mensagem");

  if (nome) {
    msg.innerText = `Olá, ${nome}! Essa é sua visita nº ${visitas}. Última visita: ${ultimaVisita || 'esta é a primeira!'}`;
  } else {
    msg.innerText = `Olá! Essa é sua visita nº ${visitas}. Digite seu nome para personalizar.`;
  }
}

// Captura nome do formulário e salva em cookie
document.getElementById("formNome").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nomeUsuario").value;
  if (nome) {
    setCookie("nome", nome, 30);
    atualizarMensagem();
    document.getElementById("nomeUsuario").value = "";
  }
});

// Ao carregar a página
atualizarMensagem();