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
                var clone = elem.clone(true)
                    .attr('id', 'clone')
                    .css({ border: '1px solid black', borderRadius: '5px', position: 'fixed', zIndex: '10', opacity: '0.8', transform: 'rotate(5deg)', top: e.pageY, left: e.pageX })
                $('body').append(clone);
                $('body').css({cursor: '-webkit-grabbing'})
                elem.css({backgroundColor: 'lightgrey', border: '1px dashed black'})
            });

            function mousemove(e) {
                y = e.pageY - startX;
                x = e.pageX - startY;
                  e.preventDefault();
                
                $('#clone').css({
                    top: e.pageY + 'px',
                    left: e.pageX + 'px'
                });
            }

            function mouseup() {
                $('#clone').remove();
                $('body').removeAttr('style');
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        }
    }
})