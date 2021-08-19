// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-1', 'demo-2', 'demo-3'],
    curIdx: 0,
    name: '',
    cateArr: [
      { id: 1, label: '内地', value: 'aa' },
      { id: 2, label: '日韩', value: 'vv' },
      { id: 3, label: '流行', value: 'cc' },
      { id: 4, label: '欧美', value: 'dd' }
    ],
    curCateIdx: 0,
    curDate: '18日',
    curTime: '上午',

    musicArr: [
        {id: 1, label:'新品',type:'new', img: ''},
        {id: 2, label:'推荐',type:'rec', img: ''},
        {id: 3, label:'',type:'', img: ''},
    ]  
  },

  /*
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
    setTimeout(() => {
      this.setData({ musicArr: list })
      // 当调接口成功时，手动停掉下拉刷新的“卡”住的状态
      wx.stopPullDownRefresh()
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底了')
    setTimeout(() => {
        this.setData({ musicArr: [...this.data.musicArr, ...list] })
        // 当调接口成功时，手动停掉下拉刷新的“卡”住的状态
    }, 100);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('点击分享');
  },
  swiperChange(e) {
    // console.log('e', e.detail.current);
    this.setData({ curIdx: e.detail.current })
  },
  nameChange(e) {
    // 表单手动取值
    this.setData({ name: e.detail.value })
    console.log(this.data.name)
  },
  confirmSearch() {
    console.log('调接口发生搜索')
  },
  cancelSearch() {
    this.setData({ name: '' })
  },
  catePickerChange(e) {
    console.log('catePickerChange', e);
    this.setData({curCateIdx: parseInt(e.detail.value)})
  },
  datePickerChange(e) {
    console.log('date---', e)
    this.setData({curDate: e.detail.value.split('-')[2]+'日'})
  },
  timePickerChange(e) {
    console.log('time change', e)
    var curTime = parseInt(e.detail.value.split(':')[0]) > 12 ? '下午' : '上午'
    console.log(curTime)
    this.setData({curTime})
  }
})