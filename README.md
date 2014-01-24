# create-uri
Create a URI in a simple human readable way.

## Usage
Any object keys not in the template URI will get added as params.

    createURI("/path/{id}", {
      id: "badger",
      ref: "mushroom",
      returnTo: "snake"
    }); // => "/path/badgerindex=3&ref=mushroom&returnTo=snake"

See <test/index.js> for more examples.


## License
MIT
