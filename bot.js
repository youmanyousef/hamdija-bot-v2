const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
var prefix = 'h!';
var jArray = ['1','2','3'];
var goons = 'goons';
var gArray = [];
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity('jays server getting bodied', { type: 'WATCHING' });
});
 
client.on("message", (message) => {
  //help
  if (message.content.startsWith(prefix + goons+ ' help')) {
	const embed = {
  "title": "Hamdija Bot Help!",
  "color": 3447003,
  "thumbnail": {
    "url": "https://i.imgur.com/ExQD0tO.png"
  },
  "author": {
    "name": "made by joseph (youmanyousef)",
    "icon_url": "https://i.imgur.com/xJTWqIF.jpg"
  },
  "footer": {
    "text": "if you guys have more, please send some! youmanyousef#9295"
  },
  "fields": [
    {
      "name": "_`h!goons`_",
      "value": "the prefix for all the goons you can get. numbers in description is the amount of results."
    },
    {
      "name": "`h!goons jay`",
      "value": "_Jay is gay 123_ (13)",
      "inline": true
    },
    {
      "name": "`h!goons hamdi`",
      "value": "_Hamdi the Eggnificent_ (5)",
      "inline": true
    },
    {
      "name": "`h!goons gary`",
      "value": "_Gary the Goon_ (3)",
      "inline": true
    },
    {
      "name": "`h!goons al`",
      "value": "_Al unexpectedly appears_ (2)",
      "inline": true
    },
	{
      "name": "`h!goons andrew`",
      "value": "_fortnite god and sophia hater_ (2)",
      "inline": true
    },
    {
      "name": "`h!goons sid`",
      "value": "_Sid from toy story 2_ (2)",
      "inline": true
    },
    {
      "name": "`h!goons justin`",
      "value": "Justin pulls up (3)",
      "inline": true
    },
	{
      "name": "`h!goons vincent`",
      "value": "_black nigga asian kid_ (5)",
      "inline": true
    },
    {
      "name": "`h!goons hieu`",
      "value": "_One of bob the builders handy tools, Hieu_ (7)",
      "inline": true
    },
	{
      "name": "`h!goons regis`",
      "value": "_the legendary regu my negu, shit a brick_ (2)",
      "inline": true
    },
	{
      "name": "`h!goons edin`",
      "value": "_mic spammer_ (1)",
      "inline": true
    },
       {
      "name": "`h!goons greg`",
      "value": "_hay day scammer_ (1)",
      "inline": true
    },
	{
      "name": "`h!goons xavier`",
      "value": "_sad zavey hours_ (3)",
      "inline": true
    },
    {
      "name": "`h!goons erson`",
      "value": "_erson's too smart for school so he robs the library_ (1)",
      "inline": true
    }
  ]
};
	message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "help")) {
    //message.channel.send("**HAMDI BOT HELP** **h!** is the prefix -- `h!fortnite` - _fortnite corrections_ || `h!vincent` - _vincent rOAST_ || `h!al` - _al rOAST_ || `h!molly` - _molly rOAST_ || `h!flag` - _the bosnian flag_ || `h!jay` - _jay rOAST_ || `h!hieu` - _hieu rOAST_ || `h!hue` - _hue rOAST_ || `h!justin` - _justin rOAST_ || `h!ct` - _Counter-Jays Win_ || `h!t` - _Jays Win_ || `h!og` - _ORANGE!, og_");
	const embed = {
  "title": "Hamdija Bot Help!",
  "color": 3447003,
  "thumbnail": {
    "url": "https://i.imgur.com/ExQD0tO.png"
  },
  "author": {
    "name": "made by joseph (youmanyousef)",
    "icon_url": "https://i.imgur.com/xJTWqIF.jpg"
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
      "name": "`h!goons`",
      "value": "_Type `h!goons help` for more info._",
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
  
  //goons
	//jay
	if (message.content.startsWith(prefix+goons+ ' jay')) {
		var randomJ = 1+(Math.floor(Math.random()*(13)));
		message.channel.send({files: ["images/goons/jay"+ randomJ +".png"]});
	}
	//regis
	if (message.content.startsWith(prefix+goons+ ' regis')) {
		var randomJ = 1+(Math.floor(Math.random()*(2)));
		message.channel.send({files: ["images/goons/regis"+ randomJ +".png"]});
	}
	//hamdi
	if (message.content.startsWith(prefix+goons+ ' hamdi')) {
		var randomJ = 1+(Math.floor(Math.random()*(5)));
		message.channel.send({files: ["images/goons/hamdi"+ randomJ +".png"]});
	}
	//vincent
	if (message.content.startsWith(prefix+goons+ ' vincent')) {
		var randomJ = 1+(Math.floor(Math.random()*(5)));
		message.channel.send({files: ["images/goons/vincent"+ randomJ +".png"]});
	}
	//hieu
	if (message.content.startsWith(prefix+goons+ ' hieu')) {
		var randomJ = 1+(Math.floor(Math.random()*(7)));
		message.channel.send({files: ["images/goons/hieu"+ randomJ +".png"]});
	}
	//gary
	if (message.content.startsWith(prefix+goons+ ' gary')) {
		var randomJ = 1+(Math.floor(Math.random()*(3)));
		message.channel.send({files: ["images/goons/gary"+ randomJ +".png"]});
	}
	//justin
	if (message.content.startsWith(prefix+goons+ ' justin')) {
		var randomJ = 1+(Math.floor(Math.random()*(3)));
		message.channel.send({files: ["images/goons/justin"+ randomJ +".png"]});
	}
	//max and maxroom
	if (message.content.startsWith(prefix+goons+ ' maxroom')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/maxroom.png"]});
	}else if (message.content.startsWith(prefix+goons+ ' max')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/max"+ randomJ +".png"]});
	}
	//yousef or terror
	if (message.content.startsWith(prefix+goons+ ' terror')) {
		var randomJ = 1+(Math.floor(Math.random()*(4)));
		message.channel.send({files: ["images/goons/terror"+ randomJ +".png"]});
	}
	if (message.content.startsWith(prefix+goons+ ' yousef')) {
		var randomJ = 1+(Math.floor(Math.random()*(4)));
		message.channel.send({files: ["images/goons/terror"+ randomJ +".png"]});
	}
	//xavier
	if (message.content.startsWith(prefix+goons+ ' xavier')) {
		var randomJ = 1+(Math.floor(Math.random()*(3)));
		message.channel.send({files: ["images/goons/xavier"+ randomJ +".png"]});
	}
	//al
	if (message.content.startsWith(prefix+goons+ ' al')) {
		var randomJ = 1+(Math.floor(Math.random()*(2)));
		message.channel.send({files: ["images/goons/al"+ randomJ +".png"]});
	}
	//andrew
	if (message.content.startsWith(prefix+goons+ ' andrew')) {
		var randomJ = 1+(Math.floor(Math.random()*(2)));
		message.channel.send({files: ["images/goons/andrew"+ randomJ +".png"]});
	}
	//sidgoon
	if (message.content.startsWith(prefix+goons+ ' sidgoon')) {
		var randomJ = 1+(Math.floor(Math.random()*(2)));
		message.channel.send({files: ["images/goons/sidgoon"+ randomJ +".png"]});
	}
	//greg
	if (message.content.startsWith(prefix+goons+ ' greg')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/greg"+ randomJ +".png"]});
	}
	//erson
	if (message.content.startsWith(prefix+goons+ ' erson')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/erson"+ randomJ +".png"]});
	}
	//edin
	if (message.content.startsWith(prefix+goons+ ' edin')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/edin"+ randomJ +".png"]});
	}
	//nathan
	if (message.content.startsWith(prefix+goons+ ' nathan')) {
		var randomJ = 1+(Math.floor(Math.random()*(1)));
		message.channel.send({files: ["images/goons/nathan"+ randomJ +".png"]});
	}
  
  //bosnia flag
  if (message.content.startsWith(prefix + "flag")) {
    message.channel.send("_Dobrodošli. Kako ste_?", {files: ["images/flag.png"]});
  }
  //sad
  if (message.content.startsWith(prefix + "sad")) {
    message.channel.send({files: ["images/sad.png"]});
  }
  //mugshot (ms)
  if (message.content.startsWith(prefix + "ms")) {
    message.channel.send({files: ["images/ms.png"]});
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
client.login(token);
