function ValidarLogin() {
    var email = document.getElementById("email_input").value;
    var senha = document.getElementById("senha_input").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido");
        return;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        }),
    })
    .then(async resposta => {
        if (resposta.ok) {
            const dados = await resposta.json();
            sessionStorage.setItem("idUsuario", dados.idUsuario);
            sessionStorage.setItem("nomeUsuario", dados.nome);
            alert("Login bem-sucedido");
            window.location.href = "quiz.html"; // Redireciona para a página principal
        } else {
            const erro = await resposta.json();
            alert("Erro ao logar: " + erro.mensagem);
        }
    })
    .catch(erro => {
        console.error("Erro na requisição:", erro);
        alert("Erro de conexão com o servidor.");
    });
}