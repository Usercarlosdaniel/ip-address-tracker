export function mostrarErro(erro) {
    document.getElementById("ip-input").style.border = "2px solid #FF7F7F";
    const error = document.getElementById("erro");
    error.innerText = erro.message || "Ocorreu um erro ao buscar o IP.";
    error.style = "color: #FF7F7F; text-align: center; margin-top: .5em";
    document.getElementById("submit-btn").style.backgroundColor = "#FF7F7F";

    setTimeout(() => {
        document.getElementById("ip-input").style = "";
        error.innerText = "";
        error.style = "";
        document.getElementById("submit-btn").style = "";
    }, 3000)
}
