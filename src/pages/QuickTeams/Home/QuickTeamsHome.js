import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/quick-teams-logo.png';
import banner from '../../../assets/project_images/Quick Teams 1.jpg';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const QuickTeamsHome = () => {
  const styles = {
    container: {
      // fontFamily: 'Arial, sans-serif',
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
    privacyLink: {
      color: '#0c72cf',
      textDecoration: 'underline',
    },
    logo: {
      maxWidth: '150px',
      display: 'block',
      margin: '10px auto',
      borderRadius: '8px',
    },
    dataInfo: {
      fontSize: '14px',
      lineHeight: '1.4',
      marginBottom: '15px',
      textAlign: 'center',
    },
    banner: {
      width: '100%',
      // maxHeight: '300px',
      objectFit: 'contain',
      marginBottom: '20px',
      borderRadius: '4px',
    },
    downloadButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    downloadButton: {
      margin: '0 10px',
      padding: '10px 20px',
      backgroundColor: '#e0f2f7',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#013774',
      border: '1px solid #caf0f7',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    downloadIcon: {
      fontSize: '1.5em',
      marginRight: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <img src={banner} alt="Quick Teams Banner" style={styles.banner} />
        <div style={styles.header}>
          <img src={logo} alt="Quick Teams Logo" style={styles.logo} />
          <h1 style={styles.title}>Quick Teams</h1>
        </div>
        <p style={styles.description}>
          Quick Teams is a random team generator application that allows you to rank players on a level system. Based on their ratings, evenly rated teams will be generated from the players you select.
        </p>

        <p style={styles.dataInfo}>
          <strong>Data Usage:</strong> Quick Teams uses your Google account to authenticate you and Sync your data to cloud to . We store player names and ratings you provide to generate teams.
        </p>

        <p>
          Read our <Link to="/quick-teams/privacy-policy" style={styles.privacyLink}>Privacy Policy</Link>.
        </p>
        <p>
          Delete Account <Link to="/quick-teams/delete-account" style={styles.privacyLink}>here</Link>.
        </p>

        <div style={styles.downloadButtons}>
          <a target='_blank' rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.SRMakes.QuickTeams" style={styles.downloadButton}>
            <FaGooglePlay style={styles.downloadIcon} />
            <span>Google Play</span>
          </a>
          <a target='_blank' rel="noreferrer" href="https://apps.apple.com/us/app/quick-teams-team-generator/id6740728374" style={styles.downloadButton}>
            <FaAppStore style={styles.downloadIcon} />
            <span>Apple Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickTeamsHome;