import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#BCE8EE',
    color: '#323637',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const itemData = [
    
        {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
   
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
       
  ];


const InformacionGeneral = () => {
    return (
        <Grid container spacing={2} style={{ background: '#47476b' }}>
        <Grid item xs={12}>
        
            <item>
                <Typography variant="h3" color={"white"} mt={2} marginLeft={4} gutterBottom style={{ background: '#47476b' }}>
                    Andres Mejia company - software engineer 
                </Typography>
            </item>   
            <ImageList sx={{ width: 500, height: 150 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> 
            <Typography variant="h5" color={"white"} mt={2} marginLeft={4} gutterBottom>
            <p> Manejamos todo tipo de negocios para la creacion de sus paginas webs </p>
            </Typography>
            <Typography variant="h6" color={"white"} mt={2} marginLeft={4} gutterBottom>
            <p> Volver a la pagina principal </p>
            </Typography>
           
            <Link href="/PaginaPrincipal" marginLeft={4}>
                <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                Pagina Principal
                </Button>
           </Link> 
        </Grid>
        </Grid>
    )
}

export default InformacionGeneral