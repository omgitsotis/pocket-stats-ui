import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    marginRight: theme.spacing(2),
    color: '#0C2231'
  },
  desktopMenu: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    color: '#0C2231',
  },

}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Hidden xsDown implementation="css">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>Pocket Stats</Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button className={classes.desktopMenu} color="inherit">Home</Button>
              </Link>
              <Link to="/advanced" style={{ textDecoration: 'none' }}>
                <Button className={classes.desktopMenu} color="inherit">Advance</Button>
              </Link>
              <Link to="/graphs" style={{ textDecoration: 'none' }}>
                <Button className={classes.desktopMenu} color="inherit">Graphs</Button>
              </Link>
              <Link to="/tags" style={{ textDecoration: 'none' }}>
                <Button className={classes.desktopMenu} color="inherit">Tags</Button>
              </Link>
          </Toolbar>
        </Hidden>
        <Hidden smUp implementation="css">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>Pocket Stats</Typography>
          </Toolbar>
        </Hidden>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <Divider />
              <List>
                <ListItem button key="menu">
                  <ListItemText primary="Menu" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  isAuthed: PropTypes.bool.IsRequired
};

export default ResponsiveDrawer;
