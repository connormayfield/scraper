  /* Scrape */
$(function(){
    $(document).on("click","#scrape",function(){
        $("h4").text("Please wait...")
        $.ajax({
            method: "GET",
            url: "/scrape"
        }).then(function(){
            location.assign("/");
        })
    });

    /* Delete */
    $(document).on("click","#clear",function(){
        $.ajax({
            method: "DELETE",
            url: "/clear"
        }).then(function(){
            location.assign("/");
        });
    });

    /* Save */
    $(".saved").on("click", function(){
        var thisId = $(this).data("id");
        var saved = $(this).data("saved");
        if (saved==="true") {
            $(this).attr("data-saved","false");
            saved="false";
        } else {
            $(this).attr("data-saved","true");
            saved="true";
        }
        $.ajax({
            method: "PUT",
            url: "/saved/" + thisId,
            data: {saved:saved}
        }).then(function() {
            location.assign("/");
        });
    });

     /* Create note */
     $(".notes").on("click", function(){
        var thisId = $(this).data("id");
        var noteTitle= $(this).data("title");
        var noteBody= $(this).data("body");
        $("#hidden").val(thisId);
        $("#note").val(noteTitle);
        $("#body").val(noteBody);
        $("#exampleModal").modal("show");
    });

    /* Save note */
    $("#submit").on("click", function(){
        $.ajax({
            method: "POST",
            url: "/note",
            data: {
                id:$("#hidden").val(),
                title:$("#note").val(),
                body:$("#body").val()
            }
        }).then(function(){
            location.assign("/saved");
        });
    });

    /* Delete saved article */
    $(".delete").on("click",function(){
        var thisId = $(this).data("id");
        $.ajax({
            method: "PUT",
            url: "/deleted/" + thisId
        }).then(function(){
            location.assign("/saved");
        });
    });
});
