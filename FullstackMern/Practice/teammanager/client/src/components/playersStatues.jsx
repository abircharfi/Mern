import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayersStatues = (props) => {
  const { players, setPlayers } = props;

  // Initialize playerStatuses with default values
  const [playerStatuses, setPlayerStatuses] = useState(
    players.reduce((statuses, player) => {
      statuses[player._id] = 'undecided';
      return statuses;
    }, {})
  );

  const handleStatusChange = (playerId, newStatus) => {
    const updatedPlayerStatuses = { ...playerStatuses, [playerId]: newStatus };
    setPlayerStatuses(updatedPlayerStatuses);

    const updatedPlayers = players.map((player) =>
      player._id === playerId ? { ...player, status: newStatus } : player
    );

    setPlayers(updatedPlayers);
  };

  return (
    <div style={{ margin: '30px auto', width: '50%' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: '#D3D3D3',
                color: 'black',
                border: '1px solid black',
                padding: '8px',
              }}
            >
              Team Name
            </th>
            <th
              style={{
                backgroundColor: '#D3D3D3',
                color: 'black',
                border: '1px solid black',
                padding: '8px',
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? 'white' : '#D3D3D3',
                border: '1px solid black',
              }}
            >
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Link>{player.Name}</Link>
              </td>
              <td>
                <button
                  style={{
                    backgroundColor:
                      playerStatuses[player._id] === 'playing'
                        ? 'green'
                        : 'white',
                  }}
                  onClick={() => handleStatusChange(player._id, 'playing')}
                >
                  Playing
                </button>
                <button
                  style={{
                    backgroundColor:
                      playerStatuses[player._id] === 'not playing'
                        ? 'red'
                        : 'white',
                  }}
                  onClick={() => handleStatusChange(player._id, 'not playing')}
                >
                  Not Playing
                </button>
                <button
                  style={{
                    backgroundColor:
                      playerStatuses[player._id] === 'undecided'
                        ? 'yellow'
                        : 'white',
                  }}
                  onClick={() => handleStatusChange(player._id, 'undecided')}
                >
                  Undecided
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersStatues;
