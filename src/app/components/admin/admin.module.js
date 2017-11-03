'use strict';

import Login from './login/login.module';

const Admin = angular
    .module('app.admin', [
        Login,
    ])
    .name;

export default Admin;