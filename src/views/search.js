var SearchView = Backbone.View.extend({

  initialize: function() {

  },

  events: {
    'click button': 'handleClick',
    'keyup': 'enterAction'
  },

  enterAction: function(e) {
    if (e.which === 13) {
      this.handleClick();
    }
  },

  handleClick: function() {
    this.collection.search(this.$el.find('input').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
