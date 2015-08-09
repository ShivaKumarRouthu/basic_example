angular.module('cookbook')

.factory('myFactory', function(imageStore) {
	return {
		thumb: function(id){
			return imageStore.thumbnailUrl(id)
		}
	};
});