"use client";

import React from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import styles from '../css/authPage.module.css';
import { useForm } from 'react-hook-form';

const VerifyPayment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        try {
            const response = await fetch('http://localhost:8000/store', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data : data }),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const dataa = await response.json();
            console.log('Data received:', dataa);
          } catch (error) {
            console.error('Error:', error);
    }
        console.log(data.transactionId);
        // Display success message
        alert('Payment verification initated, our team will reach out you soon !');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Hedgemyfunds</h1>
            </header>
            <div className={styles.mainBody}>
                <div className={styles.leftSide}>
                    <Typography className={styles.title} variant="h4" component="h1">
                        Hedgemyfunds
                    </Typography>
                    <Typography className={styles.subtitle} variant="h6" component="h2">
                        Join the <span className={styles.highlight}>community</span> chapter
                    </Typography>
                    <Typography className={styles.description} variant="body1">
                        Join the Community Chapter: Empowering College Students to Connect, Learn, and Grow in the World of Finance.
                    </Typography>
                    <img src="/People 2.png" alt="Illustration" className={styles.illustration} />
                </div>
                <div className={styles.rightSide}>
                    <Container component="main" className={styles.formContainer}>
                        <Box>
                            <Typography component="h1" variant="h5" className={styles.formTitle}>
                                Verify Payment
                            </Typography>
                            <Typography component="p" className={styles.formSubtitle}>
                                Enter your transaction ID to verify your payment
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="transaction-id"
                                            {...register('transactionId', { required: true })}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="transactionId"
                                            label="Transaction ID"
                                            autoFocus
                                            className={styles.inputField}
                                            helperText={errors.transactionId && "Transaction ID is required"}
                                        />
                                    </Grid>
                                </Grid>
                                <input
                                    type="submit"
                                    className={styles.submitButton}
                                    value="Submit"
                                />
                            </form>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default VerifyPayment;
