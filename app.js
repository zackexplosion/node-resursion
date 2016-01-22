"use strict";
var prettyjson = require('prettyjson');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
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
          },
          {
            id: 88,
            children: []
          },
          {
            id: 99,
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
        children: [
          {
            id: 8,
            children: [
              {
                id: 11,
                children: []
              },
              {
                id: 12,
                children: []
              },
            ]
          }
        ],
      }
    ]
  }
];

function find_node_by_id (id){
  var step = 0;
  var found = false;
  var result = {
    element: null,
    trace: []
  };
  function find_node(node, stack){
    if(found){
      return result;
    }
    stack.push({
      id: node.id,
      text: node.text
    });
    console.log('step', ++step, ', current id:', node.id);
    console.log('stack', stack);

    if(node.id === id){
      console.log('!!!!!!!!!!!!!!!');
      console.log('found node', node);
      console.log('!!!!!!!!!!!!!!!');
      found = true;
      result = {
        element: node,
        trace: stack
      }
      return true;
    }else if(Array.isArray(node.children)){

      if(node.children.length === 0){
        stack.pop();
        return false;
      }

      console.log('  search child');
      var resursion_result = false;
      node.children.forEach(function(v){
        let resursion_result = find_node(v, stack);
        console.log('  recursion search', resursion_result);
        // return r !== null;
      });

      return resursion_result;
    }

    return null;
  }

  for(let i in root){
    find_node(root[i], []);
  }

  return result;
}



// var result = find_tree_by_id(88);
var d1 = process.hrtime()[1];
var result = find_node_by_id(12);
var time = process.hrtime()[1] - d1;


console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('search took:', time, 'ns', time / 1000, 'ms');
console.log(prettyjson.render(result));
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');



