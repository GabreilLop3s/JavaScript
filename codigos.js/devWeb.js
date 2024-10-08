// Cadastro de Usuário
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    
    // Armazenamento de dados
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        dataNascimento: dataNascimento
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Cadastro concluído com sucesso!');
});

// Login do Usuário
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verifica se o email corresponde ao cadastrado
    if (usuario && usuario.email === loginEmail) {
        document.getElementById('mensagem').innerText = 'Seja bem-vindo,' + usuario.nome + 'ao Team Impacta!';
    } else {
        alert('Email não encontrado. Faça o cadastro primeiro.');
    }
});