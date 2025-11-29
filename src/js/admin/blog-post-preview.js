var blogPostPreviewTemplate = createClass({
  render: function() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    return h('div', {"className": "container"},
      h('article', {}, 
        h('h1', {}, entry.getIn(['data', 'title'])),
        h('div', {"className": "text"}, this.props.widgetFor('body'))
      ),
    );
  }
});

window.addEventListener("DOMContentLoaded", function() {
  CMS.registerPreviewStyle("/css/blog/preview.css?v={% version %}");
  CMS.registerPreviewTemplate("blog", blogPostPreviewTemplate);
});