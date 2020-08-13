var app = getApp()
Page({
  data: {
    homework1:'六步*10000+大风车*100+托马斯200'

  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数


  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    wx.setStorageSync('1', '1')
  },
  // about:function(){
  //   wx.switchTab({
  //     url: "/pages/about/about"
  //   })
  // }
})
