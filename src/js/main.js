const addBtn = document.querySelector('#add-btn')
const deleteAllBtn = document.querySelector('#delete-all-btn')

const notesArea = document.querySelector('#notes-area')
const deleteIcon = document.querySelector('#delete-icon')

const popup = document.querySelector('#popup')
const popupTextArea = document.querySelector('#popup__textarea')
const popupAddBtn = document.querySelector('#popup-add-btn')
const popupCancelBtn = document.querySelector('#popup-cancel-btn')

let cardID = 0

const showPopup = () => {
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
	popupTextArea.value = ''
}

const deleteAllBtns = () => {
	notesArea.innerHTML = ''
}

const addNewNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('app__notes-note')
	newNote.setAttribute('id', cardID)

	newNote.innerHTML = `<i class="fa-solid fa-circle-xmark" id="delete-icon"></i>
<h2 class="app__notes-note-h2">Notatka ${cardID}</h2>
<p class="app__notes-note-text">${popupTextArea.value}</p>`
	notesArea.appendChild(newNote)
	popup.style.display = 'none'
	popupTextArea.value = ''
	cardID++
}

popupAddBtn.addEventListener('click', addNewNote)
popupCancelBtn.addEventListener('click', closePopup)
addBtn.addEventListener('click', showPopup)
deleteAllBtn.addEventListener('click', deleteAllBtns)
