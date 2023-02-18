import e from 'express';
import Config from './config/config';

import { Express } from 'express';

const App = e();

App.get('/healthcheck', (req, res) => {
    res.status(200).send("Server is running!")
})

App.listen(Config.port, () => {
    console.log(`ZeroCord now listening on port ${Config.port}`)
})

export default App as Express