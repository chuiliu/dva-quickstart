import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import router from './router';

import './index.css';
import '@/styles/global.less';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/global').default);
app.model(require('./models/login').default);
app.model(require('./models/user').default);
app.model(require('./models/admin').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
