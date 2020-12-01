const app= getApp()
Page({
  data: {
    step:1,
    course_info:[],
    learned:[],
    credits:0,
    percent:0
  },
  onLoad:function(options){
    const db = wx.cloud.database();
    const temp_Coures=[];
    var total
    // db.collection('Course_Info').count().then(res=>
    //   {
    //     total=res.total
    //     console.log(total)
    //   }
    //   )
    // console.log(total)
    // var time = Math.ceil(total/20);
    for (let index = 0; index < 2; index++) {
      db.collection('Course_Info').skip(index*20).limit(20).get().then(res=>{
          res.data.forEach(element => {
            temp_Coures.push(element)
          });
        }
      )
    }
    console.log(temp_Coures)
    var that =this
    setTimeout(() => {
      that.setData({course_info:temp_Coures})
    }, 1000);
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