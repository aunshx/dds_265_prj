export const DEFAULT_IMAGE = 'https://i.postimg.cc/8PTkJPpQ/default-ui-image-placeholder-wireframes-600nw-1037719192-ezgif-com-webp-to-jpg-converter.jpg';

export const PBFT_IMAGE = 'https://i.postimg.cc/66PwqccZ/PBFTGraph.png';

export const PBFT_GRAPH_HOME = 'https://i.postimg.cc/pX2pYwCp/PBFT-Graph.png'

export const CARD_BG_GRAD = 'border-3p border-gray-170 dark:bg-gradient-to-r dark:from-blue-600 dark:via-blue dark:to-blue-550 dark:border-none';

export const DROPDOWN_OPTS = [
    'Select Transaction',
    'Get Transaction',
    'Set Transaction',
    'Clear All'
]

export const DEFAULT_TRANS_SELECT_STR = 'Select Transaction Action';

export const COLORS_PBFT_GRAPH = [
    "#2196F3",
    "#9C27B0",
    "#FFC107",
    "#00BCD4",
    "#4CAF50",
    "#795548"
];

export const COLORS_MVT_GRAPH = ["hsl(148, 70%, 50%)", "hsl(200, 70%, 50%)", "hsl(171, 70%, 50%)", "hsl(313, 70%, 50%)"];


export const ACTION_TYPE_PBFT_GRAPH = ["request", "prePrepare", "prepare", "commit", "reply"];

export const TITLES_PBFT_GRAPH = ["REQUEST", "PRE-PREPARE", "PREPARE", "COMMIT", "REPLY"];

export const NODES_PBFT_GRAPH = ["CLIENT", "REPLICA 1", "REPLICA 2", "REPLICA 3", "REPLICA 4"];

export const PBFT_ANIMATION_SPEEDS = {
    '1x': {
        TRANSDURATION: 1500,
        REQUEST_BUFFER: 1000,
        PREPREPARE_BUFFER: 1500,
        PREPARE_BUFFER: 3000,
        COMMIT_BUFFER: 4500,
        REPLY_BUFFER: 6000
    },
    '2x': {
        TRANSDURATION: 750,
        REQUEST_BUFFER: 500,
        PREPREPARE_BUFFER: 750,
        PREPARE_BUFFER: 1500,
        COMMIT_BUFFER: 2250,
        REPLY_BUFFER: 3000
    },
    '0.5x': {
        TRANSDURATION: 3000,
        REQUEST_BUFFER: 2000,
        PREPREPARE_BUFFER: 3000,
        PREPARE_BUFFER: 6000,
        COMMIT_BUFFER: 9000,
        REPLY_BUFFER: 12000
    },
}

export const NUMBER_OF_STEPS_PBFT_GRAPH = 5;

export const VISUALIZER_PAGE_SUBTITLE = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vitae, dolor illo harum consequatur ea, temporibus, corrupti iure veniam esse quisquam ut quidem dignissimos quasi. Quas totam temporibus';
