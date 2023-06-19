import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SearchResults } from './search-results/SearchResults';
import { useState, FC, ChangeEvent } from 'react';
import { IComm } from '../interfaces.module.tsx';

interface ISearchBarProps {
  comms: IComm[];
}


export const SearchBar: FC<ISearchBarProps> = ({comms}) => {

  const [query, setQuery] = useState<string>('');
  const [openR, setOpenR] = useState<boolean>(false);
  const [results, setResults] = useState<IComm[]>([]);


  const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSearch = (regex: string) => {

    if (query !== '') {
      setResults([...comms?.filter(comm => comm.body.includes(regex))]);
      setQuery('');
      setOpenR(true);
    }
  }

  const handleCloseSearch = () => {
    setOpenR(false);
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            onChange={handleQuery}
            value={query}
            onBlur={() => handleSearch(query)}
          />
      </Box>
      <SearchResults open = {openR} handleClose = {handleCloseSearch} results={results}/>
    </>
  );
}