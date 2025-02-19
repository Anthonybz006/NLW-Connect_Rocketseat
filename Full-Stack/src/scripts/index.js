const app = document.querySelector('#app')

const users = [

    {
        id: 0,
        email: 'teste@teste.com',
        phone: '22 999999999',
        refID: null
    },

    {
        id: 1,
        email: 'user1@nlwconnect.com',
        phone: '21 997584517',
        refID: 0
    },

]

// Esta função irá retornar o objeto do array users, se o e-mail do objeto for o mesmo do getInput 
const getUser = (userData) => {
    
    return users.find(  // Retorna o objeto do arrey se o valor for True
        user =>  user.email == userData.email  // Retorna True ou False se o e-mail de um objeto do array for igual ao do getInput        
    )  
}

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

        const user = getUser(userData)
        
        
        if (user) { // Será executado se o usuario existir no array (Quando retornar True)

        } else { // Ser executado se o usuário não existir no array (Quando retornar False)

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