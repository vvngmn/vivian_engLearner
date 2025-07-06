// pages/my-training/my-training.js
Page({
  data: {
    trainingList: []
  },

  onLoad: function(options) {
    this.loadTrainingList();
  },

  onShow: function() {
    this.loadTrainingList();
  },

  // 加载训练列表
  loadTrainingList: function() {
    var trainingList = wx.getStorageSync('myTraining') || [];
    this.setData({
      trainingList: trainingList
    });
  },

  // 删除训练记录
  deleteTraining: function(e) {
    var index = e.currentTarget.dataset.index;
    var trainingList = this.data.trainingList;
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个训练记录吗？',
      success: function(res) {
        if (res.confirm) {
          trainingList.splice(index, 1);
          wx.setStorageSync('myTraining', trainingList);
          this.setData({
            trainingList: trainingList
          });
          
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          });
        }
      }.bind(this)
    });
  },

  // 清空所有训练记录
  clearAllTraining: function() {
    if (this.data.trainingList.length === 0) {
      wx.showToast({
        title: '暂无训练记录',
        icon: 'none'
      });
      return;
    }
    
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有训练记录吗？此操作不可恢复。',
      success: function(res) {
        if (res.confirm) {
          wx.setStorageSync('myTraining', []);
          this.setData({
            trainingList: []
          });
          
          wx.showToast({
            title: '清空成功',
            icon: 'success'
          });
        }
      }.bind(this)
    });
  },

  // 跳转到训练目录
  goToTrainingCatalog: function() {
    wx.navigateTo({
      url: '../training-catalog/training-catalog'
    });
  }
})
