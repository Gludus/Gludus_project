var app = {
  init: function() {
    console.log('App init');
    app.changeColor();
    app.getColor();
  },
  changeColor: function() {
    $('#colorRandom').on('click', app.getColor);
  },
  colorArray: ['rgb(234, 168, 53)', 'rgb(232, 57, 57)', 'rgb(11, 218, 120)', 'rgb(38, 149, 199)'],

  randColor:function(max) {
    var currentColor = $('#colorRandom').css('color');
    var myColor = Math.floor(Math.random()*Math.floor(max));
    console.log(currentColor);
    console.log(app.colorArray[myColor]);
    if (app.colorArray[myColor] == currentColor) {
      app.randColor(app.colorArray.length);
      return myColor;
    }
    return myColor;
  },

  getColor: function() {
    var thisColor = app.randColor(app.colorArray.length);
    $('#colorRandom').css('color', app.colorArray[thisColor]);
    $('.frame-color').css('border', app.colorArray[thisColor] + ' 3em solid');
    $('.titre').css('border-bottom', app.colorArray[thisColor] + ' 10px solid');
    $('li').mouseover(function(){
      $(this).find('a').css('color', app.colorArray[thisColor])
    }).mouseout(function() {
      $(this).find('a').css('color', '#f1f2f2')
    });

  },

}

$(app.init);
