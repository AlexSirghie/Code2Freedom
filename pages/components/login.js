import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
// import AssignmentIndIcon from '@mui/material/AssignmentInd';

export default function Form(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const content = {
    'header': 'Login Into your account ',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis.',
    'primary-action': 'Sign Up Now',
    'secondary-action': 'Forgot your password?',
    ...props.content
  };

  return (
    // <div>
    //   <Button onClick={handleOpen}>Open modal</Button>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         Text in a modal
    //       </Typography>
    //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //       </Typography>
    //     </Box>
    //   </Modal>
    // </div>

    // LOGIN
    <section className="">
      <Container maxWidth="xs">
        <Box py={16}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" mt={3}>
                <Box mx="auto">
                  {/* <Avatar variant="rounded" className="">
                    <AssignmentIndIcon />
                  </Avatar> */}
                </Box>
              </Box>
              <Box mt={2} px={4}>
                <Typography variant="h5" component="h3" align="center" gutterBottom={true}>{content['header']}</Typography>
                <Typography variant="body2" component="p" color="textSecondary" align="center">{content['description']}</Typography>
                <Box my={3}  >
                  <form noValidate>
                    <Grid container spacing={4} >
                      <Grid item xs={15} >
                        <TextField variant="outlined" required fullWidth size="small" name="email" label="E-mail address" />
                      </Grid>
                      <Grid item xs={12} >
                        <TextField variant="outlined" required fullWidth size="small" type="password" name="password" label="Password" />
                      </Grid>
                      <Grid item xs={12}>
                        <Box alignItems="center" justifyContent="space-between" className="">
                          <Link href="#" color="textSecondary" mr={2} ml={1}>{content['secondary-action']}</Link>
                          <Button type="submit" variant="contained" color="primary" size="large" className="">
                            {content['primary-action']}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}