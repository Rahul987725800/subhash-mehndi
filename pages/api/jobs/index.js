import { persons } from '@base/data';
export default async (req, res) => {
  res.status(200).json(persons);
};
