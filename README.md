# 微信小程序开发课程设计  
## 数据库设计
### Student_Info（学生个人基本信息）
openID, student_name, studentID, phone_num, origin_cpllege, origin_major, if_agree_downgrade, graduation_choice, if_will_doctor
### Course_Info（课程基本信息）
orderID, courseID, course_name, college, credit, semester
### Learn_Info（学生课程修读信息）
openID, orderID, if_learned
### Upload_Info（学生申请转专业时上传的信息）
openID, report_card_pdf_ID, grade_point, grade_4_img_ID, grade_4, grade_6_img_ID, grade_6, other_material_img_ID, special_material_img_ID