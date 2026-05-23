// Author: Gab-Darlin <Gabbie-Darlin>

//Parent class - Meal
class Meal{
    
    constructor(name, price, category) {
        this.name=name;
        this.price=price;
        this.category=category;

    }

    showInfomation() {
        return{
            name: this.name,
            price: this.price,
            category: this.category
        };
    }

    prepareMeal() {
        return `preparing meal`;
    }
}



// Creating child classes 

// Burger
class Burger extends Meal {
    constructor(name, price, category, hasCheese) {
        super(name, price, category);
        this.hasCheese = hasCheese;
    }

    prepareMeal() {
        return `Grilling the burger and preparing ingredients.`;
    }
}


// Pizza
class Pizza extends Meal {
    constructor(name, price, category, size) {
        super(name, price, category);
        this.size = size;
    }

    prepareMeal() {
        return `Baking the pizza in the oven.`;
    }
}


// Salad
class Salad extends Meal {
    constructor(name, price, category, dressing) {
        super(name, price, category);
        this.dressing = dressing;
    }

     prepareMeal() {
        return `Preparing fresh vegetables and adding dressing.`;
    }
}


//Creating Objects
const burger = new Burger(
    "Cheeseburger",
    50,
    "Beef",
    true
);

const pizza = new Pizza(
    "Pepperoni",
    70,
    "American-style",
    "jumbo"
);

const salad = new Salad(
    "Vegetable",
    65,
    "Green",
    "Vinaigrettes"
);

// Array with objects 
const menu = [burger, pizza, salad];


//Loop to iterate through array and print results.
menu.forEach((meal) => {
    console.log("=================================================");
    console.log(meal);
    console.log(meal.prepareMeal());
    console.log("=================================================");
});