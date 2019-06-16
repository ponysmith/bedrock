var fs = require ('hexo-fs');
var path = require('path');
var util = require('hexo-util');

/**
 * Build tabs for examples
 */
hexo.extend.tag.register('br_example_tabs', (args, content) => {
  let tabs;
  tabs = '<div class="example-tabs">';
  tabs += '<button class="example-tab example-tab-html active" data-target="example-html">Example</button>';
  tabs += '<button class="example-tab example-tab-code" data-target="example-code">Code</button>';
  tabs += '</div>';
  return tabs;
});


/**
 * Include file as html
 */
hexo.extend.tag.register('br_example_html', (args, content) => {
  
  var filename = args[0];
  var filepath = path.join(hexo.source_dir, filename);

  return fs.readFile(filepath)
    .then(function(content) {
      return '<div class="example-html active">' + content + '</div>';
    })
    .error(function(error) {
      return '<div class="br-message br-theme-error">' + error + '</div>';
    });

}, { async: true });


/**
 * Include file as code snippet
 */
hexo.extend.tag.register('br_example_code', (args, content) => {
  
  var filename = args[0];
  var type = args[1] || '';
  var filepath = path.join(hexo.source_dir, filename);

  return fs.readFile(filepath)
    .then(function(content) {
      var highlighted = util.highlight(content, { autoDetect: true });
      return '<div class="example-code">' + highlighted + '</div>';
    })
    .error(function(err) {
      return '<div class="br-message br-theme-error">' + err + '</div>';
    });

}, { async: true });