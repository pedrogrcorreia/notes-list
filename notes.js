const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)


    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const removedNote = notes.filter((note) => note.title !== title)

    if(removedNote.length < notes.length){
        saveNotes(removedNote)
        console.log(chalk.green('Note "' + title + '" removed!'))
    } else {
        console.log(chalk.red('Note "' + title + '" not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue("Notes List"))

    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.green('Title: ' + note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Note "' + title + '" not found!'))
    }
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}