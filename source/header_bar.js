enyo.kind({
  name: 'HeaderBar',
  kind: 'onyx.Toolbar',

  events: {
    onButtonPressed: ""
  },

  components: [
    {name: "title", content: "Example Flickr photo listing"},
    {name: "button", kind: "onyx.Button", content: "Press this!", ontap: "handleButton"}
  ],

  handleButton: function(inSender, inEvent) {
    this.doButtonPressed({button: 1});
  }

});
