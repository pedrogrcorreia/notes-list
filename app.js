const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { describe } = require('yargs')

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (){
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log("Removing a note!")
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Describe notes',
    handler: function(){
        console.log("Describing notes!")
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log("Reading notes!")
    }
})

console.log(yargs.argv)