hexo.extend.tag.register('br_page_link', (args, content) => {
  return ' <a href="' + hexo.config.root + args[0] + '">' + args[1] + '</a> ';
});