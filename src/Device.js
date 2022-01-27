import React from 'react';

function Device({mydevice}){
    console.log(JSON.stringify(mydevice));
    return <div>My {mydevice}</div>;
}

export default Device;