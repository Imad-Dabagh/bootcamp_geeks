// Exercise 1 : Location


const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// 1. Analyze the code. What will be the output?
// The output will be => I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// we assigned the each value to a varibale in line 14