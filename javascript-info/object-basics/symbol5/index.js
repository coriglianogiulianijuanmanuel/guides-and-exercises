"use strict";

// As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

// In order to read (create if absent) a symbol from the registry, use Symbol.for(key). That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log(id === idAgain); // true

// We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id2");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id2

// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

// That said, all symbols have the description property.
let globalSymbol = Symbol.for("name2");
let localSymbol = Symbol("name2");

console.log(Symbol.keyFor(globalSymbol)); // name2, a global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not a global symbol

console.log(localSymbol.description); // name2
