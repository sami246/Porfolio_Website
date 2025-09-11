import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/quick-teams-logo.png';
import banner from '../../../assets/project_images/Quick Teams 1.jpg';

const QuickTeamsDeleteAccount = () => {
    const styles = {
        container: {
            backgroundColor: '#f5fcfd',
            color: '#013774',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            padding: '20px',
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
            color: '#1896ec',
            marginBottom: '10px',
        },
        description: {
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '15px',
            textAlign: 'center',
        },
        logo: {
            maxWidth: '150px',
            display: 'block',
            margin: '10px auto',
            borderRadius: '8px',
        },
        banner: {
            width: '100%',
            objectFit: 'contain',
            marginBottom: '20px',
            borderRadius: '4px',
        },
        privacyLink: {
            color: '#0c72cf',
            textDecoration: 'underline',
        },
        emailBox: {
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#e0f2f7',
            border: '1px solid #caf0f7',
            borderRadius: '6px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            fontSize: '15px',
            lineHeight: '1.5',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <div style={styles.header}>
                    <img src={logo} alt="Quick Teams Logo" style={styles.logo} />
                    <h1 style={styles.title}>Delete Account</h1>
                </div>

                <p style={styles.description}>
                    We respect your right to delete your Quick Teams account at any time.
                    Please follow the instructions below to request deletion.
                </p>

                <div style={styles.emailBox}>
                    <p>
                        Send an email to <strong>support@yourdomain.com</strong> with the subject line:
                    </p>
                    <p><em>"Delete My Quick Teams Account"</em></p>
                    <p>
                        Make sure to send the email from the same address you used to sign in to Quick Teams.
                    </p>
                </div>

                <p style={{ marginTop: '20px' }}>
                    You can also review our{' '}
                    <Link to="/quick-teams/privacy-policy" style={styles.privacyLink}>
                        Privacy Policy
                    </Link>.
                </p>
            </div>
        </div>
    );
};

export default QuickTeamsDeleteAccount;
