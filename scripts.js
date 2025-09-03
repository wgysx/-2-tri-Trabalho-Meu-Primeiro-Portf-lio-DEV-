// Exemplo de script simples para trocar o tema do site
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

// Exemplo de interação: Botão de troca de tema
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.createElement("button");
    themeButton.innerText = "Trocar Tema";
    themeButton.onclick = toggleTheme;
    document.body.appendChild(themeButton);
});

// Função para troca de tema (Dark mode)
const css = `
    .dark-theme {
        background-color: #333;
        color: white;
    }
    .dark-theme header {
        background-color: #222;
    }
    .dark-theme footer {
        background-color: #222;
    }
`;

const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
