const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  // Create a copy of the cats array and add the new cat to the end
  const newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  // Create a new array with the provided cat name at the beginning
  return [name, ...cats];
}

function removeLastCat() {
  // Return a new array with the last cat removed
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // Return a new array with the first cat removed
  return cats.slice(1);
}

// Testing the functions
console.log("Original cats:", cats);

// Append a new cat destructively
destructivelyAppendCat("Broom");
console.log("After appending Broom:", cats);

// Prepend a new cat destructively
destructivelyPrependCat("Whiskers");
console.log("After prepending Whiskers:", cats);

// Remove the first cat destructively
destructivelyRemoveFirstCat();
console.log("After removing the first cat:", cats);

// Remove the last cat destructively
destructivelyRemoveLastCat();
console.log("After removing the last cat:", cats);

// Append a new cat without modifying the original array
const newCats = appendCat("Tom");
console.log("New cats array after appending Tom:", newCats);

// Prepend a new cat without modifying the original array
const prependedCats = prependCat("Snowball");
console.log("New array after prepending Snowball:", prependedCats);

// Remove the last cat without modifying the original array
const removedLastCat = removeLastCat();
console.log("New array after removing last cat:", removedLastCat);

// Remove the first cat without modifying the original array
const removedFirstCat = removeFirstCat();
console.log("New array after removing first cat:", removedFirstCat);
