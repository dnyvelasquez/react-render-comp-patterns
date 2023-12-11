import React, { useState } from 'react';
import './main.css';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ sincronize }) {

  const {show, toggleShow} = useStorageListener(sincronize);

  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Changed detected in another tab.</p>
          <p>Click to refresh the TODOs.</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };