const hbs = require('hbs');
let json = require('../db.json');
//helpers


hbs.registerHelper('available', function(id) {
    let valor = "";
    let bool;
    for (let index = 0; index < json.products.length; index++) {
        if (json.products[index].id === id) {
            bool = json.products[index].available;
        }

    }


    if (bool === true) {
        valor = "Disponible";

    } else {
        valor = "No disponible";
    }

    return valor;
});

hbs.registerHelper('best_seller', function(id) {
    let valor = "";
    let bool;
    for (let index = 0; index < json.products.length; index++) {
        if (json.products[index].id === id) {
            bool = json.products[index].best_seller;
        }

    }


    if (bool === true) {
        valor = "Mas vendido";

    } else {
        valor = "Menos vendido";
    }

    return valor;
});

hbs.registerHelper('categories', function(id) {
    let valor = "";
    let bool;
    let category;
    for (let index = 0; index < json.products.length; index++) {
        if (json.products[index].id === id) {
            bool = json.products[index].categories;
        }

    }
    if (bool.includes(1)) {
        category = "drinks"
    }
    if (bool.includes(2)) {
        category = "lunch"
    }
    if (bool.includes(3)) {
        category = "food"
    }
    if (bool.includes(4)) {
        category = "sea"
    }
    if (bool.includes(1) && bool.includes(2)) {
        category = "drinks, lunch"
    }
    if (bool.includes(1) && bool.includes(3)) {
        category = "drinks, food"
    }
    if (bool.includes(1) && bool.includes(4)) {
        category = "drinks, sea"
    }
    if (bool.includes(2) && bool.includes(3)) {
        category = "lunch, food"
    }
    if (bool.includes(2) && bool.includes(4)) {
        category = "lunch, sea"
    }

    // console.log(bool);



    return category;
});