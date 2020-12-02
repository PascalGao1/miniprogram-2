const app = getApp()
Page({
  data: {
    // 页面1
    student_name: "",
    studentID: "",
    gender: null,
    identity_num: "",
    phone_num: "",
    origin_college: "",
    originCollegeIndex: null,
    originCollegePicker: ['国外深造', '国内读研', '就业', '待定'],
    origin_major: "",
    if_agree_downgrade: null,
    graduationChoiceIndex: null,
    graduationChoicePicker: ['国外深造', '国内读研', '就业', '待定'],
    graduation_choice: null,
    if_will_doctor: null,

    // 页面2
    step: 1,
    course_info: [{
        "course_orderID": "1",
        "courseID": "107032030",
        "course_name": "思想道德修养与法律基础",
        "college": "马克思主义学院",
        "credit": 3,
        "semester": "1秋"
      },
      {
        "course_orderID": "2",
        "courseID": "107115000",
        "course_name": "形势与政策-1",
        "college": "马克思主义学院",
        "credit": 0,
        "semester": "1秋"
      },
      {
        "course_orderID": "3",
        "courseID": "105366020",
        "course_name": "大学英语（综合）-17",
        "college": "外国语学院",
        "credit": 2,
        "semester": "1秋"
      },
      {
        "course_orderID": "4",
        "courseID": "105367010",
        "course_name": "大学英语（口语)-1",
        "college": "外国语学院",
        "credit": 1,
        "semester": "1秋"
      },
      {
        "course_orderID": "5",
        "courseID": "888004010",
        "course_name": "体育-1",
        "college": "体育学院",
        "credit": 1,
        "semester": "1秋"
      },
      {
        "course_orderID": "6",
        "courseID": "900001010",
        "course_name": "军事理论",
        "college": "武装部",
        "credit": 1,
        "semester": "1秋"
      },
      {
        "course_orderID": "7",
        "courseID": "314030020",
        "course_name": "新生专业研讨课（网络空间安全导论)",
        "college": "网络空间安全学院",
        "credit": 1,
        "semester": "1秋"
      },
      {
        "course_orderID": "8",
        "courseID": "912002010",
        "course_name": "大学生心理健康",
        "college": "心理健康中心",
        "credit": 1,
        "semester": "1秋"
      },
      {
        "course_orderID": "9",
        "courseID": "201080030",
        "course_name": "线性代数（理工)",
        "college": "数学学院",
        "credit": 3,
        "semester": "1秋"
      },
      {
        "course_orderID": "10",
        "courseID": "201137050",
        "course_name": "微积分（ I) -1",
        "college": "数学学院",
        "credit": 5,
        "semester": "1秋"
      },
      {
        "course_orderID": "11",
        "courseID": "314031030",
        "course_name": "程序设计基础",
        "college": "网络空间安全学院",
        "credit": 4,
        "semester": "1秋"
      },
      {
        "course_orderID": "12",
        "courseID": "314032030",
        "course_name": "计算机系统导论",
        "college": "网络空间安全学院",
        "credit": 3,
        "semester": "1秋"
      },
      {
        "course_orderID": "13",
        "courseID": "107060030",
        "course_name": "中国近现代史纲要",
        "college": "马克思主义学院",
        "credit": 3,
        "semester": "1春"
      },
      {
        "course_orderID": "14",
        "courseID": "107116000",
        "course_name": "形势与政策-2",
        "college": "马克思主义学院",
        "credit": 0,
        "semester": "1春"
      },
      {
        "course_orderID": "15",
        "courseID": "1053680207",
        "course_name": "大学英语（阅读与翻译〉-2",
        "college": "外国语学院",
        "credit": 2,
        "semester": "1春"
      },
      {
        "course_orderID": "16",
        "courseID": "105369010",
        "course_name": "大学英语(口语)-2",
        "college": "外国语学院",
        "credit": 1,
        "semester": "1春"
      },
      {
        "course_orderID": "17",
        "courseID": "888005010",
        "course_name": "体育-2",
        "college": "体育学院",
        "credit": 1,
        "semester": "1春"
      },
      {
        "course_orderID": "18",
        "courseID": "2011380407",
        "course_name": "微积分(I) -2",
        "college": "数学学院",
        "credit": 4,
        "semester": "1春"
      },
      {
        "course_orderID": "19",
        "courseID": "201018030",
        "course_name": "概率统计(理工)",
        "college": "数学学院",
        "credit": 3,
        "semester": "1春"
      },
      {
        "course_orderID": "20",
        "courseID": "202027020",
        "course_name": "大学物理(理工) II-1",
        "college": "物理学院",
        "credit": 2,
        "semester": "1春"
      },
      {
        "course_orderID": "21",
        "courseID": "202041020",
        "course_name": "大学物理实验(理工) Ⅲ-1",
        "college": "物理学院",
        "credit": 2,
        "semester": "1春"
      },
      {
        "course_orderID": "22",
        "courseID": "905006020",
        "course_name": "工程训练( I )",
        "college": "工程训练中心",
        "credit": 2,
        "semester": "1春"
      },
      {
        "course_orderID": "23",
        "courseID": "314034010",
        "course_name": "网络安全管理与法律法规",
        "college": "网络空间安全学院",
        "credit": 1,
        "semester": "1春"
      }
    ],
    learned: [{
        course_orderID: 1,
        if_learned: false
      },
      {
        course_orderID: 2,
        if_learned: false
      },
      {
        course_orderID: 3,
        if_learned: false
      },
      {
        course_orderID: 4,
        if_learned: false
      },
      {
        course_orderID: 5,
        if_learned: false
      },
      {
        course_orderID: 6,
        if_learned: false
      },
      {
        course_orderID: 7,
        if_learned: false
      },
      {
        course_orderID: 8,
        if_learned: false
      },
      {
        course_orderID: 9,
        if_learned: false
      },
      {
        course_orderID: 10,
        if_learned: false
      },
      {
        course_orderID: 11,
        if_learned: false
      },
      {
        course_orderID: 12,
        if_learned: false
      },
      {
        course_orderID: 13,
        if_learned: false
      },
      {
        course_orderID: 14,
        if_learned: false
      },
      {
        course_orderID: 15,
        if_learned: false
      },
      {
        course_orderID: 16,
        if_learned: false
      },
      {
        course_orderID: 17,
        if_learned: false
      },
      {
        course_orderID: 18,
        if_learned: false
      },
      {
        course_orderID: 19,
        if_learned: false
      },
      {
        course_orderID: 20,
        if_learned: false
      },
      {
        course_orderID: 21,
        if_learned: false
      },
      {
        course_orderID: 22,
        if_learned: false
      },
      {
        course_orderID: 23,
        if_learned: false
      },
    ],
    credits: 0,
    percent: 0,

    // 页面三
    otherMaterialImgIndex: null,
    otherMaterialImgList: []
  },
  /* 
   *加载页面同时查询该用户是否已有填报信息
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('获取用户openid成功')
        app.globalData.openid = res.result.openid
        this.setData({
          openid: app.globalData.openid
        })
      },
      fail: err => {
        console.error('获取用户openid失败', err)
      }
    })
  },

  // 页面1
  bindStudentName: function (e) {
    console.log(e.detail.value)
    this.setData({
      student_name: e.detail.value
    })
  },
  bindStudentID: function (e) {
    console.log(e.detail.value)
    this.setData({
      studentID: e.detail.value
    })
  },
  studentIDBlur: function (e) {
    if(e.detail.value.length != 13){
      wx.showToast({
        title: '学号位数不正确，请重新输入',
        icon: 'none',
        duration: 500
      }) 
      this.setData({
        studentID: null
      })
    }
  },
  genderRadioChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },
  bindIdentityNum: function (e) {
    console.log(e.detail.value)
    this.setData({
      identity_num: e.detail.value
    })
  },
  identityNumBlur: function (e) {
    if(e.detail.value.length != 18){
      wx.showToast({
        title: '身份证号位数不正确，请重新输入',
        icon: 'none',
        duration: 500
      }) 
      this.setData({
        identity_num: null
      })
    }
  },
  bindPhoneNum: function (e) {
    console.log(e.detail.value)
    this.setData({
      phone_num: e.detail.value
    })
  },
  phoneNumBlur: function (e) {
    if(e.detail.value.length != 11){
      wx.showToast({
        title: '手机号位数不正确，请重新输入',
        icon: 'none',
        duration: 500
      }) 
      this.setData({
        phone_num: null
      })
    }
  },
  bindOriginCollege: function (e) {
    console.log(e.detail.value)
    this.setData({
      origin_college: e.detail.value
    })
  },
  bindOriginMajor: function (e) {
    console.log(e.detail.value)
    this.setData({
      origin_major: e.detail.value
    })
  },
  ifAgreeDowngradeRadioChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      if_agree_downgrade: e.detail.value
    })
  },
  graduationChoicePickerChange: function (e) {
    console.log(this.data.graduationChoicePicker[e.detail.value]);
    this.setData({
      graduationChoiceIndex: e.detail.value,
      graduation_choice: this.data.graduationChoicePicker[e.detail.value]
    })
  },
  ifWillDoctorRadioChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      if_will_doctor: e.detail.value
    })
  },

  // 页面2
  /*
   *学生点击所学课程
   */
  SetLearned: function (e) {
    var CurrentCredit = e.currentTarget.dataset.credit
    var CurrentCourseOrderId = e.currentTarget.dataset.course_orderid
    var target = 0;
    for (let index = 0; index < this.data.learned.length; index++) {
      if (CurrentCourseOrderId == this.data.learned[index].course_orderID) {
        target = index
      }
    }
    var str = "learned[" + target + "].if_learned"
    this.setData({
      [str]: e.detail.value
    })
    if (e.detail.value) {
      this.setData({
        credits: this.data.credits + CurrentCredit
      })
    } else {
      this.setData({
        credits: this.data.credits - CurrentCredit
      })
    }
    this.setData({
      percent: Math.floor(100 * this.data.credits / 46)
    })
  },
  /*
   *查询学生是否以填报并返回已完成课程,然后修改当前页面中的数据
   */
  getLearn_info: function () {
    var openID = this.data.openid
    var that =this
    if (!openID) {
      console.error("请重新打开小程序")
    } else {
      wx.cloud.callFunction({
        name: "getLearn_info",
        data: {
          openID: openID
        },
        success(res) {
          if (!res.result.data) {
            console.log("无此名学生记录")
          } else {
            var currentcredit = 0;
            for (let index = 0; index < res.result.data.length; index++) {
              const element = res.result.data[index]
              var target = parseInt(element.course_orderID) - 1
              var value = element.if_learned
              var str = "learned[" + target + "].if_learned"
              if (value) {
                currentcredit += that.data.course_info[target].credit
              }
              that.setData({
                [str]: value
              })
            }
            that.setData({
              credits: currentcredit,
              percent: Math.floor(100 * currentcredit / 46)
            })
          }
        }
      })
    }
  },

  consoleinfo: function () {
    console.log(this.data.learned)
    console.log(this.data.credits)
    console.log(this.data.percent)
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

  // 页面三
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.otherMaterialImgList.length != 0) {
          this.setData({
            otherMaterialImgList: this.data.otherMaterialImgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            otherMaterialImgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.otherMaterialImgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '确认删除',
      content: '确定要删除该证明材料吗',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.otherMaterialImgList.splice(e.currentTarget.dataset.otherMaterialImgIndex, 1);
          this.setData({
            otherMaterialImgList: this.data.otherMaterialImgList
          })
        }
      }
    })
  }
})