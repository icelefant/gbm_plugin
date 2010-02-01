var PREFIX = "gbm_plugin.";

$(function() {
  $('#container').tabs();
  load_options();
});

// Saves options to localStorage.
function save_options() {
  $(".options").each(function(){
    var op = this.id;
    localStorage[PREFIX+op] = $(this).val();
  });
  alert("Options Saved.");
}

function load_options() {
  $(".options").each(function(){
    var op = this.id;
    var v  = localStorage[PREFIX + op];
    $(this).val(v ? v : "");
  });
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  $("#theme").val("blue");
  $("#font_size").val("0.9em");
  $("#popup_width").val("500");
  $("#popup_height").val("600");
  $("#bookmark_url").val("http://www.google.com/bookmarks/");
  $("#sig_url").val("http://www.google.com/bookmarks/find");

  alert("Default options loaded. Please SAVE it to come into effect.");
}