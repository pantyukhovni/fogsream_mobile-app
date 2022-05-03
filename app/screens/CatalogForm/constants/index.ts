import * as yup from 'yup';
import { YupType } from '../../../common/services/yup';

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

const schema = yup.object({
  firstName: YupType.firstName,
  lastName: YupType.lastName,
  email: YupType.email,
  phone: YupType.phone
}).required();

export { schema };