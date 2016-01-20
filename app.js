var prettyjson = require('prettyjson');
var root = [
	{
		id: 1,
		children: [
			{
				id: 5,
				children: []
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

var result = [];
var find_nodes = function(id, node){
	result.push(node);
	if(node.id === id){
		return true;
	}else{
		return false;
	}

	// if(node.id !== id){

	// }

	// if()
}

var id_to_find = 3;

for(var i in root){
	find_nodes(id_to_find, root[i]);
}

console.log('result');
console.log(result);