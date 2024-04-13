function deuCerto(email, pass){
    if(email=="admin" && pass=="1234"){
        alert("Deu certo!")
        window.open("../pages/home.html","_blank");
        //openTab("pages/home.html","_blank");
    }else{
        alert("Credenciais inválidas.\nTente novamente.")
    }


    
}

function souBurro(){
    alert("Pergunte ao Fabio como acessar\nObrigado!")
}
