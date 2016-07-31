var _data = {
	'Cat Toys': [
			{ name: 'Mice' },
			{	name: 'Laser Pointer' }
		],
	'Dog Toys': [
		{ name: 'Squeek toy' }
	]
}

module.exports = {
	getCategories: function(){
			return Object.keys(_data);
		},
	
	addCategory: function(categoryToAdd){
			_data[categoryToAdd] = [];
		},
	
	deleteCategory: function(categoryToDelete){
			delete _data[categoryToDelete];
		},
	
	addProduct: function(category, product){
		_data[category].push({ name: product })	
	},
	
	deleteProduct: function(category, product){
			_data[category].map( function(el, index, array){
				if (el.name === product){
					_data[category].splice(index, 1);
				}
			});
	
		},
	
	getProducts: function(category){
			return _data[category];	
		}
	
}
