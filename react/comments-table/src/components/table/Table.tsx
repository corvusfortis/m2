import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { InfoModal } from '../modal/Modal';
import styles from './Table.module.css';
import { Box, Button } from '@mui/material';
import { SearchBar } from '../search-bar/SearchBar.tsx';
import { FilterForm} from '../filter-form/FilterForm.tsx';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MouseEvent, ChangeEvent } from 'react';
import { IUser, IPost, IComm } from '../interfaces.module.tsx';


export default function BasicTable() {
  const [users, setUser] = useState<IUser[]>([]);
  const [posts, setPost] = useState<IPost[]>([]);
  const [comms, setComm] = useState<IComm[]>([]);
  const [originalUsers, setOriginalUsers] = useState<IUser[]>([]); 
   
  const [store, setStore] = useState(false);

  const handleStore = () => {
    setStore(!store);
  }

  useEffect(() => {
    // Load data from local storage if available
    const savedUsers = localStorage.getItem('users');
    const savedPosts = localStorage.getItem('posts');
    const savedComms = localStorage.getItem('comms');

    
    if (savedUsers && savedPosts && savedComms) {
      setUser(JSON.parse(savedUsers));
      setPost(JSON.parse(savedPosts));
      setComm(JSON.parse(savedComms));
    } else {
      Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')
      ])
        .then(([resUser, resPost, resComm]) =>
          Promise.all([resUser.json(), resPost.json(), resComm.json()])
        )
        .then(([dataUser, dataPost, dataComm]) => {
          setOriginalUsers(dataUser);
          setUser(dataUser);
          setPost(dataPost);
          setComm(dataComm);
        });
    }
  }, []);

  useEffect(() => {

    if (users && store) localStorage.setItem('users', JSON.stringify(users));
    if (posts && store) localStorage.setItem('posts', JSON.stringify(posts));
    if (comms && store) localStorage.setItem('comms', JSON.stringify(comms));
  }, [users, posts, comms, store]);


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [postObj, setPostObj] = useState<IPost | {}>({});
  const [open, setOpen] = useState(false);

  const handleOpen = (obj: IPost | {}) => {
    setPostObj(obj);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const filterByUser = (filteredUsers: IUser[]) => {
    setUser(filteredUsers);
  }

  const handleReset = () => {
    setUser(originalUsers);
  }


  const updateComms = (updComms: IComm[]) => {
    setComm(updComms);
  }


  return (
    <>   
    <Box sx={{display: 'flex',
          justifyContent: 'space-between',
          }}>
        <SearchBar comms={comms}/>
        <Box>
          <FilterForm onFilter={filterByUser}  users={users} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
        
    </Box>
    <InfoModal open={open} handleClose={handleClose} onUpdate={updateComms} pstObj={postObj} comms={comms} users={users} />
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '1px solid black' }} colSpan={1}>
              Users
            </TableCell>
            <TableCell sx={{ border: '1px solid black' }} colSpan={10}>
              Comments
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) //TODO: Bad practice, needs refactoring
            : users
          )?.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell sx={{ border: '1px solid black' }}>{user.username}</TableCell>
                {posts
                  ?.filter((post) => post.userId === user.id)
                  .map((post) => (
                    <TableCell  onClick={() => handleOpen(post)} className={styles.table__cell} key={post.id}>
                      {post.title && post.title.length <= 20 ? post.title : post.title?.slice(0, 20) + '...'}
                    </TableCell>
                  ))}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{overflow: 'visible'}}
              component='div'
              rowsPerPageOptions={[5, 10]}
              colSpan={2}
              count={users?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    <FormGroup sx={{marginLeft: "20px"}}>
      <FormControlLabel control={<Switch onChange={handleStore} />} label="Save to Local Storage" />
    </FormGroup>
    </>
  );
}