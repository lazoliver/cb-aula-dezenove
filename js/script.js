$(document).ready(function(){
    $("#message-um").click(function(){
        $(".chat-messages").hide();
        $(".chats").show();
    });
    $(".msg-back").click(function(){
        $(".chat-messages").show();
        $(".chats").hide();
    });
    $("#story-um").click(function(){
        $(".menu").hide();
        $(".see-more").hide();
        $(".full-story").show();
    });
    $(".full-story").click(function(){
        $(".menu").show();
        $(".see-more").show();
        $(".full-story").hide();
    });
    $("#discovery-dois").click(function(){
        $(".menu").hide();
        $(".see-more").hide();
        $(".full-discovery").show();
    });
    $(".full-discovery").click(function(){
        $(".menu").show();
        $(".see-more").show();
        $(".full-discovery").hide();
    });
    // form register
    $("#next").click(function(){
        // esconder
        $("#next").hide();
        $("input[type='email']").hide();
        $("input[type='password']").hide();
        // mostrar
        $("#policy").show();
        $("input[type='text']").show();
        $("#login").attr("style", "display: block");
    });
    $("#more").click(function(){
        $(".none").attr("style", "display:grid", "gap: 11px");
    });
});