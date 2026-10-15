const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
fruitForm.addEventListener('submit', extractFruit);
console.log(fruitList);

function extractFruit(e){
    e.preventDefault()
    addFruit(e.target.fruitInput.value);
    e.target.fruitInput.value = ""
}

function addFruit(fruit){
    // not adding empty inputs
    // if (!fruit.trim()) return;
    const li = document.createElement('li');
    li.textContent = fruit;
    //  when you click on the fruit it will be removed
    li.addEventListener('click', removeFruit)
    fruitList.appendChild(li);
}

function removeFruit(e){
    e.target.remove()
}