import _ from 'lodash';

const products = [
    {
        "id": 1,
        "title": "Blue Stripe Stoneware Plate",
        "brand": "Kiriko",
        "price": 40,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "blue.jpg"
    },
    {
        "id": 2,
        "title": "Hand Painted Blue Flat Dish",
        "brand": "Kiriko",
        "price": 28,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
        "image": "hand-painted.jpg"
    },
    {
        "id": 3,
        "title": "Heme",
        "brand": "Dust & Form",
        "price": 52,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
        "image": "heme.jpg"
    },
    {
        "id": 4,
        "title": "Mashiko-Yaki Green Small Plate",
        "brand": "Kiriko",
        "price": 28,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "green.jpg"
    },
    {
        "id": 5,
        "title": "Mashiko-Yaki Indigo Small Plate",
        "brand": "Kiriko",
        "price": 28,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "indigo.jpg"
    },
    {
        "id": 6,
        "title": "Mashiko-Yaki Saucer",
        "brand": "Kiriko",
        "price": 18,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "saucer.jpg"
    }
];

const fakeAjaxProducts = new Promise(function(resolve) {
    setTimeout(() => resolve(products), 1000);
});

export const apiGetProductsByCategory = async (category) => {
    try {
        if(category) {
            const products = await fakeAjaxProducts;
            return products;    
        } else  {
            return [];
        }
    } catch(e) {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    }
    return [];
}

export const apiGetProductById = async (id) => {
    try {
        if(id) {
            const products = await fakeAjaxProducts;
            console.log(id);
            var matchProduct = _.find(products, function(product) { return product.id == id; });
            return matchProduct;    
        } else  {
            return {};
        }
    } catch(e) {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    }
    return [];
}


