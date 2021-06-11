const fs = require('fs')
const chalk = require('chalk')
const getNotes = () =>
{
    console.log("Your Notes...")
}

const addNotes = (title, body) =>  {
const notes = loadNotes()
const darray = notes.filter((note) => note.title === title)



if(darray.length === 0)
{
    notes.push ({
        title: title,
        body: body
    })
    saveNotes(notes)
}
else
{
    console.log(chalk.red.inverse('Already has the same title'))
}
}
const saveNotes = (notes) =>
{
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)

}
const removeNotes = (title) => {
    const notes = loadNotes()

    const darr = notes.filter((note) => note.title != title)
    if(darr !== 0)
    {
        saveNotes(darr)
    }
    else
    {
        console.log('there is no note with this title')
    }

}
const listNotes = () => {
const lNotes = loadNotes()
console.log(chalk.bold('YOUR NOTES\n\n'))
lNotes.forEach((note)=>{
    console.log(note.title + '\n' + note.body + '\n\n')
    
})

}
const readNotes = (title) => {
    const notes = loadNotes()
    const duparray = notes.find((note) => note.title === title)
    if(duparray) 
    {
        console.log(chalk.bold(duparray.title))
        console.log(duparray.body)
    }
    else
    {
        console.log("No notes found")
    }
}
const loadNotes = () => {
try {
const dataBuffer = fs.readFileSync('notes.json')
const data = JSON.parse(dataBuffer.toString())
return data
}catch (e)
{
    return []
}
}

module.exports = {
    addNote: addNotes,
    removeNote: removeNotes,
    listNote: listNotes,
    readNote: readNotes
}