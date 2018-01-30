var app = {
  init: function() {
    console.log('App init');
    app.teep();
    app.getColor();
  },
  teep: function() {
    $('#colorRandom').on('click', app.getColor());
    console.log('bite');
  },
  colorArray: ['#eaa835', '#e83939', '#0bda78', '#2695c7'],

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
