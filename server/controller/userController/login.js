const validation = require("../../helpers/validation");
const User = require("../../db/models/user");

async function loginUser(form) {
  const { email, password } = form;
  if (validation.isEmpty(email)) {
    return {
      data: { status: 404, message: "Не правильний email!" },
    };
  }
  let userModel = await User.findOne({ email });

  if (!userModel)
    return {
      data: { status: 404, message: "Користувача не знайдено!" },
    };
  if (!validation.isSame(password, userModel.password))
    return {
      data: { status: 404, message: "Не правильний пароль!" },
    };
  return {
    data: {
      status: 200,
      message: "Logined",
      email,
    },
  };
}

module.exports = loginUser;