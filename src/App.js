import './App.css';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Section from './components/Section';

const gamesList = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt:"Imagem do jogo League of Legends"
  },

  {
    url:"https://www.twitch.tv/directory/game/VALORANT",
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt:"Imagem do jogo Valorant"
  },

  {
    url:"https://www.twitch.tv/directory/game/Minecraft",
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" ,
    alt:"Imagem do jogo Minecraft"
  },

  {
    url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt:"Imagem do jogo TFT"
  },

];

const channelsList = [
  {
    url:"https://avatars.githubusercontent.com/u/71661551?v=4" ,
    imgUrl:"https://avatars.githubusercontent.com/u/71661551?v=4" ,
    alt:"Imagem de Hericles Rocha"
  },

  {
    url:"https://www.twitch.tv/alanzoka",
    imgUrl:"https://avatars.githubusercontent.com/u/71661551?v=4" ,
    alt:"Imagem de Hericles",
  },

  {
    url:"https://www.twitch.tv/cellbit",
    imgUrl:"https://avatars.githubusercontent.com/u/71661551?v=4" ,
    alt:"Imagemd de Hericles",
  },
]


function App() {
  return (
    <div className='App'>

      <Header/>

      <main>
        <Section 
          title="My Games"
          subtitle="My favorite game to play">

         {
          gamesList.map(function(item) {
            return(
              <ListItem
               url={item.url}
               imgUrl={item.imgUrl}
               alt={item.alt}
             />
            )
          })
         }


        </Section>


        <Section 
         title="Channels and Streamers"
         subtitle="List of channels and broadcasts I don't miss!">

          {channelsList.map(function(item){
            return(
              <ListItem
              url={item.url}
              imgUrl={item.imgUrl}
              alt={item.alt}
              />
            )
          })}

        </Section>

      </main>

    </div>
  );
}

export default App;
