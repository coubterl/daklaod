const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "KANAL ID"; // SOL TARAFA HANGI KANALA MESAJIN ATILMASINI İSTİYORSANIZ O KANALIN ID'SINI GIRIN
var sahip = "SAHIP ID"; // SOL TARAFA HESABINIZIN ID'SINI GIRIN

client.on("ready",()=>{
	console.log("[Botclub] OwO Hunting Bot");
});

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
	};
},15500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo b");
	};
},20500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo");
	};
},10000);

client.on("message",message=>{
	if(message.channel.id==kanal){
		if(message.author.id == sahip){
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me")){
				db.set("owodg","1");
				message.channel.send("Owo para kasma sistemi doğrulamaya takıldığı için kapatıldı. `[Botclub] OwO Hunting Bot`");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("Owo para kasma sistemi açıldı. `[Botclub] OwO Hunting Bot`");
		};
		if(message.content == "!kapat"){
			db.set("owodg","1");
			message.channel.send("Owo para kasma sistemi kapatıldı. `[Botclub] OwO Hunting Bot`");
		};
	};
});

client.login("TOKEN BURAYA"); // SOL TARAFA HESABINIZIN TOKENINI GIRIN