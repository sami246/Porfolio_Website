import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/project_images/Host Worth Logo.png';

const HostWorthDeleteAccount = () => {
    const styles = {
        container: {
            backgroundColor: '#0f0a1c',
            color: '#e2d9f3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            padding: '20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        contentContainer: {
            maxWidth: '800px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#c084fc',
            marginBottom: '10px',
        },
        description: {
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '15px',
            textAlign: 'center',
        },
        logo: {
            maxWidth: '150px',
            display: 'block',
            margin: '20px auto 10px',
            borderRadius: '12px',
        },
        privacyLink: {
            color: '#a78bfa',
            textDecoration: 'none',
            fontWeight: '600',
        },
        emailBox: {
            marginTop: '15px',
            padding: '20px',
            backgroundColor: '#1e112a',
            border: '1px solid #581c87',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            fontSize: '15px',
            lineHeight: '1.6',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <div style={styles.header}>
                    <img src={logo} alt="HostWorth Logo" style={styles.logo} />
                    <h1 style={styles.title}>Delete Account</h1>
                </div>

                <p style={styles.description}>
                    We respect your right to delete your HostWorth account and all associated fleet data at any time.
                    Please follow the instructions below to request account deletion.
                </p>

                <div style={styles.emailBox}>
                    <p>
                        Send an email to <strong style={{ color: '#ffffff' }}>support@srmakes.co.uk</strong> with the subject line:
                    </p>
                    <p style={{ color: '#d8b4fe', margin: '10px 0' }}><em>"Delete My HostWorth Account"</em></p>
                    <p>
                        Make sure to send the email from the exact address you use to sign in to HostWorth so we can verify your identity.
                    </p>
                </div>

                <p style={{ marginTop: '30px' }}>
                    You can also review our{' '}
                    <Link to="/host-worth/privacy-policy" style={styles.privacyLink}>
                        Privacy Policy
                    </Link>.
                </p>
            </div>
        </div>
    );
};

export default HostWorthDeleteAccount;