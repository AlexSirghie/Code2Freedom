import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer(props) {

  const content = {
    // 'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'copy': '© 2023 Code2Freedom | All rights reserved.',
    'link1': 'First Link',
    'link2': 'Second Link',
    'link3': 'Third Link',
    'link4': 'Terms&Conditions',
    ...props.content
  };


  return (
    <footer>
      <Container style={{maxWidth:"lg", display:"flex", flexDirection:"columns", alignItems:"center", justifyContent:'center', padding:"5rem"}} className='footer-background' color={'gold'}>
        <Box  flexWrap="wrap"  className="" >
            <Link href="#" variant="body1" color="#FFCC01" className="">{content['link4']}</Link>
        </Box>
        <br/>
          <Typography color="#FFFF" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography> 
      </Container>
    </footer>
  );
}