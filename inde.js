
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

const names= document.getElementById("nam").value;
const email= document.getElementById("email").value;
const text= document.getElementById("text").value;
const textone= document.getElementById("textone").value;

const individual=[]
const person={
    name:names,
    email:email,
    text: text,
    textone: textone,
}
individual.push(person);

const individualString= JSON.stringify(individual);
localStorage.setItem("individual",individualString);
const savedIndividual= localStorage.getItem("individual");
console.log(savedIndividual);


alert("new Entry");

document.getElementById("form").reset();



})