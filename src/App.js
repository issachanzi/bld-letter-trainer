import * as React from 'react';

import './App.css';
import './Edge.js';
import Edge from './Edge';
import Shake, {useShake} from './Shake';

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    }
};

function App() {
    const letters = 'abcdefghijklmnopqrtuvwx';

    const [edgeLetter, setEdgeLetter] = React.useState(
        letters[Math.floor(Math.random() * letters.length)]
    );
    const [shakeAmount, doShake] = useShake(150, 5, 500);

    React.useEffect(() => {
        const interval = setInterval(() => {
            document.querySelector('.App').focus();
        }, 10)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const handleKeyDown = e => {
        if (e.key === edgeLetter) {
            setEdgeLetter(letters[Math.floor(Math.random() * letters.length)]);
        }
        else {
            doShake().then();
        }
    }

        return (
            <div
                className="App"
                style={styles.app}
                onKeyDown={handleKeyDown}
                tabIndex={1}
            >
                <h1>
                    Rubik's Cube blindfolded memo quiz
                </h1>
                <p>
                    Type the letter corresponding to the piece shown
                </p>
                <Shake amount={shakeAmount}>
                    <Edge letter={edgeLetter} />
                </Shake>
            </div>
        );
    };

    export default App;
