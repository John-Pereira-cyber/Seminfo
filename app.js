const participantes = [];

const formulario = document.getElementById("form-inscricao"); // variavel q recebe a informação do formulario
const mensagem = document.getElementById("mensagem"); // 
const tabela = document.getElementById("tabela-participantes"); // armazenas as informações da lista
const total = document.getElementById("total"); //manipulará o elemento q imprime o total

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idadeTexto = document.getElementById("idade").value;
    const idade = Number(idadeTexto);
    const curso = document.getElementById("curso").value;
    const matricula = document.getElementById("matricula").value.trim();
    const email = document.getElementById("email").value.trim();

    const modalidadeSelecionada = document.querySelector('input[name="modalidade"]:checked');
    const modalidade = modalidadeSelecionada?.value || "";

    const turnoSelecionado = document.querySelector('input[name="turno"]:checked');
    const turno = turnoSelecionado?.value || "";

    const minicurso = document.getElementById("minicurso").value.trim();

    const caixasMarcadas = document.querySelectorAll('input[name="evento"]:checked');

    const eventos = [];
    caixasMarcadas.forEach(function(caixa){
        eventos.push(caixa.value);
    });

    if(nome === '' || !Number.isInteger(idade) || idade < 1 || idade > 120 || email === '' || curso === ''){
        mensagem.innerText = "Preencha todos os campos corretamente!";
        mensagem.style.color ="red";
        return;
    }

const duplicado = participantes.some(function(p){
    return p.matricula === matricula || p.email === email;
});
if(duplicado){
    mensagem.innerText = "Email ou Matrícula já cadastrados!";
    mensagem.style.color = "red";
    return;
}
    const participante = {
        nome: nome,
        idade: idade,
        curso: curso,
        matricula: matricula,
        email: email,
        modalidade: modalidade,
        minicurso: minicurso,
        turno: turno,
        eventos: eventos
    };


    participantes.push(participante);

    mensagem.innerText = "Inscrição Realizada com Sucesso!";
    mensagem.style.color = "green";

    mostrarParticipantes();
    formulario.reset();
});
function mostrarParticipantes(){
    tabela.innerHTML = "";
    participantes.forEach(function(participante){
        const linha = document.createElement("tr");
        const dados = [
            participante.nome,
            participante.idade,
            participante.curso,
            participante.matricula,
            participante.email,
            participante.modalidade,
            participante.minicurso,
            participante.turno,
            participante.eventos.join(", " || "Nenhuma")
        ];
        dados.forEach(function(dado){
            const celula = document.createElement("td");
            celula.innerText = dado;
            linha.appendChild(celula);
        })
        tabela.appendChild(linha);
    });
    
    total.innerText = participantes.length;

        participante.email;
        lista.appendChild(item);
    ;
    total.innerText = participantes.length;
}

