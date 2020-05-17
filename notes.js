
// Notes Js is the File Providing The CRUD Operations With The JSON File
const fs = require('fs');
const chalk = require('chalk');

// Create The Reading Function to Read from The JSON File
const loadData = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const stringData = dataBuffer.toString()
        return dataJSON = JSON.parse(stringData)
    } catch (error) {
        return []
    }
}

const writeData = data => {
    const dataString = JSON.stringify(data)
    fs.writeFileSync('notes.json', dataString)
}


// The CRUD Operations Goes Below
// 1 - List all The Data
const listNotes = () => {
    const notes = loadData()
    return notes.map((note, index) => console.log(`${chalk.gray.bold(index)}: `, note))
}

// 2 - Read Note 
const readNote = title => {
    const notes = loadData()
    const targetNote = notes.find(note => note.title === title)
    if (targetNote) {
        console.log(`${chalk.inverse.green.bold("Found: ")}`, targetNote)
    }
    else {
        console.log(`${chalk.inverse.red.bold("warning :")} ${chalk.red.bold("No such Note")}`)
    }
}

// 3 - Create Note
const addNote = (title, body) => {
    const notes = loadData()
    const titleTaken = notes.find(note => note.title === title)
    if (titleTaken) {
        console.log(`${chalk.inverse.red("Warning")} ${chalk.red.bold("The Note is Already Written")}`)
    }
    else {
        writeData([...notes, { title, body }])
        console.log(`${chalk.inverse.green("success")} ${chalk.green.bold("The Note Have Been Written")}`)
    }
}

// 4 - Delete Note
const deleteNote = title => {
    const notes = loadData()
    const deletedNote = notes.find(note => note.title === title)
    const notesWithoutDeleted = notes.filter(note => note.title !== title)
    if (deletedNote) {
        writeData(notesWithoutDeleted)
        console.log(`${chalk.inverse.green.bold("Success Deleted : ")}`, deletedNote)
    }
    else {
        console.log(`${chalk.inverse.red.bold("warning")} ${chalk.red.bold("No Such a Note")}`)
    }
}

// - Update Note
const updateNote = (update, title, body) => {
    const notes = loadData()
    const targetedNote = notes.find(note => note.title === update)
    const notesWithoutDeleted = notes.filter(note => note.title !== update)
    if (targetedNote) {
        let updatedNote = { title, body }
        writeData([...notesWithoutDeleted, updatedNote])
        console.log(`${chalk.inverse.green.bold("Success:")} ${chalk.green.bold("Note Has Been Updated")}`)
    } else {
        console.log(`${chalk.inverse.red.bold("Warning: ")} ${chalk.red.bold("No Such a Note")}`)
    }
}

module.exports = {
    addNote,
    deleteNote,
    listNotes,
    readNote,
    updateNote
}
