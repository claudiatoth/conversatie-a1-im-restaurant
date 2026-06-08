// ============================================
// EXERCIȚII - Im Restaurant: Essen bestellen (Conversație A1)
// Claudia Toth · 4 exerciții gradate + producere orală liberă (Ex5)
// Sursă: vocabular A1 standard · conținut 100% original
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
// ===== click-match =====
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}
// ===== multiple-choice =====
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}

// ============================================
// EX1: Vocabular — potrivește mâncarea/băutura (DE ↔ RO)
// ============================================
const ex1Pairs = [
    { de: 'der Kaffee', ro: 'cafeaua' },
    { de: 'das Wasser', ro: 'apa' },
    { de: 'die Suppe', ro: 'supa' },
    { de: 'der Salat', ro: 'salata' },
    { de: 'das Bier', ro: 'berea' },
    { de: 'der Saft', ro: 'sucul' },
    { de: 'die Pizza', ro: 'pizza' },
    { de: 'das Eis', ro: 'înghețata' },
    { de: 'der Fisch', ro: 'peștele' },
    { de: 'das Brot', ro: 'pâinea' }
];
function buildEx1() { buildClickMatch('ex1', ex1Pairs, '<strong>📖 Potrivește mâncarea sau băutura cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Wort', '🇷🇴 Traducere'); }
function checkEx1() { const s = dmState['ex1']; return { correct: Object.keys(s.matched).length, total: ex1Pairs.length }; }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Articolul corect — der / die / das?
// ============================================
const ex2Items = [
    { id: 'a', q: '____ Kaffee <em>(cafeaua)</em>', options: ['der', 'die', 'das'], correct: 0, explanation: 'der Kaffee — masculin.' },
    { id: 'b', q: '____ Suppe <em>(supa)</em>', options: ['der', 'die', 'das'], correct: 1, explanation: 'die Suppe — feminin.' },
    { id: 'c', q: '____ Wasser <em>(apa)</em>', options: ['der', 'die', 'das'], correct: 2, explanation: 'das Wasser — neutru.' },
    { id: 'd', q: '____ Salat <em>(salata)</em>', options: ['der', 'die', 'das'], correct: 0, explanation: 'der Salat — masculin.' },
    { id: 'e', q: '____ Pizza <em>(pizza)</em>', options: ['der', 'die', 'das'], correct: 1, explanation: 'die Pizza — feminin.' },
    { id: 'f', q: '____ Bier <em>(berea)</em>', options: ['der', 'die', 'das'], correct: 2, explanation: 'das Bier — neutru.' },
    { id: 'g', q: '____ Saft <em>(sucul)</em>', options: ['der', 'die', 'das'], correct: 0, explanation: 'der Saft — masculin.' },
    { id: 'h', q: '____ Rechnung <em>(nota de plată)</em>', options: ['der', 'die', 'das'], correct: 1, explanation: 'die Rechnung — feminin.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🧩 Alege articolul corect.</strong><br>Învață mereu articolul împreună cu cuvântul!'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: La comandă — ein / eine / einen?
// ============================================
const ex3Items = [
    { id: 'a', q: 'Ich möchte ____ Kaffee. <em>(der Kaffee)</em>', options: ['ein', 'eine', 'einen'], correct: 2, explanation: 'der Kaffee (masculin) → einen Kaffee.' },
    { id: 'b', q: 'Ich möchte ____ Suppe. <em>(die Suppe)</em>', options: ['ein', 'eine', 'einen'], correct: 1, explanation: 'die Suppe (feminin) → eine Suppe.' },
    { id: 'c', q: 'Ich möchte ____ Wasser. <em>(das Wasser)</em>', options: ['ein', 'eine', 'einen'], correct: 0, explanation: 'das Wasser (neutru) → ein Wasser.' },
    { id: 'd', q: 'Ich nehme ____ Salat. <em>(der Salat)</em>', options: ['ein', 'eine', 'einen'], correct: 2, explanation: 'der Salat (masculin) → einen Salat.' },
    { id: 'e', q: 'Ich hätte gern ____ Pizza. <em>(die Pizza)</em>', options: ['ein', 'eine', 'einen'], correct: 1, explanation: 'die Pizza (feminin) → eine Pizza.' },
    { id: 'f', q: 'Für mich ____ Bier. <em>(das Bier)</em>', options: ['ein', 'eine', 'einen'], correct: 0, explanation: 'das Bier (neutru) → ein Bier.' },
    { id: 'g', q: 'Ich möchte ____ Saft. <em>(der Saft)</em>', options: ['ein', 'eine', 'einen'], correct: 2, explanation: 'der Saft (masculin) → einen Saft.' },
    { id: 'h', q: 'Ich nehme ____ Eis. <em>(das Eis)</em>', options: ['ein', 'eine', 'einen'], correct: 0, explanation: 'das Eis (neutru) → ein Eis.' }
];
function buildEx3() { buildMC('ex3', ex3Items, '<strong>🍽️ Comandă corect!</strong><br>Reține: masculin → einen · feminin → eine · neutru → ein.'); }
function checkEx3() { return checkMC('ex3', ex3Items); }
function resetEx3() { ex3Items.forEach(i => delete mcPicked['ex3-' + i.id]); buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Ce spui? — fraza potrivită pentru fiecare situație
// ============================================
const ex4Items = [
    { id: 'a', q: 'Vrei meniul. Ce spui?', options: ['Was kostet das?', 'Die Speisekarte, bitte.', 'Stimmt so.', 'Die Rechnung, bitte.'], correct: 1, explanation: 'Die Speisekarte, bitte. = Meniul, vă rog.' },
    { id: 'b', q: 'Întrebi cât costă. Ce spui?', options: ['Was kostet das?', 'Wie heißt das?', 'Wo ist das?', 'Guten Tag.'], correct: 0, explanation: 'Was kostet das? = Cât costă asta?' },
    { id: 'c', q: 'Ceri nota de plată. Ce spui?', options: ['Ein Wasser, bitte.', 'Guten Tag.', 'Die Rechnung, bitte.', 'Die Speisekarte, bitte.'], correct: 2, explanation: 'Die Rechnung, bitte. = Nota de plată, vă rog.' },
    { id: 'd', q: 'Comanzi politicos o supă. Ce spui?', options: ['Suppe!', 'Ich will Suppe.', 'Gib mir Suppe.', 'Ich möchte eine Suppe.'], correct: 3, explanation: 'Ich möchte eine Suppe. = forma politicoasă de comandă.' },
    { id: 'e', q: 'Spui că plătești cu cardul. Ce spui?', options: ['Ich zahle mit Karte.', 'Ich zahle bar.', 'Stimmt so.', 'Zusammen.'], correct: 0, explanation: 'Ich zahle mit Karte. = Plătesc cu cardul.' },
    { id: 'f', q: 'Chelnerul te întreabă ce vrei să bei. Ce spune?', options: ['Was kostet das?', 'Was möchten Sie trinken?', 'Guten Appetit.', 'Die Rechnung, bitte.'], correct: 1, explanation: 'Was möchten Sie trinken? = Ce doriți să beți?' },
    { id: 'g', q: 'Spui că mâncarea e gustoasă. Ce spui?', options: ['Das ist teuer.', 'Ich habe Hunger.', 'Das Essen ist sehr lecker!', 'Auf Wiedersehen.'], correct: 2, explanation: 'Das Essen ist sehr lecker! = Mâncarea e foarte gustoasă!' },
    { id: 'h', q: 'Lași bacșiș (păstrați restul). Ce spui?', options: ['Getrennt, bitte.', 'Noch ein Bier.', 'Die Karte, bitte.', 'Stimmt so.'], correct: 3, explanation: 'Stimmt so. = Păstrați restul (lași bacșiș).' }
];
function buildEx4() { buildMC('ex4', ex4Items, '<strong>💬 Ce spui în fiecare situație?</strong><br>Alege fraza germană potrivită.'); }
function checkEx4() { return checkMC('ex4', ex4Items); }
function resetEx4() { ex4Items.forEach(i => delete mcPicked['ex4-' + i.id]); buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); });
