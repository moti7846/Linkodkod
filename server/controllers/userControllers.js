import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { readUser } from "../service/users.js";
config();

export async function getUser(req, res) {
  const { userName, password } = req.body;
  const {user, error} = await readUser(userName);
  console.log(user,error);

//   if (!user || !(await bcrypt.compare(password, user.password))) {
  if (error) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }
  if(!user) {
    return res.status(401).json({ msg: "user not found" });
  }
//   const token = jwt.sign(
//     { userName: user.userName, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
  res.json({msg : "login successfully"}).status(200);
}