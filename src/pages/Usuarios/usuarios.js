import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#BCE8EE',
    color: '#323637',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#001a00',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

const Usuarios = () => {
    return (
        <Grid container spacing={2} style={{ background: '#001a00' }}>
        <Grid item xs={12}>
        
            <item>
                <Typography variant="h5" color={"white"} mt={2} marginLeft={8} marginRight={4} gutterBottom style={{ background: '#001a00' }}>
                Empowering teams with the most complete developer technical skills screening platform to confidently hire the best developers quickly.
                Enhance your hiring with plagiarism prevention & fraud detection
                Build a diverse team by mitigating bias from your tech recruitment process
                </Typography>
            </item>    
                <Grid item pt={2} pb={4}>
                <Stack pl={8} spacing={2} direction="row">
                <Button variant="outlined">create user</Button>
                <Button  variant="contained" onClick={() =>{}}>Log In</Button>
                </Stack>
                </Grid>   
        <Grid mt={6} container>
                    <Grid item xs={12}/>
                    
                        <Item2>
                            <Typography variant="h5" marginLeft={7} gutterBottom>
                                <p> Return to main page </p>
                            </Typography>
                            <Link href="/PaginaPrincipal" marginLeft={7}>
                            <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                            Main Page
                            </Button>
                            </Link>
                        </Item2>
                    
                </Grid>
                </Grid>
    </Grid>
    )
}

export default Usuarios