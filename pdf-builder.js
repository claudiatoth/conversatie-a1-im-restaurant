// ============================================
// PDF BUILDER — Im Restaurant: Essen bestellen (Conversație A1)
// Claudia Toth · model PDF MODEL TV1
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildTheory() + buildDialog() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#ecfdf5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#eef2ff[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        return `<h1 class="chapter">📘 1. Teorie — Im Restaurant</h1>` + t;
    }

    function buildDialog() {
        if (typeof dialog1Data === 'undefined') return '';
        let html = `<h1 class="chapter new-section">🎬 2. Dialog — ${dialog1Data.title}</h1>`;
        html += `<div class="dlg-context"><strong>📍 Situația:</strong> ${dialog1Data.context}</div>`;
        dialog1Data.replici.forEach(r => {
            const sp = r.speaker === 'andreea' ? 'Andreea 🇷🇴' : 'Mihai 🧑‍🍳';
            html += `<div class="dlg-line ${r.speaker}"><span class="sp">${sp}:</span> <span class="de">${r.de}</span><br><span class="ro">${r.ro}</span></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        html += `<div class="ex-block"><h3>Übung 1 — Vocabular (potrivește mâncarea & băutura)</h3><div class="rezolvare-banner">✓ Rezolvare</div><table><thead><tr><th style="width:45%">🇩🇪 Wort</th><th>🇷🇴 Traducere</th></tr></thead><tbody>`;
        if (typeof ex1Pairs !== 'undefined') ex1Pairs.forEach(p => { html += `<tr><td class="verb">${p.de}</td><td class="ro-text">${p.ro}</td></tr>`; });
        html += `</tbody></table></div>`;

        html += `<div class="ex-block"><h3>Übung 2 — Articolul corect (der/die/das)</h3><div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex2Items !== 'undefined') ex2Items.forEach((it, i) => { html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.q}</div><div class="ex-a">${it.options[it.correct]}</div><div class="ex-explanation">${it.explanation}</div></div></div>`; });
        html += `</div>`;

        html += `<div class="ex-block"><h3>Übung 3 — La comandă (ein/eine/einen)</h3><div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex3Items !== 'undefined') ex3Items.forEach((it, i) => { html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.q}</div><div class="ex-a">${it.options[it.correct]}</div><div class="ex-explanation">${it.explanation}</div></div></div>`; });
        html += `</div>`;

        html += `<div class="ex-block"><h3>Übung 4 — Ce spui? (fraza potrivită)</h3><div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex4Items !== 'undefined') ex4Items.forEach((it, i) => { html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.q}</div><div class="ex-a">${it.options[it.correct]}</div><div class="ex-explanation">${it.explanation}</div></div></div>`; });
        html += `</div>`;

        html += `<div class="ex-block"><h3>Übung 5 — Vorbire (comandă-ți masa)</h3>
            <div class="instruction">Exercițiu de vorbire, fără notare: imaginează-ți că ești la restaurant și comandă cu voce tare (salută, cere meniul, comandă 2-3 lucruri, întreabă prețul, cere nota). Model audio + scris în lecția online.</div></div>`;

        return html;
    }

    function buildFlashcards() {
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:14px">Cele <strong>${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} de carduri</strong>: mâncare, băutură și fraze utile pentru restaurant.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') flashcardsData.forEach(c => { html += `<div class="fc-row"><span class="de">${c.de}</span><span class="ro">— ${c.ro}</span></div>`; });
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 5. Verb-Konjugation — verbe esențiale</h1>
            <div class="theory-box warn-box"><p><strong>📌 La A1 doar PRÄSENS (prezent).</strong> essen și nehmen sunt NEREGULATE (e→i la du/er); trinken, bezahlen sunt REGULATE; möchten = forma politicoasă de comandă.</p></div>`;
        if (typeof verbsData !== 'undefined') verbsData.forEach((v, idx) => {
            const typeBadge = v.type === 'strong' ? '<span class="badge strong">NEREGULAT</span>' : '<span class="badge weak">REGULAT</span>';
            html += `<div class="verb-card"><div class="vh"><span class="name">${idx + 1}. ${v.infinitiv}</span><span class="ro">— ${v.ro}</span>${typeBadge}</div>
                <h5>Präsens (prezent)</h5><table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
            v.praesens.forEach(r => { html += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
            html += `</tbody></table><h5>Exemplu din restaurant</h5><div class="perfekt-box"><div class="de">${v.beispiel.de}</div><div class="ro">${v.beispiel.ro}</div></div>
                <div class="note"><strong>📌 Notă:</strong> ${v.notes}</div></div>`;
        });
        return html;
    }
})();
