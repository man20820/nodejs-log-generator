var cron = require('node-cron');

cron.schedule('*/3 * * * * *', () => {
  console.log('ini adalah pesan log pertama');
});

cron.schedule('*/3 * * * * *', () => {
  console.log('ini adalah pesan log kedua');
});

cron.schedule('*/5 * * * * *', () => {
  console.error('ini adalah pesan error');
});