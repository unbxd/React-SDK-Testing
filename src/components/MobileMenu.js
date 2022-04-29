import React from 'react';

const MobileMenu = (props) => {
    const { handleShow } = props;
    return (
        <div className="UNX-mobileMenu UNX-mobileView">
            <div className="UNX-fiterIcon" onClick={handleShow}>
                <i className="fa fa-filter" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default MobileMenu;
