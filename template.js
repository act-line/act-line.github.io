jQuery(
    $.ajax({
        url: "template.html",
        dataType: "html"
    }).done(function (data) {
        "use strict";
        $("#all").html(data);
    }).fail(function (data) {
        "use strict";
        console.error(data);
    });
);