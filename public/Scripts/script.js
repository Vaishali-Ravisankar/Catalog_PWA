/* 


$(document).ready(function() {

    $('.scrollable_data').slimscroll({

        axis: 'y'
    });
    $('.filter-right').click(function(){
    $(this).toggleClass('selected');

    });

    $(document).on("click", function() {
         $('div#user_filter').hide();
         $('.export_popup').hide();


    });

    $('button.purpleBtn.main_Filters').click(function(e) {
        e.stopPropagation();
        $('div#user_filter').toggle();
    });


    $('button.orangeBtn.text-uppercase').click(function() {

        $('div#user_filter').hide();
    });


    $("div#user_filter").on("click", function(e) {
        e.stopPropagation();
    });

    $("div#datetimepicker6").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $("div#datetimepicker7").on("click", function(e) {
         e.preventDefault();
        e.stopPropagation();
    });
      $("div#datetimepicker9").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $("div#datetimepicker10").on("click", function(e) {
         e.preventDefault();
        e.stopPropagation();
    });
      $("div#datetimepicker11").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
  

    $("div#datetimepicker6").datepicker({
        autoclose: true
    });
    $("div#datetimepicker7").datepicker({
        autoclose: true
    });

    $('button#FilterButton').click(function(e) {
        e.stopPropagation();
        $('.Filter_popup').toggle();
    });

    $('button.grayBtn.text-uppercase,button.orangeBtn.text-uppercase').click(function() {
        $('.Filter_popup').hide();
    });

    $(".Filter_popup").on("click", function(e) {
        e.stopPropagation();
    });
    
    
    $('button#exportview').click(function(e) {
        e.stopPropagation();
        $('.export_popup').toggle();
    });

  
    $(".button#exportview,.export_popup").on("click", function(e) {
        e.stopPropagation();
    });
    
 
    
  
    

});
 */