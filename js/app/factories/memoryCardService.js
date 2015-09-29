gameApp.factory('memoryCardService', ['$rootScope', '$timeout', function($rootScope, $timeout){
	var selected,
		match;

	function checkMatch() {
		if(selected.word === match.word) {
			selected.matched = true;
			match.matched = true;
			$rootScope.$broadcast('foundMatch');
		}
		else
			$timeout(reset.bind(this, selected, match), 1000);

		selected = void(0);
		match = void(0);

	};

	//arguments passed in with bind
	function reset(selected, match) {
		selected.selected = false;
		match.selected = false;
	};

	return {
		selectCard: function(card) {
			card.selected = true;

			if(!selected)
				selected = card;
			else if(!match) {
				match = card;
				checkMatch();
			}

		}
	};

}]);