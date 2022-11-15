var styles = document.createElement('style'); styles.setAttribute('type', 'text/css');
document.head.appendChild(styles).textContent = ``;

let catagory_Tagesgeldkonto_count = 0;
let catagory_Wertpapiere_count = 0;
let catagory_Girokonto_count = 0;

//Catagory arrray
const card_catagory = [
    {
        icon: `<svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.23584 49.6482L43.6448 50.0001" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M4.45288 42.9326V22.9321C4.45288 21.8276 5.34831 20.9321 6.45288 20.9321H8.74541C9.84998 20.9321 10.7454 21.8276 10.7454 22.9321V42.9326C10.7454 44.0372 9.84998 44.9326 8.74541 44.9326H6.45288C5.34831 44.9326 4.45288 44.0372 4.45288 42.9326Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M14.7097 42.9324V22.9319C14.7097 21.8273 15.6051 20.9319 16.7097 20.9319H19.0022C20.1068 20.9319 21.0022 21.8273 21.0022 22.9319V42.9324C21.0022 44.037 20.1068 44.9324 19.0022 44.9324H16.7097C15.6051 44.9324 14.7097 44.037 14.7097 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M25.6709 42.9324V22.9319C25.6709 21.8273 26.5663 20.9319 27.6709 20.9319H29.9634C31.068 20.9319 31.9634 21.8273 31.9634 22.9319V42.9324C31.9634 44.037 31.068 44.9324 29.9634 44.9324H27.6709C26.5663 44.9324 25.6709 44.037 25.6709 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M35.896 42.9324V22.9319C35.896 21.8273 36.7914 20.9319 37.896 20.9319H40.1885C41.2931 20.9319 42.1885 21.8273 42.1885 22.9319V42.9324C42.1885 44.037 41.2931 44.9324 40.1885 44.9324H37.896C36.7914 44.9324 35.896 44.037 35.896 42.9324Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M23.1021 2L43.1091 16.532H3.09509L23.1021 2Z" stroke="white" stroke-width="2"/>
        <path d="M23.0386 14.0766C22.5766 14.0766 22.1412 14.0154 21.7322 13.893C21.3232 13.7705 20.9521 13.5977 20.6189 13.3745C20.2857 13.1441 19.9979 12.8705 19.7555 12.5537C19.5207 12.2297 19.3428 11.8661 19.2216 11.4629H18.6309V10.7392H19.0739C19.0663 10.6816 19.0625 10.6204 19.0625 10.5556C19.0625 10.4836 19.0625 10.4152 19.0625 10.3504C19.0625 10.2784 19.0625 10.21 19.0625 10.1452C19.0701 10.0804 19.0777 10.012 19.0853 9.94H18.6309V9.21637H19.2216C19.3428 8.82035 19.5245 8.46394 19.7669 8.14713C20.0092 7.83031 20.297 7.5603 20.6303 7.3371C20.9635 7.10669 21.3346 6.93028 21.7436 6.80787C22.1525 6.68547 22.5842 6.62427 23.0386 6.62427C23.4249 6.62427 23.7732 6.66747 24.0838 6.75387C24.3943 6.84028 24.6745 6.95908 24.9244 7.11029C25.1743 7.26149 25.394 7.4343 25.5833 7.62871C25.7726 7.82311 25.9393 8.02832 26.0832 8.24433L24.9471 8.79515C24.7654 8.49274 24.5041 8.24433 24.1633 8.04992C23.8225 7.84832 23.4476 7.74751 23.0386 7.74751C22.4933 7.74751 22.0086 7.88072 21.5845 8.14713C21.168 8.40634 20.8612 8.76275 20.6643 9.21637H23.7316V9.94H20.4485C20.4409 10.0048 20.4333 10.0732 20.4258 10.1452C20.4258 10.21 20.4258 10.2784 20.4258 10.3504C20.4258 10.4152 20.4258 10.4836 20.4258 10.5556C20.4258 10.6204 20.4333 10.6816 20.4485 10.7392H23.7316V11.4629H20.653C20.8499 11.9165 21.1566 12.2801 21.5732 12.5537C21.9973 12.8201 22.4858 12.9533 23.0386 12.9533C23.4476 12.9533 23.8225 12.8561 24.1633 12.6617C24.5041 12.4601 24.7654 12.2081 24.9471 11.9057L26.0832 12.4565C25.9393 12.6725 25.7689 12.8777 25.5719 13.0721C25.3826 13.2665 25.163 13.4393 24.913 13.5905C24.6707 13.7417 24.3943 13.8605 24.0838 13.947C23.7732 14.0334 23.4249 14.0766 23.0386 14.0766Z" fill="white"/>
        </svg>`,
        catagoryName: "Tagesgeldkonto",
        catagorySubtitle: "Geld parken und 0,6 % Zinsen p. a. sichern",
        BlueTic: `<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
        <path class="right-tic" d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
        </svg>`
    },
    {
        icon: `<svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.26667 40.4667V2C5.26667 1.44771 5.71438 1 6.26667 1H58.1333C58.6856 1 59.1333 1.44772 59.1333 2V40.4667M2 49H62.4C62.9523 49 63.4 48.5523 63.4 48V45.2C63.4 44.6477 62.9523 44.2 62.4 44.2H2C1.44772 44.2 1 44.6477 1 45.2V48C1 48.5523 1.44772 49 2 49Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M9.46655 37.8666V4.66663V4.66663H54.9332V37.8666H9.46655Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M25 31.4H22.8667V27.6667L25 25.5333V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
        <path d="M28.7334 31.4H26.6001V23.9334L28.7334 21.8V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
        <path d="M32.4666 31.4H30.3333V21.8L32.4666 23.9334V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
        <path d="M36.2 31.4001H34.0667V23.9334L36.2 21.2667V31.4001Z" fill="white" stroke="white" stroke-linecap="round"/>
        <path d="M39.9334 31.4H37.8V19.6667L39.9334 17V31.4Z" fill="white" stroke="white" stroke-linecap="round"/>
        <path d="M38.8667 11.1333L39.9334 12.2L39.8878 12.2491L41.5334 13.2667L43.1334 9L38.8667 11.1333Z" fill="white"/>
        <path d="M21.8 24.4667L28.7334 16.4667L33 19.6667L39.8878 12.2491M39.8878 12.2491L39.9334 12.2L38.8667 11.1333L43.1334 9L41.5334 13.2667L39.8878 12.2491Z" stroke="white" stroke-linecap="round"/>
        </svg>`,
        catagoryName: "Wertpapiere",
        catagorySubtitle: "Vermögensaufbau und Sparen",
        BlueTic: `<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
        <path class="right-tic" d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
        </svg>`
    },
    {
        icon: `<svg width="67" height="50" viewBox="0 0 67 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.0654 8.98995H23.3262V15.1489H65.0654V8.98995Z" fill="white"/>
        <path d="M45.9644 29.2978H62.0654C63.7222 29.2978 65.0654 27.9546 65.0654 26.2978V15.1489M23.3262 8.98995V4C23.3262 2.34314 24.6693 1 26.3262 1H62.0654C63.7222 1 65.0654 2.34315 65.0654 4V8.98995M23.3262 8.98995H65.0654M23.3262 8.98995V15.1489M65.0654 8.98995V15.1489M65.0654 15.1489H23.3262M23.3262 15.1489V18" stroke="white" stroke-width="2"/>
        <path d="M42.7392 34.8511V28.6922H21.8696H1V35.9123H42.7392V34.8511Z" fill="white"/>
        <path d="M42.7392 28.6922V34.8511V35.9123M42.7392 28.6922V23.7023C42.7392 22.0454 41.396 20.7023 39.7392 20.7023H4C2.34315 20.7023 1 22.0454 1 23.7023V28.6922M42.7392 28.6922H21.8696H1M1 28.6922V35.9123M42.7392 35.9123V46C42.7392 47.6569 41.396 49 39.7392 49H4C2.34315 49 1 47.6569 1 46V35.9123M42.7392 35.9123H1" stroke="white" stroke-width="2"/>
        </svg>`,
        catagoryName: "Girokonto",
        catagorySubtitle: "Unsere Klassiker mit Top-Konditionen",
        BlueTic: `<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
        <path class="right-tic" d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
        </svg>`
    }
]

// Cards array

const benefit_cards = [
    {
        catagory: "Tagesgeldkonto",
        header: "Tagesgeldkonto",
        subHeader: "Kostenlos und sicher Vermögen parken",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate", "Ihr Geld ist jederzeit verfügbar."],
        buttonName: "Zum Tagesgeldkonto",
        buttonUrl: "https://aktionen.consorsbank.de/ev/tagesgeld/?icid=WEB-1231",
        imageMain: "https://i.ibb.co/m6nHFCv/Tagesgeldkonto-img.png",
        stickerImage: "https://i.ibb.co/kStL0M6/Sticker-Zinsen-p-a.png",
        catagoryListTop: "Tagesgeldkonto_top"
    },
    {
        catagory: "Wertpapiere",
        header: "Sparplan",
        subHeader: "Kleine Sparrate, große Träume",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["<span>20 Euro Prämie</span> für den Abschluss Ihres ersten Sparplans", " Sparrate schon <span>ab 10 Euro</span>"],
        buttonName: "Zum Sparplan",
        buttonUrl: "https://aktionen.consorsbank.de/ev/ev_sparplan/?icid=WEB-897",
        imageMain: "https://i.ibb.co/zPZM1zb/Sparplan-img.png",
        stickerImage: "https://i.ibb.co/s6vGcDm/sticker-wertpapier.png",
        catagoryListTop: "Wertpapiere_top"
    },
    {
        catagory: "Wertpapiere",
        header: "Wertpapierdepot",
        subHeader: "Vielfältige Möglichkeiten zum Vermögensaufbau",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["<span>6 Monate für 0 Euro Ordergebühr traden</span> (zzgl. marktüblicher Spreads)", "Kostenlose Depotführung"],
        buttonName: "Zum Wertpapierdepot",
        buttonUrl: "https://aktionen.consorsbank.de/ev/einsteiger-depot/?icid=WEB-899",
        imageMain: "https://i.ibb.co/qpLD3Jc/Wertpapierdepot-img.png",
        stickerImage: "https://i.ibb.co/S6vvTWq/sticker-online-Broker.png"
    },
    {
        catagory: "Wertpapiere",
        header: "Junior Depot",
        subHeader: "Mittel- bis langfristig vorsorgen für Ihr Kind",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["<span>kostenlose</span> Depotführung", "Schnell und einfach über das Geld verfügen"],
        buttonName: "Zum Junior Depot",
        buttonUrl: "https://aktionen.consorsbank.de/ev/ev_junior-depot/?icid=WEB-1142",
        imageMain: "https://i.ibb.co/RTDSZ5J/Junior-Depot-img.png",
        stickerImage: "https://i.ibb.co/xFt99sT/sticker-best-Anbieter.png"
    },
    {
        catagory: "Girokonto",
        header: "Girokonto Essential",
        subHeader: "Sehr gut bewertet mit vielfältigen Bezahlmöglichkeiten",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["kostenloses Girokonto bei monatlichem Geldeingang ab 700 Euro oder für alle unter 28 Jahren*", "Kostenlose Visa Card inklusive"],
        buttonName: "Zum Girokonto Essential",
        buttonUrl: "https://aktionen.consorsbank.de/ev/girokonto-vergleich/?icid=WEB-1227",
        imageMain: "https://i.ibb.co/nMpqdrp/Girokonto-Essential-img.png",
        stickerImage: "https://i.ibb.co/CKxsS04/sticker-kostenfreie-Girokonten.png",
        catagoryListTop: "Girokonto_top"
    },
    {
        catagory: "Girokonto",
        header: "Girokonto Unlimited",
        subHeader: "Premium-Girokonto mit Visa Card Gold",
        listHead: "Ihre Vorteile bei der Consorsbank:",
        list: ["Für nur 9€ mtl.: weltweit gebührenfrei bezahlen und Bargeld abheben**", "Reiseversicherungen, Handy-Schutzbrief und weitere Services inklusive"],
        buttonName: "Zum Girokonto Unlimited",
        buttonUrl: "https://aktionen.consorsbank.de/ev/girokonto-vergleich/?icid=WEB-1227",
        imageMain: "https://i.ibb.co/5kJggDQ/Girokonto-Unlimited-img.png",
        stickerImage: "https://i.ibb.co/CKxsS04/sticker-kostenfreie-Girokonten.png"
    }
]

const catagoryDividers = [
    {
        dividerTitle: "Tagesgeldkonto",
        dividerIcon:`<svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.92407 42.3457L38.5503 42.6485" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M4.82983 36.289V19.6401C4.82983 18.5356 5.72526 17.6401 6.82983 17.6401H8.24362C9.34819 17.6401 10.2436 18.5356 10.2436 19.6401V36.289C10.2436 37.3936 9.34819 38.289 8.24362 38.289H6.82983C5.72526 38.289 4.82983 37.3936 4.82983 36.289Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M13.6543 36.2888V19.6399C13.6543 18.5353 14.5497 17.6399 15.6543 17.6399H17.0681C18.1726 17.6399 19.0681 18.5353 19.0681 19.6399V36.2888C19.0681 37.3933 18.1726 38.2888 17.0681 38.2888H15.6543C14.5497 38.2888 13.6543 37.3933 13.6543 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M23.0847 36.2888V19.6399C23.0847 18.5353 23.9801 17.6399 25.0847 17.6399H26.4985C27.6031 17.6399 28.4985 18.5353 28.4985 19.6399V36.2888C28.4985 37.3933 27.6031 38.2888 26.4985 38.2888H25.0847C23.9801 38.2888 23.0847 37.3933 23.0847 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M31.8826 36.2888V19.6399C31.8826 18.5353 32.778 17.6399 33.8826 17.6399H35.2963C36.4009 17.6399 37.2964 18.5353 37.2964 19.6399V36.2888C37.2964 37.3933 36.4009 38.2888 35.2964 38.2888H33.8826C32.778 38.2888 31.8826 37.3933 31.8826 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M20.8759 1.35168L38.089 13.8543H3.66287L20.8759 1.35168Z" stroke="#464646" stroke-width="2"/>
        </svg>` 
    },
    {
        dividerTitle: "Wertpapiere",
        dividerIcon:`<svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.4188 33.3932V2.76922C4.4188 2.21694 4.86652 1.76923 5.4188 1.76923H46.5812C47.1335 1.76923 47.5812 2.21694 47.5812 2.76923V33.3932M2 40.2308H50C50.5523 40.2308 51 39.7831 51 39.2308V37.3846C51 36.8323 50.5523 36.3846 50 36.3846H2C1.44772 36.3846 1 36.8323 1 37.3846V39.2308C1 39.7831 1.44771 40.2308 2 40.2308Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M7.98291 31.1114V4.90625L44.0171 4.90625V31.1114H7.98291Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
        <path d="M20.2311 26.128H18.5217V23.1365L20.2311 21.4271V26.128Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
        <path d="M23.2219 26.1283H21.5125V20.1454L23.2219 18.436V26.1283Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
        <path d="M26.214 26.1283H24.5046V18.436L26.214 20.1454V26.1283Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
        <path d="M29.2048 26.1284H27.4954V20.1455L29.2048 18.0088V26.1284Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
        <path d="M32.197 26.1281H30.4875V16.7264L32.197 14.5897V26.1281Z" fill="#464646" stroke="#464646" stroke-linecap="round"/>
        <path d="M31.3425 9.88885L32.1972 10.7435L32.1606 10.7829L33.4792 11.5982L34.7613 8.17944L31.3425 9.88885Z" fill="#464646"/>
        <path d="M17.6672 20.5726L23.2228 14.1623L26.6416 16.7265L32.1606 10.7829M32.1606 10.7829L32.1972 10.7435L31.3425 9.88885L34.7613 8.17944L33.4792 11.5982L32.1606 10.7829Z" stroke="#464646" stroke-linecap="round"/>
        </svg>` 
    },
{
    dividerTitle: "Girokonto",
    dividerIcon:`<svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51 7.50507H18.4248V12.3118H51V7.50507Z" fill="#464646"/>
    <path d="M36.0927 23.3542H48C49.6568 23.3542 51 22.0111 51 20.3542V12.3118M18.4248 7.50507V4.26934C18.4248 2.61248 19.768 1.26934 21.4248 1.26934H48C49.6568 1.26934 51 2.61249 51 4.26934V7.50507M18.4248 7.50507H51M18.4248 7.50507V12.3118M51 7.50507V12.3118M51 12.3118H18.4248M18.4248 12.3118V14.5369" stroke="#464646" stroke-width="2"/>
    <path d="M33.5752 27.6882V22.8815H17.2876H1V28.5164H33.5752V27.6882Z" fill="#464646"/>
    <path d="M33.5752 22.8815V27.6882V28.5164M33.5752 22.8815V19.6458C33.5752 17.9889 32.232 16.6458 30.5752 16.6458H4C2.34315 16.6458 1 17.9889 1 19.6458V22.8815M33.5752 22.8815H17.2876H1M1 22.8815V28.5164M33.5752 28.5164V35.7307C33.5752 37.3875 32.232 38.7307 30.5752 38.7307H4C2.34314 38.7307 1 37.3875 1 35.7307V28.5164M33.5752 28.5164H1" stroke="#464646" stroke-width="2"/>
    </svg>` 
},
]

let block_Benefits = document.querySelector(".block_benefits");

const catagory_select_header = document.createElement("p");
const catagory_select_counter = document.createElement("div");
const catagory_select_wrapper = document.createElement("div");
const catagory_select = document.createElement("div");
const bank_benefit_wrapper = document.createElement("div");
const card_catagory_heading = document.createElement("div");

catagory_select_wrapper.classList.add("catagory-select-wrapper");
catagory_select.classList.add("catagory-select");
bank_benefit_wrapper.classList.add("bank-benefit-wrapper");
catagory_select_header.classList.add("catagory-select-header");
catagory_select_counter.classList.add("catagory-select-counter");
card_catagory_heading.classList.add("card-catagory-heading");

block_Benefits.parentNode.insertBefore(catagory_select_counter, block_Benefits);
block_Benefits.parentNode.insertBefore(catagory_select_wrapper, catagory_select_counter);
block_Benefits.parentNode.insertBefore(catagory_select_header, catagory_select_wrapper);
catagory_select_header.textContent = "Wofür interessieren Sie sich?"
catagory_select_counter.innerHTML = `<p>Wir haben <span class="productCounter"></span> <span class="productName"> Produkte</span> gefunden, die zu Ihren Interessen passen.</p>`;
catagory_select_counter.children[0].children[0].textContent = benefit_cards.length;


for (let i = 0; i < card_catagory.length; i++) {
    let x = catagory_select_wrapper.appendChild(catagory_select.cloneNode(true));
    x.innerHTML = `
    <div class="catagory-icon">${card_catagory[i].icon} </div>
    <div class="catagoryName"><p>${card_catagory[i].catagoryName}</p></div>
    <div class="catagorySubtitle"><p>${card_catagory[i].catagorySubtitle}</p></div>
    <div class="catagory-tic">${card_catagory[i].BlueTic}</div>
    `
    x.addEventListener("click", e => {
        catagoryListener(x);
    })
}
for (let i = 0; i < benefit_cards.length; i++) {
    if (benefit_cards[i].catagoryListTop){
        console.log("x");
            let y = block_Benefits.appendChild(card_catagory_heading.cloneNode(true));
            y.innerHTML=`<div class="divider-image divider-image-"> 
            <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.92407 42.3457L38.5503 42.6485" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.82983 36.289V19.6401C4.82983 18.5356 5.72526 17.6401 6.82983 17.6401H8.24362C9.34819 17.6401 10.2436 18.5356 10.2436 19.6401V36.289C10.2436 37.3936 9.34819 38.289 8.24362 38.289H6.82983C5.72526 38.289 4.82983 37.3936 4.82983 36.289Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
            <path d="M13.6543 36.2888V19.6399C13.6543 18.5353 14.5497 17.6399 15.6543 17.6399H17.0681C18.1726 17.6399 19.0681 18.5353 19.0681 19.6399V36.2888C19.0681 37.3933 18.1726 38.2888 17.0681 38.2888H15.6543C14.5497 38.2888 13.6543 37.3933 13.6543 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
            <path d="M23.0847 36.2888V19.6399C23.0847 18.5353 23.9801 17.6399 25.0847 17.6399H26.4985C27.6031 17.6399 28.4985 18.5353 28.4985 19.6399V36.2888C28.4985 37.3933 27.6031 38.2888 26.4985 38.2888H25.0847C23.9801 38.2888 23.0847 37.3933 23.0847 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
            <path d="M31.8826 36.2888V19.6399C31.8826 18.5353 32.778 17.6399 33.8826 17.6399H35.2963C36.4009 17.6399 37.2964 18.5353 37.2964 19.6399V36.2888C37.2964 37.3933 36.4009 38.2888 35.2964 38.2888H33.8826C32.778 38.2888 31.8826 37.3933 31.8826 36.2888Z" stroke="#464646" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.8759 1.35168L38.089 13.8543H3.66287L20.8759 1.35168Z" stroke="#464646" stroke-width="2"/>
            </svg>
            
            </div>
            <div class="card-title">
            <p class="card-catagory-name">${benefit_cards[i].catagory}</p>
            <p class="card-in-catagory-count">1 Produkt</p>
            </div>`;
    }

    let x = block_Benefits.appendChild(bank_benefit_wrapper.cloneNode(true));
    x.innerHTML = `
    <div class="content-wrapper ${benefit_cards[i].header}">
    <div class="left-side">
    <a href="" class="image-anchor">
        <img class="main-image" src="${benefit_cards[i].imageMain}"/>
        <img class="sticker-image" src="${benefit_cards[i].stickerImage}"/>
        </a>
    </div>
    <div class="right-side">
        <div class="catagory-tag hidden">${benefit_cards[i].catagory}</div>
        <div class="benifit_card_header"><p>${benefit_cards[i].header}</p></div>
        <div class="benifit_card_subheader"><p>${benefit_cards[i].subHeader}</p></div>
        <div class="benifit_card_listheader"><p>${benefit_cards[i].listHead}</p></div>
        <ul class="benefit_highlights">
            <li>${benefit_cards[i].list[0]}</li>
            <li>${benefit_cards[i].list[1]}</li>
        </ul>
        <p class="button-wrapper">
        <a href="${benefit_cards[i].buttonUrl}" class="card-button">${benefit_cards[i].buttonName}</a>
        </p>
        </div>
</div>
    `;

}

let cardShow = 0;
function catagoryListener(x) {
    if (x.querySelector(".right-tic").classList.contains("hidden") == false) {
        block_Benefits.querySelectorAll(".catagory-tag").forEach(ev => {
            if (x.querySelector(".catagoryName").textContent == ev.textContent) {
                ev.parentNode.parentNode.classList.add("hidden");
                x.querySelector(".right-tic").classList.add("hidden");
                cardShow++;
            }
        })
    }
    else {
        block_Benefits.querySelectorAll(".catagory-tag").forEach(ev => {
            if (x.querySelector(".catagoryName").textContent == ev.textContent) {
                ev.parentNode.parentNode.classList.remove("hidden");
                x.querySelector(".right-tic").classList.remove("hidden");
                cardShow--;
                console.log(ev.parentNode.parentNode.previousElementSibling);
            }
        })
    }
    catagory_select_counter.children[0].children[0].textContent = benefit_cards.length - cardShow;
    if (benefit_cards.length - cardShow <= 1) {
        catagory_select_counter.children[0].children[1].textContent = "Produkt";
    }
    else {
        catagory_select_counter.children[0].children[1].textContent = "Produkte";
    }

    if (x.querySelector(".catagoryName").textContent == "Tagesgeldkonto" && x.querySelector(".right-tic").classList.contains("hidden") == false) {
        document.querySelector(".head-image-Tagesgeldkonto").parentNode.classList.remove("hidden");
    }
    else {
        document.querySelector(".head-image-Tagesgeldkonto").parentNode.classList.add("hidden");
    }
    if (x.querySelector(".catagoryName").textContent == "Wertpapiere" && x.querySelector(".right-tic").classList.contains("hidden") == false) {
        document.querySelector(".head-image-Wertpapiere").parentNode.classList.remove("hidden");
    }
    else {
        document.querySelector(".head-image-Wertpapiere").parentNode.classList.add("hidden");
    }
    if (x.querySelector(".catagoryName").textContent == "Girokonto" && x.querySelector(".right-tic").classList.contains("hidden") == false) {
        document.querySelector(".head-image-Girokonto").parentNode.classList.remove("hidden");
    }
    else {
        document.querySelector(".head-image-Girokonto").parentNode.classList.add("hidden");
    }

}

// Conditions
const conditionWrapper = document.createElement("div");
const conditionList = document.createElement("ul");
const conditions = document.createElement("li");
conditionWrapper.classList.add("condition-wrapper", "container");

document.querySelector(".block_reasons").parentNode.parentNode.insertBefore(conditionWrapper, document.querySelector(".block_reasons").parentNode);

conditionWrapper.appendChild(conditionList);
conditionList.appendChild(conditions.cloneNode(true));
conditionList.appendChild(conditions.cloneNode(true));

conditionList.children[0].textContent = "* Sollten Sie über 28 Jahre sein und kein monatlicher Geldeingang ab 700 Euro vorhanden sein, fallen Kontoführungsgebühren von 4 Euro pro Monat an."
conditionList.children[1].textContent = "** Bei Transaktionen mit der Visa Card im Ausland ist es Fremdbanken/Automatenbetreibern teilweise erlaubt, eigene Gebühren für Bargeldtransaktionen zu erheben. In Wettbüros, Casinobetrieben und privaten Lotteriegesellschaften fallen 2,50 % (mindestens 5 Euro) an."

