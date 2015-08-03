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
    if(prop.timingFunction) {
        var timingfunction = "-moz-animation-timing-function: "+
            prop.timingFunction+";-o-animation-timing-function: "+
            prop.timingFunction+";-webkit-animation-timing-function: "+
            prop.timingFunction+";animation-timing-function: "+
            prop.timingFunction+";"
    }
    
    library['fadeIn'] =  ".animatic-fadeIn{-webkit-animation:fadein "+prop.duration+"s;-moz-animation:fadein "+prop.duration+"s;-ms-animation:fadein "+prop.duration+"s;-o-animation:fadein "+prop.duration+"s;animation:fadein "+prop.duration+"s;-moz-animation-fill-mode: forwards;-o-animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;animation-fill-mode: forwards;"+timingfunction+"}@keyframes fadein{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-moz-keyframes fadein{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-webkit-keyframes fadein{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-ms-keyframes fadein{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-o-keyframes fadein{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}"
    
    library['fadeOut'] =  ".animatic-fadeOut{-webkit-animation:fadeout "+prop.duration+"s;-moz-animation:fadeout"+prop.duration+"s;-ms-animation:fadeout"+prop.duration+"s;-o-animation:fadeout"+prop.duration+"s;animation:fadeout"+prop.duration+"s;-moz-animation-fill-mode: forwards;-o-animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;animation-fill-mode: forwards;"+timingfunction+"}@keyframes fadeout{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-moz-keyframes fadeout{from{opacity:"+prop.from+"},to{opacity:"+prop.to+"}}@-webkit-keyframes fadeout{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-ms-keyframes fadeout{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}@-o-keyframes fadeout{from{opacity:"+prop.from+"}to{opacity:"+prop.to+"}}"

    
    return library[prop.animation];
}


