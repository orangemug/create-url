# create-uri
Create a URI/path in a simple human readable way.

[![browser support](https://ci.testling.com/orangemug/create-uri.png)](https://ci.testling.com/orangemug/create-uri)


## Install
Install the npm package and use [browserify](https://github.com/substack/http-browserify) or a simular tool to compile.

    npm install https://github.com/orangemug/create-uri.git


## Usage
Any object keys not in the template URI will get added as params.

    var createURI = require("create-uri");
    createURI("/path/{id}#section-{sectionNum}", {
      id: "badger",
      ref: "mushroom",
      returnTo: "snake",
      sectionNum: 1
    }); // => "/path/badgerindex=3&ref=mushroom&returnTo=snake#section-1"

See [tests](test/index.js) for more examples.


## License
MIT
