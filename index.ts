import app from './src/bootstrap';
import env from './env';

app.listen(env.port, () => console.log(`🚀 is running on port ${env.port}`));
