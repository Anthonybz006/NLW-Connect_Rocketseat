const app = document.querySelector('#app')

// Função para resetar a configuração original
const formActions = () => {
    const form = document.querySelector('#form')

    // Chamada quando o botão submit for clicado
    form.onsubmit = (event) => {
        event.preventDefault()
    }
}

// Função principal
const startApp = () => {

    // Cria o formulário no formado de HTML
    const content = `
        <form id="form">
            <input type="email" name="email" id="e-mail_input" class="e-mail" placeholder="E-mail">
            <input type="tel" name="tel" id="tel_input" class="tel" placeholder="Telefone">

            <button type="submit" class="convirmar" id="btn-confirmar">Confirmar</button>
        </form>
    `

    // Adiciona o formulário em um elemento (nesse caso, com o id app) que esteja no arquivo .html
    app.innerHTML = content
    formActions() // Chama a fução com as funcionalidades do formulário
}

startApp()