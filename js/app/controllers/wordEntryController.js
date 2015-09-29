gameApp.controller('wordEntryController', ['$scope', function($scope){

	$scope.wordInput = "";
	$scope.gameStarted = false;

	function lessThanEight(p,c) { return c.length > 8 ? false : p; };

	$scope.setWords = function() {
		var words = $scope.wordInput.split(' ');
		if(words.length > 3 && words.reduce(lessThanEight, true)) {
			$scope.gameStarted = true;
			$scope.wordInput = "";
			$scope.$broadcast('wordsEntered', words);
		}
	};

	$scope.submitWordsInput = function (evt) {
		if(evt.charCode === 13) 
			$scope.setWords();
	};

	$scope.$on('endGame', function(){
		$scope.gameStarted = false;
	});

}]);