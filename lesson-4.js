"use strict"

//1.1

//es5

function Product(name, price) {
    this.name = name;
    this.price = price
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - this.price / 100 * 25;
}

const product1 = new Product('prod', 300);
product1.make25PercentDiscount();

console.log(product1)

//es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    make25PercentDiscount() {
        this.price = this.price - this.price / 100 * 25;
    }
}

const product2 = new Product('kek', 1000);
product2.make25PercentDiscount();
console.log(product2)



//1.2

// es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    this.text = prompt('Введите текст');
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const post1 = new AttachedPost('George', 'hahaha', 2002);
post1.edit();
post1.makeTextHighlighted();

console.log(post1);

// es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt('Введите текст');
    }

}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post2 = new AttachedPost('Paul', 'LMAO', 2001);
post2.edit();
post2.makeTextHighlighted();

console.log(post2);