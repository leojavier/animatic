'use strict'
var app = {
    frameSize : null, // Define the height of the frames
    
    init: function(){
        this.set('.frame');
        
        $(document).on('scroll', function(){
            if( $(document).scrollTop() >= app.frameSize) {
                
                Animatik.run({
                    animation:'fadeIn',
                    from:0,
                    to:1,
                    targetElement:'myEl',
                    duration: 2
                });
                
            }
            if( $(document).scrollTop() == 0){
                
                Animatik.run({
                    animation:'fadeOut',
                    from:1,
                    to:0,
                    targetElement:'myEl',
                    duration: 5
                });
                
            }
        });
    },

    set:function(element){
        this.frameSize = $(element).height();
    }
}

app.init();