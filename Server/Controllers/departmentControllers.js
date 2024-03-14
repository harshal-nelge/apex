import departmentModels from "../Model/department.models.js";

export const departmentDashboardController = async (req, res) => {
  try {
    const departmentUsername = req.departmentUsername;
    departmentUsername;
    const department = await departmentModels.findOne({
      username: departmentUsername,
    });

    if (department) {
      res
        .send({
          department,
        })
        .status(200);
    } else {
      res.send("Error in getting user data, please login again");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addWork = async (req, res) => {
  try {
    const request = req.body;
    const data = request.data;
    const departmentUsername = req.departmentUsername;
    departmentUsername;
    const department = await departmentModels.findOne({
      username: departmentUsername,
    });

    if (data) {
      const task = {
        taskName: data.taskName,
        description: data.description,
        taskLongitude: data.taskLongitude,
        taskLatitude: data.taskLatitude,
        underGroundInfrastructure: data.underGroundInfrastructure || false,
        publicSpaceEnhancement: data.publicSpaceEnhancement || false,
        underWaterConstruction: data.underGroundInfrastructure || false,
        demolition: data.demolition || false,
        greenInfrastructure: data.greenInfrastructure || false,
        electricalServices: data.electricalServices || false,
      };

      department.tasks.push(task);
      await department.save();
      res.send("Data added successfully").status(200);
    } else {
      res.send("Data not sent from user").status(400);
      return;
    }
  } catch (error) {
    res.send("Error in adding the data").status(500);
    return;
  }
};

export const myWorks = async (req, res) => {
  try {
    const departmentUsername = req.departmentUsername;
    departmentUsername;
    const department = await departmentModels.findOne({
      username: departmentUsername,
    });
    if (department) {
      const workArray = department.task;
      res.send(workArray).status(200);
      return;
    }

    res.send("User not found, cant fetch tasks").status(400);
  } catch (error) {
    res.send("Error in fetching the tasks").status(500);
  }
};
