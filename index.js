const aiml = require('aiml');
const readline = require('readline');
const chalk = require('chalk');
files = ['./knowledge/aiml/chat.aiml','./knowledge/aiml/jokes.aiml']

botTemplate = chalk.bold.bgGreen(' Bot ');
usrTemplate = chalk.bold.bgRed(' You ');

console.log(chalk.bold.magenta("Node bot is initialised....\n") + chalk.white("Status - ") + chalk.white.bold.bgGreen(" Online ") ,"\n");
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(chalk.white.bold(usrTemplate) + chalk.bold.white(" --> "));
rl.prompt();

aiml.parseFiles(files, function(err, topics){
  var engine = new aiml.AiEngine('Default', topics, {name: 'Jonny'});
  rl.on('line', function(line) {
    	var responce = engine.reply({name: 'CHAT'}, line, function(err, responce){
    		if(responce){
    			console.log(chalk.white.bold(botTemplate) + chalk.bold.white(" --> ") +  chalk.bold.cyan(responce));
    		}else{
    			console.log(chalk.white.bold(botTemplate) + chalk.bold.white(" --> ") + chalk.bold.cyan(getRandomResponse()));
    		}
  			});
    	rl.prompt();
	}).on('close', function() {
    console.log('\n\n\t\tThank you for chatting ..... Have a great day!');
    process.exit(0);
});
});

defaultResponses = ['Say What ?','Hmm..','Is it raining ?'];

let getRandomResponse = () => {
	return defaultResponses[Math.floor((Math.random()*10)%defaultResponses.length)];
};


