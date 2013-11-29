module("Example event handling tests");

test("HeaderBar triggers onButtonPressed when user taps it's button", function() {
  // Helper kind for catching events
  enyo.kind({
    name: "TestKind",
    kind: enyo.Control,

    components: [
      {name: "bar", kind: "HeaderBar", onButtonPressed: "handleEvent"}
    ],

    handleEvent: function(inSender, inEvent) {
      // Event is fired and bar component has provided data with it
      // that contains element named button with value 1
      equal(inEvent.button, 1);
    }
  });

  var node = document.getElementById("qunit-fixture");
  var obj = new TestKind().renderInto(node);

  // Trigger ontap from button
  obj.$.bar.$.button.bubble("ontap");
});
