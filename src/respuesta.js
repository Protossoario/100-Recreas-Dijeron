var Respuesta = cc.Layer.extend({
	_sprite: null,
	_gameLayer: null,
	_respuesta: null,
	_label1: null,
	_label2: null,
	_puntos: 0,
	_numero: 0,
	_revelada: false,
	init: function(numero, respuesta, puntos, gameLayer) {
		this._super();
		this._gameLayer = gameLayer;
		this._numero = numero;
		this._respuesta = respuesta;
		this._puntos = puntos;

		if ('touches' in sys.capabilities) {
			this.setTouchEnabled(true);
		}
		if ('mouse' in sys.capabilities) {
			this.setMouseEnabled(true);
		} 

		var winsize = cc.Director.getInstance().getWinSize();

		this._label1 = cc.LabelTTF.create(this._respuesta, "Arial", "24", { width: 584, height: 0 }, "left");
		this._label2 = cc.LabelTTF.create(this._puntos, "Scoreboard", "60");
		//this._label1.runAction(cc.Hide.create(0));
		//this._label2.runAction(cc.Hide.create(0));
		switch (this._numero) {
			case 1:
				this._sprite = cc.Sprite.create(s_respuesta1);
				this._sprite.setAnchorPoint(0, 0);
				this._sprite.setPosition(150, 480);
				this._label1.setAnchorPoint(0, 0.5);
				this._label1.setPosition(170, 540);
				this._label2.setAnchorPoint(0.5, 0.5);
				this._label2.setPosition(814, 540);
				break;
			case 2:
				this._sprite = cc.Sprite.create(s_respuesta2);
				this._sprite.setAnchorPoint(0, 0);
				this._sprite.setPosition(150, 360);
				this._label1.setAnchorPoint(0, 0.5);
				this._label1.setPosition(170, 420);
				this._label2.setAnchorPoint(0.5, 0.5);
				this._label2.setPosition(814, 420);
				break;
			case 3:
				this._sprite = cc.Sprite.create(s_respuesta3);
				this._sprite.setAnchorPoint(0, 0);
				this._sprite.setPosition(150, 240);
				this._label1.setAnchorPoint(0, 0.5);
				this._label1.setPosition(170, 300);
				this._label2.setAnchorPoint(0.5, 0.5);
				this._label2.setPosition(814, 300);
				break;
			case 4:
				this._sprite = cc.Sprite.create(s_respuesta4);
				this._sprite.setAnchorPoint(0, 0);
				this._sprite.setPosition(150, 120);
				this._label1.setAnchorPoint(0, 0.5);
				this._label1.setPosition(170, 180);
				this._label2.setAnchorPoint(0.5, 0.5);
				this._label2.setPosition(814, 180);
				break;
			case 5:
				this._sprite = cc.Sprite.create(s_respuesta5);
				this._sprite.setAnchorPoint(0, 0);
				this._sprite.setPosition(150, 0);
				this._label1.setAnchorPoint(0, 0.5);
				this._label1.setPosition(170, 60);
				this._label2.setAnchorPoint(0.5, 0.5);
				this._label2.setPosition(814, 60);
				break;
		};
		this.addChild(this._sprite, 2);
		this.addChild(this._label1, 1);
		this.addChild(this._label2, 1);
	},
	onMouseUp: function(event) {
		if (!this._revelada && cc.rectContainsPoint(this._sprite.getBoundingBox(), event.getLocation()) == true) {
			cc.AudioEngine.getInstance().playEffect(s_scoreeffect);
			this._sprite.setZOrder(0);
			this._sprite.setTexture(cc.TextureCache.getInstance().addImage(s_respuestabox));
			//this._label1.runAction(cc.Show.create(0));
			//this._label2.runAction(cc.Show.create(0));
			this._gameLayer.addScore(this._puntos);
			this._revelada = true;
		}
	},
});

