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
	
	deleteCategory: function(){
		},
	
	addProduct: function(category, product){
		_data[category].push({ name: product })	
	},
	
	deleteProduct: function(){
		},
	
	getProducts: function(category){
			return _data[category];	
		}
	
}
