//teacherlist.js
//获取应用实例
var app = getApp()
Page({
  data: {
    feedback: '',
    contact: '',

  },
  feedbackInput: function (e) {
    this.setData({
      feedback: e.detail.value
    })
  },
  contactInput: function (e) {
    this.setData({
      contact: e.detail.value
    })
  },
  loginBtnClick: function () {
    if (this.data.feedback.length == 0 || this.data.contact.length == 0) {
      wx.showToast({
        title: '存在未填项！',
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '反馈成功！',
        icon: 'success',
        duration: 4000
      })
      wx.switchTab({
        url: "/pages/class/class"
      })


    }
  },

})