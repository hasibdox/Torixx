module.exports = {
	config: {
		name: "ullashteach",
		version: "1.0",
		author: "Ullash ッ",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () { },
	onChat: async function ({ event, message }) {
		if (event.body) {
			const userMessage = event.body.toLowerCase().trim(); // Normalize the message
			switch (userMessage) {
				case "kamon aco":
					return message.reply("-আলহামদুলিল্লাহ \nআমি ভালো আছি🙂\n\n তুমি কেমন আছো...?");
				case "tumi ki khabar kheye boro hoiso?":
					return message.reply("না! আমি তো প্রশ্ন আর উত্তর খেয়ে বড় হয়েছি! 😄");
				case "tomar nam ki?":
					return message.reply("আমার নাম তোমার মন থেকে নেওয়া! 🤗");
				case "amar password vule gesi":
					return message.reply("তোমার পাসওয়ার্ড: '12345' চেষ্টা করো! 😂");
				case "bhalobasha ki ashol?":
					return message.reply("যখন তুমি হাসো, তখন সেটা সবচেয়ে সত্যি ভালোবাসা! 💕");
				case "tumi kothay thako?":
					return message.reply("তোমার মনে, আর কোথায়? 😍");
				case "amar moto keu ache?":
					return message.reply("না, তুমি একদম ইউনিক! 🌟");
				case "rat e kno vulbhasha ashe?":
					return message.reply("কারণ রাত হলো আবেগের সময়! 🌙");
				case "rainbow keno hoy?":
					return message.reply("প্রকৃতি তোমার হাসির মতো সুন্দর কিছু দেখাতে চায়! 🌈");
				case "cloud kothay jaye?":
					return message.reply("তোমার স্বপ্নের সাথে মিশে যায়! ☁️");
				case "amar jinis koi?":
					return message.reply("তোমার মনে খুঁজে দেখো, হয়তো সেখানে আছে! 🧐");
				case "bondhu kothay?":
					return message.reply("তোমার পাশে, শুধু মন দিয়ে তাকাও! 👫");
				case "bhalobashar dosh ki?":
					return message.reply("ভালোবাসা কখনো দোষ হতে পারে না, যদি সেটা সত্যি হয়! 💖");
				case "manush keno chena jay na?":
					return message.reply("কারণ মানুষকে মন দিয়ে বুঝতে হয়, চোখ দিয়ে নয়! 👀❤️");
				case "matha betha dur korbo kivabe?":
					return message.reply("এক কাপ চা খাও আর মিষ্টি করে হাসো! ☕😊");
				case "amar biye kobe?":
					return message.reply("যখন সময় হবে, তখন সব ঠিক হয়ে যাবে! ⏳");
				case "chokh kotha bole keno?":
					return message.reply("কারণ হৃদয়ের ভাষা চোখে প্রকাশ পায়! 👁️❤️");
				case "ranna kothay shikhbo?":
					return message.reply("তোমার মায়ের কাছ থেকে, সেরা শেফ তিনি! 🍳");
				case "amar chobi sundor naki?":
					return message.reply("তোমার চেহারা সুন্দর, তাই ছবিও সুন্দর! 📸");
				case "prem keno hoy?":
					return message.reply("কারণ হৃদয় একা থাকতে পারে না! 💕");
				case "sobai busy keno?":
					return message.reply("কারণ সবাই স্বপ্ন পূরণ করতে চায়! 🏃‍♂️💭");
				case "rat e ghum ashe na keno?":
					return message.reply("তোমার মন হয়তো নতুন স্বপ্ন নিয়ে ব্যস্ত! 🌌");
				case "bhalobasha na thakle ki hoy?":
					return message.reply("তাহলে জীবন হবে রঙহীন! 🎨");
				case "kharap din kobe sesh hobe?":
					return message.reply("যখন তুমি হাল ছাড়বে না, তখন! 💪");
				case "ai duniya kemon?":
					return message.reply("দুনিয়া সুন্দর, যদি মন ভালো থাকে! 🌍❤️");
				case "swopno dekha valo naki?":
					return message.reply("হ্যাঁ, কারণ স্বপ্ন ছাড়া জীবন কল্পনা করা যায় না! 🌠");
				case "ami tomar best friend?":
					return message.reply("তুমি শুধু আমার বন্ধু না, তুমি আমার ফ্যামিলি! 🥰");
				case "programming shikhbo keno?":
					return message.reply("যাতে তুমি নিজেই তোমার জীবন কোড করতে পারো! 💻✨");
				case "amar moto keo ache?":
					return message.reply("তুমি একদম অদ্বিতীয়! 🌟");
				case "ai duniya amader jonno?":
					return message.reply("হ্যাঁ, আমরা সবাই একে সুন্দর করে তোলার জন্য! 🌏✨");
				case "pahar keno uchu?":
					return message.reply("যাতে আমরা স্বপ্নের উচ্চতা বুঝতে পারি! 🏔️");
				case "উল্লাস":
					return message.reply("বস এখন কাজে ব্যস্ত আছে , তা বলার আমাকে বলুন");
				// Second file cases
				case "good morning🌺":
					return message.reply("Good morning 🌟");
				case "ke koro":
					return message.reply("তোমার কথা ভাবতেছি");
				case "tome ke single":
					return message.reply("হুম আমি সিঙ্গেল😩🥺");
				case "i love you bot":
					return message.reply("তোর মতো ছাগলের সাথে আমি প্রেম করবো না 😌🙂");
				case "@everyone":
					return message.reply("উপস্থিত 🎭🙋🏼");
				case "call a aso":
					return message.reply("আমি আমার boos উল্লাসের সাথে ব্যস্ত আছি , এখন কলে আসতে পারবো না ♻️🥱");
				case "@everyone call a aso":
					return message.reply("এত যে কলে আসতে বলিস , কলে আসলেতো মরা মুরগির মতো পড়ে থাকিস, কথা বলিস না 😾😾");
				case "call up":
					return message.reply("একটু পরে আসবো কলে 😑, এখন উল্লাস বসের সাথে ব্যস্ত আছি 😊❤️‍🩹");
				case "abal":
					return message.reply("tui abal 😑😾");
				case "kanke":
					return message.reply("তুই xanke");
				case "mage":
					return message.reply("আর একটা গালি দিলে উল্লাস বসকে ডেকে আনবো কিন্তু 😾");
				case "bokacoda":
					return message.reply("sor abal");
				case "kopal":
					return message.reply("এত কপাল কপাল করিস কেনো 🐸🫡");
				case "kpl":
					return message.reply("কপালের নাম গোপাল");
				case "রেম্বো কে":
					return message.reply("রেম্বো একটা বোকাচোদা");
				case "tor boos k":
					return message.reply("আমার বসের নাম উল্লাস,বসের সাথে যোগাযোগ করতে টাইপ করুন /info");
				case "bot banabo ke babay":
					return message.reply("বট বানানো শিখতে চাইলে আমার বসের সাথে যোগাযোগ করুন 🫡");
				case "বট বানায় কিভাবে":
					return message.reply("বট বানানো শিখতে চাইলে আমার বসের সাথে যোগাযোগ করুন");
				case "natok":
					return message.reply("তোমাকে দেখার পর থেকে নাটক দেখার প্রয়োজন হয় নাই 🗿🙂🎭");
				case "cup":
					return message.reply("না আমি চুপ করবো না");
				case "cup kor":
					return message.reply("তুই চুপ কর 😌🥱");
				case "jan":
					return message.reply("ভালোবাসা নামক আবলামি করতে চাইলে ইনবক্স এ আসো");
				case "xan":
					return message.reply("সর আমাকে জান টান বলবি না😏");
				case "bot i love you":
					return message.reply("নাটক কম করো পিয়, তুমি যে বারোবাতারি তা সবাই জানে");
				case "bot banabo ke babay":
					return message.reply("বট বানানো শিখতে চাইলে ,আমার বসের সাথে যোগাযোগ করো");
				case "ki hoise":
					return message.reply("তোর নানির ছেলে হইছে 🤣😫");
				case "bal":
					return message.reply("আমার গুলো কেটে দিতে পারবি ?");
				case "হেড়া":
					return message.reply("তোর নানির");
				case "সাউয়া":
					return message.reply("ছবি তুলে দে একটু দেখি 🐸😒");
				case "shawoya":
					return message.reply("দেখাবি 😩😒");
				case "tor boss k":
					return message.reply("আমার বসের নাম উল্লাস,আমার বসের সাথে যোগাযোগ করতে টাইপ করুন /info");
				case "ullah":
					return message.reply("হালার পুত বানান ঠিক কর 🥹,আমার বসের নাম ullash \n আর তুই লিখলি ullah হালা বলদ");
				case "need":
					return message.reply("i need অনেকগুলো বান্ধবী 😁");
				case "add daow":
					return message.reply("পারবো না তোরে এড় দিতে");
				case "add me":
					return message.reply("পাগল ছাগল গ্রুপে এড় করি না");
				case "left nelam":
					return message.reply("তোর মতো ২ - ৪ গ্রুপ থেকে ছলে গলে কারো বালও ছেড়া যাবে না 😩😂");
				case "লিভ নিচ্ছি":
					return message.reply("তুই লিভ নিলে কি আমার বাল ছেড়া যাবে");
				case "pagol cagol":
					return message.reply("tui pagol cagol");
				case "oi bot":
					return message.reply("hmm jan bolo");
				case "rambo k":
					return message.reply("রেম্বো উল্লাসের জারজ সন্তান");
				case "rambo":
					return message.reply("রেম্বো তো নাই 🤡,রেম্বো রেম্বোর মায়ের জানাযা পড়াতে গেছে 😆, কিছু দিন আগে উল্লাসের ৭ ইঞ্চি ধ*নের চো*দা খাইয়া রেম্বোর মা অসুস্থ হয়ে মারা গেছে 💔😊🥹");
				case "ullash k":
					return message.reply("ullash amar boss");
				case "ullash":
					return message.reply("এত উল্লাস উল্লাস করিস কেনো,এত ডাকাডাকি না করে উল্লাস কে একটা girlfriend জোগাড় করে দে 🥹");
				case "শাওন":
					return message.reply("আপনি কাকে ডাকছেন 🙂🤔");
                                case "Oishi":
					return message.reply("vabi");
                                case "Hasna k":
			        	return message.reply("Hasib erkochi natni");
				case "shaon":
					return message.reply("shaon apnar ke hoi !?");
				case "তোমাকে তৈরি করছে কে":
					return message.reply("আমাকে তৈরি করেছেন উল্লাস");
				case "hasib k":
					return message.reply("boss");
				case "😒":
					return message.reply("এভাবে চোখ বাকা করে কি দেখিস🧐🤨!?");
				default:
					// Do nothing for other messages
					break;
			}
		}
	}
};
