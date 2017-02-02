var myOtherStore = angular.module("myOtherStore", [])

myOtherStore.directive('myDirective', function(){
	return{
		template: '<div> I am another store inside of another angular module </div>'
	};
});