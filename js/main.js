function clicar(){
    document.getElementById("click").innerHTML = "Obrigado por clicar!";
    // alert("Você clicou no botão!");
}

function redireciona(){
    window.open("https://www.facebook.com/"); // abre a página que vc redirecionou em outra aba
    // window.location.href = "https://www.facebook.com/"; abre a pagina que vc redirecionou na mesma página/aba
}

function trocar(elemento){
    // document.getElementById("mousehover").innerHTML = "passou o mouse por cima";
    elemento.innerHTML = "passou o mouse por cima";
}

function voltar(elemento){
    // document.getElementById("mousehover").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
}

function funcaochange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));*/

/*function validadeIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validadeIdade(idade));
*/

// alert("Hello, World")

// var lista = ["maça", "pera", "laranja"];
// // lista.pop();
// lista.push("mamão");
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.join(" - "))

// var frutas = [{nome: "maçã", cor: "vermelha"},{nome:"uva", cor:"roxo"}];
// console.log(frutas);
// console.log(frutas[0].cor);

// var idade = prompt("Qual sua idade?");
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var count = 0;
// while(count <= 5){
//     alert(count);
//     count++;
// }

// var count;
// for(count = 0;count <= 5; count++){
//     alert(count);
// }
    
// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMonth()+1);