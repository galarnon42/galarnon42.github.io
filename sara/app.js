import { WORKSHOPS, FILTERS } from './data.js';
import { filterWorkshops, normalizeSavedIds } from './filters.js';

const STORAGE_KEY = 'sara-workshop-saves-v1';
const state = { query: '', topic: '', format: '', month: '', view: 'all', sort: 'date' };
let savedIds = [];
let storageAvailable = true;
let toastTimer;
let lastDetailsId;

const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const icon = (name, className = '') => {
  const paths = {
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    location: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    screen: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  };
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

// Original vector artwork; deliberately self-contained, with no external assets.
export function illustration(art) {
  const motifs = {
    botanical: `
      <ellipse cx="181" cy="149" rx="72" ry="7" fill="#698a7220"/>
      <path d="M154 67c35-14 65 9 65 37 0 20-12 34-34 35" fill="none" stroke="#698168" stroke-width="14" stroke-linecap="round"/>
      <path d="M154 67c35-14 65 9 65 37 0 20-12 34-34 35" fill="none" stroke="#9fb292" stroke-width="9" stroke-linecap="round"/>
      <g transform="rotate(27 159 67)"><rect x="148" y="42" width="22" height="45" rx="4" fill="#fffcf1" stroke="#587258" stroke-width="2"/><rect x="151" y="34" width="16" height="10" rx="2" fill="#779173"/><path d="M153 88h12v11h-12z" fill="#e9bd83" stroke="#587258" stroke-width="2"/></g>
      <path d="M130 112h62" stroke="#587258" stroke-width="6" stroke-linecap="round"/>
      <rect x="144" y="104" width="33" height="6" rx="2" fill="#e8dcae" stroke="#9d9f77"/>
      <circle cx="203" cy="94" r="10" fill="#f2d69b" stroke="#587258" stroke-width="2"/><circle cx="203" cy="94" r="3" fill="#849570"/>
      <path d="M161 140h39c10 0 17 3 19 8h-79c2-5 9-8 21-8Z" fill="#fffcf1" stroke="#587258" stroke-width="2"/>
      <circle cx="252" cy="80" r="19" fill="#fffaf0" stroke="#a6b795" stroke-width="1.5" stroke-dasharray="3 4"/><circle cx="250" cy="78" r="9" fill="#d2b0b0"/><circle cx="252" cy="76" r="3" fill="#a9788b"/><path d="m237 103-12 11" stroke="#a6b795" stroke-width="1.5" stroke-dasharray="3 4"/>
      <path d="m108 70 3 6 7 2-7 2-3 6-2-6-7-2 7-2Z" fill="#e1b56f"/>`,
    notebook: `
      <ellipse cx="180" cy="148" rx="63" ry="7" fill="#79638318"/>
      <circle cx="180" cy="91" r="58" fill="#fffaf2" opacity=".55"/>
      <g stroke="#c2abbc" stroke-width="2.5" stroke-linecap="round"><path d="M155 43h50M161 59h38M175 75h10M161 91h38M155 107h50M161 123h38M175 139h10"/></g>
      <g fill="#d9b57c"><circle cx="169" cy="43" r="3"/><circle cx="187" cy="59" r="3"/><circle cx="170" cy="91" r="3"/><circle cx="192" cy="107" r="3"/><circle cx="175" cy="123" r="3"/></g>
      <path d="M155 37c0 26 50 26 50 52s-50 26-50 52" fill="none" stroke="#8d779c" stroke-width="5" stroke-linecap="round"/>
      <path d="M205 37c0 26-50 26-50 52s50 26 50 52" fill="none" stroke="#c797ab" stroke-width="5" stroke-linecap="round"/>
      <circle cx="113" cy="97" r="15" fill="#f9f5e9" stroke="#b6bda1" stroke-width="2"/><circle cx="115" cy="95" r="5" fill="#a8b993"/><circle cx="110" cy="103" r="2" fill="#c5cfb5"/>
      <circle cx="248" cy="81" r="12" fill="#f9f5e9" stroke="#b6bda1" stroke-width="2"/><circle cx="246" cy="82" r="4" fill="#a8b993"/>
      <path d="m239 126 3 6 7 2-7 2-3 6-2-6-7-2 7-2Z" fill="#d9b57c"/>`,
    orbit: `
      <g stroke="#98a6b5" stroke-width="2" stroke-linecap="round"><path d="m124 60 56 33 55-40m-55 40 60 31m-60-31-57 42m57-42-5-52m5 52-1 57"/></g>
      <circle cx="180" cy="93" r="35" fill="#fffaf0" stroke="#a3afbd" stroke-width="1.5"/>
      <path d="M169 69c0 12 23 12 23 24s-23 12-23 24M192 69c0 12-23 12-23 24s23 12 23 24" fill="none" stroke="#ac8297" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M172 72h17m-15 11h13m-14 20h15m-16 11h17" stroke="#cfacb4" stroke-width="2" stroke-linecap="round"/>
      <circle cx="120" cy="58" r="15" fill="#afbea3" stroke="#839a7a" stroke-width="1.5"/><circle cx="120" cy="58" r="5" fill="#f8f4e5"/>
      <circle cx="238" cy="51" r="13" fill="#e6c48b" stroke="#bc9d69" stroke-width="1.5"/><circle cx="238" cy="51" r="4" fill="#fff9ec"/>
      <circle cx="243" cy="126" r="16" fill="#c5b4cf" stroke="#9b86ad" stroke-width="1.5"/><circle cx="243" cy="126" r="5" fill="#f6eef7"/>
      <circle cx="121" cy="137" r="11" fill="#d7a9aa" stroke="#b9868c" stroke-width="1.5"/><circle cx="121" cy="137" r="3" fill="#fff4ec"/>
      <circle cx="175" cy="37" r="6" fill="#b9c6cf"/><circle cx="179" cy="151" r="6" fill="#b9c6cf"/>
      <path d="m97 92 3 5 6 2-6 2-3 6-2-6-6-2 6-2Z" fill="#caa46a"/>`,
    collage: `
      <ellipse cx="178" cy="150" rx="76" ry="7" fill="#95647818"/>
      <g transform="rotate(-8 171 97)"><rect x="122" y="47" width="97" height="99" rx="4" fill="#fffcf3" stroke="#8c9075" stroke-width="2"/><path d="M137 48v96" stroke="#dbc9a8" stroke-width="2"/><path d="M129 57h-12m12 17h-12m12 17h-12m12 17h-12m12 17h-12m12 17h-12" stroke="#8c9075" stroke-width="2" stroke-linecap="round"/>
      <path d="M170 119c0-25 3-43 16-61" fill="none" stroke="#6f8d67" stroke-width="2.5"/><path d="M172 104c-23 1-26-16-26-16 21-1 28 11 26 16Zm3-15c22 0 28-17 28-17-22-2-30 11-28 17Zm5-14c-17-3-21-15-21-15 18 0 24 9 21 15Z" fill="#a2b78f"/><path d="M151 128h46m-46 7h32" stroke="#d5c7ae" stroke-width="2" stroke-linecap="round"/>
      <path d="m170 51 27 3-1 9-27-3Z" fill="#ecd5a9" opacity=".8"/></g>
      <circle cx="236" cy="92" r="22" fill="#faf7e8" fill-opacity=".8" stroke="#ba9275" stroke-width="4"/><path d="m251 110 15 21" stroke="#ba9275" stroke-width="8" stroke-linecap="round"/><path d="M232 101c-4-16 3-22 10-26 4 15-2 22-10 26Z" fill="#a6b792"/><path d="m231 104 9-24" stroke="#7d966d" stroke-width="1.5"/>
      <path d="m101 62 3 6 7 2-7 2-3 6-2-6-7-2 7-2Z" fill="#d8ae71"/>`,
    sunrise: `
      <ellipse cx="180" cy="149" rx="82" ry="7" fill="#9a8a5e18"/>
      <rect x="120" y="48" width="121" height="88" rx="7" fill="#a7b49a" stroke="#73826a" stroke-width="2"/><rect x="127" y="56" width="107" height="71" rx="2" fill="#fffdf3"/>
      <path d="M127 68h107" stroke="#e5e1cf" stroke-width="1.5"/><circle cx="134" cy="62" r="2" fill="#d4a4a2"/><circle cx="141" cy="62" r="2" fill="#e3c27c"/><circle cx="148" cy="62" r="2" fill="#9caf88"/>
      <path d="m140 82-5 4 5 4m14-8 5 4-5 4m-7-10-3 13" fill="none" stroke="#a18aa4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M137 104h24m-24 7h19m-19 7h27" stroke="#c2c7ad" stroke-width="2" stroke-linecap="round"/>
      <path d="M178 79v39h44" fill="none" stroke="#a7b29a" stroke-width="1.5"/>
      <path d="m183 108 9-10 9 4 15-18" fill="none" stroke="#c58f8b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g fill="#c58f8b"><circle cx="183" cy="108" r="2.5"/><circle cx="192" cy="98" r="2.5"/><circle cx="201" cy="102" r="2.5"/><circle cx="216" cy="84" r="2.5"/></g>
      <path d="M119 136h123l16 9c0 4-5 6-10 6H113c-5 0-10-2-10-6Z" fill="#fff9e7" stroke="#73826a" stroke-width="2"/><path d="M165 137h31l4 5h-39Z" fill="#dce0c9"/>
      <path d="m101 78 3 6 7 2-7 2-3 6-2-6-7-2 7-2Zm158-24 3 5 6 2-6 2-3 6-2-6-6-2 6-2Z" fill="#c9a465"/>`,
    palette: `
      <ellipse cx="180" cy="150" rx="76" ry="7" fill="#8e625718"/>
      <circle cx="180" cy="92" r="60" fill="#fff8ee" fill-opacity=".65" stroke="#bc98a1" stroke-width="2"/><circle cx="180" cy="92" r="53" fill="none" stroke="#e0bcc2" stroke-width="1.5"/>
      <path d="M166 53c17-7 38-2 47 11 13 19 11 45-4 60-15 14-39 16-54 2-18-16-19-45-4-62 4-5 9-8 15-11Z" fill="#efd6ce" stroke="#c49fa4" stroke-width="1.5"/>
      <ellipse cx="167" cy="77" rx="20" ry="22" fill="#d6b4c7" stroke="#af8fa6" stroke-width="1.5" transform="rotate(-20 167 77)"/><ellipse cx="196" cy="77" rx="20" ry="22" fill="#e8bfaf" stroke="#c3998e" stroke-width="1.5" transform="rotate(24 196 77)"/>
      <ellipse cx="165" cy="108" rx="20" ry="21" fill="#bac7a9" stroke="#91a07f" stroke-width="1.5" transform="rotate(19 165 108)"/><ellipse cx="197" cy="108" rx="21" ry="21" fill="#dfca91" stroke="#baa779" stroke-width="1.5" transform="rotate(-17 197 108)"/>
      <g fill="#fff9f1" fill-opacity=".8"><circle cx="166" cy="76" r="7"/><circle cx="197" cy="76" r="7"/><circle cx="164" cy="109" r="7"/><circle cx="198" cy="109" r="7"/></g>
      <g fill="#9d8593"><circle cx="167" cy="75" r="3"/><circle cx="198" cy="77" r="3"/><circle cx="165" cy="108" r="3"/><circle cx="197" cy="110" r="3"/></g>
      <path d="m98 84 3 6 7 2-7 2-3 6-2-6-7-2 7-2Zm157-28 3 5 6 2-6 2-3 6-2-6-6-2 6-2Z" fill="#cda46e"/><circle cx="252" cy="121" r="4" fill="#bb9eaf"/>`,
  };
  return `<svg class="workshop-illustration" viewBox="0 0 360 180" fill="none" aria-hidden="true">${motifs[art] || motifs.notebook}</svg>`;
}

const formatDate = date => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
const priceLabel = price => price === 0 ? 'Free' : `$${price}`;

function saveButton(workshop, extraClass = '') {
  const saved = savedIds.includes(workshop.id);
  return `<button type="button" class="save-button ${extraClass}${saved ? ' is-saved' : ''}" data-save="${workshop.id}" aria-pressed="${saved}" aria-label="${saved ? 'Unsave' : 'Save'} ${escapeHTML(workshop.title)}">${icon('heart')}<span class="sr-only">${saved ? 'Saved' : 'Save'}</span></button>`;
}

function workshopCard(workshop) {
  return `<article class="workshop-card">
    <div class="art-panel art-${workshop.art}">
      <span class="sample-tag">Sample workshop</span>
      ${saveButton(workshop)}
      ${illustration(workshop.art)}
    </div>
    <div class="card-content">
      <span class="card-topic">${escapeHTML(workshop.topic)}</span>
      <h3 class="card-title">${escapeHTML(workshop.title)}</h3>
      <p class="card-description">${escapeHTML(workshop.description)}</p>
      <div class="card-meta"><span>${icon('calendar')}${formatDate(workshop.date)}</span><span>${icon(workshop.format === 'Online' ? 'screen' : 'location')}${escapeHTML(workshop.format)} <span aria-hidden="true">·</span> ${escapeHTML(workshop.duration)}</span></div>
      <div class="card-bottom"><span class="price">${priceLabel(workshop.price)} <span>sample price</span></span><button type="button" class="detail-button" data-details="${workshop.id}" aria-label="Preview ${escapeHTML(workshop.title)}">Take a peek ${icon('arrow')}</button></div>
    </div>
  </article>`;
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4500);
}

function render() {
  const workshops = filterWorkshops(WORKSHOPS, state, savedIds);
  document.querySelector('#workshop-grid').innerHTML = workshops.map(workshopCard).join('');
  document.querySelector('#results-summary').textContent = `${workshops.length} sample workshop${workshops.length === 1 ? '' : 's'}${state.view === 'saved' ? ' in your shortlist' : ' to explore'}`;
  const savedCount = document.querySelector('#saved-count');
  if (savedCount) savedCount.textContent = savedIds.length;
  document.querySelectorAll('[data-view]').forEach(button => {
    const active = button.dataset.view === state.view;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
  });
  document.querySelector('#empty-state').hidden = workshops.length !== 0;
  const emptySaved = state.view === 'saved' && savedIds.length === 0;
  document.querySelector('#empty-title').textContent = emptySaved ? 'A little room for your favorites' : 'A fresh start might do the trick';
  document.querySelector('#empty-copy').textContent = emptySaved ? 'Tap the heart on a sample workshop to keep it here for later.' : 'No sample workshops match this combination. Try a different topic or clear your filters.';
  document.querySelector('#empty-reset').textContent = emptySaved ? 'Explore sample workshops' : 'Clear filters';
  document.querySelector('#clear-filters').disabled = ![state.query, state.topic, state.format, state.month].some(Boolean);
}

function resetFilters() {
  state.query = state.topic = state.format = state.month = '';
  document.querySelector('#search-input').value = '';
  FILTERS.forEach(filter => { document.getElementById(filter.elementId).value = ''; });
  render();
}

function updateDialogSave(workshop) {
  const button = document.querySelector('#dialog-content [data-save]');
  if (!button || button.dataset.save !== workshop.id) return;
  const saved = savedIds.includes(workshop.id);
  button.setAttribute('aria-pressed', String(saved));
  button.innerHTML = `${icon('heart')} ${saved ? 'Saved to your shortlist' : 'Save sample workshop'}`;
  button.classList.toggle('is-saved', saved);
}

function toggleSave(id) {
  const workshop = WORKSHOPS.find(item => item.id === id);
  if (!workshop) return;
  const wasSaved = savedIds.includes(id);
  savedIds = wasSaved ? savedIds.filter(savedId => savedId !== id) : [...savedIds, id];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    storageAvailable = true;
  } catch {
    storageAvailable = false;
  }
  const activeButton = document.activeElement;
  const restoreCardFocus = activeButton?.matches('#workshop-grid [data-save]');
  render();
  if (restoreCardFocus) {
    const target = document.querySelector(`#workshop-grid [data-save="${id}"]`) || document.querySelector('#workshop-grid [data-save]') || document.querySelector('#empty-reset');
    target?.focus({ preventScroll: true });
  }
  updateDialogSave(workshop);
  showToast(storageAvailable
    ? (wasSaved ? 'Removed from your shortlist.' : 'A little favorite, saved on this device.')
    : (wasSaved ? 'Removed for this visit. Browser storage is unavailable.' : 'Saved for this visit. Browser storage is unavailable.'));
}

function openDetails(id) {
  const workshop = WORKSHOPS.find(item => item.id === id);
  if (!workshop) return;
  lastDetailsId = id;
  document.querySelector('#dialog-content').innerHTML = `
    <div class="dialog-art art-panel art-${workshop.art}">${illustration(workshop.art)}</div>
    <div class="detail-content">
    <span class="card-topic">${escapeHTML(workshop.topic)}</span>
    <h2 id="dialog-title">${escapeHTML(workshop.title)}</h2>
    <p class="sample-notice"><strong>A little preview, not a real event.</strong> This fictional workshop shows how future listings could look. Dates, places, and prices are all examples.</p>
    <p>${escapeHTML(workshop.description)}</p>
    <dl class="detail-facts"><div><dt>Sample date</dt><dd>${formatDate(workshop.date)}</dd></div><div><dt>Format</dt><dd>${escapeHTML(workshop.format)}</dd></div><div><dt>Sample location</dt><dd>${escapeHTML(workshop.location)}</dd></div><div><dt>Duration</dt><dd>${escapeHTML(workshop.duration)}</dd></div><div><dt>Sample price</dt><dd>${priceLabel(workshop.price)}</dd></div></dl>
    <button type="button" class="primary-button dialog-save" data-save="${workshop.id}" aria-pressed="false"></button>
    <p class="dialog-footnote">Real workshop links will appear here once the search is ready.</p>
    <button type="button" class="dialog-back text-button" data-close-dialog>Back to workshops</button>
    </div>`;
  updateDialogSave(workshop);
  const dialog = document.querySelector('#details-dialog');
  dialog.showModal();
  dialog.scrollTop = 0;
}

function initialize() {
  try { savedIds = normalizeSavedIds(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'), WORKSHOPS); } catch { storageAvailable = false; }
  FILTERS.forEach(filter => {
    const select = document.getElementById(filter.elementId);
    select.replaceChildren(new Option(filter.placeholder, ''), ...filter.options.map(option => new Option(option.label, option.value)));
    select.addEventListener('change', () => { state[filter.key] = select.value; render(); });
  });
  document.querySelector('#search-input').addEventListener('input', event => { state.query = event.target.value; render(); });
  document.querySelector('#sort-select').addEventListener('change', event => { state.sort = event.target.value; render(); });
  document.querySelector('#clear-filters').addEventListener('click', resetFilters);
  document.querySelector('#reset-search')?.addEventListener('click', resetFilters);
  document.querySelector('#empty-reset').addEventListener('click', () => {
    if (state.view === 'saved' && savedIds.length === 0) state.view = 'all';
    resetFilters();
    document.querySelector('#search-input').focus({ preventScroll: true });
  });
  // A save can redraw the cards while this dialog is open. Restore focus to
  // the replacement opener when the native dialog's original opener is gone.
  document.querySelector('#details-dialog').addEventListener('close', () => {
    const opener = document.querySelector(`#workshop-grid [data-details="${lastDetailsId}"]`)
      || document.querySelector('#workshop-grid [data-details]')
      || document.querySelector('#empty-reset');
    opener?.focus({ preventScroll: true });
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.save) toggleSave(button.dataset.save);
    else if (button.dataset.details) openDetails(button.dataset.details);
    else if (button.hasAttribute('data-view')) {
      state.view = button.dataset.view;
      render();
      if (button.closest('header')) document.querySelector('#explore')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    } else if (button.hasAttribute('data-close-dialog')) button.closest('dialog')?.close();
    else if (button.hasAttribute('data-open-about')) document.querySelector('#about-dialog').showModal();
  });
  render();
}

if (typeof document !== 'undefined') initialize();
