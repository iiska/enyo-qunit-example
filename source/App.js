enyo.kind({
  name: "App",
  kind: "FittableRows",
  fit: true,
  components:[
    {kind: "HeaderBar"},
    {kind: enyo.Scroller, fit: true, components: [
      {kind: "Photos", fit: true}
    ]}
  ]
});
