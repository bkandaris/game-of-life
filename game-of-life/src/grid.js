import React from 'react';
import Box from './box';

const Grid = ({ grid, rows, cols, selectBox, color, gameRunning }) => {
  var rowsArr = [];
  var boxClass = '';
  for (var iR = 0; iR < rows; iR++) {
    for (var iC = 0; iC < cols; iC++) {
      let boxId = iR + '_' + iC;
      boxClass = grid[iR][iC] ? 'box On' : 'box Off';
      rowsArr.push(
        <Box
          gameRunning={gameRunning}
          color={color}
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={iR}
          col={iC}
          selectBox={selectBox}
        />
      );
    }
  }
  return <div className='grid'>{rowsArr}</div>;
};

export default Grid;
