//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'index页面',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    items: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }, {
      id: 6
    }, ],
    item: [{
      id: 0,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品1"
    }, {
      id: 1,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品2"
    }, {
      id: 1,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品3"
    }, {
      id: 1,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品4"
    }, {
      id: 1,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品5"
    }, {
      id: 1,
      url: "../static/images/ic_menu_choice_nor.png",
      link: "../navigatorpage/navigatorpage",
      title: "商品6"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})