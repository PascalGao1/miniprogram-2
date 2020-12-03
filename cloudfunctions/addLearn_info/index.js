// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const course_orderID = event.course_orderID
  const if_learned = event.if_learned
  const openID = event.openID
  await db.collection('Learn_Info').add({
    data:{
      openID: openID,
    course_orderID: course_orderID,
    if_learned: if_learned,
    }
  })
}