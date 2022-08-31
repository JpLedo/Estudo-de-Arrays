
const array = ["Matheus"," João"," Igor"," Arthur"]
let menuInterativo;
let adicionar
do{
    menuInterativo = prompt(
        "Seja bem vindo a fila de espera\n" +
        "\nPacientes: Matheus, João, Igor, Arthur"+
         "\nPara cadastrar novo paciente (Digite 1)" +
         "\nPara chamar um paciente para consulta (Digite 2)"+
         "\nSair (Digite 5)");
    switch(menuInterativo){
        case "1":
            adicionar = prompt("Digite o nome do paciente que deseja adicionar ao fim da fila")
            array.push(adicionar);
            alert(array);
            // novo paciente    
        break;
        case "2":
            alert("Paciente chamado: " + array[0])
            array.shift();
            alert("Nova Fila: " + array);
            //Consultar paciente
        break;
        case "5":
            alert("Você escolheu sair... ")
            alert("Encerrando")
            break;
        default:
            alert("Opção inválida")
    }

}while(menuInterativo !== "5"){

}