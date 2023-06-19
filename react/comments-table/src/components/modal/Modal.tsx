import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import { FC } from 'react';
import { IUser, IPost, IComm } from '../interfaces.module.tsx';

const stylesBox = {
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

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  onUpdate: (updatedComms: IComm[]) => void;
  pstObj: IPost;
  comms: IComm[];
  users: IUser[];
}

export const InfoModal: FC<IModalProps> = ({ open, handleClose, onUpdate, pstObj, comms, users }) => {
  const [editStates, setEditStates] = useState<{ [key: number]: boolean }>({});
  const parRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({});

  const handleEdit = (commId: number) => {
    const updatedEditStates = { ...editStates };
    updatedEditStates[commId] = !editStates[commId];
    setEditStates(updatedEditStates);

    const updatedComms = comms.map((comm) => {

      if (comm.id === commId) {
        return { ...comm, body: parRefs.current[commId]?.textContent || ''};
      }

      return comm;
    });

    onUpdate(updatedComms);
    console.log('Editing complete');
  };

  const handleRef = (commId: number, ref: HTMLParagraphElement | null) => {
    parRefs.current[commId] = ref;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={stylesBox}>
        <Typography variant="h6" component="div" id="modal-modal-description">
          <h2>User: {users?.find((user) => user.id === pstObj.userId)?.username}</h2>
          <h3>Topic: {pstObj.title}</h3>
          <p>{pstObj.body}</p>
          <h2>Comments: </h2>
          <ol>
            {comms
              ?.filter((comm) => comm.postId === pstObj.id)
              .map((comm) => {
                const isEditing = editStates[comm.id] || false;
                return (
                  <li key={comm.id}>
                    <h2>{comm.name}</h2>
                    <p
                      contentEditable={isEditing}
                      onBlur={() => handleEdit(comm.id)}
                      ref={(ref) => handleRef(comm.id, ref)}
                    >
                      {comm.body}
                    </p>
                    <Button onClick={() => handleEdit(comm.id)}>
                      {isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </li>
                );
              })}
          </ol>
        </Typography>
      </Box>
    </Modal>
  );
};
