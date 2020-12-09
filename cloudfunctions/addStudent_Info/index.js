// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const Student_Info = event.Student_Info
  await db.collection('Student_Info').add({
    data: {
      student_name: Student_Info.student_name,
      studentID: Student_Info.studentID,
      gender: Student_Info.gender,
      identity_num: Student_Info.identity_num,
      phone_num: Student_Info.phone_num,
      origin_college: Student_Info.origin_college,
      origin_major: Student_Info.origin_major,
      if_agree_downgrade: Student_Info.if_agree_downgrade,
      graduation_choice: Student_Info.graduation_choice,
      if_will_doctor: Student_Info.if_will_doctor,
      _openid:Student_Info._openid
    }
  })
}