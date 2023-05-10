import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Mexican from '../assets/Mexican.jpg'


  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000033',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2} width='100%' style={{ background: '#000033' }}>
        <Grid item xs={12}>
        
            <item>
                <Typography variant="h3" color={"white"} mt={2} marginLeft={4} gutterBottom style={{ background: '#000033' }}>
                    Mexican Food in your hands <RestaurantIcon fontSize="60px"/>
                </Typography>
            </item>    
            <Link href="/InformacionGeneral" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #b37700',color: "#b37700"}}>
                General information 
                </Button>
            </Link>
            <Link href="/Administracion" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #73264d',color: "#73264d"}}>
                Administration
                </Button>
            </Link>
            <Link href="/Portafolio" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #730099',color: "#730099"}}>
                Portafolio
                </Button>
            </Link>
            <Link href="/Usuarios" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #ff0066',color: "#ff0066"}}>
                Users
                </Button>
            </Link>
           </Grid>
           <img fontSize={'50px'} src={Mexican} alt='Mexican' style={{ width:'400px', background:'#ffffff',
        heigh:'50px', position:'back', marginLeft:'55px',borderRadius:'20px',marginTop:'60px', marginBottom:'50px'}}></img>
        <Grid mt={6} container>
                    <Grid item xs={12}/>
                    
                        <Item2>
                            <Typography variant="h5" marginLeft={5} gutterBottom>
                                <p> For more information do not hesitate to contact me </p>
                            </Typography>
                                <Grid item mt={{xs:4, md:4}}  mx={{xs:4}} ml={{xs:6, md:5}} md={8}>
                                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                                Contact me!
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