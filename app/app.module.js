(function () {
    
    angular.module('app', [
        'app.core'
        ])
        .controller('HelloController', HelloController)
        .controller('ToastrController', ToastrController)
        .controller('TestSpinnerController', TestSpinnerController);
        
    HelloController.$inject = ['logger'];
    function HelloController(logger) {
        var vm = this;

        vm.myModel = 'World';

        logger.success('Home Controller Activated');

        //throw new Error('Test exception');
    }
    
    ToastrController.$inject = ['logger'];
    function ToastrController(logger) {
        var vm = this;

        vm.message = 'Toast this message';

        vm.info = function () {
            logger.info(vm.message);
        }

        vm.success = function () {
            logger.success(vm.message);
        }

        vm.error = function () {
            logger.error(vm.message);
        }

    }
     
    TestSpinnerController.$inject = [];
    function TestSpinnerController() {
        var vm = this;

        vm.duration = '3000';

        
    }
    
    })();