document.addEventListener('click', async (e) => {
  if (e.target.id === 'rancher') {
    window.location.href = 'http://149.28.25.177:8080/';
  } else if (e.target.id === 'munin') {
    console.log('Munin server');
  } else if (e.target.id === 'trello') {
    window.location.href = 'https://trello.com/b/r3mANzdO/%ED%82%A4%EC%8A%A4%ED%86%A4';
  } else if (e.target.id === 'vultr') {
    window.location.href = 'https://my.vultr.com/';
  } else if (e.target.id === 'github') {
    window.location.href = 'https://github.com/keystQuant';
  } else if (e.target.id === 'travis') {
    window.location.href = 'https://travis-ci.org/';
  } else if (e.target.id === 'sentry') {
    window.location.href = 'https://sentry.io/keystone-investments/';
  } else if (e.target.id === 'apiary') {
    window.location.href = 'https://app.apiary.io/buzzz/editor';
  } else if (e.target.id === 'django') {
    console.log('Django admin');
  } else if (e.target.id === 'analytics') {
    window.location.href = 'https://www.google.com/analytics/';
  } else if (e.target.id === 'drive') {
    window.location.href = 'https://www.google.com/drive/';
  } else if (e.target.id === 'blog') {
    window.location.href = 'https://blog.naver.com/ppark9553';
  }
});
