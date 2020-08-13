var app = getApp();
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    msgList: [
      { url: "url", title: "-----------------------------------" },
      { url: "url", title: "请参加公演的小朋友自行购买服装" }] ,
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad(e) {
    console.log(e.title)

    var that = this;
    var up = "msgList[" + 0 + "].title";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
    that.setData({ [up]: "班级课程时间:周四晚上19：00/周日早上9：00" })
  }
  
})
