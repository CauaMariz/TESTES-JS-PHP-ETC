// Na linha 2, criei uma funcao com os parametros que vou usar para o this.valor=recebe parametro que está nos (). Na linha 11, o let recebe new Person,(Person recebe new/novos valores). Onde John, vai para firstName,(o this da linha 3), doe para lastName e assim por diante. No console.log faco aparecer no console o nome do let.NomeDoThisDaFunction
function Person(first, last, age, eye,local) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.LocalNasc=local
}


const myFather = new Person("John", "Doe", 90, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const dog=new Person('Alemao','doginho','9','Castanho','Brasil')

console.log("My father is " + myFather.age + ". My mother is " + myMother.age + "."); 

console.log(`Meu cachorro tem ${dog.age} anos. O nome dele é ${dog.firstName}. E a cor dos olhos dele é ${dog.eyeColor}. Ele nasceu no ${dog.LocalNasc}`)