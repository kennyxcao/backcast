var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);

    //this.render();
    //console.log(this.$el.html());

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('div.video-list').html('');
    this.collection.forEach(this.renderVideoEntry, this);
    return this.$el;
  },

  renderVideoEntry: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.find('div.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
