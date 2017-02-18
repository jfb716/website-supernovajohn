$(document).ready(function(){
  jaData();
  $('#myForm').submit(function(e){

    var jData = $('#myForm');

    $.ajax({
      type: jData.attr('method'),
      url: jData.attr('action'),
      data: jData.serialize(),
      success: function(response){
        console.log(response);
        jaData();
      }
    });
    e.preventDefault();
  });

  function jaData(){
    $('#output').empty();
    $.ajax({
      type: 'GET',
      url: 'json.php',
      success: function(response){
        $.each(response, function(index){
          console.log(response[index].firstName);
          $('#output').append(response[index].firstName + '<br>');
        });
        console.log(response);
      }
    });
  }


});
