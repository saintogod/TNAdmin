(function () {
    'use strict';

    angular.module('favico.Provider', []);

    angular.module('favico.Provider')
        .provider('favico', function favicoProvider(){
            var bgColor = '#d00';
            var textColor = '#fff';
            var fontFamily = 'sans-serif';
            var fontStyle = 'bold';
            var type = 'circle';
            var position = 'down';
            var animation = 'slide';
            var elementId = false;
            /**
             * Set the background color of the Badge
             * @param  {String} color Color of the Badge
             */
            this.bgColor = function(color){
                bgColor = color;
            }
            /**
             * Set the text color of the Badge
             * @param  {String} color Color the text
             */
            this.textColor = function(color){
                textColor = color;
            }
            /**
             * Set the font family of the text
             * @param  {String} font Font Family name
             */
            this.fontFamily = function(font){
                fontFamily = font;
            }
            /**
             * Set the font Style of the text
             * @param  {String} style font style such as, normal, italic,
             * oblique, bold, bolder, lighter, 100, 200...
             */
            this.fontStyle = function(style){
                fontStyle = style;
            }
            /**
             * Set Badge shape (circle, rectangle)
             * @param  {String} typ shape. Avaliable shape: circle, rectangle
             */
            this.type = function(typ){
                type = typ;
            }
            /**
             * Set Badge position (up, down, left, upleft)
             * @param  {String} pos position (up, down, left, upleft)
             */
            this.position = function(pos){
                position = pos;
            }
            /**
             * Set Badge animation type (slide, fade, pop, popFade, none )
             * @param  {String} anima  animation (slide, fade, pop, popFade, none)
             */
            this.animation = function(anima){
                animation = anima;
            }
            /**
             * Image element ID if there is need to attach badge to regular image
             * @param  {String} eleid elementid
             * @return {[type]}       [description]
             */
            this.elementId = function(eleid){
                elementId = eleid;
            }

            this.$get= function(){
                var favico = new Favico({
                    bgColor : bgColor,
                    textColor : textColor,
                    fontFamily : fontFamily,
                    fontStyle : fontStyle,
                    position : position,
                    type : type,
                    animation : animation
                });
                return {
                    badge: badge,
                    reset: reset
                };
                function badge(num) {
                    favico.badge(num);
                };
                function reset() {
                    favico.reset();
                };
            }
        });

})(); 

