"use client";
import React from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import styles from '../../css/authPage.module.css';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Auth = () => {
    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm();
    console.log(dirtyFields);

    const onSubmit = async (data) => {
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        console.log(data);

        // Validate password
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
            alert('Password must contain at least one special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            //changed by krunal from /api/register to /login && port
            const response = await fetch("http://localhost:8000/register", {
                method: "POST",
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    //comented by krunal
                    // confirmpassword: data.confirmPassword,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            console.log(json);
            
            if (response.status == 200) {
                alert("Registration successful!"); 
              }
        } catch (error) {
            console.error("Error:", error);
            alert('Registration failed. Please try again.');
        }
    }

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
                                Create an account
                            </Typography>
                            <Typography component="p" className={styles.formSubtitle}>
                                Create your account to join the community
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="name"
                                            {...register('name', { required: true })}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Enter your name"
                                            autoFocus
                                            className={styles.inputField}
                                        />
                                    </Grid>
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
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="phone"
                                            label="Enter your phone number"
                                            id="phone"
                                            {...register('phone', { required: true, pattern: /\+91[0-9]{10}/ })}
                                            autoComplete="phone"
                                            className={styles.inputField}
                                            helperText={errors.phone && "Please enter a valid phone number with country code +91"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Create Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            {...register('password', { required: true })}
                                            className={styles.inputField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="new-password"
                                            {...register('confirmPassword', { required: true })}
                                            className={styles.inputField}
                                        />
                                    </Grid>
                                </Grid>
                                <input
                                    type="submit"
                                    className={styles.submitButton}
                                />
                            </form>
                            <Box mt={2}>
                                <Typography component="p">
                                    Already have an account?{' '}
                                    <Link href="/loginPage/page">
                                        <Typography component="span" className={styles.loginLink}>
                                            Login
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Auth;
