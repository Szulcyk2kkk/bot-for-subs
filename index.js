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
    channels: ['Nieuczesana', 'sodapoppin', 'shroud', 'FederalGhosts', 'C9Sneaky', 'STPeach', 'Brunecia', 'Miauki', 'AiSzjaa', 'ikusiaa', 'Amouranth', 'forsen', 'xQcOW', 'anieyo_', 'an_dream', 'AnniTheDuck', 'Denly', 'MisDelish', 'suvikh', 'yuki2yuki', '2sick4drama', 'kachynska', 'DansGaming', 'RajjPatel', 'AriGameplays', 'Jenna', 'RomanovaRela', 'Emzia', 'SteamingPolak', 'TheSwatKnight', 'Stazjaa', 'H2P_Gucio', 'demonzz1', 'miamalkova', 'modestal', 'pqueen', 'Bnans', 'shuteye_orange', 'kaceytron', 'KBubblez', 'Viktorkaa', 'MSFIIIRE', 'BrandonGrych', 'MissCoookiez', 'GiannieLee'],
};

let client = new tmi.client(options);

client.connect();
