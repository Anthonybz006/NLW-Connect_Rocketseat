const app = document.querySelector('#app')

const users = [

    {
        id: 0,
        email: 'teste@teste.com.br',
        phone: '22 999999999',
        refID: null
    },

    {
        id: 1,
        email: 'user1@nlwconnect.com.br',
        phone: '21 997584517',
        refID: 0
    },

]

// Função para resetar a configuração original
const formActions = () => {
    const form = document.querySelector('#form')

    // Chamada quando o botão submit for clicado
    form.onsubmit = (event) => {
        event.preventDefault()

        // Coleta todos os valores dos inputs, pelo nome de cada elemento
        const formData = new FormData(form)

        const userData = {

            email: formData.get('email'),
            phone: formData.get('phone')
        }
    }
}

// Função principal
const startApp = () => {

    // Cria o formulário no formado de HTML
    const content = `
        <form id="form">
            <input type="email" name="email" id="e-mail_input" class="e-mail" placeholder="E-mail">
            
            <input type="tel" name="phone" id="tel_input" class="tel" placeholder="Telefone">

            <button type="submit" class="convirmar" id="btn-confirmar">Confirmar</button>
        </form>
    `

    // Adiciona o formulário em um elemento (nesse caso, com o id app) que esteja no arquivo .html
    app.innerHTML = content
    formActions() // Chama a fução com as funcionalidades do formulário
}

startApp()