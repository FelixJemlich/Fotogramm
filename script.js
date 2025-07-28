let ImgName = [
    "Santa Croce",
    "Iglesia Parroquial",
    "St. Martin Kirche",
    "Kloster Ettal",
    "Jungfrau Maria Kirche",
    "Tibidabo-Kirche",
    "Die St.-Katharinenkirche",
    "Agios Georgios",
    "Die Michaelerkirche",
    "Iglesia de San Miguel",
    "Westminster Abbey",
    "Auferstehungskirche",
];

let currentImg = 0;

let ImageSrc = createImageSrc();

let churchIds = createChurchIds();

let ImageAlt = [
    "Santa Croce, gotische Franziskanerkirche in Form einer Basilika",
    "Iglesia Parroquial, Pfarrkirche",
    "St. Martin, romanische Feldsteinkirche",
    "Kloster Ettal, barockisierte Basilika",
    "Die Kirche der Jungfrau Maria vor dem Teyn ,hochgotische dreischiffige Basilika",
    "Tibidabo-Kirche, neugotische Votivkirche",
    "Die St.-Katharinenkirche, dreischiffige spätgotische Hallenkirche",
    "Agios Georgios, Pfarrkirche im modernen byzantinischen Stil",
    "Die Michaelerkirche, barocke Wandpfeilerkirche mit zwei Fassadentürmen",
    "Iglesia de San Miguel, neogotische Pfarrkirche mit markanter rosa Cantera-Fassade",
    "Westminster Abbey, berühmte gotische Kathedrale",
    "Auferstehungskirche des vergossenen Blutes, prachtvolle russisch-orthodoxe" +
    " " +
    "Kirche im neorussischen Stil mit farbenfrohen Zwiebeltürmen",
];

let ImageCaption = [
    "Santa Croce in Florenz ist eine berühmte Franziskanerkirche und Ruhestätte" +
    " " +
    "großer italienischer Persönlichkeiten.",
    "Die Iglesia Parroquial in Spanien vereint gotische, Renaissance- und barocke" +
    " " +
    "Elemente.",
    "St. Martin in Tellingstedt ist eine norddeutsche Feldsteinkirche mit typischer" +
    "" +
    "Backsteinarchitektur.",
    "Das barocke Kloster Ettal bei Oberammergau ist für seine Architektur und" +
    " " +
    "kulturellen Veranstaltungen bekannt.",
    "Die Teynkirche in Prag beeindruckt durch ihre hochgotische Fassade und" +
    " " +
    "malerische Lage am Altstädter Ring.",
    "Die Tibidabo-Kirche in Barcelona bietet neugotische Architektur und" +
    " " +
    "einen Panoramaausblick über die Stadt.",
    "Die St.-Katharinenkirche ist eine spätgotische Hallenkirche mit dem" +
    " " +
    "höchsten mittelalterlichen Turm Westniedersachsens.",
    "Agios Georgios in Paralimni ist eine moderne byzantinische Kirche mit" +
    " " +
    "markanten Kuppeln.",
    "Die spätgotische Michaelerkirche in Steyr stammt aus dem 15. Jahrhundert" +
    " " +
    "und war einst Teil eines Klosters.",
    "Die Iglesia de San Miguel in Mexiko beeindruckt mit ihrer rosa neugotischen" +
    " " +
    "Fassade und markanten Türmen.",
    "Die Westminster Abbey in London ist eine gotische Kathedrale und Krönungskirche" +
    " " +
    "britischer Monarchen.",
    "Die Auferstehungskirche in St. Petersburg ist berühmt für ihre bunten Zwiebeltürme" +
    " " +
    "und ihre Gedenkbedeutung.",
];


function createChurchIds() {
    let ids = [];
    for (let imgId = 1; imgId <= ImgName.length; imgId++) {
    ids.push(`church-${imgId}`);
    }
    return ids;
}

function createImageSrc() {
    let ImgSrc = [];
    for (let imgId = 1; imgId <= ImgName.length; imgId++) {
    ImgSrc.push(`./img/Church-${imgId}-min.jpg`);
    }
    return ImgSrc;
}


function loadImg() {
    let contentRef = document.getElementById("maincontainer");
    for (let imgId = 0; imgId < ImageCaption.length; imgId++) {
    contentRef.innerHTML += adressImg(imgId, ImageCaption, ImageAlt, ImageSrc, churchIds);
    }
}

function adressImg(imgId, ImageCaption, ImageAlt, ImageSrc, churchIds) {
    return `
    <figure id="${churchIds[imgId]}" onclick="openImgDetailDialog(${[imgId]})" class = "picture-container">
        <img src="${ImageSrc[imgId]}" alt="${ImageAlt[imgId]}" loading="lazy">
        <figcaption>${ImageCaption[imgId]}</figcaption>
    </figure>
    `;
}

function openImgDetailDialog(imgId) {
    let overlay = document.getElementById("overlay");
    overlay.classList.remove("d_none");

    let innerDialogImg = document.getElementById("dialog-popup");
    innerDialogImg.classList.remove("d_none");
    innerDialogImg.innerHTML = dialogWindow(
    imgId,
    ImageCaption,
    ImageAlt,
    ImageSrc,
    ImgName,
    churchIds
    );
}

function overlayClick(event) {
    event.stopPropagation();
    let innerDialogImg = document.getElementById("dialog-popup");
    innerDialogImg.classList.add("d_none");
    let overlay = document.getElementById("overlay");
    overlay.classList.add("d_none");
}

function dialogWindow(imgId, ImageCaption, ImageAlt, ImageSrc, ImgName) {
    return `
    <dialog class="positioning" id="dialog">
        <div class="img-title-align">
            <p id="picture-from" class="picture-from">
                <strong>${ImgName[imgId]}</strong>
            </p>
            <button onclick="closeDialogWindow()" class="cross-btn">    
                <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
        </div>
        <div class="churchid-box"id="churchId-${imgId}">
            <img class="churchid-box" src="${ImageSrc[imgId]}" alt="${ImageAlt[imgId-1]}">
        </div>
        <div class="caption">
        <p>${ImageCaption[imgId]}</p>
        </div>
        <nav class="btn-aligning">
            <button onclick="nextpictureLeft()" class="circle-btn arrow-btn">
                <i class="fa-solid fa-arrow-left fa-xl"></i>
            </button>
            <p class="picture-from">
                ${imgId+1} / ${ImgName.length}
            </p>
            <button onclick="nextpictureRight()" class="circle-btn arrow-btn">
                <i class="arrow-btn fa-solid fa-arrow-right fa-xl"></i>
            </button>
        </nav>
    </dialog>
    `;
}
function nextpictureLeft() {
    currentImg--;
    if (currentImg < 0) currentImg = ImageCaption.length - 1;
    openImgDetailDialog(currentImg);
}

function nextpictureRight() {
    currentImg++;
    if (currentImg >= ImageCaption.length) currentImg = 0;
    openImgDetailDialog(currentImg);
}

function closeDialogWindow() {
    let innerDialogImg = document.getElementById("dialog-popup");
    innerDialogImg.classList.add("d_none");
    let overlay = document.getElementById("overlay");
    overlay.classList.add("d_none");
}
