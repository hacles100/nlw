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
         subtitle="List of channels and broadcasts I don't miss!"
        />
      </main>

    </div>
  );
}

export default App;
