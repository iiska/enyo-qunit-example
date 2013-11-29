enyo.kind({
  name: "Photos",
  kind: enyo.Control,

  create: function() {
    this.inherited(arguments);

    new enyo.JsonpRequest({
      url: "http://api.flickr.com/services/feeds/photos_public.gne",
      callbackName: "jsoncallback"
    }).response(enyo.bind(this, "renderPhotos"))
      .go({
        id: "72148715@N00",
        per_page: 10,
        lang: "en-us",
        format: "json"
      });
  },

  renderPhotos: function(inSender, inResponse) {
    this.destroyClientControls();

    enyo.forEach(inResponse.items, function(item) {
      this.createComponent({
        tag: 'img',
        attributes: {
          src: item.media.m,
          title: item.title
        }
      });
    }, this);

    this.render();
  }
});
