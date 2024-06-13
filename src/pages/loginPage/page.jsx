"use client"
import React from 'react';
import Payment from "../../components/qrpayment.jsx";
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import styles from '../../css/authPage.module.css';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Login = () => {
    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm();
    console.log(dirtyFields);
    const router = useRouter();


    const onSubmit = async (data) => {

        //changed by krunal from /api/login to /login && port
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            console.log(json);
            if (response.status === 200) {
                alert("login successful!"); 
                // router.push(<qrpayment/>);
              }
        } catch (error) {
            console.error("Error:", error);
            alert('Login failed. Please try again.');
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
                                Login to your account
                            </Typography>
                            <Typography component="p" className={styles.formSubtitle}>
                                Welcome back! Please enter your details
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
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Enter your password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            {...register('password', { required: true })}
                                            className={styles.inputField}
                                        />
                                    </Grid>
                                </Grid>
                                <Link href="/qrPage/page">
                                 <input
                                    type="submit"
                                    className={styles.submitButton}
                                    />    
                                </Link>
                            </form>
                            <Box mt={2}>
                                <Typography component="p">
                                    Don't have an account?{' '}
                                    <Link href="/authPage/page">
                                        <Typography component="span" className={styles.loginLink}>
                                            Register
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography component="p">
                                    Forgot your password?{' '}
                                    <Link href="/forgotpass/page">
                                        <Typography component="span" className={styles.loginLink}>
                                            Reset Password
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

export default Login;
