// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 查询学生课程信息
exports.main = async (event, context) => {
  var openID = event.openID
  console.log(openID)
  const db = cloud.database()
  const MAX_LIMIT = 100
  const countResult = await db.collection('Learn_Info').count()
  const total = countResult.total
  const batchTimes = Math.ceil(total / 100)
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('Learn_Info').skip(i * MAX_LIMIT).limit(MAX_LIMIT).where({
      openID:openID
    }).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}