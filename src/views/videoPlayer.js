var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(model) {
    if (model) {
      this.$el.html(this.template(model.attributes));
      return this.$el;
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
