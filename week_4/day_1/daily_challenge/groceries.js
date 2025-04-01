let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    })
}

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  // 2.1 Will we also see this modification in the user variable ? Why ?
  // No, because 'user' got a copy of 'client' value, so even if we chnage 'client' the variable 'user' won't be affected

  let shopping = groceries;
  shopping.totalPrice = "35$";

  // 2.2.1 Will we also see this modification in the shopping object ? Why ?
  // Yes, because objects are passed by reference, so changing 'shopping' will also change 'groceries' because they both refer to the same object.

  shopping.other.paid = false;

  // 2.2.2 Will we also see this modification in the shopping object ? Why ?
  // Yes, because objects are passed by reference, so changing 'shopping' will also change 'groceries' because they both refer to the same object.
};

cloneGroceries();