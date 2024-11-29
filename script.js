document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registro-form");
    const lista = document.getElementById("lista");

    const carregarRegistros = () => {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        lista.innerHTML = "";
        registros.forEach((registro, index) => {
            const li = document.createElement("li");
            li.textContent = registro;
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", () => {
                removerRegistro(index);
            });
            li.appendChild(removerBtn);
            lista.appendChild(li);
        });
    };

    const adicionarRegistro = (registro) => {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.push(registro);
        localStorage.setItem("registros", JSON.stringify(registros));
        carregarRegistros();
    };

    const removerRegistro = (index) => {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.splice(index, 1);
        localStorage.setItem("registros", JSON.stringify(registros));
        carregarRegistros();
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const registro = document.getElementById("registro").value;
        if (registro.trim()) {
            adicionarRegistro(registro);
            form.reset();
        }
    });

    carregarRegistros();
});
