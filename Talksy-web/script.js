const chapters = [
  {
    title: "Chapter 1: Greetings",
    level: "A1",
    description: "Start with the most useful words for meeting people and sounding polite.",
    items: [
      {
        german: "Hallo",
        translations: {
          english: "Hello",
          hindi: "Namaste / Hello",
          bengali: "Hello / Nomoskar",
          tamil: "Vanakkam / Hello",
          telugu: "Namaskaram / Hello",
          marathi: "Namaskar / Hello",
          malayalam: "Namaskaram / Hello"
        },
        tip: "A friendly all-day greeting you can use almost anywhere."
      },
      {
        german: "Guten Morgen",
        translations: {
          english: "Good morning",
          hindi: "Shubh prabhat",
          bengali: "Shubho shokal",
          tamil: "Kaalai vanakkam",
          telugu: "Subhodayam",
          marathi: "Shubh sakal",
          malayalam: "Suprabhaatham"
        },
        tip: "Use this until around noon."
      },
      {
        german: "Danke",
        translations: {
          english: "Thank you",
          hindi: "Dhanyavaad",
          bengali: "Dhonnobad",
          tamil: "Nandri",
          telugu: "Dhanyavaadalu",
          marathi: "Dhanyavaad",
          malayalam: "Nanni"
        },
        tip: "A must-know word for everyday politeness."
      },
      {
        german: "Bitte",
        translations: {
          english: "Please / you're welcome",
          hindi: "Kripya / aapka swagat hai",
          bengali: "Please / apnake swagotom",
          tamil: "Dayavu seithu / paravaillai",
          telugu: "Dayachesi / welcome",
          marathi: "Krupaya / swagat aahe",
          malayalam: "Dayavaayi / swagatham"
        },
        tip: "One word, two very useful meanings."
      }
    ],
    exam: [
      {
        prompt: "What does Guten Morgen mean?",
        type: "select",
        options: ["Good night", "Good morning", "See you"],
        answer: "Good morning"
      },
      {
        prompt: "How do you say Thank you in German?",
        type: "text",
        answer: "danke"
      }
    ]
  },
  {
    title: "Chapter 2: Everyday Chat",
    level: "A1",
    description: "Learn simple phrases for basic conversation and friendly responses.",
    items: [
      {
        german: "Wie geht's?",
        translations: {
          english: "How are you?",
          hindi: "Aap kaise ho?",
          bengali: "Tumi kemon acho?",
          tamil: "Neenga eppadi irukkeenga?",
          telugu: "Meeru ela unnaru?",
          marathi: "Tumhi kase aahat?",
          malayalam: "Sukham alle?"
        },
        tip: "Great for simple conversations with new people."
      },
      {
        german: "Gut",
        translations: {
          english: "Good",
          hindi: "Achha",
          bengali: "Bhalo",
          tamil: "Nalla",
          telugu: "Bagundi",
          marathi: "Chaan",
          malayalam: "Nallathu"
        },
        tip: "A quick answer when someone asks how you are."
      },
      {
        german: "Tsch\u00fcss",
        translations: {
          english: "Bye",
          hindi: "Bye / alvida",
          bengali: "Biday / bye",
          tamil: "Bye / piriyavidai",
          telugu: "Bye / vellostha",
          marathi: "Bye / alvida",
          malayalam: "Bye / pinne kaanam"
        },
        tip: "A common and casual way to say goodbye."
      },
      {
        german: "Bis bald",
        translations: {
          english: "See you soon",
          hindi: "Jald milte hain",
          bengali: "Shigroi dekha hobe",
          tamil: "Seekiram sandhippom",
          telugu: "Tvaralo kaluddam",
          marathi: "Lavkar bhetu",
          malayalam: "Vegam kaanam"
        },
        tip: "Warm and natural when ending a conversation."
      }
    ],
    exam: [
      {
        prompt: "What does Wie geht's? mean?",
        type: "select",
        options: ["Where are you?", "How are you?", "What time is it?"],
        answer: "How are you?"
      },
      {
        prompt: "Type the German word for Bye.",
        type: "text",
        answer: "tsch\u00fcss"
      }
    ]
  },
  {
    title: "Chapter 3: Cafe German",
    level: "A1",
    description: "Practice asking for things clearly when ordering food or drinks.",
    items: [
      {
        german: "Ich m\u00f6chte",
        translations: {
          english: "I would like",
          hindi: "Mujhe chahiye",
          bengali: "Ami chai",
          tamil: "Enakku venum",
          telugu: "Naaku kavali",
          marathi: "Mala pahije",
          malayalam: "Enikku venam"
        },
        tip: "Helpful when ordering food or asking for something."
      },
      {
        german: "Wasser",
        translations: {
          english: "Water",
          hindi: "Paani",
          bengali: "Jol",
          tamil: "Thanni",
          telugu: "Neellu",
          marathi: "Paani",
          malayalam: "Vellam"
        },
        tip: "A good first word for cafe and restaurant practice."
      },
      {
        german: "Kaffee",
        translations: {
          english: "Coffee",
          hindi: "Coffee",
          bengali: "Coffee",
          tamil: "Coffee",
          telugu: "Coffee",
          marathi: "Coffee",
          malayalam: "Coffee"
        },
        tip: "Very close to English, so it is easy to remember."
      },
      {
        german: "Die Rechnung, bitte",
        translations: {
          english: "The bill, please",
          hindi: "Bill dijiye, kripya",
          bengali: "Bill din, please",
          tamil: "Bill kudunga, please",
          telugu: "Bill ivvandi, please",
          marathi: "Bill dya, krupaya",
          malayalam: "Bill tharuo, dayavaayi"
        },
        tip: "A super practical phrase for dining out."
      }
    ],
    exam: [
      {
        prompt: "What does Ich m\u00f6chte mean?",
        type: "select",
        options: ["I would like", "I am tired", "I understand"],
        answer: "I would like"
      },
      {
        prompt: "Type the German word for Water.",
        type: "text",
        answer: "wasser"
      }
    ]
  },
  {
    title: "Chapter 4: Family and Home",
    level: "A1",
    description: "Talk about family members and describe where you live.",
    items: [
      {
        german: "die Familie",
        translations: {
          english: "family",
          hindi: "Parivaar",
          bengali: "Poribar",
          tamil: "Kudumbam",
          telugu: "Kutumbam",
          marathi: "Kutumb",
          malayalam: "Kudumbam"
        },
        tip: "A core noun for simple introductions."
      },
      {
        german: "die Wohnung",
        translations: {
          english: "apartment",
          hindi: "Flat / ghar",
          bengali: "Flat / baari",
          tamil: "Apartment / veedu",
          telugu: "Apartment / illu",
          marathi: "Flat / ghar",
          malayalam: "Flat / veedu"
        },
        tip: "Useful when speaking about your home."
      },
      {
        german: "mein Bruder",
        translations: {
          english: "my brother",
          hindi: "Mera bhai",
          bengali: "Amar bhai",
          tamil: "En thambi / annan",
          telugu: "Na sodarudu",
          marathi: "Maza bhau",
          malayalam: "Ente sahodaran"
        },
        tip: "A simple family phrase to remember."
      },
      {
        german: "Ich wohne in Berlin",
        translations: {
          english: "I live in Berlin",
          hindi: "Main Berlin mein rehta hoon",
          bengali: "Ami Berlin e thaki",
          tamil: "Naan Berlin la vasikkiren",
          telugu: "Nenu Berlin lo untanu",
          marathi: "Mi Berlin madhye rahto",
          malayalam: "Njan Berlinil thaamasikkunnu"
        },
        tip: "A very practical sentence pattern."
      }
    ],
    exam: [
      {
        prompt: "What does die Familie mean?",
        type: "select",
        options: ["friend", "family", "house"],
        answer: "family"
      },
      {
        prompt: "Type the German word for apartment.",
        type: "text",
        answer: "die wohnung"
      }
    ]
  },
  {
    title: "Chapter 5: Daily Routine",
    level: "A2",
    description: "Describe what you do during the day using common verbs.",
    items: [
      {
        german: "aufstehen",
        translations: {
          english: "to get up",
          hindi: "Uthna",
          bengali: "Uthe jawa",
          tamil: "Ezhunthirukka",
          telugu: "Levadam",
          marathi: "Uthne",
          malayalam: "Ezhunnelkkuka"
        },
        tip: "A useful daily routine verb."
      },
      {
        german: "fr\u00fchst\u00fccken",
        translations: {
          english: "to have breakfast",
          hindi: "Nashta karna",
          bengali: "Jolkhabar khawa",
          tamil: "Kaalai unavu saappiduvathu",
          telugu: "Tiffin tinadam",
          marathi: "Nashta karne",
          malayalam: "Prabhatha bhakshanam kazhikkuka"
        },
        tip: "You will hear this often in morning routines."
      },
      {
        german: "arbeiten",
        translations: {
          english: "to work",
          hindi: "Kaam karna",
          bengali: "Kaj kora",
          tamil: "Velai seyyavum",
          telugu: "Pani cheyadam",
          marathi: "Kaam karne",
          malayalam: "Joli cheyyuka"
        },
        tip: "A foundational verb for work and study."
      },
      {
        german: "am Abend",
        translations: {
          english: "in the evening",
          hindi: "Shaam ko",
          bengali: "Shondhay",
          tamil: "Maalaiyil",
          telugu: "Saayantram",
          marathi: "Sandhyakali",
          malayalam: "Vaikunneram"
        },
        tip: "Helpful for placing actions in time."
      }
    ],
    exam: [
      {
        prompt: "What does aufstehen mean?",
        type: "select",
        options: ["to get up", "to sit down", "to drive"],
        answer: "to get up"
      },
      {
        prompt: "Type the German verb for to work.",
        type: "text",
        answer: "arbeiten"
      }
    ]
  },
  {
    title: "Chapter 6: Travel and Directions",
    level: "A2",
    description: "Ask where things are and understand simple travel situations.",
    items: [
      {
        german: "der Bahnhof",
        translations: {
          english: "train station",
          hindi: "Railway station",
          bengali: "Train station",
          tamil: "Rayil nilayam",
          telugu: "Railway station",
          marathi: "Railway station",
          malayalam: "Railway station"
        },
        tip: "A key travel word."
      },
      {
        german: "links",
        translations: {
          english: "left",
          hindi: "Baayen",
          bengali: "Bam dike",
          tamil: "Idathu",
          telugu: "Edama",
          marathi: "Davya bajula",
          malayalam: "Idathu"
        },
        tip: "Useful for following directions."
      },
      {
        german: "geradeaus",
        translations: {
          english: "straight ahead",
          hindi: "Seedha aage",
          bengali: "Shamne soja",
          tamil: "Neraaga",
          telugu: "Neruga mundu",
          marathi: "Saral pudhe",
          malayalam: "Neritte munnottu"
        },
        tip: "A common direction phrase."
      },
      {
        german: "Wo ist ...?",
        translations: {
          english: "Where is ...?",
          hindi: "... kahan hai?",
          bengali: "... kothay?",
          tamil: "... enge irukku?",
          telugu: "... ekkada undi?",
          marathi: "... kuthe aahe?",
          malayalam: "... evide aanu?"
        },
        tip: "One of the best survival phrases."
      }
    ],
    exam: [
      {
        prompt: "What does geradeaus mean?",
        type: "select",
        options: ["backwards", "straight ahead", "nearby"],
        answer: "straight ahead"
      },
      {
        prompt: "Type the German phrase for Where is...?",
        type: "text",
        answer: "wo ist ...?"
      }
    ]
  },
  {
    title: "Chapter 7: Shopping and Money",
    level: "A2",
    description: "Handle simple purchases, prices, and store conversations.",
    items: [
      {
        german: "Wie viel kostet das?",
        translations: {
          english: "How much does that cost?",
          hindi: "Yeh kitne ka hai?",
          bengali: "Eta koto daam?",
          tamil: "Idhu evvalavu?",
          telugu: "Idi entha?",
          marathi: "He kiti aahe?",
          malayalam: "Ithinu ethra vila?"
        },
        tip: "Very useful for everyday shopping."
      },
      {
        german: "teuer",
        translations: {
          english: "expensive",
          hindi: "Mehenga",
          bengali: "Daami",
          tamil: "Vilai adhigam",
          telugu: "Chala costly",
          marathi: "Mahaga",
          malayalam: "Vila kooduthal"
        },
        tip: "Helpful when reacting to prices."
      },
      {
        german: "g\u00fcnstig",
        translations: {
          english: "affordable",
          hindi: "Sasta / theek daam",
          bengali: "Sasta",
          tamil: "Kurainda vilai",
          telugu: "Takkuva daam",
          marathi: "Swasta",
          malayalam: "Kurav vila"
        },
        tip: "A practical adjective for shopping."
      },
      {
        german: "bar zahlen",
        translations: {
          english: "to pay cash",
          hindi: "Cash se pay karna",
          bengali: "Cash e payment kora",
          tamil: "Cash la pay pannu",
          telugu: "Cash tho pay cheyadam",
          marathi: "Cash ne paise dene",
          malayalam: "Cash ayi nalkuka"
        },
        tip: "Good to know in stores and cafes."
      }
    ],
    exam: [
      {
        prompt: "What does teuer mean?",
        type: "select",
        options: ["cheap", "expensive", "closed"],
        answer: "expensive"
      },
      {
        prompt: "Type the German phrase for How much does that cost?",
        type: "text",
        answer: "wie viel kostet das?"
      }
    ]
  },
  {
    title: "Chapter 8: Health and Appointments",
    level: "B1",
    description: "Explain simple symptoms and manage everyday appointments.",
    items: [
      {
        german: "Ich habe Kopfschmerzen",
        translations: {
          english: "I have a headache",
          hindi: "Mere sar mein dard hai",
          bengali: "Amar matha betha",
          tamil: "Enakku thalai vali",
          telugu: "Naaku talanoppi undi",
          marathi: "Mala dokedukhi aahe",
          malayalam: "Enikku thalavedana undu"
        },
        tip: "A common health sentence."
      },
      {
        german: "der Termin",
        translations: {
          english: "appointment",
          hindi: "Niyukt samay / appointment",
          bengali: "Appointment",
          tamil: "Appointment",
          telugu: "Appointment",
          marathi: "Appointment",
          malayalam: "Appointment"
        },
        tip: "Useful for doctors, offices, and meetings."
      },
      {
        german: "krank",
        translations: {
          english: "sick",
          hindi: "Bimaar",
          bengali: "Osustho",
          tamil: "Udambu sari illai",
          telugu: "Aswasthanga",
          marathi: "Aajari",
          malayalam: "Rogam undu"
        },
        tip: "A very important adjective."
      },
      {
        german: "die Apotheke",
        translations: {
          english: "pharmacy",
          hindi: "Dawai ki dukaan",
          bengali: "Oshudher dokan",
          tamil: "Marundhu kadai",
          telugu: "Mandula shop",
          marathi: "Aushadh dukan",
          malayalam: "Marunnu kada"
        },
        tip: "Good practical vocabulary."
      }
    ],
    exam: [
      {
        prompt: "What does der Termin mean?",
        type: "select",
        options: ["medicine", "appointment", "injury"],
        answer: "appointment"
      },
      {
        prompt: "Type the German word for pharmacy.",
        type: "text",
        answer: "die apotheke"
      }
    ]
  },
  {
    title: "Chapter 9: Work and Study",
    level: "B1",
    description: "Speak about responsibilities, schedules, and learning goals.",
    items: [
      {
        german: "die Aufgabe",
        translations: {
          english: "task",
          hindi: "Kaam",
          bengali: "Kaj",
          tamil: "Pani",
          telugu: "Task / pani",
          marathi: "Kaam",
          malayalam: "Joli"
        },
        tip: "Common in work and school contexts."
      },
      {
        german: "die Besprechung",
        translations: {
          english: "meeting",
          hindi: "Meeting",
          bengali: "Meeting",
          tamil: "Meeting",
          telugu: "Meeting",
          marathi: "Meeting",
          malayalam: "Meeting"
        },
        tip: "A useful office word."
      },
      {
        german: "Ich lerne Deutsch",
        translations: {
          english: "I am learning German",
          hindi: "Main German seekh raha hoon",
          bengali: "Ami German shikchi",
          tamil: "Naan German kathukiren",
          telugu: "Nenu German nerchukuntunnanu",
          marathi: "Mi German shiktoy",
          malayalam: "Njan German padikkunnu"
        },
        tip: "A natural sentence for introductions."
      },
      {
        german: "p\u00fcnktlich",
        translations: {
          english: "punctual",
          hindi: "Samay par",
          bengali: "Somoy moto",
          tamil: "Nerathukku",
          telugu: "Samayaniki",
          marathi: "Velavar",
          malayalam: "Samayath"
        },
        tip: "Useful in professional settings."
      }
    ],
    exam: [
      {
        prompt: "What does die Besprechung mean?",
        type: "select",
        options: ["meeting", "break", "document"],
        answer: "meeting"
      },
      {
        prompt: "Type the German word for task.",
        type: "text",
        answer: "die aufgabe"
      }
    ]
  },
  {
    title: "Chapter 10: Opinions and Reasons",
    level: "B1",
    description: "Express what you think and give simple reasons for your choices.",
    items: [
      {
        german: "Ich denke, dass ...",
        translations: {
          english: "I think that ...",
          hindi: "Mujhe lagta hai ki ...",
          bengali: "Ami mone kori je ...",
          tamil: "Naan ninaikkiren ...",
          telugu: "Nenu anukuntunnanu ...",
          marathi: "Mala watate ki ...",
          malayalam: "Enikku thonnunnu ..."
        },
        tip: "A useful frame for opinions."
      },
      {
        german: "weil",
        translations: {
          english: "because",
          hindi: "Kyunki",
          bengali: "Karon",
          tamil: "Yenendraal",
          telugu: "Endukante",
          marathi: "Karan",
          malayalam: "Karanam"
        },
        tip: "Essential for giving reasons."
      },
      {
        german: "meiner Meinung nach",
        translations: {
          english: "in my opinion",
          hindi: "Meri rai mein",
          bengali: "Amar mote",
          tamil: "En karuththupadi",
          telugu: "Na abhiprayam prakaram",
          marathi: "Majhya matene",
          malayalam: "Ente abhiprayathil"
        },
        tip: "Great for discussions and writing."
      },
      {
        german: "wichtig",
        translations: {
          english: "important",
          hindi: "Mahatvapurn",
          bengali: "Guruttopurno",
          tamil: "Mukkiyam",
          telugu: "Mukhyam",
          marathi: "Mahatvache",
          malayalam: "Pradhaanam"
        },
        tip: "A strong and common adjective."
      }
    ],
    exam: [
      {
        prompt: "What does weil mean?",
        type: "select",
        options: ["although", "because", "before"],
        answer: "because"
      },
      {
        prompt: "Type the German phrase for in my opinion.",
        type: "text",
        answer: "meiner meinung nach"
      }
    ]
  },
  {
    title: "Chapter 11: News and Media",
    level: "B2",
    description: "Understand more abstract vocabulary used in media and current events.",
    items: [
      {
        german: "die Nachricht",
        translations: {
          english: "news item / message",
          hindi: "Khabar / sandesh",
          bengali: "Khobor / barta",
          tamil: "Seithi / message",
          telugu: "Vartha / message",
          marathi: "Baatmi / sandesh",
          malayalam: "Vartha / sandesham"
        },
        tip: "Important in both media and daily life."
      },
      {
        german: "berichten",
        translations: {
          english: "to report",
          hindi: "Report karna",
          bengali: "Report kora",
          tamil: "Arikkai seyyavum",
          telugu: "Report cheyadam",
          marathi: "Ahwal dene",
          malayalam: "Report cheyyuka"
        },
        tip: "A strong B2-level verb."
      },
      {
        german: "die Quelle",
        translations: {
          english: "source",
          hindi: "Srot",
          bengali: "Utsho",
          tamil: "Moolam",
          telugu: "Moolam",
          marathi: "Srot",
          malayalam: "Aadharam"
        },
        tip: "Useful for research and critical reading."
      },
      {
        german: "zuverl\u00e4ssig",
        translations: {
          english: "reliable",
          hindi: "Bharosemand",
          bengali: "Bishwasto",
          tamil: "Nambikkaiyana",
          telugu: "Namakamaina",
          marathi: "Vishwasu",
          malayalam: "Vishwasaneeyam"
        },
        tip: "Helpful when evaluating information."
      }
    ],
    exam: [
      {
        prompt: "What does die Quelle mean?",
        type: "select",
        options: ["source", "headline", "camera"],
        answer: "source"
      },
      {
        prompt: "Type the German adjective for reliable.",
        type: "text",
        answer: "zuverlassig"
      }
    ]
  },
  {
    title: "Chapter 12: Problem Solving",
    level: "B2",
    description: "Describe challenges, suggest solutions, and react more precisely.",
    items: [
      {
        german: "die Herausforderung",
        translations: {
          english: "challenge",
          hindi: "Chunauti",
          bengali: "Challange / chunauti",
          tamil: "Savāl",
          telugu: "Savaal",
          marathi: "Aavhan",
          malayalam: "Velluvili"
        },
        tip: "Useful in work, study, and personal contexts."
      },
      {
        german: "die L\u00f6sung",
        translations: {
          english: "solution",
          hindi: "Samadhan",
          bengali: "Somadhan",
          tamil: "Theervu",
          telugu: "Pariharam",
          marathi: "Upay",
          malayalam: "Pariharam"
        },
        tip: "A key word for structured discussions."
      },
      {
        german: "vorschlagen",
        translations: {
          english: "to suggest",
          hindi: "Sujhav dena",
          bengali: "Prostab dewa",
          tamil: "Parinthurai seyyavum",
          telugu: "Suchinchatam",
          marathi: "Sujhav dene",
          malayalam: "Nirdeshikkuka"
        },
        tip: "Great for meetings and teamwork."
      },
      {
        german: "stattdessen",
        translations: {
          english: "instead",
          hindi: "Iske badle",
          bengali: "Tar bodole",
          tamil: "Idharku badhilaga",
          telugu: "Daani badulu",
          marathi: "Tyachya aivaji",
          malayalam: "Pakaram"
        },
        tip: "Helps you compare alternatives."
      }
    ],
    exam: [
      {
        prompt: "What does die L\u00f6sung mean?",
        type: "select",
        options: ["question", "solution", "method"],
        answer: "solution"
      },
      {
        prompt: "Type the German verb for to suggest.",
        type: "text",
        answer: "vorschlagen"
      }
    ]
  },
  {
    title: "Chapter 13: Formal Communication",
    level: "B2",
    description: "Practice more polished language for emails, requests, and formal situations.",
    items: [
      {
        german: "Sehr geehrte Damen und Herren",
        translations: {
          english: "Dear Sir or Madam",
          hindi: "Aadarniya mahoday / mahodaya",
          bengali: "Shraddheyo sir / madam",
          tamil: "Madhippukuriya ayya / amma",
          telugu: "Gauravaneeya sir / madam",
          marathi: "Adarniya mahoday / mahodaya",
          malayalam: "Aadaraneeyaraaya sir / madam"
        },
        tip: "A classic formal opening."
      },
      {
        german: "mit freundlichen Gr\u00fc\u00dfen",
        translations: {
          english: "kind regards",
          hindi: "Shubhkamnayein",
          bengali: "Shubhechha",
          tamil: "Anbudan",
          telugu: "Subhakankshalu",
          marathi: "Shubhechha",
          malayalam: "Snehapoorvam"
        },
        tip: "Common in formal emails and letters."
      },
      {
        german: "anfordern",
        translations: {
          english: "to request",
          hindi: "Anurodh karna",
          bengali: "Onurodh kora",
          tamil: "Korikkai viduvathu",
          telugu: "Abhyarthinchadam",
          marathi: "Vinanti karne",
          malayalam: "Abhyarthikkuka"
        },
        tip: "Useful in more official contexts."
      },
      {
        german: "die Unterlagen",
        translations: {
          english: "documents",
          hindi: "Dastaavez",
          bengali: "Nothipotro",
          tamil: "Aavanangal",
          telugu: "Patralu",
          marathi: "Kagadpatre",
          malayalam: "Rekhakal"
        },
        tip: "A good word for admin and office communication."
      }
    ],
    exam: [
      {
        prompt: "What does die Unterlagen mean?",
        type: "select",
        options: ["documents", "deadlines", "contracts"],
        answer: "documents"
      },
      {
        prompt: "Type the German phrase for kind regards.",
        type: "text",
        answer: "mit freundlichen grussen"
      }
    ]
  },
  {
    title: "Chapter 14: Argument and Discussion",
    level: "C1",
    description: "Develop stronger discussion skills with nuanced connectors and abstract language.",
    items: [
      {
        german: "einerseits ... andererseits",
        translations: {
          english: "on the one hand ... on the other hand",
          hindi: "Ek taraf ... doosri taraf",
          bengali: "Ek dike ... onno dike",
          tamil: "Oru pakkam ... matroru pakkam",
          telugu: "Oka vaipu ... inko vaipu",
          marathi: "Ek bajula ... dusrya bajula",
          malayalam: "Oru vasham ... maru vasham"
        },
        tip: "Excellent for balanced arguments."
      },
      {
        german: "die Ansicht vertreten",
        translations: {
          english: "to hold the view",
          hindi: "Yeh rai rakhna",
          bengali: "Ei mot poshon kora",
          tamil: "Indha karuththai pidiththirukka",
          telugu: "Ee abhiprayam kaligi undadam",
          marathi: "He mat thevne",
          malayalam: "Ee abhiprayam pidikkuka"
        },
        tip: "A more advanced way to express opinion."
      },
      {
        german: "folglich",
        translations: {
          english: "consequently",
          hindi: "Isliye natije mein",
          bengali: "Foleshorup",
          tamil: "Athanalae",
          telugu: "Anduvalla",
          marathi: "Parinamataha",
          malayalam: "Athinaal"
        },
        tip: "Useful in formal speaking and writing."
      },
      {
        german: "die Voraussetzung",
        translations: {
          english: "prerequisite / condition",
          hindi: "Shart / aavashyakta",
          bengali: "Proyojonio shart",
          tamil: "Mun thevai / nilai",
          telugu: "Mundastu avasaram / condition",
          marathi: "Aavashyak shart",
          malayalam: "Mumpathe aavashyam / condition"
        },
        tip: "A strong academic and professional term."
      }
    ],
    exam: [
      {
        prompt: "What does folglich mean?",
        type: "select",
        options: ["however", "consequently", "barely"],
        answer: "consequently"
      },
      {
        prompt: "Type the German word for prerequisite / condition.",
        type: "text",
        answer: "die voraussetzung"
      }
    ]
  },
  {
    title: "Chapter 15: Academic and Abstract Language",
    level: "C1",
    description: "Work with higher-level vocabulary often used in essays, presentations, and analysis.",
    items: [
      {
        german: "die Erkenntnis",
        translations: {
          english: "insight / finding",
          hindi: "Samajh / nishkarsh",
          bengali: "Uplobdhi / folafol",
          tamil: "Puridhal / kandupidippu",
          telugu: "Ardham / kanugonna vishayam",
          marathi: "Samajh / nishkarsh",
          malayalam: "Manassilakkal / kandethal"
        },
        tip: "Common in research and reflective writing."
      },
      {
        german: "ber\u00fccksichtigen",
        translations: {
          english: "to take into account",
          hindi: "Dhyan mein rakhna",
          bengali: "Mone rakha / gononay neoa",
          tamil: "Kanakkil eduththukkol",
          telugu: "Parigananalo tiskovadam",
          marathi: "Lakshat ghene",
          malayalam: "Kanakkiledukkuka"
        },
        tip: "A very useful advanced verb."
      },
      {
        german: "im Hinblick auf",
        translations: {
          english: "with regard to",
          hindi: "Ke sandarbh mein",
          bengali: "Er proshonge",
          tamil: "Idhai poruththavarai",
          telugu: "Daani sambandhamga",
          marathi: "Yachya sandarbhāt",
          malayalam: "Ithinekurichu"
        },
        tip: "A polished connector for formal contexts."
      },
      {
        german: "nachhaltig",
        translations: {
          english: "sustainable / lasting",
          hindi: "Tikau / sthayi",
          bengali: "Tike thaka / sthayi",
          tamil: "Nilainilayaana / neediththirukkum",
          telugu: "Sthiramaiana / dirghakala",
          marathi: "Tikau / dirghakalīn",
          malayalam: "Sthiramaaya / neenda nilanilkkunna"
        },
        tip: "Frequently used in advanced discussions."
      }
    ],
    exam: [
      {
        prompt: "What does ber\u00fccksichtigen mean?",
        type: "select",
        options: ["to describe", "to compare", "to take into account"],
        answer: "to take into account"
      },
      {
        prompt: "Type the German phrase for with regard to.",
        type: "text",
        answer: "im hinblick auf"
      }
    ]
  }
];

function buildTranslations(english, overrides = {}) {
  return {
    english,
    hindi: english,
    bengali: english,
    tamil: english,
    telugu: english,
    marathi: english,
    malayalam: english,
    ...overrides
  };
}

chapters.push(
  {
    title: "Chapter 16: Advanced Writing",
    level: "C1",
    description: "Write clearer arguments, stronger summaries, and more polished long answers.",
    items: [
      { german: "zusammenfassen", translations: buildTranslations("to summarize"), tip: "Essential for essays and reports." },
      { german: "der Standpunkt", translations: buildTranslations("point of view"), tip: "Useful when comparing positions." },
      { german: "darstellen", translations: buildTranslations("to present / portray"), tip: "Strong for formal writing." },
      { german: "hingegen", translations: buildTranslations("in contrast"), tip: "Great for balanced writing." }
    ],
    exam: [
      { prompt: "What does zusammenfassen mean?", type: "select", options: ["to summarize", "to warn", "to borrow"], answer: "to summarize" },
      { prompt: "Type the German word for point of view.", type: "text", answer: "der standpunkt" }
    ]
  },
  {
    title: "Chapter 17: Literature and Style",
    level: "C1",
    description: "Read and discuss tone, style, and interpretation in a more advanced way.",
    items: [
      { german: "die Metapher", translations: buildTranslations("metaphor"), tip: "A classic literary term." },
      { german: "der Ausdruck", translations: buildTranslations("expression"), tip: "Useful for nuance and tone." },
      { german: "vielschichtig", translations: buildTranslations("multi-layered"), tip: "A strong descriptive adjective." },
      { german: "deuten", translations: buildTranslations("to interpret"), tip: "Useful in essays and analysis." }
    ],
    exam: [
      { prompt: "What does deuten mean?", type: "select", options: ["to interpret", "to memorize", "to hide"], answer: "to interpret" },
      { prompt: "Type the German word for metaphor.", type: "text", answer: "die metapher" }
    ]
  },
  {
    title: "Chapter 18: Society and Culture",
    level: "C1",
    description: "Discuss social topics and cultural questions with more confidence.",
    items: [
      { german: "die Gesellschaft", translations: buildTranslations("society"), tip: "A core advanced topic word." },
      { german: "der Wandel", translations: buildTranslations("change / transformation"), tip: "Useful in social analysis." },
      { german: "die Vielfalt", translations: buildTranslations("diversity"), tip: "A high-value discussion word." },
      { german: "prägen", translations: buildTranslations("to shape / influence"), tip: "Useful for culture and history topics." }
    ],
    exam: [
      { prompt: "What does die Vielfalt mean?", type: "select", options: ["diversity", "conflict", "habit"], answer: "diversity" },
      { prompt: "Type the German word for society.", type: "text", answer: "die gesellschaft" }
    ]
  },
  {
    title: "Chapter 19: Workplace Negotiation",
    level: "C1",
    description: "Handle advanced work conversations, negotiation, and collaboration.",
    items: [
      { german: "verhandeln", translations: buildTranslations("to negotiate"), tip: "A valuable professional verb." },
      { german: "die Einigung", translations: buildTranslations("agreement"), tip: "Useful in team and contract language." },
      { german: "der Vorschlag", translations: buildTranslations("proposal"), tip: "Great for meetings and planning." },
      { german: "umsetzen", translations: buildTranslations("to implement"), tip: "Common in project language." }
    ],
    exam: [
      { prompt: "What does umsetzen mean?", type: "select", options: ["to postpone", "to implement", "to refuse"], answer: "to implement" },
      { prompt: "Type the German verb for to negotiate.", type: "text", answer: "verhandeln" }
    ]
  },
  {
    title: "Chapter 20: Listening to Real-Life German",
    level: "C1",
    description: "Prepare for faster spoken German and more natural turns of phrase.",
    items: [
      { german: "überhören", translations: buildTranslations("to miss hearing"), tip: "Useful when speech is fast." },
      { german: "die Umgangssprache", translations: buildTranslations("colloquial language"), tip: "A key listening concept." },
      { german: "andeuten", translations: buildTranslations("to imply / hint"), tip: "Great for nuance." },
      { german: "nachfragen", translations: buildTranslations("to ask again / clarify"), tip: "A survival skill in conversation." }
    ],
    exam: [
      { prompt: "What does nachfragen mean?", type: "select", options: ["to interrupt", "to ask again / clarify", "to summarize"], answer: "to ask again / clarify" },
      { prompt: "Type the German word for colloquial language.", type: "text", answer: "die umgangssprache" }
    ]
  },
  {
    title: "Chapter 21: Precision Vocabulary",
    level: "C2",
    description: "Move beyond general understanding and choose more exact words.",
    items: [
      { german: "präzise", translations: buildTranslations("precise"), tip: "A key advanced adjective." },
      { german: "nuanciert", translations: buildTranslations("nuanced"), tip: "Perfect for C2 expression." },
      { german: "die Abgrenzung", translations: buildTranslations("distinction / differentiation"), tip: "Great for academic work." },
      { german: "verdeutlichen", translations: buildTranslations("to clarify / make clear"), tip: "Useful in explanations." }
    ],
    exam: [
      { prompt: "What does nuanciert mean?", type: "select", options: ["simple", "nuanced", "temporary"], answer: "nuanced" },
      { prompt: "Type the German word for precise.", type: "text", answer: "prazise" }
    ]
  },
  {
    title: "Chapter 22: Idioms and Expressions",
    level: "C2",
    description: "Understand colorful language that sounds more natural and native-like.",
    items: [
      { german: "Da liegt der Hund begraben", translations: buildTranslations("That is the real problem"), tip: "A classic idiomatic phrase." },
      { german: "ins Auge fassen", translations: buildTranslations("to consider"), tip: "Very useful in advanced reading." },
      { german: "auf den Punkt bringen", translations: buildTranslations("to get to the point"), tip: "A practical idiom." },
      { german: "unter die Lupe nehmen", translations: buildTranslations("to examine closely"), tip: "Common in analysis." }
    ],
    exam: [
      { prompt: "What does auf den Punkt bringen mean?", type: "select", options: ["to get to the point", "to lose patience", "to travel far"], answer: "to get to the point" },
      { prompt: "Type the German phrase for to examine closely.", type: "text", answer: "unter die lupe nehmen" }
    ]
  },
  {
    title: "Chapter 23: Passive and Formal Structures",
    level: "C2",
    description: "Understand how advanced German uses passive forms and formal framing.",
    items: [
      { german: "es wird erwartet", translations: buildTranslations("it is expected"), tip: "A common passive pattern." },
      { german: "durchgeführt", translations: buildTranslations("carried out"), tip: "Frequent in formal texts." },
      { german: "es handelt sich um", translations: buildTranslations("it is about / it concerns"), tip: "Very common in formal writing." },
      { german: "insofern", translations: buildTranslations("in that respect"), tip: "A polished connector." }
    ],
    exam: [
      { prompt: "What does es handelt sich um mean?", type: "select", options: ["it depends on", "it concerns / it is about", "it turns around"], answer: "it concerns / it is about" },
      { prompt: "Type the German phrase for it is expected.", type: "text", answer: "es wird erwartet" }
    ]
  },
  {
    title: "Chapter 24: Subjunctive and Hypothesis",
    level: "C2",
    description: "Practice advanced hypotheticals and refined ways to soften statements.",
    items: [
      { german: "angenommen, dass ...", translations: buildTranslations("assuming that ..."), tip: "Useful for hypothetical writing." },
      { german: "es wäre denkbar", translations: buildTranslations("it would be conceivable"), tip: "A polished advanced frame." },
      { german: "hätte ich gewusst", translations: buildTranslations("had I known"), tip: "A classic subjunctive pattern." },
      { german: "vorausgesetzt", translations: buildTranslations("provided that"), tip: "Excellent for formal argumentation." }
    ],
    exam: [
      { prompt: "What does vorausgesetzt mean?", type: "select", options: ["although", "provided that", "nevertheless"], answer: "provided that" },
      { prompt: "Type the German phrase for had I known.", type: "text", answer: "hatte ich gewusst" }
    ]
  },
  {
    title: "Chapter 25: Debate and Rhetoric",
    level: "C2",
    description: "Strengthen persuasion, rebuttal, and structured spoken argument.",
    items: [
      { german: "widerlegen", translations: buildTranslations("to refute"), tip: "A very advanced discussion verb." },
      { german: "der Einwand", translations: buildTranslations("objection"), tip: "Useful in debate and critical discussion." },
      { german: "schlussfolgern", translations: buildTranslations("to infer"), tip: "Important for logic and argument." },
      { german: "überzeugend", translations: buildTranslations("convincing"), tip: "A strong evaluative adjective." }
    ],
    exam: [
      { prompt: "What does widerlegen mean?", type: "select", options: ["to refute", "to expand", "to observe"], answer: "to refute" },
      { prompt: "Type the German word for objection.", type: "text", answer: "der einwand" }
    ]
  },
  {
    title: "Chapter 26: Academic German",
    level: "C2",
    description: "Handle abstract analysis, definitions, and formal academic expression.",
    items: [
      { german: "die Fragestellung", translations: buildTranslations("research question / key question"), tip: "Common in essays and studies." },
      { german: "erörtern", translations: buildTranslations("to discuss in depth"), tip: "A classic exam verb." },
      { german: "die Erkenntnisse", translations: buildTranslations("findings"), tip: "Very useful in reports and presentations." },
      { german: "herleiten", translations: buildTranslations("to derive"), tip: "Common in logic and academic work." }
    ],
    exam: [
      { prompt: "What does erörtern mean?", type: "select", options: ["to discuss in depth", "to memorize", "to postpone"], answer: "to discuss in depth" },
      { prompt: "Type the German word for findings.", type: "text", answer: "die erkenntnisse" }
    ]
  },
  {
    title: "Chapter 27: Business and Legal Basics",
    level: "C2",
    description: "Get comfortable with advanced workplace, contract, and compliance language.",
    items: [
      { german: "die Vereinbarung", translations: buildTranslations("agreement"), tip: "Very useful in business German." },
      { german: "verbindlich", translations: buildTranslations("binding / obligatory"), tip: "A legal and formal adjective." },
      { german: "die Frist", translations: buildTranslations("deadline / time limit"), tip: "Common in official texts." },
      { german: "einreichen", translations: buildTranslations("to submit"), tip: "Important for applications and paperwork." }
    ],
    exam: [
      { prompt: "What does verbindlich mean?", type: "select", options: ["binding / obligatory", "friendly", "temporary"], answer: "binding / obligatory" },
      { prompt: "Type the German word for deadline / time limit.", type: "text", answer: "die frist" }
    ]
  },
  {
    title: "Chapter 28: Humor and Colloquial German",
    level: "C2",
    description: "Explore playful language, irony, and more natural spoken rhythm.",
    items: [
      { german: "der Spruch", translations: buildTranslations("saying / witty line"), tip: "Often used in casual contexts." },
      { german: "witzig", translations: buildTranslations("funny / witty"), tip: "Simple but important for tone." },
      { german: "scherzhaft", translations: buildTranslations("jokingly"), tip: "Useful when reading intent." },
      { german: "etwas locker sehen", translations: buildTranslations("to take something lightly"), tip: "A natural colloquial expression." }
    ],
    exam: [
      { prompt: "What does scherzhaft mean?", type: "select", options: ["strictly", "jokingly", "silently"], answer: "jokingly" },
      { prompt: "Type the German adjective for funny / witty.", type: "text", answer: "witzig" }
    ]
  },
  {
    title: "Chapter 29: Pronunciation and Nuance",
    level: "C2",
    description: "Notice the tiny differences that make advanced German sound smoother and clearer.",
    items: [
      { german: "betonen", translations: buildTranslations("to stress / emphasize"), tip: "Important for pronunciation and meaning." },
      { german: "der Akzent", translations: buildTranslations("accent"), tip: "Useful when discussing speech." },
      { german: "flüssig", translations: buildTranslations("fluent / flowing"), tip: "A motivating advanced adjective." },
      { german: "missverständlich", translations: buildTranslations("misleading / ambiguous"), tip: "Useful when clarifying." }
    ],
    exam: [
      { prompt: "What does flüssig mean?", type: "select", options: ["fluent / flowing", "frozen", "boring"], answer: "fluent / flowing" },
      { prompt: "Type the German word for accent.", type: "text", answer: "der akzent" }
    ]
  },
  {
    title: "Chapter 30: Mastery Review",
    level: "C2",
    description: "Bring everything together and celebrate a broad path through advanced German.",
    items: [
      { german: "beherrschen", translations: buildTranslations("to master"), tip: "A fitting final chapter word." },
      { german: "anwenden", translations: buildTranslations("to apply"), tip: "Knowledge becomes useful when applied." },
      { german: "selbstbewusst", translations: buildTranslations("self-confident"), tip: "Exactly how advanced learners should feel." },
      { german: "weitermachen", translations: buildTranslations("to keep going"), tip: "A final reminder that learning never stops." }
    ],
    exam: [
      { prompt: "What does beherrschen mean?", type: "select", options: ["to master", "to compare", "to postpone"], answer: "to master" },
      { prompt: "Type the German verb for to apply.", type: "text", answer: "anwenden" }
    ]
  }
);

const endlessChapterThemes = [
  ["Advanced Listening Drills", ["to recognize tone", "spoken shortcut", "fast reply", "clarification question"]],
  ["Travel Situations Plus", ["platform change", "reservation", "departure board", "connection train"]],
  ["Food and Restaurant Depth", ["menu recommendation", "allergy note", "table reservation", "local specialty"]],
  ["Office Communication Plus", ["deadline update", "follow-up email", "team feedback", "project summary"]],
  ["German for Study", ["lecture note", "research source", "group presentation", "key argument"]],
  ["Daily Life Precision", ["repair request", "bank appointment", "rental contract", "insurance form"]],
  ["Culture and Conversation", ["festival tradition", "public opinion", "social custom", "shared value"]],
  ["Debate Practice", ["counterargument", "evidence point", "balanced position", "final conclusion"]],
  ["Fluent Speaking Builder", ["smooth transition", "natural filler", "strong emphasis", "self-correction"]],
  ["Real World Mastery", ["formal complaint", "solution path", "careful explanation", "professional tone"]]
];

function createGeneratedChapter(index, themeName, words) {
  const level = index < 45 ? "C1" : "C2";
  return {
    title: `Chapter ${index + 1}: ${themeName}`,
    level,
    description: `A deeper ${level} practice chapter that keeps building expert-level German across real-world topics.`,
    items: words.map((word, wordIndex) => ({
      german: `${themeName} phrase ${wordIndex + 1}`,
      translations: buildTranslations(word),
      tip: `Practice this ${level} phrase set slowly, then repeat it at natural speed.`
    })),
    exam: [
      {
        prompt: `What is the focus of ${themeName}?`,
        type: "select",
        options: [words[0], "random beginner phrase", "English grammar only"],
        answer: words[0]
      },
      {
        prompt: `Type this key phrase exactly: ${themeName} phrase 1`,
        type: "text",
        answer: `${themeName} phrase 1`
      }
    ]
  };
}

while (chapters.length < 60) {
  const generatedIndex = chapters.length;
  const [themeName, words] = endlessChapterThemes[generatedIndex % endlessChapterThemes.length];
  chapters.push(createGeneratedChapter(generatedIndex, themeName, words));
}

const lessonGrid = document.getElementById("lesson-grid");
const wordOfTheDay = document.getElementById("word-of-the-day");
const surpriseBtn = document.getElementById("surprise-btn");
const languageSelect = document.getElementById("language-select");
const chapterTitle = document.getElementById("chapter-title");
const chapterDescription = document.getElementById("chapter-description");
const chapterProgress = document.getElementById("chapter-progress");
const examTitle = document.getElementById("exam-title");
const flashcard = document.getElementById("flashcard");
const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const flipBtn = document.getElementById("flip-btn");
const nextBtn = document.getElementById("next-btn");
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
const reminderTime = document.getElementById("reminder-time");
const saveReminderBtn = document.getElementById("save-reminder-btn");
const reminderStatus = document.getElementById("reminder-status");
const focusReminder = document.getElementById("focus-reminder");
const installStatus = document.getElementById("install-status");
const progressCount = document.getElementById("progress-count");
const xpCount = document.getElementById("xp-count");
const rewardCount = document.getElementById("reward-count");
const masteryCount = document.getElementById("mastery-count");
const rewardBanner = document.getElementById("reward-banner");
const rewardGrid = document.getElementById("reward-grid");
const speakBtn = document.getElementById("speak-btn");

let chapterIndex = 0;
let flashcardIndex = 0;
let isFlipped = false;
let selectedLanguage = localStorage.getItem("preferredLanguage") || "english";
let reminderTimeoutId = null;
let dailyNotificationIntervalId = null;
const completedChapters = new Set(JSON.parse(localStorage.getItem("completedChapters") || "[]"));

const rewardMilestones = [
  { threshold: 1, title: "First Steps Ribbon", icon: "🎀", note: "Finish your first chapter." },
  { threshold: 3, title: "A1 Spark Badge", icon: "🌟", note: "Build beginner confidence." },
  { threshold: 6, title: "Daily Learner Cup", icon: "🏆", note: "Stay consistent through early chapters." },
  { threshold: 10, title: "Conversation Charm", icon: "💬", note: "You can handle everyday German." },
  { threshold: 15, title: "C1 Climber Medal", icon: "🚀", note: "You reached advanced territory." },
  { threshold: 20, title: "Deep Study Crown", icon: "👑", note: "Strong momentum through C1." },
  { threshold: 25, title: "C2 Power Gem", icon: "💎", note: "You are playing at expert level." },
  { threshold: 30, title: "Talksy Grand Master", icon: "🎓", note: "You completed the first mastery arc." },
  { threshold: 45, title: "Near-Native Rocket", icon: "🚄", note: "You pushed beyond the core roadmap." },
  { threshold: chapters.length, title: "Expert German Speaker", icon: "🏅", note: "You completed the full expert roadmap." }
];

const reminderMessages = [
  {
    title: "Hey cutie, your German misses you",
    body: "Two minutes with Talksy and even 'Guten Morgen' will start blushing."
  },
  {
    title: "Stop scrolling, language star",
    body: "Instagram can wait. Your next German chapter is looking adorable right now."
  },
  {
    title: "Tiny flirt alert",
    body: "Come learn one sweet German phrase and impress your future self."
  },
  {
    title: "Your streak is waving at you",
    body: "Open Talksy and give German that main-character attention."
  }
];

function getMeaning(item) {
  return item.translations?.[selectedLanguage] || item.translations?.english || "";
}

function getRandomReminderMessage() {
  return reminderMessages[Math.floor(Math.random() * reminderMessages.length)];
}

function currentChapter() {
  return chapters[chapterIndex];
}

function saveCompletionProgress() {
  localStorage.setItem("completedChapters", JSON.stringify([...completedChapters]));
}

function calculateXp() {
  return [...completedChapters].reduce((total, chapterNumber) => total + 100 + chapterNumber * 10, 0);
}

function getMasteryTitle() {
  if (completedChapters.size >= chapters.length) {
    return "Expert German Speaker";
  }

  if (completedChapters.size >= 45) {
    return "Near-Native Climber";
  }

  if (completedChapters.size >= 30) {
    return "Advanced German Speaker";
  }

  if (completedChapters.size >= 15) {
    return "Strong Intermediate Speaker";
  }

  if (completedChapters.size >= 5) {
    return "German Builder";
  }

  return "German Explorer";
}

function renderRewards(message = "") {
  const unlockedRewards = rewardMilestones.filter(
    (reward) => completedChapters.size >= reward.threshold
  );

  progressCount.textContent = `${completedChapters.size} / ${chapters.length}`;
  xpCount.textContent = `${calculateXp()} XP`;
  rewardCount.textContent = String(unlockedRewards.length);
  masteryCount.textContent = getMasteryTitle();

  if (message) {
    rewardBanner.textContent = message;
    rewardBanner.classList.remove("hidden");
  } else {
    rewardBanner.classList.add("hidden");
  }

  rewardGrid.innerHTML = rewardMilestones
    .map((reward) => {
      const unlocked = completedChapters.size >= reward.threshold;
      return `
        <article class="reward-card ${unlocked ? "" : "locked"}">
          <span class="reward-icon">${reward.icon}</span>
          <h3>${reward.title}</h3>
          <p>${reward.note}</p>
          <p class="reward-meta">${unlocked ? "Unlocked" : `Unlock at ${reward.threshold} chapters`}</p>
        </article>
      `;
    })
    .join("");
}

function completeCurrentChapter() {
  const chapterNumber = chapterIndex + 1;
  if (completedChapters.has(chapterNumber)) {
    return "Chapter already mastered. Keep going for the next reward.";
  }

  completedChapters.add(chapterNumber);
  saveCompletionProgress();

  const milestoneReward = rewardMilestones.find(
    (reward) => reward.threshold === completedChapters.size
  );
  let message = `You earned ${100 + chapterNumber * 10} XP for mastering ${currentChapter().title}.`;

  if (milestoneReward) {
    message += ` Reward unlocked: ${milestoneReward.icon} ${milestoneReward.title}.`;
  }

  renderRewards(message);
  return message;
}

function renderLessonCards() {
  lessonGrid.innerHTML = currentChapter().items
    .map(
      (item, index) => `
        <article class="lesson-card" style="animation-delay: ${index * 90}ms">
          <p class="german">${item.german}</p>
          <p class="english">${getMeaning(item)}</p>
          <p>${item.tip}</p>
          <div class="lesson-card-actions">
            <button class="audio-button" type="button" data-speak="${item.german.replace(/"/g, "&quot;")}">Hear German</button>
          </div>
        </article>
      `
    )
    .join("");
}

function showRandomWord() {
  const items = currentChapter().items;
  const item = items[Math.floor(Math.random() * items.length)];
  wordOfTheDay.textContent = `Try this: ${item.german} means "${getMeaning(item)}".`;
}

function renderFlashcard() {
  const current = currentChapter().items[flashcardIndex];
  flashcardFront.textContent = current.german;
  flashcardBack.textContent = getMeaning(current);
  flashcardBack.classList.toggle("hidden", !isFlipped);
  flashcard.setAttribute("aria-pressed", String(isFlipped));
}

function speakGerman(text) {
  if (!("speechSynthesis" in window)) {
    quizResult.textContent = "This browser does not support built-in pronunciation audio.";
    quizResult.className = "quiz-result warning";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.88;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("de"));
  if (germanVoice) {
    utterance.voice = germanVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function toggleFlashcard() {
  isFlipped = !isFlipped;
  renderFlashcard();
}

function nextFlashcard() {
  flashcardIndex = (flashcardIndex + 1) % currentChapter().items.length;
  isFlipped = false;
  renderFlashcard();
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderExam() {
  const exam = currentChapter().exam;

  quizForm.innerHTML = [
    ...exam.map((question, index) => {
      if (question.type === "select") {
        return `
          <div class="quiz-question">
            <label for="q${index}">${question.prompt}</label>
            <select id="q${index}" name="q${index}">
              <option value="">Choose one</option>
              ${question.options
                .map((option) => `<option value="${option}">${option}</option>`)
                .join("")}
            </select>
          </div>
        `;
      }

      return `
        <div class="quiz-question">
          <label for="q${index}">${question.prompt}</label>
          <input id="q${index}" name="q${index}" type="text" placeholder="Type your answer" />
        </div>
      `;
    }),
    `<button class="button primary" type="submit">Submit exam</button>`
  ].join("");
}

function renderChapter() {
  const chapter = currentChapter();
  chapterTitle.textContent = `${chapter.title} (${chapter.level})`;
  chapterDescription.textContent = chapter.description;
  chapterProgress.textContent = `Chapter ${chapterIndex + 1} of ${chapters.length} • Level ${chapter.level}`;
  examTitle.textContent = `Simple exam for ${chapter.title}`;
  flashcardIndex = 0;
  isFlipped = false;
  quizResult.textContent = "";
  quizResult.className = "quiz-result";
  renderLessonCards();
  renderFlashcard();
  renderExam();
  showRandomWord();
}

function saveReminder() {
  const value = reminderTime.value;
  localStorage.setItem("dailyReminderTime", value);
  reminderStatus.textContent = `Daily reminder saved for ${value}. Talksy will send playful nudges when notifications are allowed.`;
  reminderStatus.className = "quiz-result success";

  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        reminderStatus.textContent = `Daily reminder saved for ${value}. Notifications are enabled now.`;
      }
    });
  }

  startReminderLoop();
}

function scheduleFocusReminder() {
  if (reminderTimeoutId) {
    window.clearTimeout(reminderTimeoutId);
  }

  focusReminder.classList.add("hidden");
  reminderTimeoutId = window.setTimeout(() => {
    focusReminder.textContent =
      "Hey scroll queen, German is waiting with puppy eyes. Come finish one cute chapter before your reel finger gets too powerful.";
    focusReminder.classList.remove("hidden");
  }, 45000);
}

function shouldSendReminderNow(savedTime, now) {
  const [hourText, minuteText] = savedTime.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  return now.getHours() === hour && now.getMinutes() === minute;
}

function sendPlayfulNotification() {
  const savedTime = localStorage.getItem("dailyReminderTime");
  if (!savedTime || !("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  const lastSentKey = "lastReminderDate";
  const now = new Date();
  const today = now.toDateString();

  if (!shouldSendReminderNow(savedTime, now) || localStorage.getItem(lastSentKey) === today) {
    return;
  }

  const message = getRandomReminderMessage();
  new Notification(message.title, {
    body: message.body,
    tag: "gigi-daily-reminder"
  });
  localStorage.setItem(lastSentKey, today);
}

function startReminderLoop() {
  if (dailyNotificationIntervalId) {
    window.clearInterval(dailyNotificationIntervalId);
  }

  sendPlayfulNotification();
  dailyNotificationIntervalId = window.setInterval(sendPlayfulNotification, 30000);
}

function registerAppShell() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        installStatus.textContent = "This website can also work like a simple app when installed from the browser.";
        installStatus.className = "quiz-result success";
      })
      .catch(() => {
        installStatus.textContent = "The site still works, but the app install feature could not be prepared here.";
        installStatus.className = "quiz-result warning";
      });
  }
}

function advanceChapter(rewardMessage = "") {
  if (chapterIndex < chapters.length - 1) {
    chapterIndex += 1;
    renderChapter();
    window.location.hash = "lesson";
    quizResult.textContent = `${rewardMessage} Next up: ${currentChapter().title}.`;
    quizResult.className = "quiz-result success";
    return;
  }

  quizResult.textContent =
    `${rewardMessage} Excellent. You finished the full roadmap and are now marked as an Expert German Speaker.`;
  quizResult.className = "quiz-result success";
  renderRewards("You completed every chapter and reached Expert German Speaker status.");
}

function handleQuizSubmit(event) {
  event.preventDefault();

  const exam = currentChapter().exam;
  let score = 0;

  exam.forEach((question, index) => {
    const answer = document.getElementById(`q${index}`).value;
    const normalizedAnswer = normalizeAnswer(answer);
    const normalizedExpected = normalizeAnswer(question.answer);

    if (normalizedAnswer === normalizedExpected) {
      score += 1;
    }
  });

  if (score === exam.length) {
    const rewardMessage = completeCurrentChapter();
    quizResult.textContent = `Score: ${score}/${exam.length}. Moving you to the next chapter...`;
    quizResult.className = "quiz-result success";
    window.setTimeout(() => advanceChapter(rewardMessage), 900);
    return;
  }

  quizResult.textContent = `Score: ${score}/${exam.length}. Review this chapter and submit again to continue.`;
  quizResult.className = "quiz-result warning";
}

languageSelect.value = selectedLanguage;
const savedReminder = localStorage.getItem("dailyReminderTime");
if (savedReminder) {
  reminderTime.value = savedReminder;
  reminderStatus.textContent = `Saved daily reminder: ${savedReminder}.`;
}

renderChapter();
renderRewards();
scheduleFocusReminder();
startReminderLoop();
registerAppShell();

surpriseBtn.addEventListener("click", showRandomWord);
languageSelect.addEventListener("change", (event) => {
  selectedLanguage = event.target.value;
  localStorage.setItem("preferredLanguage", selectedLanguage);
  renderChapter();
});
flipBtn.addEventListener("click", toggleFlashcard);
nextBtn.addEventListener("click", nextFlashcard);
saveReminderBtn.addEventListener("click", saveReminder);
flashcard.addEventListener("click", toggleFlashcard);
flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleFlashcard();
  }
});
lessonGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speak]");
  if (!button) {
    return;
  }

  speakGerman(button.dataset.speak);
});
speakBtn.addEventListener("click", () => {
  speakGerman(currentChapter().items[flashcardIndex].german);
});
quizForm.addEventListener("submit", handleQuizSubmit);
