const words = "La boîte à chats !"
const btn_value = "Encore un"
const url = "https://api.thecatapi.com/v1/images/search"
const container = document.querySelector(".container")

//TITLE
const title = document.createElement("h1")
title.setAttribute("class","title")

//IMAGE CONTAINER
const imgContainer = document.createElement("div")
imgContainer.setAttribute("class", "img-container")

//IMG
const img = document.createElement("img")
imgContainer.appendChild(img)
img.setAttribute("alt", "photo de chat")

//BTN
const btn = document.createElement("button")
btn.setAttribute("type", "button")
btn.textContent = btn_value

//ADD ELEMENTS TO CONTAINER
container.appendChild(title)
container.appendChild(imgContainer)
imgContainer.appendChild(btn)

title.textContent = words

const getCats = (url)=>{
    btn.setAttribute("class", "hide-btn")
    // console.log("le bouton : ", btn)
    return fetch(url)

    .then(response=>{
    // console.log("la réponse : ", response)
        if(response.ok){
            return response.json()
        }
        else{
            btn.classList.toggle("hide-btn")
            throw response.status
        }
    })
    .then(data=>{
        // console.log("la data : ", data)
        img.setAttribute("src", data[0].url)
        btn.classList.toggle("hide-btn")
    })
    .catch(err=>{
        console.log("Erreur : ", err)
        btn.classList.toggle("hide-btn")
    })    
}
getCats(url)
btn.addEventListener("click", ()=>{
    getCats(url)
})

/////////// CATBOY API
const container_2 = document.querySelector(".container_2")
const anime = "https://anime-facts-rest-api.herokuapp.com/api/v1"

//TITLE
const title_2 = document.createElement("h1")
title_2.setAttribute("class","title_2")
title_2.textContent = "Le paradis des animés !"

//BTN
const btn_2 = document.createElement("button")
btn_2.setAttribute("type", "button")
btn_2.textContent = "Clique pour en voir plus !"

//IMG_2
const img_2 = document.createElement("img")
img_2.setAttribute("class", "catBoy")
img_2.setAttribute("alt", "photo d'un animé")

//IMG CONTAINER_2
const imgContainer_2 = document.createElement("div")
imgContainer_2.setAttribute("class", "img-container-2")
imgContainer_2.appendChild(img_2)
imgContainer_2.appendChild(btn_2)

//ADD ELEMNTS TO CONTAINER_2
container_2.appendChild(title_2)
container_2.appendChild(imgContainer_2)

//FUNCTION TO RANDOMLY GENERATE AN INTEGER
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getAnimePic = async (url)=>{
    btn_2.setAttribute("class","hide-btn")
    let infos = []
    try{
        let response = await fetch(url)
        infos = await response.json()
        img_2.setAttribute("src", infos.data[getRandomInt(infos.data.length)].anime_img)
        btn_2.classList.toggle("hide-btn")
        // console.log(infos.data.length)
    }
    catch(error){
        // console.log(error)
        btn_2.classList.toggle("hide-btn")
    }
    finally{
        if(btn_2.getAttribute(".hide-btn") !== "" && btn_2.getAttribute(".hide-btn") !== null){
            btn_2.classList.toggle("hide-btn")
        }
        return infos
    }
}
btn_2.addEventListener("click",()=>{getAnimePic(anime)})

getAnimePic(anime)
