import adminModels from "../Model/admin.models.js";

export const adminDashboardController = async (req, res) => {
  try {
    const adminUsername = req.adminUsername;
  const department = await adminModels.findOne({

    username: adminUsername,
  });
  if(department){
    res.send({
      department
    })
  }
  else{

    res.send("Unauthorized login, please login again")

  }
  
  } catch (error) {
    
  }
  
};
