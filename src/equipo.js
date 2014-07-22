var Equipo = cc.Layer.extend({
	_contador: 0,
	_label: null,
	_background: null,
	_gameLayer: null,
	init: function(numero, gameLayer) {
		this._super();
		this._gameLayer = gameLayer;

		if ('touches' in sys.capabilities) {
			this.setTouchEnabled(true);
		}
		if ('mouse' in sys.capabilities) {
			this.setMouseEnabled(true);
		}

		var winsize = cc.Director.getInstance().getWinSize();

		this._label = cc.LabelTTF.create("0", "Scoreboard", 60);
		this._background;
		switch (numero) {
			case 1:
				this._background = cc.Sprite.create(s_equipo1);
				this._background.setAnchorPoint(0, 1);
				this._background.setPosition(0, winsize.height);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(75, winsize.height - 190);
				break;
			case 2:
				this._background = cc.Sprite.create(s_equipo2);
				this._background.setAnchorPoint(0, 0.5);
				this._background.setPosition(0, winsize.height / 2);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(75, winsize.height / 2 - 90);
				break;
			case 3:
				this._background = cc.Sprite.create(s_equipo3);
				this._background.setAnchorPoint(0, 0);
				this._background.setPosition(0, 0);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(75, 10);
				break;
			case 4:
				this._background = cc.Sprite.create(s_equipo4);
				this._background.setAnchorPoint(1, 1);
				this._background.setPosition(winsize.width, winsize.height);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(winsize.width - 75, winsize.height - 190);
				break;
			case 5:
				this._background = cc.Sprite.create(s_equipo5);
				this._background.setAnchorPoint(1, 0.5);
				this._background.setPosition(winsize.width, winsize.height / 2);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(winsize.width - 75, winsize.height / 2 - 90);
				break;
			case 6:
				this._background = cc.Sprite.create(s_equipo6);
				this._background.setAnchorPoint(1, 0);
				this._background.setPosition(winsize.width, 0);
				this._label.setAnchorPoint(0.5, 0);
				this._label.setPosition(winsize.width - 75, 10);
				break;
		};
		this.addChild(this._background, 0);
		this.addChild(this._label, 1);
	},
	onMouseUp: function(event) {
		if (cc.rectContainsPoint(this._background.getBoundingBox(), event.getLocation()) == true) {
			var score = this._gameLayer.getScore();
			if (score > 0) {
				cc.AudioEngine.getInstance().playEffect(s_winnereffect);
				this._contador += this._gameLayer.getScore();
				this._label.setString(this._contador);
				this._gameLayer.setScore(0);
			}
		}
	},
});

