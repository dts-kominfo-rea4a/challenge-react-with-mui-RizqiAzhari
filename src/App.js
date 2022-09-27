import './App.css';
import React, { useState } from "react";
import Header from "./components/Header.js";
import Contact from "./components/Contact.js";
import ContactForm from "./components/ContactForm.js";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  // buat state untuk menambah list baru
  const [lists, setLists] = useState( contactsJSON )

  const addLists = (newList) => {

    // buat format array objek baru
    const objLists = {
      name: newList.name,
      phone: newList.phone,
      email: newList.email,
      photo: newList.photo
    }

    //gabungkan array objek lama dengan yang baru
    const newLists = [...lists, objLists]
    setLists(newLists)// hasil array list yang baru
  }

  return (
    <div className="App">
      <Header />
      <br/><br/>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <ContactForm fnAddLists={addLists} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {lists.map((list) => {
              return <Contact data={ list }/>
            })}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
