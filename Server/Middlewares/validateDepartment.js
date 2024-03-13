import jwt from "jsonwebtoken";

export const validateDepartment = async (req, res, next) => {
  const request = req.body;
  const token = request.token;
  console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    console.log(decoded)
    if (decoded) {
        req.departmentUsername = decoded.userName
        console.log(req.departmentUsername)
      next();
    }else{
        return;
    }
  } catch (error) {
    console.log(error)
  }
};
