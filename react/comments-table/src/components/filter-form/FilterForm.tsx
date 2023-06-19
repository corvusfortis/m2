import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, ChangeEvent, FC } from 'react';
import { IUser } from '../interfaces.module';
//TODO: add additional filter criteria

interface IFilterFormProps {
  onFilter: (filteredUsers: IUser[]) => void;
  users: IUser[];
}

export const FilterForm: FC<IFilterFormProps> = ({onFilter, users}) => {

  const [input, setInput] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleFilter = (input: string) => {
    const filteredUsers = input !== ''
      ? users?.filter(user => user.username === input)
      : users;
      console.log(filteredUsers);
    onFilter(filteredUsers || []);
  };

  return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
            id="outlined-basic"
            label="Filter By User"
            variant="outlined"
            onChange={handleInput}
            value={input}
            onBlur={() => handleFilter(input)}
        />
      </Box>
  );
}