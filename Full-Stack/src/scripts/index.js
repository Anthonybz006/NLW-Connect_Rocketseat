const app = document.querySelector('#app')

// Função para resetar a configuração original
const formActions = () => {
    const form = document.querySelector('#form')

    form.onsubmit = (event) => {
        event.preventDefault()
    }
}

const startApp = () => {
    const content = `
        <form id="form">
            <input type="email" name="email" id="e-mail_input" class="e-mail" placeholder="E-mail">
            <input type="tel" name="tel" id="tel_input" class="tel" placeholder="Telefone">

            <button type="submit" class="convirmar" id="btn-confirmar">Confirmar</button>
        </form>
    `

    app.innerHTML = content
    formActions()
}

startApp()