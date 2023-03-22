const init = () => {
    const form = document.querySelector('form')
    const inputID = document.querySelector('#searchByID')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const input=inputID.value
        form.reset()
        fetch(`http://localhost:3000/movies/${input}`)
        .then(res=>res.json())
        .then(data=>renderData(data))
        function renderData(data){
            const title=data.title
            const summary=data.summary
            const titleHTML= document.getElementById('movieDetails').children[0]
            const summaryHTML= document.getElementById('movieDetails').children[1]
            titleHTML.textContent=`Title: ${title}`
            summaryHTML.textContent=`Summary: ${summary}`
        }
    })
}

document.addEventListener('DOMContentLoaded', init);