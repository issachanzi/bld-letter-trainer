import * as React from 'react';

export default function Shake({amount, children}) {
    const style = {
        position: 'relative',
        left: amount + 'px'
    };

    console.log(style)

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export function useShake(magnitude, period, decayMilliseconds) {
    const FRAME_MILLIS = 17;
    const decayFrames = decayMilliseconds / FRAME_MILLIS;
    const [offset, setOffset] = React.useState(0);

    const doShake = async () => {
        for(let i = 0; i < decayFrames; i++) {
            const sin = Math.sin( 2 * Math.PI * i / period)
            const offset = sin * (decayFrames - i);
            setOffset(offset);

            // console.log(offset);

            await sleep(FRAME_MILLIS);
        }
    };

    return [offset, doShake];
}

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

