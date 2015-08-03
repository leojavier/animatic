'use strict'
var Animatik = {
    ElementStatus: {},
    
    run: function(prop){
        
        var el = document.getElementById(prop.targetElement);
        
        if(typeof this.ElementStatus[prop.targetElement + '-' + prop.animation] == "undefined") {
            var classAttr = RequestAnimation(prop);
            this.utilities.insertStyle(prop.targetElement, classAttr);
        }
        
        if(!this.ElementStatus[prop.targetElement + '-' + prop.animation]) {
            this.ElementStatus[prop.targetElement + '-' + prop.animation] = el.className;
        }
        else{
            el.className = this.ElementStatus[prop.targetElement + '-' + prop.animation] + ' animatic-'+prop.animation;
        }
        
    },
    
    utilities: {
        insertStyle: function(targetElement, animation){;
            var styles = document.getElementById('animatic-styles');
                                                                
            
            if(!styles) {
                var styleNode = document.createElement('style');
                styleNode.type = 'text/css';
                styleNode.id ="animatic-styles"
                styleNode.innerHTML = animation;
                document.head.appendChild(styleNode);
            }else{
                
                    styles.innerHTML = styles.innerHTML + animation;
                
            }
        }
    }
}


var RequestAnimation = function(prop) {
    var library = [];
    
    
    library['fadeIn'] =  ".animatic-fadeIn{-webkit-animation:fadein "+prop.duration+"s;-moz-animation:fadein "+prop.duration+"s;-ms-animation:fadein "+prop.duration+"s;-o-animation:fadein "+prop.duration+"s;animation:fadein "+prop.duration+"s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}"
    
    library['fadeOut'] =  ".animatic-fadeOut{-webkit-animation:fadeout "+prop.duration+"s;-moz-animation:fadeout"+prop.duration+"s;-ms-animation:fadeout"+prop.duration+"s;-o-animation:fadeout"+prop.duration+"s;animation:fadeout"+prop.duration+"s}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from,to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{from{opacity:1}to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}"
        
    

    return library[prop.animation];
}


