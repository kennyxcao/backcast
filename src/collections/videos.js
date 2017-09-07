var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.on('change', this.sync, this);
  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({data: {q: query}});
  },

  parse: function(response) {
    return response.items;
  }

});
