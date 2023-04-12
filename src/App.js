import './App.css';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return (
    <div className='App'>

      <Header/>

      <main>
        <Section 
          title="My Games"
          subtitle="My favorite game to play"
        />

        <Section 
         title="Channels and Streamers"
         subtitle="List of channels and broadcasts I don't miss!"
        />
      </main>

    </div>
  );
}

export default App;
