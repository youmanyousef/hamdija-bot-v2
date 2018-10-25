var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var jArray = ['1','2','3']
//Configure logger settings.
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize:true
});

logger.level = 'debug';

//Initialize the bot
var bot = new Discord.Client({
    token: auth.token,
    autorun:true
});

bot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.setPresence( {game: {name:"jays server getting bodied", type:3}} );
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //Bot will listen for messages that start with an '!'.
    if(message.substring(0, 1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //help
            case 'h':
		bot.sendMessage({
                    to: channelID,
                    message: '**HAMDI BOT HELP** -- `!vincent` - _vincent rOAST_  || `!al` - _al rOAST_ || `!molly` - _molly rOAST_ || `!flag` - _the bosnian flag_ || `!jay` - _jay rOAST_ || `!hieu` - _hieu rOAST_ || `!hue` - _hue rOAST_ || `!justin` - _justin rOAST_ || `!ct` - _Counter-Jays Win_ || `!t` - _Jays Win_ || `!og` - _ORANGE!, og_'
                });
            break;
	    //flag
            case 'flag':
		bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/xwpy5nP.png'
                });
            break;
	    //al
	    case 'al':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'Naw wanna fight bitch?'
                	});
		}
		if (randomJ == jArray[1]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'Molly bestie aksjdhfasf 😂😭'
                	});
		}
		if (randomJ == jArray[2]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'jk love you too'
			});
		}
            break;
	    //molly
	    case 'molly':
		bot.sendMessage({
                    to: channelID,
                    message: 'Al\'s my bestieee!'
                });
            break;
	    //vincent
	    case 'vincent':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'What you want nigga?'
                	});
		}
		if (randomJ == jArray[1]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'PASS THE MINI\'S DAMN!!'
                	});
		}
		if (randomJ == jArray[2]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'DAAAAAAAAAAAAAAAAAAAAAAAYUM O MY'
			});
		}
            break;
	    //jay
            case 'jay':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'Bro, no joke i made him cry bruh! 2-0!!!'
                	});
		}
		if (randomJ == jArray[1]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'Thats what you get for demoting me! Dont demote me below goons again or ill go 3-0'
                	});
		}
		if (randomJ == jArray[2]) {
			bot.sendMessage({
                    		to: channelID,
                    		message: 'I have a message and a appeal to my demote! First I wanna state that Im very upset with the recent demote that wasn\'t even specified for and all I had done is kick yousef under the tag of that him being rude and making up an argument and without my doubt my job is to prevent this with the previous role given an Baldi patrol that the job is too stop problems and took the correct and Human steps to prevent bad image on the server and would like this to be fixed -CHIEF EGG @BomberBanks @HiNoOnesHere Please tell me your response because im very upset with the Dog shit role I would love to contuine my job of stopping fights with the role made for it https://cdn.discordapp.com/attachments/442041450704928779/499056937996910612/video.mov'
                	});
		}
            break;
            //Justin
	    case 'justin':
				var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
				if (randomJ == jArray[0]){
                bot.sendMessage({
                    to: channelID,
                    message: 'Justin got **BODIED** ok?'
                });}
				if (randomJ == jArray[1]){
                bot.sendMessage({
                    to: channelID,
                    message: 'If you dont stfu, ill body you like justin.'
                });}
				if (randomJ == jArray[2]){
                bot.sendMessage({
                    to: channelID,
                    message: 'You do know what I did to Justin, right?'
                });}
            break;
            //Counter Jays
            case 'ct':
                bot.sendMessage({
                    to: channelID,
                    message: 'Counter-Jays Win!'
                });
            break;
            //ORANGE!
	    case 'og':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]){
                	bot.sendMessage({
                	    	to: channelID,
                    		message: 'oraAANGe!'
               		});}
		if (randomJ == jArray[1]){
			bot.sendMessage({
                	    	to: channelID,
                    		message: ':large_orange_diamond::large_orange_diamond:'
               		});
		}
		if (randomJ == jArray[2]){
			bot.sendMessage({
               	    	to: channelID,
                    		message: 'OG! OG!'
               		});
		}
            break;
			
            //Fortnite sayings
	    case 'fortnite':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]){
               		bot.sendMessage({
                  	to: channelID,
                   	message: 'Fuck fortnite, I just Play For Fun.'
                	});
		}
		if (randomJ == jArray[1]){
               		bot.sendMessage({
                    	to: channelID,
                    	message: 'Incorrect, Gary. I have 23* solos wins.'
                	});
		}
		if (randomJ == jArray[2]){
               		bot.sendMessage({
                    	to: channelID,
                    	message: 'Only reason i have 1W% is because there noclippers, and hackers.'
                	});
		}
          break;
            //Jays (t)
            case 't':
                bot.sendMessage({
                    to: channelID,
                    message: 'Jays Win!'
                });
            break;
	   case 'hue':
                bot.sendMessage({
                to: channelID,
                message: 'I buy hue KFC🍗!'
                });
            break;
            // hieu
            case 'hieu':
				var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
				if (randomJ == jArray[0])
                bot.sendMessage({
                    to: channelID,
                    message: '1-0, bodied that nigga.'
                });
				if (randomJ == jArray[1])
                bot.sendMessage({
                    to: channelID,
                    message: 'I made that bitch tap out:boxing_glove:.'
                });
				if (randomJ == jArray[2])
                bot.sendMessage({
                    to: channelID,
                    message: 'What a gay ass, he tried to pull down my pants.'
                });
            break;
            case 'frederica':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ima marry her!'
                });
            break;
        }
    }
});
