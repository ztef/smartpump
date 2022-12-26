import api_router from './api_router.js';
export default function setrouter(app) {
    app.use('/api', api_router);
    return app;
}