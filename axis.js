/* Thanks to JQUERY COLOURIFIC - http://www.benwatts.ca/sandbox/jquery-colourific/ */

$(document).ready(function() {
    setup_color();
});

function setup_color(){
    var lis = $("ul#thread li");
    var rs = $(".r");
    $.each(lis, function() { 
        change_color($(this), true, true);
    });
    $.each(rs, function() { 
        change_color($(this), true, false);
    });
}

colors = ["#b58900", "#cb4b16", "#dc322f", "#d33682", "#6c71c4", "#268bd2", "#2aa198", "#859900"];
bg_colors = ["#FFFBEF", "#FFF5F0", "#FFEBEA", "#FFEFF7", "#F0F1FF", "#EAF7FF", "#E7FFFD", "#FDFFEC"];

function change_color(e, bg, text){
    color_num = Math.floor(Math.random() * 8);
    if (text)
        e.css("color", colors[color_num]);
    if (bg)
        e.css("background-color", bg_colors[color_num]);
    e.hide().fadeIn("slow");
}
