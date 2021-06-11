const { bold } = require('chalk')
const chalk = require('chalk')
const { describe, demandOption, argv } = require('yargs')
const yargs = require('yargs')
const { removeNote, listNote, readNote } = require('./notes.js')
const notes = require('./notes.js')




yargs.version('1.1.0')

yargs.command ({
    command : 'add',
    describe : 'Add a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: 'True',
            type: 'string'
        },
        body: {
            describe: 'Body of the book',
            demandOption: 'True',
            type: 'string'
        }

    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    handler() {
        removeNote(argv.title)
    }
})

yargs.command ({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        readNote(argv.title)
    }
})

yargs.command ({
    command: 'list',
    describe: 'List a note',
    handler: function(argv) {
        listNote(argv.title)
    }
})

yargs.parse()