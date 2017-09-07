var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videosView = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    this.videos.trigger('sync');
    this.videos.at(1).select();
    //console.log(this.videos[1].set('a', 1));
    this.render();
  },


  render: function() {
    //this.$el.html(this.template());
    this.$el.html(this.template({videoList: this.videosView.$el.html(), videoPlayer: this.videoPlayer.$el.html()}));
    //console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
