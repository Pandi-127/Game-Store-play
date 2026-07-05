let dec_docs = "";
dec_words = {
    b1: "GAMING",
    b2: "FAST",
    b3: "NVIDIA",
    b4: "120Hz",
    b5: "Cloud",
    b6: "Stream",
    b7: "Server",
    b8: "Latency",
    b9: "Ping",
    b10: "Store",
    b11: "Library",
    b12: "4K",
    b13: "Install",
    b14: "Play",
    b15: "Multiplayer",
    b16: "Subscription",
    b17: "120Hz",
    b18: "Pass",
    b19: "RGB",
    b20: "Mods",
    b21: "Engine",
    b22: "Render",
    b23: "Resolution",
    b24: "60FPS",
    b25: "FAST",
    b26: "NVIDIA",
    b27: "120Hz",
    b28: "Console",
    b29: "PLAY",
    b30: "Sync",
    b31: "Catalog",
    b32: "Publish",
    b33: "Indie",
    b34: "AAA",
    b35: "Steam",
    b36: "Epic",
    b37: "RTX",
    b38: "Seamless",
    b39: "REND",
    b40: "Portal"
}
dec_words_array = Object.entries(dec_words);
dec_words_array.map((element) => {
    dec_docs += `<div class="box" style="grid-area: ${element[0]}"><h1>${element[1]}</h1></div>`;
});
document.getElementById("hero-dec-div").innerHTML = dec_docs;


//========================================| section-1-img-Grid |======================================

let img_group_1_docs="";
let game_posters_card_1 = [
    ["img-1", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg"],
    ["img-2", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg"],
    ["img-3", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_616x353.jpg"],
    ["img-4", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/capsule_616x353.jpg"],
    ["img-5", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg"],
];
game_posters_card_1.map((element)=>{
    img_group_1_docs +=
        `<img src="${element[1]}" alt="${element[0]}" style="height: 185px; width:360px;"/>`
});
document.getElementById("img-row-1").innerHTML = img_group_1_docs;
document.getElementById("img-row-1-clone").innerHTML = img_group_1_docs;


let img_group_2_docs="";
let game_posters_card_2 = [
    ["img-1", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg"], // Elden Ring
    ["img-2", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg"],  // Stardew Valley
    ["img-3", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg"],     // Dota 2
    ["img-4", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/capsule_616x353.jpg"], // Rainbow Six Siege
    ["img-5", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/capsule_616x353.jpg"], // Shogun
];
game_posters_card_2.map((element)=>{
    img_group_2_docs +=
        `<img src="${element[1]}" alt="${element[0]}" style="height: 185px; width:360px;"/>`
});
document.getElementById("img-row-2").innerHTML = img_group_2_docs;
document.getElementById("img-row-2-clone").innerHTML = img_group_2_docs;

let img_group_3_docs="";
let game_posters_card_3 = [
    ["img-1", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg"], // Baldur's Gate 3
    ["img-2", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/capsule_616x353.jpg"],  // Rust
    ["img-3", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg"],  // The Witcher 3
    ["img-4", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg"], // Cyberpunk 2077
    ["img-5", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg"],     // CS2
];
game_posters_card_3.map((element)=>{
    img_group_3_docs +=
        `<img src="${element[1]}" alt="${element[0]}" style="height: 185px; width:360px;"/>`
});
document.getElementById("img-row-3").innerHTML = img_group_3_docs;
document.getElementById("img-row-3-clone").innerHTML = img_group_3_docs;


let img_group_4_docs="";
let game_posters_card_4 = [
    ["img-1", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg"], // Battlefield 2042
    ["img-2", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2379780/capsule_616x353.jpg"], // Hogwarts Legacy
    ["img-3", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg"], // RDR2 (same as yours — swap if needed)
    ["img-4", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/capsule_616x353.jpg"],  // Satisfactory
    ["img-5", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg"], // Battlefield
];
game_posters_card_4.map((element)=>{
    img_group_4_docs +=
        `<img src="${element[1]}" alt="${element[0]}" style="height: 185px; width:360px;"/>`
});
document.getElementById("img-row-4").innerHTML = img_group_4_docs;
document.getElementById("img-row-4-clone").innerHTML = img_group_4_docs;

let img_group_5_docs="";
let game_posters_card_5 = [
    ["img-1", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg"],
    ["img-2", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg"],
    ["img-3", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_616x353.jpg"],
    ["img-4", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/capsule_616x353.jpg"],
    ["img-5", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg"],
];
game_posters_card_5.map((element)=>{
    img_group_5_docs +=
        `<img src="${element[1]}" alt="${element[0]}" style="height: 185px; width:360px;"/>`
});
document.getElementById("img-row-5").innerHTML = img_group_5_docs;
document.getElementById("img-row-5-clone").innerHTML = img_group_5_docs;