//index.js
//获取应用实例

var common = require("../../pages/moden/config.js")
var app = getApp()
Page({
  data: {
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
})
