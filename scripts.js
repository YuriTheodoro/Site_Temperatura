
const key = "cebcd482eda57fa9a6714c1c2ba91885"

function colocardadosnatela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
}

async function buscarcidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt-br&units=metric`).then(resposta => resposta.json())

    colocardadosnatela(dados)
  
}


function cliqueinobotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}
