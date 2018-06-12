    $(function () {
        $(document)
            .on("click", "[data-toggle='jplayer']", function (e) {
                if (e) e.preventDefault();
                var videoUrl = $(this).attr("href") || $(this).data("target");
                $('#ViewVideo').modal('show');
                $(jplayerSelector).jPlayer("setMedia", {
                    m4v: videoUrl,
                    mp4: videoUrl
                }).jPlayer('play');
               

                
            });


        var filmstrip = $(".filmstrip");

        initJPlayer();

        filmstrip.on("init", function () {
            filmstrip.css("visibility", "visible");
        });

        filmstrip.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="os-icon-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="os-icon-angle-right"></i></button>',            
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

    });