/*Formulário de pesquisa  de artigos por categorias e palavras-chave.*/


// Função para filtrar os artigos com base na palavra-chave e categoria
function filterArticles() {
  // Obter valores dos campos de pesquisa
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categorySelect').value;
  
  // Obter todos os itens do menu
  const menuItems = document.querySelectorAll('.MenuItem');
  
  // Iterar sobre cada item do menu e aplicar filtros
  menuItems.forEach(item => {
      const itemCategory = item.querySelector('a').getAttribute('href').split('.')[0];
      const itemText = item.innerText.toLowerCase();
      
      // Verificar se o item deve ser exibido
      const matchesKeyword = keyword === '' || itemText.includes(keyword);
      const matchesCategory = category === '' || itemCategory.includes(category);
      
      if (matchesKeyword && matchesCategory) {
          item.style.display = '';
      } else {
          item.style.display = 'none';
      }
  });
}

// Adicionar um evento para o botão "Enter" ao campo de texto
document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      filterArticles();
  }
});


// Likes e Comentários
let contagemCurtidas = 0;

function curtirPost() {
    contagemCurtidas++;
    document.getElementById("curtidasCount").innerText = contagemCurtidas;
}

function mostrarCampoComentario() {
    const campoComentario = document.getElementById("campoComentario");
    if (campoComentario.style.display === "none") {
        campoComentario.style.display = "block";
    } else {
        campoComentario.style.display = "none";
    }
}

function adicionarComentario() {
    const comentarioInput = document.getElementById("comentarioInput");
    const comentariosDiv = document.getElementById("comentarios");

    if (comentarioInput.value.trim() !== "") {
        const novoComentario = document.createElement("div");
        novoComentario.className = "comentario-item";
        novoComentario.innerText = comentarioInput.value;
        comentariosDiv.appendChild(novoComentario);

        comentarioInput.value = ""; // Limpa o campo de comentário
        document.getElementById("campoComentario").style.display = "none"; // Esconde o campo de comentário
    }
}


//Notícia 2
let contagemCurtidas2 =0;
function curtirPost2(){
  contagemCurtidas2++;
  document.getElementById("curtidasCount2").innerText = contagemCurtidas2;
}

function mostrarCampoComment2(){
  const campoComment2 = document.getElementById("campoComment2");
  if(campoComment2.style.display === "none"){
    campoComment2.style.display = "block"
  }else{
    campoComment2.style.display = "none";
  }
}

function addComentario2(){
  const comentarioInput2 = document.getElementById("comentarioInput2");
  const comentariosDiv2 = document.getElementById("comentarios2");

  if(comentarioInput2.value.trim()!==""){
    const novoComentario2 = document.createElement("div");
    novoComentario2.className = "comentario2-item";
    novoComentario2.innerText = comentarioInput2.value;
    comentariosDiv2.appendChild(novoComentario2);

    comentarioInput2.value = ""; // Limpa o campo do comentário
    document.getElementById("campoComment2").style.display = "none"; // Esconde o campo do comentário

  }}


// Mostrar e ocultar conteúdo
function mostrarConteudoCompleto() {
  document.getElementById("conteudo-resumido").style.display = "none";
  document.getElementById("conteudo-completo").style.display = "block";
}

function ocultarConteudoCompleto() {
  document.getElementById("conteudo-resumido").style.display = "block";
  document.getElementById("conteudo-completo").style.display = "none";
}

// Notícia 2
function mostrarConteudoCompleto2() {
  document.getElementById("conteudo-resumido2").style.display = "none";
  document.getElementById("conteudo-completo2").style.display = "block";
}

function ocultarConteudoCompleto2() {
  document.getElementById("conteudo-resumido2").style.display = "block";
  document.getElementById("conteudo-completo2").style.display = "none";
}

// Notícia 4
function mostrarConteudoCompleto4() {
  document.getElementById("conteudo-resumido4").style.display = "none";
  document.getElementById("conteudo-completo4").style.display = "block";
}

function ocultarConteudoCompleto4() {
  document.getElementById("conteudo-resumido4").style.display = "block";
  document.getElementById("conteudo-completo4").style.display = "none";
}










const button = document.querySelector('#like');
const number = document.querySelector('#number');

button.addEventListener('click', () =>{
    let likeValue = document.querySelector('#number').textContent;
    let newValue = Number(likeValue) +1;
    button.classList.add('like');
    number.innerHTML = newValue;
});

// Botão para Ver mais
document.addEventListener('DOMContentLoaded', function(){
    const botaoMais = document.getElementById("botao-mais");
    const moreText = document.querySelector(".more-text");

    botaoMais.addEventListener("click", function(){
        if(moreText.style.display === "none"){
            moreText.style.display = "inline";
            botaoMais.textContent = "Ver menos";
        }else{
            moreText.style.display = "none";
            botaoMais.textContent = "Ver mais";
        }
    });
});


// Para cpmentar
document.addEventListener("DOMContentLoaded", function(){
  const comentarBtn = document.getElementById("comentar-btn");
  const comentarioFromSection = document.getElementById("comentario-from-section");
  const submitComment = document.getElementById("submit-comment");
  const commentInput = this.document.getElementById("comment-input");
  const comentariosSection = document.getElementById("comentarios-section");

  comentarBtn.addEventListener("click", function(){
    if(comentarioFromSection.style.display === "none" || comentarioFromSection.style.display === ""){
      comentarioFromSection.style.display = "block";
      comentarBtn.textContent = "Ocultar formulário";
    }else{
      comentarioFromSection.style.display = "none";
      comentarBtn.textContent= "Adicionar comentário";
    }
  });

  submitComment.addEventListener("click", function(){
    const commentText = commentInput.value.trim();
    if(commentText){
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.innerHTML = `<p> ${commentText}</p>`;
      comentariosSection.appendChild(commentDiv);
      commentInput.value = ""; //Limpa o input
    }else{
      alert("Por favor, escreva um comentário antes de enviar.")
    }
  });
});



// Comentários (Mostrar e ocultar)
document.addEventListener("DOMContentLoaded", function(){
  const comentarioBtn = document.getElementById("comentario-btn");
  const commentsSection = document.getElementById("comments-section");

  comentarioBtn.addEventListener("click", function(){
    if(commentsSection.style.display === "none"){
      commentsSection.style.display = "block";
      comentarioBtn.textContent = "Ocultar comentários";
    }else{
      commentsSection.style.display = "none";
      comentarioBtn.textContent = "Mostrar comentários";
    }
  });
});







// zoom na imagem



/* Acções de reações a comentários*/
document.addEventListener("DOMContentLoaded", () =>{
  const iconeLike = document.querySelector('.curtir');
  const iconeComentar = document.querySelector('.comentar');
  const addComentBtn = document.querySelector('.add-comentario');

  iconeLike.forEach(icone =>{
    let contadorLikes = 0;
    const contadorElemento = icone.nextElementSibling;

    icone.addEventListener('click', function (){
      contadorLikes++;
      contadorElemento.textContent = contadorLikes;
    });
  });

  iconeComentar.forEach(icone =>{
    icone.addEventListener('click', function(){
      const id = icone.getElementById('data-id');
      const campoComment = document.getElementById(`campo-comment-${id}`);
      campoComment.style.display = campoComment.style.display === 'none' || campoComment.style.display ===''? 'block' : 'none';
    });
  });

  addComentBtn.forEach(icone=>{
    icone.addEventListener('click', function(){
      const campoComment = botao.parentNode;
      const texto = campoComment.querySelector('.comentario-texto').value.atrim();
      const ComentariosDiv = campoComment.nextElementSibling;

      if(texto !== ''){
        const comentario = document.createElement('div');
        comentario.classList.add('comentario');
        comentario.textContent = texto;
        commentDiv.appendChild(comentario);
        campoComment.querySelector('.comentario-texto').value= '';
      }
    });
  });
});



/*
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  // Action to execute once the collapsible area is expanded
})


const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!


const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
  myModal.dispose()
})*/