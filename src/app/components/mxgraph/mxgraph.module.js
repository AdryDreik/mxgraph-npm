'use strict';

import MxGraphComponent from './mxgraph.component';
import './mxgraph.scss';

const MxGraph = angular
    .module('app.mxgraph', [])
    .component('appMxgraph', MxGraphComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('mxgraph', {
                url: '/mxgraph',
                component: 'appMxgraph'
            })
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default MxGraph;