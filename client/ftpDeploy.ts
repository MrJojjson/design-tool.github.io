const FtpDeploy = require('ftp-deploy');
require('dotenv').config();

const ftpDeploy = new FtpDeploy();

const config = {
    user: 'epiz_27885939',
    password: process.env.FTP_PASSWORD,
    host: 'ftpupload.net',
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/htdocs/',
    include: ['*', '**/*'],
    deleteRemote: true,
    forcePasv: true,
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log('finished:', res))
    .catch((err) => console.log(err));

ftpDeploy.on('uploading', function (data) {
    console.log(data.totalFilesCount); // total file count being transferred
    console.log(data.transferredFileCount); // number of files transferred
    console.log(data.filename); // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function (data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on('log', function (data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on('upload-error', function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});
