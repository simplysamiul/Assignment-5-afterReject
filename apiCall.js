const searchHandler = () =>{
    const inputMeals = document.getElementById('inputMeal')
    const getInputMeals = inputMeals .value
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}';
    fetch(url)
    .then(res => res.json)
    .then(data => console.log(data.meals));
}





// fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
// .then(res => res.json())
// .then(data => displayFoodList(data.categories));

// const displayFoodList = foods =>{
//     const foodCatagoriesDiv = document.getElementById("foodCatagories");
//     for (let i = 0; i < foods.length; i++) {
//         const individualFood = foods[i];
//         const individualFoodDiv = document.createElement("div");

//         const foodInfo = `
//         <div class ="foodCard">
//         <div class="card">
//         <img class="bg-dark" src="${individualFood.strCategoryThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//         <button class="btn" onclick="displayFoodDetails('${individualFood.strCategory}')">${individualFood.strCategory}</button>
//         </div>
//         </div>
//         </div>
//         `;
//         individualFoodDiv.innerHTML = foodInfo;
//         foodCatagoriesDiv.appendChild(individualFoodDiv);
//     }
// }

// const displayFoodDetails = name =>{
//     console.log(name);

// }