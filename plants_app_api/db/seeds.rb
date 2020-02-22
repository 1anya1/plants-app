# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Disease.create ([
    {
        name: 'Whiteflies',
        findThem: 'Typically you will find whiteflies underside of plant leaves. If you lightly shake the plant you will see the flies fly up',
        treatment: 'Sticky trap is a good way to get rid of whiteflies and to keep them under control. You can also spray the area with water or dunk the plant in luke warm water to get rid of them.',
        img:'https://i.imgur.com/IUdmpLW.png',
    },
    {
        name: 'Fungus Gnats',
        findThem: 'These are tiny little black or brown insects that are not harmful but annoying. These insects can quickly grow in numbers if not kept under controll',
        treatment: 'Allow 1/2 - 1 inch of top soil to dry out before watering your plants. Yellow sticky trap is a good solution to keep these insects at bay. Laying pebbles or sand can prevent the gnats from lying eggs',
        img:'https://i.imgur.com/rJkqKPQ.png',
    },
    {
        name: 'Leaf Miners',
        findThem: 'Look for brown, white or opaque trails on a leaf. Also, leaves that were affected by this bug can display dots on leaves ',
        treatment: 'Best way to get rid is to cut off affected leaves and treat your plant with insecticide.',
        img:'https://i.imgur.com/LscGPYa.png',
    },
    {
        name: 'Thrips',
        findThem: 'Black or brown sap sucking insects usually found on plants that spent time outdoors. Signs of infestasion include dull, molted leaves, silvery white streaks, and distorted growth.',
        treatment: 'Sticky traps can reduce numbers of thrips. Spray your plant with incesticide or biological control to get rid og this pest.',
        img:'https://i.imgur.com/iK0IAIO.png',
    },
    {
        name: 'Spider Mites',
        findThem: 'Look for foliage that has specks and webbing beween the leaves and stems. Spider mites are very small so sometimes examining your plant with magnifying glass can help you see the mites. ',
        treatment: 'First thing quarantine infected plant, then spray the plant with insecticide to controll the population. ',
        img:'https://i.imgur.com/NoxGr5d.png',
    },
    {
        name: 'Aphids',
        findThem: 'They can be green, black, grey, or orange. Aphids suck sap which then colonizes sooty mold. They can also spread viruses.',
        treatment: 'Yellow sticky trap and water spray works well to get rid of this pest.',
        img:'https://i.imgur.com/Tb06kaO.png',
    },
    {
        name: 'Scale Insects',
        findThem: 'These insects look like brown lups on the stem of the plant. The aslso secreat sticky sap which can lead to sooty mold. If not controlled your plant will weaken and the leaves will turn yellow.',
        treatment: 'Rub them off or use insecticide otr biological control.',
        img:'https://i.imgur.com/PrspHvw.png',
    },
    {
        name: 'Mealybugs',
        findThem: 'White, slow moving insects usually form in a cluster. An infestation can lead to yellowing of leaves, leaf fall, and wilting.',
        treatment: 'Rub insects off with damp cloth soaked in insecticide or try to spray the plant with incesticide weekly. It is very hard to get rid of this bug and best solution at times id to disgard the plant.',
        img:'https://i.imgur.com/5PIBIzs.png',
    },
])