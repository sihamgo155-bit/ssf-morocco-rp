/* SSF Morocco RP — client-side demo + optional Supabase integration.
   Never put a Supabase service_role key in this file. */
const SUPABASE_URL = ""; // Optional: https://YOUR-PROJECT.supabase.co
const SUPABASE_ANON_KEY = ""; // Optional: public anon/publishable key only
const TABLE_NAME = "applications";

const translations = {
  ar: {
    navHome:"الرئيسية",navApply:"التقديم",navExam:"الامتحان",navRules:"القوانين",navAdmin:"الإدارة",
    eyebrow:"بوابة التوظيف الرسمية • الموسم مفتوح",heroTitle:"الانضباط يبدأ<br><span>من هنا.</span>",
    heroLead:"انضم إلى SSF Morocco RP، وأثبت جاهزيتك عبر طلب الانضمام والاختبار المعرفي. الالتزام، الاحترام والعمل الجماعي أساس مهمتنا.",
    applyNow:"قدّم طلبك الآن <span>↙</span>",readRules:"اقرأ القوانين",statOne:"طلب منظم",statTwo:"اختبار تلقائي",statThree:"بوابة إلكترونية",heroFooter:"الجدية • النزاهة • المسؤولية",
    overviewTitle:"بوابتك نحو <span>الفرقة</span>",overviewText:"كل خطوة واضحة: اقرأ الشروط، أرسل المعلومات المطلوبة، ثم اجتز الاختبار.",
    featureOneTitle:"تقديم منظم",featureOneText:"املأ الاستمارة بمعلومات صحيحة وواضحة حتى تتمكن الإدارة من مراجعة طلبك.",learnMore:"ابدأ التقديم ↙",
    featureTwoTitle:"اختبار QCM",featureTwoText:"أجب عن أسئلة الاختيار المتعدد واحصل على نتيجتك مباشرة بعد الإرسال.",takeExam:"ابدأ الاختبار ↙",
    featureThreeTitle:"قوانين واضحة",featureThreeText:"تعرف على قواعد الاحترام، اللعب النظيف، والالتزام داخل السيرفر.",viewRules:"عرض القوانين ↙",
    applicationTitle:"استمارة <span>الانضمام</span>",applicationIntro:"أدخل معلوماتك بدقة. الحقول التي تحمل علامة * مطلوبة.",formTitle:"طلب الانتساب الرسمي",formSub:"يرجى احترام القوانين وتقديم معلومات صحيحة.",
    fullName:"الاسم داخل السيرفر *",discordName:"اسم Discord *",age:"العمر *",timezone:"التوقيت / أوقات النشاط *",experience:"خبرتك في RP *",motivation:"لماذا تريد الانضمام؟ *",
    acceptRules:"أؤكد أن المعلومات صحيحة وأنني قرأت القوانين وأوافق عليها. *",storageNote:"في الوضع التجريبي، تُحفظ الطلبات في هذا المتصفح فقط. راجع ملف README لربط قاعدة بيانات.",sendApplication:"إرسال الطلب <span>↗</span>",
    examTitle:"اختبار <span>QCM</span>",examIntro:"اختر جواباً واحداً لكل سؤال. النتيجة تُحسب تلقائياً.",quizHeading:"اختبار مبادئ لعب الأدوار",quizHint:"تأكد من اختيار جواب لكل سؤال قبل التصحيح.",correctQuiz:"تصحيح الاختبار",
    rulesTitle:"قوانين <span>السيرفر</span>",rulesIntro:"القوانين التالية نموذج أولي؛ عدّلها لتطابق قوانين مجتمعك الفعلية.",
    rule1Title:"الاحترام المتبادل",rule1Text:"يُمنع السب أو التنمر أو المضايقة. تعامل مع جميع الأعضاء باحترام.",
    rule2Title:"اللعب النظيف",rule2Text:"التزم بقواعد RP المعتمدة، ولا تستخدم الغش أو تستغل الأخطاء عمداً.",
    rule3Title:"اتباع تعليمات الإدارة",rule3Text:"احترم قرارات المشرفين، وقدّم الاعتراضات عبر القنوات المخصصة بهدوء.",
    rule4Title:"سرية المعلومات",rule4Text:"لا تنشر معلومات شخصية أو محادثات خاصة دون إذن أصحابها.",
    rule5Title:"الالتزام بالرتب والمهام",rule5Text:"لا تنتحل رتبة أو صلاحية، واتبع نظام المسؤوليات الذي تعتمده الإدارة.",
    adminTitle:"لوحة <span>الإدارة</span>",adminIntro:"عرض تجريبي للطلبات المحفوظة محلياً، أو تسجيل دخول قاعدة البيانات إذا تم إعداد Supabase.",
    applicationsInbox:"صندوق الطلبات",refresh:"تحديث",clearDemo:"مسح التجريبي",adminWarning:"وضع تجريبي: البيانات هنا موجودة على هذا الجهاز فقط، ولا تعتبر لوحة إدارة آمنة أو خاصة.",
    adminLoginTitle:"تسجيل دخول الإدارة (Supabase اختياري)",adminLoginText:"إذا أعددت Supabase وفعّلت الإعدادات في app.js، سجّل الدخول بحساب إداري. بدون ذلك، ستظهر الطلبات المحلية لهذا المتصفح فقط.",
    login:"تسجيل الدخول",logout:"خروج",tableName:"الاسم",tableAge:"العمر",tableDate:"التاريخ",tableStatus:"الحالة",tableAction:"إجراء",noApplications:"لا توجد طلبات بعد.",
    adminSecurityNote:"لا تضع كلمة مرور أو مفتاح service_role داخل ملفات الموقع. استعمل فقط المفتاح العام anon/publishable مع سياسات RLS صحيحة.",
    footerText:"الانضباط • النزاهة • روح الفريق",submitted:"تم إرسال الطلب وحفظه في هذا المتصفح التجريبي.",submitFailed:"تعذر إرسال الطلب. حاول مرة أخرى.",requiredQuiz:"يرجى الإجابة عن جميع الأسئلة.",quizScore:"نتيجتك",quizPassed:"ممتاز! حققت درجة النجاح التجريبية.",quizRetry:"راجع القوانين وحاول مرة أخرى.",deleteConfirm:"هل تريد حذف هذا الطلب من القائمة المحلية؟",clearConfirm:"هل تريد حذف جميع الطلبات المحلية من هذا المتصفح؟",deleted:"تم حذف الطلب.",cleared:"تم مسح الطلبات المحلية.",noDb:"قاعدة البيانات غير مفعّلة. يتم عرض الطلبات المحلية فقط.",loginSuccess:"تم تسجيل الدخول.",loginFailed:"فشل تسجيل الدخول. تحقق من الإعدادات وبيانات الحساب.",dbLoaded:"تم تحميل الطلبات من قاعدة البيانات.",dbError:"تعذر الاتصال بقاعدة البيانات؛ تحقق من الإعدادات والسياسات.",logoutSuccess:"تم تسجيل الخروج.",statusNew:"جديد",view:"عرض",delete:"حذف",details:"تفاصيل الطلب",close:"إغلاق",submittedAt:"تاريخ الإرسال",nameMissing:"بدون اسم",confirmDeleteDb:"حذف هذا الطلب من قاعدة البيانات؟",deleteDbFailed:"لم يتم حذف الطلب. تحقق من الصلاحيات."
  },
  en: {
    navHome:"Home",navApply:"Apply",navExam:"Exam",navRules:"Rules",navAdmin:"Admin",
    eyebrow:"OFFICIAL RECRUITMENT PORTAL • APPLICATIONS OPEN",heroTitle:"Discipline starts<br><span>right here.</span>",
    heroLead:"Join SSF Morocco RP and demonstrate your readiness through an application and knowledge check. Commitment, respect, and teamwork are at the heart of our mission.",
    applyNow:"Apply now <span>↙</span>",readRules:"Read the rules",statOne:"Structured application",statTwo:"Auto-scored exam",statThree:"Online portal",heroFooter:"INTEGRITY • DUTY • RESPONSIBILITY",
    overviewTitle:"Your gateway to the <span>division</span>",overviewText:"A clear process: review the requirements, submit your information, then complete the quiz.",
    featureOneTitle:"Structured application",featureOneText:"Provide accurate information so the team can review your application.",learnMore:"Start application ↙",
    featureTwoTitle:"Multiple-choice quiz",featureTwoText:"Answer the questions and receive your score immediately.",takeExam:"Take the quiz ↙",
    featureThreeTitle:"Clear community rules",featureThreeText:"Learn the expectations for respect, fair play, and conduct in the server.",viewRules:"View rules ↙",
    applicationTitle:"Join the <span>division</span>",applicationIntro:"Enter your information carefully. Fields marked * are required.",formTitle:"Official membership application",formSub:"Please follow the rules and provide accurate information.",
    fullName:"In-server name *",discordName:"Discord username *",age:"Age *",timezone:"Timezone / availability *",experience:"Your RP experience *",motivation:"Why do you want to join? *",
    acceptRules:"I confirm the information is accurate and I have read and agree to the rules. *",storageNote:"Demo mode stores applications in this browser only. See README to connect a database.",sendApplication:"Submit application <span>↗</span>",
    examTitle:"Knowledge <span>check</span>",examIntro:"Choose one answer per question. Your score is calculated automatically.",quizHeading:"Roleplay fundamentals quiz",quizHint:"Answer every question before submitting.",correctQuiz:"Grade quiz",
    rulesTitle:"Server <span>rules</span>",rulesIntro:"These are starter rules; edit them to match your actual community policy.",
    rule1Title:"Mutual respect",rule1Text:"Harassment, bullying, and abusive language are not allowed. Treat every member respectfully.",
    rule2Title:"Fair play",rule2Text:"Follow the server's RP rules. Do not cheat or deliberately exploit bugs.",
    rule3Title:"Follow staff instructions",rule3Text:"Respect staff decisions and raise appeals calmly through the designated channels.",
    rule4Title:"Privacy",rule4Text:"Do not share personal information or private conversations without permission.",
    rule5Title:"Respect roles and duties",rule5Text:"Do not impersonate a rank or privilege. Follow the responsibility structure set by staff.",
    adminTitle:"Administration <span>panel</span>",adminIntro:"A demo view of locally saved applications, or a database login if Supabase has been configured.",
    applicationsInbox:"Application inbox",refresh:"Refresh",clearDemo:"Clear demo data",adminWarning:"Demo mode: this data exists only on this device and is not a secure or private admin panel.",
    adminLoginTitle:"Admin login (optional Supabase)",adminLoginText:"If Supabase is configured in app.js, sign in with an admin account. Otherwise, only this browser's local applications are shown.",
    login:"Sign in",logout:"Sign out",tableName:"Name",tableAge:"Age",tableDate:"Date",tableStatus:"Status",tableAction:"Action",noApplications:"No applications yet.",
    adminSecurityNote:"Never place a password or service_role key in website files. Use only the public anon/publishable key with correct RLS policies.",
    footerText:"DISCIPLINE • INTEGRITY • TEAMWORK",submitted:"Application saved in this browser's demo storage.",submitFailed:"Could not submit the application. Please try again.",requiredQuiz:"Please answer every question.",quizScore:"Your score",quizPassed:"Great work! You reached the demo pass mark.",quizRetry:"Review the rules and try again.",deleteConfirm:"Delete this application from the local list?",clearConfirm:"Delete all local applications from this browser?",deleted:"Application deleted.",cleared:"Local applications cleared.",noDb:"Database is not configured. Showing local applications only.",loginSuccess:"Signed in successfully.",loginFailed:"Sign-in failed. Check your settings and account.",dbLoaded:"Applications loaded from the database.",dbError:"Could not connect to the database. Check configuration and policies.",logoutSuccess:"Signed out.",statusNew:"New",view:"View",delete:"Delete",details:"Application details",close:"Close",submittedAt:"Submitted",nameMissing:"Unnamed",confirmDeleteDb:"Delete this database application?",deleteDbFailed:"Application was not deleted. Check permissions."
  }
};

const questions = {
 ar: [
  {q:"إذا وقع خلاف مع عضو آخر أثناء اللعب، ما التصرف الأفضل؟",a:["أبدأ الجدال في كل القنوات","أحافظ على الهدوء وأتبع طريقة الشكاوى","أستعمل صلاحيات ليست لي","أنشر معلوماته الخاصة"],correct:1},
  {q:"ماذا يعني الالتزام بقواعد RP؟",a:["تجاهل السيناريو عند عدم الإعجاب به","فرض الفوز دائماً","التصرف بما يناسب الدور وقواعد السيرفر","الخروج من اللعبة دون سبب"],correct:2},
  {q:"إذا اكتشفت خطأً في السيرفر، ماذا تفعل؟",a:["أستغله للحصول على أفضلية","أبلغ الإدارة عنه","أخبر الجميع باستعماله","أتجاهله وأشجع الآخرين عليه"],correct:1},
  {q:"هل يجوز نشر بيانات شخصية لعضو دون إذنه؟",a:["نعم، عند الغضب","نعم، في القنوات العامة فقط","لا، يجب احترام الخصوصية","فقط إذا كان عضواً جديداً"],correct:2},
  {q:"ما أفضل طريقة للتعامل مع قرار إداري لا توافق عليه؟",a:["التهجم على المشرف","تقديم اعتراض باحترام عبر القناة المناسبة","إفساد اللعب على الآخرين","انتحال رتبة أعلى"],correct:1}
 ],
 en: [
  {q:"What should you do during a disagreement with another member?",a:["Argue in every channel","Stay calm and use the report process","Use permissions you do not have","Share their private information"],correct:1},
  {q:"What does following RP rules mean?",a:["Ignore a scene you dislike","Always force a win","Act consistently with your role and server rules","Leave the game without reason"],correct:2},
  {q:"What should you do if you find a server bug?",a:["Exploit it for an advantage","Report it to staff","Tell everyone to use it","Ignore it and encourage others"],correct:1},
  {q:"May you share another member's personal data without permission?",a:["Yes, when angry","Yes, only in public channels","No, respect privacy","Only if they are new"],correct:2},
  {q:"How should you respond to a staff decision you disagree with?",a:["Attack the moderator","Appeal respectfully through the proper channel","Disrupt other players","Impersonate a higher rank"],correct:1}
 ]
};

let currentLang = localStorage.getItem("ssf-lang") || "ar";
let supabaseClient = null;
let signedInAdmin = false;
const localKey = "ssf-morocco-rp-applications-v1";
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function t(key){ return (translations[currentLang] && translations[currentLang][key]) || translations.ar[key] || key; }
function escapeHtml(value){return String(value ?? "").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");window.setTimeout(()=>el.classList.remove("show"),3000);}
function setStatus(el,message,error=false){if(!el)return;el.textContent=message;el.classList.toggle("error",error);}
function getLocalApplications(){try{return JSON.parse(localStorage.getItem(localKey)||"[]");}catch{return [];}}
function setLocalApplications(items){localStorage.setItem(localKey,JSON.stringify(items));}
function applyLanguage(){
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("lang-en",currentLang==="en");
  $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[currentLang][key])el.innerHTML=translations[currentLang][key];});
  $("#languageToggle").textContent=currentLang==="ar"?"EN / AR":"AR / EN";
  $("#menuToggle").setAttribute("aria-label",currentLang==="ar"?"فتح القائمة":"Open menu");
  $("#quizCount").textContent=currentLang==="ar"?"05 أسئلة":"05 QUESTIONS";
  renderQuiz();
  renderApplications();
}
function toggleLanguage(){currentLang=currentLang==="ar"?"en":"ar";localStorage.setItem("ssf-lang",currentLang);applyLanguage();}
function renderQuiz(){
 const container=$("#quizQuestions");if(!container)return;
 container.innerHTML=questions[currentLang].map((item,index)=>`
  <fieldset class="question"><h4><span>Q${String(index+1).padStart(2,"0")}</span>${escapeHtml(item.q)}</h4>
   <div class="options">${item.a.map((answer,choice)=>`<label class="option"><input type="radio" name="q${index}" value="${choice}" required><span>${escapeHtml(answer)}</span></label>`).join("")}</div>
  </fieldset>`).join("");
 $("#quizResult").hidden=true;
}
function renderApplications(items=getLocalApplications()){
 const tbody=$("#applicationsTable");if(!tbody)return;
 $("#applicationCount").textContent=String(items.length);
 if(!items.length){tbody.innerHTML=`<tr><td colspan="6" class="empty-table">${escapeHtml(t("noApplications"))}</td></tr>`;return;}
 tbody.innerHTML=items.slice().reverse().map(item=>`<tr>
  <td>${escapeHtml(item.full_name||item.fullName||t("nameMissing"))}</td>
  <td>${escapeHtml(item.discord_name||item.discord||"—")}</td>
  <td>${escapeHtml(item.age??"—")}</td>
  <td>${escapeHtml(formatDate(item.created_at||item.createdAt))}</td>
  <td><span class="status-pill">${escapeHtml(t("statusNew"))}</span></td>
  <td><button class="row-action" data-view="${escapeHtml(item.id)}">${escapeHtml(t("view"))}</button> <button class="row-action" data-delete="${escapeHtml(item.id)}">${escapeHtml(t("delete"))}</button></td>
 </tr>`).join("");
 tbody.querySelectorAll("[data-view]").forEach(btn=>btn.addEventListener("click",()=>viewApplication(btn.dataset.view,items)));
 tbody.querySelectorAll("[data-delete]").forEach(btn=>btn.addEventListener("click",()=>deleteApplication(btn.dataset.delete,items)));
}
function formatDate(date){if(!date)return "—";const d=new Date(date);return Number.isNaN(d.getTime())?"—":d.toLocaleString(currentLang==="ar"?"ar-MA":"en-GB");}
function viewApplication(id,items){
 const item=items.find(x=>String(x.id)===String(id));if(!item)return;
 const text=`${t("details")}\n${t("fullName")}: ${item.full_name||item.fullName||"—"}\nDiscord: ${item.discord_name||item.discord||"—"}\n${t("age")}: ${item.age||"—"}\n${t("timezone")}: ${item.availability||"—"}\n${t("experience")}: ${item.experience||"—"}\n${t("motivation")}: ${item.motivation||"—"}\n${t("submittedAt")}: ${formatDate(item.created_at||item.createdAt)}`;
 alert(text);
}
async function deleteApplication(id,items){
 if(!confirm(t(supabaseClient&&signedInAdmin?"confirmDeleteDb":"deleteConfirm")))return;
 if(supabaseClient&&signedInAdmin&&items.some(x=>String(x.id)===String(id)&&x.created_at)){
  const {error}=await supabaseClient.from(TABLE_NAME).delete().eq("id",id);
  if(error){toast(t("deleteDbFailed"));return;} await refreshApplications();return;
 }
 setLocalApplications(getLocalApplications().filter(x=>String(x.id)!==String(id)));
 renderApplications();toast(t("deleted"));
}
async function refreshApplications(){
 if(supabaseClient&&signedInAdmin){
  const {data,error}=await supabaseClient.from(TABLE_NAME).select("*").order("created_at",{ascending:false}).limit(200);
  if(error){setStatus($("#adminStatus"),t("dbError"),true);renderApplications();return;}
  renderApplications(data||[]);setStatus($("#adminStatus"),t("dbLoaded"));return;
 }
 renderApplications();setStatus($("#adminStatus"),t("noDb"));
}
async function submitApplication(event){
 event.preventDefault();const form=event.currentTarget;
 if(!form.reportValidity())return;
 const fd=new FormData(form);
 const item={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),fullName:String(fd.get("fullName")).trim(),discord:String(fd.get("discord")).trim(),age:Number(fd.get("age")),availability:String(fd.get("availability")).trim(),experience:String(fd.get("experience")).trim(),motivation:String(fd.get("motivation")).trim(),createdAt:new Date().toISOString()};
 // Public submissions may be inserted into Supabase only if you explicitly configure URL/key and safe RLS policies.
 if(supabaseClient){
  const payload={full_name:item.fullName,discord_name:item.discord,age:item.age,availability:item.availability,experience:item.experience,motivation:item.motivation};
  const {error}=await supabaseClient.from(TABLE_NAME).insert(payload);
  if(error){setStatus($("#applicationStatus"),t("submitFailed")+" "+error.message,true);return;}
 } else {
  const items=getLocalApplications();items.push(item);setLocalApplications(items);
 }
 setStatus($("#applicationStatus"),t("submitted"));toast(t("submitted"));form.reset();await refreshApplications();
}
function gradeQuiz(event){
 event.preventDefault();const form=event.currentTarget;
 const data=new FormData(form);let score=0;
 for(let i=0;i<questions[currentLang].length;i++){if(data.get("q"+i)===null){$("#quizResult").hidden=false;$("#quizResult").innerHTML=`<p>${escapeHtml(t("requiredQuiz"))}</p>`;return;}if(Number(data.get("q"+i))===questions[currentLang][i].correct)score++;}
 const total=questions[currentLang].length;const percent=Math.round(score/total*100);const pass=percent>=80;
 const result=$("#quizResult");result.hidden=false;result.innerHTML=`<strong>${escapeHtml(t("quizScore"))}: ${score}/${total} — ${percent}%</strong><p>${escapeHtml(pass?t("quizPassed"):t("quizRetry"))}</p>`;
 result.style.borderColor=pass?"#315b42":"#634b2b";result.style.background=pass?"#102017":"#211a10";
}
async function loginAdmin(){
 if(!supabaseClient){setStatus($("#adminStatus"),t("noDb"),true);return;}
 const email=$("#adminEmail").value.trim(),password=$("#adminPassword").value;
 if(!email||!password){setStatus($("#adminStatus"),currentLang==="ar"?"أدخل البريد وكلمة المرور.":"Enter email and password.",true);return;}
 const {error}=await supabaseClient.auth.signInWithPassword({email,password});
 if(error){setStatus($("#adminStatus"),t("loginFailed"),true);return;}
 signedInAdmin=true;$("#adminLogoutButton").hidden=false;setStatus($("#adminStatus"),t("loginSuccess"));await refreshApplications();
}
async function logoutAdmin(){
 if(supabaseClient)await supabaseClient.auth.signOut();
 signedInAdmin=false;$("#adminLogoutButton").hidden=true;setStatus($("#adminStatus"),t("logoutSuccess"));renderApplications();
}
function init(){
 if(SUPABASE_URL&&SUPABASE_ANON_KEY&&window.supabase){supabaseClient=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);}
 $("#languageToggle").addEventListener("click",toggleLanguage);
 $("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
 $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
 $("#applicationForm").addEventListener("submit",submitApplication);
 $("#quizForm").addEventListener("submit",gradeQuiz);
 $("#refreshApplications").addEventListener("click",refreshApplications);
 $("#clearApplications").addEventListener("click",()=>{if(!confirm(t("clearConfirm")))return;setLocalApplications([]);renderApplications();toast(t("cleared"));});
 $("#adminLoginButton").addEventListener("click",loginAdmin);
 $("#adminLogoutButton").addEventListener("click",logoutAdmin);
 applyLanguage();refreshApplications();
}
document.addEventListener("DOMContentLoaded",init);
