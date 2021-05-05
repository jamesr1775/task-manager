$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav({edge:"right"});
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
  });