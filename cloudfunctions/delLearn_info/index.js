// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var openID = event.openID
  try {
    return await db.collection('Learn_Info').where({
      openID: openID
    }).remove()
  } catch (e) {
    console.error(e)
  }
}