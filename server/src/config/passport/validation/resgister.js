const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.nome = !isEmpty(data.nome) ? data.nome : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // nome checks
  if (Validator.isEmpty(data.nome)) {
    errors.nome = "O nome é obrigatório";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email é um campo obrigatório";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email é inválido";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password é um campo obrigatório";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmar senha é um campo obrigatório";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "A senha deve ter no mínimo 6 caracters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "As senhas devem ser iguais";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};