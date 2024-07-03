export default function uploadRecipes(recipes) {
  recipes.forEach(uploadRecipe);
}

function uploadRecipe(recipe) {
  //recipe.macros = JSON.stringify(recipe.macros);
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    data: recipe,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:1337/api/recipes', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}
