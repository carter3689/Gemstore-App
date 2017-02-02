var myStore = angular.module("myStore", ['myOtherStore'])

	var gems = [
	{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their lustre, beyond their shine. This is one of them',
			canPurchase: false,
			images: [{
				full:'images/gem-01.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
	},
		{
			name: 'Pentagonal Gem',
			price: 4.95,
			description: "Here lies another gem for your to view and purchase",
			canPurchase: true,
			images:[{
				full:'images/gem-02.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name: 'Diamond',
			price: 1000000000,
			description: "This will cost an arm and a leg...give them to me NOW",
			canPurchase:false,
			images: [{
				full: 'images/gem-03.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		},
		{
			name:'Ruby',
			price:100,
			description:"This is a precious jewel",
			canPurchase:true,
			images:[
			{
				full:'images/gem-04.gif'
			}],
			reviews:[
			{
				stars: 5,
				body: "This is wonderful",
				author: "joelc@codingtemple.com"
			},
			{
				stars:4,
				body:"This was ight",
				author: "smith@western.com"
			},
			{
				stars: 1,
				body: "THIS WAS HORRIBILE",
				author: "noya@biz.com"
			}
			]
		}
		]

myStore.controller("myStoreController", function($scope){
	    $scope.gems = gems
			
	
})

/*Panel Controller*/
myStore.controller("myPanelController", function($scope){
	$scope.tab = 1;

	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	}

	$scope.isSelected =function(checkTab){
		return $scope.tab === checkTab;
	}
})

/* Reviews Controller */
myStore.controller('myReviewsController', function(){
	this.reviews = {}

	this.addReview = function(product){
		
		if(!product.reviews)
			product.reviews =[]

		product.reviews.push(this.reviews)
		this.reviews = {}
	}
})












 var myOtherStore = angular.module("myOtherStore", [])
 myOtherStore.directive('myDirective', function(){
	 return{
		template: '<div> I am another store inside of another angular module </div>'
	};


});
