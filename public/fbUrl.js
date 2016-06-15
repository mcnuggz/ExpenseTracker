angular.module('app').constant('FirebaseUrl', 'https://expense-tracker-c71bf.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);
