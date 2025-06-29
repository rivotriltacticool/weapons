// Mapeamento de nomes de armas para arquivos de imagem
const weaponImageMap: Record<string, string> = {
  // Assault Rifles
  "K-TRAC 5.8": "K-Trac_5.8.svg",
  "ARCLIGHT 56": "arclight-56.svg",
  "MAS-47": "mas-47.svg",
  "KRAIT": "krait.svg",
  "FALCON A4": "falcon-a4.svg",
  "QQ-95": "qq-95.svg",
  "GIDEN": "giden.svg",
  "KULT-M": "kult-m.svg",
  "VFX150": "vfx150.svg",
  "AUCH": "auch.svg",
  "KANZAZ": "kanzaz.svg",
  "IAR-21": "iar-21.svg",
  "VAKTOR": "vaktor.svg",
  "E2 PARAJUMPER": "e2-parajumper.svg",
  "OLD WAR": "old-war.svg",
  "ECLIPSE": "eclipse.svg",
  "GREMLIN": "gremlin.svg",
  "QQ-95 GOLD": "qq-95-gold.svg",
  "SPAR-M8": "spar-m8.svg",

  // SMGs
  "HALBERD V10": "halberd-v10.svg",
  "ECHELON R": "echelon-r.svg",
  "TAMO 220": "tamo-220.svg",
  "KPD-45": "kpd-45.svg",
  "BOZON": "bozon.svg",
  "PTU80": "ptu80.svg",
  "SM50": "sm50.svg",
  "MK20": "mk20.svg",
  "VENDETTA": "vendetta.svg",
  "AUG": "aug.svg",
  "KAS-12": "kas-12.svg",
  "Famas": "famas.svg",
  "KRISS": "kriss.svg",
  "BANSHEE": "banshee.svg",
  "TULUM": "tulum.svg",
  "MX4": "mx4.svg",
  "SCORPION": "scorpion.svg",

  // Shotguns
  "OXHEAD": "oxhead.svg",
  "REAVER M30": "reaver-m30.svg",
  "SKAT-A": "skat-a.svg",
  "VEGA DT": "vega-dt.svg",
  "TYR-9": "tyr-9.svg",
  "OOPS15": "oops15.svg",
  "REMMY 14": "remmy-14.svg",
  "UU-10": "uu-10.svg",
  "GRANDMASTER": "grandmaster.svg",
  "PAS6": "pas6.svg",
  "PUNCHER": "puncher.svg",
  "THUNDER": "thunder.svg",
  "SOURCE": "source.svg",
  "HAIL": "hail.svg",
  "XL20": "xl20.svg",
  "SHORTY": "shorty.svg",
  "RIO BRAVO": "rio-bravo.svg",
  "FURN-S": "furn-s.svg",
  "DM-SG": "dm-sg.svg",

  // Sniper Rifles
  "TALON S4": "talon-s4.svg",
  "TITAN S1": "titan-s1.svg",
  "VLR-12": "vlr-12.svg",
  "ARX-204": "arx-204.svg",
  "HOWL": "howl.svg",
  "CT 200M": "ct-200m.svg",
  "TICKLE X3": "tickle-x3.svg",
  "MX2020": "mx2020.svg",
  "AW": "aw.svg",
  "MIMI 15": "mimi-15.svg",
  "BULLSEYE": "bullseye.svg",
  "GF 24": "gf-24.svg",
  "ATHENA": "athena.svg",
  "FR USTR8": "fr-ustr8.svg",
  "OSIRIS": "osiris.svg",
  "SEE ME NOT": "see-me-not.svg",
  "LONGSHOT-6": "longshot-6.svg",
  "DOOM-INJECT .25": "doom-inject-25.svg",
  "MP200": "mp200.svg",

  // Machine Guns
  "GRINDCORE": "grindcore.svg",
  "PILLAR-2": "pillar-2.svg",
  "NM-11": "nm-11.svg",
  "OHM-8": "ohm-8.svg",
  "M-TORQ": "m-torq.svg",
  "MM66": "mm66.svg",
  "GOSHAN": "goshan.svg",
  "PRK": "prk.svg",
  "FAULKNER": "faulkner.svg",
  "TRIGUN": "trigun.svg",
  "POLOVEC": "polovec.svg",
  "ROTOGUN": "rotogun.svg",
  "B-FIVE-ONE": "b-five-one.svg",
  "LOST 8": "lost-8.svg",
  "STOPPER": "stopper.svg",
  "VANISHER": "vanisher.svg",
  "MAXIMUS": "maximus.svg",
  "SCORCHER": "scorcher.svg",
  "XO-300": "xo-300.svg",

  // Pistols
  "DART .45": "dart-45.svg",
  "HARTWELL W8": "hartwell-w8.svg",
  "CXZ-75": "cxz-75.svg",
  "FENRIK": "fenrik.svg",
  "VELOS M17": "velos-m17.svg",
  "LAG-1M": "lag-1m.svg",
  "CEDAR": "cedar.svg",
  "K1914": "k1914.svg",
  "GLUCK18-C": "gluck18-c.svg",
  "BERTA R106": "berta-r106.svg",
  "WHILY": "whily.svg",
  "LUPARA": "lupara.svg",
  "MACK": "mack.svg",
  "DIRTY ANTON": "dirty-anton.svg",
  "MC10": "mc10.svg",
  "HEADHOPPER": "headhopper.svg",
  "NINETECH": "ninetech.svg",
  "SPITTER": "spitter.svg",
  "STORMTROOPER": "stormtrooper.svg",
  "HOLE PUNCHER": "hole-puncher.svg",
  "WIDOW MAKER": "widow-maker.svg",
  "DICTATOR": "dictator.svg",
  "GOLDEN GLUCK18-C": "golden-gluck18-c.svg",

  // Melee
  "SPLITJAW": "splitjaw.svg",
  "STRIKEPIN": "strikepin.svg",
  "KNELL": "knell.svg",
  "BLACKRIDGE": "blackridge.svg",
  "ZIGGY": "ziggy.svg",
  "MACHETE": "machete.svg",
  "COMPOSITE SLASHER": "composite-slasher.svg",
  "SHUANGOU": "shuangou.svg",
  "HEAD CUTTER": "head-cutter.svg",
  "CANDY CANE": "candy-cane.svg",
  "KATANA": "katana.svg",
  "REAPER": "reaper.svg",
  "PREADTOR'S FANG": "predators-fang.svg",
  "DESPAIR": "despair.svg",
  "BATON": "baton.svg",
  "C-T": "c-t.svg",
  "CLEAVER": "cleaver.svg",
  "TROCKY": "trocky.svg",
  "ARMATURE": "armature.svg",
  "THROWING KNIVES": "throwing-knives.svg",
  "TACTICAL SHOVEL": "tactical-shovel.svg",
  "E-BLADE": "e-blade.svg",
  "GENTLE KISS": "gentle-kiss.svg",
  "SEMPAI": "sempai.svg",
  "SURVIVAL TOOL": "survival-tool.svg",
  "ANCHOR": "anchor.svg",
  "CANDY CANE GOLD": "candy-cane-gold.svg",
  "HORROR": "horror.svg",
  "HOPE": "hope.svg",

  // Prototypes
  "TAMM": "tamm.svg",
  "MRA3-6": "mra3-6.svg",
  "SO TOXIC": "so-toxic.svg",
  "ROACH": "roach.svg",
  "GRIMER": "grimer.svg",
  "MAXWELL": "maxwell.svg",
  "DRAGON WARTH": "dragon-warth.svg"
};

// Função para obter URL da imagem
const getWeaponImageUrl = (weaponName: string): string => {
  const baseUrl = "https://drive.google.com/drive/folders/18Vvm6EuylRG9LSxlpWGzRhj82uVPnPSc";
  const imageName = weaponImageMap[weaponName];
  
  if (imageName) {
    return `${baseUrl}${imageName}`;
  }
  
  // Fallback para imagem padrão se não encontrar
  return "https://drive.google.com/file/d/1b_zvfY_d72wyAnflKCLnxvsPxbXWe6a9/view?usp=drive_link";
};

import { Weapon } from "@shared/schema";

export const tacticoolWeapons: Record<string, Weapon[]> = {
  "Assault Rifle": [
    {
      id: 1,
      name: "K-TRAC 5.8",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("K-TRAC 5.8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "601" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Munição", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "402" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.2" }
      ]
    },
    {
      id: 2,
      name: "ARCLIGHT 56",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("ARCLIGHT 56"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "759" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "262" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "91" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 3,
      name: "MAS-47",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("MAS-47"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "401" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "692" },
        { icon: "fas fa-bolt", label: "Munição", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "89" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 4,
      name: "KRAIT",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("KRAIT"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "655" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "271" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "91" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 5,
      name: "FALCON A4",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("FALCON A4"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "541" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "438" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "253-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "92" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 6,
      name: "QQ-95",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("QQ-95"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "911" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 7,
      name: "GIDEN",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("GIDEN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "280-662" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 8,
      name: "KULT-M",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("KULT-M"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "893" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "268" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "122-809" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 9,
      name: "VFX150",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("VFX150"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Munição", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 10,
      name: "AUCH",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("AUCH"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.45" }
      ]
    },
    {
      id: 11,
      name: "KANZAZ",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("KANZAZ"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "866" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "91" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.6" }
      ]
    },
    {
      id: 12,
      name: "IAR-21",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("IAR-21"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "261" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "150-868" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "89" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 13,
      name: "VAKTOR",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("VAKTOR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "909" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "360" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 14,
      name: "E2 PARAJUMPER",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("E2 PARAJUMPER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1244" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "257" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "86" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 15,
      name: "OLD WAR",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("OLD WAR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "779" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "228-592" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "92" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 16,
      name: "ECLIPSE",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ECLIPSE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1074" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "274" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "103-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "87" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.6" }
      ]
    },
    {
      id: 17,
      name: "GREMLIN",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("GREMLIN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "823" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "39" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "92" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 18,
      name: "QQ-95 GOLD",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("QQ-95 GOLD"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1188" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 19,
      name: "SPAR-M8",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SPAR-M8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "907" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "139-924" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "0.65-2.6" }
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
      image: getWeaponImageUrl("HALBERD V10"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "404" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.2" }
      ]
    },
    {
      id: 21,
      name: "ECHELON R",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("ECHELON R"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "385" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Munição", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.2" }
      ]
    },
    {
      id: 22,
      name: "TAMO 220",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("TAMO 220"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "277" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "811" },
        { icon: "fas fa-bolt", label: "Munição", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "522" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.1" }
      ]
    },
    {
      id: 23,
      name: "KPD-45",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("KPD-45"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "333" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1008" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "558" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "101" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.0" }
      ]
    },
    {
      id: 24,
      name: "BOZON",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("BOZON"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 25,
      name: "PTU80",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("PTU80"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "464" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "334" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.1" }
      ]
    },
    {
      id: 26,
      name: "SM50",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("SM50"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "496" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "468" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.0" }
      ]
    },
    {
      id: 27,
      name: "MK20",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("MK20"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "522" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "342" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.1" }
      ]
    },
    {
      id: 28,
      name: "VENDETTA",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("VENDETTA"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "508" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "504" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "355" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 29,
      name: "AUG",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("AUG"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "455" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "570" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "311" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "104" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 30,
      name: "KAS-12",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("KAS-12"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "488" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "106" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 31,
      name: "Famas",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("Famas"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "421" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "288" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "105" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.6" }
      ]
    },
    {
      id: 32,
      name: "KRISS",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("KRISS"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "401" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "720" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "255" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "108" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.8" }
      ]
    },
    {
      id: 33,
      name: "BANSHEE",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("BANSHEE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "340" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "103" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.7" }
      ]
    },
    {
      id: 34,
      name: "TULUM",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("TULUM"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "477" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "273" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "107" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 35,
      name: "MX4",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MX4"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "435" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "690" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "260" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "109" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.1" }
      ]
    },
    {
      id: 36,
      name: "SCORPION",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SCORPION"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "499" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "20" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "588" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "301" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "110" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
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
      image: getWeaponImageUrl("OXHEAD"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5366" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "114" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    },
    {
      id: 38,
      name: "REAVER M30",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("REAVER M30"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "108" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "47" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    },
    {
      id: 39,
      name: "SKAT-A",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("SKAT-A"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3225" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    },
    {
      id: 40,
      name: "VEGA DT",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("VEGA DT"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4708" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1047" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "96" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.6" }
      ]
    },
    {
      id: 41,
      name: "TYR-9",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("TYR-9"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3928" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "42" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.6" }
      ]
    },
    {
      id: 42,
      name: "OOPS15",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("OOPS15"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5637" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "30" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    },
    {
      id: 43,
      name: "REMMY 14",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("REMMY 14"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6555" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
      ]
    },
    {
      id: 44,
      name: "UU-10",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("UU-10"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5268" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "37" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.0" }
      ]
    },
    {
      id: 45,
      name: "GRANDMASTER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("GRANDMASTER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5997" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "110" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
      ]
    },
    {
      id: 46,
      name: "PAS6",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("PAS6"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.4" }
      ]
    },
    {
      id: 47,
      name: "PUNCHER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("PUNCHER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6986" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "94" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
      ]
    },
    {
      id: 48,
      name: "THUNDER",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("THUNDER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7892" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "101" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.7" }
      ]
    },
    {
      id: 49,
      name: "SOURCE",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SOURCE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6653" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.15" }
      ]
    },
    {
      id: 50,
      name: "HAIL",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("HAIL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8371" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "108" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "5.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.6" }
      ]
    },
    {
      id: 51,
      name: "XL20",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("XL20"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7972" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.0" }
      ]
    },
    {
      id: 52,
      name: "SHORTY",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SHORTY"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5988" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.3" }
      ]
    },
    {
      id: 53,
      name: "RIO BRAVO",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("RIO BRAVO"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7573" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "135" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "102" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
      ]
    },
    {
      id: 54,
      name: "FURN-S",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("FURN-S"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4257" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "4" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "92" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" },
        { icon: "fas fa-fire", label: "Burn", value: "2059" }
      ]
    },
    {
      id: 55,
      name: "DM-SG",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("DM-SG"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
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
      image: getWeaponImageUrl("TALON S4"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2405" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "61" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "569-911" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "22.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "85" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.8" }
      ]
    },
    {
      id: 57,
      name: "TITAN S1",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("TITAN S1"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2685" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "197-990" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "81" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.2" }
      ]
    },
    {
      id: 58,
      name: "VLR-12",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("VLR-12"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1791" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "486" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "80" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 59,
      name: "ARX-204",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("ARX-204"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2056" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "59" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "583-925" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 60,
      name: "HOWL",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("HOWL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2394" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "76" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "78" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.4" }
      ]
    },
    {
      id: 61,
      name: "CT 200M",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("CT 200M"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2936" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "54" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.6" }
      ]
    },
    {
      id: 62,
      name: "TICKLE X3",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("TICKLE X3"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3001" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "73" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "82" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.0" },
        { icon: "fas fa-tint", label: "Bleed", value: "3" }
      ]
    },
    {
      id: 63,
      name: "MX2020",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("MX2020"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2796" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "592-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "87" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.4" }
      ]
    },
    {
      id: 64,
      name: "AW",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("AW"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3159" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "70" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "176-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "80" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.1" }
      ]
    },
    {
      id: 65,
      name: "MIMI 15",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MIMI 15"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "547-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "20.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.45" }
      ]
    },
    {
      id: 66,
      name: "BULLSEYE",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("BULLSEYE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4223" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "77" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.1" }
      ]
    },
    {
      id: 67,
      name: "GF 24",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("GF 24"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "53" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "650-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "82" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.85" }
      ]
    },
    {
      id: 68,
      name: "ATHENA",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ATHENA"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3740" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.3" }
      ]
    },
    {
      id: 69,
      name: "FR USTR8",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("FR USTR8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "620-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "85" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 70,
      name: "OSIRIS",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("OSIRIS"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "77" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.4" }
      ]
    },
    {
      id: 71,
      name: "SEE ME NOT",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SEE ME NOT"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "55" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "82" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.8" }
      ]
    },
    {
      id: 72,
      name: "LONGSHOT-6",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("LONGSHOT-6"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "191-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "27.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "78" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.3" }
      ]
    },
    {
      id: 73,
      name: "DOOM-INJECT .25",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("DOOM-INJECT .25"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1016" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "385-1000" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "85" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.35" },
        { icon: "fas fa-tint", label: "Bleed", value: "1637" }
      ]
    },
    {
      id: 74,
      name: "MP200",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MP200"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "688" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Munição", value: "22" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "424" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "771-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.2" }
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
      image: getWeaponImageUrl("GRINDCORE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "376" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Munição", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "384-960" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "76-540" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.1" }
      ]
    },
    {
      id: 76,
      name: "PILLAR-2",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("PILLAR-2"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "786" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "708" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "112-290" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "81" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.5" }
      ]
    },
    {
      id: 77,
      name: "NM-11",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("NM-11"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "520" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "770" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "612" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "85-230" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.9" }
      ]
    },
    {
      id: 78,
      name: "OHM-8",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("OHM-8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "690" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Munição", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "86" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.0" }
      ]
    },
    {
      id: 79,
      name: "M-TORQ",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("M-TORQ"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "336" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "82" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.9" }
      ]
    },
    {
      id: 80,
      name: "MM66",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("MM66"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.1" }
      ]
    },
    {
      id: 81,
      name: "GOSHAN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("GOSHAN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "467" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "402-1005" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "82" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.7" }
      ]
    },
    {
      id: 82,
      name: "PRK",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("PRK"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "648" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "86" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.1" }
      ]
    },
    {
      id: 83,
      name: "FAULKNER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("FAULKNER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "949" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-251" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.4" }
      ]
    },
    {
      id: 84,
      name: "TRIGUN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("TRIGUN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "439" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "70" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.3" }
      ]
    },
    {
      id: 85,
      name: "POLOVEC",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("POLOVEC"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1111" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "103" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "102-279" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.0" }
      ]
    },
    {
      id: 86,
      name: "ROTOGUN",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ROTOGUN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "574" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "77" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.8" }
      ]
    },
    {
      id: 87,
      name: "B-FIVE-ONE",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("B-FIVE-ONE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1065" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "690" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "80" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.6" }
      ]
    },
    {
      id: 88,
      name: "LOST 8",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("LOST 8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "591" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "100" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480-1200" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "89-587" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "75" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.8" }
      ]
    },
    {
      id: 89,
      name: "STOPPER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("STOPPER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1179" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98-272" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.4" }
      ]
    },
    {
      id: 90,
      name: "VANISHER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("VANISHER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "557" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "108" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "80" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.6" }
      ]
    },
    {
      id: 91,
      name: "MAXIMUS",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MAXIMUS"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1145" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "720" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "87-237" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "81" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.4" }
      ]
    },
    {
      id: 92,
      name: "SCORCHER",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SCORCHER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "603" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "390-975" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "96-613" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "76" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.7" }
      ]
    },
    {
      id: 93,
      name: "XO-300",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("XO-300"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "577" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "429" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "394" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "77" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
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
      image: getWeaponImageUrl("DART .45"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2377" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "107" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.6" }
      ]
    },
    {
      id: 95,
      name: "HARTWELL W8",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("HARTWELL W8"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "201" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.7" }
      ]
    },
    {
      id: 96,
      name: "CXZ-75",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("CXZ-75"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "426" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "101" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 97,
      name: "FENRIK",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("FENRIK"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "200" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "570" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "115" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "106" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.1" }
      ]
    },
    {
      id: 98,
      name: "VELOS M17",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("VELOS M17"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "249" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Munição", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "104" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 99,
      name: "LAG-1M",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("LAG-1M"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "523" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.1" }
      ]
    },
    {
      id: 100,
      name: "CEDAR",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("CEDAR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "358" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "181" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.3" }
      ]
    },
    {
      id: 101,
      name: "K1914",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("K1914"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "717" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.0" }
      ]
    },
    {
      id: 102,
      name: "GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("GLUCK18-C"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "334" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "103" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 103,
      name: "BERTA R106",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("BERTA R106"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "703" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.4" }
      ]
    },
    {
      id: 104,
      name: "WHILY",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("WHILY"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2702" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "344-717" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "106" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.5" }
      ]
    },
    {
      id: 105,
      name: "LUPARA",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("LUPARA"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5679" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "105" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.0" }
      ]
    },
    {
      id: 106,
      name: "MACK",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MACK"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "105" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.0" }
      ]
    },
    {
      id: 107,
      name: "DIRTY ANTON",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("DIRTY ANTON"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "72" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "105" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.0" }
      ]
    },
    {
      id: 108,
      name: "MC10",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MC10"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "454" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "552" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "107" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.2" }
      ]
    },
    {
      id: 109,
      name: "HEADHOPPER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("HEADHOPPER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "861" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "210" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.3" }
      ]
    },
    {
      id: 110,
      name: "NINETECH",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("NINETECH"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "459" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "21" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "106" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.7" }
      ]
    },
    {
      id: 111,
      name: "SPITTER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SPITTER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "906" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "162" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "255-445" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.2" }
      ]
    },
    {
      id: 112,
      name: "STORMTROOPER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("STORMTROOPER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3667" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "445-856" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "103" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.3" }
      ]
    },
    {
      id: 113,
      name: "HOLE PUNCHER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("HOLE PUNCHER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "951" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "168" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "348-566" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.9" }
      ]
    },
    {
      id: 114,
      name: "WIDOW MAKER",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("WIDOW MAKER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "473-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "103" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.5" }
      ]
    },
    {
      id: 115,
      name: "DICTATOR",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("DICTATOR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "879" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "12" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "204" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "290-501" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.4" }
      ]
    },
    {
      id: 116,
      name: "GOLDEN GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("GOLDEN GLUCK18-C"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "428" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "103" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.0" }
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
      image: getWeaponImageUrl("SPLITJAW"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6384" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "51" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 118,
      name: "STRIKEPIN",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("STRIKEPIN"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3342" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "730" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.6" }
      ]
    },
    {
      id: 119,
      name: "KNELL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Comum",
      stars: 3,
      image: getWeaponImageUrl("KNELL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4751" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "48" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 120,
      name: "BLACKRIDGE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Incomum",
      stars: 4,
      image: getWeaponImageUrl("BLACKRIDGE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5664" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "48" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 121,
      name: "ZIGGY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("ZIGGY"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3755" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.7" }
      ]
    },
    {
      id: 122,
      name: "MACHETE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("MACHETE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "48" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 123,
      name: "COMPOSITE SLASHER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("COMPOSITE SLASHER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3605" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "891" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.4" }
      ]
    },
    {
      id: 124,
      name: "SHUANGOU",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("SHUANGOU"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7135" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "58" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 125,
      name: "HEAD CUTTER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("HEAD CUTTER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.8" }
      ]
    },
    {
      id: 126,
      name: "CANDY CANE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("CANDY CANE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7285" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "52" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 127,
      name: "KATANA",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("KATANA"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7360" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "56" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 128,
      name: "REAPER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("REAPER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3530" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "910" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.5" }
      ]
    },
    {
      id: 129,
      name: "PREADTOR'S FANG",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("PREADTOR'S FANG"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.2" }
      ]
    },
    {
      id: 130,
      name: "DESPAIR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("DESPAIR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7210" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "52" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.95" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 131,
      name: "BATON",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: getWeaponImageUrl("BATON"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "45" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 132,
      name: "C-T",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("C-T"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.3" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "94" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.4" }
      ]
    },
    {
      id: 133,
      name: "CLEAVER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("CLEAVER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8647" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "65" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.85" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 134,
      name: "TROCKY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("TROCKY"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5114" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "985" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.2" }
      ]
    },
    {
      id: 135,
      name: "ARMATURE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ARMATURE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "9949" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "37" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 136,
      name: "THROWING KNIVES",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("THROWING KNIVES"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.0" }
      ]
    },
    {
      id: 137,
      name: "TACTICAL SHOVEL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("TACTICAL SHOVEL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4974" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "94" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.3" }
      ]
    },
    {
      id: 138,
      name: "E-BLADE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("E-BLADE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8740" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "100" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 139,
      name: "GENTLE KISS",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("GENTLE KISS"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "9484" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "44" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 140,
      name: "SEMPAI",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SEMPAI"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1028" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.2" }
      ]
    },
    {
      id: 141,
      name: "SURVIVAL TOOL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SURVIVAL TOOL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "9763" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "42" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.2" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 142,
      name: "ANCHOR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ANCHOR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5346" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "955" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "94" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "7.1" }
      ]
    },
    {
      id: 143,
      name: "CANDY CANE GOLD",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("CANDY CANE GOLD"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8833" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "52" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "98" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 144,
      name: "HORROR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("HORROR"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4835" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.5" }
      ]
    },
    {
      id: 145,
      name: "HOPE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("HOPE"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8833" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "∞" },
        { icon: "fas fa-bolt", label: "Munição", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "55" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.9" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "97" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
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
      stars: 6,
      image: getWeaponImageUrl("TAMM"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8798" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "72" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "77" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.8" }
      ]
    },
    {
      id: 147,
      name: "MRA3-6",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MRA3-6"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1567" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2068" },
        { icon: "fas fa-bolt", label: "Munição", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "300" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" },
        { icon: "fas fa-fire", label: "Burn", value: "2059" },
        { icon: "fas fa-gas-pump", label: "Fuel", value: "7020" }
      ]
    },
    {
      id: 148,
      name: "SO TOXIC",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("SO TOXIC"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1614" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2068" },
        { icon: "fas fa-bolt", label: "Munição", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "300" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" },
        { icon: "fas fa-fire", label: "Burn", value: "2112" },
        { icon: "fas fa-gas-pump", label: "Fuel", value: "7200" }
      ]
    },
    {
      id: 149,
      name: "ROACH",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("ROACH"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "11844" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2068" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "173" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "90" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 150,
      name: "GRIMER",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("GRIMER"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "12201" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2068" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "173" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "93" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    },
    {
      id: 151,
      name: "MAXWELL",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("MAXWELL"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8275" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "81" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "∞" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "84" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.7" }
      ]
    },
    {
      id: 152,
      name: "DRAGON WARTH",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Épico",
      stars: 6,
      image: getWeaponImageUrl("DRAGON WARTH"),
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "11487" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2068" },
        { icon: "fas fa-bolt", label: "Munição", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "∞" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "173" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "87" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "∞" }
      ]
    }
  ]
};

export const weaponCategories = [
  { id: "Assault Rifle", icon: "fas fa-crosshairs", label: "Assault Rifle" },
  { id: "SMG", icon: "fas fa-bolt", label: "SMG" },
  { id: "Shotgun", icon: "fas fa-bomb", label: "Shotgun" },
  { id: "Sniper Rifle", icon: "fas fa-bullseye", label: "Sniper Rifle" },
  { id: "Machine Gun", icon: "fas fa-fire", label: "Machine Gun" },
  { id: "Pistols", icon: "fas fa-circle", label: "Pistols" },
  { id: "Melee", icon: "fas fa-sword", label: "Melee" },
  { id: "Prototypes", icon: "fas fa-flask", label: "Prototypes" }
];