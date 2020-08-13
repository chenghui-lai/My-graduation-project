//index.js
//获取应用实例
var common = require("../../pages/moden/course.js")
var app = getApp()

Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
  },
  onLoad: function () {
    this.setData({
      courselist: common.courselist
    });
    console.log('onLoad')
  },
    showCardView: function (e) {
    wx.navigateTo({
      url: '../set/set?id=' + e.currentTarget.id
    });
  },
})
