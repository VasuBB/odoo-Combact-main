import React, { useState } from 'react';
import { Card, CardContent, CardHeader, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: '0 auto',
  marginTop: theme.spacing(5),
  padding: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SimpleRegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [classy, setClass] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { name, email, password,class:classy};
      const response = await fetch('http://localhost:7000/api/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (response.ok) {
        toast.success('Teacher added successfully..', {
          
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.msg, {
          
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error occurred while registering teacher', {

      });
    }
  };

  return (
    <StyledCard>
      <CardHeader title="Teacher Registration" />
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <StyledTextField
            onChange={(e) => setName(e.target.value)} // Corrected onChange handler
            label="Name"
            variant="outlined"
            required
            fullWidth
          />
          <StyledTextField
            onChange={(e) => setEmail(e.target.value)} // Corrected onChange handler
            label="Email"
            variant="outlined"
            required
            fullWidth
          />
          <StyledTextField
            onChange={(e) => setClass(e.target.value)} // Corrected onChange handler
            label="Class"
            variant="outlined"
            required
            fullWidth
          />
          <StyledTextField
            onChange={(e) => setPassword(e.target.value)} // Corrected onChange handler
            label="Password"
            variant="outlined"
            type="password"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default SimpleRegistrationForm;
