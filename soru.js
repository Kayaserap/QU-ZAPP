// OOP: Nesne Tabanlı Programlama

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;


}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulasıdır?", {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    }, "a"),
    new Soru("2-Hangisi javascript paket yönetim uygulası değildir?", {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    }, "b"),
    new Soru("3-Hangisi javascript paket yönetim uygulasıdır?", {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulasıdır?", {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    }, "d")
]
