$(document).ready(function(){
  $.ajax({
    url: '/contacts',
    type: 'GET',
    success: function(response){
        var options = "";
        for(var i = 0;i < response.length; i++)
        {
            options += "<option value='" + response[i]._id + "'>" +
            response[i].name +"</option>";
        }
        $("#contacts").html(options);
    }
  });
});

        function dispDetails() {
            var URL = "contacts/" + $("#contacts").val();

            $.ajax({
                type: "GET",
                url: URL,
                cache: false,
                success: function (response){
                    $("#name").val(response.name);
                    $("#phone").val(response.phone);
                },
                error: function (data){
                    console.log("Problem Occured");
                }
            });
        }

        function updateDetails() {
            var URL = "contacts/" + $("#contacts").val();
            var newName = $("#name").val();
            var newPhone = $("#phone").val();
            $.ajax({
                type: "PUT",
                url: URL,
                data: {name:newName , phone:newPhone },
                cache: false,
                success: function (response){
                    $("#res").val("Updated");
                    alert("Update successful...refreshing the page!!");
                    window.location.reload();
                    
                },
                error: function (data){
                    console.log(data);
                }
            });
        }