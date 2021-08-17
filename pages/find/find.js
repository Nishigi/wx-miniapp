// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      background: ['demo-1', 'demo-2', 'demo-3'],
      curIdx:0,
      name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  swiperChange(e){
    console.log('e',e.detail.current);
    this.setData({curIdx:e.detail.current})
  },
  nameChange(e) {
    // 表单手动取值
    this.setData({name: e.detail.value})
    console.log(this.data.name)
    },
    confirmSearch() {
        console.log('调接口发生搜索')
    },
    cancelSearch() {
        this.setData({name: ''})
    }
})