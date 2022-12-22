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

/* Deque AJAX example */
$("#someButton").click(function(){
  $.ajax({
  url: "https://webaim.org/intro/", 
  type:'GET',
  cache: false,
  success: function(result){
    $("#someContainer").show().html(result);
    var someHeading = $("#someContainer h2:first");
    /* set tabindex="-1" so the heading can receive keyboard focus */
    someHeading.attr('tabindex','-1');
    setTimeout(function(){ 
    /* move focus to the heading after a delay of 1 second */
    $("#someContainer h2:first").focus(); 
    }, 1000);
  }
  });
}); 

/* ARIA menu role removal testing */
// document.getElementsByTagName("ul")[0].removeAttribute("role");