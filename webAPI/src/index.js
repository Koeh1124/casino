const express = require('express');
const app = express();
const bp = require('body-parser');
const routeAccount = require('./routes/account.js');
const PORT = 3000;
const db = require('./db.js');
const cors = require('cors');
const { use } = require('./routes/account.js');

app.use('/account',routeAccount);
app/use(cors());
app.listen(PORT, () => console.log('API running on port 3000 :)'));

app.get('/', (request, response) => {
    console.log(request.url);
    response.send('API online')
});


