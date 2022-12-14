"use strict";

// Static properties and methods

// We can also assign a method to the class as a whole. Such methods are called static. In a class declaration, they are prepended by static keyword, like this:
class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

// That actually does the same as assigning it as a property directly:
class User2 {}

User2.staticMethod = function () {
  console.log(this === User2);
};

User2.staticMethod(); // true
// The value of this in User.staticMethod() call is the class constructor User itself (the “object before dot” rule).

// Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.

// For instance, we have Article objects and need a function to compare them. A natural solution would be to add Article.compare static method:
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

// Here Article.compare method stands “above” articles, as a means to compare them. It’s not a method of an article, but rather of the whole class.

// Another example would be a so-called “factory” method.

// Let’s say, we need multiple ways to create an article:
// 1. Create by given parameters (title, date etc).
// 2. Create an empty article with today’s date.
// 3. …or else somehow.

// The first way can be implemented by the constructor. And for the second one we can make a static method of the class, such as Article.createTodays() here:
class Article2 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article2.createTodays();

console.log(article.title); // Today's digest

// Now every time we need to create a today’s digest, we can call Article.createTodays(). Once again, that’s not a method of an article, but a method of the whole class.

// Static methods are also used in database-related classes to search/save/remove entries from the database, like this:

/* 
// assuming Article is a special class for managing articles
// static method to remove the article by id:
Article.remove({id: 12345});
*/

// Static methods aren’t available for individual objects
// Static methods are callable on classes, not on individual objects.
article.createTodays(); /// Error: article.createTodays is not a function
