// pages/training-catalog/training-catalog.js
Page({
  data: {
    categories: [
      {
        id: 1,
        title: '开启你的对话',
        subtitle: '从随机话题到专业领域，让对话更精彩',
        difficulty: '简单',
        duration: '15分钟',
        content: 'conversation_starters'
      },
      {
        id: 2,
        title: '问男生的问题',
        subtitle: '精选问题，深入了解对方',
        difficulty: '中等',
        duration: '20分钟',
        content: 'questions_for_guys'
      },
      {
        id: 3,
        title: '深度对话话题',
        subtitle: '探讨人生、哲学、社会的深刻问题',
        difficulty: '困难',
        duration: '30分钟',
        content: 'deep_conversation_topics'
      },
      {
        id: 4,
        title: '有趣问题集',
        subtitle: '轻松有趣的问题，让对话充满欢笑',
        difficulty: '简单',
        duration: '15分钟',
        content: 'fun_questions'
      },
      {
        id: 5,
        title: '情侣对话启动器',
        subtitle: '专为情侣设计的深度对话问题',
        difficulty: '中等',
        duration: '25分钟',
        content: 'couple_conversations'
      },
      {
        id: 6,
        title: '21问游戏',
        subtitle: '经典游戏，通过问题深入了解彼此',
        difficulty: '中等',
        duration: '20分钟',
        content: 'twenty_one_questions'
      },
      {
        id: 7,
        title: '哲学思考',
        subtitle: '探讨人性、宇宙、道德的哲学问题',
        difficulty: '困难',
        duration: '35分钟',
        content: 'philosophical_questions'
      },
      {
        id: 8,
        title: '约会对话',
        subtitle: '第一次约会的完美对话启动器',
        difficulty: '中等',
        duration: '20分钟',
        content: 'dating_conversations'
      },
      {
        id: 9,
        title: '了解他人',
        subtitle: '从浅入深，逐步了解一个人的内心世界',
        difficulty: '中等',
        duration: '25分钟',
        content: 'get_to_know_someone'
      },
      {
        id: 10,
        title: '选择游戏',
        subtitle: '简单有趣的选择题，快速了解偏好',
        difficulty: '简单',
        duration: '10分钟',
        content: 'this_or_that'
      },
      {
        id: 11,
        title: '问女生的问题',
        subtitle: '专为女生设计的深度对话问题',
        difficulty: '中等',
        duration: '20分钟',
        content: 'questions_for_girls'
      },
      {
        id: 12,
        title: '问男朋友的问题',
        subtitle: '深入了解男朋友的内心世界',
        difficulty: '中等',
        duration: '25分钟',
        content: 'questions_for_boyfriend'
      },
      {
        id: 13,
        title: '问女朋友的问题',
        subtitle: '深入了解女朋友的想法和感受',
        difficulty: '中等',
        duration: '25分钟',
        content: 'questions_for_girlfriend'
      },
      {
        id: 14,
        title: '暗恋对象问题',
        subtitle: '与暗恋对象展开有趣对话的问题',
        difficulty: '中等',
        duration: '20分钟',
        content: 'questions_for_crush'
      },
      {
        id: 15,
        title: '网络约会对话',
        subtitle: 'Tinder、Bumble等约会应用的对话启动器',
        difficulty: '简单',
        duration: '15分钟',
        content: 'online_dating_conversations'
      },
      {
        id: 16,
        title: '幽默问题',
        subtitle: '让人捧腹大笑的有趣问题',
        difficulty: '简单',
        duration: '15分钟',
        content: 'funny_questions'
      },
      {
        id: 17,
        title: '深度问题问女生',
        subtitle: '与女生进行深度对话的问题',
        difficulty: '困难',
        duration: '30分钟',
        content: 'deep_questions_for_girls'
      },
      {
        id: 18,
        title: '有趣问题问男生',
        subtitle: '与男生进行有趣对话的问题',
        difficulty: '中等',
        duration: '20分钟',
        content: 'interesting_questions_for_guys'
      }
    ]
  },

  onLoad: function() {
    console.log('训练目录页面加载');
  },

  // 跳转到文章详情页面
  goToArticle: function(e) {
    console.log('点击事件触发');
    var articleId = e.currentTarget.dataset.id;
    
    console.log('文章ID:', articleId);
    
    // 根据ID查找文章
    var article = this.data.categories.find(function(item) {
      return item.id == articleId;
    });
    
    if (article) {
      console.log('准备跳转到文章详情页:', article.title);
      wx.navigateTo({
        url: '../article-detail/article-detail?article=' + JSON.stringify(article),
        success: function() {
          console.log('跳转成功');
        },
        fail: function(err) {
          console.log('跳转失败:', err);
        }
      })
    } else {
      console.log('文章对象创建失败');
    }
  }
})
