let items = [
        {
          id: 1,
          price: 2191.79,
          name: "AWP Gungnir",
          img: require("@/assets/img/items/1.png"), 
          link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Gungnir%20(Minimal%20Wear)",
          type: "csgo",
          typeOfBg: 1
        },
        {
          id: 2,
          price: 214.02,
          name: "★ Bowie Knife | Crimson Web",
          img: require("@/assets/img/items/2.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/%E2%98%85%20Bowie%20Knife%20%7C%20Crimson%20Web%20(Field-Tested)",
          typeOfBg: 1
        },
        {
          id: 3,
          price: 296.24,
          name: "Souvenir M4A1-S | Nitro",
          img: require("@/assets/img/items/3.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/Souvenir%20M4A1-S%20%7C%20Nitro%20%28Field-Tested%29",
          typeOfBg: 1
        },
        {
          id: 4,
          price: 807.92,
          name: "StatTrak™ AWP | Containment Breach",
          img: require("@/assets/img/items/4.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/StatTrak%E2%84%A2%20AWP%20%7C%20Containment%20Breach%20(Factory%20New)",
          typeOfBg: 1
        },
        {
          id: 5,
          price: 608.85,
          name: "★ StatTrak™ Bayonet | Gamma Doppler",
          img: require("@/assets/img/items/5.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/%E2%98%85%20StatTrak%E2%84%A2%20Bayonet%20%7C%20Gamma%20Doppler%20%28Minimal%20Wear%29",
          typeOfBg: 1
        },
        {
          id: 6,
          price: 600.70,
          name: "Souvenir M4A1-S | Knight",
          img: require("@/assets/img/items/6.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/Souvenir%20M4A1-S%20%7C%20Knight%20%28Minimal%20Wear%29",
          typeOfBg: 1
        },
        {
          id: 7,
          price: 319.27,
          name: "StatTrak™ AWP | Wildfire",
          img: require("@/assets/img/items/7.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/StatTrak%E2%84%A2%20AWP%20%7C%20Wildfire%20(Factory%20New)",
          // typeOfBg: 1
        },
        {
          id: 8,
          price: 1144.56,
          name: "★ StatTrak™ Karambit | Gamma Doppler",
          img: require("@/assets/img/items/8.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/%E2%98%85%20StatTrak%E2%84%A2%20Karambit%20%7C%20Gamma%20Doppler%20(Factory%20New)"
        },
        {
          id: 9,
          price: 1207.50,
          name: "★ StatTrak™ M9 Bayonet | Fade",
          img: require("@/assets/img/items/9.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/%E2%98%85%20StatTrak%E2%84%A2%20M9%20Bayonet%20%7C%20Fade%20%28Factory%20New%29"
        },
        {
          id: 10,
          price: 287.27,
          name: "AWP | BOOM",
          img: require("@/assets/img/items/10.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20BOOM%20(Factory%20New)"
        },
        {
          id: 11,
          price: 635.02,
          name: "AK-47 | Hydroponic",
          img: require("@/assets/img/items/11.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Hydroponic%20%28Field-Tested%29"
        },
        {
          id: 12,
          price: 1009.90,
          name: "StatTrak™ USP-S | Kill Confirmed",
          img: require("@/assets/img/items/12.png"), 
          type: "csgo",
          link: "https://steamcommunity.com/market/listings/730/StatTrak%E2%84%A2%20USP-S%20%7C%20Kill%20Confirmed%20%28Factory%20New%29"
        },
        // {
        //   id: 13,
        //   price: 1850.19 ,
        //   name: "Souvenir M4A1-S | Nitro",
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOlm7-Ehfb6NL7ul2hS7ctlmdbN_Iv9nGu4qgE7Nnf1JoPDdw5tNQvV_FW_l-rrhcXv6p-fnHplvHMh5HrfzRC_gRsYb7Ntm7XAHueE-po5/360fx360f", 
        //   type: "csgo",
        //   link: "https://steamcommunity.com/market/listings/730/Souvenir%20M4A1-S%20%7C%20Nitro%20%28Minimal%20Wear%29"
        // },
        // {
        //   id: 14,
        //   price: 1918.73 ,
        //   name: "★ StatTrak™ Karambit | Lore",
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp9g-7J4bP5iUazrl1rY2DzddPEdwFsYgnSqwPqyey6hZ_qvM6dm3pnunFx4n2LmxTj1x9PcKUx0uHhTF2B/360fx360f", 
        //   type: "csgo",
        //   link: "https://steamcommunity.com/market/listings/730/%E2%98%85%20StatTrak%E2%84%A2%20Karambit%20%7C%20Lore%20%28Minimal%20Wear%29"
        // },
        {
          id: 13,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20The%20Magus%20Cypher%20Bundle",
          price: 199.73,
          img: require("@/assets/img/items/13.png"), 
          name: "Genuine The Magus Cypher Bundle",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 14,
          link: "https://steamcommunity.com/market/listings/570/Heroic%20Fiery%20Soul%20of%20the%20Slayer",
          price: 1374.48,
          img: require("@/assets/img/items/14.png"), 
          name: "Heroic Fiery Soul of the Slayer",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 15,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Demon%20Eater",
          price: 949.99,
          img: require("@/assets/img/items/15.png"), 
          name: "Genuine Demon Eater",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 16,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Tempest%20Helm%20of%20the%20Thundergod%20Bundle",
          price: 31.54,
          img: require("@/assets/img/items/16.png"), 
          name: "Tempest Helm of the Thundergod Bundle",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 17,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Blades%20of%20Voth%20Domosh",
          price: 600.01,
          img: require("@/assets/img/items/17.png"), 
          name: "Genuine Blades of Voth Domosh",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 18,
          link: "https://steamcommunity.com/market/listings/570/Auspicious%20Fractal%20Horns%20of%20Inner%20Abysm",
          price: 409.03,
          img: require("@/assets/img/items/18.png"), 
          name: "Auspicious Fractal Horns of Inner Abysm",
          type: "dota",
          typeOfBg: 1
        },
        {
          id: 19,
          link: "https://steamcommunity.com/market/listings/570/Corrupted%20Rune%20of%20the%20Duelist%20Indomitable",
          price: 227.43,
          img: require("@/assets/img/items/19.png"), 
          name: "Corrupted Rune of the Duelist Indomitable",
          type: "dota",
          // typeOfBg: 1
        },
        {
          id: 20,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Frost%20Avalanche%20Bundle",
          price: 225.01,
          img: require("@/assets/img/items/20.png"), 
          name: "Genuine Frost Avalanche Bundle",
          type: "dota"
        },
        {
          id: 21,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Feast%20of%20Abscession%20Bundle",
          price: 313.46,
          img: require("@/assets/img/items/21.png"), 
          name: "Genuine Feast of Abscession Bundle",
          type: "dota"
        },
        {
          id: 22,
          link: "https://steamcommunity.com/market/listings/570/Genuine%20Swine%20of%20the%20Sunken%20Galley%20Bundle",
          price: 910.70,
          img: require("@/assets/img/items/22.png"), 
          name: "Genuine Swine of the Sunken Galley Bundle",
          type: "dota"
        },
        {
          id: 23,
          link: "https://steamcommunity.com/market/listings/570/Exalted%20Great%20Sage%27s%20Reckoning%20Bundle",
          price: 149.91,
          img: require("@/assets/img/items/23.png"), 
          name: "Exalted Great Sage's Reckoning Bundle",
          type: "dota"
        },
        {
          id: 24,
          link: "https://steamcommunity.com/market/listings/570/Corrupted%20Flockheart%27s%20Gamble",
          price: 42.75,
          img: require("@/assets/img/items/24.png"), 
          name: "Corrupted Flockheart's Gamble",
          type: "dota"
        },
        // {
        //   id: 24,
        //   link: "https://steamcommunity.com/market/listings/570/Cursed%20Small%20Elemental%20Ice",
        //   price: 86.90,
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUmoBVEA0vcRuek1sOcVFF1Jg1WuoWxIgl5g6H3fTxQ69n4zdGKx_T1Z7jVxzwDvsYj3ryX8Yr23AfjrkVuZT_1d9WUdAU8Zg3YqU_-n7nptRu9Bg/360fx360f", 
        //   name: "Cursed Small Elemental Ice",
        //   type: "dota"
        // },
        // {
        //   id: 24,
        //   link: "https://steamcommunity.com/market/listings/570/Prismatic%3A%20Summer%20Warmth",
        //   price: 87.09,
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ7g9UK54h5hxYQXPTSOiixfDfUk9zIEoD4r73fgJmi_HOcGkQv960ltHbwaWia76BzztX7cMl3L_Hpdik3QDi5QMyNKmW83kE/360fx360f", 
        //   name: "Prismatic: Summer Warmth",
        //   type: "dota"
        // },
        {
          id: 25,
          link: "https://steamcommunity.com/market/listings/440/Killstreak%20Macabre%20Web%20Mk.II%20Loose%20Cannon%20%28Minimal%20Wear%29",
          price: 1.32,
          img: require("@/assets/img/items/25.png"), 
          name: "Macabre Web Mk.II Loose Cannon",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 26,
          link: "https://steamcommunity.com/market/listings/440/Unusual%20Festivized%20Seriously%20Snowed%20Sniper%20Rifle%20%28Minimal%20Wear%29",
          price: 244.60,
          img: require("@/assets/img/items/26.png"), 
          name: "Sniper Rifle Unusual Festivized Seriously Snowed",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 27,
          link: "https://steamcommunity.com/market/listings/440/Festivized%20Specialized%20Killstreak%20Tartan%20Torpedo%20Scattergun%20%28Minimal%20Wear%29",
          price: 1.78,
          img: require("@/assets/img/items/27.png"), 
          name: "Festivized Tartan Torpedo Scattergun",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 28,
          link: "https://steamcommunity.com/market/listings/440/Strange%20Killstreak%20Civil%20Servant%20Mk.II%20Revolver%20%28Factory%20New%29",
          price: 5.80,
          img: require("@/assets/img/items/28.png"), 
          name: "Strange Killstreak Civil Servant Mk.II Revolver",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 29,
          link: "https://steamcommunity.com/market/listings/440/Unusual%20HazMat%20Headcase",
          price: 1915.15,
          img: require("@/assets/img/items/29.png"), 
          name: "Unusual HazMat Headcase",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 30,
          link: "https://steamcommunity.com/market/listings/440/Killstreak%20Ghost%20Town%20Scattergun%20%28Minimal%20Wear%29",
          price: 1853.07,
          img: require("@/assets/img/items/30.png"), 
          name: "Ghost Town Scattergun",
          type: "tf2",
          typeOfBg: 1
        },
        {
          id: 31,
          link: "https://steamcommunity.com/market/listings/440/The%20Shooting%20Star",
          price: 7.43,
          img: require("@/assets/img/items/31.png"), 
          name: "The Shooting Star",
          type: "tf2",
          // typeOfBg: 1
        },
        {
          id: 32,
          link: "https://steamcommunity.com/market/listings/440/Genuine%20Sharp%20Dresser",
          price: 11.56,
          img: require("@/assets/img/items/32.png"), 
          name: "Genuine Sharp Dresser",
          type: "tf2"
        },
        {
          id: 33,
          link: "https://steamcommunity.com/market/listings/440/Unusual%20A%20Handsome%20Handy%20Thing",
          price: 24.49,
          img: require("@/assets/img/items/33.png"), 
          name: "Engie's Severed Hand",
          type: "tf2"
        },
        {
          id: 34,
          link: "https://steamcommunity.com/market/listings/440/Genuine%20Buck%20Turner%20All-Stars",
          price: 14.85,
          img: require("@/assets/img/items/34.png"), 
          name: "Genuine Buck Turner All-Stars",
          type: "tf2"
        },
        {
          id: 35,
          link: "https://steamcommunity.com/market/listings/440/Unusual%20Mining%20Light",
          price: 259.99,
          img: require("@/assets/img/items/35.png"), 
          name: "Unusual Mining Light",
          type: "tf2"
        },
        {
          id: 36,
          link: "https://steamcommunity.com/market/listings/440/Unusual%20Lightning%20Rod%20Shotgun%20%28Field-Tested%29",
          price: 541.12,
          img: require("@/assets/img/items/36.png"), 
          name: "Lightning Rod Shotgun",
          type: "tf2"
        },
        // {
        //   id: 36,
        //   link: "https://steamcommunity.com/market/listings/440/Unusual%20Professional%20Killstreak%20Dead%20Reckoner%20Revolver%20%28Well-Worn%29",
        //   price: 268.26,
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMaQkUTxr2vTx8mMnvA-aHAfQ_ktk664MayTdinxVwPffgYQhuZgHPUPUOCaQF4w3tG3N8uZY7A9bipe5ee1--toGUZbUuOY4YH5SCCfCCZlr-7Eg_06BcfcTYoDSvg3pPLrOOog/360fx360f", 
        //   name: "Dead Reckoner Revolver",
        //   type: "tf2"
        // },
        // {
        //   id: 36,
        //   link: "https://steamcommunity.com/market/listings/440/Strange%20Gunslinger",
        //   price: 271.99,
        //   img: "https://community.cloudflare.steamstatic.com/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEMeQkCURLsvz1Rt8TnH_WJRrQFn99itpUGizU4xlItNuXlMTE3JgbGBKEJDvNoolC_UHVj68NnUIb457UB7cjOSco/360fx360f", 
        //   name: "Strange Gunslinger",
        //   type: "tf2"
        // }
]

export default items;