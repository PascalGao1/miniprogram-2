// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var openID = event.openID
  try {
    await db.collection('Student_Info').where({
      _openid: openID
    }).remove()
    await db.collection('Learn_Info').where({
      openID: openID
    }).remove()
    await db.collection('Upload_Info').where({
      _openid: openID
    }).remove()
  } catch (e) {
    console.error(e)
  }
}