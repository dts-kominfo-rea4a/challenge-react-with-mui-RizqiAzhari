// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    // state terhadap form
    const [newContact, setNewContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "photo": ""
    });

    //membuat banyak input on change handler 
    const inputOnChangeHandler = (event) => {
        const value = event.target.value
        setNewContact({
            ...newContact,
            [event.target.name]: value
        });
    };

    //membuat form on submit handler
    const formOnSubmitHandler = (event) => {
        event.preventDefault()

        //panggil props untuk submit data
        props.fnAddLists(newContact)

        // kosongkan lagi input
        setNewContact({
            "name": "",
            "phone": "",
            "email": "",
            "photo": ""
        })
    };

    return (
        <form onSubmit={formOnSubmitHandler}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <TextField 
                        id="standard-basic" 
                        label="Name *" 
                        name="name"
                        variant="standard"
                        value={newContact.name} 
                        onChange={inputOnChangeHandler}
                     /><br/>
                    <TextField 
                        id="standard-basic" 
                        label="Phone *" 
                        name="phone"
                        variant="standard"
                        value={newContact.phone} 
                        onChange={inputOnChangeHandler}
                     /><br/>
                    <TextField 
                        id="standard-basic" 
                        label="Email *"
                        name="email"
                        variant="standard"
                        value={newContact.email} 
                        onChange={inputOnChangeHandler}
                     /><br/>
                    <TextField 
                        id="standard-basic" 
                        label="Photo URL *"
                        name="photo"
                        variant="standard"
                        value={newContact.photo} 
                        onChange={inputOnChangeHandler}
                     />
                </CardContent>
                <CardActions>
                    <Button type="submit" size="small">Add New</Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default ContactForm;