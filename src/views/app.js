var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videosView = new VideoListView({collection: this.videos});
    this.videosView.collection = this.videos;
    this.render();
    //console.log(this.videosView.$el.html());
  },


  render: function() {
    //this.$el.html(this.template());
    this.$el.html(this.template({videoList: this.videosView.$el.html()}));
    console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
