"use client";

import React from 'react';
import QRCode from 'qrcode.react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import styles from '../css/authPage.module.css';
import Link from 'next/link';

const Payment = () => {
    const amount = '1'; // Fixed amount
    const upiId = 'panamasailor701-3@okhdfcbank'; // Replace with your UPI ID

    // Example QR code data for a payment with your UPI ID
    const qrCodeData = `upi://pay?pa=${upiId}&pn=YourName&am=${amount}&cu=INR`;

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
                                Payment QR Code
                            </Typography>
                            <Typography component="p" className={styles.formSubtitle}>
                                Scan the QR code to pay ₹{amount}
                            </Typography>
                            <Box mt={3} display="flex" justifyContent="center">
                                <QRCode value={qrCodeData} size={256} />
                            </Box>
                            <Box mt={3} textAlign="center">
                                <Typography variant="h6">Amount: ₹{amount}</Typography>
                            </Box>
                            <Box mt={3} textAlign="center">
                                <Link href="/verification/page">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={styles.submitButton}
                                    >
                                    Next
                                </Button>
                                    </Link>
                            </Box>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Payment;
