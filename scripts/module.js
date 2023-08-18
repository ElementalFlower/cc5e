Hooks.on("init", () => {

    /* -------------------------------------------- */

    /**
     * General weapon categories.
     * @enum {string}
     */
    CONFIG.DND5E.weaponProficiencies = {
      sim: "DND5E.WeaponSimpleProficiency",
      mar: "DND5E.WeaponMartialProficiency"
    };

    /**
     * A mapping between `DND5E.weaponTypes` and `DND5E.weaponProficiencies` that
     * is used to determine if character has proficiency when adding an item.
     * @enum {(boolean|string)}
     */
    CONFIG.DND5E.weaponProficienciesMap = {
      natural: true,
      simpleM: "sim",
      simpleR: "sim",
      martialM: "mar",
      martialR: "mar"
    };

    /**
     * The basic weapon types in 5e, changed to fit the weapons from my edited version of
     * Weapons, Remastered, Revised. This enables specific weapon proficiencies or
     * starting equipment provided by classes and backgrounds.
     * @enum {string}
     */ 
    CONFIG.DND5E.weaponIds = {
      armingsword: "cc5e.equipment.L6fCHfzsGPmiapas",
      atlatl: "cc5e.equipment.ogkFjJfIMXoajAFr",
      bastardsword: "cc5e.equipment.IVf31SEwm7gXtetr",
      battleaxe: "cc5e.equipment.JuSxHzN4U43V1P42",
      blowgun: "cc5e.equipment.ZaVzJ7SJMd57vQ8w",
      boarspear: "cc5e.equipment.FaY4rqaYRJubMxMA",
      boomerang: "cc5e.equipment.cDFsAtpNMLbnJzCg",
      cestus: "cc5e.equipment.MCTM4vtV0EBm7HqF",
      chainwhip: "cc5e.equipment.bXiFuLwH5VF1wBYi",
      club: "cc5e.equipment.EOM0ME5n902pqLzm",
      dagger: "cc5e.equipment.GJPK4rHw91XXgcMl",
      dart: "cc5e.equipment.PZJkUUk294VkTBek",
      estoc: "cc5e.equipment.taCK4pwPEQTcTY2m",
      flail: "cc5e.equipment.quPVpSh9UklhppbL",
      garrotewire: "cc5e.equipment.mTXSlUTmzpQRoZb7",
      gauntletsword: "cc5e.equipment.VXR1IttK9uSMBcaz",
      glaive: "cc5e.equipment.GPQn9tPA5QAZhXNo",
      goedendag: "cc5e.equipment.90UTY6F3dSyAyyzC",
      greatbow: "cc5e.equipment.L4OVx90WefLJB0sE",
      greataxe: "cc5e.equipment.pXKOcZitpZvz67HN",
      greatclub: "cc5e.equipment.nAPIJDAEr88cs986",
      greatsword: "cc5e.equipment.H8mYuNjwyGIElUha",
      guisarme: "cc5e.equipment.iR89kr2eEbQ2YFjQ",
      halberd: "cc5e.equipment.zE4YpKSRgpaanNaP",
      handaxe: "cc5e.equipment.g7Sp5bzquNPYZ6j1",
      handcrossbow: "cc5e.equipment.1NnPDdPbJhNKr8at",
      harpoon: "cc5e.equipment.7OW6A0xi7rlYgQ5g",
      heavycrossbow: "cc5e.equipment.h6ABX6AZveLUHzic",
      hooksword: "cc5e.equipment.5YxzfcZjIKUR2NVi",
      javelin: "cc5e.equipment.X4xLAdhWFGlBfQ1V",
      khopesh: "cc5e.equipment.Bot3XR0jun17U5SV",
      lance: "cc5e.equipment.MOsEOapREedXNRYa",
      lightcrossbow: "cc5e.equipment.SHVSvUN7QfhRvLMI",
      lighthammer: "cc5e.equipment.UZ14QqFeMVaPzY5V",
      longbow: "cc5e.equipment.SO8qbqibK8Tzc9dy",
      longsword: "cc5e.equipment.lbCKpWHvPL2KYbsL",
      lucerne: "cc5e.equipment.CCYK2BkHahav62dt",
      mace: "cc5e.equipment.l6VjmbCDB7WJ2IGj",
      maul: "cc5e.equipment.TsR8mNnksKRh65YE",
      morningstar: "cc5e.equipment.uOQR3xKv6TnmlJLj",
      net: "cc5e.equipment.8Xkod9BksfYPiobh",
      parryingdagger: "cc5e.equipment.yj3Cz2DnxaKBaVZz",
      peasantflail: "cc5e.equipment.A4mOZgMfhMnQrleb",
      pike: "cc5e.equipment.rbI7PpZPrR1E2LEp",
      pistol: "cc5e.equipment.qzsBKciLslcIivFA",
      pistolrepeating: "cc5e.equipment.WgXZ4p3XVVIb58nn",
      poleaxe: "cc5e.equipment.arzCA6pY7vsP9eae",
      quarterstaff: "cc5e.equipment.Z5wutEDqZek6shmo",
      ranseur: "cc5e.equipment.0GX2o4HXoHQd1nTH",
      rapier: "cc5e.equipment.39TYXjcelN8itN7p",
      recurvebow: "cc5e.equipment.zWRtbjhCdED91egE",
      rifle: "cc5e.equipment.XY6lye4WHuHBT1Ut",
      riflerepeating: "cc5e.equipment.LzEaW6lrmnjmXxTK",
      rondel: "cc5e.equipment.rvm3f7afdwCeZ8fJ",
      sabre: "cc5e.equipment.Mi4SUOKiJfOJDalq",
      scimitar: "cc5e.equipment.4ImEU4JzMjzKdYdM",
      shortbow: "cc5e.equipment.Igvks1Q5PuV0YFIP",
      shortspear: "cc5e.equipment.WkH9XTxBSc2qznNs",
      shortsword: "cc5e.equipment.bIiXzleamQSMHBoM",
      shotel: "cc5e.equipment.mNuruEWpKTHfDD3V",
      sickle: "cc5e.equipment.Dfyk1rrk5arRCMw3",
      sling: "cc5e.equipment.kzYhCfSczkQUrTFj",
      spear: "cc5e.equipment.E2kr7RNAocMrpwZO",
      staffsling: "cc5e.equipment.HWvabRntxn0YFDH5",
      trident: "cc5e.equipment.3NhsEubMBaJxuEKl",
      unarmedstrike: "cc5e.equipment.kz9rnYFf1Wx1jZtK",
      warpick: "cc5e.equipment.ajBbJjqEvYqoMiz4",
      warhammer: "cc5e.equipment.CVwxPdIJX9lVHBGa",
      whip: "cc5e.equipment.V7Ntd5zlivVDrdcB"
    };

    /* -------------------------------------------- */

    /**
     * The basic tool types in 5e. This enables specific tool proficiencies or
     * starting equipment provided by classes and backgrounds. Modified to fit modifications made.
     * @enum {string}
     */
    CONFIG.DND5E.toolIds = {
      alchemist: "SztwZhbhZeCqyAes",
      bagpipes: "yxHi57T5mmVt0oDr",
      brewer: "Y9S75go1hLMXUD48",
      calligrapher: "jhjo20QoiD5exf09",
      card: "YwlHI3BVJapz4a3E",
      carpenter: "8NS6MSOdXtUqD7Ib",
      cartographer: "fC0lFK8P4RuhpfaU",
      chess: "23y8FvWKf9YLcnBL",
      cobbler: "hM84pZnpCqKfi8XH",
      cook: "Gflnp29aEv5Lc1ZM",
      dice: "iBuTM09KD9IoM5L8",
      disg: "IBhDAr7WkhWPYLVn",
      drum: "69Dpr25pf4BjkHKb",
      dulcimer: "NtdDkjmpdIMiX7I2",
      engineer: "cc5e.equipment.QDsiVsSqp0eKn80Z",
      flute: "eJOrPcAz9EcquyRQ",
      forg: "cG3m4YlHfbQlLEOx",
      glassblower: "rTbVrNcwApnuTz5E",
      gunsmith: "cc5e.equipment.IA5ch7Nc60GYFZYP",
      herb: "i89okN7GFTWHsvPy",
      horn: "aa9KuBy4dst7WIW9",
      jeweler: "YfBwELTgPFHmQdHh",
      leatherworker: "PUMfwyVUbtyxgYbD",
      lute: "qBydtUUIkv520DT7",
      lyre: "EwG1EtmbgR3bM68U",
      mason: "skUih6tBvcBbORzA",
      navg: "YHCmjsiXxZ9UdUhU",
      painter: "ccm5xlWhx74d6lsK",
      panflute: "G5m5gYIx9VAUWC3J",
      pois: "il2GNi8C0DvGLL9P",
      potter: "hJS8yEVkqgJjwfWa",
      shawm: "G3cqbejJpfB91VhP",
      smith: "KndVe2insuctjIaj",
      thief: "woWZ1sO5IUVGzo58",
      tinker: "0d08g1i5WXnNrCNA",
      viol: "baoe3U5BfMMMxhCU",
      weaver: "ap9prThUB2y9lDyj",
      woodcarver: "xKErqkLo4ASYr5EP"
    };

    /* -------------------------------------------- */
    /**
     * Specific equipment types that modify base AC.
     * @enum {string}
     */
    CONFIG.DND5E.armorTypes = {
      light: "DND5E.EquipmentLight",
      medium: "DND5E.EquipmentMedium",
      heavy: "DND5E.EquipmentHeavy",
      natural: "DND5E.EquipmentNatural",
      shield: "DND5E.EquipmentShield",
      exshield: "WRR5E.EquipmentShieldExotic"
    };

    /* -------------------------------------------- */

    /**
     * The basic armor types in 5e, changed to fit the armor from my edited version of
     * Weapons, Remastered, Revised. This enables specific armor proficiencies,
     * automated AC calculation in NPCs, and starting equipment.
     * @enum {string}
     */
    CONFIG.DND5E.armorIds = {
      breastplate: "cc5e.equipment.AauGr4gUl6vlASMs",
      brigandine: "cc5e.equipment.UA0gvVhzYnGrlXxr",
      buckler: "cc5e.equipment.XvWJhkjYQa12Co7N",
      duelingshield: "cc5e.equipment.puwisg53wVVM6fjJ",
      cuirass: "cc5e.equipment.wYwFUX7j1RFGKNer",
      fullplate: "cc5e.equipment.n39DGSAtO3dxT1QV",
      gambeson: "cc5e.equipment.ZMatJREi9wgpdKLl",
      halfplate: "cc5e.equipment.X91ZpK8D9gH4Hppy",
      hauberk: "cc5e.equipment.tRGMHyit9JeOcrPY",
      hidearmor: "cc5e.equipment.0FOHREa0BxdlS9Ib",
      jackchains: "cc5e.equipment.oi1cVPgNhrWCgFBB",
      leatherarmor: "cc5e.equipment.KARkRev9HLQ3ITJ5",
      lanternshield: "cc5e.equipment.4dHHGBINwXX4uyRJ",
      pavise: "cc5e.equipment.3Zhqddchenq7uMO6",
      scalemail: "cc5e.equipment.yYsyTU64mMJlA9N4",
      splint: "cc5e.equipment.NjjRDRiH4FJKAnGa",
      shield: "cc5e.equipment.gzs8Z8Pm24JbZlkc",
      towershield: "cc5e.equipment.0KMDHBWy5lxd5VCX"
    };

    /**
     * The shields from my edited version of Weapons, Remastered, Revised.
     * This enables specific shield proficiencies,
     * automated AC calculation in NPCs, and starting equipment.
     * Shields are bundled in with armor, leave blank in order to avoid breaking.
     * @enum {string}
     */
    CONFIG.DND5E.shieldIds = {
      
    };

    /* -------------------------------------------- */
    
    /**
     * The set of types which a weapon item can take.
     * @enum {string}
     */
    CONFIG.DND5E.weaponTypes = {
      simpleM: "DND5E.WeaponSimpleM",
      simpleR: "DND5E.WeaponSimpleR",
      martialM: "DND5E.WeaponMartialM",
      martialR: "DND5E.WeaponMartialR",
      exoticM: "WRR5E.WeaponExoticM",
      exoticR: "WRR5E.WeaponExoticR",
      natural: "DND5E.WeaponNatural",
      improv: "DND5E.WeaponImprov",
      siege: "DND5E.WeaponSiege"
    };

    /* -------------------------------------------- */

    /**
    * The set of weapon property flags which can exist on a weapon.
     * @enum {string}
     */
    CONFIG.DND5E.weaponProperties = {
      amm: "WRR5E.WeaponPropertiesAmm",
      byp: "WRR5E.WeaponPropertiesByp",
      cav: "WRR5E.WeaponPropertiesCav",
      ens: "WRR5E.WeaponPropertiesEns",
      fin: "WRR5E.WeaponPropertiesFin",
      fii: "WRR5E.WeaponPropertiesFii",
      foc: "WRR5E.WeaponPropertiesFoc",
      gpr: "WRR5E.WeaponPropertiesGpr",
      hvy: "WRR5E.WeaponPropertiesHvy",
      lgt: "WRR5E.WeaponPropertiesLgt",
      lod: "WRR5E.WeaponPropertiesLod",
      mgc: "WRR5E.WeaponPropertiesMgc",
      non: "WRR5E.WeaponPropertiesNon",
      par: "WRR5E.WeaponPropertiesPar",
      prn: "WRR5E.WeaponPropertiesPrn",
      rch: "WRR5E.WeaponPropertiesRch",
      rel: "WRR5E.WeaponPropertiesRel",
      ret: "WRR5E.WeaponPropertiesRet",
      sil: "WRR5E.WeaponPropertiesSil",
      spc: "WRR5E.WeaponPropertiesSpc",
      sta: "WRR5E.WeaponPropertiesSta",
      sts: "WRR5E.WeaponPropertiesSts",
      stb: "WRR5E.WeaponPropertiesStb",
      stp: "WRR5E.WeaponPropertiesStp",
      sun: "WRR5E.WeaponPropertiesSun",
      swp: "WRR5E.WeaponPropertiesSwp",
      thr: "WRR5E.WeaponPropertiesThr",
      two: "WRR5E.WeaponPropertiesTwo",
      ver: "WRR5E.WeaponPropertiesVer",
      wnd: "WRR5E.WeaponPropertiesWnd",
      wng: "WRR5E.WeaponPropertiesWng"
    };

    /**
     * Compendium packs used for localized items.
     * @enum {string}
     */
    DND5E.sourcePacks = {
      ITEMS: "cc5e.equipment"
    };

});

Hooks.on("ready", () => {

    // add onto the feature list as demonstrated in the SRD classes 
    // the syntax is: Compendium.{pack_key}.{pack_name}.{item.id}
    // for items held in the Custom Compendium pack use "Compendium.cc5e.class-classfeatures.ID_here"
    CONFIG.DND5E.classFeatures = {
        "barbarian": {
            "subclasses": {
                "path-of-the-ancestral-guardian": {
                    "label": "Path of the Ancestral Guardian",
                    "source": "XGE pg. 9",
                    "features": {
                        
                    }
                },
                "path-of-the-battlerager": {
                    "label": "Path of the Battlerager",
                    "source": "SCAG pg. 121",
                    "features": {
                        
                    }
                },
                "path-of-the-berserker": {
                    "label": "Path of the Berserker",
                    "source": "PHB pg. 49",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.CkbbAckeCtyHXEnL"],
                        "6": ["Compendium.dnd5e.classfeatures.0Jgf8fYY2ExwgQpN"],
                        "10": ["Compendium.dnd5e.classfeatures.M6VSMzVtKPhh8B0i"],
                        "14": ["Compendium.dnd5e.classfeatures.xzD9zlRP6dUxCtCl"]
                    }
                },
                "path-of-the-juggernaut": {
                    "label": "Path of the Juggernaut",
                    "source": "TCS pg. 102",
                    "features": {
                        
                    }
                },
                "path-of-the-storm-herald": {
                    "label": "Path of the Storm Herald",
                    "source": "XGE pg. 10",
                    "features": {
                        
                    }
                },
                "path-of-the-totem-warrior": {
                    "label": "Path of the Totem Warrior",
                    "source": "PHB pg. 50; SCAG pg. 121",
                    "features": {
                        
                    }
                },
                "path-of-the-zealot": {
                    "label": "Path of the Zealot",
                    "source": "XGE pg. 11",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.VoR0SUrNX5EJVPIO", "Compendium.dnd5e.classfeatures.SZbsNbaxFFGwBpNK"],
                "2": ["Compendium.dnd5e.classfeatures.SCVjqRdlZ9cvHVSR", "Compendium.dnd5e.classfeatures.vt31lWAULygEl7yk"],
                "3": ["Compendium.dnd5e.classfeatures.TH1QAf6YNGSeBVjT"],
                "5": ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo", "Compendium.dnd5e.classfeatures.Kl6zifJ5OmdHlOi2"],
                "7": ["Compendium.dnd5e.classfeatures.NlXslw4yAqmKZWtN"],
                "9": ["Compendium.dnd5e.classfeatures.L94gyvNpUhUe0rwh"],
                "11": ["Compendium.dnd5e.classfeatures.FqfmbPgxiyrWzhYk"],
                "15": ["Compendium.dnd5e.classfeatures.l8tUhZ5Pecm9wz7I"],
                "18": ["Compendium.dnd5e.classfeatures.Q1exex5ALteprrPo"],
                "20": ["Compendium.dnd5e.classfeatures.jVU4AgqfrFaqgXns"]
            }
        },
        "bard": {
            "subclasses": {
                "college-of-glamour": {
                    "label": "College of Glamour",
                    "source": "XGE pg. 14",
                    "features": {
                        
                    }
                },
                "college-of-lore": {
                    "label": "College of Lore",
                    "source": "PHB pg. 54",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.5zPmHPQUne7RDfaU"],
                        "6": ["Compendium.dnd5e.classfeatures.myBu3zi5eYvQIcuy"],
                        "14": ["Compendium.dnd5e.classfeatures.pquwueEMweRhiWaq"]
                    }
                },
                "college-of-swords": {
                    "label": "College of Swords",
                    "source": "XGE pg. 15",
                    "features": {
                        
                    }
                },
                "college-of-valor": {
                    "label": "College of Valor",
                    "source": "PHB pg. 55",
                    "features": {
                        
                    }
                },
                "college-of-whispers": {
                    "label": "College of Whispers",
                    "source": "XGE pg. 16",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.hpLNiGq7y67d2EHA", "Compendium.dnd5e.classfeatures.u4NLajXETJhJU31v"],
                "2": ["Compendium.dnd5e.classfeatures.ezWijmCnlnQ9ZRX2", "Compendium.dnd5e.classfeatures.he8RpPXwSl2lVSIk"],
                "3": ["Compendium.dnd5e.classfeatures.ILhzFHiRrqgQ9dFJ", "Compendium.dnd5e.classfeatures.aQLg7BWdRnm4Hr9S"],
                "5": ["Compendium.dnd5e.classfeatures.3VDZGs5Ug3hIE322"],
                "6": ["Compendium.dnd5e.classfeatures.SEJmsjkEhdAZ90ki"],
                "10": ["Compendium.dnd5e.classfeatures.aonJ2YjkqkYB9WYB"],
                "20": ["Compendium.dnd5e.classfeatures.GBYN5rH4nh1ocRlY"]
            }
        },
        "cleric": {
            "subclasses": {
                "ambition-domain": {
                    "label": "Ambition Domain",
                    "source": "PS:A pg. 27",
                    "features": {
                        
                    }
                },
                "arcana-domain": {
                    "label": "Arcana Domain",
                    "source": "SCAG pg. 125",
                    "features": {
                        
                    }
                },
                "blood-domain": {
                    "label": "Blood Domain",
                    "source": "TCS pg. 101",
                    "features": {
                        
                    }
                },
                "death-domain": {
                    "label": "Death Domain",
                    "source": "DMG pg. 96",
                    "features": {
                        
                    }
                },
                "forge-domain": {
                    "label": "Forge Domain",
                    "source": "XGE pg. 18",
                    "features": {
                        
                    }
                },
                "grave-domain": {
                    "label": "Grave Domain",
                    "source": "XGE pg. 19",
                    "features": {
                        
                    }
                },
                "knowledge-domain": {
                    "label": "Knowledge Domain",
                    "source": "PHB pg. 59",
                    "features": {
                        
                    }
                },
                "life-domain": {
                    "label": "Life Domain",
                    "source": "PHB pg. 60",
                    "features": {
                        "1": ["Compendium.dnd5e.classfeatures.68bYIOvx6rIqnlOW", "Compendium.dnd5e.classfeatures.jF8AFfEMICIJnAkR", "Compendium.dnd5e.spells.8dzaICjGy6mTUaUr", "Compendium.dnd5e.spells.uUWb1wZgtMou0TVP"],
                        "2": ["Compendium.dnd5e.classfeatures.hEymt45rICi4f9eL"],
                        "3": ["Compendium.dnd5e.spells.F0GsG0SJzsIOacwV", "Compendium.dnd5e.spells.JbxsYXxSOTZbf9I0"],
                        "5": ["Compendium.dnd5e.spells.ZU9d6woBdUP8pIPt", "Compendium.dnd5e.spells.LmRHHMtplpxr9fX6"],
                        "6": ["Compendium.dnd5e.classfeatures.yv49QN6Bzqs0ecCs"],
                        "7": ["Compendium.dnd5e.spells.VtCXMdyM6mAdIJZb", "Compendium.dnd5e.spells.TgHsuhNasPbhu8MO"],
                        "8": ["Compendium.dnd5e.classfeatures.T6u5z8ZTX6UftXqE"],
                        "9": ["Compendium.dnd5e.spells.Pyzmm8R7rVsNAPsd", "Compendium.dnd5e.spells.AGFMPAmuzwWO6Dfz"],
                        "17": ["Compendium.dnd5e.classfeatures.4UOgxzr83vFuUash"]
                    }
                },
                "light-domain": {
                    "label": "Light Domain",
                    "source": "PHB pg. 60",
                    "features": {
                        
                    }
                },
                "nature-domain": {
                    "label": "Nature Domain",
                    "source": "PHB pg. 61",
                    "features": {
                        
                    }
                },
                "order-domain": {
                    "label": "Order Domain",
                    "source": "GGR pg. 25",
                    "features": {
                        
                    }
                },
                "solidarity-domain": {
                    "label": "Solidarity Domain",
                    "source": "PS:A pg. 24",
                    "features": {
                        
                    }
                },
                "strength-domain": {
                    "label": "Strength Domain",
                    "source": "PS:A pg. 25",
                    "features": {
                        
                    }
                },
                "tempest-domain": {
                    "label": "Tempest Domain",
                    "source": "PHB pg. 62",
                    "features": {
                        
                    }
                },
                "trickery-domain": {
                    "label": "Trickery Domain",
                    "source": "PHB pg. 62",
                    "features": {
                        
                    }
                },
                "war-domain": {
                    "label": "War Domain",
                    "source": "PHB pg. 63",
                    "features": {
                        
                    }
                },
                "zeal-domain": {
                    "label": "Zeal Domain",
                    "source": "PS:A pg. 28",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.x637K2Icp2ZFM1TB", "Compendium.dnd5e.classfeatures.v4gKwLhAq9vuqza7"],
                "2": ["Compendium.dnd5e.classfeatures.YpiLQEKGalROn7iJ"],
                "5": ["Compendium.dnd5e.classfeatures.NMy4piwXIpLjYbRE"],
                "10": ["Compendium.dnd5e.classfeatures.eVXqHn0ojWrEuYGU"]
            },
        },
        "druid": {
            "subclasses": {
                "circle-of-dreams": {
                    "label": "Circle of Dreams",
                    "source": "XGE pg. 22",
                    "features": {
                        
                    }
                },
                "circle-of-the-land": {
                    "label": "Circle of the Land",
                    "source": "PHB pg. 68",
                    "features": {
                        "2": ["Compendium.dnd5e.classfeatures.lT8GsPOPgRzDC3QJ", "Compendium.dnd5e.classfeatures.wKdRtFsvGfMKQHLY"],
                        "3": ["Compendium.dnd5e.classfeatures.YiK59gWSlcQ6Mbdz"],
                        "6": ["Compendium.dnd5e.classfeatures.3FB25qKxmkmxcxuC"],
                        "10": ["Compendium.dnd5e.classfeatures.OTvrJSJSUgAwXrWX"],
                        "14": ["Compendium.dnd5e.classfeatures.EuX1kJNIw1F68yus"]
                    }
                },
                "circle-of-the-moon": {
                    "label": "Circle of the Moon",
                    "source": "PHB pg. 69",
                    "features": {
                        
                    }
                },
                "circle-of-the-shepherd": {
                    "label": "Circle of the Shepherd",
                    "source": "XGE pg. 23",
                    "features": {
                        
                    }
                },
                "circle-of-spores": {
                    "label": "Circle of Spores",
                    "source": "GGR pg. 26",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.LzJ5ayHt0OlSVGxi", "Compendium.dnd5e.classfeatures.i6tPm3FNK13Ftc9v"],
                "2": ["Compendium.dnd5e.classfeatures.swK0r5TOIxredxWS", "Compendium.dnd5e.classfeatures.u6Du2P9s81SWuGbi"],
                "18": ["Compendium.dnd5e.classfeatures.cVDEQo0ow1WJT7Wl", "Compendium.dnd5e.classfeatures.xvgPu1O57DgXCM86"],
                "20": ["Compendium.dnd5e.classfeatures.ip4bvmGoz3qkoqes"]
            },
        },
        "fighter": {
            "subclasses": {
                "arcane-archer": {
                    "label": "Arcane Archer",
                    "source": "XGE pg. 28",
                    "features": {
                        
                    }
                },
                "banneret": {
                    "label": "Banneret",
                    "source": "SCAG pg. 128",
                    "features": {
                        
                    }
                },
                "battle-master": {
                    "label": "Battle Master",
                    "source": "PHB pg. 73",
                    "features": {
                        
                    }
                },
                "cavalier": {
                    "label": "Cavalier",
                    "source": "XGE pg. 30",
                    "features": {
                        
                    }
                },
                "champion": {
                    "label": "Champion",
                    "source": "PHB pg. 72",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.YgLQV1O849wE5TgM"],
                        "7": ["Compendium.dnd5e.classfeatures.dHu1yzIjD38BvGGd"],
                        "11": ["Compendium.dnd5e.classfeatures.kYJsED0rqqqUcgKz"],
                        "15": ["Compendium.dnd5e.classfeatures.aVKH6TLn1AG9hPSA"],
                        "18": ["Compendium.dnd5e.classfeatures.ipG5yx1tRNmeJfSH"]
                    }
                },
                "echo-knight": {
                    "label": "Echo Knight",
                    "source": "EGW pg. 183",
                    "features": {
                        
                    }
                },
                "eldritch-knight": {
                    "label": "Eldritch Knight",
                    "source": "PHB pg. 74",
                    "features": {
                        
                    }
                },
                "samurai": {
                    "label": "Samurai",
                    "source": "XGE pg. 31",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c", "Compendium.dnd5e.classfeatures.nTjmWbyHweXuIqwc"],
                "2": ["Compendium.dnd5e.classfeatures.xF1VTcJ3AdkbTsdQ"],
                "3": ["Compendium.dnd5e.classfeatures.ax8M0X0q1GGWM26j"],
                "5": ["Compendium.dnd5e.classfeatures.q9g1MLXuLZyxjQMg"],
                "9": ["Compendium.dnd5e.classfeatures.653ZHbNcmm7ZGXbw"]
            },
        },
        "monk": {
            "subclasses": {
                "way-of-the-cobalt-soul": {
                    "label": "Way of the Cobalt Soul",
                    "source": "TCS pg. 104",
                    "features": {
                        
                    }
                },
                "way-of-the-drunken-master": {
                    "label": "Way of the Drunken Master",
                    "source": "XGE pg. 33",
                    "features": {
                        
                    }
                },
                "way-of-the-elements": {
                    "label": "Way of the Four Elements",
                    "source": "PHB pg. 80",
                    "features": {
                        
                    }
                },
                "way-of-the-kensei": {
                    "label": "Way of the Kensei",
                    "source": "XGE pg. 34",
                    "features": {
                        
                    }
                },
                "way-of-the-long-death": {
                    "label": "Way of the Long Death",
                    "source": "SCAG pg. 130",
                    "features": {
                        
                    }
                },
                "way-of-the-open-hand": {
                    "label": "Way of the Open Hand",
                    "source": "PHB pg. 79",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.iQxLNydNLlCHNKbp"],
                        "6": ["Compendium.dnd5e.classfeatures.Q7mOdk4b1lgjcptF"],
                        "11": ["Compendium.dnd5e.classfeatures.rBDZLatuoolT2FUW"],
                        "17": ["Compendium.dnd5e.classfeatures.h1gM8SH3BNRtFevE"]
                    }
                },
                "way-of-the-shadow": {
                    "label": "Way of Shadow",
                    "source": "PHB pg. 80",
                    "features": {
                        
                    }
                },
                "way-of-the-sun-soul": {
                    "label": "Way of the Sun Soul",
                    "source": "XGE pg. 35; SCAG pg. 131",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.UAvV7N7T4zJhxdfI", "Compendium.dnd5e.classfeatures.l50hjTxO2r0iecKw"],
                "2": ["Compendium.dnd5e.classfeatures.10b6z2W1txNkrGP7", "Compendium.dnd5e.classfeatures.7vSrGc0MP5Vzm9Ac"],
                "3": ["Compendium.dnd5e.classfeatures.rtpQdX77dYWbDIOH", "Compendium.dnd5e.classfeatures.mzweVbnsJPQiVkAe"],
                "4": ["Compendium.dnd5e.classfeatures.KQz9bqxVkXjDl8gK"],
                "5": ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo", "Compendium.dnd5e.classfeatures.pvRc6GAu1ok6zihC"],
                "6": ["Compendium.dnd5e.classfeatures.7flZKruSSu6dHg6D"],
                "7": ["Compendium.dnd5e.classfeatures.a4P4DNMmH8CqSNkC", "Compendium.dnd5e.classfeatures.ZmC31XKS4YNENnoc"],
                "10": ["Compendium.dnd5e.classfeatures.bqWA7t9pDELbNRkp"],
                "13": ["Compendium.dnd5e.classfeatures.XjuGBeB8Y0C3A5D4"],
                "14": ["Compendium.dnd5e.classfeatures.7D2EkLdISwShEDlN"],
                "15": ["Compendium.dnd5e.classfeatures.gDH8PMrKvLHaNmEI"],
                "18": ["Compendium.dnd5e.classfeatures.3jwFt3hSqDswBlOH"],
                "20": ["Compendium.dnd5e.classfeatures.mQNPg89YIs7g5tG4"]
            },
        },
        "paladin": {
            "subclasses": {
                "oath-of-the-ancients": {
                    "label": "Oath of the Ancients",
                    "source": "PHB pg. 86",
                    "features": {
                        
                    }
                },
                "oath-of-conquest": {
                    "label": "Oath of Conquest",
                    "source": "SCAG pg. 128",
                    "features": {
                        
                    }
                },
                "oath-of-the-crown": {
                    "label": "Oath of the Crown",
                    "source": "SCAG pg. 132",
                    "features": {
                        
                    }
                },
                "oath-of-devotion": {
                    "label": "Oath of Devotion",
                    "source": "PHB pg. 85",
                    "features": {
                        "3": ["Compendium.dnd5e.spells.xmDBqZhRVrtLP8h2", "Compendium.dnd5e.spells.gvdA9nPuWLck4tBl"],
                        "5": ["Compendium.dnd5e.spells.F0GsG0SJzsIOacwV", "Compendium.dnd5e.spells.CylBa7jR8DSbo8Z3"],
                        "9": ["Compendium.dnd5e.spells.ZU9d6woBdUP8pIPt", "Compendium.dnd5e.spells.15Fa6q1nH27XfbR8"],
                        "13": ["Compendium.dnd5e.spells.da0a1t2FqaTjRZGT", "Compendium.dnd5e.spells.TgHsuhNasPbhu8MO"],
                        "17": ["Compendium.dnd5e.spells.d54VDyFulD9xxY7J", "Compendium.dnd5e.spells.5e1xTohkzqFqbYH4"]
                    }
                },
                "oathbreaker": {
                    "label": "Oathbreaker",
                    "source": "DMG pg. 97",
                    "features": {
                        
                    }
                },
                "oath-of-redemption": {
                    "label": "Oath of Redemption",
                    "source": "XGE pg. 38",
                    "features": {
                        
                    }
                },
                "oath-of-vengeance": {
                    "label": "Oath of Vengeance",
                    "source": "PHB pg. 87",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.E8ozg8avUVOX9N7u", "Compendium.dnd5e.classfeatures.OdrvL3afwLOPeuYZ"],
                "2": ["Compendium.dnd5e.classfeatures.ySMPQ6zNSlvkrl2f", "Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c", "Compendium.dnd5e.classfeatures.ihoQHsmVZlyDbPhX"],
                "3": ["Compendium.dnd5e.classfeatures.dY9yrqkyEDuF0CG2", "Compendium.dnd5e.classfeatures.olAqNsUTIef9x8xC"],
                "5": ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo"],
                "6": ["Compendium.dnd5e.classfeatures.carGDhkIdoduTC0I"],
                "10": ["Compendium.dnd5e.classfeatures.nahSkBO6LH4HkpaT"],
                "11": ["Compendium.dnd5e.classfeatures.FAk41RPCTcvCk6KI"],
                "14": ["Compendium.dnd5e.classfeatures.U7BIPVPsptBmwsnV"]
            },
        },
        "ranger": {
            "subclasses": {
                "beast-master": {
                    "label": "Beast Master",
                    "source": "PHB pg. 93",
                    "features": {
                        
                    }
                },
                "gloom-stalker": {
                    "label": "Gloom Stalker",
                    "source": "XGE pg. 41",
                    "features": {
                        
                    }
                },
                "horizon-walker": {
                    "label": "Horizon Walker",
                    "source": "XGE pg. 42",
                    "features": {
                        
                    }
                },
                "hunter": {
                    "label": "Hunter",
                    "source": "PHB pg. 93",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.wrxIW5sDfmGr3u5s"],
                        "7": ["Compendium.dnd5e.classfeatures.WgQrqjmeyMqDzVt3"],
                        "11": ["Compendium.dnd5e.classfeatures.7zlTRRXT1vWSBGjX"],
                        "15": ["Compendium.dnd5e.classfeatures.a0Sq88dgnREcIMfl"]
                    }
                },
                "monster-slayer": {
                    "label": "Monster Slayer",
                    "source": "XGE pg. 43",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.4Vpj9vCOB37GtXk6", "Compendium.dnd5e.classfeatures.8fbZt2Qh7ZttwIan"],
                "2": ["Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c", "Compendium.dnd5e.classfeatures.u6xV3Ki3TXRrD7zg"],
                "3": ["Compendium.dnd5e.classfeatures.1dJHU48yNqn3lcfx", "Compendium.dnd5e.classfeatures.kaHcUGiwi8AtfZIm"],
                "5": ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo"],
                "8": ["Compendium.dnd5e.classfeatures.C5fzaOBc6HxyOWRn"],
                "10": ["Compendium.dnd5e.classfeatures.r0unvWK0lPsDthDx"],
                "14": ["Compendium.dnd5e.classfeatures.DhU2dWCNnX78TstR"],
                "18": ["Compendium.dnd5e.classfeatures.QBVmY56RMQuh6C8h"],
                "20": ["Compendium.dnd5e.classfeatures.3CaP1vFHVR8LgHjx"]
            },
        },
        "rogue": {
            "subclasses": {
                "arcane-trickster": {
                    "label": "Arcane Trickster",
                    "source": "PHB pg. 97",
                    "features": {
                        
                    }
                },
                "assassin": {
                    "label": "Assassin",
                    "source": "PHB pg. 97",
                    "features": {
                        
                    }
                },
                "inquisitive": {
                    "label": "Inquisitive",
                    "source": "XGE pg. 45",
                    "features": {
                        
                    }
                },
                "mastermind": {
                    "label": "Mastermind",
                    "source": "XGE pg. 46; SCAG pg. 135",
                    "features": {
                        
                    }
                },
                "scout": {
                    "label": "Scout",
                    "source": "XGE pg. 47",
                    "features": {
                        
                    }
                },
                "swashbuckler": {
                    "label": "Swashbuckler",
                    "source": "XGE pg. 47; SCAG pg. 135",
                    "features": {
                        
                    }
                },
                "thief": {
                    "label": "Thief",
                    "source": "PHB pg. 97",
                    "features": {
                        "3": ["Compendium.dnd5e.classfeatures.ga3dt2zrCn2MHK8R", "Compendium.dnd5e.classfeatures.FGrbXs6Ku5qxFK5G"],
                        "9": ["Compendium.dnd5e.classfeatures.Ei1Oh4UAA2E30jcD"],
                        "13": ["Compendium.dnd5e.classfeatures.NqWyHE7Rpw9lyKWu"],
                        "17": ["Compendium.dnd5e.classfeatures.LhRm1EeUMvp2EWhV"]
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.3sYPftQKnbbVnHrh", "Compendium.dnd5e.classfeatures.DPN2Gfk8yi1Z5wp7", "Compendium.dnd5e.classfeatures.ohwfuwnvuoBWlSQr"],
                "2": ["Compendium.dnd5e.classfeatures.01pcLg6PRu5zGrsb"],
                "3": ["Compendium.dnd5e.classfeatures.80USV8ZFPIahpLd0"],
                "5": ["Compendium.dnd5e.classfeatures.Mm64SKAHJWYecgXS"],
                "7": ["Compendium.dnd5e.classfeatures.a4P4DNMmH8CqSNkC"],
                "11": ["Compendium.dnd5e.classfeatures.YN9xm6MCvse4Y60u"],
                "14": ["Compendium.dnd5e.classfeatures.fjsBk7zxoAbLf8ZI"],
                "15": ["Compendium.dnd5e.classfeatures.V4pwFxlwHtNeB4w9"],
                "18": ["Compendium.dnd5e.classfeatures.L7nJSRosos8sHJH9"],
                "20": ["Compendium.dnd5e.classfeatures.rQhWDaMHMn7iU4f2"]
            },
        },
        "sorcerer": {
            "subclasses": {
                "draconic-bloodline": {
                    "label": "Draconic Bloodline",
                    "source": "PHB pg. 102",
                    "features": {
                        "1": ["Compendium.dnd5e.classfeatures.EZsonMThTNLZq35j", "Compendium.dnd5e.classfeatures.MW1ExvBLm8Hg82aA"],
                        "6": ["Compendium.dnd5e.classfeatures.x6eEZ9GUsuOcEa3G"],
                        "14": ["Compendium.dnd5e.classfeatures.3647zjKSE9zFwOXc"],
                        "18": ["Compendium.dnd5e.classfeatures.Gsha4bl0apxqspFy"]
                    }
                },
                "divine-soul": {
                    "label": "Divine Soul",
                    "source": "XGE pg. 50",
                    "features": {
                        
                    }
                },
                "pyromancer": {
                    "label": "Pyromancer",
                    "source": "PS:K pg. 9",
                    "features": {
                        
                    }
                },
                "runechild": {
                    "label": "Runechild",
                    "source": "TCS pg. 103",
                    "features": {
                        
                    }
                },
                "shadow-magic": {
                    "label": "Shadow Magic",
                    "source": "XGE pg. 50",
                    "features": {
                        
                    }
                },
                "storm-sorcery": {
                    "label": "Storm Sorcery",
                    "source": "XGE pg. 51; SCAG pg. 137",
                    "features": {
                        
                    }
                },
                "wild-magic": {
                    "label": "Wild Magic",
                    "source": "PHB pg. 103",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.cmRCL9T9UgRYOj1c", "Compendium.dnd5e.classfeatures.oygRF3ZjTv2T7z0Y"],
                "2": ["Compendium.dnd5e.classfeatures.LBKChJY5n02Afhnq"],
                "3": ["Compendium.dnd5e.classfeatures.9Uh7uTDNZ04oTJsL"],
                "20": ["Compendium.dnd5e.classfeatures.F2lEKSmOY0NUruzY"]
            },
        },
        "warlock": {
            "subclasses": {
                "the-archfey": {
                    "label": "The Archfey",
                    "source": "PHB pg. 108",
                    "features": {
                        
                    }
                },
                "the-celestial": {
                    "label": "The Celestial",
                    "source": "XGE pg. 54",
                    "features": {
                        
                    }
                },
                "the-fiend": {
                    "label": "The Fiend",
                    "source": "PHB pg. 109",
                    "features": {
                        "1": ["Compendium.dnd5e.classfeatures.Jv0zu4BtUi8bFCqJ"],
                        "6": ["Compendium.dnd5e.classfeatures.OQSb0bO1yDI4aiMx"],
                        "10": ["Compendium.dnd5e.classfeatures.9UZ2WjUF2k58CQug"],
                        "14": ["Compendium.dnd5e.classfeatures.aCUmlnHlUPHS0rdu"]
                    }
                },
                "the-hexblade": {
                    "label": "The Hexblade",
                    "source": "XGE pg. 55",
                    "features": {
                        
                    }
                },
                "the-oldone": {
                    "label": "The Great Old One",
                    "source": "PHB pg. 109",
                    "features": {
                        
                    }
                },
                "the-undying": {
                    "label": "The Undying",
                    "source": "SCAG pg. 139",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.jTXHaK0vvT5DV3uO", "Compendium.dnd5e.classfeatures.x6IJZwr6f0SGral7"],
                "2": ["Compendium.dnd5e.classfeatures.8MlxM2nEfE3Q0EVk"],
                "3": ["Compendium.dnd5e.classfeatures.QwgfIpCN8VWfoUtX"],
                "11": ["Compendium.dnd5e.classfeatures.zB77V8BcCJvWVxck"],
                "13": ["Compendium.dnd5e.classfeatures.HBn6FXLz7Eiudz0V"],
                "15": ["Compendium.dnd5e.classfeatures.knDZR4l4QfLTKinm"],
                "17": ["Compendium.dnd5e.classfeatures.vMxJQEKeK6WwZFaF"],
                "20": ["Compendium.dnd5e.classfeatures.0C04rwyvoknvFYiy"]
            },
        },
        "wizard": {
            "subclasses": {
                "school-of-abjuration": {
                    "label": "School of Abjuration",
                    "source": "PHB pg. 115",
                    "features": {
                        
                    }
                },
                "school-of-bladesinging": {
                    "label": "School of Bladesinging",
                    "source": "SCAG pg. 141",
                    "features": {
                        
                    }
                },
                "school-of-chronurgy-magic": {
                    "label": "School of Chronurgy Magic",
                    "source": "EGW pg. 185",
                    "features": {
                        
                    }
                },
                "school-of-conjuration": {
                    "label": "School of Conjuration",
                    "source": "PHB pg. 116",
                    "features": {
                        
                    }
                },
                "school-of-divination": {
                    "label": "School of Divination",
                    "source": "PHB pg. 116",
                    "features": {
                        
                    }
                },
                "school-of-enchantment": {
                    "label": "School of Enchantment",
                    "source": "PHB pg. 117",
                    "features": {
                        
                    }
                },
                "school-of-evocation": {
                    "label": "School of Evocation",
                    "source": "PHB pg. 117",
                    "features": {
                        "2": ["Compendium.dnd5e.classfeatures.7uzJ2JkmsdRGLra3", "Compendium.dnd5e.classfeatures.6VBXkjjBgjSpNElh"],
                        "6": ["Compendium.dnd5e.classfeatures.evEWCpE5MYgr5RRW"],
                        "10": ["Compendium.dnd5e.classfeatures.7O85kj6uDEG5NzUE"],
                        "14": ["Compendium.dnd5e.classfeatures.VUtSLeCzFubGXmGx"]
                    }
                },
                "school-of-graviturgy-magic": {
                    "label": "School of Graviturgy Magic",
                    "source": "EGW pg. 185",
                    "features": {
                        
                    }
                },
                "school-of-illusion": {
                    "label": "School of Illusion",
                    "source": "PHB pg. 118",
                    "features": {
                        
                    }
                },
                "school-of-necromancy": {
                    "label": "School of Necromancy",
                    "source": "PHB pg. 118",
                    "features": {
                        
                    }
                },
                "school-of-transmutation": {
                    "label": "School of Transmutation",
                    "source": "PHB pg. 119",
                    "features": {
                        
                    }
                },
                "school-of-war-magic": {
                    "label": "School of War Magic",
                    "source": "XGE pg. 59",
                    "features": {
                        
                    }
                }
            },
            "features": {
                "1": ["Compendium.dnd5e.classfeatures.gbNo5eVPaqr8IVKL", "Compendium.dnd5e.classfeatures.e0uTcFPpgxjIyUW9"],
                "2": ["Compendium.dnd5e.classfeatures.AEWr9EMxy5gj4ZFT"],
                "18": ["Compendium.dnd5e.classfeatures.JfFfHTeIszx1hNRx"],
                "20": ["Compendium.dnd5e.classfeatures.nUrZDi6QN1YjwAr6", "Compendium.dnd5e.classfeatures.31bKbWe9ZGVLEns6"]
            },
        }
    };
});