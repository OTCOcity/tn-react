var plan = require('flightplan');

var tmpDir = 'blog-client-' + new Date().getTime();
var user = 'u33830';

plan.target('production', {
  host: 'u33830.netangels.ru',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function (local) {
  local.log('Copy files to remote');
  var filesToCopy = local.exec('git ls-files', {silent: true});

  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function (remote) {
  // remote.exec('nvm use default');

  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  // remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload app');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  // remote.exec('cd ~/current && pm2 restart pm2.config.js --env production');

  remote.log('Finish');
});

