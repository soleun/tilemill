view = Backbone.View.extend();

view.prototype.events = {
    'click input[type=submit]': 'save'
};

view.prototype.initialize = function(options) {
    _(this).bindAll('render', 'save');
    this.render();
    this.new = !this.model.get('id');
};

view.prototype.render = function() {
    this.$('.content').html(templates.Stylesheet({
        model: this.model
    }));

    // Autofocus first field.
    this.$('input[type=text]:first').focus();
    return this;
};

view.prototype.save = function() {
    var attr = { id: this.$('input[name=id]').val() };
    var options = { error: function(m, e) { new views.Modal(e); } };
    if (this.model.set(attr, options)) {
        if (this.new) {
            this.model.collection.add(this.model);
        }
        this.$('.close').click();
    }
    return false;
};
