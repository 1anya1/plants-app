# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Disease.create ([
    {
        name: 'Root Rot',
        findThem: 'This is the #1 plant killer and is casused by overwatering. This is a fungal infection that targets the roots of the plant turning it\'s leaves yellow to brown eventually collapsing it. Affected roots will turn soft and brown.',
        treatment: 'Remove the plant from soil to check the roots. Using sharp clean sheers cut off affected roots, treat with fungicide, and repot into new soil.',
        img:'https://i.imgur.com/VsH68v1.png',
    },
    {
        name: 'Leaf Spot',
        findThem: 'This is characterized by brown or black spots on the leaves of the plant that are usually surrounded by yellow halo, eventually kill the leaf. This is caused by overwatering, overcrowded conditions.',
        treatment: 'Stop misting your plant, remove any affected leaves and treat your plant with fungicide.',
        img:'https://i.imgur.com/qmdb9KL.png',
    },
    {
        name: 'Gray Mold',
        findThem: 'Typically you will find this mold anywhere or all over the plant especially in cool and damp conditions.',
        treatment: 'If this happens, water your plant from below, remove affected areas, and treat your plant with fungicide. Water and mist your plant less frequently',
        img:'https://i.imgur.com/AwtKGPT.png',
    },
    {
        name: 'Crown  and Stem Rot',
        findThem: 'The lower part of the plant will be dark, mushy, and rotten and is caused by overwatering and cold conditions.',
        treatment: 'You can try to save your plant by removing the affected areas, treating it with fungicide, and moving it to well vented warm environment.',
        img:'https://i.imgur.com/Bv0wxOE.png',
    },
    {
        name: 'Powdery Mildew',
        findThem: 'This mildew resembles white dust and usually occurs in overcrowded, underwatered plants. It can also be triggered by hot and humid locations.',
        treatment: 'Remove affected leaves from the plant and increase air circulation.',
        img:'https://i.imgur.com/ookSOHA.png',
    },
    {
        name: 'Oedema',
        findThem: 'These are growths on the botom side of the leaf. It is caused by waterlogging, high humidity, and low light.',
        treatment: 'Water your plant less frequently and move it to a brighter spot.',
        img:'https://i.imgur.com/hSb4pWg.png',
    },
    {
        name: 'Sooty Mold',
        findThem: 'This black fungus grows on the waste on insects. This mold blocks light and plant\'s pores.',
        treatment: 'Clean affected parts of the plant with lukewarm cloth and check for insect infestation.',
        img:'https://i.imgur.com/L2NNSUq.png',
    },
    {
        name: 'Viruses',
        findThem: 'Signs include distorted growth, yellow leaves, and white streaks in the flower. Viruses are usually transmitted by insects.',
        treatment: 'There is nothing you can do about it.',
        img:'https://i.imgur.com/v8htwsk.png',
    },
]);
Form.create ([
    {
        date: '2020-02-05',
        title: 'Monstera',
        notes: 'Checked the moisture on the plant. Looks like the soil has dried out, time to water. New leaf growth is coming in, the plant is getting better.',
        img:'https://i.imgur.com/thomyxv.jpg',
    }
])
