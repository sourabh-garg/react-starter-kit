import Main from '../components/main';

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
    throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
// Loading modules!
    return module => cb(null, module.default);
}
 

export default {
    path: '/venues',
    component: Main,
    indexRoute: {
        getComponent(location, cb) {
            System.import('../components/Venue-landing/venue-landing')
                .then(loadRoute(cb))
                .catch(errorLoading);
        },
    },
    childRoutes: [

        {
            path: ':city',
            getComponent(location, cb) {
                System.import('../components/VenueSite/Venues-list/venues-list')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
            },
        },
        {
            path: ':city/sports/:sports',
            getComponent(location, cb) {
                System.import('../components/VenueSite/Venues-list/venues-list')
                    .then(loadRoute(cb, false))
                    .catch(errorLoading);
            },
        },
        {
            path: ':city/:venue',
            getComponent(location, cb) {
                System.import('../components/Venue-detail-page/venue-detail-page')
                    .then(loadRoute(cb))
                    .catch(errorLoading)
            },
        },
    ],
};
