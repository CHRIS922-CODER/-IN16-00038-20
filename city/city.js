const playersObj = 
    [
    {
    src : '../photos/Ederson.png',
    name : "#31 Ederson " ,
    age : 28,
    country: "Brazil",
    position: "GoalKeeper",
    height: "1,88m "
    },
    
    {
    src : "../photos/rubendias.png",
    name : "#3 Ruben Dias " ,
    age : 24,
    country: "Portugal",
    position: " center-back",
    height : " 1,87m"
    },
    
    {
    src : "../photos/laporte.png",
    name : "#14 aymeric Laporte" ,
    age : 27,
    country: "spain ",
    position: " center-back",
    height : "1,89m "
    },
   {
    src : "../photos/stones.png",
    name : "#5 john Stones" ,
    age : 27,
    country: "England ",
    position: "center-back",
    height: " 1,88m"
   },
   {
    src : "../photos/ake.png",
    name : "#6 Nathan Ake " ,
    age : 27,
    country: "Netherlands ",
    position: "center-back",
    height : " 1,80m"
    
   },
    {
    src : "../photos/canselo.png",
    name : "#27 Joao Cancelo" ,
    age :27 ,
    country: "Portugal",
    position: "Right-back",
    height : "1,82m"
    
    },
    {
    src : "../photos/walker.png",
    name : "#2 Kyle Walker" ,
    age : 31,
    country: "England",
    position: "right-back",
    height : "1,83m"
    
    },
    {
    src : "../photos/rodri.png",
    name : " #16 Rodri" ,
    age : 25,
    country: "spain",
    position: "Defensive midfield",
    height : "1,91m"
    
    },
    {
    src : "../photos/foden.png",
    name : " #47 phil Foden" ,
    age : 21,
    country: "England",
    position: "center-midfield",
    height : "1,71m"
    
    },
    {
    src : "../photos/gundogan.png",
    name : "#8 Ilkay Gundogan" ,
    age : 31,
    country: "Germany",
    position: "central-midfield",
    height : " "
    
    },
    {
    src : "../photos/debruyne.png",
    name : "#17 kevin De Bruyne " ,
    age : 30,
    country: "Belgium",
    position: "Attacking-midfield",
    height : "1,81m"
    
    },
    {
    src : "../photos/benardosilva.png",
    name : "#20 Bernardo Silva " ,
    age : 27,
    country: "Portugal",
    position: "attacking midfield",
    height : " 1,73m"
    
    },
    {
    src : "../photos/sterling.png",
    name : "#7 Raheem Sterling " ,
    age :27 ,
    country: "England",
    position: "Left winger",
    height : "1,70m"
    
    },
    {
    src : "../photos/mahrez.png",
    name : "#26 Riyad Mahrez " ,
    age :31 ,
    country: "Algeria",
    position: "Right winger",
    height : "1,79M"
    
    },
    {
    src : "../photos/gabrieljesus.png",
    name : "#9 Gabriel Jesus " ,
    age :25 ,
    country: "Brazil",
    position: "center-forward",
    height : "1,75m"
    
    },
    {
    src : "../photos/grealish.png",
    name : "#10 Jack Grealish" ,
    age : 26,
    country: "England",
    position: "Left winger",
    height : "1,80m"
    
    }
    
];
console.log(playersObj);


playersObj.forEach(Player=>{

    const player = document.createElement("div");
    player.classList.add("player");
    const pDetails = document.createElement('div');
    pDetails.classList.add('player-details');
    pDetails.innerHTML = `
    <img src="${Player.src}" alt="players image">
    <p> name : <span> ${Player.name}</span></p>
    <p> age : <span> ${Player.age}</span></p>
    <p> country : <span> ${Player.country}</span></p>
    <p> position : <span> ${Player.position}</span></p>
    <p> rating : <span> ${Player.rating}</span></p>
    `;

    player.appendChild(pDetails);
});
const mainContent = document.getElementsByClassName('main-content');
mainContent.appendChild(player);


       
     
    
    

// document.addEventListener('DOMContentLoaded',showPlayer);
