// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const Upload_Info = event.Upload_Info
  await db.collection('Upload_Info').add({
    data: {
      report_card_pdf_ID: Upload_Info.report_card_pdf_ID,
      grade_point: Upload_Info.grade_point,
      grade_4_img_ID: Upload_Info.grade_4_img_ID,
      grade_4: Upload_Info.grade_4,
      other_material_img_ID_i: Upload_Info.other_material_img_ID_i,
      special_material_img_ID_i: Upload_Info.special_material_img_ID_i,
      _openid:Upload_Info._openid
    }
  })
}