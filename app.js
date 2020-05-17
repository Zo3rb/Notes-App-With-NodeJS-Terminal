// Nots App --> Terminal Crud App Using The Node.js
const yargs = require('yargs');
const { addNote, deleteNote, listNotes, readNote, updateNote } = require('./notes.js');

// Create -- List Command
yargs.command({
    command: 'list',
    describe: 'List All Te Notes Within the App',
    handler() {
        listNotes()
    }
})

// Create -- Read Command
yargs.command({
    command: 'read',
    describe: "Read or Fetch One Particular Note",
    builder: {
        title: {
            describe: "The title Will Read or Fetch With",
            demandOption: true,
            type: "sting"
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

// Create -- Add Command
yargs.command({
    command: 'add',
    describe: 'Add to Notes Command',
    builder: {
        title: {
            describe: 'The Title Of The Single Note',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'The Body of The Single Note',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

// Create -- Delete Command
yargs.command({
    command: "delete",
    describe: "Delete a Particular Note",
    builder: {
        title: {
            describe: "The Title of The Note Wanted to Delete",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        deleteNote(argv.title)
    }
})

// Create -- Update Command
yargs.command({
    command: "update",
    describe: "Command to Update a Particular Note",
    builder: {
        update: {
            describe: "The Parameter to Fetch The Note i Want to Update",
            demandOption: true,
            type: "string"
        },
        title: {
            describe: "The New Title of The Object",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "The Body of The Object to Update",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        updateNote(argv.update, argv.title, argv.body)
    }
})

yargs.parse()
