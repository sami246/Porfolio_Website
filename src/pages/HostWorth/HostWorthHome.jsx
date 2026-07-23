import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import logo from '../../assets/project_images/Host Worth Logo.png';

const HostWorthHome = () => {
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
            fontSize: '28px',
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
        pageLink: {
            color: '#a78bfa',
            textDecoration: 'none',
            fontWeight: '600',
        },
        logo: {
            maxWidth: '120px',
            display: 'block',
            margin: '10px auto',
            borderRadius: '16px',
        },
        dataInfo: {
            fontSize: '14.5px',
            lineHeight: '1.6',
            marginBottom: '20px',
            textAlign: 'center',
            backgroundColor: '#1e112a',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #2e1065',
        },
        banner: {
            width: '100%',
            objectFit: 'contain',
            marginBottom: '25px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        },
        downloadButtons: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            margin: '30px 0',
        },
        downloadButton: {
            padding: '12px 24px',
            backgroundColor: '#1e112a',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#e2d9f3',
            border: '1px solid #581c87',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s ease-in-out',
        },
        downloadIcon: {
            fontSize: '1.5em',
            marginRight: '10px',
            color: '#c084fc',
        },
        linkContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>

                <div style={styles.header}>
                    <img src={logo} alt="HostWorth Logo" style={styles.logo} />
                    <h1 style={styles.title}>HostWorth</h1>
                </div>

                <p style={styles.description}>
                    HostWorth is your ultimate companion for fleet and rental management. Seamlessly track your vehicles, log expenses, monitor MOT and insurance renewals, and analyze your rental profitability all in one place.
                </p>

                <div style={styles.dataInfo}>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '5px' }}>Data Usage & Sync:</strong>
                    HostWorth securely authenticates your account and syncs your operational data to the cloud. We store the vehicle details, expense logs, and rental data you provide to ensure your fleet management is always up to date across your devices.
                </div>

                <div style={styles.linkContainer}>
                    <span>
                        Read our <Link to="/host-worth/privacy-policy" style={styles.pageLink}>Privacy Policy</Link>.
                    </span>
                    <span>
                        Need to leave? <Link to="/host-worth/delete-account" style={styles.pageLink}>Delete Account</Link>.
                    </span>
                </div>
                {/* 
                <div style={styles.downloadButtons}>
                    <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.SRMakes.HostWorth" style={styles.downloadButton}>
                        <FaGooglePlay style={styles.downloadIcon} />
                        <span style={{ fontWeight: '500' }}>Google Play</span>
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://apps.apple.com/us/app/host-worth/id000000000" style={styles.downloadButton}>
                        <FaAppStore style={styles.downloadIcon} />
                        <span style={{ fontWeight: '500' }}>App Store</span>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default HostWorthHome;