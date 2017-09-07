var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.$el.html(this.template());
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
