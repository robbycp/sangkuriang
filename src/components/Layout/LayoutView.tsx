import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import Logo from 'assets/img/logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    accountEmail: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    logo: {

      height: 40,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
    },
  }),
);

interface Props {
  accountEmail: string;
  children: any;
  dispatchSignOut: () => any;
  isAuthenticated: boolean;
}

const menuList = [
  {
    title: 'Dashboard',
    routes: '/dashboard',
    Icon: DashboardIcon,
  },
  {
    title: 'Scan',
    routes: '/scan',
    Icon: SearchIcon,
  },
]

export default function LayoutView(props: Props) {
  const { accountEmail, children, dispatchSignOut, isAuthenticated } = props
  const history = useHistory()
  console.log('history', history)
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: openDrawer,
              })}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div>
            <img src={Logo} className={classes.logo} alt="logo" />
          </div>
          <Typography variant="h6" noWrap className={classes.title}>
            Sangkuriang
          </Typography>
          {isAuthenticated && (
            <>
              <Typography variant="h6" noWrap className={classes.accountEmail}>
                {accountEmail}
              </Typography>
              <AccountCircleIcon />
            </>
          )}
        </Toolbar>
      </AppBar>
      {isAuthenticated && (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openDrawer,
              [classes.drawerClose]: !openDrawer,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuList.map((menu) => (
              <ListItem button key={menu.title} onClick={() => history.push(menu.routes)}>
                <ListItemIcon><menu.Icon /></ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => history.push('/profile')}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => history.push('/settings')}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={() => dispatchSignOut()}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </Drawer>
      )}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
