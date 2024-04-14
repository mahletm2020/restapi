//all sql querys 

const getStudents ="select * from students";
const getsStudentById="select * from students where id =$1";
//email part
//const checkEmailExisist="select s from students s where s.email = $1";
//if ther is emai add $4
const addStudent =" insert into students (name, age, dob)values($1, $2, $3)";
const removeStudent= " delete from students where id = $1"



module.exports= {
    getStudents,
    getsStudentById,
    addStudent,
    removeStudent
};