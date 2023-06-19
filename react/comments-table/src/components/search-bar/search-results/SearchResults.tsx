import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { IComm } from '../../interfaces.module';


const style = {
  backgroundColor: 'white',
  overflow: 'auto',
  margin: '0 auto',
  marginTop: '5%',
  maxWidth: '50%',
  height: '80%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
};

interface ISearchResultsProps {
  open: boolean;
  handleClose: () => void;
  results: IComm[];
}

export const SearchResults: FC<ISearchResultsProps> = ({open, handleClose, results}) => {

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1>Commets</h1>
            {results.length > 0 ? <ul>
              {results.map(e => {
                return <li>{e.body}</li>
              })}
            </ul> : 'No results'}
        </Box>
      </Modal>
  );
}