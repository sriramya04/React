import React, {Component, propTypes} from 'react';


function Stats(props) {
  const playerCount = props.players.length;
  console.log(props.players);
  const totalPoints = props.players.reduce(function(total, player) {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{playerCount}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};


export default Stats;
