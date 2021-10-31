const response = (
  res,
  status = true,
  code = 200,
  message = null,
  data = null
) => {
  let responseData = {
    status,
  };

  if (message) responseData.message = message;
  if (data) responseData.data = data;

  res.status(code).json(responseData);
  return;
};

module.exports = {
  response,
};
