let drag
let dropzones = document.querySelectorAll('.dropzone')

function execute(type, callback){
    document.addEventListener(type, callback, false)
}

execute('dragstart', (e) => {
    drag = e.target
    e.target.style.opacity = .5
})

execute('dragend', (e) => {
    e.target.style.opacity = null
})

execute('dragover', (e) => {
    e.preventDefault()
})

execute('dragenter', (e) => {
    if(e.target.className === 'dropzone'){
        e.target.style.backgroundColor = '#f4f4f4'
    }
})

execute('dragleave', (e) => {
    if(e.target.className === 'dropzone'){
        e.target.style.backgroundColor = null
    }
})

execute('drop', (e) => {
    if(e.target.className === 'dropzone'){
        drag.remove()
        e.target.appendChild( drag )
        dropzones.forEach(dropzone => {
            dropzone.classList.remove('active')
        })
        e.target.style.backgroundColor = null
        e.target.classList.add('active')
    }
})