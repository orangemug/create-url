var test      = require('tape');
var createURL = require("../index");

test('valid URL', function (t) {
  var rslt = createURL("/path/{id}", {
    id: "badger&snake"
  });

  t.equal(rslt, "/path/badger&snake");
  t.end();
});

test('valid URL with params', function (t) {
  var rslt = createURL("/path/{id}", {
    id: "badger&snake",
    index: 3,
    ref: "mushroom&mushroom"
  });

  t.equal(rslt, "/path/badger&snake?index=3&ref=mushroom%26mushroom");
  t.end();
});

test('valid URL with fragment', function (t) {
  var rslt = createURL("/path/{id}#section-{sectionNum}", {
    id: "badger&snake",
    index: 3,
    ref: "mushroom&mushroom",
    sectionNum: 1
  });

  t.equal(rslt, "/path/badger&snake?index=3&ref=mushroom%26mushroom#section-1");
  t.end();
});

test('valid URL with existing params', function (t) {
  var rslt = createURL("/path/{id}?num=3#section-{sectionNum}", {
    id: "badger&snake",
    index: 3,
    ref: "mushroom&mushroom",
    sectionNum: 1
  });

  t.equal(rslt, "/path/badger&snake?num=3&index=3&ref=mushroom%26mushroom#section-1");
  t.end();
});

test('return null when invalid', function (t) {
  var rslt = createURL("/path/{id}", {});

  t.notOk(rslt);
  t.end();
});
