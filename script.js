const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector("#fruitSection ul");
const fruitNutrition = document.querySelector("#nutritionSection p");


let cal = 0
const fruitCal = {};
const apiKey = "58059137-c84e0b00ba703056395c58e25";

fruitForm.addEventListener('submit', extractFruit);

function extractFruit(e){
    e.preventDefault();
    fetchFruitData(e.target.fruitInput.value);
    e.target.fruitInput.value = "";
}

function addFruit(fruit){
    // not adding empty inputs
    // if (!fruit.trim()) return;
    const li = document.createElement('li');
    li.textContent = fruit.name;
    li.dataset.calories = fruit.nutritions.calories;
    //  when you click on the fruit it will be removed
    li.addEventListener('click', removeFruit)
    fruitList.appendChild(li);

    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal
}

function removeFruit(e){
    const li = e.currentTarget;
    cal -= Number(li.dataset.calories);
    fruitNutrition.textContent = cal;
    li.remove();
}

// function fetchFruitData(fruit){
//     fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
//     .then(processResponse)
//     .then(data => addFruit(data))
//     .catch(e => console.log(e))
// }


// function processResponse(resp){
//     if(resp.ok){
//         return resp.json}
//         else {
//             throw "Error: htp status code =" + resp.status
//         }
//     }
    

async function fetchFruitData(fruit) {
    try {
        const respData = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);
        const respImg = await fetch(`https://pixabay.com/api/?q=${fruit}+fruit&key=${apiKey}`);

        if (respData.ok && respImg.ok) {
            const data = await respData.json();
            const imgData = await respImg.json();
            addFruit(data, imgData);
        } else {
            throw "Something has gone wrong with one of the API requests = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}
