// pages/class/class.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _click: 0,
    left: [{
      txt: '新品',
      id: '1'
    }, {
      txt: '手机',
      id: '2'
    }, {
      txt: '电视',
      id: '3'
    }, {
      txt: '电脑',
      id: '4'
      }, {
        txt: '手机',
        id: '5'
      }, {
        txt: '电视',
        id: '6'
      }, {
        txt: '电脑',
        id: '7'
      }, {
        txt: '手机',
        id: '8'
      }, {
        txt: '电视',
        id: '9'
      }, {
        txt: '电脑',
        id: '10'
      }],
    right: [{
        txt: '新品',
        id: 'new',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米noto'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米mix'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米5c'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米notp'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米note5'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6'
        }]
      },
      {
        txt: '手机',
        id: 'phone',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6s'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米5s'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米li'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米4'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }]
      },
      {
        txt: '电视',
        id: 'mv',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米mix'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米7s'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米2'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米note7'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米8'
        }]
      },
      {
        txt: '电脑',
        id: 'computer',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米2'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米mix'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米note'
        }, {
            src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }]
      },
      {
        txt: '电脑',
        id: 'computer',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米2'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米mix'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米note'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }]
      }
      , {
        txt: '电脑',
        id: 'computer',
        li: [{
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米2'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米mix'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米6'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米note'
        }, {
          src: '../static/images/ic_menu_choice_nor.png',
          name: '小米max'
        }]
      }
    ]
  }
,

/**
 * 组件的方法列表
 */
methods: {
  tap:function(e){
    var j = parseInt(e.currentTarget.dataset.i)
    this.setData({
        _click: j
    })

  }
}
})