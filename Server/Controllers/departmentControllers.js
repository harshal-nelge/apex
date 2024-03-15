import departmentModels from "../Model/department.models.js";
import similarCordinatesTask from "../Model/similarCordinatesTask.model.js";

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
    const data = req.body;
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

      // Push the new task instance into the tasks array of the department document

      res.send("Data added successfully").status(200);
    } else {
      res.send("Data not sent from user").status(400);
      return;
    }
  } catch (error) {
    console.log(error);
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
      const workArray = department.tasks;
      console.log(workArray);
      res.send(workArray).status(200);
      return;
    }

    res.send("User not found, cant fetch tasks").status(400);
  } catch (error) {
    res.send("Error in fetching the tasks").status(500);
  }
};

export const searchSimilarWork = async (req, res, next) => {
  const data = req.body;
  const latitude = data.taskLatitude;
  const longitude = data.taskLongitude;

  const departmentData = await departmentModels.find({});
  departmentData.map((dataObject) => {
    const taskArray = dataObject.tasks;
    taskArray.map((taskF) => {
      if (taskF.taskLongitude == longitude && taskF.taskLatitude == latitude) {
        const similarTask = new similarCordinatesTask({
          latitude,
          longitude,
          task: data,
          isSimilarWith: taskF,
        });
        const similarTaskReverse = new similarCordinatesTask({
          latitude,
          longitude,
          task: taskF,
          isSimilarWith: data,
        });
        similarTask.save();
        similarTaskReverse.save();
      }
    });
  });
  next();
};

export const sendSimilarData = async (req, res) => {
  const data = req.body;
  const latitude = data.taskLatitude;
  const longitude = data.taskLongitude;

  const dataToSend = await similarCordinatesTask.find({
    latitude,
    longitude,
  });
  res.send(dataToSend)
};
