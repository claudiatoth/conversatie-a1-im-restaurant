// ============================================
// FLASHCARDS - Im Restaurant: Essen bestellen (Conversație A1)
// Claudia Toth · 32 carduri (mâncare + băutură + fraze de restaurant) cu TTS
// REGULĂ QA: fără ghilimele interioare în stringuri (CAPS/paranteze pentru emfază)
// ============================================

const flashcardsData = [
    // Getränke (băuturi)
    { de: "der Kaffee", ro: "cafeaua" },
    { de: "der Tee", ro: "ceaiul" },
    { de: "das Wasser", ro: "apa" },
    { de: "der Saft", ro: "sucul" },
    { de: "das Bier", ro: "berea" },
    { de: "der Wein", ro: "vinul" },
    // Essen (mâncare)
    { de: "die Suppe", ro: "supa" },
    { de: "der Salat", ro: "salata" },
    { de: "die Pizza", ro: "pizza" },
    { de: "das Schnitzel", ro: "șnițelul" },
    { de: "die Pommes", ro: "cartofii prăjiți (numai plural)" },
    { de: "das Brot", ro: "pâinea" },
    { de: "der Fisch", ro: "peștele" },
    { de: "das Eis", ro: "înghețata" },
    { de: "der Kuchen", ro: "prăjitura" },
    // Cuvinte de restaurant
    { de: "die Speisekarte", ro: "meniul" },
    { de: "die Rechnung", ro: "nota de plată" },
    { de: "der Tisch", ro: "masa" },
    { de: "der Kellner", ro: "chelnerul" },
    { de: "die Kellnerin", ro: "chelnerița" },
    { de: "das Trinkgeld", ro: "bacșișul" },
    // Fraze pentru comandă
    { de: "Die Speisekarte, bitte.", ro: "Meniul, vă rog." },
    { de: "Ich möchte eine Suppe.", ro: "Aș dori o supă." },
    { de: "Ich hätte gern einen Salat.", ro: "Aș vrea o salată." },
    { de: "Ich nehme das Schnitzel.", ro: "Iau șnițelul." },
    { de: "Was kostet das?", ro: "Cât costă asta?" },
    { de: "Was möchten Sie trinken?", ro: "Ce doriți să beți?" },
    { de: "Die Rechnung, bitte.", ro: "Nota de plată, vă rog." },
    { de: "Ich zahle mit Karte.", ro: "Plătesc cu cardul." },
    { de: "Zusammen oder getrennt?", ro: "Împreună sau separat?" },
    { de: "Das Essen ist sehr lecker!", ro: "Mâncarea e foarte gustoasă!" },
    { de: "Guten Appetit!", ro: "Poftă bună!" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: mâncare, băutură + fraze utile pentru restaurant.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
