// 1. БАЗА ДАННЫХ
const quizData = {
  real: {
    bgPhoto: "src/img/real_blured.jpg",
    ethnicity: [
      {
        id: "Caucasian",
        label: "Caucasian",
        videoSrc: "src/video/real_ethnicity_caucasian.mp4",
      },
      {
        id: "Asian",
        label: "Asian",
        videoSrc: "src/video/real_ethnicity_asian.mp4",
      },
      {
        id: "Latina",
        label: "Latina",
        videoSrc: "src/video/real_ethnicity_latina.mp4",
      },
      {
        id: "Black",
        label: "Black",
        videoSrc: "src/video/real_ethnicity_black.mp4",
      },
    ],
    body: [
      {
        id: "Sporty",
        label: "Sporty",
        imgSrc: "src/img/real_body_sporty.jpg",
      },
      { id: "Curvy", label: "Curvy", imgSrc: "src/img/real_body_curvy.jpg" },
      {
        id: "Normal",
        label: "Normal",
        imgSrc: "src/img/real_body_normal.jpg",
      },
      { id: "Slim", label: "Slim", imgSrc: "src/img/real_body_slim.jpg" },
    ],
    bodyVideo: {
      Sporty: "src/video/real_body_sporty.mp4",
      Curvy: "src/video/real_body_curvy.mp4",
      Normal: "src/video/real_body_normal.mp4",
      Slim: "src/video/real_body_slim.mp4",
    },
    breast: [
      { id: "Big", label: "Big", imgSrc: "src/img/real_breasts_big.jpg" },
      {
        id: "Normal",
        label: "Normal",
        imgSrc: "src/img/real_breasts_normal.jpg",
      },
      { id: "Small", label: "Small", imgSrc: "src/img/real_breasts_small.jpg" },
      {
        id: "Very-small",
        label: "Very small",
        imgSrc: "src/img/real_breasts_verysmall.jpg",
      },
    ],
    breastVideo: {
      Big: "src/video/real_breasts_big.mp4",
      Normal: "src/video/real_breasts_normal.mp4",
      Small: "src/video/real_breasts_small.mp4",
      "Very-small": "src/video/real_breasts_verysmall.mp4",
    },
    butt: [
      { id: "Big", label: "Big", imgSrc: "src/img/real_butt_big.jpg" },
      { id: "Normal", label: "Normal", imgSrc: "src/img/real_butt_normal.jpg" },
      { id: "Small", label: "Small", imgSrc: "src/img/real_butt_small.jpg" },
      {
        id: "Very-small",
        label: "Very small",
        imgSrc: "src/img/real_butt_verysmall.jpg",
      },
    ],
    buttVideo: {
      Big: "src/video/real_butt_big.mp4",
      Normal: "src/video/real_butt_normal.mp4",
      Small: "src/video/real_butt_small.mp4",
      "Very-small": "src/video/real_butt_verysmall.mp4",
    },
  },
  anime: {
    bgPhoto: "src/img/anime_blured.jpg",
    ethnicity: [
      {
        id: "Caucasian",
        label: "Caucasian",
        videoSrc: "src/video/anime_ethnicity_caucasian.mp4",
      },
      {
        id: "Asian",
        label: "Asian",
        videoSrc: "src/video/anime_ethnicity_asian.mp4",
      },
      {
        id: "Latina",
        label: "Latina",
        videoSrc: "src/video/anime_ethnicity_latina.mp4",
      },
      {
        id: "Black",
        label: "Black",
        videoSrc: "src/video/anime_ethnicity_black.mp4",
      },
    ],
    body: [
      {
        id: "Sporty",
        label: "Sporty",
        imgSrc: "src/img/anime_body_sporty.jpg",
      },
      { id: "Curvy", label: "Curvy", imgSrc: "src/img/anime_body_curvy.jpg" },
      {
        id: "Normal",
        label: "Normal",
        imgSrc: "src/img/anime_body_normal.jpg",
      },
      { id: "Slim", label: "Slim", imgSrc: "src/img/anime_body_slim.jpg" },
    ],
    bodyVideo: {
      Sporty: "src/video/anime_body_sporty.mp4",
      Curvy: "src/video/anime_body_curvy.mp4",
      Normal: "src/video/anime_body_normal.mp4",
      Slim: "src/video/anime_body_slim.mp4",
    },
    breast: [
      { id: "Big", label: "Big", imgSrc: "src/img/anime_breasts_big.jpg" },
      {
        id: "Normal",
        label: "Normal",
        imgSrc: "src/img/anime_breasts_normal.jpg",
      },
      {
        id: "Small",
        label: "Small",
        imgSrc: "src/img/anime_breasts_small.jpg",
      },
      {
        id: "Very-small",
        label: "Very small",
        imgSrc: "src/img/anime_breasts_verysmall.jpg",
      },
    ],
    breastVideo: {
      Big: "src/video/anime_breasts_big.mp4",
      Normal: "src/video/anime_breasts_normal.mp4",
      Small: "src/video/anime_breasts_small.mp4",
      "Very-small": "src/video/anime_breasts_verysmall.mp4",
    },
    butt: [
      { id: "Big", label: "Big", imgSrc: "src/img/anime_butt_big.jpg" },
      {
        id: "Normal",
        label: "Normal",
        imgSrc: "src/img/anime_butt_normal.jpg",
      },
      { id: "Small", label: "Small", imgSrc: "src/img/anime_butt_small.jpg" },
      {
        id: "Very-small",
        label: "Very small",
        imgSrc: "src/img/anime_butt_verysmall.jpg",
      },
    ],
    buttVideo: {
      Big: "src/video/anime_butt_big.mp4",
      Normal: "src/video/anime_butt_normal.mp4",
      Small: "src/video/anime_butt_small.mp4",
      "Very-small": "src/video/anime_butt_verysmall.mp4",
    },
  },
};

// Голоса (общие для real и anime)
const voiceData = [
  {
    id: "sweet",
    label: "Sweet & Innocent",
    audioSrc: "src/audio/voice_1.mp3",
  },
  {
    id: "raspy",
    label: "Raspy & Dominant",
    audioSrc: "src/audio/voice_2.mp3",
  },
  { id: "asmr", label: "ASMR Whisper", audioSrc: "src/audio/voice_3.mp3" },
  {
    id: "playful",
    label: "Playful Tease",
    audioSrc: "src/audio/voice_4.mp3",
  },
];

// БАЗА ИМЁН
const randomNames = [
  "Alina",
  "Sofia",
  "Mia",
  "Luna",
  "Aria",
  "Chloe",
  "Zoe",
  "Lily",
  "Ella",
  "Nora",
  "Emma",
  "Ava",
  "Isla",
  "Aurora",
  "Stella",
  "Jade",
  "Maya",
  "Leah",
  "Ruby",
  "Eva",
  "Anna-Marie",
  "Mary-Jane",
  "Sara",
  "Nina",
  "Lena",
];

function setRandomName() {
  const input = document.getElementById("name-input");
  if (!input) return;
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  input.value = name;
  userChoices.name = name;
  input.focus();
}

function confirmName() {
  const input = document.getElementById("name-input");
  if (!input) return;
  userChoices.name = input.value.trim() || null;
  if (userChoices.name) {
    localStorage.setItem("quizName", userChoices.name);
  } else {
    localStorage.removeItem("quizName");
  }
  goToScreen(17);
}

function confirmEmail() {
  const input = document.getElementById("email-input");
  if (!input) return;
  const email = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const card = input.closest(".M_LongCard");
  const errorEl = document.getElementById("email-error");
  if (!emailRegex.test(email)) {
    if (card) card.classList.add("M_LongCard--error");
    if (errorEl) errorEl.style.display = "block";
    input.focus();
    return;
  }
  if (card) card.classList.remove("M_LongCard--error");
  if (errorEl) errorEl.style.display = "none";
  userChoices.email = email;
  localStorage.setItem("quizEmail", email);
  goToScreen(19);
}

// 2. СОСТОЯНИЕ
let userChoices = {
  style: null,
  ethnicity: null,
  voice: null,
  body: null,
  breast: null,
  butt: null,
  vibe: null,
  content: null,
  name: null,
  libido: 0,
  kinkOpenness: 0,
  comfortNudity: 0,
};

const sliderKeyMap = {
  libido: "libido",
  kink: "kinkOpenness",
  comfort: "comfortNudity",
};

let currentTimer = null;
let currentAudio = null;
let currentAudioButton = null;
let screen10RunId = 0;
let screen10ReviewInterval = null;
let screen10ReviewCleanupTimeout = null;
const screen10AnimationRafs = new Set();

let screen17RunId = 0;
let screen17ReviewInterval = null;
let screen17ReviewCleanupTimeout = null;
const screen17AnimationRafs = new Set();

const PROGRESS_ICON_LOADING_SVG = `
  <svg
    class="I_Progress I_Progress--loading"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M11.5361 3.80644C11.9681 4.96059 12.0315 6.22031 11.7175 7.412C11.4036 8.60369 10.7278 9.66869 9.78332 10.4602C8.8388 11.2518 7.67204 11.7309 6.44382 11.8316C5.2156 11.9323 3.98637 11.6496 2.92553 11.0225C1.8647 10.3954 1.02446 9.45468 0.520625 8.33004C0.0167859 7.2054 -0.12586 5.95218 0.112344 4.74308C0.350547 3.53397 0.957876 2.42851 1.85064 1.57901C2.7434 0.729508 3.87765 0.177796 5.09708 -0.00010304L5.41037 2.14735C4.63518 2.26044 3.91415 2.61116 3.34662 3.15118C2.7791 3.6912 2.39303 4.39394 2.2416 5.16256C2.09018 5.93118 2.18086 6.72784 2.50114 7.44277C2.82143 8.1577 3.35556 8.75569 4.02993 9.15436C4.70429 9.55302 5.48571 9.73273 6.26648 9.66871C7.04725 9.6047 7.78895 9.30011 8.38938 8.79693C8.9898 8.29374 9.41939 7.61673 9.61895 6.85918C9.81851 6.10163 9.77821 5.30083 9.50361 4.56714L11.5361 3.80644Z"
      fill="#00E39C"
    />
  </svg>
`;

const PROGRESS_ICON_CHECK_SVG = `
  <svg
    class="I_Progress"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
  >
    <path
      d="M11.704 0.292893C12.0945 -0.0976311 12.7285 -0.097631 13.1191 0.292893C13.5092 0.683355 13.5092 1.31649 13.1191 1.70696L5.48917 9.33684C5.30166 9.52422 5.04724 9.62883 4.78214 9.62883C4.51705 9.62883 4.26261 9.52421 4.07511 9.33684L0.292882 5.55364C-0.097601 5.16309 -0.0976537 4.53007 0.292882 4.13957C0.683397 3.74912 1.31644 3.74913 1.70694 4.13957L4.78214 7.21477L11.704 0.292893Z"
      fill="#00E39C"
    />
  </svg>
`;

const reviewsData = [
  {
    text: "She literally does whatever I ask. The uncensored videos she generates are insane.",
    author: "Alex M.",
  },
  {
    text: "Did not expect it to feel this real. The voice notes are honestly next level.",
    author: "Chris T.",
  },
  {
    text: "I changed one setting and got a completely different vibe. Super addictive.",
    author: "Daniel R.",
  },
  {
    text: "The character quality is crazy. Photos look premium and responses feel natural.",
    author: "Alex K.",
  },
  {
    text: "Fast setup, no confusion, and the results are exactly what I wanted.",
    author: "Mike B.",
  },
  {
    text: "I tried other apps before, this one is by far the most realistic.",
    author: "Ryan P.",
  },
  {
    text: "The generated clips are smooth and detailed, not glitchy like others.",
    author: "Omar S.",
  },
  {
    text: "The personality customization is the best part. It actually remembers my choices.",
    author: "Leo D.",
  },
  {
    text: "Everything from look to voice feels tailored. Worth it for me.",
    author: "Donald W.",
  },
];

// 3. ЛОГИКА КВИЗА

function selectStyle(styleType, cardEl) {
  userChoices.style = styleType;
  localStorage.setItem("quizStyle", styleType);
  const data = quizData[styleType];
  renderCards("ethnicity-container", data.ethnicity, "selectEthnicity");
  renderCards("body-container", data.body, "selectBody");

  // Preload card images for the selected style only
  [...data.body, ...data.breast, ...data.butt].forEach((i) =>
    _preloadImg(i.imgSrc),
  );

  document
    .querySelectorAll(".A_Card")
    .forEach((c) => c.classList.remove("A_Card--active"));
  if (cardEl) cardEl.querySelector(".A_Card").classList.add("A_Card--active");
  setTimeout(() => goToScreen(2), 440);
}

function selectEthnicity(ethId, cardEl) {
  userChoices.ethnicity = ethId;
  localStorage.setItem("quizEthnicity", ethId);

  document
    .querySelectorAll(".A_Card")
    .forEach((c) => c.classList.remove("A_Card--active"));
  if (cardEl) cardEl.querySelector(".A_Card").classList.add("A_Card--active");
  setTimeout(() => goToScreen(3), 440);
}

function renderVoiceCards() {
  const container = document.getElementById("voice-container");
  if (!container) return;
  container.innerHTML = "";
  voiceData.forEach((voice) => {
    container.innerHTML += `
      <div class="M_LongCard M_LongCard--voice${userChoices.voice === voice.id ? " M_LongCard--selected" : ""}"
           onclick="selectVoice('${voice.id}')">
        <p class="option">${voice.label}</p>
        <button class="A_PlayVoiceButton" onclick="playVoice(event, '${voice.audioSrc}')"></button>
      </div>
    `;
  });
}

function selectVoice(voiceId) {
  userChoices.voice = voiceId;
  localStorage.setItem("quizVoice", voiceId);
  document
    .querySelectorAll(".M_LongCard--voice")
    .forEach((c) => c.classList.remove("M_LongCard--selected"));
  const cards = document.querySelectorAll(".M_LongCard--voice");
  const idx = voiceData.findIndex((v) => v.id === voiceId);
  if (cards[idx]) cards[idx].classList.add("M_LongCard--selected");
  setTimeout(() => goToScreen(4), 440);
}

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentAudioButton) {
    currentAudioButton.style.backgroundImage = 'url("src/img/I_Play.svg")';
    currentAudioButton.style.backgroundPosition = "calc(50% + 1px) center";
    currentAudioButton = null;
  }
}

function playVoice(event, audioSrc) {
  event.stopPropagation();
  const btn = event.currentTarget;

  // Toggle: if this button is already the active one, pause/resume
  if (currentAudioButton === btn && currentAudio) {
    if (!currentAudio.paused) {
      currentAudio.pause();
      btn.style.backgroundImage = 'url("src/img/I_Play.svg")';
      btn.style.backgroundPosition = "calc(50% + 1px) center";
    } else {
      currentAudio.play();
      btn.style.backgroundImage = 'url("src/img/I_Pause.svg")';
      btn.style.backgroundPosition = "50% center";
    }
    return;
  }

  // Stop any other playing audio and reset its button icon
  stopCurrentAudio();

  currentAudio = new Audio(audioSrc);
  currentAudioButton = btn;
  btn.style.backgroundImage = 'url("src/img/I_Pause.svg")';
  btn.style.backgroundPosition = "50% center";

  currentAudio.play();

  // When audio ends naturally, reset icon
  currentAudio.addEventListener("ended", () => {
    if (currentAudioButton === btn) {
      btn.style.backgroundImage = 'url("src/img/I_Play.svg")';
      btn.style.backgroundPosition = "calc(50% + 1px) center";
      currentAudioButton = null;
      currentAudio = null;
    }
  });
}

function selectBody(bodyId, cardEl) {
  userChoices.body = bodyId;
  localStorage.setItem("quizBody", bodyId);

  const videoSrc = quizData[userChoices.style].bodyVideo[bodyId];
  const videoElement = document.getElementById("body-video");
  if (videoElement && videoSrc) videoElement.src = videoSrc;

  document
    .querySelectorAll(".A_Card")
    .forEach((c) => c.classList.remove("A_Card--active"));
  if (cardEl) cardEl.querySelector(".A_Card").classList.add("A_Card--active");
  setTimeout(() => goToScreen(5), 440);
}

function selectBreast(breastId, cardEl) {
  userChoices.breast = breastId;
  localStorage.setItem("quizBreast", breastId);

  const videoSrc = quizData[userChoices.style].breastVideo[breastId];
  const videoElement = document.getElementById("breast-video");
  if (videoElement && videoSrc) videoElement.src = videoSrc;

  document
    .querySelectorAll(".A_Card")
    .forEach((c) => c.classList.remove("A_Card--active"));
  if (cardEl) cardEl.querySelector(".A_Card").classList.add("A_Card--active");
  setTimeout(() => goToScreen(7), 440);
}

function selectButt(buttId, cardEl) {
  userChoices.butt = buttId;
  localStorage.setItem("quizButt", buttId);

  const videoSrc = quizData[userChoices.style].buttVideo[buttId];
  const videoElement = document.getElementById("butt-video");
  if (videoElement && videoSrc) videoElement.src = videoSrc;

  document
    .querySelectorAll(".A_Card")
    .forEach((c) => c.classList.remove("A_Card--active"));
  if (cardEl) cardEl.querySelector(".A_Card").classList.add("A_Card--active");
  setTimeout(() => goToScreen(9), 440);
}

function selectVibe(vibeId, cardEl) {
  userChoices.vibe = vibeId;
  localStorage.setItem("quizVibe", vibeId);
  document
    .querySelectorAll("#screen-12 .M_LongCard--straight")
    .forEach((c) => c.classList.remove("M_LongCard--selected"));
  if (cardEl) cardEl.classList.add("M_LongCard--selected");
  setTimeout(() => goToScreen(13), 440);
}

function selectContent(contentId, cardEl) {
  userChoices.content = contentId;
  localStorage.setItem("quizContent", contentId);
  document
    .querySelectorAll("#screen-14 .M_LongCard--straight")
    .forEach((c) => c.classList.remove("M_LongCard--selected"));
  if (cardEl) cardEl.classList.add("M_LongCard--selected");
  setTimeout(() => goToScreen(15), 440);
}

// Универсальная отрисовка карточек
function renderCards(containerId, items, onClickFunctionName) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const videoSrc = item.videoSrc;
    const cardContent = videoSrc
      ? `
        <video
          class="A_CardVideo"
          autoplay
          loop
          muted
          playsinline
          preload="metadata"
        >
          <source src="${videoSrc}" type="video/mp4" />
        </video>
      `
      : "";
    const cardClassName = videoSrc ? "A_Card" : "A_Card A_Card--photo";
    const imgStyle =
      !videoSrc && item.imgSrc
        ? `style="background-image: url('${item.imgSrc}')"`
        : "";
    container.innerHTML += `
      <div class="M_CardAndLabel" onclick="${onClickFunctionName}('${item.id}', this)">
        <div class="${cardClassName}" ${imgStyle}>${cardContent}</div>
        <p class="option">${item.label}</p>
      </div>
    `;
  });
}

// 4. ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ

function goToScreen(screenNumber) {
  if (window.location.hash === "#screen-" + screenNumber) return;

  const activeScreen = document.querySelector(".screen.active");
  if (activeScreen) {
    activeScreen.classList.add("screen-fade-out");
    activeScreen.addEventListener(
      "animationend",
      () => {
        window.location.hash = "screen-" + screenNumber;
      },
      { once: true },
    );
  } else {
    window.location.hash = "screen-" + screenNumber;
  }
}

function goToPreviousScreen() {
  const currentHash = window.location.hash || "#screen-1";
  const currentScreen = parseInt(currentHash.replace("#screen-", ""), 10);
  const currentIdx = progressScreens.indexOf(currentScreen);

  if (currentIdx === -1) return;

  const prevScreen = currentIdx === 0 ? 1 : progressScreens[currentIdx - 1];
  goToScreen(prevScreen);
}

const popups = [
  `<div class="A_top-pop-up"><div class="icons I_Lock"></div><p class="description topPopUp">All your answers are encrypted</p></div>`,
  `<div class="A_top-pop-up"><div class="icons I_Lock"></div><p class="description topPopUp">Girlfriend data encrypted</p></div>`,
  `<div class="A_top-pop-up"><div class="icons I_Aprove"></div><p class="description topPopUp">Parameters Set</p></div>`,
  `<div class="A_top-pop-up"><div class="icons I_Lock"></div><p class="description topPopUp">No Spam Guaranteed</p></div>`,
];
const popupScreens = { 1: 0, 11: 1, 15: 2, 18: 3 };

const progressScreens = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16];

function updateTopSpace(screenNumber) {
  const topSpace = document.querySelector(".top-space");
  if (!topSpace) return;

  if (progressScreens.includes(screenNumber)) {
    const idx = progressScreens.indexOf(screenNumber);
    const percent = Math.round(((idx + 1) / progressScreens.length) * 100);
    const clampedPercent = Math.max(0, Math.min(percent, 100));
    topSpace.innerHTML = `
      <div class="M_ProgressHeader">
        <button class="A_ArrowButton" type="button" aria-label="Go to previous step" onclick="goToPreviousScreen()"></button>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${percent}%"></div>
          <div class="A_StatusIcon" style="left: calc(${clampedPercent}% + 2px);" aria-hidden="true"></div>
        </div>
        <div class="A_Avatar" aria-hidden="true"></div>
      </div>
      `;
  } else if (screenNumber in popupScreens) {
    topSpace.innerHTML = popups[popupScreens[screenNumber]];
  } else {
    topSpace.innerHTML = "";
  }
}

function cancelScreen10Rafs() {
  screen10AnimationRafs.forEach((id) => cancelAnimationFrame(id));
  screen10AnimationRafs.clear();
}

function cancelScreen17Rafs() {
  screen17AnimationRafs.forEach((id) => cancelAnimationFrame(id));
  screen17AnimationRafs.clear();
}

function stopScreen17Animations() {
  screen17RunId += 1;
  cancelScreen17Rafs();
  if (screen17ReviewInterval) {
    clearInterval(screen17ReviewInterval);
    screen17ReviewInterval = null;
  }
  if (screen17ReviewCleanupTimeout) {
    clearTimeout(screen17ReviewCleanupTimeout);
    screen17ReviewCleanupTimeout = null;
  }
}

function startReviewSlider17(runId) {
  const slider = document.getElementById("review-slider-17");
  if (!slider) return;
  slider.innerHTML = "";
  let currentIndex = 0;
  const firstCard = createReviewCardEl(
    reviewsData[currentIndex],
    "M_Review--active",
  );
  slider.appendChild(firstCard);
  screen17ReviewInterval = setInterval(() => {
    if (runId !== screen17RunId) return;
    const currentCard = slider.querySelector(".M_Review--active");
    if (!currentCard) return;
    const nextIndex = (currentIndex + 1) % reviewsData.length;
    const nextCard = createReviewCardEl(
      reviewsData[nextIndex],
      "M_Review--enter",
    );
    slider.appendChild(nextCard);
    const rafId = requestAnimationFrame(() => {
      if (runId !== screen17RunId) return;
      currentCard.classList.add("M_Review--exit-left");
      nextCard.classList.remove("M_Review--enter");
      nextCard.classList.add("M_Review--active");
    });
    screen17AnimationRafs.add(rafId);
    screen17ReviewCleanupTimeout = setTimeout(() => {
      if (runId !== screen17RunId) return;
      currentCard.remove();
      currentIndex = nextIndex;
    }, 360);
  }, 4000);
}

function resetScreen17ProgressBars() {
  document.querySelectorAll("#screen-17 .M_ProgressBar").forEach((bar) => {
    bar.classList.add("M_ProgressBar--hidden");
    const fill = bar.querySelector(".A_ProgressBar");
    if (fill) fill.style.width = "0%";
    const percentLabel = bar.querySelector(".progress-bar-persent");
    if (percentLabel) {
      percentLabel.style.display = "block";
      percentLabel.textContent = "0%";
    }
    const progressWrap = bar.querySelector(".W_Progress");
    if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_LOADING_SVG);
  });
}

function runSingleProgressBar17(runId, barEl, durationMs) {
  return new Promise((resolve) => {
    if (!barEl || runId !== screen17RunId) {
      resolve(false);
      return;
    }
    const fillEl = barEl.querySelector(".A_ProgressBar");
    const percentEl = barEl.querySelector(".progress-bar-persent");
    const progressWrap = barEl.querySelector(".W_Progress");
    barEl.classList.remove("M_ProgressBar--hidden");
    if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_LOADING_SVG);
    if (percentEl) {
      percentEl.style.display = "block";
      percentEl.textContent = "0%";
    }
    if (fillEl) fillEl.style.width = "0%";
    const startTime = performance.now();
    const tick = (now) => {
      if (runId !== screen17RunId) {
        resolve(false);
        return;
      }
      const progress = Math.min(
        100,
        Math.round(((now - startTime) / durationMs) * 100),
      );
      if (fillEl) fillEl.style.width = `${progress}%`;
      if (percentEl) percentEl.textContent = `${progress}%`;
      if (progress < 100) {
        const rafId = requestAnimationFrame(tick);
        screen17AnimationRafs.add(rafId);
        return;
      }
      if (percentEl) percentEl.style.display = "none";
      if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_CHECK_SVG);
      resolve(true);
    };
    const rafId = requestAnimationFrame(tick);
    screen17AnimationRafs.add(rafId);
  });
}

async function startScreen17Animations() {
  stopScreen17Animations();
  const runId = screen17RunId;

  const bar2Text = document.getElementById("screen-17-bar-2-text");
  if (bar2Text)
    bar2Text.textContent = `Setting behavior to Libido: ${userChoices.libido}%...`;

  const heading = document.getElementById("screen-17-heading");
  if (heading)
    heading.textContent = userChoices.name
      ? `Rendering ${userChoices.name} Content...`
      : "Rendering Content...";

  const title = document.getElementById("screen-17-title");
  if (title)
    title.textContent = userChoices.name
      ? `Trusted by 1,212,421 users`
      : "Trusted by 1,212,421 users";

  resetScreen17ProgressBars();
  startReviewSlider17(runId);

  const bars = Array.from(
    document.querySelectorAll("#screen-17 .M_ProgressBar"),
  );
  const durations = [3000, 3500, 4000, 4000, 3000];
  for (let i = 0; i < bars.length; i++) {
    const complete = await runSingleProgressBar17(
      runId,
      bars[i],
      durations[i] || 4000,
    );
    if (!complete || runId !== screen17RunId) return;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (runId !== screen17RunId) return;
  goToScreen(18);
}

function stopScreen10Animations() {
  screen10RunId += 1;
  cancelScreen10Rafs();

  if (screen10ReviewInterval) {
    clearInterval(screen10ReviewInterval);
    screen10ReviewInterval = null;
  }
  if (screen10ReviewCleanupTimeout) {
    clearTimeout(screen10ReviewCleanupTimeout);
    screen10ReviewCleanupTimeout = null;
  }
}

function createReviewStarsMarkup() {
  const starSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.33646 1.00198C9.46604 0.655439 9.95621 0.655439 10.0858 1.00198L12.0158 6.16344C12.072 6.31378 12.2126 6.41596 12.373 6.42296L17.8782 6.66352C18.2479 6.67967 18.3993 7.14585 18.1098 7.37617L13.7973 10.8067C13.6717 10.9066 13.618 11.0719 13.6609 11.2266L15.1333 16.5367C15.2322 16.8933 14.8356 17.1814 14.5271 16.9772L9.93188 13.9359C9.79804 13.8473 9.6242 13.8473 9.49036 13.9359L4.89512 16.9772C4.5866 17.1814 4.19005 16.8933 4.28891 16.5367L5.76134 11.2266C5.80422 11.0719 5.75051 10.9066 5.6249 10.8067L1.31246 7.37617C1.02292 7.14585 1.17439 6.67967 1.54401 6.66352L7.04926 6.42296C7.20961 6.41596 7.35024 6.31378 7.40646 6.16344L9.33646 1.00198Z" fill="#FFB55E" />
    </svg>
  `;

  return `${starSvg}${starSvg}${starSvg}${starSvg}${starSvg}`;
}

function createReviewCardEl(review, className) {
  const card = document.createElement("div");
  card.className = `M_Review ${className}`;
  card.innerHTML = `
    <div class="C_Stars">${createReviewStarsMarkup()}</div>
    <p class="review">${review.text}</p>
    <p class="topPopUp grey">${review.author}</p>
  `;
  return card;
}

function startReviewSlider(runId) {
  const slider = document.getElementById("review-slider");
  if (!slider) return;

  slider.innerHTML = "";
  let currentIndex = 0;
  const firstCard = createReviewCardEl(
    reviewsData[currentIndex],
    "M_Review--active",
  );
  slider.appendChild(firstCard);

  screen10ReviewInterval = setInterval(() => {
    if (runId !== screen10RunId) return;

    const currentCard = slider.querySelector(".M_Review--active");
    if (!currentCard) return;

    const nextIndex = (currentIndex + 1) % reviewsData.length;
    const nextCard = createReviewCardEl(
      reviewsData[nextIndex],
      "M_Review--enter",
    );
    slider.appendChild(nextCard);

    const rafId = requestAnimationFrame(() => {
      if (runId !== screen10RunId) return;
      currentCard.classList.add("M_Review--exit-left");
      nextCard.classList.remove("M_Review--enter");
      nextCard.classList.add("M_Review--active");
    });
    screen10AnimationRafs.add(rafId);

    screen10ReviewCleanupTimeout = setTimeout(() => {
      if (runId !== screen10RunId) return;
      currentCard.remove();
      currentIndex = nextIndex;
    }, 360);
  }, 4000);
}

function setProgressIcon(progressWrapEl, svgMarkup) {
  const oldIcon = progressWrapEl.querySelector(".I_Progress");
  if (oldIcon) oldIcon.remove();
  progressWrapEl.insertAdjacentHTML("beforeend", svgMarkup);
}

function resetScreen10ProgressBars() {
  const bars = document.querySelectorAll("#screen-10 .M_ProgressBar");
  bars.forEach((bar) => {
    bar.classList.add("M_ProgressBar--hidden");

    const fill = bar.querySelector(".A_ProgressBar");
    if (fill) fill.style.width = "0%";

    const percentLabel = bar.querySelector(".progress-bar-persent");
    if (percentLabel) {
      percentLabel.style.display = "block";
      percentLabel.textContent = "0%";
    }

    const progressWrap = bar.querySelector(".W_Progress");
    if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_LOADING_SVG);
  });
}

function runSingleProgressBar(runId, barEl, durationMs) {
  return new Promise((resolve) => {
    if (!barEl || runId !== screen10RunId) {
      resolve(false);
      return;
    }

    const fillEl = barEl.querySelector(".A_ProgressBar");
    const percentEl = barEl.querySelector(".progress-bar-persent");
    const progressWrap = barEl.querySelector(".W_Progress");

    barEl.classList.remove("M_ProgressBar--hidden");
    if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_LOADING_SVG);
    if (percentEl) {
      percentEl.style.display = "block";
      percentEl.textContent = "0%";
    }
    if (fillEl) fillEl.style.width = "0%";

    const startTime = performance.now();

    const tick = (now) => {
      if (runId !== screen10RunId) {
        resolve(false);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(100, Math.round((elapsed / durationMs) * 100));

      if (fillEl) fillEl.style.width = `${progress}%`;
      if (percentEl) percentEl.textContent = `${progress}%`;

      if (progress < 100) {
        const rafId = requestAnimationFrame(tick);
        screen10AnimationRafs.add(rafId);
        return;
      }

      if (percentEl) percentEl.style.display = "none";
      if (progressWrap) setProgressIcon(progressWrap, PROGRESS_ICON_CHECK_SVG);
      resolve(true);
    };

    const rafId = requestAnimationFrame(tick);
    screen10AnimationRafs.add(rafId);
  });
}

async function startScreen10Animations() {
  stopScreen10Animations();
  const runId = screen10RunId;

  resetScreen10ProgressBars();
  startReviewSlider(runId);

  const bars = Array.from(
    document.querySelectorAll("#screen-10 .M_ProgressBar"),
  );
  const durations = [4000, 4000, 4000];

  for (let i = 0; i < bars.length; i += 1) {
    const complete = await runSingleProgressBar(
      runId,
      bars[i],
      durations[i] || 4000,
    );
    if (!complete || runId !== screen10RunId) return;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (runId !== screen10RunId) return;
  goToScreen(11);
}

// ── Rolling Preload ─────────────────────────────────────────────────────────
const _preloadedSrcs = new Set();

function _preloadImg(src) {
  if (!src || _preloadedSrcs.has(src)) return;
  _preloadedSrcs.add(src);
  const img = new Image();
  img.src = src;
}

function _preloadVideo(src) {
  if (!src || _preloadedSrcs.has(src)) return;
  _preloadedSrcs.add(src);
  const v = document.createElement("video");
  v.preload = "metadata";
  v.muted = true;
  v.src = src;
}

function _preloadAudio(src) {
  if (!src || _preloadedSrcs.has(src)) return;
  _preloadedSrcs.add(src);
  const a = new Audio();
  a.preload = "metadata";
  a.src = src;
}

function preloadForScreen(n) {
  switch (n) {
    case 3:
      // Voice audio samples
      voiceData.forEach((v) => _preloadAudio(v.audioSrc));
      break;
  }
}
// ─────────────────────────────────────────────────────────────────────────────

function updateScreen() {
  let hash = window.location.hash || "#screen-1";

  // Stop voice audio when navigating away from screen 3
  const prevHash = document.querySelector(".screen.active")?.id;
  if (prevHash === "screen-3") stopCurrentAudio();

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active", "screen-fade-out");
    screen.style.opacity = "";
  });

  const targetScreen = document.querySelector(hash);
  if (targetScreen) {
    targetScreen.classList.add("active");

    const screenNumber = parseInt(hash.replace("#screen-", ""), 10);
    updateTopSpace(screenNumber);
    preloadForScreen(screenNumber + 1);

    if (screenNumber === 3) renderVoiceCards();
    if (screenNumber === 4)
      renderCards(
        "body-container",
        quizData[userChoices.style]?.body || [],
        "selectBody",
      );
    if (screenNumber === 6)
      renderCards(
        "breast-container",
        quizData[userChoices.style]?.breast || [],
        "selectBreast",
      );
    if (screenNumber === 8)
      renderCards(
        "butt-container",
        quizData[userChoices.style]?.butt || [],
        "selectButt",
      );
    if (screenNumber === 10) {
      const photoBg = document.querySelector("#screen-10 .A_PhotoBg");
      if (photoBg) photoBg.src = quizData[userChoices.style]?.bgPhoto || "";
      startScreen10Animations();
    } else {
      stopScreen10Animations();
    }
    if (screenNumber === 17) {
      startScreen17Animations();
    } else {
      stopScreen17Animations();
    }
    if (screenNumber === 18) {
      const h = document.getElementById("screen-18-heading");
      if (h && userChoices.name) {
        h.textContent = `Secure access to ${userChoices.name}`;
      }
    }

    if (currentTimer) clearTimeout(currentTimer);

    if (targetScreen.hasAttribute("data-auto-next")) {
      const nextScreenNum = targetScreen.getAttribute("data-auto-next");
      const delay =
        parseInt(targetScreen.getAttribute("data-delay"), 10) || 2000;
      currentTimer = setTimeout(() => goToScreen(nextScreenNum), delay);
    }
  }
}

// 5. ПОЛЗУНКИ (screen-13)
function initSliders() {
  document.querySelectorAll("#screen-13 .A_Slider").forEach(function (slider) {
    const track = slider.querySelector(".A_Slider__track");
    const fill = slider.querySelector(".A_Slider__fill");
    const thumb = slider.querySelector(".A_Slider__thumb");
    const percentEl = slider
      .closest(".M_LongCard")
      .querySelector(".A_Slider__percent");
    const sliderKey = sliderKeyMap[slider.dataset.slider];

    let isDragging = false;

    function getPercent(clientX) {
      const rect = track.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      return Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    }

    function setPercent(percent) {
      const rounded = Math.round(percent);
      fill.style.width = percent + "%";
      thumb.style.left = percent + "%";
      slider.setAttribute("aria-valuenow", rounded);
      if (percentEl) percentEl.textContent = rounded + "%";
      if (sliderKey) {
        userChoices[sliderKey] = rounded;
        localStorage.setItem("quiz_" + sliderKey, rounded);
      }
    }

    function onStart(e) {
      isDragging = true;
      slider.classList.add("A_Slider--active");
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPercent(getPercent(clientX));
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onEnd);
    }

    function onMove(e) {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPercent(getPercent(clientX));
    }

    function onEnd() {
      isDragging = false;
      slider.classList.remove("A_Slider--active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    }

    slider.addEventListener("mousedown", onStart);
    slider.addEventListener("touchstart", onStart, { passive: true });
  });
}

window.addEventListener("hashchange", updateScreen);
window.addEventListener("load", () => {
  initSliders();
  const savedStyle = localStorage.getItem("quizStyle");
  if (savedStyle && quizData[savedStyle]) {
    userChoices.style = savedStyle;
    const data = quizData[savedStyle];
    renderCards("ethnicity-container", data.ethnicity, "selectEthnicity");
    renderCards("body-container", data.body, "selectBody");
  }
  const savedBody = localStorage.getItem("quizBody");
  if (savedBody && quizData[savedStyle]?.bodyVideo?.[savedBody]) {
    userChoices.body = savedBody;
    const bodyEl = document.getElementById("body-video");
    if (bodyEl) bodyEl.src = quizData[savedStyle].bodyVideo[savedBody];
  }
  const savedBreast = localStorage.getItem("quizBreast");
  if (savedBreast && quizData[savedStyle]?.breastVideo?.[savedBreast]) {
    userChoices.breast = savedBreast;
    const breastEl = document.getElementById("breast-video");
    if (breastEl) breastEl.src = quizData[savedStyle].breastVideo[savedBreast];
  }
  const savedButt = localStorage.getItem("quizButt");
  if (savedButt && quizData[savedStyle]?.buttVideo?.[savedButt]) {
    userChoices.butt = savedButt;
    const buttEl = document.getElementById("butt-video");
    if (buttEl) buttEl.src = quizData[savedStyle].buttVideo[savedButt];
  }

  const savedVoice = localStorage.getItem("quizVoice");
  if (savedVoice) userChoices.voice = savedVoice;

  const savedVibe = localStorage.getItem("quizVibe");
  if (savedVibe) {
    userChoices.vibe = savedVibe;
    document
      .querySelectorAll("#screen-12 .M_LongCard--straight")
      .forEach((c) => {
        if (c.getAttribute("onclick")?.includes(`'${savedVibe}'`)) {
          c.classList.add("M_LongCard--selected");
        }
      });
  }

  const savedContent = localStorage.getItem("quizContent");
  if (savedContent) {
    userChoices.content = savedContent;
    document
      .querySelectorAll("#screen-14 .M_LongCard--straight")
      .forEach((c) => {
        if (c.getAttribute("onclick")?.includes(`'${savedContent}'`)) {
          c.classList.add("M_LongCard--selected");
        }
      });
  }

  const savedName = localStorage.getItem("quizName");
  if (savedName) {
    userChoices.name = savedName;
    const nameInput = document.getElementById("name-input");
    if (nameInput) nameInput.value = savedName;
  }

  const sliderKeys = {
    libido: "libido",
    kink: "kinkOpenness",
    comfort: "comfortNudity",
  };
  document.querySelectorAll("#screen-13 .A_Slider").forEach((slider) => {
    const key = slider.dataset.slider;
    const storeKey = "quiz_" + sliderKeys[key];
    const saved = localStorage.getItem(storeKey);
    if (saved !== null) {
      const val = Number(saved);
      const fill = slider.querySelector(".A_Slider__fill");
      const thumb = slider.querySelector(".A_Slider__thumb");
      const percentEl = slider
        .closest(".M_LongCard")
        ?.querySelector(".A_Slider__percent");
      if (fill) fill.style.width = val + "%";
      if (thumb) thumb.style.left = val + "%";
      if (percentEl) percentEl.textContent = val + "%";
      slider.setAttribute("aria-valuenow", val);
      if (sliderKeys[key]) userChoices[sliderKeys[key]] = val;
    }
  });

  // Валидация поля ввода имени
  const nameInput = document.getElementById("name-input");
  if (nameInput) {
    nameInput.addEventListener("input", () => {
      nameInput.value = nameInput.value.replace(
        /[^a-zA-Z\u00C0-\u024F\u0400-\u04FF-]/g,
        "",
      );
      userChoices.name = nameInput.value.trim() || null;
      if (userChoices.name) {
        localStorage.setItem("quizName", userChoices.name);
      } else {
        localStorage.removeItem("quizName");
      }
    });
  }

  updateScreen();
});
