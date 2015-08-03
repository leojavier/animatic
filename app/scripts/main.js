'use strict'
var app = {
    frameSize : null, // Define the height of the frames
    
    init: function(){
        this.set('.frame');
        $('#myEl').css('opacity', 0);
        
        $(document).on('scroll', function(){
            if( $(document).scrollTop() >= app.frameSize) {
                
                Animatik.run({
                    animation:'fadeIn',
                    from:0, // From 0 to 1 Decimals
                    to:1, // From 0 to 1 Decimals
                    targetElement:'myEl', // Must be an ID
                    duration: 5, // In seconds
                    timingFunction:'ease' // Timing Options: linear / ease / ease-in / ease-out / ease-in-out /cubic-bezier(n,n,n,n) / initial /inherit
                });
                
            }
            if( $(document).scrollTop() == 0){
                
                Animatik.run({
                    animation:'fadeOut',
                    from:1, // From 0 to 1 Decimals
                    to:0, // From 0 to 1 Decimals
                    targetElement:'myEl',// Must be an ID
                    duration: 5 // In seconds
                });
                
            }
        });
    },

    set:function(element){
        this.frameSize = $(element).height();
    }
}

app.init();