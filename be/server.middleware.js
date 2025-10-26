module.exports = (request, response, next) => {
  const isBrowserRequest = request.headers['user-agent'] !== 'node';
  if (isBrowserRequest) {
    console.log('browser');
  }
  next();
};
