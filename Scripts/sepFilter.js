custApp.filter("custFiler", function() {
	return function(custFilter) {
		switch (custFilter) {
		case 1:
			return 'Female';
		case 2:
			return 'Male';
		case 3:
			return 'Other one';
		}

	}
})