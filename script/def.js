let G = {};

/* 定数 */
const GAME_TITLE = "Grand Plute Fantasia";
const GAME_EXEC_INTERVAL = 100;

const BATTLE_PARTY_INTERVAL_X = 80;
const BATTLE_PARTY_INTERVAL_Y = 112;


/* 実行状態*/
G.STATE = {
	count: 0,
	item: {
		materials: [],
		equips: []
	},
	party: {
		members: []
	},
	enemy: {
		members: []
	}
};

/* 設定 */
G.SETTING = {
	auto_save: false
};

G.chara_defs = [
	{
		name:"太極拳おばあさん",
		image: {
			url: "taikyokuken_obaasan.png",
			src_x: 0,
			src_y: 0
		}
	},
	{
		name:"ランニング男",
		image: {
			url: "diet_running_man.png",
			src_x: 0,
			src_y: 0
		}
	},
	{
		name:"ランニング女",
		image: {
			url: "diet_running_woman.png",
			src_x: 0,
			src_y: 0
		}
	},
	{
		name:"ランニングドクター",
		image: {
			url: "doctor_run_isogashii.png",
			src_x: 0,
			src_y: 0
		}
	},
	{
		name:"車いす",
		image: {
			url: "sports_kurumaisu2_girl.png",
			src_x: 0,
			src_y: 0
		}
	},
	{
		name:"いぬのさんぽ",
		image: {
			url: "pet_dog_sanpo_obaasan.png",
			src_x: 0,
			src_y: 0
		}
	},
];


/* 共通関数 */
G.getTopPath = function () {
	let h = location.href;
	return h.substring(0, h.lastIndexOf("/")) + "/";
}
/* スタイルシートの新規作成 */
G.addStyleSheet = function () {
	let $style = $("<style>");
	$style.attr({
		type: "text/css"
	});
	$("head").append($style);
	return $style;
}
G.dynamicStyle = G.addStyleSheet();
/* キャラクター用定義 */
G.defineChara = function () {
	/* CSSを追加 */
	let $style = G.dynamicStyle;
	let i;
	let top = G.getTopPath();

	for (i = 0; i < G.chara_defs.length; i++) {
		let rule = ".chara_id_" + String(i) + "{" +
			"background-image: url('" + top + "image/chara/" + G.chara_defs[i].image.url + "');" +
			"background-position: " + G.chara_defs[i].image.src_x + "px " +
				G.chara_defs[i].image.src_y + "px " + ";" +
			"}";
		$style.append(rule);
	}
}
/*
		指定したinterval(ms) で指定したfunc を高精度で実行する
*/
G.setIntervalHigh = function (func, interval, param) {
	let next_time;
	let interval_id = null;
	function interval_body() {
		/* 関数実行 */
		func(param);
		/* 次までの時間を計算 */
		next_time += interval;
		let remain = next_time - (+new Date());
		if (remain < 0) {
			/* 遅れすぎた場合いったんリセット */
			next_time = (+new Date());
			remain = 0;
		}
		//console.log("next: " + (next_time - (+new Date())) + ", remain: " + remain);
		interval_id = setTimeout(interval_body, remain, param);
	}

	next_time = (+new Date()) + interval;
	interval_id = setTimeout(interval_body, interval, param);
};
