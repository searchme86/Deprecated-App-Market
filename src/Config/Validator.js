const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const CheckValidName = (name) => {
  const matchForText = USER_REGEX.test(name);
  return matchForText;
};

export const CheckValidPwd = (pwd) => {
  const matchForNum = PWD_REGEX.test(pwd);
  return matchForNum;
};
