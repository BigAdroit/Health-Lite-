// for validation
let submit = document.getElementById('send')
submit.addEventListener('click', (e)=> {
    e.preventDefault()
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value
    let array = []
    let messageObject = {}
    if(email.trim() !== '' && name.trim() !=="" && message.trim() !="") {
        console.log(`${email}, ${name}, ${message}`)
        messageObject.name = name;
        messageObject.email = email;
        messageObject.message = message
        array.push(messageObject)
        sessionStorage.setItem('messageData', JSON.stringify(array))
        name = "";
        email = "";
        message ="";
        alert('hello')
    }

})