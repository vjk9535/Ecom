import * as React from 'react';
import { Box,AppBar, Typography, IconButton, Toolbar, InputBase, Menu, MenuItem, Divider, Link, Button, Card, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
function Initial() {
  const [anchorEl,setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [showCard, setShowCard] = React.useState(false);
  function handleSignInClick() {
    setShowCard(true);
  }

  function handleClose() {
    setShowCard(false);
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const handleProfileMenuOpen=(event)=>{
      setAnchorEl(event.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Link href='#' underline='none' style={{ display: 'flex', justifyContent: 'center' }} onClick={() => {handleSignInClick(); handleMenuClose();}}><LoginIcon />SignIn</Link>
  <Typography style={{ flexGrow: 1, paddingLeft: '10px' }}>New Customer ?<Button>Sign Up</Button></Typography>
  <MenuItemWithIcon onClick={handleMenuClose} icon={<AccountCircle />} text="Profile" />
  <MenuItemWithIcon onClick={handleMenuClose} icon={<ShoppingBasketIcon />} text="Orders" />
  <MenuItemWithIcon onClick={handleMenuClose} icon={<FavoriteIcon />} text="Wishlist" />
  <MenuItemWithIcon onClick={handleMenuClose} icon={<LogoutIcon />} text="Log Out" />
    </Menu>
  );
  function MenuItemWithIcon({ onClick, icon, text }) {
    return (
      <>
        <Divider />
        <MenuItem onClick={onClick}>
         {icon}
         <span style={{marginLeft: '8px'}}>{text}</span>
        </MenuItem>
      </>
    );
  }
  function SignInCard() {
    return (
      <Card sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }} onClick={handleClose}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Paper elevation={12} >
        <Box sx={{display: 'flex','& > :not(style)': {m: 1,},width:'900px',height:'400px'}}>
        <div style={{width:'40%',backgroundColor:'ButtonFace'}}>
          <Typography variant="h6" gutterBottom>
          </Typography>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined"  style={{margin:'2%'}}/>
        <Button style={{margin:'2%'}}>Otp</Button>
        </div>
        <Divider orientation='vertical' flexItem>Or</Divider>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <TextField id="outlined-basic" label="Email ID" variant="outlined"  style={{margin:'2%'}}/>
        <TextField id="outlined-basic" label="Password" variant="outlined"  style={{margin:'2%'}}/>
        <Button style={{margin:'2%'}}>Sign In</Button>
        </div>
        </Box>
        </Paper>
        </div>
      </Card>
    );
  }
  return (
    <Box sx={{ flexGrow:1}}>
      <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6' component="div" sx={{flexGrow:1}}> 
        AbShopKaro
        </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{flexGrow:1}}/>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
          size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
            <AccountCircle/>
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {showCard && <SignInCard />}
    </Box>
  );
}

export default Initial;
