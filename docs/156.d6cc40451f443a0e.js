"use strict";(self.webpackChunkTheCVD=self.webpackChunkTheCVD||[]).push([[156],{156:(j,d,r)=>{r.r(d),r.d(d,{DoulasModule:()=>L});var a=r(895),s=r(485),e=r(256);let h=(()=>{class o{}return o.\u0275fac=function(X){return new(X||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-doulas-main"]],decls:1,vars:0,template:function(X,t){1&X&&e._UZ(0,"router-outlet")},dependencies:[s.lC]}),o})();var g=r(698);let c=(()=>{class o{get list(){return this.getAllDoulas(),this.listOfDoulas}constructor(){}getAllDoulas(){this.listOfDoulas=[{id:"001",pronoun:"She/Her",name:{first:"laura",last:"l"},email:" laura.l@chicagovolunteerdoulas.org",withCVD:"April 2023",moreInfo:"XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX",currentProgram:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",website:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",facebook:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",locations:["central","north side","northwest side","west side"],image:"https://static.wixstatic.com/media/fe2ceb_5d441da52ed14259aeab72da2a38abc3~mv2.jpg/v1/crop/x_0,y_403,w_1474,h_1086/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Laura%20Lusson%20Aug%202023%20-%20Laura%20Lusson.jpg"},{id:"002",pronoun:"She/Her",name:{first:"rise",last:"o"},email:" laura.l@chicagovolunteerdoulas.org",withCVD:"April 2023",moreInfo:"XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX",currentProgram:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",website:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",facebook:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",locations:["central","far north side","northwest side","south side","far southwest side","south side","west side"],image:"https://static.wixstatic.com/media/fe2ceb_202c1e05c3f749e68bad1d5e7500ed22~mv2.jpg/v1/crop/x_0,y_659,w_2208,h_1627/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20230423_155451%20-%20Rise%20Nerissa%20Osby.jpg"},{id:"003",pronoun:"She/Her",name:{prefix:"dr",first:"chanel",last:"p"},email:" laura.l@chicagovolunteerdoulas.org",withCVD:"April 2023",moreInfo:"XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX",currentProgram:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",website:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",facebook:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",locations:["central","far south side","southeast side","far southwest side","south side","southwest side","west side"],image:"https://static.wixstatic.com/media/c286fe_11e02a2b50144f7fb20488c94c327b4d~mv2.jpg/v1/crop/x_0,y_63,w_2000,h_1474/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DrChanelP.jpg"},{id:"004",pronoun:"She/Her",name:{first:"Rise",last:"O"},email:" laura.l@chicagovolunteerdoulas.org",withCVD:"April 2023",moreInfo:"XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX",currentProgram:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",website:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",facebook:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",locations:["central","far north side","north side","northwest side","west side"],image:"https://static.wixstatic.com/media/fe2ceb_34dbb37af01347bfab2412f7b3de7b7d~mv2.jpg/v1/crop/x_0,y_1702,w_8000,h_5895/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bolocans%20(52%20of%20189)%20-%20Sarah%20Bolocan.jpg"}]}getByID(X){return this.listOfDoulas||this.getAllDoulas(),this.list.find(t=>t.id===X)}}return o.\u0275fac=function(X){return new(X||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=r(122);let m=(()=>{class o{transform(X,t=null){return Array(X).fill(t)}}return o.\u0275fac=function(X){return new(X||o)},o.\u0275pipe=e.Yjl({name:"createArray",type:o,pure:!0}),o})();const f=["progress"];function _(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"div",6),e.BQk()),2&o){const X=i.index,t=e.oxw();e.xp6(1),e.ekj("active",X<t.position),e.Q6J("id","point"+X)}}let A=(()=>{class o{constructor(){this.position=1,this.max=1}set progress(X){X&&(this.position=X.pos||X.position||1,this.max=X.max||1),this.progressBar&&this.setProgress()}ngAfterViewInit(){this.setProgress()}setProgress(){this.progressBar.nativeElement.style.width=(this.position-1)/(this.max-1)*100+"%"}}return o.\u0275fac=function(X){return new(X||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-progress-bar"]],viewQuery:function(X,t){if(1&X&&e.Gf(f,5),2&X){let n;e.iGM(n=e.CRH())&&(t.progressBar=n.first)}},inputs:{progress:"progress"},decls:7,vars:3,consts:[["id","bar2",1,"bar"],["id","progressMax"],["id","progress"],["progress",""],["id","bar1",1,"bar"],[4,"ngFor","ngForOf"],[1,"point",3,"id"]],template:function(X,t){1&X&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2,3),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,_,2,3,"ng-container",5),e.ALo(6,"createArray"),e.qZA()),2&X&&(e.xp6(5),e.Q6J("ngForOf",e.lcZ(6,1,t.max)))},dependencies:[a.sg,m],styles:["[_nghost-%COMP%]{position:relative;display:block;height:25px}.bar[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:space-between;align-items:center;width:100%;height:100%}#bar2[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.point[_ngcontent-%COMP%]{aspect-ratio:1;height:100%;background-color:gray;border-radius:10rem;transition:background-color .2s .2s}.point.active[_ngcontent-%COMP%]{background-color:green}#progressMax[_ngcontent-%COMP%]{width:100%;height:33.3333333333%;background-color:gray;border-radius:10rem;transition:width .2s ease-in-out}#progress[_ngcontent-%COMP%]{height:100%;background-color:green;border-radius:10rem;transition:width .2s ease-in-out}"]}),o})();const y=["slider"],v=["sliderContainer"];function b(o,i){if(1&o){const X=e.EpF();e.ynx(0),e.TgZ(1,"app-button",10),e.NdJ("click",function(){e.CHM(X);const n=e.oxw();return e.KtG(n.nextSlide())}),e._uU(2,"next"),e.qZA(),e.BQk()}}function w(o,i){1&o&&(e.TgZ(0,"app-button",23),e._uU(1,"next"),e.qZA())}function C(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"div",24),e._UZ(2,"div",25),e.TgZ(3,"div",26),e._uU(4),e.ALo(5,"slice"),e.qZA()(),e.BQk()),2&o){const X=i.$implicit;e.xp6(4),e.AsE(" ",X.name.first," ",e.Dn7(5,2,X.name.last,0,1),". ")}}let Z=(()=>{class o{constructor(X,t,n){this.s_doulas=X,this.router=t,this.activatedRoute=n,this.users=[{id:1,name:{first:"John",last:"Doe"},email:"XXXXXXXXXXXX",phone:"XXXXXXXXXXXX"},{id:2,name:{first:"Jane",last:"Doe"},email:"XXXXXXXXXXXX",phone:"XXXXXXXXXXXX"}],this.agreed=!1,this.slidePosition=1,this.progressBar={},n.params.pipe((0,g.q)(1)).subscribe(u=>this.params={...u});const l=X.getByID(this.params.doula);l?this.doulaInfo=l:t.navigate(["/doulas"]),console.log(this.doulaInfo)}ngAfterViewInit(){this.setSliderWidth(),this.setSlidePosition(this.slidePosition),this.updateProgressBar()}setSliderWidth(){this.slideWidth=this.sliderContainer.nativeElement.offsetWidth,this.slider.nativeElement.querySelectorAll(".slide").forEach(X=>{X.style.width=this.slideWidth+"px"})}updateProgressBar(){this.progressBar={pos:this.slidePosition,max:this.slider.nativeElement.childElementCount}}setSlidePosition(X){this.slidePosition=X,this.slider.nativeElement.style.transform=`translateX(-${this.slideWidth*(X-1)}px)`}prevSlide(){this.slidePosition>1&&this.setSlidePosition(this.slidePosition-1),this.updateProgressBar()}nextSlide(){this.slidePosition<this.slider.nativeElement.childElementCount&&this.setSlidePosition(this.slidePosition+1),this.updateProgressBar()}toggleAgree(){this.agreed=!this.agreed}}return o.\u0275fac=function(X){return new(X||o)(e.Y36(c),e.Y36(s.F0),e.Y36(s.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form"]],viewQuery:function(X,t){if(1&X&&(e.Gf(y,5),e.Gf(v,5)),2&X){let n;e.iGM(n=e.CRH())&&(t.slider=n.first),e.iGM(n=e.CRH())&&(t.sliderContainer=n.first)}},hostBindings:function(X,t){1&X&&e.NdJ("resize",function(){return t.setSliderWidth()},!1,e.Jf7)},decls:158,vars:5,consts:[["id","content"],["sliderContainer",""],[3,"progress"],["id","container"],["slider",""],["id","slide1",1,"slide"],[1,"formCard"],[1,"formHeader"],[1,"formBody"],[1,"cta"],[3,"click"],["id","slide2",1,"slide"],[1,"spb5Rd","OIC90c"],[2,"white-space","pre"],["id","agreement"],["type","checkbox","id","agree",3,"checked","click"],["for","agree"],[4,"ngIf","ngIfElse"],["disagreed",""],["id","slide3",1,"slide"],["id","users"],[4,"ngFor","ngForOf"],["id","slide4",1,"slide"],["type","disabled"],[1,"user"],[1,"userPuck"],[1,"userName"]],template:function(X,t){if(1&X&&(e.TgZ(0,"div",0,1),e._UZ(2,"app-progress-bar",2),e.TgZ(3,"div",3,4)(5,"div",5)(6,"div",6)(7,"div",7),e._uU(8,"Request for Birth Doula Services"),e.qZA(),e.TgZ(9,"div",8),e._uU(10," CVD is a birth justice organization providing comprehensive doula support with a focus on vulnerable communities in the Chicago-land area. Doulas provide educational, physical and emotional support before, during and immediately after labor and childbirth. A doula does not provide any type of medical care. "),e._UZ(11,"br")(12,"br"),e._uU(13," A Chicago Volunteer Doula is a labor support professional who has chosen to commit time and energy to helping pregnant people and their families in Chicago. Our doulas come from a variety of backgrounds. They are social workers, childcare workers, cab drivers, community organizers, accountants, stay-at-home moms, midwifery students, artists, activists, nurses, lawyers, teachers, yoga instructors and massage therapists. "),e._UZ(14,"br")(15,"br"),e._uU(16," Our doulas celebrate different racial, ethnic, cultural and religious backgrounds and some are fluent in Spanish, Russian and Polish to name a few. CVD doulas include women, men and gender non-conforming or trans people, as well as members of both straight and LGBTQI communities. Some of our doulas have disabilities. No matter their background ALL of our doulas are committed to providing the best doula support to the clients we serve. If you feel you would not be comfortable receiving services from a doula who may not be from the same community as you or may come from a different background please let us know and we will be happy to refer you to a community based doula program or get you a list of private doulas. "),e.qZA(),e.TgZ(17,"div",9)(18,"app-button",10),e.NdJ("click",function(){return t.nextSlide()}),e._uU(19,"next"),e.qZA()()()(),e.TgZ(20,"div",11)(21,"div",6)(22,"div",7),e._uU(23,"Terms and conditions"),e.qZA(),e.TgZ(24,"div",8)(25,"div",12)(26,"b"),e._uU(27,"What your doula will do for you:\xa0"),e.qZA(),e.TgZ(28,"div"),e._uU(29," \u2022They will assist you in a safe and supported birth.\xa0 "),e.qZA(),e.TgZ(30,"div"),e._uU(31," \u2022 They will meet with you and your birth partner(s) in advance to get acquainted and talk about your birth.\xa0 "),e.qZA(),e.TgZ(32,"div"),e._uU(33," \u2022They will be available by phone for other questions/concerns before and after your birth. \xa0\xa0 "),e.qZA(),e.TgZ(34,"div"),e._uU(35," \u2022\xa0They will meet you at home/hospital when you are in labor and go with you to the hospital staying throughout your labor and birth and for 1-2 hours afterwards. \xa0 "),e.qZA(),e.TgZ(36,"div"),e._uU(37," \u2022They will make suggestions for labor progress and encourage you to get information to make decisions. \u2022\xa0They will visit you following the birth to see how things are going and to review your birth\xa0 "),e.qZA(),e.TgZ(38,"div"),e._uU(39," \u2022\xa0After the birth, They will provide information for postpartum recovery, breastfeeding, and baby care. \xa0 "),e.qZA(),e.TgZ(40,"div"),e._uU(41," \u2022\xa0As your doula, they are working for you, not your caregiver or hospital.\xa0 "),e.qZA(),e.TgZ(42,"div"),e._uU(43," \u2022 If for any reason they are unable to come or continue as your doula, we will make sure that a back-up doula is called in. \xa0\xa0 "),e.qZA(),e.TgZ(44,"div"),e._UZ(45,"br"),e.qZA(),e.TgZ(46,"div")(47,"b"),e._uU(48,"What your doula does not do:\xa0"),e.qZA()(),e.TgZ(49,"div"),e._uU(50," \u2022 They do not perform any medical tasks. They do not function in the role of medical personnel. They do not and cannot make any decisions regarding your medical care on your behalf.\xa0 "),e.qZA(),e.TgZ(51,"div"),e._uU(52," \u2022"),e._UZ(53,"span",13),e._uU(54,"They do not and cannot make any medical judgment or give medical advice requiring the expertise of trained medical personnel. \xa0 \xa0 "),e.qZA(),e.TgZ(55,"div"),e._uU(56," \u2022"),e._UZ(57,"span",13),e._uU(58,"They do not speak to the staff on your behalf. They will discuss your concerns with you and urge you to speak to the health care staff directly yourself.\xa0 "),e.qZA(),e.TgZ(59,"div"),e._uU(60," \u2022They will not drive you and/or your birth partner(s) to the hospital while in labor. \xa0\xa0 "),e.qZA(),e.TgZ(61,"div"),e._uU(62," \u2022They do not attend births unassisted by health care providers. \xa0If a birth becomes unintentionally unassisted, your doula will call 911 or require that you call 911. \xa0 \xa0 "),e.qZA(),e.TgZ(63,"div"),e._UZ(64,"br"),e.qZA(),e.TgZ(65,"div")(66,"b"),e._uU(67,"Client Responsibilities:\xa0"),e.qZA()(),e.TgZ(68,"div"),e._uU(69," \u2022 You will call your doula when you are in labor as agreed.\xa0You will give them as much notice as possible to make it to you in a timely fashion.\xa0 "),e.qZA(),e.TgZ(70,"div"),e._uU(71," \u2022 You will notify the Program Director if you have concerns about your doula assignment. If you decide not to use your doula, you will let CVD know ASAP so that the doula can help another client. \xa0 "),e.qZA(),e.TgZ(72,"div"),e._uU(73," \u2022 You will share your birth plan with your care provider and let them know that you will have a doula with you in labor.\xa0 "),e.qZA(),e.TgZ(74,"div"),e._uU(75," \u2022 Your doulas are available to support you during planned Cesarean Birth. You will let your doula and the Program Director know if you choose not to have them present. \xa0You may be able to receive half of your donation deposit back if you decide not to use our services and notify us before 37 weeks. Because this is a volunteer based program we can not guarantee service to everyone but do our best to do so. If you deliver before you are matched we will refund your donation. \xa0I understand that a doula provides physical, emotional and informational support only and I agree to hold,\xa0"),e.TgZ(76,"i"),e._uU(77,"Chicago Volunteer Doulas, Inc."),e.qZA(),e._uU(78,"\xa0and any affiliated partner institutions, where applicable, harmless for all medical or other issues that arise during the supported birth. By entering today's date below I acknowledge that I have read the above and understand the doula\u2019s role and my responsibilities. \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 "),e.qZA(),e.TgZ(79,"div"),e._uU(80," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0*********************************"),e.TgZ(81,"span"),e._uU(82,"********************************************\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),e.qZA()(),e.TgZ(83,"div"),e._UZ(84,"br"),e.qZA(),e.TgZ(85,"div")(86,"b")(87,"u"),e._uU(88,"Lo que su doula va a hacer por usted:\xa0"),e.qZA()()(),e.TgZ(89,"div"),e._uU(90," \u2022 Le brindar\xe1 apoyo y le ayudar\xe1n a tener un parto seguro. "),e.qZA(),e.TgZ(91,"div"),e._uU(92," \u2022 Se reunir\xe1 con usted y su acompa\xf1ante (s) de parto con antelaci\xf3n para conocer y hablar acerca de su nacimiento.\xa0 "),e.qZA(),e.TgZ(93,"div"),e._uU(94," \u2022 Estar\xe1 disponibles por tel\xe9fono para otras preguntas / preocupaciones antes y despu\xe9s de su nacimiento.\xa0 "),e.qZA(),e.TgZ(95,"div"),e._uU(96," \u2022 Le esperar\xe1 en el hogar / hospital cuando usted est\xe9 en trabajo de parto e ir\xe1 con usted al hospital, acompa\xf1\xe1ndole durante todo el parto y hasta 1-2 horas despu\xe9s del nacimiento.\xa0 "),e.qZA(),e.TgZ(97,"div"),e._uU(98," \u2022 Le har\xe1 sugerencias para ayudar a que el parto progrese y le animar\xe1 a obtener informaci\xf3n para tomar decisiones.\xa0 "),e.qZA(),e.TgZ(99,"div"),e._uU(100," \u2022 Le visitar\xe1 despu\xe9s del nacimiento para ver c\xf3mo est\xe1 \xa0todo y procesar el nacimiento\xa0 "),e.qZA(),e.TgZ(101,"div"),e._uU(102," \u2022 Despu\xe9s del nacimiento, proporcionar\xe1 informaci\xf3n para la recuperaci\xf3n despu\xe9s del parto, la lactancia y el cuidado del beb\xe9. \xa0Como su doula, est\xe1 trabajando para usted, no para su m\xe9dico o el hospital.\xa0 "),e.qZA(),e.TgZ(103,"div"),e._uU(104," \u2022 Si por alguna raz\xf3n no puede llegar o continuar como su doula, nos aseguraremos de acudir a una doula de respaldo. \xa0Lo que su doula no hace\xa0 "),e.qZA(),e.TgZ(105,"div"),e._uU(106," \u2022 No lleva a cabo los procedimientos m\xe9dicos. No ejercen en un rol de personal m\xe9dico. No pueden tomar ninguna decisi\xf3n con respecto a su atenci\xf3n m\xe9dica de parte suya.\xa0 "),e.qZA(),e.TgZ(107,"div"),e._uU(108," \u2022 No pueden y no hacen ning\xfan juicio m\xe9dico o dan asesoramiento m\xe9dico que requiere el conocimiento \xa0de personal m\xe9dico capacitado.\xa0 "),e.qZA(),e.TgZ(109,"div"),e._uU(110," \u2022 No hablan con el personal en su nombre. Ellos van a discutir sus preocupaciones con usted y le animan a hablar con el personal de atenci\xf3n de salud directamente por s\xed mismo.\xa0 "),e.qZA(),e.TgZ(111,"div"),e._uU(112," \u2022 No le conducir\xe1n a usted y / o su pareja (s) de nacimiento hacia el hospital durante el parto.\xa0 "),e.qZA(),e.TgZ(113,"div"),e._uU(114," \u2022 No asisten partos que no son asistidos por profesionales de la salud. Si el parto se torna inminente, su doula llamar\xe1 al 911 o le pedir\xe1 que llame al 911. Responsabilidades del Cliente:\xa0 "),e.qZA(),e.TgZ(115,"div"),e._uU(116," \u2022 Debe llama a su doula cuando inicie el trabajo de parto seg\xfan lo acordado. Les dar\xe1 la mayor anticipaci\xf3n posible para que lleguen a usted en un momento oportuno.\xa0 "),e.qZA(),e.TgZ(117,"div"),e._uU(118," \u2022 Usted notificar\xe1 a la directora del programa si usted tiene preocupaciones acerca de su doula asignada. Si decide no utilizar su doula, avise a CVD lo m\xe1s pronto posible para que la doula puede ayudar a otro cliente.\xa0 "),e.qZA(),e.TgZ(119,"div"),e._uU(120," \u2022 Usted le compartir\xe1 su plan de parto a su proveedor de atenci\xf3n y les dejar\xe1 \xa0saber que le acompa\xf1ar\xe1 una doula durante el parto.\xa0 "),e.qZA(),e.TgZ(121,"div"),e._uU(122," \u2022 Sus doulas est\xe1n disponibles para apoyarle durante el parto por ces\xe1rea planificada. Le dejar\xe1 saber a su doula y la directora del programa si optar por no tenerlos presentes. Es posible que pueda recibir un reembolso de la mitad de su dep\xf3sito de donaci\xf3n si usted decide no utilizar nuestros servicios y nos notifica antes de las 37 semanas. Yo entendiendo que la comadrona proporciona apoyo fisicamente, emocional, y informativa solamente y yo estoy de acuerdo en mantener,\xa0"),e.TgZ(123,"i"),e._uU(124,"Chicago Volunteer Doulas, Inc."),e.qZA(),e._uU(125,"\xa0y cualquier institucion que esta afiliado, donde corresponda, mantener indemne de todos problemas medicos o otros asuntos que puedan surjir durante el parto apoyado. Al ingresar la fecha de hoy a continuaci\xf3n, reconozco que he le\xeddo lo anterior y entiendo el papel de la doula y mis responsabilidades. "),e.qZA()()(),e.TgZ(126,"div",14)(127,"input",15),e.NdJ("click",function(){return t.toggleAgree()}),e.qZA(),e.TgZ(128,"label",16),e._uU(129,"I agree"),e.qZA()(),e.TgZ(130,"div",9)(131,"a",10),e.NdJ("click",function(){return t.prevSlide()}),e._uU(132,"prev"),e.qZA(),e.YNc(133,b,3,0,"ng-container",17),e.YNc(134,w,2,0,"ng-template",null,18,e.W1O),e.qZA()()(),e.TgZ(136,"div",19)(137,"div",6)(138,"div",7),e._uU(139,"Who's this for?"),e.qZA(),e.TgZ(140,"div",8)(141,"div",20),e.YNc(142,C,6,6,"ng-container",21),e.qZA()(),e.TgZ(143,"div",9)(144,"a",10),e.NdJ("click",function(){return t.prevSlide()}),e._uU(145,"prev"),e.qZA(),e.TgZ(146,"app-button",10),e.NdJ("click",function(){return t.nextSlide()}),e._uU(147,"next"),e.qZA()()()(),e.TgZ(148,"div",22)(149,"div",6),e._UZ(150,"div",7)(151,"div",8),e.TgZ(152,"div",9)(153,"a",10),e.NdJ("click",function(){return t.prevSlide()}),e._uU(154,"prev"),e.qZA(),e.TgZ(155,"app-button",10),e.NdJ("click",function(){return t.nextSlide()}),e._uU(156,"next"),e.qZA()()()()()(),e.TgZ(157,"div",10),e.NdJ("click",function(){return t.nextSlide()}),e.qZA()),2&X){const n=e.MAs(135);e.xp6(2),e.Q6J("progress",t.progressBar),e.xp6(125),e.Q6J("checked",t.agreed),e.xp6(6),e.Q6J("ngIf",t.agreed)("ngIfElse",n),e.xp6(9),e.Q6J("ngForOf",t.users)}},dependencies:[a.sg,a.O5,p.r,A,a.OU],styles:["#content[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;width:100%;height:100%;padding:5rem 0;overflow:hidden}app-progress-bar[_ngcontent-%COMP%]{width:50%;align-self:center}#container[_ngcontent-%COMP%]{flex:1;display:flex;width:max-content;transition:transform .3s;overflow:hidden}.slide[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden}.formCard[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;max-width:60rem;max-height:90%;background-color:#fff;padding:2rem;border-radius:10px;box-shadow:1px 1px 4px #0000004d;line-height:2rem;overflow:hidden}.formHeader[_ngcontent-%COMP%]{width:80%;padding-bottom:2rem;border-bottom:1px solid hsl(0,0%,90%);text-align:center;font-size:2rem;font-weight:900}.formBody[_ngcontent-%COMP%]{flex:1;padding:2rem;overflow-y:auto}#agreement[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:1rem}.cta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:50px;padding:1rem}.cta[_ngcontent-%COMP%]:not(#agreement    + .cta)[_ngcontent-%COMP%]{padding:3rem 1rem 1rem}#slide1[_ngcontent-%COMP%]   .formCard[_ngcontent-%COMP%]   .formContent[_ngcontent-%COMP%]{text-align:justify}#users[_ngcontent-%COMP%]{display:flex;height:5rem}.user[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.userPuck[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;border:1px solid hsl(0,0%,70%);border-radius:10rem}"]}),o})();const x=["locations"],T=["locationsList"],k=["details"],O=["mainDetails"],q=["extra"];function P(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.BQk()),2&o){const X=i.$implicit;e.xp6(2),e.Oqu(X)}}function U(o,i){1&o&&(e.ynx(0),e.TgZ(1,"div",18),e._uU(2,"...(Others)"),e.qZA(),e.BQk())}let M=(()=>{class o{set config(X){if(X.expand){if(X.expand===this._config.expand)return;this._config={...X}}}constructor(X){this.cdRef=X,this.ellipsis=!1,this.hover=!1,this._config={expand:!1},this.data={id:"00000",pronoun:"She/Her",name:{first:"Jane",last:"Doe"},email:"jane.doe@example.com",withCVD:"jan 2023",moreInfo:"XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX",currentProgram:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",website:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",facebook:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",locations:["central","north","south"]}}ngAfterViewInit(){this.locationsInner.nativeElement.offsetHeight>this.locationsOuter.nativeElement.offsetHeight&&(this.ellipsis=!0),this.cdRef.detectChanges(),this._config.expand?this.expand():this.collapse()}collapse(){this.parentSize.nativeElement.style.height=this.childSize.nativeElement.offsetHeight+"px"}expand(){this.parentSize.nativeElement.style.height=this.childSize.nativeElement.offsetHeight+this.extra.nativeElement.offsetHeight+"px"}toggle(X){X.preventDefault(),X.stopPropagation(),this._config.expand=!this._config.expand,this._config.expand?this.expand():this.collapse()}}return o.\u0275fac=function(X){return new(X||o)(e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card"]],viewQuery:function(X,t){if(1&X&&(e.Gf(x,5),e.Gf(T,5),e.Gf(k,5),e.Gf(O,5),e.Gf(q,5)),2&X){let n;e.iGM(n=e.CRH())&&(t.locationsOuter=n.first),e.iGM(n=e.CRH())&&(t.locationsInner=n.first),e.iGM(n=e.CRH())&&(t.parentSize=n.first),e.iGM(n=e.CRH())&&(t.childSize=n.first),e.iGM(n=e.CRH())&&(t.extra=n.first)}},inputs:{config:"config",data:"data"},decls:23,vars:10,consts:[["id","image"],["alt","Image of Doula","center","all",3,"src"],["id","details"],["details",""],["id","mainDetails"],["mainDetails",""],["id","locations"],["locations",""],[1,"title"],["id","locationsList"],["locationsList",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["id","doulaName"],["id","more",3,"click"],["id","moreDetails"],["extra",""],[1,"location"],["id","ellipsis"]],template:function(X,t){1&X&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2,3)(4,"div",4,5)(6,"div",6,7)(8,"span",8),e._uU(9),e.ALo(10,"titlecase"),e.qZA(),e.TgZ(11,"div",9,10),e.YNc(13,P,3,1,"ng-container",11),e.YNc(14,U,3,0,"ng-container",12),e.qZA()(),e.TgZ(15,"div",13)(16,"h3"),e._uU(17),e.qZA()(),e.TgZ(18,"button",14),e.NdJ("click",function(l){return t.toggle(l)}),e._uU(19,"more"),e.qZA()(),e.TgZ(20,"div",15,16),e._uU(22),e.qZA()()),2&X&&(e.xp6(1),e.Q6J("src",t.data.image||"https://th.bing.com/th/id/R.21f843af92566b963fcdfb6bc8ee164f?rik=uHD1oQLoWJRsGg&riu=http%3a%2f%2fgetdrawings.com%2fimg%2ffront-face-silhouette-30.jpg&ehk=%2fpojOgQdAkuB8RnI4IPHHQB7tfczW9nZdSt3pjsUpG0%3d&risl=&pid=ImgRaw&r=0",e.LSH),e.xp6(8),e.Oqu(e.lcZ(10,8,"Areas I serve:")),e.xp6(4),e.Q6J("ngForOf",t.data.locations),e.xp6(1),e.Q6J("ngIf",t.ellipsis),e.xp6(3),e.lnq(" ",t.data.name.prefix?t.data.name.prefix+".":""," ",t.data.name.first," ",t.data.name.last[0],". "),e.xp6(5),e.hij(" ",t.data.moreInfo," "))},dependencies:[a.sg,a.O5,a.rS],styles:['[_nghost-%COMP%]{--host-bg-color: white;display:block;position:relative;width:clamp(300px,100%,500px);height:min-content;padding:8px 8px 0;background-color:var(--host-bg-color);border-bottom:0;border-radius:5px;margin:7px;box-shadow:1px 1px 4px #0006;transition-duration:.3s;transition-timing-function:ease-in-out;cursor:pointer;overflow:hidden}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none;transition-duration:.3s;transition-timing-function:ease-in-out}[_nghost-%COMP%]:hover:not(#more){--host-bg-color: var(--cta-green-2)}[_nghost-%COMP%]:hover:not(#more)   #image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition-duration:.5s;scale:1.03}#image[_ngcontent-%COMP%]{position:relative;aspect-ratio:1.4;width:100%;background-color:#f2f2f2;border:1px solid hsl(0,0%,70%);overflow:hidden}#image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:100%;min-height:100%;height:100%;object-fit:cover;transform-origin:left top}#details[_ngcontent-%COMP%]{background-color:var(--host-bg-color);overflow:hidden}#more[_ngcontent-%COMP%]{display:block;margin:0 auto;padding:.5rem 2rem;border:1px solid hsl(0,0%,80%);pointer-events:all;cursor:pointer}#mainDetails[_ngcontent-%COMP%]{padding:1rem 0}#locations[_ngcontent-%COMP%], #locationsList[_ngcontent-%COMP%]{display:flex;align-content:flex-start;text-transform:capitalize;white-space:nowrap}#locations[_ngcontent-%COMP%]{position:relative;gap:.5rem;height:2rem;margin-bottom:10px;overflow:hidden;color:var(--cta-purple-light)}.title[_ngcontent-%COMP%]{color:var(--cta-purple);font-weight:700}#locationsList[_ngcontent-%COMP%]{flex-wrap:wrap;gap:0 .4rem;height:-moz-fit-content;height:fit-content}.location[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;line-height:1rem}.location[_ngcontent-%COMP%]:not(:last-child):after{content:","}#ellipsis[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;background-color:var(--host-bg-color)}#doulaName[_ngcontent-%COMP%]{text-transform:capitalize}'],changeDetection:0}),o})();function D(o,i){if(1&o){const X=e.EpF();e.ynx(0),e.TgZ(1,"div",6),e.NdJ("click",function(){const l=e.CHM(X).$implicit,u=e.oxw();return e.KtG(u.handleCardVisibility(l))}),e._uU(2),e.qZA(),e.BQk()}if(2&o){const X=i.$implicit,t=e.oxw();e.xp6(1),e.ekj("active",t.showCard[X]),e.xp6(1),e.Oqu(X)}}function E(o,i){if(1&o&&e._UZ(0,"app-card",10),2&o){const X=e.oxw().$implicit;e.Q6J("data",X)("routerLink","../form/"+X.id)}}function F(o,i){if(1&o&&(e.ynx(0),e.YNc(1,E,1,2,"app-card",9),e.BQk()),2&o){const X=i.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.checkCardVisibility(X.id))}}const S=[{path:"",component:h,children:[{path:"",component:(()=>{class o{constructor(){this.location="central"}}return o.\u0275fac=function(X){return new(X||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-synopsis"]],decls:11,vars:7,consts:[["id","body"],["id","startButton",3,"route"]],template:function(X,t){1&X&&(e.TgZ(0,"h1"),e._uU(1),e.ALo(2,"titlecase"),e.qZA(),e.TgZ(3,"div",0)(4,"p"),e._uU(5,"As an expecting person, feeling comfortable with your Birthworker is essential. CVD doulas come with their own experiences, expertise, identities, and interests. This section will help you decide which doula you connect with most by allowing you to peruse detailed profiles of the doulas. As you browse, you'll see how we're all committed to forging a trusting relationship with you and your family throughout your journey. "),e.qZA(),e.TgZ(6,"p"),e._uU(7,"To determine if a doula works in your area, click your hospital area or the area you live in on the color-coded map. The hotspots will take you to the doulas available in that area. Once you have browsed the doula listings, you can fill out the form below to request a doula."),e.qZA()(),e.TgZ(8,"app-button",1),e._uU(9),e.ALo(10,"titlecase"),e.qZA()),2&X&&(e.xp6(1),e.Oqu(e.lcZ(2,3,"Find a doula")),e.xp6(7),e.Q6J("route",t.location),e.xp6(1),e.Oqu(e.lcZ(10,5,"start now")))},dependencies:[p.r,a.rS],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:40px;width:50%;height:100%;max-width:900px;margin:auto;color:var(--cta-purple);text-align:justify}h1[_ngcontent-%COMP%]{color:var(--cta-purple);text-align:center;font-size:5rem;font-weight:900}#body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}#startButton[_ngcontent-%COMP%]{margin:0 auto}"]}),o})()},{path:":location",component:(()=>{class o{constructor(X){this.s_doulas=X,this.locations=["central","north side","northwest side","west side"],this.showCard={},this.listOfDoulas=this.s_doulas.list}ngOnInit(){this.showAllCards()}checkCardVisibility(X){return this.listOfDoulas.find(t=>t.id===X)?.locations.find(t=>this.showCard[t])}handleCardVisibility(X){"all"===X.toLowerCase()?this.showAllCards():(this.showCard[X]=!this.showCard[X],this.showAllActive=!!this.showCardArray&&this.showCardArray.length===this.locations.length)}showAllCards(){this.showCard={},this.showAllActive=!this.showAllActive,this.showAllActive?this.locations.forEach(X=>{this.showCard[X]=!0}):this.showCard={}}get showCardArray(){return Object.keys(this.showCard).filter(X=>this.showCard[X])}}return o.\u0275fac=function(X){return new(X||o)(e.Y36(c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-of-doulas"]],decls:14,vars:6,consts:[["id","container"],["id","title"],["id","seperator"],["id","dynamicCon"],["id","filter"],["id","filterTitle"],[1,"filterPuck",3,"click"],[4,"ngFor","ngForOf"],["id","list"],["class","card",3,"data","routerLink",4,"ngIf"],[1,"card",3,"data","routerLink"]],template:function(X,t){1&X&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"div",3)(6,"div",4)(7,"span",5),e._uU(8,"Location Filter"),e.qZA(),e.TgZ(9,"div",6),e.NdJ("click",function(){return t.handleCardVisibility("all")}),e._uU(10),e.qZA(),e.YNc(11,D,3,3,"ng-container",7),e.qZA(),e.TgZ(12,"div",8),e.YNc(13,F,2,1,"ng-container",7),e.qZA()()()),2&X&&(e.xp6(2),e.Oqu(e.lcZ(3,4,"doulas")),e.xp6(8),e.Oqu(t.showAllActive?"hide all":"show all"),e.xp6(1),e.Q6J("ngForOf",t.locations),e.xp6(2),e.Q6J("ngForOf",t.listOfDoulas))},dependencies:[a.sg,a.O5,s.rH,M,a.gd],styles:["[_nghost-%COMP%]{padding-bottom:10px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:gray;border:none}#title[_ngcontent-%COMP%]{background-color:#fff;padding:50px 0 30px;border-bottom:1px solid hsl(0,0%,90%);color:var(--cta-green-deep);text-align:center;font-size:3rem;font-weight:900}#container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%}#dynamicCon[_ngcontent-%COMP%]{flex:1;display:flex;padding:30px 0;justify-content:center}#filter[_ngcontent-%COMP%]{position:sticky;display:flex;flex-direction:column;gap:20px;align-items:center;top:20px;min-width:200px;height:50vh;background-color:#fff;padding:10px 0 3rem;box-shadow:1px 1px 2px #0000004d;border-radius:10px;margin:0 30px 30px;border:1px solid hsl(0,0%,90%);overflow-y:auto}#filterTitle[_ngcontent-%COMP%]{padding:1rem 2.5rem;border-bottom:1px solid hsl(0,0%,90%);font-size:2rem;font-weight:900;letter-spacing:-.03rem}.filterPuck[_ngcontent-%COMP%]{width:80%;background-color:#fff;padding:15px;border:1px solid hsl(0,0%,80%);border-radius:5px;text-transform:capitalize;-webkit-user-select:none;user-select:none;cursor:pointer}.filterPuck.active[_ngcontent-%COMP%]{border-color:var(--cta-green-deep)}#list[_ngcontent-%COMP%]{flex:1;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-content:flex-start;width:100%;margin:0 auto;overflow:visible}.card[_ngcontent-%COMP%]{flex:0 .5 25%;min-width:300px;max-width:400px}"]}),o})()},{path:"form/:doula",component:Z}]}];let B=(()=>{class o{}return o.\u0275fac=function(X){return new(X||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(S),s.Bz]}),o})();var I=r(466);let L=(()=>{class o{}return o.\u0275fac=function(X){return new(X||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,B,I.m]}),o})()}}]);