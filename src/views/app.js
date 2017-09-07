var AppView = Backbone.View.extend({

  el: '#app',

  defaultSearch: 'food',

  initialize: function() {

    this.videos = new Videos();
    this.videos.search(this.defaultSearch);

    setTimeout(this.render.bind(this), 200);
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
