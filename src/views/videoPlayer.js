var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(model) {

    this.$el.html(this.template(model.attributes));
    console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
