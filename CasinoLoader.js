//***********************************
//    Not even remotely ready
//***********************************

Game.LoadMinigameMod = function(objKey, miniName, miniSource){
	Game.Objects[objKey].minigameUrl = miniSource;
	Game.Objects[objKey].minigameName = miniName;
	Game.LoadMinigames();
}

Game.LoadMinigameMod('Chancemaker', 'Casino', 'https://klattmose.github.io/CookieClicker/minigameCasino/minigameCasino.js');