let sobre = document.querySelector("#about")

// Função Assincrona
async function getApiGithub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/jhennyticona")
        const perfil = await dadosPerfil.json()

        let conteudo = `
            <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
            <article class="section_content">
                <h1>Quem sou eu além da Tecnologia</h1>
                <p>
                    Tenho 35 anos e sou formada em Engenharia de Sistemas, voltei ao Brasil depois
                     de muitos anos com o objetivo de retomar minha profissão e conclui o curso Java Full Stack na Generation Brasil, onde desenvolvi habilidades sólidas em Spring e React.js 
                     e aprimorei minha persistência para enfrentar desafios e contribuir para soluções inovadoras.
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${perfil.html_url}" target="_blanck">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>
        `
        sobre.innerHTML += conteudo

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle("dark-theme")
}

getApiGithub()