# 微信小程序开发课程设计  
## 数据库设计
### Student_Info（学生个人基本信息）
openID, student_name, studentID, gender, identity_num, phone_num, origin_college, origin_major, if_agree_downgrade, graduation_choice, if_will_doctor, total_not_learned_credits
### Course_Info（课程基本信息）
course_orderID, courseID, course_name, college, credit, semester
### Learn_Info（学生课程修读信息）
openID, course_orderID, if_learned
### Upload_Info（学生申请转专业时上传的信息）
openID, report_card_pdf_ID, grade_point, grade_4_img_ID, grade_4, other_material_img_ID_i, special_material_img_ID_i