// como salvar cookies com data de validade
// document.cookie = "username=Rafael; expires:Thu, 14 Dec 2029 12:99 UTC"

// localStorage.setItem("Nome","Rafael")
let nome = ["A","B","C"]
let nomeJson = JSON.stringify(nome)
localStorage.setItem("nome",nomeJson)

console.log(localStorage.getItem("nome"))

// apaga todo o local storage
// localStorage.clear

// apaga um item do local storage
// localStorage.removeItem("nome")

// converter para JSON
// JSON.stringify(x)

// converter de JSON
// JSON.parse(a)