$(function () {
	/* 初期化 */
	G.defineChara();

	function game_init() {
		$("#game_title").text(GAME_TITLE);
		$("title").text(GAME_TITLE);
	}

	function main() {
		G.STATE.count++;
			$("#game_counter").text(G.STATE.count);
	}
	G.setIntervalHigh(main, GAME_EXEC_INTERVAL, {});

	game_init();
	/* テスト用 */
	G.STATE.party.members = [
		new PartyChara({id: 0}),
		new PartyChara({id: 1}),
		new PartyChara({id: 3}),
		new PartyChara({id: 2})
	];
	G.showPartyMembers();
	G.STATE.enemy.members = [
		new EnemyChara({id: 4})
	];
	G.showEnemyMembers();
});