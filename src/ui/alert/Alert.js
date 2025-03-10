import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, textColor, bgColor, size }) => {
    const styles = {
        color: textColor,
        backgroundColor: bgColor,
        padding: size === 'small' ? '10px' : size === 'large' ? '20px' : '15px',
        borderRadius: '5px',
        margin: '10px 0',
        textAlign: 'center',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '24px' : '16px',
    };

    return (
        <div style={styles}>
            {message}
        
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Alert.defaultProps = {
    textColor: '#000',
    bgColor: '#f8d7da',
    size: 'medium',
};

export default Alert;
