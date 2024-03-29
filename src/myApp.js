/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var MyLayer = cc.Layer.extend({
    sprite:null,

    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.Director.getInstance().getWinSize();

		// Crear el fondo del menu principal
        this.sprite = cc.Sprite.create(s_fondo1);
        this.sprite.setAnchorPoint(0.5, 0.5);
        this.sprite.setPosition(size.width / 2, size.height / 2);
        this.sprite.setScale(size.height / this.sprite.getContentSize().height);
        this.addChild(this.sprite, 0);
		
		var playFourBttn = cc.MenuItemFont.create("Equipos de 4", this.playFour, this);
		var playFiveBttn = cc.MenuItemFont.create("Equipos de 5", this.playFive, this);
		var playSixBttn = cc.MenuItemFont.create("Equipos de 6", this.playSix, this);
		playFourBttn.setFontSize(75);
		playFourBttn.setFontName("Budmo");
		playFourBttn.setColor(new cc.Color3B(248, 239, 0));
		playFourBttn.setAnchorPoint(0.5, 1);
		playFourBttn.setPosition(size.width / 2, size.height / 2);
		playFiveBttn.setFontSize(75);
		playFiveBttn.setFontName("Budmo");
		playFiveBttn.setColor(new cc.Color3B(248, 239, 0));
		playFiveBttn.setAnchorPoint(0.5, 1);
		playFiveBttn.setPosition(size.width / 2, size.height / 2 - 100);
		playSixBttn.setFontSize(75);
		playSixBttn.setFontName("Budmo");
		playSixBttn.setColor(new cc.Color3B(248, 239, 0));
		playSixBttn.setAnchorPoint(0.5, 1);
		playSixBttn.setPosition(size.width / 2, size.height / 2 - 200);

		var menu = cc.Menu.create(playFourBttn, playFiveBttn, playSixBttn);
		menu.setPosition(0, 0);
		this.addChild(menu, 1);
    },
	playFour: function() {
		numEquipos = 4;
		cc.Director.getInstance().replaceScene(new GameScene());
	},
	playFive: function() {
		numEquipos = 5;
		cc.Director.getInstance().replaceScene(new GameScene());
	},
	playSix: function() {
		numEquipos = 6;
		cc.Director.getInstance().replaceScene(new GameScene());
	},
});

var numEquipos = 0;

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
