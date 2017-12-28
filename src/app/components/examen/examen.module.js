'use strict';

import ExamenComponent from './examen.component';
import './examen.scss';

const Examen = angular
    .module('app.examen', [])
    .component('appExamen', ExamenComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('examen', {
                url: '/examen',
                component: 'appExamen'
            })
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default Examen;