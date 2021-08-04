var isclicked = false;
var isclicked2 = false;

$(function() {
    $(".btn").click(function(e) {
        e.preventDefault();
        $(".submenu").stop(500).slideToggle();
        if (isclicked == false)
        {
            $(".submenu").slideDown(500);
            isclicked = true;
        }
        else
        {
            $(".submenu").slideUp(500);
            isclicked = false;
        }
    });
});
   
$(function() {
    $(document).click(function(e) {
        if (!$(e.target).hasClass('btn'))
            if(isclicked == true)
            {
                $(".submenu").slideUp(500);
                isclicked = false;
            }
    });
});

$(function() {
    $(".menubtn").click(function(e) {
        e.preventDefault();
        $(".nav-submenu").stop(500).slideToggle();
        if (isclicked2 == false)
        {
            $(".nav-submenu").slideDown(500);
            isclicked2 = true;
        }
        else
        {
            $(".nav-submenu").slideUp(500);
            isclicked2 = false;
        }
    });
});
   
$(function() {
    $(document).click(function(e) {
        if (!$(e.target).hasClass('submenubtn') && !$(e.target).hasClass('menubtn') && !$(e.target).hasClass('nav-submenu') || $(e.target).hasClass('closemenubtn'))
            if(isclicked2 == true)
            {
                $(".nav-submenu").slideUp(500);
                isclicked2 = false;
            }
    });
});

/*
var darkmode= true;
$(function() {
    $(".btn").click(function()
    {
        if(darkmode == true)
        darkmode = false;
        else
        darkmode = true;
        var element = document.body;
        element.classList.toggle("darkmodeBody");

        if(darkmode == false)
        {
            $("div[class='feature']").css({
                'color': 'black',
                'text-shadow':'1px 1px 1px white'
            });
            $("h2").css({
                'color': 'black',
                'text-shadow':'1px 1px 1px white'
            });
            $("section[class='quote']").css({
                'color': 'black'
            });
            $("cite").css({
                'color': 'black'
            });
            $("div[id='navbar']").css ({
                'background-image': 'linear-gradient(to right, #ebebeb, #d8d8d8, #ebebeb)'
            });
            $("a").css ({
                'color': 'black',
                'text-shadow': '1px 1px 1px white'
            });
        }
        else
        {
            $("div[class='feature']").css({
                'color': 'white',
                'text-shadow':'1px 1px 1px black'
            });
            $("h2").css({
                'color': 'white',
                'text-shadow':'1px 1px 1px black'
            });      
        }                
    });
});
*/