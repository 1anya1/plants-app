const plantList= [
    {
        name: "Monstera",
        scientificName: 'Monstera deliciosa',
        height: 'up to 6 feet',
        temperature: '50-75 F',
        light: 'bright or lightly shaded spot away from direct sunlight',
        watering: 'water when 1 inch of top soil feels dry',
        humidity: 'mist plant once or twice a week',
        issues: ['yellow leaves indicate overwatering', 'brown tips or edges indicate low humidity or cool temperatures'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/N2il6nV.png',
        id:1
    },
    {
        name: "Prayer Plant",
        scientificName: 'Maranta',
        height: 'up to  1 foot',
        temperature: '60-68 F',
        light: 'partial shade or bright light, keep away from direct light',
        watering: 'keep potting mix moist with distilled water',
        humidity: 'needs lots of humidity, set on pebble tray or mist leaves regylarly',
        issues: ['brown leaves indicate not enough humidity or hard water', 'faded or scorched leaves indicate too much sunlight', 'folding leaves at night is expected of this plant, so dont worry ;)'],
        bugs: "spider mites",
        img: 'https://i.imgur.com/qOdEYy0.png',
        id:2
    },
    {
        name: "Anthurium",
        scientificName: 'Anthurium',
        height: 'up to 20 inches',
        temperature: '60-68 F',
        light: 'bright, indirect light, 3 ft away from sunny window',
        watering: 'moderate watering, when surface feels dry',
        humidity: 'mist leaves regularly avoiding flowers',
        issues: ['no flowering indicates the plant is not getting enough light', 'pale yellow leaves indicate overwatering', 'leave tips brown indicate air is not humid enough '],
        bugs: "mealy bugs, spider mites",
        img: 'https://i.imgur.com/6iqNPQA.png',
        id:3
    },
    {
        name: "Begonia",
        scientificName: 'Begonia Rex',
        height: 'up to 24 inches',
        temperature: '64-70 F',
        light: 'avoid direct light, requires indirect light',
        watering: 'allow to dry out between waterings, better to water from the bottom',
        humidity: 'avoid water on leaves',
        issues: ['white powdere on leves is mildew to to poor air circulation', 'loosing leaves indicated overwatering or hot conditions', 'yellow leaves indicate too much or too little water/light '],
        bugs: "aphids, spider mites, whiteflies, thrips",
        img: 'https://i.imgur.com/yalGIid.png',
        id:4
    },
    {
        name: "Bromeliad",
        scientificName: 'Neoregelia carolinae f. tricolor',
        height: 'up to 20 inches',
        temperature: '57-77 F',
        light: 'bright, indirect light',
        watering: 'water the vase "cup" of flower with distilled wated replacing water every 2 weeks, keep soil moist at all times',
        humidity: 'keep crown moist at all times',
        issues: ['brown leaf tips indicate dry air or hard water', 'leaves turning yellow indicate plant outgrew container'],
        bugs: "amealybugs, scale insects",
        img: 'https://i.imgur.com/6xlaWgB.png',
        id:5
    },
    {
        name: "Peacock Plant",
        scientificName: 'Calathea',
        height: 'up to 9 1/2 inches',
        temperature: '60-68 F',
        light: 'partial shade or bright light, keep away from direct light',
        watering: 'keep potting mix moist with distilled water',
        humidity: 'needs lots of humidity, set on pebble tray or mist leaves regylarly',
        issues: ['droopy leaves indicate overwatering', 'brown leaves indicate not enough humidity or hard water', 'faded or scorched leaves indicate too much sunlight'],
        bugs: "spider mites",
        img: 'https://i.imgur.com/omVODqb.png',
        id:6
    },
    {
        name: "Aloe Vera",
        scientificName: 'Aloe Vera',
        height: 'up to 3feet',
        temperature: '50-75 F',
        light: 'bright, indirect light',
        watering: 'water when the top 1 inch of soil has dried out',
        humidity: 'NA',
        issues: ['black spots indicate overwatering', 'pale yellow leaves indicate not enough light or overwatering', 'wrinkled leaves indicate the plant is underwatered'],
        bugs: "scale insects",
        img: 'https://i.imgur.com/JffHNOJ.png',
        id:7
    }, 
    {
        name: "Spider Plant",
        scientificName: 'Chlorophytum comosum',
        height: 'up to 8 inches',
        temperature: '45-75 F',
        light: 'bright indirect light',
        watering: 'keep potting mix moist but not soggy',
        humidity: 'NA',
        issues: ['brown streaks indicate overwatering in cool conditions', 'brown tips indicate underwatering or plant is getting too much hot air', 'pale leaves indicate lack of water or harsh sunlight conditions'],
        bugs: "spider mites",
        img: 'https://i.imgur.com/qeXUCzP.png',
        id:8
    },
    {
        name: "Pothos",
        scientificName: 'Epipremnum',
        height: 'vines can get up to 40 feet long',
        temperature: '45-75 F',
        light: 'bright indirect light',
        watering: 'keep potting mix moist but not soggy',
        humidity: 'NA',
        issues: ['brown streaks indicate overwatering in cool conditions', 'brown tips indicate underwatering or plant is getting too much hot air', 'pale leaves indicate lack of water or harsh sunlight conditions'],
        bugs: "spider mites",
        img: 'https://i.imgur.com/Jyx0adV.png',
        id:9
    },
    {
        name: "Jade Plant",
        scientificName: 'Crassula ovata',
        height: 'vines can get up to 40 feet long',
        temperature: '50-75 F',
        light: 'bright dappled sunlight',
        watering: 'water when top 1 inch of soil feels dry',
        humidity: 'NA',
        issues: ['yellow leaves indicate overwatering ', 'shriveled leaves and stems indicate underwatering', 'leggy plant indicated needs more light'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/Z1TjahN.png',
        id:10
    },
    {
        name: "Heart-Leaf Philodendron",
        scientificName: 'Philodendron scandens',
        height: 'vines can get up to 4 feet long',
        temperature: '60-75 F',
        light: 'can tolorate shady spots',
        watering: 'water when top 1 inch of soil feels dry',
        humidity: 'provide humidity by misting the leaves regularly',
        issues: ['yellow lower leaves indicate cold environment ', 'pale leaves indicate too much direct light', 'leaves dropping indicate drafty cold environment'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/LYOywdj.png',
        id:11
    },
    {
        name: "Dracaena",
        scientificName: 'Dracaena fragrans',
        height: 'up to 5 ft in length',
        temperature: '55-70 F',
        light: 'keep away from direct sunlight',
        watering: 'water when top 1 inch of soil feels dry',
        humidity: 'provide humidity by misting the leaves regularly',
        issues: ['yellow lower leaves indicate cold environment ', 'pale leaves indicate too much direct light', 'leaves dropping indicate drafty cold environment'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/y7gKEc5.png',
        id:12
    },
    {
        name: "Lucky Bamboo ",
        scientificName: 'Dracaena sanderiana',
        height: 'up to 3 feet',
        temperature: '60-75 F',
        light: 'bright spot away from direct sunlight',
        watering: 'use distilled or filtered water, if growing in mix keep soil moist at all times',
        humidity: 'NA',
        issues: ['brown leaf tips indicate chemicals in the water', 'yellow leaves indicate underwatering or too much sun', 'yellow stems indicate underwatering, overfeeding, or temperature fluctuations'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/ScDluFV.png',
        id:13
    },
    {
        name: "Succulent ",
        scientificName: 'Echeveria',
        height: 'up to 4 inch',
        temperature: '50-75 F',
        light: 'requires lots of bright light, can also take some direct sunlight',
        watering: 'water when the top 1 inch of potting mix feels dry',
        humidity: 'NA',
        issues: ['brown, red, or discolored patches on leaves indicate sunburn', 'yellow or soggy leaves indicate overwatering', 'shriveling leaves indicate underwatering'],
        bugs: "mealybugs",
        img: 'https://i.imgur.com/tX9dky6.png',
        id:14
    },
    {
        name: "Christmas Plant ",
        scientificName: 'Euphorbia pulcherrima',
        height: 'up to 24inch',
        temperature: '65-73 F',
        light: 'bright light away from direct sunlight',
        watering: 'keep potting mix moist but not soggy',
        humidity: 'mist plant every couple of days',
        issues: ['pale leaves are normal, happen with age', 'brown tips or edges indicate the air is too dry', 'yellow leaves indicate the plant is either too hot or dry', 'no more flowering is normal during warmer months'],
        bugs: "mealybugs, spider mites",
        img: 'https://i.imgur.com/tfRZXm5.png',
        id:15
    },
    {
        name: "Fiddle Leaf Fig ",
        scientificName: 'Ficus lyrata',
        height: 'up to 10 feet ',
        temperature: '64-75 F',
        light: 'bright light away from direct sunlight as it will burn the leaves',
        watering: 'water when the top inch of soil feel dry',
        humidity: 'mist leaves occasionally',
        issues: ['leaf loss indicate plant stress', 'brown tips or edges indicate low humidity', 'small patches on leaves indicate leaf spot disease'],
        bugs: "mealybugs, scale insects, spider mites",
        img: 'https://i.imgur.com/GyznXGj.png',
        id:16
    },
    {
        name: "Rubber Plant ",
        scientificName: 'Ficus elastica',
        height: 'up to 10 feet ',
        temperature: '64-75 F',
        light: 'bright light away from direct sunlight as it will burn the leaves',
        watering: 'water when the top inch of soil feel dry, don\'t overwater',
        humidity: 'mist leaves occasionally',
        issues: ['leaf loss indicate plant stress', 'brown tips or edges indicate low humidity', 'small patches on leaves indicate leaf spot disease'],
        bugs: "mealybugs, scale insects, spider mites",
        img: 'https://i.imgur.com/PepVlIJ.png',
        id:17
    },
    {
        name: "Nerve Plant",
        scientificName: 'Fittonoa',
        height: 'up to 6 inches ',
        temperature: '60-75 F',
        light: 'partially shaded spot',
        watering: 'water with luke warm water when 1/2 of top soil feels dry',
        humidity: 'mist leaves daily',
        issues: ['yellow leaves indicate overwatering', 'brown tips or edges indicate low humidity', 'plant collops indicate underwatering'],
        bugs: "aphids",
        img: 'https://i.imgur.com/lVbSFKQ.png',
        id:18
    },
    {
        name: "Polka Dot Plant",
        scientificName: 'Hypoestes',
        height: 'up to 6 inches',
        temperature: '60-75 F',
        light: 'partially shaded spot to bright light',
        watering: 'water with luke warm water when 1/2 of top soil feels dry',
        humidity: 'mist leaves daily',
        issues: ['yellow leaves indicate overwatering', 'brown tips or edges indicate low humidity', 'plant collops indicate underwatering'],
        bugs: "aphids",
        img: 'https://i.imgur.com/ChPKBg0.png',
        id:19
    },
    {
        name: "Hoya",
        scientificName: 'Hoya carnosa',
        height: 'up to 3 feet',
        temperature: '64-75 F',
        light: 'bright location away from direct light',
        watering: 'water when 1 inch of top soil feels dry',
        humidity: 'mist plant on warm days',
        issues: ['dropping leaves indicate overwatering or excess cold in winter', 'no bloom indicates the plant is yong or the plant does not get enough light'],
        bugs: "spider mites",
        img: 'https://i.imgur.com/JBI9TDy.png',
        id:20
    },
    {
        name: "English Ivy",
        scientificName: 'Hedera helix',
        height: 'up to 6 inches ',
        temperature: '30-60 F',
        light: 'bright indirect light',
        watering: 'water when 1 inch of top soil feels dry',
        humidity: 'mist plant on warm days',
        issues: ['leggy plant indicates the room is too warm', 'brown tips or edges indicate low humidity '],
        bugs: "mealybugs, whiteflies, scale insects,alphids",
        img: 'https://i.imgur.com/ITPmh9F.png',
        id:21
    },
    {
        name: "Chinese Money Tree",
        scientificName: 'Pilea peperomioides',
        height: 'up to 12 inches',
        temperature: '64-75 F',
        light: 'bright indirect light or partial shade',
        watering: 'keep soil moist',
        humidity: 'mist leaves occasionally',
        issues: ['yellow leaves indicate overwatering'],
        bugs: "NA",
        img:'https://i.imgur.com/rIPun36.png',
        id:22
    },
    {
        name: "Boston Fern",
        scientificName: 'Nephrolepis exaltata',
        height: 'up to 30 inch',
        temperature: '50-75 F',
        light: 'bright indirect light',
        watering: 'keep potting soil mosit at all times',
        humidity: 'mist leaves frequently',
        issues: ['pale leaves indicate too much sun', 'brown tips or edges indicate low humidity'],
        bugs: "scale insects, spider mites, mealybugs",
        img: 'https://i.imgur.com/c6AfiN4.png',
        id:23
    },
    {
        name: "Birds Nest",
        scientificName: 'Blechnum gibbum',
        height: 'up to 30 inch',
        temperature: '50-75 F',
        light: 'bright indirect light',
        watering: 'keep potting soil mosit at all times using distilled water',
        humidity: 'mist leaves frequently',
        issues: ['pale leaves indicate too much sun', 'brown tips or edges indicate low humidity'],
        bugs: "scale insects, spider mites, mealybugs",
        img:'https://i.imgur.com/uL2UBAH.png',
        id:24
    },
    {
        name: "Orchid",
        scientificName: 'Phalaenopsis',
        height: 'up to 3 feet ',
        temperature: '65-80 F',
        light: 'bright indirect light',
        watering: 'dip watering from the bottom once a week',
        humidity: 'NA',
        issues: ['shriveled leaves indicate plant is not getting enough water', 'yellow leaves indicate underfeeding of plant'],
        bugs: "scale insects, mealybugs",
        img:'https://i.imgur.com/pcbpQWG.png',
        id:25
    },
    {
        name: "Elephants Ear",
        scientificName: 'Alocasia x amazonica',
        height: 'up to 5 feet',
        temperature: '65-70 F',
        light: 'bright, indirect light',
        watering: 'use distilled water, potting mix should always be moist but not soggy',
        humidity: 'requires high humidity',
        issues: [' plant may get brown patches due to too much sun or not enough humidity'],
        bugs: "prone to mealybugs, scale, and spider mites",
        img: 'https://i.imgur.com/9NWEl1K.png',
        id: 26

    },



]

export default plantList