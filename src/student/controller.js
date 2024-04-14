//store bussiness logic which relates to each route
const pool =require('../../db');
const queries= require("./queries");


const getStudents = (req,res)=>{ 
    pool.query(queries.getStudents,(error,results)=>{

    if(error)throw error;
    res.status(200).json(results.rows);
 });
}

const getsStudentById=(req,res)=>{
const id= parseInt(req.params.id);

   pool.query(queries.getsStudentById,[id],(error,results)=>{
      if(error) throw error;
      res.status(200).json(results.rows)
   })
}

const addStudent=(req,res)=>{
   const{name,age,dob}=req.body;
   //to check ifvalues exist
   // pool.query(queries.checknameexist,[email],(error,results)=>{
   //    if(results.rowCount.length){
   //       res.send("email alrdyexist.");
   //    }
      //adding stident to db
      pool.query(queries.addStudent,[name,age,dob],(error,results)=>{
         if(error) throw error;
         res.status(201).send("student created successfully");
      })
   // })
}

const removeStuent =(req,res)=>{

const id= parseInt(req.params.id);
pool.query(queries.removeStudent ,[id],(error,results)=>{
   const nostudentFound =!results.rows.length;
   if(nostudentFound){
      res,send("student does not exist in the dtatbase");
   }
})
   
}

module.exports ={getStudents,
                 getsStudentById,
                 addStudent,
                 removeStudent
               }