const screen = {
    userProfile: document.querySelector('.profile-data'), renderUser(user) {
        let userInfo = `
            <div class ="info">
                <img src="${userData.avatarUrl}" alt="Foto do perfil do usuário"/>
                    <div class="data"> 
                        <h1>
                        "${userData.name ?? 'Não possui nome cadastrado'}"
                        </h1>
                        <p>
                        "${userData.bio ?? 'Não possui bio cadastrada'}"
                        </p>
                    </div>
            </div>`

    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }

    }

}

export { screen }