// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // APPROACH ONE
  // const arr = str.split("");
  // arr.reverse();
  // return arr.join("");

  // APPROACH TWO
  // return str.split("").reverse().join("");

  // APPROACH THREE MORE MANUAL
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }

  return reversed;

  // APPROACH FOUR
  // debugger;
  // return str.split("").reduce((reversed, character) => {
  //   return character + reversed;
  // }, "");
}

reverse("asdf");

module.exports = reverse;
