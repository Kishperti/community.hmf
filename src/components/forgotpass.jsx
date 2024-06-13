"use client"
import React from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import styles from '../css/authPage.module.css';
import { useForm } from 'react-hook-form';




const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:9999/api/forgotpassword", { // Updated endpoint
                method: "POST",
                body: JSON.stringify({ email: data.email }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            console.log(json);
            alert('Password reset link sent to your email.');
        } catch (error) {
            console.error("Error:", error);
            alert('Failed to send password reset link. Please try again.');
        }
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
                                Reset Password
                            </Typography>
                            <Typography component="p" className={styles.formSubtitle}>
                                Enter your email to reset your password
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Enter your email"
                                            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })}
                                            autoComplete="email"
                                            className={styles.inputField}
                                            type="email"
                                            helperText={errors.email && "Please enter a valid email address"}
                                        />
                                    </Grid>
                                </Grid>
                                <input
                                    type="submit"
                                    className={styles.submitButton}
                                />
                            </form>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
