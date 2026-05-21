A1lib.identifyApp("appconfig.json");

let reader = new Chatbox.default();
const appColor = A1lib.mixColor(255, 199, 0);
const timestampRegex = /\[\d{2}:\d{2}:\d{2}\]/g;
let chatInterval = null;


const rewardChestAnchor = {
  width: 9,
  height: 10,
  data: "XHSR/1xzkf8nucf/J7nI/ye4x/8nuMf/WXCN/1lwjP9Xb4v/UGV//1Blf/8nuMf/MN3v/y3L3P8QiJP/J7jH/1pykP9aco//UGV//yq5yP8y7P//Uf///xdeZf8nusn/J7jH/111kv9cdJL/UWWA/zz///8y7v//SfH//zDg8P8nvMr/KrrI/1Blf/9QZX//AH+J/1T///8nuMf/QNPi/0f///8Qi5b/J7fF/1Flf/9QZX//MNvs/yCUoP8w2+z/KrvK/ye4x/8+7///AH+J/1FlgP9RZYD/AH6I/ye8y/8Xa3T/HIaR/xyCjP8+////MNvs/zDb7P8w2+z/XnaV/yrB0P8qwtH/AABJ/yq+zf8qv87/NfL//zXy//8w2+z/XnaV/yq+zf8qwdD/AABJ/yq+zf8qv87/XnaV/152lf9edpX/XnaV/152lf8qwdD/AABJ/yrAzv8qv87/XnaV/152lf9edpX/"
};

let clueNAnchorStr = "VoeY/1eKnP9ai57/XJCk/wAZM/8AGTP/ABkz/wAAAP9hl63/YZet/wAZM/8AGTP/ABkz/wAZM/8AGTP/ABkz/2GXrf9ek6n/ABkz/wAZM/8AAAD/V4ib/1eHmv9Wh5n/VoaY/1yPov9cj6L/XJCk/12RpP8AGTP/ABkz/wAZM/8AAAD/Ypiv/2KYr/9imK//ABkz/wAZM/8AGTP/ABkz/wAZM/8AGTP/ZJyy/wAZM/8AGTP/AAAA/2KXrv9ek6n/XpKn/1qOov9ckKT/XJCk/1yQpP9dkaX/ABkz/wAZM/8AGTP/AAAA/2SZsP9imbD/Ypmw/2KZsP8AGTP/ABkz/wAZM/8AGTP/ABkz/wAZM/8AGTP/ABkz/wAAAP9imbD/Ypeu/2GXrf9hlqz/XZGk/12RpP9dkaX/XZGl/wAZM/8AGTP/ABkz/wAAAP9lnLL/ZZyy/2Scsv9knLL/ZZyy/wAZM/8AGTP/ABkz/wAZM/8AGTP/ABkz/wAZM/8AAAD/Ypqw/2KYr/9hl63/YZas/12Rpv9dkab/XZGm/12Rpv8AGTP/ABkz/wAZM/8AAAD/ZJyy/2Sbsv9knLL/ZJuy/2Sbsv9km7L/ABkz/wAZM/8AGTP/ABkz/wAZM/8AGTP/AAAA/2Sbsv9kmrD/Ypiv/2GXrf9ekqf/XpKn/16Sp/9ek6f/ABkz/wAZM/8AGTP/AAAA/2Wcs/9lnLP/ZZy0/2WctP9lnLT/ZZy0/2WctP8AGTP/ABkz/wAZM/8AGTP/ABkz/wAAAP9lnLP/ZJuy/2KZsP9il67/XpOo/16UqP9elKj/XpSo/wAZM/8AGTP/ABkz/wAAAP9lnLP/ZZy0/2adtf9mnrX/Zp61/2aetf9mnrX/Zp21/wAZM/8AGTP/ABkz/wAZM/8AAAD/ZZ21/2Wcs/9kmrH/Ypiv/16UqP9elan/ABkz/wAZM/8AGTP/ABkz/wAZM/8AGTP/ABkz/2aetf9nn7f/Z6G4/2igt/9noLf/Z6C3/2aftv9mnbX/ABkz/wAZM/8AGTP/AAAA/2adtf9lnLT/ZJqy/2KYr/9glar/YJaq/wAZM/8AGTP/ABkz/wAZM/8AGTP/ABkz/wAZM/8AAAD/aKC3/3CtyP9ln7b/Zp62/2aet/9mnbX/ZZy1/2Wcsv8AGTP/ABkz/wAAAP9mnrb/Zp21/2Wcsv9kmrD/YJWq/2CWqv9glqr/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/3Ctxv9JcYL/XpGn/2iguf9mnrf/Zp61/2Wdtf9lnLP/ZJyy/wAAAP8AAAD/Zp21/2adtf9lnLP/ZJqy/2CVqv9glqr/YJaq/2CWqv9glqr/YJaq/2KYrv9lnLL/ZZyz/2KYrv9YiZ3/TnmM/013if9Md4n/Zpy1/2ifuP9lnLT/ZZyz/2Scsv9lnLP/ZZy0/2Wctf9lnLT/ZZyz/2Wcsv8="
let clueNAnchorWidth = 25
let tetraCompassAnchorStr = "EBAA/wAAAP+BgmT/AAAA/wAAAP8AAAD///8X////S/+nohD/AAAA/wAAAP+Bg2T/EBAA/ycnAP8QEAD/AAAA/5iZdf8AAAD/AAAA/wAAAP8AAAD/9e0X/8nDEP8AAAD/naB6/3+AYv8QEAD/JyoA/zAyAP8QEAD/rK2F/3R1Wv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP+kpn//AAAA/xAQAP8qKgD/MDIA/xAQAP8QEAD/ur2R/4mLa/8AAAD/AAAA/wAAAP+HiWn/mZt2/wAAAP8QEAD/KioA/yoqAP8wMgD/MDIA/xAQAP8QEAD/AAAA/6SngP+doHr/lph0/7Gzif8QEAD/EBAA/yotAP8qKgD/lph0/15eSf+LjWv/MDIA/zAyAP8QEAD/foBh/4iLav+SlHH/EBAA/xAQAP8tLQD/LS0A/62wh/9TU0D/cnRZ/05OPP+tsIb/MDIA/01OPP95e13/MDAA/y0wAP+SlHH/LS0A/5ibdv+xs4n/V1dC/66wh/8="
let tetraCompassAnchorWidth = 14
let tetraGreyCompassAnchorStr  = "FRca/2BjVP8VFxr/FRca/xUXGv8VFxr/j40l/3l4Iv8VFxr/Y2dW/1RXSv8dHxr/KCwa/15hUv8dHxr/am1c/05RRv8VFxr/FRca/xUXGv8VFxr/FRca/xUXGv9maln/FRca/x0fGv8pLBr/XWFS/x0fGv8dHxr/cXVi/1lcT/8VFxr/FRca/xUXGv9YW07/YWRU/xUXGv8dHxr/KSwa/yksGv9XWk3/LDAa/x0fGv8dHxr/FRca/2ZqWf9jZ1b/X2NT/21wXv8dHxr/HR8a/ykuGv8pLBr/X2NT/z5BOf9aXU//LDAa/ywwGv8dHxr/U1dK/1hcTv9dYVL/HR8a/x0fGv8rLhr/Ky4a/2tvXf8+QDn/aW1b/zs+N/9rb1z/LDAa/zs+N/9RVEj/LC8a/ysvGv9dYVL/Ky4a/2BkVP9tcF7/QEI6/2tvXf8jNkn/XWBS/11hUv9SVkn/P0I6/1pdT/9cYFH/XmJT/1xfUf9XWk3/SUxC/zY5NP9tcV7/KD9Z/yM3Sv8="
let tetraGreyCompassAnchorWidth  = 14

/* global alt1, clueNAnchorStr, clueNAnchorWidth, tetraCompassAnchorStr, tetraCompassAnchorWidth, tetraGreyCompassAnchorStr, tetraGreyCompassAnchorWidth */

// =========================
// Configuration
// =========================

const CONFIG = {
  angleGroupTolerance: 0.00001,
  autoSaveAngleTolerance: 0.0001,
  bankOverlayDurationMs: 10_000,
  loopIntervalFallbackMs: 100,
  arrowDarkPixelThreshold: 10,
  arrowMinPixelCount: 50,
  bankSliceHeight: 44,
  dedupeDistance: 20,
  rowTolerance: 12,
  groupColorCount: 71,
  
};

const ARROW_REGION = {
  offsetX: -75,
  offsetY: 30,
  width: 170,
  height: 185,
};

const BANK_BOX = {
  offsetX: -10,
  offsetY: -16,
  width: 36,
  height: 36,
};

// =========================
// App state
// =========================

const state = {
  clueAnchorMatch: null,
  clueWindowOpen: false,
  loopRunning: false,
  highlightedGroupOnly: null,
  latestArrowResult: null,
  savedTetras: [],
  autoSaveCurrentTetra: false,
  lastAutoSavedAngle: null,
  tooltipEnabled: true,
  angleGroupSortMode: "default", // "default" | "count-desc" | "angle-asc"
  timerRunning: false,
  timerStart: null,
  timerElapsed: 0,
  rewardChestCount: 0,
  solvedChests: 0,

};

const GROUP_COLORS = generateDistinctColors(CONFIG.groupColorCount);

// =========================
// General helpers
// =========================

function $(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function scheduleNextLoop() {
  setTimeout(() => {
    if (state.loopRunning) loop();
  }, alt1.captureInterval || CONFIG.loopIntervalFallbackMs);
}

function angleDistance(a, b) {
  let diff = Math.abs(a - b) % 360;
  if (diff > 180) diff = 360 - diff;
  return diff;
}

function getArrowRegionFromAnchor(match) {
  if (!match) return null;

  return {
    x: match.x + ARROW_REGION.offsetX,
    y: match.y + ARROW_REGION.offsetY,
    w: ARROW_REGION.width,
    h: ARROW_REGION.height,
  };
}

function getBankTetraBoxFromMatch(match) {
  return {
    x: match.x + BANK_BOX.offsetX,
    y: match.y + BANK_BOX.offsetY,
    w: BANK_BOX.width,
    h: BANK_BOX.height,
  };
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function updateTimerUI() {
  const now = Date.now();

  let elapsed = state.timerElapsed;
  if (state.timerRunning && state.timerStart) {
    elapsed += now - state.timerStart;
  }

  // Update time display
  setText("timerDisplay", formatTime(elapsed));

  // Calculate pace

  const hours = elapsed / 1000 / 3600;


  let pace = 0;
  if (hours > 0) {
    pace = state.solvedChests / hours;
  }

  setText(
    "paceDisplay",
    `${pace.toFixed(1)} tetras/h | ${state.solvedChests} chests`
  );
}

function detectRewardChests(bind) {
  try {
    const raw = alt1.bindFindSubImg(
      bind,
      rewardChestAnchor.data,
      rewardChestAnchor.width,
      0,
      0,
      alt1.rsWidth,
      alt1.rsHeight
    );

    const matches = JSON.parse(raw || "[]");

    console.log(matches)
    return matches.length;
  } catch (e) {
    console.error("detectRewardChests error:", e);
    return 0;
  }
}


function addSolvedChest() {
  state.solvedChests++;
  updateSolvedUI();
}

function updateSolvedUI() {
  setText("solvedCount", state.solvedChests);
}

const addSolveBtn = $("addSolveBtn");

if (addSolveBtn) {
  addSolveBtn.addEventListener("click", addSolvedChest);
}
function getChestTextRegion(match) {
  return {
    x: match.x + 10,   // tweak this
    y: match.y + 12,   // tweak this
    w: 20,
    h: 14,
  };
}

function readChestCount(bind, match) {
  try {
    const rect = getChestTextRegion(match);

    const imgRaw = alt1.bindGetRegion(bind, rect.x, rect.y, rect.w, rect.h);
    if (!imgRaw) return 0;

    const img = decodeImage(imgRaw, rect.w, rect.h);

    // Use OCR
    const result = OCR.readSmallText(img);

    if (!result || !result.text) return 0;

    // Extract number only
    const num = parseInt(result.text.replace(/\D/g, ""), 10);

    return isNaN(num) ? 0 : num;
  } catch (e) {
    console.error("readChestCount error:", e);
    return 0;
  }
}

function detectRewardChestsWithCounts(bind) {
  const raw = alt1.bindFindSubImg(
    bind,
    rewardChestAnchor.data,
    rewardChestAnchor.width,
    0,
    0,
    alt1.rsWidth,
    alt1.rsHeight
  );

  const matches = parseFindSubImgMatches(raw);

  return total;
}

function toBinary(img) {
  const { width, height, data } = img;
  const out = new Uint8Array(width * height);

  for (let i = 0; i < width * height; i++) {
    const j = i * 4;
    const r = data[j];
    const g = data[j + 1];
    const b = data[j + 2];

    const brightness = (r + g + b) / 3;

    // RS numbers are bright → threshold
    out[i] = brightness > 160 ? 1 : 0;
  }

  return { data: out, width, height };
}

function segmentDigits(bin) {
  const { data, width, height } = bin;
  const columns = new Array(width).fill(0);

  // Count pixels per column
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (data[y * width + x]) columns[x]++;
    }
  }

  const digits = [];
  let inDigit = false;
  let start = 0;

  for (let x = 0; x < width; x++) {
    if (!inDigit && columns[x] > 0) {
      inDigit = true;
      start = x;
    } else if (inDigit && columns[x] === 0) {
      digits.push({ x1: start, x2: x });
      inDigit = false;
    }
  }

  if (inDigit) digits.push({ x1: start, x2: width });

  return digits;
}

const DIGIT_TEMPLATES = {
  "1": [
    "010",
    "110",
    "010",
    "010",
    "111",
  ],
  "2": [
    "111",
    "001",
    "111",
    "100",
    "111",
  ],
  // add more...
};


function matchDigit(bin, digitBox) {
  const { data, width, height } = bin;
  const w = digitBox.x2 - digitBox.x1;

  // Normalize to template size (3x5)
  const scaled = [];

  for (let ty = 0; ty < 5; ty++) {
    let row = "";
    for (let tx = 0; tx < 3; tx++) {
      let count = 0;

      for (let y = 0; y < height; y++) {
        const x = digitBox.x1 + Math.floor((tx / 3) * w);
        if (data[y * width + x]) count++;
      }

      row += count > height * 0.3 ? "1" : "0";
    }
    scaled.push(row);
  }

  // Compare to templates
  let best = null;
  let bestScore = Infinity;

  for (const [digit, template] of Object.entries(DIGIT_TEMPLATES)) {
    let diff = 0;

    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 3; x++) {
        if (template[y][x] !== scaled[y][x]) diff++;
      }
    }

    if (diff < bestScore) {
      bestScore = diff;
      best = digit;
    }
  }

  return best;
}


// =========================
// Stack Reader (Pixel-based)
// =========================

// --- CONFIG ---
const STACK_REGION = {
  offsetX: 13,
  offsetY: 13,
  width: 32,
  height: 10,
};

// --- COLOR DETECTION (tolerant yellow) ---
function isStackPixel(r, g, b) {
  return r === 255 && g === 255 && b === 0;
}

// --- CAPTURE STACK REGION ---
function captureStackRegion(bind, slot) {
  const x = slot.x + STACK_REGION.offsetX;
  const y = slot.y + STACK_REGION.offsetY;


  const raw = alt1.bindGetRegion(bind, x, y, STACK_REGION.width, STACK_REGION.height);

    alt1.overLayRect(
    0xFFFF00FF,
    x,
    y,
    STACK_REGION.width,
    STACK_REGION.height,
    1000,
    1
  );

  if (!raw) return null;

  return decodeImage(raw, STACK_REGION.width, STACK_REGION.height);
}

// --- DIGIT CLASSIFIER (your logic, improved) ---
function classifyDigit(pixelCount, longestStreak) {
  if (pixelCount === 14) return "0";

  if (pixelCount === 11) {
    return longestStreak <= 3 ? "7" : "1";
  }

  if (pixelCount === 13) {
    return longestStreak === 3 ? "3" : "4";
  }

  if (pixelCount === 15) {
    if (longestStreak === 2) return "2";
    if (longestStreak === 4) return "5";
    if (longestStreak >= 7) return "9";
  }

  if (pixelCount === 18) return "6";
  if (pixelCount >= 19) return "8";

  return "";
}

// --- MAIN READER ---
function readStackFromImage(img) {
  if (!img) return 0;

  const { width: w, height: h, data } = img;

  let digits = "";
  let emptyCols = 0;

  let inDigit = false;
  let accCount = 0;
  let accMaxStreak = 0;

  for (let x = 0; x < w; x++) {
    let colCount = 0;
    let colMaxStreak = 0;
    let streak = 0;

    for (let y = 0; y < h; y++) {
      const i = (y * w + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (isStackPixel(r, g, b)) {
        colCount++;
        streak++;
        if (streak > colMaxStreak) colMaxStreak = streak;
      } else {
        streak = 0;
      }
    }

    // --- EMPTY COLUMN ---
    if (colCount === 0) {
      if (inDigit) {
        const d = classifyDigit(accCount, accMaxStreak);
        if (d) digits += d;

        // reset digit accumulators
        inDigit = false;
        accCount = 0;
        accMaxStreak = 0;
      }

      emptyCols++;
      if (emptyCols >= 4) break; // safer stop
      continue;
    }

    // --- NON-EMPTY COLUMN ---
    emptyCols = 0;
    inDigit = true;

    accCount += colCount;
    if (colMaxStreak > accMaxStreak) {
      accMaxStreak = colMaxStreak;
    }
  }

  // flush last digit if needed
  if (inDigit) {captureStackRegion
    const d = classifyDigit(accCount, accMaxStreak);
    if (d) digits += d;
  }

  // fallback: no digits = single item
  if (!digits) return 1;

  return parseInt(digits, 10);
}

// --- HIGH LEVEL HELPER ---
function readStackFromSlot(bind, slot) {
  const img = captureStackRegion(bind, slot);
  return readStackFromImage(img);
}


// -------------------------
// Alt1 chatbox setup
// -------------------------
window.setTimeout(() => {
    reader.readargs = {
        colors: [
            A1lib.mixColor(255, 255, 255),
            A1lib.mixColor(0, 255, 0),
            A1lib.mixColor(30, 255, 0),
            A1lib.mixColor(30, 255, 0)
        ],
        backwards: true,
    };

    reader.find();

    const findChat = setInterval(() => {
        if (reader.pos === null) reader.find();
        else {
            clearInterval(findChat);
            reader.pos.mainbox = reader.pos.boxes[0];
            showSelectedChat(reader.pos);

            chatInterval = setInterval(() => {
                readChatbox();
            }, 200);
        }
    }, 1000);
}, 0);

function showSelectedChat(chat) {
    try {
        alt1.overLayRect(
            appColor,
            chat.mainbox.rect.x,
            chat.mainbox.rect.y,
            chat.mainbox.rect.width,
            chat.mainbox.rect.height,
            2000,
            5
        );
    } catch {}
}

// -------------------------
// Chatbox parsing
// -------------------------
function readChatbox() {
    const opts = reader.read() || [];
    let chatStr = "";
    let chatArr;

    if (opts.length) {
        for (let line in opts) {
            if (!opts[line].text.match(timestampRegex) && line == "0") continue;
            if (opts[line].text.match(timestampRegex)) {
                if (line > 0) chatStr += "\n";
                chatStr += opts[line].text + " ";
                continue;
            }
            chatStr += opts[line].text;
        }
    }

    if (chatStr.trim()) chatArr = chatStr.trim().split("\n");

    if (chatArr) {
        for (let line of chatArr) {
            const chatLine = line.trim();
            if (chatLine && !isInHistory(chatLine)) {
                checkLine(chatLine);
            }
        }
        updateChatHistory(chatArr);
    }
}

function isInHistory(chatLine) {
    if (!sessionStorage.chatHistory) return false;
    return sessionStorage.chatHistory.split("\n").includes(chatLine);
}

function updateChatHistory(chatArr) {
    if (!sessionStorage.chatHistory) {
        sessionStorage.chatHistory = chatArr.join("\n");
        return;
    }
    let history = sessionStorage.chatHistory.split("\n");
    while (history.length > 100) history.shift();
    chatArr.forEach(line => history.push(line.trim()));
    sessionStorage.chatHistory = history.join("\n");
}

function checkLine(line) {

  console.log(line)

}

// =========================
// Color helpers
// =========================

function generateDistinctColors(count) {
  const colors = [];
  const goldenRatio = 0.618033988749895;
  let hueSeed = 0;

  for (let i = 0; i < count; i++) {
    hueSeed = (hueSeed + goldenRatio) % 1;

    const saturation = 0.65 + (i % 3) * 0.15;
    const value = 0.85 - (i % 2) * 0.15;
    const rgb = hsvToRgb(hueSeed * 360, saturation, value);

    colors.push(
      (255 << 24) |
      (rgb.r << 16) |
      (rgb.g << 8) |
      rgb.b
    );
  }

  return colors;
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function getGroupColor(groupIndex) {
  return GROUP_COLORS[groupIndex % GROUP_COLORS.length];
}

// =========================
// Clue window detection
// =========================

function detectClueWindowOnce(bind) {
  try {
    const raw = alt1.bindFindSubImg(
      bind,
      clueNAnchorStr,
      clueNAnchorWidth,
      0,
      0,
      alt1.rsWidth,
      alt1.rsHeight
    );


    const matches = JSON.parse(raw || "[]");
    const first = matches[0];

    state.clueAnchorMatch = first
      ? (first.x != null
          ? { x: first.x, y: first.y }
          : Array.isArray(first)
            ? { x: first[0], y: first[1] }
            : null)
      : null;

    state.clueWindowOpen = Boolean(state.clueAnchorMatch);
    return state.clueWindowOpen;
  } catch (error) {
    console.error("detectClueWindowOnce error:", error);
    state.clueAnchorMatch = null;
    state.clueWindowOpen = false;
    return false;
  }
}

// =========================
// Arrow capture / decode / angle
// =========================

function captureRegion(bind, rect) {
  return alt1.bindGetRegion(bind, rect.x, rect.y, rect.w, rect.h);
}

function decodeImage(raw, width, height) {
  const binary = atob(raw);
  const pixels = new Uint8ClampedArray(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const j = i * 4;

    const b = binary.charCodeAt(j);
    const g = binary.charCodeAt(j + 1);
    const r = binary.charCodeAt(j + 2);
    const a = binary.charCodeAt(j + 3);

    pixels[j] = r;
    pixels[j + 1] = g;
    pixels[j + 2] = b;
    pixels[j + 3] = a;
  }

  return new ImageData(pixels, width, height);
}

function computeArrowAngleFromImageData(img) {
  const { width, height, data } = img;
  const points = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;

      if (brightness < CONFIG.arrowDarkPixelThreshold) {
        points.push({ x, y });
      }
    }
  }

  if (points.length < CONFIG.arrowMinPixelCount) {
    return null;
  }

  let cx = 0;
  let cy = 0;
  for (const p of points) {
    cx += p.x;
    cy += p.y;
  }
  cx /= points.length;
  cy /= points.length;

  let sxx = 0;
  let syy = 0;
  let sxy = 0;

  for (const p of points) {
    const dx = p.x - cx;
    const dy = p.y - cy;
    sxx += dx * dx;
    syy += dy * dy;
    sxy += dx * dy;
  }

  const axisAngle = 0.5 * Math.atan2(2 * sxy, sxx - syy);
  const ux = Math.cos(axisAngle);
  const uy = Math.sin(axisAngle);

  let minProj = Infinity;
  let maxProj = -Infinity;
  let minPoint = null;
  let maxPoint = null;

  for (const p of points) {
    const proj = (p.x - cx) * ux + (p.y - cy) * uy;

    if (proj < minProj) {
      minProj = proj;
      minPoint = p;
    }
    if (proj > maxProj) {
      maxProj = proj;
      maxPoint = p;
    }
  }

  if (!minPoint || !maxPoint) return null;

  const minWidth = measurePerpSpread(points, minProj, ux, uy, cx, cy);
  const maxWidth = measurePerpSpread(points, maxProj, ux, uy, cx, cy);

  const tip = minWidth < maxWidth ? minPoint : maxPoint;
  const tail = minWidth < maxWidth ? maxPoint : minPoint;

  const dx = tip.x - tail.x;
  const dy = tail.y - tip.y;

  let deg = Math.atan2(dy, dx) * 180 / Math.PI;
  if (deg < 0) deg += 360;

  return {
    angle: deg,
    tip,
    tail,
    centroid: { x: cx, y: cy },
    pixels: points.length,
  };
}

function measurePerpSpread(points, targetProj, ux, uy, cx, cy) {
  const vx = -uy;
  const vy = ux;
  const band = 6;

  let minPerp = Infinity;
  let maxPerp = -Infinity;
  let count = 0;

  for (const p of points) {
    const dx = p.x - cx;
    const dy = p.y - cy;
    const proj = dx * ux + dy * uy;

    if (Math.abs(proj - targetProj) > band) continue;

    const perp = dx * vx + dy * vy;
    if (perp < minPerp) minPerp = perp;
    if (perp > maxPerp) maxPerp = perp;
    count++;
  }

  if (count < 5) return Infinity;
  return maxPerp - minPerp;
}

function detectArrowAngle(bind) {
  if (!state.clueAnchorMatch) {
    state.latestArrowResult = null;
    updateArrowFrontend(null);
    return;
  }

  const rect = getArrowRegionFromAnchor(state.clueAnchorMatch);
  const raw = captureRegion(bind, rect);

  if (!raw) {
    state.latestArrowResult = null;
    updateArrowFrontend(null);
    return;
  }

  const img = decodeImage(raw, rect.w, rect.h);
  showImageData(img);

  const result = computeArrowAngleFromImageData(img);

  if (!result) {
    state.latestArrowResult = null;
    updateArrowFrontend(null);
    return;
  }

  state.latestArrowResult = result;
  updateArrowFrontend(result);
  drawArrowPointsDebug(result);
  tryAutoSaveCurrentTetra();
}

function tryAutoSaveCurrentTetra() {
  if (!state.autoSaveCurrentTetra) return;
  if (!state.latestArrowResult || typeof state.latestArrowResult.angle !== "number") return;

  const currentAngle = state.latestArrowResult.angle;

  if (
    state.lastAutoSavedAngle == null ||
    angleDistance(currentAngle, state.lastAutoSavedAngle) > CONFIG.autoSaveAngleTolerance
  ) {
    addSavedTetra(currentAngle);
    state.lastAutoSavedAngle = currentAngle;
  }
}

// =========================
// Bank tetra detection
// =========================

function parseFindSubImgMatches(raw) {
  return JSON.parse(raw || "[]")
    .map((m) => {
      if (m?.x != null) return { x: m.x, y: m.y };
      if (Array.isArray(m)) return { x: m[0], y: m[1] };
      return null;
    })
    .filter(Boolean);
}

function detectMatchesWithAnchorInRegion(bind, anchorStr, anchorWidth, x, y, w, h) {
  try {
    const raw = alt1.bindFindSubImg(bind, anchorStr, anchorWidth, x, y, w, h);
    return parseFindSubImgMatches(raw);
  } catch (error) {
    console.error("detectMatchesWithAnchorInRegion error:", error);
    return [];
  }
}

function detectAllTetraMatches(bind) {
  const allMatches = [];

  for (let y = 0; y < alt1.rsHeight; y += CONFIG.bankSliceHeight) {
    const height = Math.min(CONFIG.bankSliceHeight, alt1.rsHeight - y);

    const normalMatches = detectMatchesWithAnchorInRegion(
      bind,
      tetraCompassAnchorStr,
      tetraCompassAnchorWidth,
      0,
      y,
      alt1.rsWidth,
      height
    );

    const greyMatches = detectMatchesWithAnchorInRegion(
      bind,
      tetraGreyCompassAnchorStr,
      tetraGreyCompassAnchorWidth,
      0,
      y,
      alt1.rsWidth,
      height
    );

    allMatches.push(...normalMatches, ...greyMatches);
  }

  return sortMatchesTopLeft(
    dedupeMatches(allMatches, CONFIG.dedupeDistance),
    CONFIG.rowTolerance
  );
}

function dedupeMatches(matches, minDist = CONFIG.dedupeDistance) {
  const kept = [];

  for (const match of matches) {
    let tooClose = false;

    for (const existing of kept) {
      const dx = match.x - existing.x;
      const dy = match.y - existing.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < minDist) {
        tooClose = true;
        break;
      }
    }

    if (!tooClose) kept.push(match);
  }

  return kept;
}

function sortMatchesTopLeft(matches, rowTolerance = CONFIG.rowTolerance) {
  if (matches.length === 0) return [];

  const sortedByY = [...matches].sort((a, b) => a.y - b.y);
  const rows = [];

  for (const match of sortedByY) {
    let row = rows.find((r) => Math.abs(r.y - match.y) <= rowTolerance);

    if (!row) {
      row = { y: match.y, items: [] };
      rows.push(row);
    }

    row.items.push(match);
    row.y = row.items.reduce((sum, item) => sum + item.y, 0) / row.items.length;
  }

  rows.sort((a, b) => a.y - b.y);

  const result = [];
  for (const row of rows) {
    row.items.sort((a, b) => a.x - b.x);
    result.push(...row.items);
  }

  return result;
}

// =========================
// Group logic
// =========================

function groupTetrasByAngle(tetras, tolerance = CONFIG.angleGroupTolerance) {
  const groups = [];

  for (const tetra of tetras) {
    let matchedGroup = null;

    for (const group of groups) {
      if (angleDistance(tetra.angle, group.angle) <= tolerance) {
        matchedGroup = group;
        break;
      }
    }

    if (matchedGroup) {
      matchedGroup.items.push(tetra);
      matchedGroup.angle =
        matchedGroup.items.reduce((sum, item) => sum + item.angle, 0) /
        matchedGroup.items.length;
    } else {
      groups.push({
        angle: tetra.angle,
        items: [tetra],
      });
    }
  }

  return groups;
}

function getDisplayAngleGroups() {
  const groups = groupTetrasByAngle(state.savedTetras).map((group, index) => ({
    originalIndex: index,
    angle: group.angle,
    items: group.items,
  }));

  if (state.angleGroupSortMode === "count-desc") {
    groups.sort((a, b) => {
      if (b.items.length !== a.items.length) {
        return b.items.length - a.items.length;
      }
      return a.angle - b.angle;
    });
  } else if (state.angleGroupSortMode === "angle-asc") {
    groups.sort((a, b) => a.angle - b.angle);
  }

  return groups;
}

function getTetraGroupAssignments() {
  const groups = groupTetrasByAngle(state.savedTetras);
  const assignments = new Map();

  groups.forEach((group, groupIndex) => {
    for (const item of group.items) {
      assignments.set(item.index, groupIndex);
    }
  });

  return { groups, assignments };
}

// =========================
// UI rendering
// =========================

function updateFrontendState() {
  setText("clueState", state.clueWindowOpen ? "found" : "not found");
  setText(
    "anchorPos",
    state.clueAnchorMatch
      ? `x:${state.clueAnchorMatch.x}, y:${state.clueAnchorMatch.y}`
      : "-"
  );
}

function updateArrowFrontend(result) {
  if (!result) {
    setText("arrowAngle", "-");
    setText("darkPixels", "-");
    return;
  }

  setText("arrowAngle", `${result.angle.toFixed(2)}°`);
  setText("darkPixels", `${result.pixels}`);
}

function renderTetraList() {
  const el = $("tetraList");
  if (!el) return;

  if (state.savedTetras.length === 0) {
    el.innerHTML = "No saved tetras yet.";
    return;
  }

  el.innerHTML = state.savedTetras
    .map((tetra) => `<div>#${tetra.index} → ${tetra.angle.toFixed(3)}°</div>`)
    .join("");
}

function renderAngleGroups() {
  const el = $("angleGroups");
  if (!el) return;

  if (state.savedTetras.length === 0) {
    el.innerHTML = "No groups yet.";
    return;
  }

  const groups = getDisplayAngleGroups();

  el.innerHTML = `
    <div style="
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap:6px;
      margin-top:8px;
    ">
      ${groups.map((group) => {
        const members = group.items.map((item) => `#${item.index}`).join(", ");
        const active = state.highlightedGroupOnly === group.originalIndex;

        return `
          <div
            data-group-index="${group.originalIndex}"
            style="
              padding:6px;
              border-radius:5px;
              cursor:pointer;
              border:${active ? "2px solid #fff" : "1px solid #444"};
              background:${active ? "#2a2a2a" : "#111"};
              font-size:13px;
            "
          >
            <div style="
              display:flex;
              justify-content:space-between;
              margin-bottom:4px;
            ">
              <strong>Group ${group.originalIndex + 1}</strong>
              <span style="opacity:0.7">${group.items.length}</span>
            </div>

            <div style="margin-bottom:3px;">
              ${group.angle.toFixed(3)}°
            </div>

            <div style="
              font-size:12px;
              line-height:1.3;
              color:#bbb;
              max-height:40px;
              overflow:auto;
            ">
              ${members}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  el.querySelectorAll("[data-group-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const groupIndex = Number(card.dataset.groupIndex);
      state.highlightedGroupOnly =
        state.highlightedGroupOnly === groupIndex ? null : groupIndex;
      renderAngleGroups();
    });
  });
}


// =========================
// Overlay rendering
// =========================

function drawArrowRegionDebug() {
  if (!state.clueAnchorMatch || !alt1.permissionOverlay) return;

  const rect = getArrowRegionFromAnchor(state.clueAnchorMatch);

  alt1.overLayClearGroup("tetra-debug");
  alt1.overLaySetGroup("tetra-debug");
  alt1.overLayRect(0xFF00FFFF, rect.x, rect.y, rect.w, rect.h, 300, 2);
}

function drawArrowPointsDebug(result) {
  if (!result || !state.clueAnchorMatch || !alt1.permissionOverlay) return;

  const rect = getArrowRegionFromAnchor(state.clueAnchorMatch);

  alt1.overLaySetGroup("tetra-debug");
  alt1.overLayRect(0xFFFF0000, rect.x + result.tip.x - 2, rect.y + result.tip.y - 2, 5, 5, 300, 2);
  alt1.overLayRect(0xFF00FF00, rect.x + result.tail.x - 2, rect.y + result.tail.y - 2, 5, 5, 300, 2);
}

function drawTetraOverlay(box, groupIndex, duration = CONFIG.bankOverlayDurationMs) {
  const color = getGroupColor(groupIndex);

  alt1.overLaySetGroup("tetra-bank");
  alt1.overLayRect(0xFF000000, box.x - 1, box.y - 1, box.w + 2, box.h + 2, duration, 2);
  alt1.overLayRect(color, box.x, box.y, box.w, box.h, duration, 2);
  alt1.overLayText(`${groupIndex + 1}`, 0xFF000000, 16, box.x + 6, box.y + 4, duration);
  alt1.overLayText(`${groupIndex + 1}`, 0xFFFFFFFF, 16, box.x + 5, box.y + 3, duration);
}

function showBankOverlayOnce() {
  if (!alt1?.rsLinked || !alt1.rsWidth || !alt1.rsHeight) return;
  if (!alt1.permissionOverlay) return;
  if (!state.savedTetras.length) return;

  const bind = alt1.bindRegion(0, 0, alt1.rsWidth, alt1.rsHeight);
  if (!bind) return;

  const matches = detectAllTetraMatches(bind);
  const { assignments } = getTetraGroupAssignments();

  alt1.overLayClearGroup("tetra-bank");
  alt1.overLaySetGroup("tetra-bank");

  matches.forEach((match, i) => {
    const tetraNumber = i + 1;
    const groupIndex = assignments.get(tetraNumber);

    if (groupIndex == null) return;
    if (state.highlightedGroupOnly != null && groupIndex !== state.highlightedGroupOnly) return;

    const box = getBankTetraBoxFromMatch(match);
    drawTetraOverlay(box, groupIndex);
  });
}

function showImageData(img) {
  const canvas = $("debugCanvas");
  if (!canvas) return;

  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.putImageData(img, 0, 0);
}

// =========================
// Tooltip
// =========================

function getScanTooltipText() {
  const scanned = state.savedTetras.length;
  const invPos = scanned % 28;
  return `Scanned: ${scanned} | (inv ${invPos})`;
}

function updateScanTooltip() {
  if (!alt1?.permissionOverlay) return;

  if (!state.tooltipEnabled) {
    alt1.clearTooltip();
    return;
  }

  alt1.setTooltip(getScanTooltipText());
}

function clearScanTooltip() {
  if (!alt1?.permissionOverlay) return;
  alt1.clearTooltip();
}

// =========================
// Actions
// =========================

function addSavedTetra(angle) {
  state.savedTetras.push({
    index: state.savedTetras.length + 1,
    angle,
  });

  renderTetraList();
  renderAngleGroups();
  updateScanTooltip();
}

function saveCurrentTetra() {
  if (!state.latestArrowResult || typeof state.latestArrowResult.angle !== "number") return;

  addSavedTetra(state.latestArrowResult.angle);
  state.lastAutoSavedAngle = state.latestArrowResult.angle;
}

function undoLastTetra() {
  if (state.savedTetras.length === 0) return;

  state.savedTetras.pop();

  if (state.savedTetras.length === 0) {
    state.highlightedGroupOnly = null;
    state.lastAutoSavedAngle = null;
  }

  renderTetraList();
  renderAngleGroups();
  updateScanTooltip();
}

function clearAllTetras() {
  state.savedTetras = [];
  state.highlightedGroupOnly = null;
  state.lastAutoSavedAngle = null;

  renderTetraList();
  renderAngleGroups();
  updateScanTooltip();
  clearScanTooltip();
}

// =========================
// Main loop
// =========================

function loop() {
  if (!state.loopRunning) return;

  if (!alt1?.rsLinked || !alt1.rsWidth || !alt1.rsHeight) {
    scheduleNextLoop();
    return;
  }

  const bind = alt1.bindRegion(0, 0, alt1.rsWidth, alt1.rsHeight);
  if (!bind) {
    scheduleNextLoop();
    return;
  }

  const clueFound = detectClueWindowOnce(bind);
  updateFrontendState();

  if (clueFound) {
    updateScanTooltip();
    drawArrowRegionDebug();
    detectArrowAngle(bind);
  } else {
    state.latestArrowResult = null;
    updateArrowFrontend(null);
    clearScanTooltip();
  }

  updateTimerUI();
  scheduleNextLoop();
}

function startClueDetectionLoop() {
  if (state.loopRunning) return;
  state.loopRunning = true;
  loop();
}

  function startTimer() {
    if (state.timerRunning) return;
    state.timerRunning = true;
    state.timerStart = Date.now();
  }

  function stopTimer() {
    if (!state.timerRunning) return;
    state.timerElapsed += Date.now() - state.timerStart;
    state.timerRunning = false;
    state.timerStart = null;
  }

  function resetTimer() {
    state.timerRunning = false;
    state.timerStart = null;
    state.timerElapsed = 0;
    state.solvedChests = 0;

    updateTimerUI();
  }

// =========================
// Init
// =========================

function bindControls() {
  const saveBtn = $("saveAngleBtn");
  const undoBtn = $("undoAngleBtn");
  const clearBtn = $("clearAnglesBtn");
  const showAllBtn = $("showAllGroupsBtn");
  const showBankOverlayBtn = $("showBankOverlayBtn");
  const autoSaveToggle = $("autoSaveToggle");
  const tooltipToggle = $("tooltipToggle");
  const angleGroupSortSelect = $("angleGroupSortSelect");
  const startBtn = $("startTimerBtn");
  const stopBtn = $("stopTimerBtn");
  const resetBtn = $("resetTimerBtn");

  if (startBtn) startBtn.addEventListener("click", startTimer);
  if (stopBtn) stopBtn.addEventListener("click", stopTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);
  if (saveBtn) saveBtn.addEventListener("click", saveCurrentTetra);
  if (undoBtn) undoBtn.addEventListener("click", undoLastTetra);
  if (clearBtn) clearBtn.addEventListener("click", clearAllTetras);
  if (showBankOverlayBtn) showBankOverlayBtn.addEventListener("click", showBankOverlayOnce);


  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      state.highlightedGroupOnly = null;
      renderAngleGroups();
    });
  }

  if (autoSaveToggle) {
    autoSaveToggle.checked = state.autoSaveCurrentTetra;
    autoSaveToggle.addEventListener("change", () => {
      state.autoSaveCurrentTetra = autoSaveToggle.checked;
    });
  }

  if (tooltipToggle) {
    tooltipToggle.checked = state.tooltipEnabled;
    tooltipToggle.addEventListener("change", () => {
      state.tooltipEnabled = tooltipToggle.checked;
      if (state.tooltipEnabled) updateScanTooltip();
      else clearScanTooltip();
    });
  }

  if (angleGroupSortSelect) {
    angleGroupSortSelect.value = state.angleGroupSortMode;
    angleGroupSortSelect.addEventListener("change", () => {
      state.angleGroupSortMode = angleGroupSortSelect.value;
      renderAngleGroups();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  bindControls();
  renderTetraList();
  renderAngleGroups();
  updateScanTooltip();
  startClueDetectionLoop();
});
