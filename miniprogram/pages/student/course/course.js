const app= getApp()
Page({
  data: {
    step:1,
    course_info:[
      {
        name:"大学生英语",
        credit:2,
      },
      {
        name:"微积分1-1",
        credit:5,
      }
    ],
    learned:[
      {
        course_orderID:1,
        if_learned:false
      },
      {
        course_orderID:2,
        if_learned:false
      }
    ],
    credits:0,
    percent:0
  },
  onLoad:function(options){
  },

  getCourse_info: function () {
    const db = wx.cloud.database();
    const temp_Coures=[];
    db.collection('Course_Info').get({
      success:function(res){
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          temp_Coures.push(element);
        }
      }
    })
    db.collection('Course_Info').skip(20).get({
      success:function(res){
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          temp_Coures.push(element);
        }
      }
    })
    this.setData({
      course_info:temp_Coures
    })
    console.log(this.data.course_info)
  },

  SetLearned:function(e){
    console.log(e)
    var CurrentCredit = e.currentTarget.dataset.credit
    if (e.detail.value) {
      this.setData({
        credits:this.data.credits+CurrentCredit
      })
    } else {
      this.setData({
        credits:this.data.credits-CurrentCredit
      })
    }
    this.setData({
      percent:Math.floor(100*this.data.credits/46)
    })
  },

  getCredit:function(){
    console.log(this.data.credits)
  },

  nextStep: function () {
    this.setData({
      step: this.data.step + 1
    })
  },
  prevStep: function () {
    this.setData({
      step: this.data.step - 1
    })
  },
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

  }
})