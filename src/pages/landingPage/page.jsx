"use client";
import Link from 'next/link';
import styles from '../../css/landingPage.module.css';
import Login from '../loginPage/page';

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Hedgemyfunds</h1>
            </header>
            <main className={styles.main}>

                <section className={styles.heroSection}>
                    <div className={styles.heroText}>
                        <div className={styles.mainLineTop}></div>
                        <h1 className={styles.heroTitle}>Hedgemyfunds</h1>
                        <h2>Join the <span className={styles.community}>community</span> chapter</h2>
                        <p>Join the Community Chapter: Empowering College Students to Connect, Learn, and Grow in the World of Finance.</p>
                        <div className={styles.mainLineBottomWrapper}>
                            <div className={styles.mainLineBottom}></div>
                        </div>
                    </div>
                    <img src="/Top Of Podium 2.png" alt="Hero" className={styles.heroImage} />
                    <Link href='/loginPage/page'>
                        
                            <button className={styles.joinButton}>Join a chapter</button>
                        
                    </Link>
                </section>

                <section className={styles.benefitsSection}>
                    <h3>What's in for you?</h3>
                    <div className={styles.benefits}>
                        <div className={styles.benefitItem}>
                            <img src="/Empty State No User Found 1.png" alt="Workshops and Competitions" className={styles.benefitImage} />
                            <h4>Workshops and Competitions</h4><br />
                            <p>Showcase your skills and impress the network! <br /><br />Network with industry VIPs and high-flyers!</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <img src="/Going Onwards With Optimism 2.png" alt="Internship or PPO" className={styles.benefitImage} />
                            <h4>Land an Internship or even a PPO</h4><br />
                            <p>Get (Pre-Placement Offer) with HMF. <br /><br />Network with industry VIPs and high-flyers!</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <img src="/Gift Cards 4.png" alt="Prizes and Goodies" className={styles.benefitImage} />
                            <h4>Win exciting prizes & goodies</h4><br />
                            <p>Based on your performance (the more you shine, the more you win!). <br /><br />Exciting goodies and prizes...</p>
                        </div>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>and guess what <br /><span className={styles.more}> there's many more </span> for you.......</p>
                    <Link href="/loginPage/page">
                        
                            <button className={styles.joinButton}>Join a chapter</button>
                        
                    </Link>
                </footer>
            </main>
        </div>
    );
}
