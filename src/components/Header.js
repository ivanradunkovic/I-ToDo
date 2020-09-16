import React from 'react';

const Header = () =>
{
    const headerStyle = {
        padding: "5px",
        lineHeight: "10px"
    };

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
                React ToDo
          </h1>
            <p style={{ fontSize: "20px" }}>
                Add todos to your list:
          </p>
        </header>
    );
};

export default Header;