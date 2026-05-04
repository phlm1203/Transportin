// Função de alerta estilizado
function showError(element, message) {
    let error = document.createElement("div");
    error.classList.add("erro");
    error.innerText = message;
    element.insertAdjacentElement("afterend", error);

    setTimeout(() => error.remove(), 3000);
}

/* ------------------------------
   CADASTRO
--------------------------------*/
const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {
    cadastroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("cadastroEmail").value;
        const senha = document.getElementById("cadastroSenha").value;
        const confirmar = document.getElementById("confirmarSenha").value;

        if (senha !== confirmar) {
            showError(document.getElementById("confirmarSenha"), "As senhas não coincidem!");
            return;
        }

        // Salvar conta
        const usuario = {
            nome,
            email,
            senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Conta criada com sucesso!");
        window.location.href = "login.html";
    });
}

/* ------------------------------
   LOGIN
--------------------------------*/
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const senha = document.getElementById("loginSenha").value;

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario || usuario.email !== email || usuario.senha !== senha) {
            showError(document.getElementById("loginSenha"), "Email ou senha incorretos.");
            return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = "index.html"; // Página principal
    });
}
