import { mathematiciansData as initialData } from './mathematicians.js';

// State Management
let playlist = [...initialData];
let currentIndex = 0;
let isDrawerOpen = false;
let isSafeGuideActive = false;

// DOM Elements
const viewportWrapper = document.getElementById('viewportWrapper');
const frameCanvas = document.getElementById('frameCanvas');
const frameStage = document.getElementById('frameStage');
const creatorBar = document.getElementById('creatorBar');
const studioDrawer = document.getElementById('studioDrawer');
const safeAreaGuide = document.getElementById('safeAreaGuide');
const toastNotification = document.getElementById('toastNotification');

// Content DOM Elements
const slideCounter = document.getElementById('slideCounter');
const navCounter = document.getElementById('navCounter');
const mathematicianPortrait = document.getElementById('mathematicianPortrait');
const sealYear = document.getElementById('sealYear');
const mathematicianDates = document.getElementById('mathematicianDates');
const mathematicianNationality = document.getElementById('mathematicianNationality');
const mathematicianName = document.getElementById('mathematicianName');
const mathematicianNative = document.getElementById('mathematicianNative');
const institutionText = document.getElementById('institutionText');
const kickerField = document.getElementById('kickerField');
const medalSubtitle = document.getElementById('medalSubtitle');
const breakthroughTitle = document.getElementById('breakthroughTitle');
const citationText = document.getElementById('citationText');
const keyPointsContainer = document.getElementById('keyPointsContainer');
const mathEquation = document.getElementById('mathEquation');
const footerSummary = document.getElementById('footerSummary');

// Form Input Elements
const editName = document.getElementById('editName');
const editLifespan = document.getElementById('editLifespan');
const editNationality = document.getElementById('editNationality');
const editNativeName = document.getElementById('editNativeName');
const editInstitution = document.getElementById('editInstitution');
const editPortrait = document.getElementById('editPortrait');
const portraitFileInput = document.getElementById('portraitFileInput');
const editMedal = document.getElementById('editMedal');
const editMedalSubtitle = document.getElementById('editMedalSubtitle');
const editField = document.getElementById('editField');
const editBreakthrough = document.getElementById('editBreakthrough');
const editCitation = document.getElementById('editCitation');
const editPoint1Label = document.getElementById('editPoint1Label');
const editPoint1Detail = document.getElementById('editPoint1Detail');
const editPoint2Label = document.getElementById('editPoint2Label');
const editPoint2Detail = document.getElementById('editPoint2Detail');
const editPoint3Label = document.getElementById('editPoint3Label');
const editPoint3Detail = document.getElementById('editPoint3Detail');
const editEquation = document.getElementById('editEquation');
const mathematicianPillList = document.getElementById('mathematicianPillList');

// Auto-scale 1920x1080 Frame to Window Viewport
function scaleFrameToFit() {
  const targetWidth = 1920;
  const targetHeight = 1080;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const scaleX = windowWidth / targetWidth;
  const scaleY = windowHeight / targetHeight;
  const scale = Math.min(scaleX, scaleY) * 0.96; // 4% comfortable margin

  frameCanvas.style.transform = `scale(${scale})`;
}

// Render Current Mathematician
function renderMathematician(index, animate = true) {
  if (index < 0 || index >= playlist.length) return;
  currentIndex = index;
  const data = playlist[index];

  // Update counters
  const indexStr = String(index + 1).padStart(2, '0');
  const totalStr = String(playlist.length).padStart(2, '0');
  slideCounter.textContent = `${indexStr} / ${totalStr}`;
  navCounter.textContent = `${index + 1} / ${playlist.length}`;

  if (animate) {
    frameStage.classList.remove('content-enter');
    mathematicianPortrait.classList.remove('portrait-enter');
    void frameStage.offsetWidth; // Trigger reflow
    frameStage.classList.add('content-enter');
    mathematicianPortrait.classList.add('portrait-enter');
  }

  // Left Column Details
  mathematicianPortrait.src = data.portrait;
  mathematicianPortrait.alt = data.name;
  
  // Extract year from medal string e.g. "Fields Medal (2014)" -> "2014"
  const yearMatch = data.medal.match(/\d{4}/);
  sealYear.textContent = yearMatch ? yearMatch[0] : 'MEDAL';

  mathematicianDates.textContent = data.lifespan;
  mathematicianNationality.textContent = data.nationality;
  mathematicianName.textContent = data.name;
  mathematicianNative.textContent = data.nativeName || '';
  institutionText.textContent = data.institution;

  // Right Column Details
  kickerField.textContent = data.field;
  medalSubtitle.textContent = data.medalSubtitle;
  breakthroughTitle.textContent = data.breakthrough;
  citationText.textContent = data.citation;
  footerSummary.textContent = data.summary;

  // Render 3 Key Contribution Cards
  keyPointsContainer.innerHTML = '';
  if (data.keyPoints && data.keyPoints.length > 0) {
    data.keyPoints.forEach(point => {
      const card = document.createElement('div');
      card.className = 'contrib-card';
      card.innerHTML = `
        <span class="contrib-tag">${point.label}</span>
        <p class="contrib-detail">${point.detail}</p>
      `;
      keyPointsContainer.appendChild(card);
    });
  }

  // Render KaTeX Equation
  if (window.katex && data.signatureEquation) {
    try {
      katex.render(data.signatureEquation, mathEquation, {
        throwOnError: false,
        displayMode: true
      });
    } catch (e) {
      mathEquation.textContent = data.signatureEquation;
    }
  } else {
    mathEquation.textContent = data.signatureEquation || '';
  }

  // Refresh Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Sync Form Inputs
  populateDrawerForm(data);
  updateMathematicianPills();
}

// Populate Creator Form with Current Data
function populateDrawerForm(data) {
  editName.value = data.name || '';
  editLifespan.value = data.lifespan || '';
  editNationality.value = data.nationality || '';
  editNativeName.value = data.nativeName || '';
  editInstitution.value = data.institution || '';
  editPortrait.value = data.portrait || '';
  editMedal.value = data.medal || '';
  editMedalSubtitle.value = data.medalSubtitle || '';
  editField.value = data.field || '';
  editBreakthrough.value = data.breakthrough || '';
  editCitation.value = data.citation || '';
  
  if (data.keyPoints && data.keyPoints[0]) {
    editPoint1Label.value = data.keyPoints[0].label || '';
    editPoint1Detail.value = data.keyPoints[0].detail || '';
  } else {
    editPoint1Label.value = '';
    editPoint1Detail.value = '';
  }

  if (data.keyPoints && data.keyPoints[1]) {
    editPoint2Label.value = data.keyPoints[1].label || '';
    editPoint2Detail.value = data.keyPoints[1].detail || '';
  } else {
    editPoint2Label.value = '';
    editPoint2Detail.value = '';
  }

  if (data.keyPoints && data.keyPoints[2]) {
    editPoint3Label.value = data.keyPoints[2].label || '';
    editPoint3Detail.value = data.keyPoints[2].detail || '';
  } else {
    editPoint3Label.value = '';
    editPoint3Detail.value = '';
  }

  editEquation.value = data.signatureEquation || '';
}

// Update Drawer Quick Switcher Pills
function updateMathematicianPills() {
  mathematicianPillList.innerHTML = '';
  playlist.forEach((mat, idx) => {
    const btn = document.createElement('button');
    btn.className = `mat-pill-btn ${idx === currentIndex ? 'active' : ''}`;
    btn.textContent = mat.name.split(' ').pop(); // Last name for compact pill
    btn.title = mat.name;
    btn.onclick = () => renderMathematician(idx);
    mathematicianPillList.appendChild(btn);
  });
}

// Save Current Form Edits Back to Playlist
function applyFormEdits() {
  if (!playlist[currentIndex]) return;

  const current = playlist[currentIndex];
  current.name = editName.value;
  current.lifespan = editLifespan.value;
  current.nationality = editNationality.value;
  current.nativeName = editNativeName.value;
  current.institution = editInstitution.value;
  current.portrait = editPortrait.value;
  current.medal = editMedal.value;
  current.medalSubtitle = editMedalSubtitle.value;
  current.field = editField.value;
  current.breakthrough = editBreakthrough.value;
  current.citation = editCitation.value;
  
  current.keyPoints = [
    { label: editPoint1Label.value, detail: editPoint1Detail.value },
    { label: editPoint2Label.value, detail: editPoint2Detail.value },
    { label: editPoint3Label.value, detail: editPoint3Detail.value }
  ];

  current.signatureEquation = editEquation.value;

  renderMathematician(currentIndex, false);
  showToast('✓ Updated frame content in real-time');
}

// Add New Blank Mathematician Frame
function addNewMathematician() {
  const newEntry = {
    id: `custom_${Date.now()}`,
    name: "New Mathematician",
    nativeName: "",
    lifespan: "1900 – 1980",
    nationality: "International",
    institution: "University / Institute",
    medal: "Fields Medal (Year)",
    medalSubtitle: "Monumental Contribution to Mathematics",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    field: "Pure & Applied Mathematics",
    citation: "For revolutionary breakthroughs reshaping mathematical understanding.",
    breakthrough: "Fundamental Theorem & Structural Foundations",
    summary: "Transformed mathematical analysis with elegant proofs and conceptual depth.",
    keyPoints: [
      { label: "Core Discovery", detail: "Formulated universal invariant principles connecting geometry and analysis." },
      { label: "Seminal Paper", detail: "Published milestone treatise establishing rigorous modern foundations." },
      { label: "Global Legacy", detail: "Inspired generations of mathematicians through visionary conjectures." }
    ],
    signatureEquation: "e^{i\\pi} + 1 = 0"
  };

  playlist.push(newEntry);
  renderMathematician(playlist.length - 1);
  showToast('✓ Added new mathematician frame');
}

// Delete Current Mathematician
function deleteCurrentMathematician() {
  if (playlist.length <= 1) {
    showToast('Cannot delete the only frame in the deck');
    return;
  }
  playlist.splice(currentIndex, 1);
  const nextIdx = Math.max(0, currentIndex - 1);
  renderMathematician(nextIdx);
  showToast('Deleted frame');
}

// Export 4K PNG Snapshot
async function exportPngSnapshot() {
  showToast('📸 Rendering high-res 16:9 frame...');
  
  try {
    // Hide safe areas if visible
    const safeWasActive = safeAreaGuide.classList.contains('active');
    safeAreaGuide.classList.remove('active');

    const canvas = await html2canvas(frameCanvas, {
      scale: 2, // 2x scale = 3840x2160 (4K Ultra HD)
      useCORS: true,
      allowTaint: true,
      backgroundColor: null
    });

    if (safeWasActive) safeAreaGuide.classList.add('active');

    const link = document.createElement('a');
    const safeName = playlist[currentIndex].name.toLowerCase().replace(/\s+/g, '_');
    link.download = `mathematician_${safeName}_16x9_4k.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('✓ 4K Frame downloaded successfully!');
  } catch (err) {
    console.error('Export error:', err);
    showToast('Export failed (Cross-origin image restriction). Try local image.');
  }
}

// Toast Helper
function showToast(msg) {
  toastNotification.textContent = msg;
  toastNotification.classList.add('show');
  setTimeout(() => toastNotification.classList.remove('show'), 2600);
}

// Fullscreen Toggle
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('Fullscreen error:', err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Window Resize Auto-scale
  window.addEventListener('resize', scaleFrameToFit);

  // Navigation
  document.getElementById('prevBtn').addEventListener('click', () => {
    const nextIdx = (currentIndex - 1 + playlist.length) % playlist.length;
    renderMathematician(nextIdx);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    const nextIdx = (currentIndex + 1) % playlist.length;
    renderMathematician(nextIdx);
  });

  // Safe Area Guide Toggle
  document.getElementById('toggleSafeBtn').addEventListener('click', () => {
    isSafeGuideActive = !isSafeGuideActive;
    safeAreaGuide.classList.toggle('active', isSafeGuideActive);
  });

  // Drawer Toggle
  const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  toggleDrawerBtn.addEventListener('click', () => {
    isDrawerOpen = !isDrawerOpen;
    studioDrawer.classList.toggle('open', isDrawerOpen);
  });

  closeDrawerBtn.addEventListener('click', () => {
    isDrawerOpen = false;
    studioDrawer.classList.remove('open');
  });

  // Theme Switcher
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.addEventListener('change', (e) => {
    document.body.className = e.target.value;
    showToast(`Switched theme to: ${e.target.options[e.target.selectedIndex].text}`);
  });

// Native 1920×1080 Mode Toggle
let isNativeMode = false;
function toggleNativeMode() {
  isNativeMode = !isNativeMode;
  viewportWrapper.classList.toggle('native-mode', isNativeMode);
  const btn = document.getElementById('nativeSizeBtn');

  if (isNativeMode) {
    // Disable auto-scale so canvas shows at true 1920×1080
    frameCanvas.style.transform = 'none';
    frameCanvas.style.position = 'relative';
    btn.classList.add('btn-active');
    btn.title = 'Back to fitted view (auto-scale to window)';
    showToast('📐 Now viewing at native 1920×1080 — scroll to explore');
  } else {
    // Re-enable auto-scale
    frameCanvas.style.position = 'absolute';
    scaleFrameToFit();
    btn.classList.remove('btn-active');
    btn.title = 'View at native 1920×1080 pixels (1:1 pixel scale)';
    showToast('↩ Back to fitted view');
  }
}

  // Snapshot Button
  document.getElementById('snapshotBtn').addEventListener('click', exportPngSnapshot);

  // Native 1920×1080 Button
  document.getElementById('nativeSizeBtn').addEventListener('click', toggleNativeMode);

  // Fullscreen Button
  document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);

  // Add & Delete Buttons
  document.getElementById('addNewMathematicianBtn').addEventListener('click', addNewMathematician);
  document.getElementById('deleteCurrentCardBtn').addEventListener('click', deleteCurrentMathematician);
  document.getElementById('saveCurrentCardBtn').addEventListener('click', applyFormEdits);

  // Local Image File Upload
  portraitFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        editPortrait.value = event.target.result;
        mathematicianPortrait.src = event.target.result;
        if (playlist[currentIndex]) {
          playlist[currentIndex].portrait = event.target.result;
        }
        showToast('✓ Local portrait image loaded');
      };
      reader.readAsDataURL(file);
    }
  });

  // JSON Deck Export
  document.getElementById('exportJsonBtn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(playlist, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "mathematicians_deck.json");
    dlAnchorElem.click();
    showToast('✓ Deck exported to JSON');
  });

  // JSON Deck Import
  document.getElementById('importJsonInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported) && imported.length > 0) {
            playlist = imported;
            renderMathematician(0);
            showToast('✓ Imported custom deck successfully!');
          }
        } catch (err) {
          showToast('Failed to parse JSON file');
        }
      };
      reader.readAsText(file);
    }
  });

  // Reset to Defaults
  document.getElementById('resetDefaultBtn').addEventListener('click', () => {
    if (confirm('Reset to original 8 Fields Medalists?')) {
      playlist = [...initialData];
      renderMathematician(0);
      showToast('✓ Reset to default collection');
    }
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // If typing inside an input/textarea, don't trigger global navigation shortcuts
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      const nextIdx = (currentIndex + 1) % playlist.length;
      renderMathematician(nextIdx);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIdx = (currentIndex - 1 + playlist.length) % playlist.length;
      renderMathematician(nextIdx);
    } else if (e.key === 'e' || e.key === 'E') {
      isDrawerOpen = !isDrawerOpen;
      studioDrawer.classList.toggle('open', isDrawerOpen);
    } else if (e.key === 's' || e.key === 'S') {
      exportPngSnapshot();
    } else if (e.key === 'g' || e.key === 'G') {
      isSafeGuideActive = !isSafeGuideActive;
      safeAreaGuide.classList.toggle('active', isSafeGuideActive);
    } else if (e.key === 'h' || e.key === 'H') {
      creatorBar.classList.toggle('hidden');
    }
  });

  // Double click canvas to toggle controller bar for ultra-clean recording
  frameCanvas.addEventListener('dblclick', () => {
    creatorBar.classList.toggle('hidden');
  });
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  scaleFrameToFit();
  setupEventListeners();
  renderMathematician(0, false);
});
