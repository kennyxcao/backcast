var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.on('change', this.sync, this);
  },

  sync: function() {

  }

});
