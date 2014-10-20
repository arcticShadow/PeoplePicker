'use strict';

var json = require('comment-json'),
    fs = require('fs'),
    allPeople = json.parse(fs.readFileSync('people_list.json').toString()),
    Random = require('random-js');


var theChosenOnes = [];

for(var i=0; i<3; i++){
    theChosenOnes.push(Random.pick(Random.engines.nativeMath, allPeople));
}

console.log(theChosenOnes);