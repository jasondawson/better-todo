var app = angular.module('todo');

app.directive('myDraggable', function ($document) {
    return {
        link: function (scope, elem, attrs) {
            var startX = 0,
                startY = 0,
                x = 0,
                y = 0;


            elem.on('mousedown', function (e) {
                e.preventDefault();
                startX = e.pageX - x;
                startY = e.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);

                elem.css({ border: '1px solid black', borderRadius: '5px', position: 'relative', opacity: '0.8', transform: 'rotate(5deg)'})
            });

            function mousemove(e) {
                y = e.pageY - startY;
                x = e.pageX - startX;
                  e.preventDefault();
                
                elem.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        }
    }
})