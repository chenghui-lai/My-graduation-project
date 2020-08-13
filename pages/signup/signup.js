//signup.js
//获取应用实例
var app = getApp()
//流程
Page({
  data: {
    serviceList: [
      {
        icon: "../../image/icon1.png",
        title: "师资力量雄厚"
      },
      {
        icon: "../../image/icon2.png",
        title: "专业科学教学"
      },
      {
        icon: "../../image/icon3.png",
        title: "丰富的品牌活动"
      },
      {
        icon: "../../image/icon4.png",
        title: "齐全的舞种"
      },
    ],
    flowProcessList: ["咨询报名", "交纳定金", "确认汇款", "来校报道"],
    arrow: '../../image/right.png'
  },
});