document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões do menu
    const botoes = document.querySelectorAll(".menu button");

    // Seções
    const secoes = {
        botaoSobre: document.querySelector("#sobre"),
        botaoPortfolio: document.querySelector("#portfolio"),
        botaoContato: document.querySelector("#contato")
    };

    // Título do tópico
    const tituloTopico = document.querySelector("#tituloTopico");

    const texto = document.querySelector(".texto");

    const secoesSobre = document.querySelectorAll(".assuntos button");

    // Adiciona evento de clique a cada botão do menu
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões e redefine o estilo de fundo
            // Servira para ter a cor normal se clickar em outro botão
            botoes.forEach(btn => {
                btn.classList.remove("active");
                btn.style.backgroundColor = "transparent";
                btn.style.color = "black";
                btn.style.border = "solid 1px black"
            });

            // Adiciona a classe 'active' ao botão clicado e aplica o estilo de fundo
            botao.classList.add("active");
            botao.style.backgroundColor = "#151519";
            botao.style.color = "white";
            botao.style.border = "solid 1px wheat";

            // Oculta todas as seções de conteúdo
            Object.values(secoes).forEach(section => section.style.display = "none");

            // Exibe a seção de conteúdo correspondente ao botão clicado
            secoes[botao.id].style.display = "block";

            // Atualiza o texto do h2 com base no botão clicado
            switch (botao.id) {
                case "botaoSobre":
                    tituloTopico.textContent = "SOBRE";
                    break;
                case "botaoPortfolio":
                    tituloTopico.textContent = "PORTFÓLIO";
                    break;
                case "botaoContato":
                    tituloTopico.textContent = "CONTATO";
                    break;
            }

            switch (botao.id) {
                case "botaoSobre":
                    texto.textContent = "1";
                    break
            }
        });
    });
    

    secoesSobre.forEach(botaoSecoesSobre => {
        botaoSecoesSobre.addEventListener("click", () => {

            secoesSobre.forEach(subBtn => {
                subBtn.style.backgroundColor = "transparent";
                subBtn.style.color = "black";
                subBtn.style.border = "solid 1px black"
            })

            botaoSecoesSobre.style.backgroundColor = "#151519";
            botaoSecoesSobre.style.color = "white";
            botaoSecoesSobre.style.border = "solid 1px wheat";

            switch (botaoSecoesSobre.id) {
                case "sobreMim":
                    texto.textContent = "SOBRE MIM"
                    break;
                case "hobbies":
                    texto.textContent = "HOBBIES"
                    break;
                case "objetivos":
                    texto.textContent = "OBJETIVOS"
                    break;
            }
        })
    })
});
