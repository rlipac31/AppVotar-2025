import React from 'react';
import PropTypes from 'prop-types';

const Boton = ({ texto, textColor, bgColor, size }) => {
    const styles = {
        color: textColor,
        backgroundColor: bgColor,
        padding: size === 'small' ? '6px' : size === 'large' ? '12px' : '8px',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '16px',
    };

    return (
        <button style={styles}>
           {texto}
        </button>
    );
};

Boton.propTypes = {
    message: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Boton.defaultProps = {
    textColor: '#ffffff',
    bgColor: 'var(--primary-color)',
    size: 'small',
};

export default Boton;
