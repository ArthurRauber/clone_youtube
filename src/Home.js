import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import MicIcon from '@material-ui/icons/Mic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';

import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 30,
  },
  pesquisa: {
    paddingLeft: theme.spacing(4),
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawer1: {
    width: 70,
    flexShrink: 0,
    alignContent: 'center',
  },
  drawerPaper: {
    width: 240,
    borderRight: "none"
  },
  drawerPaper1: {
    width: 70,
    borderRight: "none",
    alignContent: 'center',
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItem1: {
    height: 50,
    width:50,
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: '10px',
    paddingRight: '10px',
    alignText: 'center',
  },
  subheader: {
    textTransform: 'uppercase',
  },
  search: {
    marginLeft: '40%',
    borderRadius: 0,
    border: 'solid 0.5px #C0C0C0',
    boxShadow: 'none',
    height: 40,
    width: 540,
  },
  micdiv: {
    marginRight: '20%',
    marginLeft: '0%',
    paddingTop: '6px',
    cursor: 'pointer',
  },
  mic: {
    width: '30px',
    height: '30px',
    borderRadius: '25px',
    backgroundColor: '#EDEDED',
  }
}));

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];


function Home({ darkMode, setDarkMode }) {
  const [menu, setMenu] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            aria-label='menu'
            onClick={() => setMenu(!menu)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt='logo'
            className={classes.logo} />
          <div className={classes.grow}>
            <SearchBar placeholder="Pesquisar" className={classes.search} />
          </div>
          <div className={classes.micdiv}>
            <MicIcon className={classes.mic} />
          </div>
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='secondary'
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
          {menu === true ?
            <Drawer
              className={classes.drawer}
              variant='permanent'
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }}
                      primary={'Início'} />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Em alta'} />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Inscrições'} />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }}
                      primary={'Biblioteca'} />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<History />}</ListItemIcon>
                    <ListItemText classes={{
                      primary: classes.listItemText
                    }} primary={'Histórico'} />
                  </ListItem>
                </List>
                <Divider />
                <Box p={7}>
                  <Typography variant='body2'>
                    Faça login para curtir vídeos, comentar e se inscrever.
                  </Typography>
                  <Box mt={2}>
                    <Button
                      startIcon={<AccountCircle />}
                      variant='outlined'
                      color='secondary'
                    >
                      Fazer Login
                    </Button>
                  </Box>
                </Box>
                <Divider />
                <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  subheader={
                    <ListSubheader
                      component='div'
                      id='nested-list-subheader'
                      className={classes.subheader}

                    >
                      O Melhor do youtube
                    </ListSubheader>
                  }
                >
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Música'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Esportes'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Jogos'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Filmes'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Notícias'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Ao vivo'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Destaques'}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'Videos 360'}
                    />
                  </ListItem>
                </List>
              </div>
            </Drawer>
            :
            <Drawer
              className={classes.drawer1}
              variant='permanent'
              classes={{
                paper: classes.drawerPaper1,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button classes={{ root: classes.listItem1 }}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>{<HomeIcon />}</ListItemIcon>
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem1 }}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>{<Whatshot sx={{ fontSize: 30 }}/>}</ListItemIcon>
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem1 }}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>{<Subscriptions sx={{ fontSize: 30 }}/>}</ListItemIcon>
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem1 }}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}>{<VideoLibrary sx={{ fontSize: 30 }}/>}</ListItemIcon>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          }
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >Recomendados</Typography>

          <Grid container spacing={4}>
            {
              videos.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Box>
                    <img
                      style={{ width: '100%' }}
                      alt={item.title}
                      src={item.thumb}
                    />
                  </Box>
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >{item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >{item.channel}
                    </Typography>
                    <Typography
                      variant='body2' color='textSecondary'
                    >
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Grid>
              ))
            }
          </Grid>

        </Box>
      </Box>
    </div>
  );
}

export default Home;