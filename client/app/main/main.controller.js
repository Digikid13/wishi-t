'use strict';

angular.module('wishiProjectApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.data = [];
    $scope.pages = [1, 2, 3];

    function shuffle(array) {
    	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
         array[i] = array[j];
        array[j] = temp;
      }

      return array;
    }

    $scope.pageOpen = function(pageNumber) {
    	$http.get('/api/page?p=' + pageNumber).success(function(pData) {
    		
    		for (var j = 0; j < $scope.pages.length; j++) {
    			if ($scope.pages[j] === pageNumber) {
    				var index = j;
    			}
    		}

    		for (var i = 0; i < pData.length; i++) {
    			if (pData[i].blurb.length > 32) {
    				pData[i].blurb = pData[i].blurb.substring(0, 29) + '...';
    			}
    		}

    		$scope.pages.splice(index, 1);
    		
    		$scope.data = $scope.data.concat(shuffle(pData));
    	});
    }

    $scope.randomPageOpen = function() {
    	if ($scope.pages.length > 0) {
	    	var rand = Math.floor(Math.random() * $scope.pages.length);
	    	$scope.pageOpen($scope.pages[rand]);
	    }
    }

		var whenScrlBottom = function() {
		  var win_h = (self.innerHeight) ? self.innerHeight : document.body.clientHeight;

		  var scrl_pos = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;

		  if (document.body.scrollHeight <= (scrl_pos + win_h)) {
		    $scope.randomPageOpen();
		  }
		}

		window.onscroll = whenScrlBottom;
  });