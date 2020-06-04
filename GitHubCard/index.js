/*
STEP 1: using axios, send a GET request to the following URL
  (replacing the placeholder with your Github name):
  https://api.github.com/users/<your name>
*/
const davidTemple = axios.get ('https://api.github.com/users/dstemple7')
  .then(response =>{
  console.log(response.data)
  gitCardMaker(response.data)

  const cards = document.querySelector('.cards')
  cards.appendChild(gitCardMaker(response.data))

})

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknel'
]

function getUsers(person){
  
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => {

    console.log(response.data)
    gitCardMaker(response.data)

    const cards = document.querySelector('.cards')
    cards.appendChild(gitCardMaker(response.data))

  })

}
followersArray.forEach((something) => {
  getUsers(something)
})

/*
List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


/*
STEP 2: Inspect and study the data coming back, this is YOUR
  github info! You will need to understand the structure of this
  data in order to use it to build your component function

  Skip to STEP 3.
*/

/*
STEP 4: Pass the data received from Github into your function,
  and append the returned markup to the DOM as a child of .cards
*/

/*
STEP 5: Now that you have your own card getting added to the DOM, either
  follow this link in your browser https://api.github.com/users/<Your github name>/followers,
  manually find some other users' github handles, or use the list found at the
  bottom of the page. Get at least 5 different Github usernames and add them as
  Individual strings to the friendsArray below.

  Using that array, iterate over it, requesting data for each user, creating a new card for each
  user, and adding that card to the DOM.
*/

/*
STEP 3: Create a function that accepts a single object as its only argument.
  Using DOM methods and properties, create and return the following markup:

  <div class="card">
    <img src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
*/

function gitCardMaker (githubUser){
const {avatar_url, bio, followers, following, html_url, location, login, name} = githubUser

const cardDiv = document.createElement('div')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
const theName = document.createElement('h3')
const userName = document.createElement('p')
const theLocation = document.createElement('p')
const theProfile = document.createElement('p')
const link = document.createElement('a')
const theFollower = document.createElement('p')
const theFollowing = document.createElement('p')
const theBio = document.createElement('p')

cardDiv.appendChild(image)
cardDiv.appendChild(cardInfo)
cardInfo.appendChild(theName)
cardInfo.appendChild(userName)
cardInfo.appendChild(theLocation)
cardInfo.appendChild(theProfile)
theProfile.appendChild(link)
cardInfo.appendChild(theFollower)
cardInfo.appendChild(theFollowing)
cardInfo.appendChild(theBio)

cardDiv.classList.add('card')
cardInfo.classList.add('card-info')
theName.classList.add('name')
userName.classList.add('username')

image.src= avatar_url
link.href = html_url
theProfile.textContent = `Profile: ${link}`
theName.textContent = name
userName.textContent = login 
theLocation.textContent =`Location: ${location}`
theFollower.textContent = `Followers: ${followers}`
theFollowing.textContent =  `Following: ${following}`
theBio.textContent = `Bio: ${bio}` 

console.log(cardDiv)

return cardDiv

}