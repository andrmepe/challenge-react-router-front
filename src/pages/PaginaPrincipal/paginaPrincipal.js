import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#BCE8EE',
    color: '#323637',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000033',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2} style={{ background: '#000033' }}>
        <Grid item xs={12}>
        
            <item>
                <Typography variant="h3" color={"white"} gutterBottom style={{ background: '#000033' }}>
                    Andres Mejia company - software engineer <LaptopWindowsIcon/>
                </Typography>
            </item>    
            <Link href="/InformacionGeneral">
                <Button variant="outlined">
                Informacion General
                </Button>
            </Link>
            <Link href="/Administracion">
                <Button variant="outlined">
                Administracion
                </Button>
            </Link>
            <Link href="/Portafolio">
                <Button variant="outlined">
                Portafolio
                </Button>
            </Link>
            <Link href="/Usuarios">
                <Button variant="outlined">
                Usuarios
                </Button>
            </Link>
        </Grid>
        <Grid container>
                    <Grid item xs={12}/>
                    
                        <Item2>
                            <Typography variant="h5" marginLeft={1} gutterBottom>
                                <p> Para mas informacion no dudes en contactarme </p>
                            </Typography>
                                <Grid item mt={{xs:4, md:4}}  mx={{xs:4}} ml={{xs:6, md:4}} md={8}>
                                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                                Contactame!
                                </Button>
                                </Grid>   
                        </Item2>
                    
                </Grid>
    </Grid>
    
    )
}

export default PaginaPrincipal



/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import InformacionGeneral from "../InformacionGeneral/informacionGeneral";
import Portafolio from "../Portafolio/portafolio";
import Usuarios from "../Usuarios/usuarios";
import Administracion from "../Administracion/administracion";


const PaginaPrincipal = () => {
  return (
        <BrowserRouter>
          <AppBar position="static" style={{ background: '#24292f' }}>
            <Toolbar>
              <Link to='/administracion'>
                <Button color="inherit">Administracion</Button>
              </Link>
              <Link to='/informacionGeneral'>
                <Button color="inherit">Informacion General</Button>
              </Link>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/administracion"   element={<Administracion />}> </Route> 
            <Route path="/informacionGeneral"  element={<InformacionGeneral />}></Route> 
            <Route path="/usuarios"  element={<Usuarios />}></Route>
            <Route path="/portafolio"  element={<Portafolio />}></Route>
            
          </Routes>
        </BrowserRouter>
  );
}

export default PaginaPrincipal;*/