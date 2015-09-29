gameApp.controller('memoryGameController', ['$scope', 'memoryCardService', function($scope, memoryCardService){

	$scope.words = [];
	$scope.finished = false;
	$scope.attempts = 0;

	function checkComplete() {
		$scope.finished = $scope.words.reduce(function(p, c){ 
				return c.matched !== true ? false : p; 
			}, true);
	}

	$scope.selectCard = function(card) {
		if(!card.selected && !card.matched) {
			$scope.attempts++;
			memoryCardService.selectCard(card);
		}
	};

	$scope.resetGame = function() {
		$scope.finished = false;
		$scope.words = [];
		$scope.attempts = 0;
		$scope.$emit('endGame');
	};

	$scope.$on('wordsEntered', function(evt, words){
		$scope.words = words
					.concat(words.slice(0))
					.map(function(w, ndx) { return { id: ndx, word: w }; })
					.sort(function() {return .5 - Math.random(); });
	});

	$scope.$on('foundMatch', function(){
		checkComplete();
	});

}]);