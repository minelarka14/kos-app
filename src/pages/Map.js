/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import BingMapsReact from "bingmaps-react";

import Secrets from '../secrets.json'

export default function Map() {
    const [pushpins, setPushpins] = useState([])
    useEffect(() => {
        // TODO: implement pushpins systems
        setPushpins([])
    }, [])
    return (
        <div>
            <BingMapsReact 
            bingMapsKey={Secrets.bingmaps}
            mapOptions={{
                disableKeyboardInput: true,
                disableMapTypeSelectorMouseOver: true
            }}
            pushpins={pushpins}
            />
        </div>
    )
}
