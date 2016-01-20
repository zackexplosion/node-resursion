var prettyjson = require('prettyjson');
var root = [
	{
		id: 1,
		children: [
			{
				id: 5,
				children: []
			},
			{
				id: 6,
				children: [
					{
						id: 7,
						children: []
					}
				]
			}
		]
	},
	{
		id: 2,
		children: [
			{
				id: 3,
				children: []
			},
			{
				id: 4,
				children: []
			}
		]
	}
];

var find_tree_by_id = function(id){
	var r;
	var find_nodes = function(id, node, result){
		var _node = {
			id: node.id,
		}

		result.push(_node);
		if(node.id === id){
			r = result;
			console.log('!!!! FOUND !!!!');
			return true;
		}

		console.log('node.id', node.id);
		console.log('node.children.length', node.children.length);

		if(node.children.length === 0){
			result.pop();
			return false;
		}


		node.children.some(function(n){
			return find_nodes(id, n, result);
		});
	}

	// var result = [];
	for(var i in root){
		find_nodes(id, root[i], []);
	}

	return r;
}




var result = find_tree_by_id(7);


console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(prettyjson.render(result));
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
