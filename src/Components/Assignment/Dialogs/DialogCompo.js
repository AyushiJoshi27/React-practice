import React, { useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { Button } from '@mui/base';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../Redux/Actions/TodosAction';
import { deleteAlbum } from '../Redux/Actions/AlbumActions';
import { deletePost } from '../Redux/Actions/PostActions';
import { deletedComment } from '../Redux/Actions/CommentActions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { updateUser } from '../Redux/Actions/UserActions.';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DialogCompo() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const theme = useTheme();
  const { userId } = useParams();
  var { category, type, id } = useParams();
  const [display, setDisplay] = useState("none")
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [inputDisabled, setInputDisabled] = useState(false);
  const [openD, setOpenD] = useState(true);
  const [editInfo, setEditInfo] = React.useState(true);
  const [scsMsg, setScsMsg] = useState('');
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const userData = useSelector(state => state.users.users);
  const [todoStatus, setTodoStatus] = useState(false);
  const mailRef = useRef('');
  const websiteRef = useRef('');
  const aptsRef = useRef('')
  const streetRef = useRef('');
  const cityRef = useRef('');
  const phoneRef = useRef();
  const companyRef = useRef('');
  const updateTitleRef = useRef('');
  var userTodo = useSelector(state => state.todos.todos);
  console.log(useSelector(state => state.todos.todos));
  (userTodo && id) ? console.log(userTodo.filter(obj => obj.id === id)) : console.log("todoo");
  if (userTodo) {
    console.log(id);
    const a = userTodo.filter(obj => obj.id === id)
    console.log(a);
  }

  const handleCloseD = () => {
    setOpenD(false);
    navigate(-1);
  };

  const DeleteHandler = () => {
    setInputDisabled(true);
    if (category === "Todo" && id) {
      dispatch(deleteTodo(id));
    } else if (category === "album" && id) {
      dispatch(deleteAlbum(id));
    } else if (category === "post" && id) {
      dispatch(deletePost(id));
    } else if (category === "comment" && id) {
      dispatch(deletedComment(id));
    }
    setTimeout(() => { setDisplay("block") }, 1000);
    setTimeout(() => {
      setDisplay("none");
      setScsMsg("Successfully deleted");
    }, 4000);
    setTimeout(() => {
      setScsMsg("");
      setOpenD(false);
      setInputDisabled(false);
      navigate(-1);
    }, 5000);
  };

  const editClose = () => {
    setEditInfo(false);
    navigate(-1);
  };

  //updated select value
  const CheckboxHandler = (event) => {
    setTodoStatus(event.target.value);
  }

  const infoUpdate = () => {
    var obj = {};
    if (userId) {
      if (type === "userInfo") {
        obj = {
          "address": {
            "city": cityRef.current.value,
            geo: {
              lat: userData.address.geo.lat,
              lng: userData.address.geo.lng,
            },
            "street": streetRef.current.value,
            "suite": aptsRef.current.value,
            zipcode: userData.address.zipcode
          },
          "email": mailRef.current.value,
          id: userId,
          name: userData.name,
          "phone": phoneRef.current.value,
          username: userData.username,
          "website": websiteRef.current.value,
          "company": {
            name: companyRef.current.value,
            catchPhrase: userData.company.catchPhrase,
            bs: userData.company.bs,
          },
        };
        obj ? console.log(obj) : console.log("obj");
        // setInputDisabled(true);
        // dispatch(updateUser(obj));
        // setTimeout(() => { setDisplay("block") }, 2000);
        // setTimeout(() => {
        //   setDisplay("none");
        //   setScsMsg("Successfully submitted");
        // }, 3000);
        // setTimeout(() => {
        //   setEditInfo(false);
        //   setScsMsg("");
        //   setInputDisabled(false);
        //   navigate(-1);
        // }, 4000);
        // setEditInfo(false);
        // navigate(-1);
      } else if (type === "todos") {
        console.log("update todo");
        const data = {
          userId: Number(userId),
          id: id,
          title: updateTitleRef.current.value,
          completed: Boolean(todoStatus)
        }
        data ? console.log(data) : console.log("data");
      }
    };
  }

  return (
    <>
      {category === "delete" ?
        <Dialog
          fullScreen={fullScreen}
          open={openD}
          onClose={handleCloseD}
          aria-labelledby="responsive-delete-dialog-title"
        >
          <DialogTitle id="responsive-delete-dialog-title" variant='h6'>
            Delete {category}
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ padding: "10px 24px", width: 500 }}
          >
            <DialogContentText>
              Are you sure you want to delete the {category} from the list?
            </DialogContentText>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleCloseD} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={DeleteHandler} variant="contained" disabled={inputDisabled}><b>Delete</b></Button>
          </DialogActions>
        </Dialog> : ""}
      {category === "edit" ?
        <Dialog
          fullScreen={fullScreen}
          open={editInfo}
          onClose={editClose}
          aria-labelledby="responsive-dialog-title"
          sx={{ height: 500 }}
        >
          <DialogTitle id="responsive-dialog-title" variant='h6'>
            Edit information
            <Typography sx={{ color: "rgb(55,125,51)", marginTop: "10px", textAlign: "center" }}>
              {scsMsg}
            </Typography>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} sx={{ display: { display } }} />
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ width: "500px" }}
          >
            {userData && type === "userInfo" ? 
            <List sx={{ fontSize: "14px" }}>
              <ListItem>
                <ListItemAvatar><Avatar><PhoneIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.phone}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={phoneRef}
                    sx={{ width: 370 }}
                    label="Phone number"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar><Avatar><EmailIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.email}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={mailRef}
                    sx={{ width: 370 }}
                    label="Email"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><BusinessCenterIcon /></Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.company.name}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={companyRef}
                    sx={{ width: 370 }}
                    label="Working place"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar><Avatar><ApartmentIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.suite}
                    InputProps={{
                      readOnly: false,
                    }}
                    multiline
                    inputRef={aptsRef}
                    sx={{ width: 370 }}
                    label="Apartment number"
                    disabled={inputDisabled}
                  />

                } />
              </ListItem>
              <ListItem sx={{ color: "#000000" }}>
                <ListItemAvatar><Avatar><AddRoadIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.street}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={streetRef}
                    sx={{ width: 370 }}
                    label="Street address"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar><Avatar><LocationOnIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.address.city}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={cityRef}
                    sx={{ width: 370 }}
                    label="City name"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar><Avatar><LinkIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    defaultValue={userData.website}
                    InputProps={{
                      readOnly: false,
                    }}
                    inputRef={websiteRef}
                    sx={{ width: 370 }}
                    label="Website"
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
            </List> : "" }
            {type === "todos" ?
              <List dense>
              <ListItem
                key="create"
                secondaryAction={
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="toDoStatus">Status</InputLabel>
                    <Select
                      labelId="toDoStatus"
                      id="demo-simple-select"
                      value={todoStatus}
                      name="todoStatus"
                      label="status"
                      onChange={CheckboxHandler}
                      sx={{ height: 50 }}
                      disabled={inputDisabled}
                    >
                      <MenuItem value={false}>Incompleted</MenuItem>
                      <Divider />
                      <MenuItem value={true}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                }
                disablePadding
              >
                <ListItemText primary={
                  <TextField
                    id="outlined-update-input"
                    // defaultValue={title}
                    InputProps={{
                      readOnly: false,
                    }}
                    label="Edit to-do"
                    inputRef={updateTitleRef}
                    sx={{ marginRight: 2, width: 330 }}
                    multiline
                    disabled={inputDisabled}
                  />
                } />
              </ListItem>
            </List>
            : "" }
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={editClose} variant="contained" color='error' disabled={inputDisabled}><b>Cancel</b></Button>
            <Button onClick={infoUpdate} variant="contained" disabled={inputDisabled}><b>Save</b></Button>
          </DialogActions>
        </Dialog>
        : ""}
    </>
  )
}
