module.exports = (request, response, next) => {
  console.log(request.headers['user-agent']);
  next();
};
