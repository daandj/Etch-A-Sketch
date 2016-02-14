$(document).ready(function() {
  drawSketchpad(20);
  $('#new-pad').click(newSketchpad);
  $('#new-size').click(function(){
    var newSize = prompt("How big would you like the sketchpad to be?(the maximum is 100)", "20");
    if (newSize>100) {
      newSize = 100;
    }
    drawSketchpad(newSize);
  });
});

function newSketchpad() {
  $('.black').removeClass('black')
}

function drawSketchpad(size) {
  var sketchpad = $('.sketchpad');
  sketchpad.empty();
  var divsize = 100 / size;
  var div = '<div class="node" style="width:' + divsize + '%;height:' + divsize + '%;"></div>';
  for (var i = 0; i < size*size; i++) {
    sketchpad.append(div);
  };
  node = $('.node');
  node.mouseenter(function() {
    $(this).addClass('black');
  });
}
