module.exports = (request, response, next) => {
  const isBrowserRequest = request.headers['user-agent'] !== 'node';
  if (isBrowserRequest) {
    console.log('browser: set 1000 ms delay');
    // Задержка браузерных запросов
    setTimeout(next, 1000);
  } else {
    next();
  }
};
