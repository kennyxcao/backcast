var Videos = Backbone.Collection.extend({

  model: Video,

  defaultSearch: 'penguins',

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function(data) {
    if (!data) {
      this.search(this.defaultSearch);
    }
  },

  search: function(query) {
    this.fetch({data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      q: query, 
      maxResults: '5', 
      key: YOUTUBE_API_KEY },
      success: function(response) {
        console.log('successful fetch');
        if (response.at(0)) {
          response.at(0).select();
        }
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
