// FUNÇÃO PARA FECHAR TODOS OS MODAIS
function fecharModal(){
    document.getElementById("modalDoacao").style.display = "none";
    document.getElementById("modalAmigo").style.display = "none";
    document.getElementById("modalAlianca").style.display = "none";
    document.getElementById("modalFamilia").style.display = "none";
    document.getElementById("modalEnviados").style.display = "none";
}

// MODAL PRINCIPAL
function abrirModal(){
    fecharModal();
    document.getElementById("modalDoacao").style.display = "flex";
}


// BOTÕES DOS PLANOS
document.getElementById("btnAmigo").addEventListener("click", function(){
    fecharModal();
    document.getElementById("modalAmigo").style.display = "flex";
});

document.getElementById("btnAlianca").addEventListener("click", function(){
    fecharModal();
    document.getElementById("modalAlianca").style.display = "flex";
});

document.getElementById("btnFamilia").addEventListener("click", function(){
    fecharModal();
    document.getElementById("modalFamilia").style.display = "flex";
});

document.getElementById("btnEnviados").addEventListener("click", function(){
    fecharModal();
    document.getElementById("modalEnviados").style.display = "flex";
});


// FECHAR CLICANDO FORA DO MODAL
window.onclick = function(event) {

    let modais = [
        "modalDoacao",
        "modalAmigo",
        "modalAlianca",
        "modalFamilia",
        "modalEnviados"
    ];

    modais.forEach(function(id){
        let modal = document.getElementById(id);
        if(event.target == modal){
            modal.style.display = "none";
        }
    });

}