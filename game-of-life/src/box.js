import React from 'react';

const Box = ({ boxClass, row, col, selectBox, color, gameRunning }) => {
  const selectFunction = () => {
    selectBox(row, col);
  };
  return (
    <div>
      {boxClass === 'box On' ? (
        <div
          className={`${boxClass} ${color}`}
          onClick={gameRunning ? null : selectFunction}
        />
      ) : (
        <div
          className={`${boxClass}`}
          onClick={gameRunning ? null : selectFunction}
        />
      )}
    </div>
  );
};

export default Box;
