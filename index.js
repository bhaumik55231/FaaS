exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Testing google source repo';
  res.status(200).send(message);
};
