
let button = document.getElementById("buttonResult");
let carDragon = document.getElementById("carDragon");
let urlBase = "https://dragonball-api.com/api/characters";

let page = 0;
let limit = 58;

let getCharacter = async ()=>{
    try{
        let response = await axios.get(`${urlBase}?page=${page}&limit=${limit}`);
        let personajesData = response.data.items;

        carDragon.innerHTML += personajesData.map((p) => `
            <div class="card">
                <h2>${p.name}</h2>
                <img src="${p.image}" alt="${p.name}">
                <p>
                    <br><strong>Status:</strong> ${p.race}
                    <br><strong>Species:</strong> ${p.race}
                    <br><strong>Species:</strong> ${p.ki}
                    <br><strong>Species:</strong> ${p.maxKi}
                </p> 
            </div>
        `)
    }catch(e){
        console.error("ocurrio un error " + e.message);
    }
}

button.addEventListener("click", ()=>{
    getCharacter();
})



