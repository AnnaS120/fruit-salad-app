// REQUIRE 
// const x = require('./script2')

// const { clearScreenDown } = require("node:readline")

// console.log(x);

const fruitForm = document.querySelector('#inputSection form')
fruitForm.addEventListener('submit', extractFruit)

function extractFruit(e){
    e.preventDefault()
    console.log(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}