var createjs = require('../../index!../lib/easeljs-0.8.2.combined').createjs;

var stage = new createjs.Stage('stage');

var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
stage.update();
