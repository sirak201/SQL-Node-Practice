const passwordValidator = require("password-validator");

var passwordSchema = new passwordValidator();

const isEmpty = word => {
  return !word || /^\s*$/.test(word);
};

exports.checkCreateUser = body => {
  const err = {};
  const { first_name, last_name, password, username } = body;

  if (isEmpty(first_name)) err.first_name = "Enter First Name";
  if (isEmpty(last_name)) err.last_name = "Enter Last Name";
  if (isEmpty(password)) err.password = "Enter Password";
  if (isEmpty(username)) err.username = "Enter Username";

  passwordSchema
    .is()
    .min(6)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .not()
    .spaces();

  if (!passwordSchema.validate(body.password))
    err.password =
      "Password must be minimum 6 characters and 1 uppercase letter";

  return err;
};

exports.checkLocation = body => {
  const err = {};
  const { latitude, longitude, title } = body;

  if (isEmpty(latitude)) err.latitude = "Enter latitude Name";
  if (isEmpty(longitude)) err.longitude = "Enter longitude Name";
  if (isEmpty(title)) err.title = "Enter title";

  return err;
};
