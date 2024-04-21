let token = localStorage.getItem('token')

if(!token) {
    window.location.href = 'login.html'
}


fetch('http://localhost:3000/auth/singup', {
    headers: {
        'x-access-token': `${token}`,

    },
})

    .then((response) => response.json())
    .then((data) => {
        let user = document.querySelector('#user')
        user.innerHTML = `
        <h1>${data.pseudo}</h1>

        <h2>${data.email}</h2>

        <a href="index.html">BACK</a>
        
        `
    })