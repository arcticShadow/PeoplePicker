'use strict';

var json = require('comment-json'),
    fs = require('fs'),
    Random = require('random-js'),
    program = require('commander'),
    theChosenOnes = [],
    allPeople;

program
  .version('0.0.1')
  .option('-c, --count <count>', 'How many people to randomly select from [file]', parseInt, 3)
  .option('-f, --file [file]', 'An alternate JSON file to parse', 'people_list.json')
  .parse(process.argv);

allPeople = json.parse(fs.readFileSync(program.file).toString());

for(var i=0; i < program.count; i++){
    theChosenOnes.push(Random.pick(Random.engines.nativeMath, allPeople));
}

console.log(theChosenOnes);