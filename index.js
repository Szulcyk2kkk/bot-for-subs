const tmi = require('tmi.js');

let options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'Butexx',
        password: process.env.B0T_T0KEN,
    },
    channels: ['Nieuczesana', 'sodapoppin', 'shroud', 'FederalGhosts', 'C9Sneaky', 'STPeach', 'Brunecia', 'Miauki', 'AiSzjaa', 'ikusiaa', 'Amouranth', 'forsen', 'xQcOW', 'anieyo_', 'an_dream', 'AnniTheDuck', 'Denly', 'MisDelish', 'suvikh', 'yuki2yuki', '2sick4drama', 'kachynska'],
};

let client = new tmi.client(options);

client.connect();
