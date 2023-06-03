import { writable } from 'svelte/store'

export const CharacterRoster = writable([
    // {
    //     name: 'jNaut1',
    //     class: 'Deathblade',
    //     ilevel: '1560'
    // },
    //     name: 'jNaut2',
    //     class: 'Scrapper',
    //     ilevel: '1513.33'
    // },
    // {
    //     name: 'jNaut3',
    //     class: 'Sorceress',
    //     ilevel: '1493.33'
    // },
    // {
    //     name: 'jNaut4',
    //     class: 'Summoner',
    //     ilevel: '1482.50'
    // },
    // {
    //     name: 'jNaut5',
    //     class: 'Arcanist',
    //     ilevel: '1490'
    // },
    // {
    //     name: 'jNaut6',
    //     class: 'Artist',
    //     ilevel: '1496.66'
    // },
])

export const TaskManager = writable([
    {
        name: 'Chaos Dungeon',
        frequency: 'Daily',
        quantity: 2,
        scope: 'Character',
        minLevel: '302',
        tracked: true
    },
    {
        name: 'Guardian Raid',
        frequency: 'Daily',
        quantity: 2,
        scope: 'Character',
        minLevel: '302',
        tracked: true
    },
    {
        name: 'Dailies',
        frequency: 'Daily',
        quantity: 3,
        scope: 'Character',
        minLevel: '302',
        tracked: true
    },
])