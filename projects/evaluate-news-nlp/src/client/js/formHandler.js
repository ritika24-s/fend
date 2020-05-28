function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('https://api.aylien.com/api/v1/sentiment')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.text
    })
}

export { handleSubmit }
