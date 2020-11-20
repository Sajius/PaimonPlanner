import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const CharacterInventory = ({ cookies }) => {
  const [characters, setCharacters] = useState({
    klee: cookies.get('klee') === 'true',
    noelle: cookies.get('noelle') === 'true'
  });

  const handleChange = (event) => {
    // FIXME: Allow for same line path =(
    cookies.set(event.target.name, event.target.checked, {
      path: '/'
    });
    setCharacters({
      ...characters,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <FormControlLabel
        control={(
          <Checkbox
            checked={characters.klee}
            onChange={handleChange}
            name="klee"
            color="primary"
          />
        )}
        label="Klee"
      />
      <FormControlLabel
        control={(
          <Checkbox
            checked={characters.noelle}
            onChange={handleChange}
            name="noelle"
            color="primary"
          />
        )}
        label="Noelle"
      />
    </>
  );
};

export default CharacterInventory;
