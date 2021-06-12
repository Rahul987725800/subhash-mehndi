import { persons } from '@base/data';

export default async (req, res) => {
  console.log(req.method);
  console.log(req.query);
  const result = persons.find((person) => person.id === req.query.id);
  console.log(result);
  res.status(200).json(result);
};
