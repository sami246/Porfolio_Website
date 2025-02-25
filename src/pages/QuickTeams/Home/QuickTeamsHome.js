import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/quick-teams-logo.png';

const QuickTeamsHome = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f5fcfd',
      color: '#013774',
      height: '100vh',
    },
    contentContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1896ec',
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    privacyLink: {
      color: '#0c72cf',
      textDecoration: 'underline',
    },
    logo: {
      maxWidth: '200px',
      display: 'block',
      margin: '20px auto',
    },
    dataInfo: {
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.header}>
          <img src={logo} alt="Quick Teams Logo" style={styles.logo} />
          <h1 style={styles.title}>Welcome to Quick Teams</h1>
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
      </div>
    </div>
  );
};

export default QuickTeamsHome;