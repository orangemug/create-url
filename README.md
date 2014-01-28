# create-url
Create a URL/path in a simple human readable way.

[![browser support](https://ci.testling.com/orangemug/create-url.png)](https://ci.testling.com/orangemug/create-url)


## Install
Install the npm package and use [browserify](https://github.com/substack/http-browserify) or a simular tool to compile.

    npm install https://github.com/orangemug/create-url.git


## Usage
Any object keys not in the template URL will get added as params.

    var createURL = require("create-url");
    createURL("/path/{id}?index=3#section-{sectionNum}", {
      id: "badger",
      ref: "mushroom",
      sectionNum: 1
    }); // => "/path/badger?index=3&ref=mushroom#section-1"

See [tests](test/index.js) for more examples.


## License
MIT
