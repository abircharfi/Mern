import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import { useState } from 'react';

import DeletePlayerModal from './DeletePlayerModal';

const PlayerList = (props) => {
  const {players , setPlayers , refresh} = props;
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const RemovePlayer = (deleteId) => {
   // i want to delete player 
    setSelectedPlayer(deleteId);
    setIsDeleteModalOpen(true);
  }
  
  const handleDeleteConfirm = () => {
    // reset the selected player 
    setIsDeleteModalOpen(false);
  
    // Perform the delete only if the user confirmed
    if (selectedPlayer) {
      axios.delete('http://localhost:1337/api/players/list/' + selectedPlayer)
        .then((res) => {
          refresh();
          console.log(res.data.DeleteOne);
          const filteredPlayers = players.filter((eachPlayer) => eachPlayer._id !== selectedPlayer);
          setPlayers(filteredPlayers);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    setSelectedPlayer(null);
  };
  
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedPlayer(null);
  };
  
  return (
    <div style={{ margin: '30px auto', width: '50%' }} >
      
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>
  <thead>
    <tr>
      <th style={{ backgroundColor: '#D3D3D3', color: 'black', border: '1px solid black', padding: '8px' }}>Team Name</th>
      <th style={{ backgroundColor: '#D3D3D3', color: 'black', border: '1px solid black', padding: '8px' }}>Preffered Position</th>
      <th style={{ backgroundColor: '#D3D3D3', color: 'black', border: '1px solid black', padding: '8px' }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {players.map((player, index) => (
      <React.Fragment key={index}>
        <tr style={{ backgroundColor: index % 2 === 0 ? 'white' : '#D3D3D3', border: '1px solid black' }}>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <Link>{player.Name}</Link>
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            {player.PrePosition}
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <Button onClick={() => { RemovePlayer(player._id) }} type="delete" />
            
          </td>
        </tr>
      </React.Fragment>
    ))}
    <DeletePlayerModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
  </tbody>
</table>

    </div>
  )
}

export default PlayerList