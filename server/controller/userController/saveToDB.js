const User = require("../../db/models/user");

module.exports = async function saveToDB(UserObj) {
  const newUser = new User({
    email: UserObj.email,
    password: UserObj.password,
  });

  const save = await newUser.save();
  

  return save;
};