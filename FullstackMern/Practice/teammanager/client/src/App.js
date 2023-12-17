import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import PlayersStatues from './components/playersStatues';

function GameStatus() {
  return <div>Game Status</div>;
}

function GameStatusDetail({ gameId }) {
  return <div>Game Status for Player {gameId}</div>;
}

function App() {
  const [players, setPlayers] = useState([]);

  function refresh() {
    axios
      .get('http://localhost:1337/api/players/list')
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="App">
      <div>
        <Link to="/players">Manage Players</Link> |{' '}
        <Link to="/statues/game">Manage Players Status</Link>
      </div>

      <Routes>
      <Route
  path="/players"
  element={
    <div>
      <Link to="list">List Players</Link> |{' '}
      <Link to="addplayer">Add Player</Link>
    </div>
  }
>
</Route>
<Route
  path="/players/list"
  element={
    <>
      <div>
        <Link to="/players/list">List Players</Link> |{' '}
        <Link to="/players/addplayer">Add Player</Link>
      </div>
      <PlayerList players={players} setPlayers={setPlayers} refresh={refresh} />
    </>
  }
/>

  <Route path="/players/addplayer" element={
    <>
      <div>
        <Link to="/players/list">List Players</Link> |{' '}
        <Link to="/players/addplayer">Add Player</Link>
      </div>
      <AddPlayer refresh={refresh} />
      </>
  }
      
      />



        <Route
          path="/statues/game/*"
          element={
            <div>
              <Link to="1">Game 1</Link> | <Link to="2">Game 2</Link> | <Link to="3">Game 3</Link>
              <PlayersStatues players={players} setPlayers={setPlayers} />
            </div>
          }
        >
          <Route index element={<PlayersStatues/>} />
          <Route path=":gameId" element={<PlayersStatues />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
