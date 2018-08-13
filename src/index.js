import dva from 'dva';
import { browserHistory } from 'dva/router';
import { message } from 'antd';
import './index.css';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
     onAction: createLogger(),
     history: browserHistory,
     onError(e) {
       message.error(e.message, ERROR_MSG_DURATION);
     },
     initialState: {
       products: {
         list:[
           { name: 'dva', id: 1 },
           { name: 'antd', id: 2 },
         ],
       }
       },
 });

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
