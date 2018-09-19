//server.js
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/@coreui/coreui-free-angular-admin-template'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/@coreui/coreui-free-angular-admin-template/index.html'));
});
app.listen(process.env.PORT || 8080);