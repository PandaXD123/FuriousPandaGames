var isclicked = false;

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