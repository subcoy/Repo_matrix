const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-et-pt-c';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
  try {
        const FullPlayersData= await fetch(`${APIURL}/players`);
        const data= await FullPlayersData.json();
        return data.data
  } catch (err) {
    console.error('Uh oh, trouble fetching players!', err);
  }
};
///////////////////////////////////////////////////////////////////////////////
// click en  detalles y devuelve informacion
const fetchSinglePlayer = async (players) => {
  try {

    let  playeryersHTML=`
     
          <div class="playerId">
              <h4 class="nameDetails"> Dog name: ${players.name}</h4>
              
              <img class ="imgDetails", src=" ${players.imageUrl}">
              <p>${players.breed}</p>
         </div>

         <button class="back-button">Back</button>
      </div>`;
        playerContainer.innerHTML=playeryersHTML;
  
        let backButton= playerContainer.querySelector('.back-button');
        backButton.addEventListener('click',async()=>{
          window.location.reload();

        });

  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

////////////////////////////new dog ////////////////////////////////////////////////////
const addNewPlayer = async (title, image_url, details)=> {
  try {

    const data = await fetch(`${APIURL}/players`, 
      {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json',
      },
      
      body: JSON.stringify({title,image_url, details})
  })
      console.log("nombre de objeto", playerObj);
      const newplayer=await data.json();
      console.log("ejecutado agregar nuevo player",newplayer);



  } catch (err) {
    console.error('Oops, something went wrong with adding that player!', err);
  }
};
//////////////////////////////////////////////////////////////////// REMOVE FUNCTION //////////////////////////////////
const removePlayer = async (playerId) => {
  try {

    const response =await fetch(`${APIURL}/players/${playerId}`,{
                    method: 'DELETE',
                    });
const playerRemoved= await response.json();
window.location.reload();
console.log("respuesta succes:",playerRemoved.success)
   

  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {

  playerList.innerHTML ='';
  try {
        console.log(playerList);
        for(let players of playerList.players)
            {
              //const section= document.createElement('section')
              const perro =document.createElement('div')
              const breed = document.createElement('h2')
              const image= document.createElement('img')
              const name= document.createElement('p')
              image.setAttribute('src', players.imageUrl)
              // creating buttons

              const DetailsButton = document.createElement('button');              
              DetailsButton.setAttribute('class','details');
              DetailsButton.innerHTML='Details'
              DetailsButton.addEventListener('click',(e) =>{
                e.preventDefault();
                fetchSinglePlayer( players)
              });

              const RemoveButton = document.createElement('button');              
              RemoveButton.setAttribute('class','remove');
              RemoveButton.innerHTML='remove'
              RemoveButton.addEventListener('click',(e) =>{
                e.preventDefault();
                removePlayer(players.id);
                console.log("player removed");      
              });
                            
              breed.textContent=players.breed;
              image.textContent=players.image;
              playerContainer.appendChild(perro);
              perro.append(breed,image, name,DetailsButton,RemoveButton)
              
              

            }

      } catch (err) {
                      console.error('Uh oh, trouble rendering players!', err);
                    }
};

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
  
    let formHtml =`
    <h2>Create a New ppupy</h2>
      <form class='newplayer'>
      
        <label for="title">Title</label>
        <input type="text" id="title" name="title" placeholder="Title">

        <label for="image_url">Image URL</label>
        <input type="text" id="image_url" name="image_url" placeholder="Image URL">

        <label for="details">Details</label>
        <textarea id="details" name="details" placeholder="Details"></textarea>
        <button type="submit">Create</button>
      </form>
    `;

    newPlayerFormContainer.innerHTML=formHtml;

    let form =newPlayerFormContainer.querySelector('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefaul();

      let playerData =`{

        "title": form.title.value,
        "image_url": form.image_url.value,
        "details": form.details.value
      }`

      await addNewPlayer(playerData.title, playerData.image_url,playerData.details)
      const newplayer= await fetchAllPlayers();
      renderAllPlayers(newplayer);

     form.title.value='';
     form.image_url.value='';
     form.details.value='';

    });

  } catch (err) {
    console.error('Uh oh, trouble rendering the new player form!', err);
  }
};

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

init();


