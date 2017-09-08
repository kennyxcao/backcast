var SearchView = Backbone.View.extend({

  lastSearch: '',

  initialize: function() {
    setInterval(this.autoRefresh.bind(this), 1500);
  },

  events: {
    'click button': 'handleClick',
    'keyup input': 'enterAction'
  },

  autoRefresh: function() {
    var searchInput = this.$el.find('input').val();
    if (searchInput && searchInput !== this.lastSearch) {
      this.collection.search(searchInput);
      this.lastSearch = searchInput;
    }
  },

  enterAction: function(e) {
    if (e.which === 13) {
      this.handleClick();
    }
  },

  handleClick: function() {
    this.collection.search(this.$el.find('input').val());
    this.$el.find('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
