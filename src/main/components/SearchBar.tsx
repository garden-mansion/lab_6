import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import structures from '../../data';

function SearchBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const titles = structures.map(s => s.title);

  const handleSubmit = (value: string) => {
    const index = structures.findIndex(s => s.title === value);
    if (index !== -1) {
      navigate(`/building/${index}`);
    }
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={1} sx={{ my: 2 }}>
        <Autocomplete
          freeSolo
          options={titles}
          inputValue={inputValue}
          onInputChange={(_, newValue) => setInputValue(newValue)}
          onChange={(_, value) => {
            if (typeof value === 'string') {
              handleSubmit(value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(inputValue);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label="Поиск здания" fullWidth />
          )}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          color="info"
          onClick={() => handleSubmit(inputValue)}
        >
          Найти
        </Button>
      </Stack>
    </Container>
  );
}

export default SearchBar;
