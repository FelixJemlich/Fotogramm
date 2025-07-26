
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
    "Santa Croce in Florenz ist eine bedeutende Franziskanerkirche, bekannt für ihre"+
    "prächtige gotische Architektur und als Ruhestätte vieler berühmter Italiener wie"+
    "Michelangelo, Galileo und Machiavelli.",
    "Die Iglesia Parroquial de Santa María la Mayor ist eine historische Pfarrkirche"+
    "in Spanien, die durch ihre Mischung aus gotischen, Renaissance- und barocken"+ 
    "Elementen beeindruckt und oft ein bedeutendes kulturelles sowie religiöses Zentrum"+ 
    "ihrer Region darstellt.",
    "Die Kirche St. Martin in Tellingstedt (Dithmarschen) beeindruckt an ihrer Südostseite"+ 
    "mit charakteristischer norddeutscher Backsteinarchitektur und historischer Ausstrahlung.",
    "Das Kloster Ettal bildet eine eindrucksvolle barocke Kulisse unweit von Oberammergau,"+
    "wo jährlich der traditionsreiche König Ludwig Lauf als beliebtes Skilanglauf-Event"+
    "stattfindet.",
    "Die Kirche der Jungfrau Maria vor dem Teyn erhebt sich im romantisch-gotischen Stil"+
    "eindrucksvoll über den Altstädter Ring in Prag, besonders eindrucksvoll bei"+
    "Sonnenaufgang, wenn ihre detailreiche Fassade in warmem Licht ohne Menschenmengen"+
    "zur Geltung kommt - ein beliebtes Motiv für lizenzfreie Fotos und Stockbilder.",
    "Die Tibidabo-Kirche thront majestätisch auf dem gleichnamigen Berg in Barcelona"+ 
    "und bietet mit ihrer neugotischen Architektur und dem Christusstatue-Turm einen"+
    "spektakulären Ausblick über die Stadt.",
    "Die St.-Katharinenkirche in Osnabrück ist eine spätgotische Hallenkirche mit dem"+
    "höchsten mittelalterlichen Turm Westniedersachsens, die seit dem 13. Jahrhundert"+
    "besteht und heute als bedeutendes historisches Bauwerk für Gottesdienste,"+
    "Konzerte und Ausstellungen genutzt wird.",
    "Die Kirche von Agios Georgios in Paralimni, Zypern, ist ein beeindruckendes"+
    "Gotteshaus mit byzantinischen Elementen, das sich durch ihre hellen Steinfassaden"+
    "und markanten Kuppeln als spirituelles und architektonisches Zentrum der Stadt auszeichnet.",
    "Die Michaelerkirche in Steyr ist eine spätgotische Kirche aus dem 15. Jahrhundert, die"+
    "durch ihre markante Architektur und ihre historische Bedeutung als Teil des ehemaligen"+
    "Franziskanerklosters hervorsticht",
    "Die Iglesia de San Miguel Arcángel in San Miguel de Allende, Mexiko, ist eine ikonische"+
    "neugotische Kirche mit rosafarbener Fassade und markanten Türmen, die als Wahrzeichen der"+
    "Stadt gilt und Touristen wie Gläubige gleichermaßen anzieht.",
    "Die Westminster Abbey in London, England, ist eine weltberühmte gotische Kathedrale,"+
    "die als traditionelle Krönungsstätte britischer Monarchen dient und zugleich ein"+
    "bedeutendes historisches und kulturelles Wahrzeichen ist.",
    "Die berühmte Auferstehungskirche des vergossenen Blutes in Sankt Petersburg"+
    "ist eine prächtige russisch-orthodoxe Kirche, bekannt für ihre farbenfrohen"+
    "Zwiebeltürme und als Gedenkstätte an die Ermordung Zar Alexanders II.",
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
        ImgSrc.push(`/img/Church-${i}-min.jpg`);
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
    <figure id="${churchIds[i]}" onclick="modalEvent()" class = "picture-container">
        <img src="${ImageSrc[i]}" alt="${ImageAlt[i]}" loading="lazy">
        <figcaption>${ImageCaption[i]}</figcaption>
    </figure>
    `;
};


let overlayRef = document.getElementById('overlay')
    overlayRef.classList.toggle('d_none')

function modalEvent (){
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('d_none');
    dialogWindow();
    let innerDialogImg= document.getElementById('dialog-popup');
    for (let i = 0; i < ImageCaption.length; i++) {
    innerDialogImg.innerHTML += dialogWindow(i, ImageCaption, ImageAlt, ImageSrc, churchIds);
    };
}

function dialogWindow (i, ImageCaption, ImageAlt, ImageSrc, churchIds){
    return`
        <div class="positioning-inpage">
        <div class="positioning" id="dialog">
            <div class="img-title-align">
                <p class="picture-from">
                    das ist img 3<!-- hier kommt der Dokumententitel rein -->
                </p>
                <button id="close" class="cross-btn">    
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>
            <div class="churchid-box"id="churchId">
            </div>
            <nav class="btn-aligning">
                <button onclick="nextpictureLeft()" class="circle-btn arrow-btn">
                    <i class="fa-solid fa-arrow-left fa-xl"></i>
                </button>
                <p class="picture-from">
                    1 / 12<!-- hier kommt die Info rein für den Fortschritt 1 von 12 -->
                </p>
                <button onclick="nextpictureRíght()" class="circle-btn arrow-btn">
                    <i class="arrow-btn fa-solid fa-arrow-right fa-xl"></i>
                </button>
            </nav>
        </div>
    </div>
    `
}

let closeDialog = document.getElementById("close")[0];

// closeDialog.onclick = function() {
//     dialog-popup.style.display = "none";
//     overlay.style.display ="none";
//     loadImg()
// }






