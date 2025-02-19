const app = document.querySelector('#app') // Seleciona o elemento HTML onde o conteúdo será renderizado

const users = [ // Array que armazena os usuários e suas informações
    {
        id: 100,
        email: 'teste@exemplo.us',
        phone: '22 999999999',
        refID: null // refID indica o usuário que referenciou esse usuário
    },
    {
        id: 200,
        email: 'user1@nlwconnect.com',
        phone: '21 997584517',
        refID: 100 // Referenciado pelo usuário de id 100
    },
    {
        id: 300,
        email: 'ejemplo@ejemplo.mx',
        phone: '11 94686-7894',
        refID: 200 // Referenciado pelo usuário de id 200
    }
]

// Função para buscar um usuário pelo e-mail
const getUser = (userData) => {
    return users.find(user => user.email == userData.email) // Retorna o usuário correspondente ou undefined
}

// Função para salvar um novo usuário caso não exista
const saveUser = (userData) => {
    const newUser = {
        ...userData,
        id: Math.round(Math.random() * 200), // Gera um ID aleatório (pode gerar duplicatas)
        refID: 100 // Define um refID padrão (pode ser melhorado)
    }

    users.push(newUser) // Adiciona o novo usuário ao array
    console.log(newUser) // Exibe no console para debug
    return newUser // Retorna o novo usuário
}

// Função para contar quantas pessoas foram referenciadas pelo usuário
const getTotalSubscribers = (userData) => {
    const subs = users.filter(user => user.refID == userData.id) // Filtra usuários referenciados
    return subs.length // Retorna a quantidade
}

// Função para exibir o convite com o link e a contagem de inscritos
const showInvite = (userData) => {
    const content = `
    <input type="text" id="link" value="https://evento.com?=${userData.id}" disabled>
    <div id="status">
        <h4>${getTotalSubscribers(userData)}</h4>
        <p>Inscrições feitas</p>
    </div>
    `
    app.innerHTML = content // Atualiza a interface
}

// Função para gerenciar o formulário de entrada
const formActions = () => {
    const form = document.querySelector('#form')

    form.onsubmit = (event) => {
        event.preventDefault() // Previne o comportamento padrão do formulário
        
        const formData = new FormData(form) // Obtém os dados do formulário
        
        const userData = {
            email: formData.get('email'), // Captura o e-mail
            phone: formData.get('phone') // Captura o telefone
        }

        const user = getUser(userData) // Verifica se o usuário já existe
        
        if (user) { 
            showInvite(user) // Se existir, exibe o convite
        } else { 
            const newUser = saveUser(userData) // Se não existir, cria um novo usuário
            showInvite(newUser) // Exibe o convite para o novo usuário
        }
    }
}

// Função que inicia a aplicação
const startApp = () => {
    const content = `
        <form id="form">
            <input type="email" name="email" id="e-mail_input" class="e-mail" placeholder="E-mail">
            
            <input type="tel" name="phone" id="tel_input" class="tel" placeholder="Telefone">

            <button type="submit" class="convirmar" id="btn-confirmar">Confirmar</button>
        </form>
    `
    app.innerHTML = content // Renderiza o formulário inicial
    formActions() // Chama a função para tratar eventos do formulário
}

startApp() // Inicia a aplicação ao carregar a página

// Dicas de melhoria:
// 1. O ID gerado pode não ser único, uma melhor abordagem seria usar um UUID.
// 2. O refID fixo (100) pode ser substituído por uma lógica que identifique o referenciador.
// 3. Melhorar a estilização do formulário e mensagens de erro para experiência do usuário.
// 4. O e-mail deveria ser comparado de forma case-insensitive para evitar duplicatas acidentais.
