import api_router from './api_router.js';
import root_router from './root_router.js';

export default function setrouter(app) {
    app.use('/api', api_router);
    app.use('/', root_router);
    
    return app;
}