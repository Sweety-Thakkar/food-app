import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { SideBarImages } from '../../utils/constant';
import { ICONS, LOGOS } from '../../assets';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFoodLabel } from '../../redux/reducers/foodSlice';

const drawerWidth = 200;

const pages = ['Home', 'Food', 'Cart', 'Contact']

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        background: '#fde4e4 !important',


        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const CustomBox = styled(Box)({
    display: 'flex',
})

const Header = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& Typography": {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    "& img": {
        height: "50px",
        width: "50px"
    },
    "& h5": {
        marginLeft: "8px",
        color: "#212245",
        fontWeight: "bold",
        fontSize: "20px"
    }
})

const ListItemLabel = styled('div')({
    color: "#212245",
    fontWeight: "bold",
    fontSize: "20px"
})

export default function SideBar() {

    const dispatch = useDispatch()
    const Navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:786px)');
    const [open, setOpen] = React.useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        setOpen(matches);
    }, [matches])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <CustomBox>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ background: "#fde4e4" }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            color: 'red',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <ICONS.MenuIcon />
                    </IconButton>
                    <Header>
                        <Typography variant="h6" noWrap component="div" sx={{ display: "flex", alignItems: "center", flexDirection: "row" }} >
                            <img src={LOGOS.logo} alt='LOGO' />
                            <h5>Tasty Treat</h5>
                        </Typography>
                        <Box sx={{ fontWeight: "bold" }}>
                            <List sx={{ display: "flex", color: "red" }}>
                                {pages.map((item) => (
                                    <ListItem key={item} disablePadding>
                                        <ListItemButton onClick={() => Navigate(`/${item}`)} sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={item} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ backgroundColor: "#e74343" }}>
                                    {localStorage.getItem("data.email").split('')[0].toUpperCase()}
                                </Avatar>
                            </IconButton>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <Typography onClick={() => Navigate('/')} textAlign="center">LogOut</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Header>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader >
                    <IconButton onClick={handleDrawerClose} sx={{ color: "red" }}>
                        {theme.direction === 'rtl' ? <ICONS.ChevronRightIcon /> : <ICONS.ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List >
                    {SideBarImages.map((text, index) => (
                        <ListItem key={text.id} disablePadding sx={{ display: 'block', paddingTop: "45px" }}>
                            <ListItemButton onClick={() => dispatch(setFoodLabel(text.label))}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img height={34} src={text.img} alt='' />

                                </ListItemIcon>
                                <ListItemText primary={<ListItemLabel>{text.label}</ListItemLabel>} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box sx={{ width: "100%" }} >
                <DrawerHeader />
                <Outlet />
            </Box>
        </CustomBox>
    );
}