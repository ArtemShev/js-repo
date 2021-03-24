"use strict"

//1

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(`${i} – это ноль`)
    }
    if (i % 2 == 1) {
        console.log(`${i} – нечетное число`)
    } else if (i % 2 == 0) {
        console.log(`${i} – четное число`)
    }
}

//2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//3

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function sale(product) {
    product.price = product.price - (product.price / 100 * 15);
})

console.log(products);


//4

const products2 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


const productsWthPhoto = products2.filter(product => product.photos > []);
console.log(productsWthPhoto)

products2.sort(function compare(product1, product2) {
    if (product1.price > product2.price) {
        return 1;
    }
    if (product1.price < product2.price) {
        return -1
    }
    if (product1.price == product2.price) {
        return 0
    }
});
console.log(products2)

//6

let x = "";
for (let i = 1; i < 21; i++) {
    x += "x"
    console.log(x);
}