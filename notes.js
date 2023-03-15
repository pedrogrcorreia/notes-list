const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes..."
}

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
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

const removeNote = function(title){
    const notes = loadNotes()

    const removedNote = notes.filter(function(note){
        return note.title !== title
    })

    if(removedNote.length < notes.length){
        saveNotes(removedNote)
        console.log(chalk.green('Note "' + title + '" removed!'))
    } else {
        console.log(chalk.red('Note "' + title + '" not found!'))
    }
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}