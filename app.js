function pesquisar() {

  // Selecionamos o elemento HTML com o ID "resultados-pesquisa"
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  console.log(campoPesquisa);
  
  // Se campoPesquisa for uma string sem nada. Finaliza a função
  if (!campoPesquisa){
    section.innerHTML = "<h2>Nenhum resultado encontrado.<h2>"
    return
  }

  //deixar minusculo o que o usario esta escrevendo e sendo guardado no campopesquisa
  campoPesquisa = campoPesquisa.toLowerCase()
  
  // Criamos uma string vazia para juntar/somar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  //Iteramos sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    //Se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
        //entao faca...
    // Construímos o HTML para cada item do resultado
    resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}</h2>
      <p class="descricao-meta">
      ${dado.descricao} <br>
      <a href="${dado.link}" target="_blank">Saber mais</a>
      </p>
    </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<h2>Nenhum resultado encontrado.<br> O Hall da Fama é Um grupo seleto. <br>Continue navegando!<h2>"
  }
    //Boas práticas para não ficar repetindo o inner.html
    //Atribuímos o HTML completo da seção de resultados
    section.innerHTML = resultados;
  }
