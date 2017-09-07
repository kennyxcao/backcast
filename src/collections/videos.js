var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(data) {

  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    query = query || 'food';
    this.fetch({data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: query, 
      maxResults: '5', 
      key: 'AIzaSyAIG-suobEvTWkLwowDycvczklOccIjvAs'},
      success: function(response) {
        console.log('successful fetch');
        response.models[0].select();
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
