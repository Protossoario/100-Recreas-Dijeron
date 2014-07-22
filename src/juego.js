var GameLayer = cc.Layer.extend({
	_size: null,
	_respuestas: null,
	_pregunta: null,
	_score: 0,
	_preguntaNum: 0,
	_strikes: 0,
	_showingRedX: false,
	init: function() {
		this._super();

		this._size = cc.Director.getInstance().getWinSize();

		this.setKeyboardEnabled(true);

		var background = cc.Sprite.create(s_fondo2);
		background.setAnchorPoint(0.5, 0.5);
		background.setPosition(this._size.width / 2, this._size.height / 2);
		this.addChild(background, 0);

		this._pregunta = cc.LabelTTF.create(preguntas[this._preguntaNum].pregunta, "Arial", 32, { width: 684, height: 0 }, "left");
		this._pregunta.setAnchorPoint(0, 0.5);
		this._pregunta.setPosition(170, 684);
		this.addChild(this._pregunta, 1);

		// Crear los objetos de respuestas
		this._respuestas = [];
		for (var i = 0; i < preguntas[this._preguntaNum].respuestas.length; i++) {
			var respuesta = new Respuesta();
			var respuestaData = preguntas[this._preguntaNum].respuestas[i];
			respuesta.init((i + 1), respuestaData.texto, respuestaData.puntos, this);
			this.addChild(respuesta, 1);
			this._respuestas.push(respuesta);
		}

		// Crear los objetos para contar los puntajes de los equipos
		for (var i = 0; i < numEquipos; i++) {
			var equipo = new Equipo();
			equipo.init((i + 1), this);
			this.addChild(equipo, 2);
		}
	},
	reinit: function() {
		this._preguntaNum++;
		if (this._preguntaNum < preguntas.length) {
			// Actualizar el titulo de la pregunta
			this._pregunta.setString(preguntas[this._preguntaNum].pregunta);

			// Limpiar las respuestas anteriores
			for (var i = 0; i < this._respuestas.length; i++) {
				var respuesta = this._respuestas[i];
				cc.ArrayRemoveObject(this._respuestas, respuesta);
				respuesta.removeFromParent();
			}

			// Crear las respuestas nuevas
			for (var i = 0; i < preguntas[this._preguntaNum].respuestas.length; i++) {
				var respuesta = new Respuesta();
				var respuestaData = preguntas[this._preguntaNum].respuestas[i];
				respuesta.init((i + 1), respuestaData.texto, respuestaData.puntos, this);
				this.addChild(respuesta, 1);
				this._respuestas.push(respuesta);
			}

			// Reiniciar la cuenta de score
			this._score = 0;
		}
	},
	getScore: function() {
		return this._score;
	},
	setScore: function(num) {
		this._score = num;
	},
	addScore: function(num) {
		this._score += num;
	},
	onKeyUp: function(event) {
		switch (event) {
			case cc.KEY.q:
				cc.Director.getInstance().replaceScene(new MyScene());
				break;
			case cc.KEY.n:
				this.reinit();
				break;
			case cc.KEY.x:
				if (!this._showingRedX) {
					cc.AudioEngine.getInstance().playEffect(s_strikeeffect);
					switch (this._strikes) {
						case 0:
							var redX = cc.Sprite.create(s_redx);
							redX.setAnchorPoint(0.5, 0.5);
							redX.setPosition(this._size.width / 2, this._size.height / 2);
							var actionShow = cc.Show.create();
							var interval = cc.ActionInterval.create(2);
							var showingDone = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							redX.runAction(cc.Sequence.create(actionShow, interval, showingDone));
							this.addChild(redX, 3);
							this._showingRedX = true;
							this._strikes++;
							break;
						case 1:
							var redX1 = cc.Sprite.create(s_redx);
							redX1.setAnchorPoint(0.5, 0.5);
							var redX2 = cc.Sprite.create(s_redx);
							redX2.setAnchorPoint(0.5, 0.5);
							redX1.setPosition(this._size.width / 2 - 130, this._size.height / 2);
							redX2.setPosition(this._size.width / 2 + 130, this._size.height / 2);
							var actionShow = cc.Show.create();
							var interval = cc.ActionInterval.create(2);
							var showingDone1 = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							var showingDone2 = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							var sequence1 = cc.Sequence.create(actionShow, interval, showingDone1);
							var sequence2 = cc.Sequence.create(actionShow, interval, showingDone2);
							redX1.runAction(sequence1);
							redX2.runAction(sequence2);
							this.addChild(redX1, 3);
							this.addChild(redX2, 3);
							this._showingRedX = true;
							this._strikes++;
							break;
						case 2:
							var redX1 = cc.Sprite.create(s_redx);
							redX1.setAnchorPoint(0.5, 0.5);
							var redX2 = cc.Sprite.create(s_redx);
							redX2.setAnchorPoint(0.5, 0.5);
							var redX3 = cc.Sprite.create(s_redx);
							redX3.setAnchorPoint(0.5, 0.5);
							redX1.setPosition(this._size.width / 2 - 260, this._size.height / 2);
							redX2.setPosition(this._size.width / 2, this._size.height / 2);
							redX3.setPosition(this._size.width / 2 + 260, this._size.height / 2);
							var actionShow = cc.Show.create();
							var interval = cc.ActionInterval.create(2);
							var showingDone1 = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							var showingDone2 = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							var showingDone3 = cc.CallFunc.create(function(node) {
								node.removeFromParent();
								this._showingRedX = false;
							}, this);
							var sequence1 = cc.Sequence.create(actionShow, interval, showingDone1);
							var sequence2 = cc.Sequence.create(actionShow, interval, showingDone2);
							var sequence3 = cc.Sequence.create(actionShow, interval, showingDone3);
							redX1.runAction(sequence1);
							redX2.runAction(sequence2);
							redX3.runAction(sequence3);
							this.addChild(redX1, 3);
							this.addChild(redX2, 3);
							this.addChild(redX3, 3);
							this._showingRedX = true;
							this._strikes = 0;
							break;
					}
				}
				break;
			case cc.KEY.space:
				this._strikes = 0;
				break;
		}
	},
	printError: function(str) {
		var label = cc.LabelTTF.create(str, "Arial", 42);
		label.setPosition(this._size.width / 2, this._size.height / 2);
		this.addChild(label, 5);
	},
});

var GameScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer, 0);
		layer.init();
	},
});
