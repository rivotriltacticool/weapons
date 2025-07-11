import { Weapon } from "@shared/schema";

export const weaponCategories = [
  { id: "Assault Rifle", label: "Assault Rifle", icon: "fas fa-crosshairs" },
  { id: "SMG", label: "SMG", icon: "fas fa-burst" },
  { id: "Shotgun", label: "Shotgun", icon: "fas fa-fire" },
  { id: "Sniper Rifle", label: "Sniper Rifle", icon: "fas fa-bullseye" },
  { id: "Machine Gun", label: "Machine Gun", icon: "fas fa-fire" },
  { id: "Pistols", label: "Pistols", icon: "fas fa-gun" },
  { id: "Melee", label: "Melee", icon: "fas fa-hammer" },
  { id: "Prototypes", label: "Prototypes", icon: "fas fa-flask" },
];

export const tacticoolWeapons: Record<string, Weapon[]> = {
  "Assault Rifle": [
    {
      id: 1,
      name: "K-TRAC 5.8",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/K-Trac_5.8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "601" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Munição", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "402" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 2,
      name: "ARCHLIGHT 56",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/Archlight_56.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "759" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "262" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 3,
      name: "MAS-47",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Comum",
      stars: 5,
      image: "/MAS-47.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "401" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "692" },
        { icon: "fas fa-bolt", label: "Munição", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "89" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 4,
      name: "KRAIT",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/Krait.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "655" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "271" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 5,
      name: "FALCON A4",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/Falcon_A4.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "541" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "438" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "253-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 6,
      name: "QQ-95",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/QQ-95.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "911" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 7,
      name: "GIDEON",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/Gideon.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "280-662" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 8,
      name: "KULT-M",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "Kult-M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "893" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "268" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "122-809" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 9,
      name: "VFX150",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/VFX150.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 10,
      name: "AUCH",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/AUCH.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.45" }
      ]
    },
    {
      id: 11,
      name: "KANZAZ",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "KANZAZ.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "866" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 12,
      name: "IAR-21",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/IAR-21.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "261" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "150-868" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "89" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 13,
      name: "VAKTOR",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "Vaktor.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "909" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "360" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 14,
      name: "E2 PARAJUMPER",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/E2_Parajumper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1244" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "257" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 15,
      name: "OLD WAR",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Old_War.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "779" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "228-592" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 16,
      name: "ECLIPSE",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Eclipse.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1074" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "274" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "103-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "87" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 17,
      name: "GREMLIN",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Gremlin.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "823" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "39" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 18,
      name: "QQ-95 GOLD",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/QQ-95_Gold.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1188" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 19,
      name: "SPAR-M8",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/SparM8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "907" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "139-924" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "0.65-2.6" }
      ]
    }
  ],
  "SMG": [
    {
      id: 20,
      name: "HALBERD V10",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/Halberd_V10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "404" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 21,
      name: "ECHELON R",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/Echelon_R.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "385" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 22,
      name: "TAMO 220",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Comum",
      stars: 5,
      image: "/Tamo_22c.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "277" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "811" },
        { icon: "fas fa-bolt", label: "Munição", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "522" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 23,
      name: "KPD-45",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Incomum",
      stars: 5,
      image: "/KPD-45.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "333" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1008" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "558" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.0" }
      ]
    },
    {
      id: 24,
      name: "BOZON",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/BOZON.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 25,
      name: "PTU80",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/PTU80.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "464" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "334" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 26,
      name: "SM50",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/SM50.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "496" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "468" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.0" }
      ]
    },
    {
      id: 27,
      name: "PZD C",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/PZD_C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "522" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "339" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 28,
      name: "BKS 9/19",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/BK_9_9.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "617" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "110" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 29,
      name: "COMPACT-12",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Compact-12.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "385" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 30,
      name: "CAMELBACK",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Camelback.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "559" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "558" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "344" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 31,
      name: "KLTR",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/KLTR.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "671" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "6494" },
        { icon: "fas fa-bolt", label: "Munição", value: "51" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "115" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 32,
      name: "KURT",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Kurt.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "606" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "334" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.9" }
      ]
    },
    {
      id: 33,
      name: "FERRET-A",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Ferret-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "666" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2" }
      ]
    },
    {
      id: 34,
      name: "CORVET",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Covert.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "699" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "445" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "104" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 35,
      name: "FLASH TO FLESH",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Flash_To_Flesh.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "547" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 156,
      name: "MPM IRONHEAD",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/MPMIRONHEAD.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "651" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "6824" },
        { icon: "fas fa-bolt", label: "Munição", value: "49" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "438" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "296" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "119" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
        {
      id: 157,
      name: "SOLANUM-9",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Solanum-9.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "547" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "552" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2" },
        { icon: "fas fa-burst", label: "Força", value: "6963" }
      ]
    },
        {
      id: 158,
      name: "N-TUBE 203",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/N-Tube203.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "504" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "266" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2" },
        { icon: "fas fa-burst", label: "Força", value: "7567" }
      ]
    },
    {
      id: 36,
      name: "DERF SQUIRT MASTER",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 5,
      image: "/Derf_Squirt_Master.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "673" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Munição", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    }
  ],
  "Shotgun": [
    {
      id: 37,
      name: "OXHEAD",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/Oxhead.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5366" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "114" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 38,
      name: "REAVER M30",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/Beaver_M30.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "108" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "47" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 39,
      name: "SKAT-A",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Comum",
      stars: 5,
      image: "/Skat-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3225" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 40,
      name: "VEGA DT",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Incomum",
      stars: 5,
      image: "/Vega-DT.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4708" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1047" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "96" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 41,
      name: "TYR-9",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Incomum",
      stars: 5,
      image: "/TYR-9.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3928" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "42" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 42,
      name: "OOPS15",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/OOPS15.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5637" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "30" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 43,
      name: "REMMY 14",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/Remmy_14.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6555" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 44,
      name: "UU-10",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/UU-10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5268" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "37" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.0" }
      ]
    },
    {
      id: 45,
      name: "GRANDMASTER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/GrandMaster.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5997" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "110" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 46,
      name: "PAS6",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/PAS6.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 47,
      name: "PUNCHER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Puncher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6986" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 48,
      name: "THUNDER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Thunder.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7892" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.7" }
      ]
    },
    {
      id: 49,
      name: "SOURCE",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Source.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6653" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.15" }
      ]
    },
    {
      id: 50,
      name: "HAIL",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Hail.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8371" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "108" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "5.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 51,
      name: "XL20",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/XL20.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7972" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.0" }
      ]
    },
    {
      id: 52,
      name: "SHORTY",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Shorty.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5988" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.3" }
      ]
    },
    {
      id: 53,
      name: "RIO BRAVO",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Rio_Bravo.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7573" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "135" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "102" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 54,
      name: "FURN-S",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/Furn-S.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4257" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "4" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" },
        { icon: "fas fa-fire", label: "Burn", value: "2059" }
      ]
    },
    {
      id: 55,
      name: "DM-SG",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/DM-SG.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 159,
      name: "IJ-74",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 5,
      image: "/IJ-74.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3971" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "4" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "96" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "?" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" },
        { icon: "fas fa-fire", label: "Queimadura", value: "2218" }
      ]
    }
  ],
  "Sniper Rifle": [
    {
      id: 56,
      name: "TALON S4",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/Talon_S4.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2405" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "61" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "569-911" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "22.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.8" }
      ]
    },
    {
      id: 57,
      name: "TITAN S1",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/Titan_S1.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2685" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "197-990" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 58,
      name: "VLR-12",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Comum",
      stars: 5,
      image: "/VLR-12.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1791" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "486" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 59,
      name: "ARX-204",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/ARX-204.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2056" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "59" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "583-925" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 60,
      name: "HOWL",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/Howl.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2394" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "76" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "78" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 61,
      name: "CT 200M",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/CT200M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2936" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "54" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 62,
      name: "TICKLE X3",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/Tickle_X3.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3001" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "73" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 63,
      name: "MX2020",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/MX2020.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2796" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "592-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "87" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 64,
      name: "AW",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/AW.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3159" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "70" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "176-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 65,
      name: "MIMI 15",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/MIMI_15.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "547-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "20.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.45" }
      ]
    },
    {
      id: 66,
      name: "BULLSEYE",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Bullseye.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4223" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 67,
      name: "GF 24",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/GF_24.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "53" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "650-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.85" }
      ]
    },
    {
      id: 68,
      name: "ATHENA",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Athena.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3740" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 69,
      name: "FR USTR8",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/FR_USTR8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "620-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 70,
      name: "OSIRIS",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Osiris.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 71,
      name: "SEE ME NOT",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/SeeMeNot.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "55" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.8" }
      ]
    },
    {
      id: 72,
      name: "LONGSHOT-6",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Longshot-6.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "191-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "27.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "78" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 73,
      name: "DOOM-INJECT .25",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/Doom-Inject25.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1016" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "385-1000" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.35" },
        { icon: "fas fa-tint", label: "Bleed", value: "1637" }
      ]
    },
    {
      id: 74,
      name: "MP200",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "/MP200.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "688" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "22" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "424" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "771-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.2" }
      ]
    }
  ],
  "Machine Gun": [
    {
      id: 75,
      name: "GRINDCORE",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/Grindcore.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "376" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Munição", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "384-960" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "76-540" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 76,
      name: "PILLAR-2",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/Pillar-2.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "786" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "708" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "112-290" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 77,
      name: "NM-11",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Comum",
      stars: 5,
      image: "/NM-11.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "520" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "770" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "612" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "85-230" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.9" }
      ]
    },
    {
      id: 78,
      name: "OHM-8",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 5,
      image: "/OHM-8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "690" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Munição", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 79,
      name: "M-TORQ",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 5,
      image: "/M-TORQ.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "336" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.9" }
      ]
    },
    {
      id: 80,
      name: "MM66",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/MM66.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.1" }
      ]
    },
    {
      id: 81,
      name: "GOSHAN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/Goshan.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "467" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "402-1005" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 82,
      name: "PRK",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/PRK.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "648" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.1" }
      ]
    },
    {
      id: 83,
      name: "FAULKNER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/Faulkner.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "949" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-251" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 84,
      name: "TRIGUN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/Trigun.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "439" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "70" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 85,
      name: "POLOVEC",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Polovec.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1111" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "103" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "102-279" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 86,
      name: "ROTOGUN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Rotogun.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "574" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 87,
      name: "B-FIVE-ONE",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/B-Five-One.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1065" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "690" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.6" }
      ]
    },
    {
      id: 88,
      name: "LOST 8",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Lost8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "591" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "100" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480-1200" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "89-587" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "75" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 89,
      name: "STOPPER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Stopper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1179" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98-272" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.4" }
      ]
    },
    {
      id: 90,
      name: "VANISHER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Vanisher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "557" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "108" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.6" }
      ]
    },
    {
      id: 91,
      name: "MAXIMUS",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Maximus.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1145" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "720" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-237" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.4" }
      ]
    },
    {
      id: 92,
      name: "SCORCHER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/Scorcher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "603" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "390-975" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "96-613" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "76" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 93,
      name: "XO-300",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "/XO-300.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "577" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "429" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "394" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" }
      ]
    }
  ],
  "Pistols": [
    {
      id: 94,
      name: "DART .45",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/Dart45.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2377" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15" },
        { icon: "fas fa-running", label: "Velocidade", value: "107" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.6" }
      ]
    },
    {
      id: 95,
      name: "HARTWELL W8",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/HartwellW8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "201" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.7" }
      ]
    },
    {
      id: 96,
      name: "CXZ-75",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Comum",
      stars: 5,
      image: "/CXZ75.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "426" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 97,
      name: "FENRIK",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Comum",
      stars: 5,
      image: "/Fenrik.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "200" },
        { icon: "fas fa-bolt", label: "Munição", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "570" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "115" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 98,
      name: "VELOS M17",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Incomum",
      stars: 5,
      image: "/VelosM17.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "249" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Munição", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "104" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 99,
      name: "LAG-1M",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Incomum",
      stars: 5,
      image: "/Lag-1M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "523" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 100,
      name: "CEDAR",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/Cedar.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "358" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "181" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 101,
      name: "K1914",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/K1914.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "717" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 102,
      name: "GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/Gluck18-C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "334" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 103,
      name: "BERTA R101",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/BertaR101.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "703" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 104,
      name: "WHILY",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/Whily.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2702" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "344-717" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 105,
      name: "LUPARA",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/Lupara.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5679" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 106,
      name: "MACK",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/MACK.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 107,
      name: "DIRTY ANTON",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/DirtyAnton.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "72" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 108,
      name: "MC10",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/MC10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "454" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "552" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "107" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 109,
      name: "HEADHOPPER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/HeadHopper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "861" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "210" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 110,
      name: "NINETECH",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/Ninetech.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "459" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "21" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.7" }
      ]
    },
    {
      id: 111,
      name: "SPITTER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/Spitter.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "906" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "162" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "255-445" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 112,
      name: "STORMTROOPER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/Stormtrooper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3667" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "445-856" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.3" }
      ]
    },
    {
      id: 113,
      name: "HOLE PUNCHER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/HolePuncher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "951" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "168" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "348-566" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 114,
      name: "WIDOW MAKER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/WidowMaker.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "473-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 115,
      name: "DICTATOR",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/Dictator.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "879" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "12" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "204" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-501" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 116,
      name: "GOLDEN GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 5,
      image: "/GoldenGluck18-C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "428" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    }
  ],
  "Melee": [
    {
      id: 117,
      name: "SPLITJAW",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Splitjaw.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "6384" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "51" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" }
      ]
    },
    {
      id: 118,
      name: "STRIKEPIN",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Strikepin.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3342" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "730" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.6" }
      ]
    },
    {
      id: 119,
      name: "KNELL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Comum",
      stars: 5,
      image: "/Knell.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "4751" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 120,
      name: "BLACKRIDGE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Incomum",
      stars: 5,
      image: "/Blackridge.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "5664" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" }
      ]
    },
    {
      id: 121,
      name: "ZIGGY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Ziggy.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3755" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.7" }
      ]
    },
    {
      id: 122,
      name: "MACHETE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Machete.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7510" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 123,
      name: "COMPOSITE SLASHER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/CompositeSlasher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3605" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "891" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.4" }
      ]
    },
    {
      id: 124,
      name: "SHUANGOU",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Shuangou.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7135" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "58" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 125,
      name: "HEAD CUTTER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Headcutter.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.8" }
      ]
    },
    {
      id: 126,
      name: "CANDY CANE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/CandyCane.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7285" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 127,
      name: "KATANA",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Katana.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7360" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "56" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 128,
      name: "REAPER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Reaper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3530" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "910" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.5" }
      ]
    },
    {
      id: 129,
      name: "PREDATOR'S FANG",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/PredatorsFang.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 130,
      name: "DESPAIR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Despair.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7210" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.95" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 131,
      name: "BATON",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/Baton.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7510" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "45" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 132,
      name: "C-T",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/C-T.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.4" }
      ]
    },
    {
      id: 133,
      name: "CLEAVER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Cleaver.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8647" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "65" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.85" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" }
      ]
    },
    {
      id: 134,
      name: "TROCKY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Trocky.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5114" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "985" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 135,
      name: "ARMATURE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Armature.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9949" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "37" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" }
      ]
    },
    {
      id: 136,
      name: "THROWING KNIVES",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/ThrowingKnives.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.0" }
      ]
    },
    {
      id: 137,
      name: "TACTICAL SHOVEL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/TacticalShovel.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4974" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.3" }
      ]
    },
    {
      id: 138,
      name: "E-BLADE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/E-Blade.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8740" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 139,
      name: "GENTLE KISS",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/GentleKiss.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9484" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" }
      ]
    },
    {
      id: 140,
      name: "SEMPAI",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Sempai.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1028" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 141,
      name: "SURVIVAL TOOL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/SurvivalTool.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9763" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "42" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 142,
      name: "ANCHOR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Anchor.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5346" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "955" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.1" }
      ]
    },
    {
      id: 143,
      name: "CANDY CANE GOLD",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/CandyCaneGold.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8833" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" }
      ]
    },
    {
      id: 144,
      name: "HORROR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Horror.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4835" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.5" }
      ]
    },
    {
      id: 145,
      name: "HOPE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 5,
      image: "/Hope.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8833" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "55" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    }
  ],
  "Prototypes": [
    {
      id: 146,
      name: "TAMM",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/Tamm.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8798" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "72" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 147,
      name: "MLG99",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/MLG99.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "14000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "190" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" }
      ]
    },
    {
      id: 148,
      name: "SMS41",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/SMS41.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "20000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "65" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "64-1000" }
      ]
    },
    {
      id: 149,
      name: "KAPITZ-A",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/Kapitz-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "Força de Pressão", value: "4000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Recarga", value: "2.5" },
        { icon: "fas fa-ruler-horizontal", label: "Distancia da Tração", value: "13" },
        { icon: "fas fa-regular fa-meteor", label: "Velocidade do Ativo", value: "45" },
        { icon: "fas fa-dumbbell", label: "Força de Tração", value: "1400" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" }
      ]
    },
    {
      id: 150,
      name: "1S1K",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/1S1K.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "20000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23" },
        { icon: "fas fa-running", label: "Velocidade", value: "70" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "64-1000" }
      ]
    },
    {
      id: 151,
      name: "MAXWELL",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/Maxwell.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8275" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "81" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 152,
      name: "FAT BOY",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/FatBoy.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "13580" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "180" },
        { icon: "fas fa-ruler-horizontal", label: "Precisão", value: "20" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.8" }
      ]
    },
    {
      id: 153,
      name: "GRAVIZAPA",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/Gravizapa.svg",
      stats: [
        { icon: "fas fa-burn", label: "Força de Pressão", value: "4000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Recarga", value: "2.3" },
        { icon: "fas fa-ruler-horizontal", label: "Distancia da Tração", value: "11" },
        { icon: "fas fa-regular fa-meteor", label: "Velocidade do Ativo", value: "45" },
        { icon: "fas fa-dumbbell", label: "Força de Tração", value: "1400" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" }
      ]
    },
    {
      id: 154,
      name: "REIGN OF FIRE",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 5,
      image: "/ReignOfFire.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "14000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "200" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Regarga", value: "5.8" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" }
      ]
    }
  ]
};
