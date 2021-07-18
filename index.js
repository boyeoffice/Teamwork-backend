const app = require('./app');
const env = require('./env');

app.listen(env.port, () => console.log(`🚀 is running on port ${env.port}`));
