Page({
  data: {
    article: null,
    currentSection: 0,
    sections: [],
    searchKeyword: '',
    searchResults: []
  },

  onLoad: function(options) {
    if (options.article) {
      var article = JSON.parse(options.article);
      this.setData({ article: article });
      
      // 根据文章类型加载内容
      this.loadArticleContent(article.content);
      
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: article.title
      });
    }
  },

  loadArticleContent: function(contentType) {
    var sections = [];
    
    if (contentType === 'conversation_starters') {
      sections = [
        {
          title: 'Random Conversation Starters',
          subtitle: 'Start your conversation with these interesting questions',
          content: [
            'Here are some great questions for starting a conversation. There are a lot of random conversation starters to get you started and then conversation questions listed by topic.',
            'There are tons of ways to use these questions. I find that the most rewarding way is for everyone to pull up this list of conversation starters on a phone or tablet, and then take turns with a friend or family member choose a question to ask each other.',
            'These questions are designed to help you break the ice, find common ground, and build deeper connections.'
          ],
          questions: [
            'What was the last funny video you saw?',
            'What do you do to get rid of stress?',
            'What is something you are obsessed with?',
            'Who is your favorite entertainer?',
            'What\'s your favorite way to waste time?',
            'Do you have any pets? What are their names?',
            'Where did you go last weekend?',
            'What are you going to do this weekend?',
            'What is something that is popular now that annoys you?',
            'What did you do on your last vacation?'
          ]
        },
        {
          title: 'Movie Conversation Starters',
          subtitle: 'Interesting topics about movies',
          content: [
            'Movies are great conversation topics because they can spark all kinds of interesting discussions.',
            'Movies are not just entertainment; they can also reflect society, culture, and human nature.'
          ],
          questions: [
            'What was the last movie you watched? How was it?',
            'Do you prefer to watch movies in the theater or at home?',
            'What\'s the worst movie you have seen recently?',
            'What\'s your favorite genre of movie?',
            'Do you like documentaries? Why or why not?'
          ]
        },
        {
          title: 'Music Conversation Starters',
          subtitle: 'Explore the world of music',
          content: [
            'Music is a powerful tool for connecting people. Everyone has their own unique musical taste.',
            'Music can evoke strong emotions and create shared experiences.'
          ],
          questions: [
            'What song always puts you in a good mood?',
            'What was the last song you listened to?',
            'Do you like going to concerts?',
            'Who was the first band you were really into?',
            'What\'s the best way to discover new music?'
          ]
        }
      ];
    } else if (contentType === 'questions_for_guys') {
      sections = [
        {
          title: 'Selected Questions Collection',
          subtitle: '50 deep questions to understand each other better',
          content: [
            'This is a great set of questions to ask guys to get them talking.',
            'Remember that every guy is different, so choose questions that you think will work best.',
            'Ask lots of follow-up questions to learn more and keep the conversation going.'
          ],
          questions: [
            'What\'s your best "drop the mic" moment?',
            'If you could only learn one magic spell, what would it do?',
            'What\'s the scariest sound you could hear at night?',
            'Who or what is your arch-nemesis?',
            'What\'s the best and worst thing about being male?',
            'What childish thing do you still enjoy?',
            'What movie could you watch over and over again?',
            'What long shot have you taken that really paid off?',
            'What movie do you wish life was more like?',
            'What\'s the most interesting piece of trivia you know?'
          ]
        },
        {
          title: 'Deep Thinking Questions',
          subtitle: 'Explore inner world and values',
          content: [
            'These questions are designed to deeply understand a person\'s inner world.',
            'Through these questions, you can understand a person\'s core beliefs and values.'
          ],
          questions: [
            'What\'s the most high-pressure situation you\'ve been in?',
            'What were you really worried about that turned out to be no big deal?',
            'What are you tired of hearing?',
            'What three events had the biggest impact on who you are today?',
            'What do most people get wrong?',
            'What\'s your biggest doubt?',
            'What wouldn\'t you do for $5 million?',
            'What do you think you know a lot about but probably don\'t?',
            'What is society doing now that will be laughed at in 20 years?',
            'What double standard is ridiculous and needs to end?'
          ]
        }
      ];
    } else if (contentType === 'deep_conversation_topics') {
      sections = [
        {
          title: 'Personal Questions',
          subtitle: 'Deep questions about personal life and experiences',
          content: [
            'These questions explore the highest and lowest points of life, personal goals, and self-identity.',
            'They help you understand someone\'s core values and life journey.'
          ],
          questions: [
            'What are the highest and lowest points of your life?',
            'How have your strengths help you to succeed? How have your faults hindered you?',
            'What are your biggest goals for your life? What progress have you made in attaining them?',
            'Who are you really? Who is behind the mask that you show to the rest of the world?',
            'What is holding you back from being the person you want to be?',
            'Where\'s your life headed?',
            'How do you think you will die?',
            'How would you react if there was irrefutable proof that God doesn\'t exist? How about if there was irrefutable proof that God does exist?'
          ]
        },
        {
          title: 'Human Nature Questions',
          subtitle: 'Exploring the essence of human behavior and psychology',
          content: [
            'These questions delve into the fundamental aspects of human nature and behavior.',
            'They help understand what makes us human and how we interact with the world.'
          ],
          questions: [
            'Is human nature constant or is it molded by culture? Can human nature be completely changed by culture or society?',
            'Are humans better at creation or destruction?',
            'What are the best and worst parts of human nature?',
            'If pressing a button meant you received 5 million dollars but it also killed 5 people somewhere in the world, would you press it?',
            'If you had to sum up the whole human species in 3 words, what would those words be?',
            'What aspects of humans have made us a successful species?',
            'Is what we perceive reality or just a construct of our minds?',
            'What is the best way to explore human nature: psychology, philosophy, or biology?'
          ]
        },
        {
          title: 'Society, Culture and the World',
          subtitle: 'Questions about society, government, and cultural values',
          content: [
            'These questions explore how societies function and how culture shapes our values.',
            'They help understand the complex relationship between individuals and society.'
          ],
          questions: [
            'Should governments make laws to protect people from hurting themselves?',
            'What is the most uplifting thing happening in the world right now? What is the most tragic thing?',
            'What does honor mean to you? How important is it to you?',
            'How important are morals in a healthy society? What are the most important morals for citizens to have?',
            'In the distant past, a person\'s life was very similar to their grandparents\' and grandchildren\'s lives. How has the rapid pace of technological advancement changed society?',
            'What is a miracle that happens every day?',
            'How important is freedom of the press to a healthy society?',
            'What are the most important factors in maintaining a well functioning society?'
          ]
        }
      ];
    } else if (contentType === 'fun_questions') {
      sections = [
        {
          title: 'Fun Questions To Ask',
          subtitle: 'Lighthearted and entertaining questions for great conversations',
          content: [
            'Here are some really fun questions to ask and answer. They cover all kinds of different subjects, so there are sure to be some that\'ll be perfect for you and the person you\'re talking to.',
            'A lot of these questions will bring out some really funny answers, and some are just enjoyable to discuss.',
            'Feel free to cherry pick the ones you like or go through them like a list. Just remember that the point isn\'t to ask all the questions, but rather it\'s to have a great conversation!'
          ],
          questions: [
            'When did you screw everything up, but no one ever found out it was you?',
            'What would you name your boat if you had one?',
            'What will finally break the internet?',
            'What celebrity would you rate as a perfect 10?',
            'Which fictional character would be the most boring to meet in real life?',
            'What is the best and worst purchases you\'ve ever made?',
            'If you had to change your name, what would your new name be, and why would you choose that name?',
            'What are some things that sound like compliments but are actually insults?',
            'What\'s a body part that you wouldn\'t mind losing?',
            'What\'s your biggest screw up in the kitchen?'
          ]
        }
      ];
    } else if (contentType === 'couple_conversations') {
      sections = [
        {
          title: 'Conversation Starters For Couples',
          subtitle: 'Deep and meaningful questions for couples to strengthen their relationship',
          content: [
            'These conversation starters are designed specifically for couples who want to deepen their connection.',
            'They help you understand each other better and create stronger bonds.',
            'Take your time with these questions and really listen to each other\'s answers.'
          ],
          questions: [
            'What\'s your favorite memory of us together?',
            'What\'s something you\'ve always wanted to tell me but haven\'t?',
            'What\'s your biggest fear about our relationship?',
            'What\'s something you think I don\'t understand about you?',
            'What\'s your favorite thing about our relationship?',
            'What\'s something you\'d like us to improve together?',
            'What\'s your biggest dream for our future?',
            'What\'s something you\'re grateful for in our relationship?',
            'What\'s a challenge we\'ve overcome together that made us stronger?',
            'What\'s something you\'d like to learn about me?'
          ]
        }
      ];
    } else if (contentType === 'twenty_one_questions') {
      sections = [
        {
          title: '21 Questions Game',
          subtitle: 'Classic game to get to know someone better',
          content: [
            'The 21 Questions Game is basically a way of getting to know someone better. At its core the game is just asking and answering questions.',
            'You can simply ask and answer the questions below, or you can play it as a game with different variations.',
            'The key is to have fun and learn something new about each other.'
          ],
          questions: [
            'What do most people think about you that is absolutely not true?',
            'What is the TLDR version of your life?',
            'Do you think the convenience of technology is worth the loss of privacy that comes with it?',
            'Is it okay to sacrifice one life to save ten?',
            'What are the consequences of everyone having instant distraction at their fingertips?',
            'What should they teach in high school but don\'t?',
            'Which movie or book do you think is ridiculously overrated?',
            'Who would you most like to sit next to on a 10 hour flight and why?',
            'What are two things you know you should how to do but don\'t?',
            'You have $100 to burn, all your friends are busy and you have the whole day to yourself, what do you do?'
          ]
        }
      ];
    } else if (contentType === 'philosophical_questions') {
      sections = [
        {
          title: 'Philosophical Questions',
          subtitle: 'Deep philosophical inquiries about life, reality, and existence',
          content: [
            'These questions explore fundamental philosophical concepts about human nature, reality, and existence.',
            'They are designed to stimulate deep thinking and meaningful discussions.',
            'Take your time with these questions - there are no right or wrong answers.'
          ],
          questions: [
            'Is human nature constant or is it molded by culture?',
            'Are humans better at creation or destruction?',
            'What are the best and worst parts of human nature?',
            'Is what we perceive reality or just a construct of our minds?',
            'What is the purpose of a human life?',
            'Are some lives more valuable than others?',
            'What does it mean to die well?',
            'If you could know the absolute and total truth to one question, what question would you ask?',
            'Do animals experience emotions? If so, do they experience emotions in the same way humans do?',
            'What is the most beneficial emotion? How about the most destructive?'
          ]
        }
      ];
    } else if (contentType === 'dating_conversations') {
      sections = [
        {
          title: 'Conversation Starters for a First Date',
          subtitle: 'Perfect questions to make your first date memorable and engaging',
          content: [
            'So you\'ve ordered your drink and found a nice table. You know how to flirt but do you know what to talk about on a first date?',
            'The best conversation starters for dating are ones that can give you both an insight into the other\'s personality and life.',
            'These questions are designed to be light enough for a first date but deep enough to create a real connection.'
          ],
          questions: [
            'What job did you want to do when you were a kid?',
            'If you had to pick one, skydiving, bungee jumping, or scuba diving, which would you do?',
            'What\'s the most important thing I should know about you?',
            'When you were a kid what did you think your life would look like now?',
            'Which of your family members are you most alike?',
            'What\'s the most interesting place you\'ve ever visited?',
            'What\'s something you\'re passionate about that most people don\'t know?',
            'What\'s your favorite way to spend a weekend?',
            'What\'s something you\'ve always wanted to learn?',
            'What\'s your biggest accomplishment so far?'
          ]
        }
      ];
    } else if (contentType === 'get_to_know_someone') {
      sections = [
        {
          title: 'Questions To Get To Know Someone',
          subtitle: 'From casual to personal, gradually understand someone\'s inner world',
          content: [
            'These questions are designed to help you get to know someone from the surface level to deeper understanding.',
            'Start with casual questions and gradually move to more personal ones as the conversation progresses.',
            'Remember to ask follow-up questions and really listen to their answers.'
          ],
          questions: [
            'What\'s your favorite way to spend a weekend?',
            'What\'s the most interesting place you\'ve ever visited?',
            'What\'s something you\'re passionate about?',
            'What\'s your biggest accomplishment so far?',
            'What\'s something you\'ve always wanted to learn?',
            'What\'s your favorite book or movie and why?',
            'What\'s something that always makes you laugh?',
            'What\'s your biggest fear?',
            'What\'s something you\'re grateful for today?',
            'What\'s your biggest dream for the future?'
          ]
        }
      ];
    } else if (contentType === 'this_or_that') {
      sections = [
        {
          title: 'This or That Questions',
          subtitle: 'Simple and fun choice questions to quickly understand preferences',
          content: [
            'This or That questions are simple choice questions that help you quickly understand someone\'s preferences.',
            'They\'re great ice breakers and can lead to interesting conversations about why someone made their choice.',
            'You can play these as a game or just use them as conversation starters.'
          ],
          questions: [
            'Coffee or tea?',
            'Beach or mountains?',
            'Summer or winter?',
            'Movies or TV shows?',
            'Morning person or night owl?',
            'Sweet or savory?',
            'City or countryside?',
            'Books or movies?',
            'Dogs or cats?',
            'Travel or stay home?'
          ]
        }
      ];
    } else if (contentType === 'questions_for_girls') {
      sections = [
        {
          title: 'Questions To Ask A Girl',
          subtitle: 'Deep questions designed specifically for girls',
          content: [
            'These questions are designed specifically to help you get to know a girl better.',
            'They cover various aspects from light topics to deeper personal questions.',
            'Remember to be respectful and choose questions appropriate for your relationship level.'
          ],
          questions: [
            'What\'s your favorite way to spend a day off?',
            'What\'s something you\'re passionate about?',
            'What\'s your biggest dream?',
            'What\'s something that always makes you smile?',
            'What\'s your favorite book or movie and why?',
            'What\'s something you\'ve always wanted to learn?',
            'What\'s your biggest accomplishment?',
            'What\'s something you\'re grateful for?',
            'What\'s your biggest fear?',
            'What\'s something that makes you unique?'
          ]
        }
      ];
    } else if (contentType === 'questions_for_boyfriend') {
      sections = [
        {
          title: 'Questions To Ask Your Boyfriend',
          subtitle: 'Deep questions to understand your boyfriend better',
          content: [
            'These questions are designed to help you understand your boyfriend on a deeper level.',
            'They cover various aspects of his life, thoughts, and feelings.',
            'Use these questions to strengthen your relationship and build deeper connections.'
          ],
          questions: [
            'What\'s your favorite memory of us together?',
            'What\'s something you\'ve always wanted to tell me?',
            'What\'s your biggest fear about our relationship?',
            'What\'s something you think I don\'t understand about you?',
            'What\'s your favorite thing about our relationship?',
            'What\'s something you\'d like us to improve together?',
            'What\'s your biggest dream for our future?',
            'What\'s something you\'re grateful for in our relationship?',
            'What\'s a challenge we\'ve overcome together?',
            'What\'s something you\'d like to learn about me?'
          ]
        }
      ];
    } else if (contentType === 'questions_for_girlfriend') {
      sections = [
        {
          title: 'Questions To Ask Your Girlfriend',
          subtitle: 'Deep questions to understand your girlfriend better',
          content: [
            'These questions are designed to help you understand your girlfriend on a deeper level.',
            'They cover various aspects of her life, thoughts, and feelings.',
            'Use these questions to strengthen your relationship and build deeper connections.'
          ],
          questions: [
            'What\'s your favorite memory of us together?',
            'What\'s something you\'ve always wanted to tell me?',
            'What\'s your biggest fear about our relationship?',
            'What\'s something you think I don\'t understand about you?',
            'What\'s your favorite thing about our relationship?',
            'What\'s something you\'d like us to improve together?',
            'What\'s your biggest dream for our future?',
            'What\'s something you\'re grateful for in our relationship?',
            'What\'s a challenge we\'ve overcome together?',
            'What\'s something you\'d like to learn about me?'
          ]
        }
      ];
    } else if (contentType === 'questions_for_crush') {
      sections = [
        {
          title: 'Questions To Ask Your Crush',
          subtitle: 'Fun and engaging questions to get to know your crush',
          content: [
            'These questions are perfect for getting to know your crush in a fun and engaging way.',
            'They\'re designed to be light enough to not be overwhelming but interesting enough to create connection.',
            'Remember to be yourself and have fun with the conversation.'
          ],
          questions: [
            'What\'s your favorite way to spend a weekend?',
            'What\'s the most interesting place you\'ve ever visited?',
            'What\'s something you\'re passionate about?',
            'What\'s your favorite book or movie?',
            'What\'s something that always makes you laugh?',
            'What\'s your biggest dream?',
            'What\'s something you\'ve always wanted to learn?',
            'What\'s your favorite food?',
            'What\'s something that makes you unique?',
            'What\'s your favorite way to relax?'
          ]
        }
      ];
    } else if (contentType === 'online_dating_conversations') {
      sections = [
        {
          title: 'Tinder, Bumble and Other Dating Conversation Starters',
          subtitle: 'Perfect conversation starters for online dating apps',
          content: [
            'Tinder can be challenging for having deep conversations — but it can be done!',
            'The best conversation starters on Tinder or other dating apps isn\'t always a cheesy pick-up line.',
            'Instead, you want an opener that works two-fold. You want to communicate that you have taken the time to read their profile and learned something about them, but also tell the other person something about yourself.'
          ],
          questions: [
            'You have a ___? Me too! Tell me more.',
            'Hey – you\'re a _______? That sounds really interesting. What\'s your favorite thing about your job?',
            'Sorry if this is a bit forward, but I\'m going to try out that new _____ that opens downtown next week – would you like to come?',
            'Hey, how is your week / weekend going?',
            'I noticed you like ______. What\'s your favorite thing about that?',
            'Your profile says you\'re into ______. I\'ve always wanted to learn more about that!',
            'What\'s the most interesting thing you\'ve done this week?',
            'I love your profile! What\'s the story behind that photo?',
            'What\'s something you\'re excited about right now?',
            'If you could travel anywhere right now, where would you go?'
          ]
        }
      ];
    } else if (contentType === 'funny_questions') {
      sections = [
        {
          title: 'Funny Questions to Ask',
          subtitle: 'Hilarious questions that will make everyone laugh',
          content: [
            'These questions are designed to bring out the humor in any conversation.',
            'They\'re perfect for lightening the mood and creating a fun atmosphere.',
            'Remember, the goal is to have fun and make everyone laugh!'
          ],
          questions: [
            'What\'s the most embarrassing thing that\'s ever happened to you?',
            'If you could only eat one food for the rest of your life, what would it be?',
            'What\'s the weirdest dream you\'ve ever had?',
            'If you could have any superpower, what would it be and why?',
            'What\'s the most ridiculous thing you\'ve ever done to avoid doing something else?',
            'If you could be any animal for a day, what would you be?',
            'What\'s the most useless talent you have?',
            'If you could time travel, would you go to the past or future?',
            'What\'s the most interesting thing you\'ve found on the ground?',
            'If you could rename yourself, what name would you choose?'
          ]
        }
      ];
    } else if (contentType === 'deep_questions_for_girls') {
      sections = [
        {
          title: 'Deep Questions to Ask a Girl',
          subtitle: 'Meaningful questions to understand a girl on a deeper level',
          content: [
            'These questions are designed to help you understand a girl on a much deeper level.',
            'They explore thoughts, feelings, dreams, and personal experiences.',
            'Use these questions when you want to create a meaningful connection.'
          ],
          questions: [
            'What\'s your biggest dream and what\'s stopping you from pursuing it?',
            'What\'s something you\'ve always wanted to tell someone but never have?',
            'What\'s your biggest fear and how does it affect your life?',
            'What\'s something you\'re passionate about that most people don\'t know?',
            'What\'s your biggest accomplishment and why does it mean so much to you?',
            'What\'s something you\'ve learned about yourself recently?',
            'What\'s your biggest regret and what did you learn from it?',
            'What\'s something you\'re grateful for that you didn\'t appreciate before?',
            'What\'s your biggest challenge right now and how are you dealing with it?',
            'What\'s something you\'d like to change about yourself?'
          ]
        }
      ];
    } else if (contentType === 'interesting_questions_for_guys') {
      sections = [
        {
          title: 'Interesting Questions To Ask a Guy',
          subtitle: 'Engaging questions to get to know a guy better',
          content: [
            'These questions are designed to help you get to know a guy in an interesting and engaging way.',
            'They cover various topics from hobbies to deeper thoughts and feelings.',
            'Use these questions to create meaningful conversations and connections.'
          ],
          questions: [
            'What\'s the most interesting thing you\'ve learned recently?',
            'What\'s something you\'re passionate about that most people don\'t know?',
            'What\'s your biggest dream and what steps are you taking to achieve it?',
            'What\'s the most challenging thing you\'ve ever done?',
            'What\'s something you\'ve always wanted to learn?',
            'What\'s your favorite way to spend a day off?',
            'What\'s something that always makes you laugh?',
            'What\'s your biggest accomplishment so far?',
            'What\'s something you\'re grateful for?',
            'What\'s something that makes you unique?'
          ]
        }
      ];
    }
    
    this.setData({ sections: sections });
  },

  // 切换到下一个部分
  nextSection: function() {
    if (this.data.currentSection < this.data.sections.length - 1) {
      this.setData({
        currentSection: this.data.currentSection + 1
      });
    }
  },

  // 切换到上一个部分
  prevSection: function() {
    if (this.data.currentSection > 0) {
      this.setData({
        currentSection: this.data.currentSection - 1
      });
    }
  },

  // 切换部分
  switchSection: function(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      currentSection: index
    });
  },

  // 开始练习
  startPractice: function() {
    wx.showToast({
      title: '开始练习功能开发中',
      icon: 'none'
    });
  },

  // 搜索输入
  onSearchInput: function(e) {
    var keyword = e.detail.value;
    this.setData({
      searchKeyword: keyword
    });
    
    if (keyword.trim()) {
      this.performSearch(keyword);
    } else {
      this.setData({
        searchResults: []
      });
    }
  },

  // 搜索确认
  onSearchConfirm: function(e) {
    var keyword = e.detail.value;
    if (keyword.trim()) {
      this.performSearch(keyword);
    }
  },

  // 执行搜索
  performSearch: function(keyword) {
    var results = [];
    var sections = this.data.sections;
    
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      
      // 搜索标题
      if (section.title.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({
          sectionIndex: i,
          questionIndex: -1,
          sectionTitle: section.title,
          content: section.title,
          type: 'title'
        });
      }
      
      // 搜索副标题
      if (section.subtitle.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({
          sectionIndex: i,
          questionIndex: -1,
          sectionTitle: section.title,
          content: section.subtitle,
          type: 'subtitle'
        });
      }
      
      // 搜索内容
      for (var j = 0; j < section.content.length; j++) {
        if (section.content[j].toLowerCase().includes(keyword.toLowerCase())) {
          results.push({
            sectionIndex: i,
            questionIndex: -1,
            sectionTitle: section.title,
            content: section.content[j],
            type: 'content'
          });
        }
      }
      
      // 搜索问题
      for (var k = 0; k < section.questions.length; k++) {
        if (section.questions[k].toLowerCase().includes(keyword.toLowerCase())) {
          results.push({
            sectionIndex: i,
            questionIndex: k,
            sectionTitle: section.title,
            content: section.questions[k],
            type: 'question'
          });
        }
      }
    }
    
    this.setData({
      searchResults: results
    });
  },

  // 关闭搜索结果
  closeSearchResults: function() {
    this.setData({
      searchResults: []
    });
  },

  // 跳转到搜索结果
  goToSearchResult: function(e) {
    var sectionIndex = e.currentTarget.dataset.section;
    var questionIndex = e.currentTarget.dataset.question;
    
    this.setData({
      currentSection: sectionIndex,
      searchResults: []
    });
    
    if (questionIndex >= 0) {
      wx.showToast({
        title: '已跳转到相关内容',
        icon: 'success'
      });
    }
  }
}) 