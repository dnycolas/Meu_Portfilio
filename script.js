function myFunction() {
    let botaoSobre = document.getElementById("botaoSobre");

    let botaoPortfolio = document.getElementById("botaoPortfolio");

    let botaoContato = document.getElementById("botaoContato")

    const verificador = [true,false,false];

    const opacidades = ["opacity: 100%;","opacity: 50%;","opacity: 10%;"]


    if (verificador[0] == true && verificador[1] == false && verificador[2] == false){

        
    botaoSobre.setAttribute("style", `background-color: #151519;border: solid 1px wheat;color: white;font-size: 16px;animation: letrasEspaco 750ms ease normal;letter-spacing: 10px;${opacidades[0]}`)
    }
    if ((verificador[0] == true || verificador[0] == false) && verificador[1] == true && verificador[2] == false)
        
    botaoPortfolio.setAttribute("style", `background-color: #151519;border: solid 1px wheat;color: white;font-size: 16px;animation: letrasEspaco 750ms ease normal;letter-spacing: 10px;${opacidades[1]}`)
  }