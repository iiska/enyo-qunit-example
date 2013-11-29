module("Simple example tests");

test("HeaderBar kind is defined", function() {
  ok(HeaderBar);
});

test("HeaderBar is able to be rendered", function() {
  var node = document.getElementById("qunit-fixture");
  var bar = new HeaderBar().renderInto(node);

  ok(bar);
  ok(bar.hasNode());
});
