import React from 'react';
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
      <Box className='footer'>
        <Box  className="" >
            <Link href="#" variant="body1" className="">{content['link4']}</Link>
        </Box>
        <br/>
          <Typography  component="p" variant="caption">{content['copy']}</Typography> 
      </Box>
    </footer>
  );
}