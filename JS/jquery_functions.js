$(document).ready(function(){
    console.log("ready!");
    $(".addclass_btn").click(function(){
        $(".addclass_p").addClass("newclass");
    });

    $(".hide_btn").click(function(){
        $(".hide_show_p").hide();
    });

    $(".show_btn").click(function(){
        $(".hide_show_p").show();
    });

    $(".toggle_btn").click(function(){
        $(".toggle_p").toggle();
    });

    $(".slide_up_btn").click(function(){
        $(".slide_up_down_p").slideUp();
    });

    $(".slide_down_btn").click(function(){
        $(".slide_up_down_p").slideDown();
    });

    $(".fade_in_btn").click(function(){
        $(".fade_in_out_p").fadeIn();
    });

    $(".fade_out_btn").click(function(){
        $(".fade_in_out_p").fadeOut();
    });

    $(".before_btn").click(function(){
        $(".before_after_p").before("<p>I'm Before</p>");
    });

    $(".after_btn").click(function(){
        $(".before_after_p").after("<p>I'm After</p>");
    });

    $(".append_btn").click(function(){
        $(".append_p").append(". What is this new appendage?!?");
    });

    $(".html_btn").click(function(){
        $(".html_p").html("New paragraph, who dis?");
    });

    $(".attr_btn").click(function(){
        $(".attr_p").attr("id", "attr_id");
    });

    $(".val_btn").click(function(){
        var value = $(".val_input").val();
        $(".val_input").after(value);
    });
    
    $(".text_btn").click(function(){
        $(".text_p").text("New text, who dis?");
    });
})