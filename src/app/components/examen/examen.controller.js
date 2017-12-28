'use strict';

class ExamenController {

    constructor($rootScope, Storage, Message, DataService, apiUrl, timeSessionExpired, Auth) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.Storage = Storage;
        this.Message = Message;
        this.Auth = Auth;
        this.timeSessionExpired = timeSessionExpired;
        this.DataService = DataService;
        this.apiUrl = apiUrl;
    }

    $onInit() {
        
    }
}

export default ExamenController;