var app = {
  init: function() {
    console.log('App init');
    app.getColor();
    $('.random').on('click', app.getColor());
  },

  colorArray: ['#eaa835', '#b71919', '#0bda78', '#2695c7'],

  randColor:function(max) {
    return Math.floor(Math.random()*Math.floor(max));
  },

  getColor: function() {
    var test = app.randColor(app.colorArray.length);
    $('.frame-color').css('border', app.colorArray[test] + ' 3em solid');
    $('.titre').css('border-bottom', app.colorArray[test] + ' 10px solid');
    $('li').mouseover(function(){
      $(this).find('a').css('color', app.colorArray[test])
    }).mouseout(function() {
      $(this).find('a').css('color', '#f1f2f2')
    });

  },

}

$(app.init);
