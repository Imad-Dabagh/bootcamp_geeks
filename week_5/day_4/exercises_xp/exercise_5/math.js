const add = (...numbers) => {
    let total = 0;
    numbers.forEach(number => total += number)
    return total
}

const multiple = (...numbers) => {
  let total = 1;
  numbers.forEach((number) => (total *= number));
  return total;
};

module.exports = {add, multiple}