import React from 'react';

const Arrow = ({ className, style, onClick, icon }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
            }}
            onClick={onClick}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {icon}
        </div>
    );
};

export default Arrow;