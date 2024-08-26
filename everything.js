document.querySelectorAll('.butterfly-case').forEach(caseElement => {
    caseElement.addEventListener('click', () => {
        let text;
        switch(caseElement.id) {
            case 'first-meeting':
                text = `bdet f bus tae wehran, knt cheyefha m kbel but lil asef makount naerf eliha welou, so heta 3ewedt lkitha f nefs blasa....i was thinking if mhdrtch meaha lym mghdch nzid nchoufha...so i told her ghdi yjou bzf nes w chechra end gichet so if rki reyha lel maleh khlini njiblek ticket meaya ... she said : la sahiiit :(   el muhim moraha b chwi glt faruk dn't give up so when hdrt meaha 2nd time w bghit ndir contact taeha mabghetch tmedli w gtli khetra jeya , i was like khles she is not interested.... fetou liyem hta hiya li resltli then erft she is intoo mee لا محالة👽`;
                break;
            case 'why-that-girl':
                text = "Texte pour 'Why That Girl'";
                break;
            case 'somethings-to-say':
                text = "Texte pour 'Somethings to Say'";
                break;
            default:
                text = "";
        }
        const textDisplay = document.getElementById('text-display');
        textDisplay.textContent = text;
        textDisplay.style.display = 'block'; // Afficher le cadre noir
    });
    document.querySelectorAll('.butterfly-case').forEach(caseElement => {
        caseElement.addEventListener('click', () => {
            let text;
            switch(caseElement.id) {
                case 'first-meeting':
                    text = `bdet f l'agence tae wehran, knt cheyefha m kbel but lil asef makount naerf eliha welou, so heta 3ewedt lkitha f nefs blasa....i was thinking if mhdrtch meaha lym mghdch nzid nchoufha...so i told her ghdi yjou bzf nes w chechra end gichet so if rki reyha lel maleh khlini njiblek ticket meaya ... she said : la sahiiit :(   el muhim moraha b chwi glt faruk dn't give up so when hdrt meaha 2nd time w bghit ndix contact taeha mabghetch tmedli w gtli khetra jeya , i was like  : khles she is not interested.... fetou liyem hta hiya li resltli then erft she is intoo me لا محالة👽`;
                    break;
                case 'why-that-girl':
                    text = `At first bcs she is pretty , jeya cuuuute , has an asian eyes 🙃 , w ki hderna i told her bli ana mnich m type li yhdr mea girls wela social kind of so lkit hta hiya kifi , also tefhmeni fi bzf swlh even khetratch nedabzou .... w tni m reasons li khlwni nekhtarha : nhes rhi real a lot w mchi metsane3 whn i talk with her. `;
                    break;
                case 'somethings-to-say':
                    text =   'kyn a looot of things to say here bsh hd website ghdi ykn public so nhki swlh w nkhli slwh ngoulhom liha  :  at first rha zaefana mni bcs of hja bad drtha meaha bsh imma doing my best bch nkhliha tsamehni w nkhliha tdir fiya confiance khir m lewel  also imma trying bch nkhliha tet2aked bli i really want her, w nkhliha tbghini w thesni always meaha ...but all of this ykoun bla promises bcs tekrah li yepromilha   ';  
                    break;
                case 'somethings-about-her':
                    text = "her favorite song : Saif Nabeel - Kol Youm Elk Ashtak 🤎   Our favorite song mea baed : Muslim- Aleb fel Dafater💙    Someone nesm3ouh w nbghouh both  : Al Shami🩶"   ;
                    
                }
            const textDisplay = document.getElementById('text-display');
            textDisplay.textContent = text;
            textDisplay.style.display = 'block'; // Afficher le cadre noir
        });
    });
    
});
