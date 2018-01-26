var app = {
  init: function() {
    console.log('App init');
    app.getColor();
  },

  colorArray: ['#EAA835', '#ED1C24', '#11CC5A', '#0BDA4B'],

  randColor:function(max) {
    return Math.floor(Math.random()*Math.floor(max));
  },

  getColor: function() {
    var test = app.randColor(app.colorArray.length);
    $('.frame-color').css('border', app.colorArray[test] + ' 3em solid');
    $('.titre').css('border-bottom', app.colorArray[test] + ' 10px solid');
    $('a').mouseover(function(){
      $(this).css('color', app.colorArray[test])
    }).mouseout(function() {
      $(this).css('color', '#fff')
    });

  }
}

$(app.init);
