// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email

    // destructuring variabel
    // const name = data.name
    const { name, phone, email, photo } = data

    return (     
        <List>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={ name } src={ photo } />
            </ListItemAvatar>
            <ListItemText
                primary={ name }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        </Typography>
                        { phone }<br/>
                        { email }
                    </React.Fragment>
                }
                />
            </ListItem>
        <Divider variant="inset" component="li" />  
        </List>
    );
};

export default Contact;
