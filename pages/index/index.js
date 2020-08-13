//index.js
//获取应用实例

var common = require("../../pages/moden/config.js")
var app = getApp()
Page({
  data: {
    showIndex: 1,
    a1src:'../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg:'../../image/signup.png',
    imgsrc:'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=1619440b1bc5580ece1e18c556a408d7&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3D2318927072%2C2551034291%26fm%3D175%26s%3DF9E09B544C2154095A6098DF030090F1%26w%3D660%26h%3D370%26img.JPEG',
    iconsrc:'../../image/usercount.png',
    jtsrc:'../../image/icon-jt.png',
    imgUrls: [
      '../../image/siwpe-imag/zhejie.jpg',
      '../../image/siwpe-imag/zhejie1.jpg',
      '../../image/siwpe-imag/jiewu.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad: function () {
    this.setData({
      news: common.news
    });
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '艺管家首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  }
})
