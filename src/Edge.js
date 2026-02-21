
const COORDS_EGDE_MAIN = [
    [15, 5],
    [95, 5],
    [105, 85],
    [5, 85]
];

const COORDS_EDGE_SUB = [
    [5, 85],
    [105, 85],
    [85, 105],
    [25, 105]
];

const edges = [
    ['a', 'white', 'blue'],
    ['b', 'white', 'red'],
    ['c', 'white', 'green'],
    ['d', 'white', 'orange'],
    ['e', 'orange', 'white'],
    ['f', 'orange', 'green'],
    ['g', 'orange', 'yellow'],
    ['h', 'orange', 'blue'],
    ['i', 'green', 'white'],
    ['j', 'green', 'red'],
    ['k', 'green', 'yellow'],
    ['l', 'green', 'orange'],
    ['m', 'red', 'white'],
    ['n', 'red', 'blue'],
    ['o', 'red', 'yellow'],
    ['p', 'red', 'green'],
    ['q', 'blue', 'white'],
    ['r', 'blue', 'orange'],
    ['s', 'blue', 'yellow'],
    ['t', 'blue', 'red'],
    ['u', 'yellow', 'green'],
    ['v', 'yellow', 'red'],
    ['w', 'yellow', 'blue'],
    ['x', 'yellow', 'orange'],
]

export default function Edge({letter}) {
    const [, mainColour, subColour]
        = edges.find(e => e[0] === letter);

    return (
        <svg style={{width: '110px', height: '110px'}}>
            <Sticker coords={COORDS_EGDE_MAIN} colour={mainColour} />
            <Sticker coords={COORDS_EDGE_SUB} colour={subColour} />
        </svg>
    );
}

function Sticker({coords, colour}) {
    const points = coords.map(p => p.join(',')).join(' ');

    return <polygon points={points} stroke={'black'} strokeWidth={2} fill={colour} />
}
