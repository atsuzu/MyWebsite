// show more announcements
$(document).ready(function(){
  $("#showMoreAnnouncementsButton").click(function(){
    $("#showMoreAnnouncementsButton").slideUp("slow", function() {
      $("#moreAnnouncementsList").slideDown(); 
    });
  });
});

// hide more announcements
$(document).ready(function(){
  $("#hideMoreAnnouncementsButton").click(function(){
    $("#moreAnnouncementsList").slideUp("slow", function() {
      $("#showMoreAnnouncementsButton").slideDown();
    });
  });
});