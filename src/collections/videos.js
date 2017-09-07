var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(data) {
    this.on('change', this.sync, this);
  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    var that = this;
    this.fetch({data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: query, 
      maxResults: '5', 
      key: 'AIzaSyAIG-suobEvTWkLwowDycvczklOccIjvAs'},
      success: function(response) {
        console.log('successiful fetch');
      },
      error: function(e) {
        console.log('fetch error:' + e);
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
