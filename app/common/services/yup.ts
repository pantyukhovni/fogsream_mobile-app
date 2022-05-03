import * as Yup from 'yup';

const requiredFieldError = 'Поле обязательно для заполнения';

// const passwordSchema = Yup.string()
//   .min(8, 'Пароль слишком короткий - должно быть не менее 8 символов.')
//   .required(requiredFieldError);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const firstName = Yup.string()
  .required(requiredFieldError);

const lastName = Yup.string()
  .required(requiredFieldError);

const email = Yup.string()
  .email('Некорректный email')
  .required(requiredFieldError);

const phone = Yup.string()
  .matches(phoneRegExp, requiredFieldError);

const YupType = {
  firstName,
  lastName,
  email,
  phone
};

export {
  requiredFieldError,
  YupType
};