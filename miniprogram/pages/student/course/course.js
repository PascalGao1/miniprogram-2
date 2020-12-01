const app= getApp()
Page({
  data: {
    step:1,
    course_info:[
      {"course_orderID":"1","courseID":"107032030","course_name":"思想道德修养与法律基础","college":"马克思主义学院","credit":"3","semester":"1秋"}
      ,
      {"course_orderID":"2","courseID":"107115000","course_name":"形势与政策-1","college":"马克思主义学院","credit":"0","semester":"1秋"}
      ,
      {"course_orderID":"3","courseID":"105366020","course_name":"大学英语（综合）-17","college":"外国语学院","credit":"2","semester":"1秋"}
      ,
      {"course_orderID":"4","courseID":"105367010","course_name":"大学英语（口语)-1","college":"外国语学院","credit":"1","semester":"1秋"}
      ,
      {"course_orderID":"5","courseID":"888004010","course_name":"体育-1","college":"体育学院","credit":"1","semester":"1秋"}
      ,
      {"course_orderID":"6","courseID":"900001010","course_name":"军事理论","college":"武装部","credit":"1","semester":"1秋"}
      ,
      {"course_orderID":"7","courseID":"314030020","course_name":"新生专业研讨课（网络空间安全导论)","college":"网络空间安全学院","credit":"1","semester":"1秋"}
      ,
      {"course_orderID":"8","courseID":"912002010","course_name":"大学生心理健康","college":"心理健康中心","credit":"1","semester":"1秋"}
      ,
      {"course_orderID":"9","courseID":"201080030","course_name":"线性代数（理工)","college":"数学学院","credit":"3","semester":"1秋"}
      ,
      {"course_orderID":"10","courseID":"201137050","course_name":"微积分（ I) -1","college":"数学学院","credit":"5","semester":"1秋"}
      ,
      {"course_orderID":"11","courseID":"314031030","course_name":"程序设计基础","college":"网络空间安全学院","credit":"4","semester":"1秋"}
      ,
      {"course_orderID":"12","courseID":"314032030","course_name":"计算机系统导论","college":"网络空间安全学院","credit":"3","semester":"1秋"}
      ,
      {"course_orderID":"13","courseID":"107060030","course_name":"中国近现代史纲要","college":"马克思主义学院","credit":"3","semester":"1春"}
      ,
      {"course_orderID":"14","courseID":"107116000","course_name":"形势与政策-2","college":"马克思主义学院","credit":"0","semester":"1春"}
      ,
      {"course_orderID":"15","courseID":"1053680207","course_name":"大学英语（阅读与翻译〉-2","college":"外国语学院","credit":"2","semester":"1春"}
      ,
      {"course_orderID":"16","courseID":"105369010","course_name":"大学英语(口语)-2","college":"外国语学院","credit":"1","semester":"1春"}
      ,
      {"course_orderID":"17","courseID":"888005010","course_name":"体育-2","college":"体育学院","credit":"1","semester":"1春"}
      ,
      {"course_orderID":"18","courseID":"2011380407","course_name":"微积分(I) -2","college":"数学学院","credit":"4","semester":"1春"}
      ,
      {"course_orderID":"19","courseID":"201018030","course_name":"概率统计(理工)","college":"数学学院","credit":"3","semester":"1春"}
      ,
      {"course_orderID":"20","courseID":"202027020","course_name":"大学物理(理工) II-1","college":"物理学院","credit":"2","semester":"1春"}
      ,
      {"course_orderID":"21","courseID":"202041020","course_name":"大学物理实验(理工) Ⅲ-1","college":"物理学院","credit":"2","semester":"1春"}
      ,
      {"course_orderID":"22","courseID":"905006020","course_name":"工程训练( I )","college":"工程训练中心","credit":"2","semester":"1春"}
      ,
      {"course_orderID":"23","courseID":"314034010","course_name":"网络安全管理与法律法规","college":"网络空间安全学院","credit":"1","semester":"1春"}
      ],
    learned:[
      
    ],
    credits:0,
    percent:0
  },
  /* 
  *加载页面同时查询该用户是否已有填报信息
  */
  onLoad:function(options){
    const db = wx.cloud.database();
    const temp_Coures=[];
  },

  SetLearned:function(e){
    console.log(e)
    var CurrentCredit = e.currentTarget.dataset.credit
    var CurrentCourseOrderId =e.currentTarget.dataset.course_orderID
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