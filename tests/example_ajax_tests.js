module("Example Ajax tests");

test("Photos will call Flickr api when initialized", function() {

  enyo.JsonpRequest.prototype.go = function test() {
    ok(this.url.match(/^https?:\/\/api.flickr.com/));
  };

  var node = document.getElementById("qunit-fixture");
  var p = new Photos().renderInto(node).render();
});

asyncTest("Proper error message should be shown when request fails", function() {
  enyo.JsonpRequest.prototype.go = function test() {
    this.fail();
  };

  var node = document.getElementById("qunit-fixture");
  var p = new Photos().renderInto(node).render();

  setTimeout(function() {
    ok(p.$.error.getContent().match(/Unable to load/));
    start();
  }, 10);
});
