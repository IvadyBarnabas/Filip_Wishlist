const figurak = {
    deku: {
        nev:
        "My Hero Academia S.H.Figuarts Deku Overlay",
        gyarto:
        "Bandai Namco",
        ar:
        "37.990 Ft",
        datum:
        "2026 Szeptember",
        status:
        "Nincs meg",
        kep:
        "kepek/carnagedeku.webp",
        leiras:
        "Különleges Deku figura Carnage inspirálta dizájnnal és részletes festéssel."
    },

    preypredator: {
        nev:
        "Prey Ultimate Feral Predator Figure",
        gyarto:
        "NECA",
        ar:
        "19.490 Ft",
        datum:
        "2026 Május-Június",
        status:
        "Megvan",
        kep:
        "kepek/prey.webp",
        leiras:
        "A Prey film ikonikus Feral Predator figurája részletes páncéllal és rengeteg kiegészítővel."

    },

    ghostface: {
        nev:
        "Ghost Face Returns Ultimate Ghost Face",
        gyarto:
        "NECA",
        ar:
        "17.490 Ft",
        datum:
        "2026 November-December",
        status:
        "Nincs meg",
        kep:
        "kepek/ultimateghostface.webp",
        leiras:
        "A Ghost Face karakter modern Ultimate változata több arccal és horror kiegészítővel."

    },

    ghostrider: {
        nev:
        "Marvel Legends Series Ghost Rider",
        gyarto:
        "Hasbro",
        ar:
        "12.490 Ft",
        datum:
        "2026 Szeptember",
        status:
        "Nincs meg",
        kep:
        "kepek/ghostrider.webp",
        leiras:
        "Robbie Reyes Ghost Rider figura részletes festéssel és lánc effektel."
    },

    spawn: {
        nev:
        "Spawn Wings Of Redemption",
        gyarto:
        "McFarlane Toys",
        ar:
        "13.990 Ft",
        datum:
        "2026 Július",
        status:
        "Megvan",
        kep:
        "kepek/redemptionspawn.webp",
        leiras:
        "Spawn monumentális Wings Of Redemption változata hatalmas szárnyakkal."
    },
    classicspawn: {
        nev:
        "Spawn McFarlane Elite Edition",
        gyarto:
        "McFarlane Toys",
        ar:
        "22.490 Ft",
        status:
        "Megvan",
        kep:
        "kepek/classicspawn.webp",
        leiras:
        "Spawn klasszikus megjelenése a McFarlane Elite Edition sorozatban részletes kidolgozással."
    }
};

const params =
new URLSearchParams(window.location.search);

const id = params.get("id");

const figura = figurak[id];

document.getElementById("figuraNev")
.innerText = figura.nev;

document.getElementById("figuraGyarto")
.innerText = figura.gyarto;

document.getElementById("figuraAr")
.innerText = figura.ar;

document.getElementById("figuraDatum")
.innerText = figura.datum;

document.getElementById("figuraStatus")
.innerText = figura.status;

document.getElementById("figuraLeiras")
.innerText = figura.leiras;

document.getElementById("figuraKep")
.src = figura.kep;