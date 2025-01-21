module.exports = {
 config: {
	 name: "hasib",
	 version: "1.0",
	 author: "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function() {
	 const expectedAuthor = "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆";
	 if (this.config.author !== expectedAuthor) {
		 throw new Error("Unauthorized change detected in the author field. Please restore the original author.");
	 }
 },

 onChat: async function({ event, message }) {
	 if (event.body && event.body.toLowerCase() === "hasib") {
		 const videoLinks = [
			 "https://i.imgur.com/TiMY8FH.mp4",
			 "https://i.imgur.com/1xKZbTZ.mp4",
			 "https://i.imgur.com/XBZnI5h.mp4",
			 "https://i.imgur.com/2U20jok.mp4",
			 "https://i.imgur.com/QTJc2Bl.mp4",
			 "https://i.imgur.com/z7tiGve.mp4",
			 "https://i.imgur.com/kBrmp32.mp4"
		 ]; 

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「「যে গল্প শেষ হয়, \nসে গল্প কখনোই সত্য ছিল না।🌼♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆Ullash☆\n Hasib ッ」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
