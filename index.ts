import { world } from "@minecraft/server";

world.afterEvents.playerJoin.subscribe((event) => {
	// プレイヤー情報
	const playerId = event.playerId;
	const playerName = event.playerName;

	// プレイヤーに対してメッセージを送信する.
	const players = world.getPlayers({ name: playerName });

	for (const player of players) {
		player.sendMessage(`ようこそ ${playerName}, この世界へ！`);
	}
});
