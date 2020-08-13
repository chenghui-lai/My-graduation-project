//index.js
var app = getApp()
var count = 0;
Page({
  data: {
    chooesVideo: '',    //上传视频地址
    tipHide: false,
    chooseTypeHide: true,
    userimage: "",
    check1: false

  },

  onLoad: function (options) {
    console.log(options.status)
  },
  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('prew_video');
  },/**
   * 上传图片
   */
  chooseImg: function () {
    let that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        console.log(res)
        var that = this

        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })

        var tempFilePaths = res.tempFilePaths
        that.data.images = tempFilePaths
        // 多图片
        // that.data.urls = that.data.urls.concat(tempFilePaths)
        // 单图片         
        that.setData({
          userimage: tempFilePaths[0],
          images: tempFilePaths[0],
        })

      }
    })
  },
  /**
   * 上传视频
   */
  chooseVideo: function () {
    let that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {

        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })

        that.setData({
          chooesVideo: res.tempFilePath,
          check1: true
        })
      }
    })
  },

  /**
     * 全屏改变
     */
  bindVideoScreenChange: function (e) {
    var status = e.detail.fullScreen;
    var play = {
      playVideo: false
    }
    if (status) {
      play.playVideo = true;
    } else {
      this.videoContext.pause();
    }
    this.setData(play);
  }

})