
import React from 'react';

// Usamos la desestructuración de JS para asignar los valores por defecto
const Alert = ({ 
    message, 
    textColor = '#000', 
    bgColor = '#f8d7da', 
    size = 'medium' 
}) => {
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
    // ... resto del código igual ...
    return (
        <div style={styles}>
            {message}
        </div>
    );
};

export default Alert; // Borramos Alert.propTypes al final