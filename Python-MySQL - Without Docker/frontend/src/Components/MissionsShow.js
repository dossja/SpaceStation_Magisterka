import React from 'react';

function MissionsShow(props) {
    return (
        <div>
            <h3>All Missions</h3>
            <h3>{props.currentUserID}</h3>
        </div>)
}

export default MissionsShow;