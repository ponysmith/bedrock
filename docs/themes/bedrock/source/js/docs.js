$(document).ready(function() {

  $('.example').each(function() {
    var htmlTab = $(this).find('.example-tab.example-tab-html');
    var codeTab = $(this).find('.example-tab.example-tab-code');
    var htmlPanel = $(this).find('.example-html');
    var codePanel = $(this).find('.example-code');

    htmlTab.on('click', function() {
      htmlTab.addClass('active');
      codeTab.removeClass('active');
      htmlPanel.addClass('active');
      codePanel.removeClass('active');      
    });

    codeTab.on('click', function() {
      htmlTab.removeClass('active');
      codeTab.addClass('active');
      htmlPanel.removeClass('active');
      codePanel.addClass('active');      
    });
  });

});