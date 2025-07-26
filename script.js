
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

let ImageAlt= [
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
    "Kirche im neorussischen Stil mit farbenfrohen Zwiebeltürmen",
];

let ImageCaption= [
    "Santa Croce in Florenz ist eine berühmte Franziskanerkirche und Ruhestätte"+
    "großer italienischer Persönlichkeiten.",
    "Die Iglesia Parroquial in Spanien vereint gotische, Renaissance- und barocke"+ 
    "Elemente.",
    "St. Martin in Tellingstedt ist eine norddeutsche Feldsteinkirche mit typischer"+
    "Backsteinarchitektur.",
    "Das barocke Kloster Ettal bei Oberammergau ist für seine Architektur und"+
    "kulturellen Veranstaltungen bekannt.",
    "Die Teynkirche in Prag beeindruckt durch ihre hochgotische Fassade und"+
    "malerische Lage am Altstädter Ring.",
    "Die Tibidabo-Kirche in Barcelona bietet neugotische Architektur und"+ 
    "einen Panoramaausblick über die Stadt.",
    "Die St.-Katharinenkirche ist eine spätgotische Hallenkirche mit dem"+
    "höchsten mittelalterlichen Turm Westniedersachsens.",
    "Agios Georgios in Paralimni ist eine moderne byzantinische Kirche mit"+
    "markanten Kuppeln.",
    "Die spätgotische Michaelerkirche in Steyr stammt aus dem 15. Jahrhundert"+
    "und war einst Teil eines Klosters.",
    "Die Iglesia de San Miguel in Mexiko beeindruckt mit ihrer rosa neugotischen"+
    "Fassade und markanten Türmen.",
    "Die Westminster Abbey in London ist eine gotische Kathedrale und Krönungskirche"+
    "britischer Monarchen.",
    "Die Auferstehungskirche in St. Petersburg ist berühmt für ihre bunten Zwiebeltürme"+
    "und ihre Gedenkbedeutung."
];




function createChurchIds(){
    let ids=[];
    for (let i = 1; i <= ImgName.length; i++) {
        ids.push(`church-${i}`);
    }
    return ids;
};
let churchIds = createChurchIds();

function createImageSrc(){
    let ImgSrc=[];
    for (let i = 1; i <= ImgName.length; i++) {
        ImgSrc.push(`./img/Church-${i}-min.jpg`);
    }
    return ImgSrc;
};

let ImageSrc = createImageSrc();




function loadImg(){
    let contentRef = document.getElementById('maincontainer');
    for (let i = 0; i < ImageCaption.length; i++) {
    contentRef.innerHTML += adressImg(i, ImageCaption, ImageAlt, ImageSrc, churchIds);
    };
};


function adressImg (i, ImageCaption, ImageAlt, ImageSrc, churchIds){
    return`
    <figure id="${churchIds[i]}" onclick="modalEvent(this)" class = "picture-container">
        <img src="${ImageSrc[i]}" alt="${ImageAlt[i]}" loading="lazy">
        <figcaption>${ImageCaption[i]}</figcaption>
    </figure>
    `;
};


let overlayRef = document.getElementById('overlay')
    overlayRef.classList.toggle('d_none')

function modalEvent (el){
    const id = el.id;
    const i = churchIds.indexOf(id); 

    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d_none');

    let innerDialogImg = document.getElementById('dialog-popup')
    innerDialogImg.innerHTML = dialogWindow(i, ImageCaption, ImageAlt, ImageSrc, ImgName, churchIds);
};


function dialogWindow (i, ImageCaption, ImageAlt, ImageSrc, ImgName){
    return`
        <div class="positioning-inpage">
        <div class="positioning" id="dialog">
            <div class="img-title-align">
                <p id="picture-from" class="picture-from">
                    <strong>${ImgName[i]}</strong>
                </p>
                <button onclick=("close") class="cross-btn">    
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>
            <div class="churchid-box"id="churchId-${i}">
                <img class="churchid-box" src="${ImageSrc[i]}" alt="${ImageAlt[i-1]}">
            </div>
            <span class="caption-aligning">${ImageCaption[i]}</span>
            <nav class="btn-aligning">
                <button onclick="nextpictureLeft()" class="circle-btn arrow-btn">
                    <i class="fa-solid fa-arrow-left fa-xl"></i>
                </button>
                <p class="picture-from">
                    ${i+1} / ${ImgName.length}
                </p>
                <button onclick="nextpictureRíght()" class="circle-btn arrow-btn">
                    <i class="arrow-btn fa-solid fa-arrow-right fa-xl"></i>
                </button>
            </nav>
        </div>
    </div>
    `
}

function nextpictureRíght(i){
    let nextIndex=(i+1)% ImgName.length;
    let innerDialogImg = document.getElementById('dialog-popup');
    innerDialogImg.innerHTML = dialogWindow(nextIndex, ImageCaption, ImageAlt, ImageSrc, ImgName);
}

function nextpictureLeft(){
    let nextIndex=(i-1)% ImgName.length;
    let innerDialogImg = document.getElementById('dialog-popup');
    innerDialogImg.innerHTML = dialogWindow(nextIndex, ImageCaption, ImageAlt, ImageSrc, ImgName);
}

// onclick event für den cross btn
// closeDialog.onclick = function() {
//     let dialogPopup = document.getElementById("dialog");
//     dialogPopup.style.display = "none";
// };



//     overlay.style.display ="none";
//     loadImg()
// }






