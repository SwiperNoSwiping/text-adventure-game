'use strict';

var readline = require("readline");

var readlineThing = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var game = {
	start: function() {
		initialize();
	},
	restart: function() {
		game.start();
	}
}

function initialize(){
	readlineThing.question("What is your name? ", function(answer) {
			Name(answer)
			console.log("Hi there " + answer + ", welcome to the game!");
			askClass();
	})
}
			
function askClass() {
	readlineThing.question("Choose your class! Mage, Marksman, Assassin, or Tank? ", function(answer) {
			chooseClass(answer);
			console.log("You are a " + answer + ".");
			askRace();
	})
}

function askRace() {
	readlineThing.question("What is your race? Are you a dog, cat, or rabbit? ", function(race) {
			chooseRace(race);
			console.log("You are a " + race + ".");
			askGender();
	})
}

function askGender() {
	readlineThing.question("What is your gender? ", function(gender) {
			chooseGender(gender);
			console.log("You are a " + gender + ".");
			readlineThing.close();
	})
}

var Player = {
	name: "Hazel",
	race: {
		1: "Dog",
		2: "Cat",
		3: "Rabbit"
	},	
	class: {
		1: "Marksman",
		2: "Assassin",
		3: "Mage",
		4: "Tank"
	},
	gender: {
		1: "Female",
		2: "Male"
	},
	skill: {
		1: null,
		2: null,
		3: null,
		4: null
	},
	eat: function(){
		if (Player.health == 19) {
			health = 20;
		} else if (Player.health == 20) {
			console.log("You are on full health. Stop eating.");
		} else {
			health = health +2;
		}
	}
}

//console.log(Player);

var finalBoss = {
	name: "Alan",
	health: 100,
	skill: {
		attack: function() {
			console.log("get rekt scrub, mlg 360 no scope");
			Player.health = Player.health - 10;
		},
		taunt: function() {
			console.log("go home noob");
		}
	}
}

function Name(answer) {
	Player.name = answer;
}

function chooseRace(race) {
	Player.race = race;
	if (Player.race != "Dog" && Player.race != "dog" && Player.race != "Cat" && Player.race != "cat" && Player.race != "Rabbit" && Player.race != "rabbit");
	readlineThing.question("Please enter a valid race.");
} 

function chooseGender(gender) {
	Player.gender = gender;
}

function chooseClass(answer) {	
	Player.class = answer;
	if (Player.class == "Mage") {
		Player.skill["1"] = function() {
			console.log("Player used Fireball!");
			finalBoss.health = finalBoss.health - 3;
		}
		Player.health = 20;
		Player.skill["2"] = function() {
			console.log("Player used Ice Beam!");
			finalBoss.health = finalBoss.health - 5;
		}
		Player.skill["3"] = function() {
			console.log("Player used Wish!");
			if (Player.health > 10) {
				Player.health = 20;
			} else {
				Player.health = Player.health + 10;
			}
		}
		Player.skill["4"] = function() {
			console.log("Player used Elemental Fury!");
			finalBoss.health = finalBoss.health - 15;
		}
	} else if (Player.class == "Marksman") {
		Player.skill["1"] = function() {
			console.log("Player used Buck Shot!");
			finalBoss.health = finalBoss.health - 3;
		}
		Player.health = 30;
		Player.skill["2"] = function() {
			console.log("Player used Explosive Shells!");
			finalBoss.health = finalBoss.health - 5;
		}
		Player.skill["3"] = function() {
			console.log("Player used Stealth!");
			if (Player.health > 10) {
				Player.health = 20;
			} else {
				Player.health = Player.health + 10;
			}
		}
		Player.skill["4"] = function() {
			console.log("Player used Piercing Bullet!");
			finalBoss.health = finalBoss.health - 15;
		}
	} else if (Player.class == "Assassin") {
		Player.skill["1"] = function() {
			console.log("Player used Quick Slash!");
			finalBoss.health = finalBoss.health - 3;
		}
		Player.health = 20;
		Player.skill["2"] = function() {
			console.log("Player used Poisoning Slit!");
			finalBoss.health = finalBoss.health - 3;
		}
		Player.skill["3"] = function() {
			console.log("Player used Invisible Shroud!");
			if (Player.health > 10) {
				Player.health = 20;
			} else {
				Player.health = Player.health + 10;
			}
		}
		Player.skill["4"] = function() {
			console.log("Player used Blade Dance!");
			finalBoss.health = finalBoss.health - 15;
		}
	} else if (Player.class == "Tank") {
		Player.skill["1"] = function() {
			console.log("Player used Sword Swing!");
			finalBoss.health = finalBoss.health - 3;
		}
		Player.health = 20;
		Player.skill["2"] = function() {
			console.log("Player used Brute Force!");
			finalBoss.health = finalBoss.health - 7;
		}
		Player.skill["3"] = function() {
			console.log("Player used Parry!");
			if (Player.health > 10) {
				Player.health = 20;
			} else {
				Player.health = Player.health + 10;
			}
		}
		Player.skill["4"] = function() {
			console.log("Player used Draining Charge!");
			finalBoss.health = finalBoss.health - 20;
			Player.health = Player.health - 7;
		}
	} else {
		readlineThing.question("Please enter a valid class: ", function(answer) {
			chooseClass(answer);
		})
	}
}

game.start();















