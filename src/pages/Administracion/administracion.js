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

const Administracion = () => {
    return (
        <Grid container spacing={2} style={{ background: '#000033' }}>
        <Grid item xs={12}>
        
            <item>
                <Typography variant="h5" color={"white"} mt={2} marginLeft={4} marginRight={4} gutterBottom style={{ background: '#000033' }}>
                Empowering teams with the most complete developer technical skills screening platform to 
                confidently hire the best developers quickly.
                Enhance your hiring with plagiarism prevention & fraud detection
                Build a diverse team by mitigating bias from your tech recruitment process <LaptopWindowsIcon/>
                </Typography>
            </item>    
            <Link href="/Administracion" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #b37700',color: "#b37700"}}>
                MISION
                </Button>
            </Link>
            <Link href="/Administracion" marginLeft={4} >
                <Button variant="outlined" style={{     border: '1px solid #73264d',color: "#73264d"}}>
                VIVION
                </Button>
            </Link>
            <Link href="/Administracion" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #730099',color: "#730099"}}>
                ACERCA DE NOSOTROS
                </Button>
            </Link>
            <Link href="/Administracion" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #ff0066',color: "#ff0066"}}>
                NUESTROS CLIENTES
                </Button>
            </Link>
        </Grid>
        <Grid mt={6} container>
                    <Grid item xs={12}/>
                    
                        <Item2>
                            <Typography variant="h5" marginLeft={5} gutterBottom>
                                <p> Return to main page </p>
                            </Typography>
                            <Link href="/PaginaPrincipal" marginLeft={4}>
                            <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                            Main Page
                            </Button>
                            </Link>   
                        </Item2>
                    
                </Grid>
    </Grid>
    )
}

export default Administracion