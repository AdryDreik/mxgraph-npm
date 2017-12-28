'use strict';

import Admin from './admin/admin.module';
import Examen from './examen/examen.module';

const Components = angular
    .module('app.components', [
        Admin,
        Examen
    ])
    .name;

export default Components;