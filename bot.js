const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = 'h!';
var jArray = ['1','2','3'];
var saying;
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity('jays server getting bodied', { type: 'WATCHING' });
});
 
client.on("message", (message) => {
  //help
  if (message.content.startsWith(prefix + "help")) {
    //message.channel.send("**HAMDI BOT HELP** **h!** is the prefix -- `h!fortnite` - _fortnite corrections_ || `h!vincent` - _vincent rOAST_ || `h!al` - _al rOAST_ || `h!molly` - _molly rOAST_ || `h!flag` - _the bosnian flag_ || `h!jay` - _jay rOAST_ || `h!hieu` - _hieu rOAST_ || `h!hue` - _hue rOAST_ || `h!justin` - _justin rOAST_ || `h!ct` - _Counter-Jays Win_ || `h!t` - _Jays Win_ || `h!og` - _ORANGE!, og_");
	const embed = {
  "title": "Hamdija Bot Help!",
  "color": 3447003,
  "timestamp": "2018-10-28T16:55:15.116Z",
  "thumbnail": {
    "url": "images/unnamed.jpg"
  },
  "author": {
    "name": "made by joseph (youmanyousef)",
    "icon_url": "images/hamdi.png"
  },
  "fields": [
    {
      "name": "_`h!`_",
      "value": "Is the prefix for all commands. the number in the description represents how many results you can get."
    },
    {
      "name": "`h!flag`",
      "value": "_The Bosnian Flag_",
      "inline": true
    },
    {
      "name": "`h!hamdi`",
      "value": "_A shitty pic of Hamdija_",
      "inline": true
    },
    {
      "name": "`h!ms`",
      "value": "_Gary's Mugshot_",
      "inline": true
    },
    {
      "name": "`h!al`",
      "value": "_al rOAST_ (3)",
      "inline": true
    },
    {
      "name": "`h!molly`",
      "value": "_molly rOAST_",
      "inline": true
    },
    {
      "name": "`h!vincent`",
      "value": "_vincent rOAST_ (3)",
      "inline": true
    },
    {
      "name": "`h!justin`",
      "value": "_justin rOAST_ (3)",
      "inline": true
    },
    {
      "name": "`h!hieu`",
      "value": "_hieu rOAST_ (3)",
      "inline": true
    },
    {
      "name": "`h!hue`",
      "value": "_hue rOAST_",
      "inline": true
    },
    {
      "name": "`h!ct`",
      "value": "_Counter-Jays Win!_",
      "inline": true
    },
    {
      "name": "`h!t`",
      "value": "_Jays Win!_",
      "inline": true
    },
    {
      "name": "`h!flag`",
      "value": "_these last two_",
      "inline": true
    },
    {
      "name": "`h!og`",
      "value": "_OG!_ (3)",
      "inline": true
    },
    {
      "name": "`h!fortnite`",
      "value": "_Fortnite is Garbage._ (3)",
      "inline": true
    }
  ]
};
	message.channel.send({ embed });
  }
  //bosnia flag
  if (message.content.startsWith(prefix + "flag")) {
    message.channel.send("_Dobrodošli. Kako ste_?", {files: ["./flag.png"]});
  }
  //sad
  if (message.content.startsWith(prefix + "sad")) {
    message.channel.send({files: ["images/sad.png"]});
  }
  //mugshot (ms)
  if (message.content.startsWith(prefix + "ms")) {
    message.channel.send({files: ["imgaes/ms.png"]});
  }
  //hamdi
  if (message.content.startsWith(prefix + "hamdi")) {
    message.channel.send({files: ["images/hamdi.png"]});
  }
  //al rOAST
  if (message.content.startsWith(prefix + "al")) {
	var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "Naw wanna fight bitch?";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "Molly bestie aksjdhfasf 😂😭";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "jk love you too";
		message.channel.send(saying);
	}
  }
  //molly rOAST
  if (message.content.startsWith(prefix + "molly")) {
    message.channel.send("Al\'s my bestieee!");
  }
  //vincent rOAST
  if (message.content.startsWith(prefix + "vincent")) {
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "What you want nigga?";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "PASS THE MINI\'S DAMN!!";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "DAAAAAAAAAAAAAAAAAAAAAAAYUM O MY";
		message.channel.send(saying);
	}
  }
  //justin rOAST
  if (message.content.startsWith(prefix + "justin")) { 
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "Justin got **BODIED** ok?";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "If you dont stfu, ill body you like justin.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "You do know what I did to Justin, right?";
		message.channel.send(saying);
	}
  }
 
  //counter jays win
  if (message.content.startsWith(prefix + "ct")) {
    message.channel.send("Counter-Jays Win!");
  }
  //jays win
  if (message.content.startsWith(prefix + "t")) {
    message.channel.send("Jays Win!");
  }
  //og
  if (message.content.startsWith(prefix + "og")) {
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "oraAANGe!";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = ":large_orange_diamond::large_orange_diamond:";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "OG! OG!";
		message.channel.send(saying);
  }}
  //fortnite
  if (message.content.startsWith(prefix + "fortnite")) {
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "Fuck fortnite, I just Play For Fun.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "Incorrect, Gary. I have 23* solo wins.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "Only reason i have 1W% is because there noclippers, and hackers.";
		message.channel.send(saying);
	}
  }
  //hieu
  if (message.content.startsWith(prefix + "hieu")) {
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "1-0, bodied that nigga.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "I made that bitch tap out:boxing_glove:.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "What a gay ass, he tried to pull down my pants.";
		message.channel.send(saying);
	}
  }
  //frederica
  if (message.content.startsWith(prefix + "frederica")) {
    message.channel.send("Ima marry her!");
  }
  //jay
  if (message.content.startsWith(prefix + "jay")) {
    var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
	if (randomJ == jArray[0]){
		var saying = "Bro, no joke i made him cry bruh! 2-0!!!";
		message.channel.send(saying);
	}
	if (randomJ == jArray[1]){
		var saying = "I made that bitch tap out:boxing_glove:.";
		message.channel.send(saying);
	}
	if (randomJ == jArray[2]){
		var saying = "What a gay ass, he tried to pull down my pants.";
		message.channel.send(saying);
	}
  }
  //hue
  if (message.content.startsWith(prefix + "hue")) {
    message.channel.send("I buy hue KFC🍗!");
  }
});
client.login(BOT_TOKEN);
