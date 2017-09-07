var Videos = Backbone.Collection.extend({

  model: Video,

  defaultSearch: 'food',

  initialize: function(data) {
    this.on('change', this.sync, this);
    // if (!data) {
    //   this.search(defaultSearch);
    // }
  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: query, 
      maxResults: '5', 
      key: 'AIzaSyAIG-suobEvTWkLwowDycvczklOccIjvAs'},
      success: function() {
        console.log('sucess');
      },
      error: function(e) {
        console.log('error:' + e);
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
