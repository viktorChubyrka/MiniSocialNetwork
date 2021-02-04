const saveToDB = require("./saveToDB");
const User = require("../../db/models/user");
const validation = require("../../helpers/validation");

async function registerUser(form) {
  const { email, password, cpassword, name, surname } = form;
  if (
    validation.isEmpty(email) ||
    validation.isEmpty(password) ||
    validation.isEmpty(cpassword) ||
    validation.isEmpty(name) ||
    validation.isEmpty(surname)
  )
    return {
      data: { status: 404, message: "Всі поля обов'язкові!" },
    };
  if (!validation.isSame(password, cpassword))
    return {
      data: { status: 404, message: "Паролі не співпадають!" },
    };
  if (!validation.isPasswordValid(password))
    return {
      data: { status: 404, message: "Пароль має бути більшим ніж 8 символів!" },
    };
  if (!validation.isEmailValid(email))
    return {
      data: { status: 404, message: "Введіть корректний email!" },
    };
  userModel = await User.findOne({ email });
  if (userModel)
    return {
      data: { status: 404, message: "Цей емайл вже зайнятий" },
    };
  const userObj = {
    email,
    password,
    name,
    surname,
  };

  let newUser = await saveToDB(userObj);

  return {
    data: {
      status: 200,
      message: "Registered",
      userId: newUser._id,
    },
  };
}
module.exports = registerUser;
