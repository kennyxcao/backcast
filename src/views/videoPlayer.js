var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(model) {
    console.log(model);

    //model = model || this.collection[0];
    if (model) {
      this.$el.html(this.template(model.attributes));
      return this.$el;
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
