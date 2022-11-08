/* the jQuery click() event can be activated by mouse or keyboard */
$("[role=link]").click(function(){
    var href = $(this).attr('data-href');
    window.open(href);
 });
 /* Note: if you don't want the link to open in a new window,
 use document.location = href;
 instead of window.open(href) */

  $('#button-123').click(function(e) {
  alert("You activated the native button with a click action!");
});