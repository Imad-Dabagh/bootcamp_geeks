// Part I:
const makeJuice = (size) => {
  const addIngredients = (ingredient1, ingredient2, ingredient3) => {
    document.write(
      `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`
    );
    document.write("<br>");
  };

  addIngredients("Banana", "Apple", "Milk");
};

makeJuice("large");

// Part II:
const makeJuice2 = (size) => {
  let ingredients = [];

  const addIngredients = (ingredient1, ingredient2, ingredient3) => {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  };

  const displayJuice = () => {
    document.write(
      `The client wants a ${size} juice, containing: ${ingredients.join(", ")}`
    );
  };

  addIngredients("Banana", "Apple", "Milk");
  addIngredients("Orange", "Sugar", "Cream");

  displayJuice();
};

makeJuice2("large");