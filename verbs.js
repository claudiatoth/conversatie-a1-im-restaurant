// ============================================
// VERB-KONJUGATION - Im Restaurant (Conversație A1)
// Claudia Toth · 5 verbe esențiale · DOAR PRÄSENS (potrivit nivelului A1)
// PONS-verified. La A1 ne concentrăm pe prezent — restul timpurilor vin mai târziu.
// ============================================

const verbsData = [
    {
        infinitiv: 'möchten', ro: 'a dori (politicos)', type: 'strong',
        praesens: [
            { p: 'ich', f: 'möchte', ro: 'aș dori' },
            { p: 'du', f: 'möchtest', ro: 'ai dori' },
            { p: 'er/sie/es', f: 'möchte', ro: 'ar dori' },
            { p: 'wir', f: 'möchten', ro: 'am dori' },
            { p: 'ihr', f: 'möchtet', ro: 'ați dori' },
            { p: 'sie/Sie', f: 'möchten', ro: 'ar dori / ați dori (politicos)' }
        ],
        beispiel: { de: 'Ich möchte einen Kaffee, bitte.', ro: 'Aș dori o cafea, vă rog.' },
        notes: 'Forma politicoasă pentru „a dori" (vine de la „mögen"). Verbul-cheie când comanzi. Atenție: la ich și er/sie/es e identic — „möchte".'
    },
    {
        infinitiv: 'essen', ro: 'a mânca', type: 'strong',
        praesens: [
            { p: 'ich', f: 'esse', ro: 'mănânc' },
            { p: 'du', f: 'isst', ro: 'mănânci' },
            { p: 'er/sie/es', f: 'isst', ro: 'mănâncă' },
            { p: 'wir', f: 'essen', ro: 'mâncăm' },
            { p: 'ihr', f: 'esst', ro: 'mâncați' },
            { p: 'sie/Sie', f: 'essen', ro: 'mănâncă / mâncați' }
        ],
        beispiel: { de: 'Ich esse gern Pizza und Salat.', ro: 'Mănânc cu plăcere pizza și salată.' },
        notes: 'NEREGULAT: la du și er/sie/es vocala se schimbă e→i (du isst, er isst). „du isst" și „er isst" sunt identice.'
    },
    {
        infinitiv: 'trinken', ro: 'a bea', type: 'weak',
        praesens: [
            { p: 'ich', f: 'trinke', ro: 'beau' },
            { p: 'du', f: 'trinkst', ro: 'bei' },
            { p: 'er/sie/es', f: 'trinkt', ro: 'bea' },
            { p: 'wir', f: 'trinken', ro: 'bem' },
            { p: 'ihr', f: 'trinkt', ro: 'beți' },
            { p: 'sie/Sie', f: 'trinken', ro: 'beau / beți' }
        ],
        beispiel: { de: 'Was trinkst du? Ich trinke ein Wasser.', ro: 'Ce bei? Beau o apă.' },
        notes: 'Verb REGULAT. Îl folosești pentru băuturi: „Ich trinke einen Kaffee."'
    },
    {
        infinitiv: 'nehmen', ro: 'a lua', type: 'strong',
        praesens: [
            { p: 'ich', f: 'nehme', ro: 'iau' },
            { p: 'du', f: 'nimmst', ro: 'iei' },
            { p: 'er/sie/es', f: 'nimmt', ro: 'ia' },
            { p: 'wir', f: 'nehmen', ro: 'luăm' },
            { p: 'ihr', f: 'nehmt', ro: 'luați' },
            { p: 'sie/Sie', f: 'nehmen', ro: 'iau / luați' }
        ],
        beispiel: { de: 'Ich nehme das Schnitzel mit Pommes.', ro: 'Iau șnițelul cu cartofi prăjiți.' },
        notes: 'NEREGULAT: la du și er/sie/es vocala e→i + dublu m (du nimmst, er nimmt). Foarte folosit la comandă: „Ich nehme…"'
    },
    {
        infinitiv: 'bezahlen', ro: 'a plăti', type: 'weak',
        praesens: [
            { p: 'ich', f: 'bezahle', ro: 'plătesc' },
            { p: 'du', f: 'bezahlst', ro: 'plătești' },
            { p: 'er/sie/es', f: 'bezahlt', ro: 'plătește' },
            { p: 'wir', f: 'bezahlen', ro: 'plătim' },
            { p: 'ihr', f: 'bezahlt', ro: 'plătiți' },
            { p: 'sie/Sie', f: 'bezahlen', ro: 'plătesc / plătiți' }
        ],
        beispiel: { de: 'Ich bezahle mit Karte. Die Rechnung, bitte.', ro: 'Plătesc cu cardul. Nota de plată, vă rog.' },
        notes: 'Verb REGULAT (prefix be-). „bezahlen" și „zahlen" înseamnă amândouă „a plăti" — le auzi des la restaurant.'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 5 verbe esențiale pentru restaurant</h4>
            <p>La nivelul A1 ne concentrăm pe <strong>Präsens (prezent)</strong> — atât ai nevoie ca să comanzi. <strong>essen</strong> și <strong>nehmen</strong> sunt neregulate (e→i la du/er); <strong>trinken, bezahlen</strong> sunt regulate; <strong>möchten</strong> e forma politicoasă pe care o folosești cel mai des.</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'NEREGULAT' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens (prezent)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">💬 Exemplu din restaurant</h4>
                    <div class="example-box"><div class="de">${v.beispiel.de}</div><div class="ro">${v.beispiel.ro}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
