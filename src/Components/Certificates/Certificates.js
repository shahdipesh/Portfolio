import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import "./Certificates.css"

export default function TitlebarImageList() {
  return (
    <div className="CertificateContainer">
    <ImageList sx={{ width: '80vw', height: '100vw' }}>
      <ImageListItem key="Subheader" cols={2}>
      <div className="Certificate-Title">
                <Typography variant="h3" sx={{color:'orange',marginTop:'20px'}}>Certificates</Typography>
         </div>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-RMYPDB2U.jpg?v=1536386495000',
        title: 'JavaScript',
        author: 'Udemy',
      },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2UYLM2MQ.jpg',
    title: 'HTML & CSS', 
    author: 'Udemy',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.ibb.co/wd6pCQ7/Screenshot-2023-01-21-at-6-21-12-PM.png',
    title: 'Agile',
    author: 'Coursera',
    cols: 2,
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9AR8BF23.jpg?v=1538405980000',
    title: 'Linux for Ethical Hackers',
    author: 'Udemy',
  },

  {
    img: 'https://i.ibb.co/Z2h2Dx8/Ethical-Hacking.jpg',
    title: 'Ethical Hacking',
    author: 'Udemy',
    cols: 2,
  },
 
  {
    img: 'https://i.ibb.co/Z2XhnwQ/rsql.jpg',
    title: 'SQL Database',
    author: 'Cognitive Class',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];