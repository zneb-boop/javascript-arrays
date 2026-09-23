let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

let isArray = Array.isArray(orders);
console.log(isArray);

let creditCardTypeOfBlindermann = orders[2].creditCardType;
console.log(creditCardTypeOfBlindermann);

orders[2].creditCardType = "visa";
let productQuantityOfJoannet = orders[3].productQuantity;
console.log(productQuantityOfJoannet);

let totalPurchaseOfDary = (orders[0].productPrice * orders[0].productQuantity) 
+(orders[1].productPrice * orders[1].productQuantity)
+(orders[2].productPrice * orders[2].productQuantity)
+(orders[3].productPrice * orders[3].productQuantity)
+(orders[4].productPrice * orders[4].productQuantity);
console.log("Totalpurchase of Celia Dary is " + totalPurchaseOfDary);