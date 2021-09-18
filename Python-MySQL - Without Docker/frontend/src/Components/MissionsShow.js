import React from 'react';

function MissionsShow(props) {
    return (
        <div>
            <h2>All Missions</h2>
            <h3>{props.currentUserID}</h3>
        </div>)
}

export default MissionsShow;