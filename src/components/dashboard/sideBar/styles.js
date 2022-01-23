const drawerWidth = 240;
const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  drawerPaper: {
    maxWidth: drawerWidth,
    width: drawerWidth,
    position: 'relative',
    zIndex: 99,
  },
  customLink: {
    backgroundColor: theme.color.primary,
    color: 'white',
  },
});
export default styles;
