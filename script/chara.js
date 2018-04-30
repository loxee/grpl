/* 敵味方共通のクラス */
class Chara {
	constructor(param) {
		this.id = param.id;
	}
	/* 表示用のDOMを生成 */
	generateDom(add_class) {
		let $dom = $("<div class='" + (add_class ? " " + add_class : "") + "'>");
		$dom.append("<meter class='at_gage' value='0.8'></meter>")
			.addClass("chara_id_" + this.id);
		return $dom;
	}
	/* 
		
	*/
	attack(target) {
		return;
	}
}
/* */
class EnemyChara extends Chara {
	/* 表示用のDOMを生成 */
	generateDom(add_class = "") {
		return super.generateDom(add_class + " enemy_member");
	}
}
/* 自パーティ用のクラス */
class PartyChara extends Chara {
	/* 表示用のDOMを生成 */
	generateDom(add_class = "") {
		return super.generateDom(add_class + " party_member");
	}
}
$(function () {
	/* 敵キャラクターを表示 */
	/* パーティーメンバーを表示 */
	G.showEnemyMembers = function () {
		let i;
		let $area = $(".enemy_members");
		$area.empty();
		for (i = 0; i < G.STATE.enemy.members.length; i++) {
			$area.append(G.STATE.enemy.members[i].generateDom());
		}
	}
	G.showPartyMembers = function () {
		let i;
		let $area = $(".party_members");
		let $dom;
		$area.empty();
		for (i = 0; i < G.STATE.party.members.length; i++) {
			$dom = G.STATE.party.members[i].generateDom();
			$dom.css({
				left: BATTLE_PARTY_INTERVAL_X * i, 
				top: BATTLE_PARTY_INTERVAL_Y * i
			});
			//G.STATE.battle.party.doms.push($dom);
			$area.append($dom);
		}
	}
});