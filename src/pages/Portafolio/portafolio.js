import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#BCE8EE',
  color: '#323637',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#61959B',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));


const Portafolio = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Item>
                <Typography variant="h3" gutterBottom>
                    Andres Mejia - software engineer <LaptopWindowsIcon/>
                </Typography> 
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Item2>
                            <Typography variant="h5" gutterBottom>
                                <p>I am a software engineer who handles the following technologies</p>
                                <JavascriptIcon />
                                <HtmlIcon/>
                                <CssIcon/>
                                <CodeIcon />
                            </Typography>   
                        </Item2>
                    </Grid>
                </Grid>
                <Grid container mt={2}>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Item2>
                            <Typography variant="h5" gutterBottom>
                                <p>In these networks you can find me</p>
                                <a href="https://www.facebook.com/" target={"_blank"}>
                                    <FacebookIcon />
                                </a>
                                <a href="https://www.linkedin.com/feed/" target={"_blank"}>
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.instagram.com/" target={"_blank"}>
                                    <InstagramIcon />
                                </a>
                            </Typography>   
                        </Item2>
                    </Grid>
                </Grid>
            </Item>
            </Grid>
            <Grid item xs={12}>
            <Item>
                <Typography variant="h5" gutterBottom>
                software engineer - A whole world in your hands for the creation of web pages <KeyboardIcon/>
                </Typography> 
               
            </Item>
            <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                <Item2>
                            
                <Link href="/PaginaPrincipal" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #003300',color: "#003300"}}>
                main page
                </Button>
                </Link>
                </Item2>
            </Grid>
            </Grid>
            </Grid>
      </Grid>
    )
}

export default Portafolio