import departmentModels from "../Model/department.models.js";

export const departmentDashboardController = async(req, res) => {

try {


  const departmentUsername = req.departmentUsername;
  const department = await departmentModels.findOne({
    username: departmentUsername,
  });


  if(department){
    res.send({
      department
    }).status(200)
  }
  else{
    res.send("Error in getting user data, please login again")
  }

 
} catch (error) {

  console.log(error);
  
}
  
  
};
