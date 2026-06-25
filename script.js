const mixes = [
  {
    title: "夢境紀",
    audio: "assets/mix/夢境紀.mp3",
    cover: "assets/img/mu.jpg",
    genre: "Ambient",
    date: "2026.05.11",
    tracklist: `01. Mark Isham / Love's Ash Dissolves
02. Bob James / Far From Turtle
03. Natural Calamity / Lotus Field
04. The IT / Brazilian Love Dance
05. Toshinori Kondo x DJ Krush / 夢宙 Mu-Chu
06. Yoshio Ojima / Sealed
07. Oneohtrix Point Never / Imago
08. St.GIGA / 音の潮流 Tide of Sound
09. Yas-Kaz / Jungle Book
10. Yas-Kaz / 田園の愉楽
11. William Aura / I Call Your Name
12. Jan Jelinek / Vibraphonspulen
13. Masayoshi Fujita & Jan Jelinek / Botuto
14. Kara-Lis Coverdale / Moments In Love
15. Lyu Hongjun / Forest Trail`
  },
  {
    title: "dreamz",
    audio: "assets/mix/dreamz.mp3",
    cover: "assets/img/mix_dreamz.jpg",
    genre: "黒昼夢",
    date: "2025.04.17",
    subtitle: "DJ YAMINO'S VINYL COLLECTION",
    titleImage: "assets/img/dreamz_inverted.png",
    tracklist: `01 Smog / The Miracles
02 I Feel Like Loving You Today / Donald Byrd feat. Isaac Hayes
03 Soul Sides / Art Farmer
04 Summer in the City / Quincy Jones
05 Daydreaming / Quincy Jones feat. Aretha Franklin
06 Brighton by the Sea / Bob James
07 Inside My Love / Minnie Riperton
08 Marcella's Dream / The Crusaders
09 Night Crawler / Bob James
10 Just the Two of Us / Grover Washington, Jr. feat. Bill Withers
11 Feel Like Makin' Love / Hubert Laws
12 Uzuri / Catalyst
13 Top of the World / George Benson
14 Sweet Dreamer / Lenny White
15 Barry's Love (Part 2) / The Love Unlimited Orchestra`
  },
  {
    title: "DA FINEST",
    audio: "assets/mix/DA_FINEST.mp3",
    cover: "assets/img/mix_da_finest_cover.jpg",
    genre: "Hip Hop",
    date: "2024.03.03",
    subtitle: "DJ YAMINO'S VINYL COLLECTION",
    titleImage: "assets/img/finest_inverted.png",
    tracklist: `01 Dedicated / The Anonymous
02 Methodman PLO Freestyle / Mathematics
03 Far From Yours / O.C. feat. Yvette Michele
04 How We Chill, Pt.2 / Juice, Moleman & Rhymefest
05 Death Be the Penalty / Shabazz the Disciple
06 Sneakers / Raekwon
07 Tha Realness / Group Home
08 Mayday / Self Jupiter
09 Closer To God / D. Gibbs
10 Do Your Thing / Erick Sermon
11 On the Road Again / The Nonce feat. Figures Of Speech
12 Survival Warz (When It Rains It Pours) / DJ Spinna & Shadez Of Brooklyn
13 Keep Your Head Up (Mixed) / Laurnea
14 Usual Suspect (Stretch Armstrong Remix) / Big Noyd
15 Human Condition / School Of Thought
16 Story / O.C.
17 Check It Out / Show & A.G.
18 Fallin' Remix (Without Rap) / Alicia Keys
19 Back On Da Block (DJ Krush Remix) / Pete Rock
20 Recognize & Realize Part 1 / Big Noyd, Prodigy & Havoc
21 First Thing Last / Daddy Kev feat. Myka 9
22 Meiso / DJ Krush, Black Thought & Malik B
23 Unstoppable / Mic Geronimo
24 More Trife Life / Mobb Deep
25 Survival of the Fittest / Mobb Deep
26 Who I Be (part two) / Finsta Bundy`
  },
  {
    title: "my favorite shit",
    audio: "assets/mix/myfavoriteshit.mp3",
    cover: "assets/img/mix_myfavoriteshit.jpg",
    genre: "Hip Hop",
    date: "2022.11.30",
    tracklist: `01 Godfather Don / Status
02 Obscure Disorder feat. Kinetic NRG / Small Talk
03 Emskee / Any Rapper...
04 All City / The Actual
05 Da Grass Roots Music feat. Elemental / Drama
06 Raekwon feat. Ghostface Killah, Method Man, Cappadonna / Ice Cream
07 Intelligent Hoodlum / Street Life (Return Of The Life Mix)
08 Onyx / Shout (Pete Rock Remix)
09 Awol One / Toilet Water
10 Big Ric / Knoc 'Em Out
11 Scoob Rock aka Grandemperial / The Marvelous
12 Millennium / Ga-mingh Technique
13 Cooley Roc / Check Da Method
14 Super Natural / Buddha Blessed It
15 Dirty Science Crew / They Be Loving Me
16 Aboriginals / The Joint
17 Nine / When The Shit Hits The Fan
18 Da Punisherrs / Lick A Shot
19 Hycin Jo & Illin P / Yes (Squad Mix)
20 South Case / Buy My Tape
21 Redman feat. Roz / I Get Down Like That
22 Lord V.I. / Not Tonight
23 Mic Geronimo / It's Real (Kut Masta Kurt Remix)
24 Load Apex & V Don / Life Goes On`
  },
  {
    title: "88.4MHz",
    audio: "assets/mix/88.4MHz.mp3",
    cover: "assets/img/mix_884mhz_soundcloud.jpg",
    genre: "Ambient",
    date: "2021.08.30",
    tracklist: `0:00:00 Nobuyuki Tsujii - Improvisation and Fugue
0:07:35 Claude Debussy - Danse Sacree
0:12:34 Richard Warner - Spirit Wind
0:29:32 Michel Banabila - Synchronicity
0:34:04 Richard Stoltzman - Tristeza
0:37:08 Kevin Lyons - Midnight at the Well of Souls
0:40:04 St.GIGA - Ozone
0:42:07 Free Sound Collective - Undertow
0:53:04 Loop Guru - The Third Chamber (Part 4)
1:02:59 Sayuw - Old Memories
1:05:43 Hybrid Palms - Sailboat Bliss`
  }
];

const photos = window.AK100_PHOTOS || [];

let dreamText = window.AK100_DREAM_TEXT || "";
const dreamTextPath = "assets/text/夢境紀.txt";
const imageRoot = "assets/img/";

async function loadDreamText() {
  try {
    const response = await fetch(`${dreamTextPath}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    dreamText = await response.text();
  } catch {
    // Local file previews may block fetch; keep content.generated.js as fallback.
  }
}

function splitDreamText() {
  return dreamText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

const gallery = document.querySelector("#gallery");

const photoShapes = [
  "wide", "small", "tall", "square", "needle", "wide", "small", "slab",
  "large", "square", "tall", "small", "panorama", "needle", "block", "wide"
];

const textShapes = [
  "text-xs", "text-s", "text-xs", "text-m", "text-s", "text-xs",
  "text-l", "text-xs", "text-m", "text-s", "text-xs", "text-xl"
];

const textSpans = [2, 3, 3, 4, 5];
const photoMotions = ["still", "slide-x", "slide-y", "slide-x", "still", "slide-x"];

const mobileBreakpoint = 720;

const galleryLimits = {
  desktop: {
    photoLimit: 64,
    mixIndexFloor: 42,
    mixBackdropPhotoCount: 34,
    tailPhotoLimit: 30
  },
  mobile: {
    photoLimit: 34,
    mixIndexFloor: 32,
    mixBackdropPhotoCount: 16,
    tailPhotoLimit: 18
  }
};

const mixClassByTitle = {
  "my favorite shit": "is-my-favorite-shit",
  "夢境紀": "is-yumekyouki",
  "88.4MHz": "is-884mhz"
};

const titleClassesByTitle = {
  dreamz: {
    image: "is-dreamz-title",
    stack: "is-dreamz-stack"
  },
  "DA FINEST": {
    image: "is-finest-title",
    stack: "is-finest-stack"
  }
};

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[otherIndex]] = [copy[otherIndex], copy[index]];
  }
  return copy;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function galleryLimitSet() {
  return galleryLimits[window.innerWidth < mobileBreakpoint ? "mobile" : "desktop"];
}

function mixCardClass(mix) {
  const variant = mixClassByTitle[mix.title];
  return variant ? `mix-card ${variant}` : "mix-card";
}

function titleClass(mix, type) {
  const classes = titleClassesByTitle[mix.title];
  return classes ? classes[type] : "";
}

function mixTitleImageClass(mix) {
  const variant = titleClass(mix, "image");
  return variant ? `mix-title-image ${variant}` : "mix-title-image";
}

function renderMixTitle(mix) {
  if (!mix.titleImage) return escapeHtml(mix.title);

  return `<img class="${mixTitleImageClass(mix)}" src="${escapeHtml(mix.titleImage)}" alt="${escapeHtml(mix.title)}" decoding="async">`;
}

function mixTitleStackClass(mix) {
  const classes = ["mix-title-stack"];
  if (mix.titleImage) classes.push("has-title-image");
  const variant = titleClass(mix, "stack");
  if (variant) classes.push(variant);
  return classes.join(" ");
}

function buildMixes() {
  const mixGrid = document.querySelector("#mixGrid");
  if (!mixGrid) return;

  mixGrid.innerHTML = mixes.map((mix) => `
    <article class="${mixCardClass(mix)}">
      <div class="mix-cover">
        <img src="${escapeHtml(mix.cover)}" alt="${escapeHtml(mix.title)}" loading="lazy" decoding="async">
      </div>
      <div class="mix-body">
        <div class="mix-title-row">
          <div class="${mixTitleStackClass(mix)}">
            <h3>${renderMixTitle(mix)}</h3>
            ${mix.subtitle ? `<div class="mix-subtitle">${escapeHtml(mix.subtitle)}</div>` : ""}
          </div>
          <div class="mix-meta">
            ${mix.genre ? `<div class="genre">${escapeHtml(mix.genre)}</div>` : ""}
            ${mix.date ? `<time class="release-date">${escapeHtml(mix.date)}</time>` : ""}
          </div>
        </div>
        <audio controls preload="metadata" src="${escapeHtml(mix.audio)}"></audio>
        <pre class="tracklist">${escapeHtml(mix.tracklist)}</pre>
      </div>
    </article>
  `).join("");

  const players = [...document.querySelectorAll("audio")];
  players.forEach((player) => {
    player.addEventListener("play", () => {
      players.forEach((other) => {
        if (other !== player) other.pause();
      });
    });
  });
}

function buildGallery() {
  if (!gallery) return;

  const limits = galleryLimitSet();
  const photoLimit = Math.min(photos.length, limits.photoLimit);
  const photoPool = shuffle(photos);
  const shuffledPhotos = photoPool.slice(0, photoLimit);
  const shuffledFragments = shuffle(splitDreamText());

  const createTextItem = (fragment, index) => {
    const textSpan = textSpans[index % textSpans.length];
    const safeStart = 2 + ((index * 3) % (14 - textSpan));
    const textStyle = [
      `--text-start:${safeStart}`,
      `--text-span:${textSpan}`,
      `--text-delay:${randomBetween(-24, 0).toFixed(1)}s`,
      `--text-duration:${randomBetween(18, 34).toFixed(1)}s`
    ].join(";");
    return `
      <p class="art-item dream-fragment ${textShapes[index % textShapes.length]}" style="${textStyle}">
        ${escapeHtml(fragment)}
      </p>
    `;
  };

  const createPhotoItem = (name, index, className = "") => {
    const src = `${imageRoot}${name}`;
    const label = name.replace(/\.[^.]+$/, "");
    const motion = photoMotions[index % photoMotions.length];
    const photoStyle = [
      `--lift:${randomBetween(-28, 28).toFixed(0)}px`,
      `--shift:${randomBetween(-24, 24).toFixed(0)}px`,
      `--run:${randomBetween(10, 36).toFixed(0)}px`,
      `--speed:${randomBetween(8, 22).toFixed(1)}s`,
      `--delay:${randomBetween(-18, 0).toFixed(1)}s`,
      `--burn:${randomBetween(.62, 1.24).toFixed(2)}`,
      `--scale:${randomBetween(.94, 1.18).toFixed(2)}`,
      `--alpha:${randomBetween(.68, .98).toFixed(2)}`,
      `--bleed:${randomBetween(-26, 8).toFixed(0)}px`,
      `--z:${Math.floor(randomBetween(1, 7))}`
    ].join(";");
    return `
      <div class="art-item photo-item ${className} ${photoShapes[index % photoShapes.length]} ${motion}" style="${photoStyle}" aria-label="${escapeHtml(label)}">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy" decoding="async">
      </div>
    `;
  };

  const items = [
    ...shuffledPhotos.map((name, index) => ({
      type: "photo",
      order: (index + .5) / Math.max(shuffledPhotos.length, 1),
      html: createPhotoItem(name, index)
    })),
    ...shuffledFragments.map((fragment, index) => ({
      type: "text",
      order: (index + .35 + randomBetween(-.18, .18)) / Math.max(shuffledFragments.length, 1),
      html: createTextItem(fragment, index)
    }))
  ].sort((left, right) => left.order - right.order);

  const mixIndex = Math.min(
    Math.max(limits.mixIndexFloor, Math.floor(items.length * .5)),
    Math.max(0, items.length - 24)
  );
  const mixBackdropPhotos = photoPool
    .slice(photoLimit, photoLimit + limits.mixBackdropPhotoCount)
    .map((name, index) => createPhotoItem(name, photoLimit + index, "mix-backdrop-item"))
    .join("");
  const mixSection = `
    <section class="art-item mix-section">
      <div class="mix-backdrop" aria-hidden="true">
        ${mixBackdropPhotos}
      </div>
      <div class="mix-grid" id="mixGrid"></div>
    </section>
  `;
  items.splice(mixIndex, 0, { type: "mix", html: mixSection });

  const beforeAndMix = items.slice(0, mixIndex + 1);
  const tail = items.slice(mixIndex + 1);
  const visibleTail = [];
  let tailPhotoCount = 0;

  tail.forEach((item) => {
    if (item.type === "text") {
      visibleTail.push(item);
      return;
    }

    if (tailPhotoCount < limits.tailPhotoLimit) {
      visibleTail.push(item);
      tailPhotoCount += 1;
    }
  });

  gallery.innerHTML = [...beforeAndMix, ...visibleTail].map((item) => item.html).join("");
}

async function initSite() {
  await loadDreamText();
  buildGallery();
  buildMixes();
}

initSite();
