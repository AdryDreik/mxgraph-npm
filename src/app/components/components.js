'use strict';

import Admin from './admin/admin.module';
import maxgraph from './mxgraph/mxgraph.module';

const Components = angular
    .module('app.components', [
        Admin,
        maxgraph
    ])
    .name;

export default Components;