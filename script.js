// Task 1
const user = {
    name:"Daniil",
    hobby:'games',
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for(let key of keys){
    console.log(`${key}: ${user[key]}`);
}

// Task 2

const countProps = obj => Object.keys(obj).length;
console.log(countProps({
    name:"Bob",
    age:15,
    grade:9,
    job:"none",
    hobby:"basketball",
}));

// Task 3

const findBestEmployee = employees => {
    const keys = Object.keys(employees);
    const values = Object.values(employees);
    return keys[values.indexOf(Math.max(...values))];
}
console.log(findBestEmployee({
    "Daniil":15,
    "Bob":21,
    "Denis":16,
    "Kevin":26,
}));

// Task 4

const countTotalSalary = employees => Object.values(employees)
    .reduce((acc,el) => acc+el,0);
console.log(countTotalSalary({
    "Daniil":12500,
    "Bob":10251,
    "Denis":13750,
    "Kevin":17758,
}));

// Task 5

const getAllPropValues = (arr, prop) => arr.map((el) => el[prop]);
const workers = [
    {
        name:'Daniil',
        age:15,
        experience:'1 year',
    },
    {
        name:'Bob',
        age:21,
        experience:'3 years',
    },
    {
        name:'Denis',
        age:16,
        experience:'2 years',
    },
    {
        name:'Kevin',
        age:26,
        experience:'4 years',
    },
];
console.log(getAllPropValues(workers,"age"));

// Task 6

const calculateTotalPrice = (allProducts, productName) => {
    const priceOfProduct = allProducts.find((el) => el.name === productName).price;
    const quantityOfProduct = allProducts.find((el) => el.name === productName).quantity;
    return priceOfProduct * quantityOfProduct;
};
const products = [
    {
        name:'banana',
        price:7,
        quantity:12,
    },
    {
        name:'juice',
        price:15,
        quantity:5,
    },
    {
        name:'sweets',
        price:23,
        quantity:2,
    },
    {
        name:'coockies',
        price:32,
        quantity:4,
    },
];
console.log(calculateTotalPrice(products,'banana'));
console.log(calculateTotalPrice(products,'juice'));
console.log(calculateTotalPrice(products,'sweets'));
console.log(calculateTotalPrice(products,'coockies'));