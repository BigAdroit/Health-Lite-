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
        localStorage.setItem('messageData', JSON.stringify(array))
        document.getElementById('email').value=""
        document.getElementById('name').value=""
        document.getElementById('message').value=""
            let inboxMessage = document.querySelector('.success')
            inboxMessage.style.display='block'
            inboxMessage.innerHTML = `<b> Message sent successfully</b> <br> Your message will be reply soon, <br> Thanks!`

        setTimeout(()=> {
            inboxMessage.style.display='none';
        }, 5000)
        
    }else {
        let inboxMessage = document.querySelector('.success')
            inboxMessage.style.display='block'
            inboxMessage.style.backgroundColor="tomato"
            inboxMessage.innerHTML = `<b> Message not sent</b> <br> an error occur while sending your message!, <br> Try to resend`
            setTimeout(()=> {
                inboxMessage.style.display='none';
            }, 5000)
    }

})