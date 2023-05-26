import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export default function BasicMenu({todoId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //console.log(todoId);
  };

  const TodoDeleteHandler = () => {
    const confirm = window.confirm('Are you sure you want to deleteit?');

    if (confirm) {
        axios.delete('https://reqres.in/api/posts/1');
    }
  }
  
  const TodoHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{paddingRight: 0, float: "right"}}
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertRoundedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={TodoHandler}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => TodoHandler(todoId)}>Update</MenuItem>
        <MenuItem onClick={() => TodoDeleteHandler(todoId)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
