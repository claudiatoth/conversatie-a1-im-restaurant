// ============================================
// TEORIE - Im Restaurant: Essen bestellen (Conversație A1)
// Claudia Toth · comanda la restaurant: mâncare, băutură, preț, plată
// Sursă: vocabular A1 standard (PONS) · conținut 100% original
// ============================================

const theoryHTML = `
    <!-- 0: Situație + sarcină -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Situația & sarcina ta</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Astăzi mergem la restaurant! 🍽️ E una dintre primele situații reale în care vei vorbi germană: comanzi mâncare, întrebi prețul, plătești. Mergem la restaurantul lui <strong>Mihai</strong> — îl asculți cum mă servește pe mine, apoi comanzi și tu. La final NU dai un test de gramatică — îți comanzi masa cu voce tare!</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📍 Situation</h4>
                <p>🇩🇪 Andreea geht in das Restaurant von Mihai. Sie hat Hunger und möchte zu Mittag essen. Mihai bringt die Speisekarte und nimmt die Bestellung auf.</p>
                <p style="margin-top:6px;">🇷🇴 Andreea merge la restaurantul lui Mihai. Îi este foame și vrea să mănânce de prânz. Mihai aduce meniul și ia comanda.</p>
            </div>

            <div class="theory-box" style="background:#ecfdf5;border-color:#10b981;">
                <h4>🎯 Aufgabe / Sarcina</h4>
                <p>🇩🇪 Bestelle Essen und Getränke im Restaurant. Frage nach dem Preis und bezahle höflich.</p>
                <p style="margin-top:6px;">🇷🇴 Comandă mâncare și băuturi la restaurant. Întreabă prețul și plătește politicos.</p>
            </div>

            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>✍️ Notă despre diacritice</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>die Säfte</em>) sau cu varianta de înlocuire (<em>die Saefte</em>). Ambele sunt acceptate peste tot în lecție.</p>
            </div>
        </div>
    </div>

    <!-- 1: Wortschatz — Essen & Trinken -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📖 2. Vocabular: mâncare & băutură (Essen & Trinken)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wortschatz.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">2.1 🥤 Getränke (băuturi)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO (sg · pl)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">das Wasser</td><td>die Wasser</td><td>apa · apele</td></tr>
                    <tr><td class="verb">der Kaffee</td><td>die Kaffees</td><td>cafeaua · cafelele</td></tr>
                    <tr><td class="verb">der Tee</td><td>die Tees</td><td>ceaiul · ceaiurile</td></tr>
                    <tr><td class="verb">der Saft</td><td>die Säfte</td><td>sucul · sucurile</td></tr>
                    <tr><td class="verb">das Bier</td><td>die Biere</td><td>berea · berile</td></tr>
                    <tr><td class="verb">der Wein</td><td>die Weine</td><td>vinul · vinurile</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">2.2 🍽️ Essen (mâncare)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO (sg · pl)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">die Suppe</td><td>die Suppen</td><td>supa · supele</td></tr>
                    <tr><td class="verb">der Salat</td><td>die Salate</td><td>salata · salatele</td></tr>
                    <tr><td class="verb">die Pizza</td><td>die Pizzen</td><td>pizza · pizzele</td></tr>
                    <tr><td class="verb">das Schnitzel</td><td>die Schnitzel</td><td>șnițelul · șnițelele</td></tr>
                    <tr><td class="verb">die Pommes</td><td><em>numai plural</em></td><td>cartofii prăjiți (numai plural)</td></tr>
                    <tr><td class="verb">das Brot</td><td>die Brote</td><td>pâinea · pâinile</td></tr>
                    <tr><td class="verb">der Fisch</td><td>die Fische</td><td>peștele · peștii</td></tr>
                    <tr><td class="verb">das Eis</td><td>die Eis</td><td>înghețata · înghețatele</td></tr>
                    <tr><td class="verb">der Kuchen</td><td>die Kuchen</td><td>prăjitura · prăjiturile</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>➕ Extindere — cuvinte de restaurant</h4>
                <table class="grammar-table" style="margin-top:6px;">
                    <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO (sg · pl)</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Speisekarte</td><td>die Speisekarten</td><td>meniul · meniurile</td></tr>
                        <tr><td class="verb">die Rechnung</td><td>die Rechnungen</td><td>nota de plată · notele</td></tr>
                        <tr><td class="verb">der Tisch</td><td>die Tische</td><td>masa · mesele</td></tr>
                        <tr><td class="verb">der Kellner</td><td>die Kellner</td><td>chelnerul · chelnerii</td></tr>
                        <tr><td class="verb">die Kellnerin</td><td>die Kellnerinnen</td><td>chelnerița · chelnerițele</td></tr>
                        <tr><td class="verb">das Trinkgeld</td><td>die Trinkgelder</td><td>bacșișul · bacșișurile</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 2: Gramatică — Ich möchte + ein/eine/einen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🧩 3. Gramatica de bază: Ich möchte… + ein / eine / einen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-grammatik.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">3.1 Fraza politicoasă: „Ich möchte…"</h4>
            <p style="margin-bottom:8px;">Ca să comanzi politicos, folosești <strong>Ich möchte…</strong> (aș dori…) sau <strong>Ich hätte gern…</strong> (aș vrea…). E mult mai frumos decât „Ich will" (vreau). Chelnerul te întreabă: <em>„Was möchten Sie?"</em> (Ce doriți?).</p>

            <h4 style="color:#065f46;margin:16px 0 8px;">3.2 ein / eine / einen când comanzi</h4>
            <p style="margin-bottom:8px;">După „Ich möchte" pui <strong>un articol</strong>. Vestea bună: la feminin și neutru rămâne <strong>eine / ein</strong>. Se schimbă <strong>doar masculinul</strong>: <strong>ein → einen</strong>.</p>
            <table class="grammar-table">
                <thead><tr><th>Genul</th><th>Substantiv</th><th>La comandă</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td>masculin (der)</td><td class="verb">der Kaffee</td><td><strong>einen</strong> Kaffee</td><td><em>Ich möchte einen Kaffee. (Aș dori o cafea.)</em></td></tr>
                    <tr><td>feminin (die)</td><td class="verb">die Suppe</td><td><strong>eine</strong> Suppe</td><td><em>Ich möchte eine Suppe. (Aș dori o supă.)</em></td></tr>
                    <tr><td>neutru (das)</td><td class="verb">das Wasser</td><td><strong>ein</strong> Wasser</td><td><em>Ich möchte ein Wasser. (Aș dori o apă.)</em></td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Truc: gândește-te doar la masculin. <strong>der → einen</strong> (amândouă au „-n"). Feminin și neutru le lași în pace: eine, ein. Așa nu greșești când comanzi! (Aceasta e de fapt regula Akkusativ — dar la A1 ți-o reții simplu ca „regula comenzii".)</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Fraze utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🗣️ 4. Fraze utile pe situații (Nützliche Phrasen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-phrasen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">4.1 Ca să comanzi</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Die Speisekarte, bitte.</td><td>Meniul, vă rog.</td></tr>
                    <tr><td class="verb">Ich möchte eine Suppe, bitte.</td><td>Aș dori o supă, vă rog.</td></tr>
                    <tr><td class="verb">Ich hätte gern einen Salat.</td><td>Aș vrea o salată.</td></tr>
                    <tr><td class="verb">Ich nehme das Schnitzel.</td><td>Iau șnițelul.</td></tr>
                    <tr><td class="verb">Für mich bitte ein Wasser.</td><td>Pentru mine o apă, vă rog.</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.2 Ca să întrebi</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Was kostet das?</td><td>Cât costă asta?</td></tr>
                    <tr><td class="verb">Was empfehlen Sie?</td><td>Ce recomandați?</td></tr>
                    <tr><td class="verb">Haben Sie auch Pizza?</td><td>Aveți și pizza?</td></tr>
                    <tr><td class="verb">Was möchten Sie trinken?</td><td>Ce doriți să beți? (întreabă chelnerul)</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.3 Ca să plătești</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Die Rechnung, bitte.</td><td>Nota de plată, vă rog.</td></tr>
                    <tr><td class="verb">Zusammen oder getrennt?</td><td>Împreună sau separat? (întreabă chelnerul)</td></tr>
                    <tr><td class="verb">Ich zahle mit Karte / bar.</td><td>Plătesc cu cardul / cu numerar.</td></tr>
                    <tr><td class="verb">Stimmt so.</td><td>Păstrați restul. (lași bacșiș)</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Mini-ghid -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🧭 5. Cum comanzi la restaurant în 5 pași</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-ghid.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🔑 Rețeta unei comenzi reușite (A1)</h4>
                <ol style="margin-left:22px;">
                    <li><strong>Salută & cere meniul:</strong> „Guten Tag! Die Speisekarte, bitte."</li>
                    <li><strong>Comandă:</strong> „Ich möchte eine Suppe und ein Wasser."</li>
                    <li><strong>Întreabă prețul</strong> (dacă vrei): „Was kostet das?"</li>
                    <li><strong>Cere nota:</strong> „Die Rechnung, bitte."</li>
                    <li><strong>Plătește & mulțumește:</strong> „Ich zahle mit Karte. Danke!"</li>
                </ol>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Acum ascultă dialogul în care Andreea comandă la restaurantul lui Mihai — vei auzi exact rețeta de mai sus în acțiune. Apoi treci la exerciții și, la final, îți comanzi TU masa cu voce tare. Cu „bitte" și „danke" ești deja un client model! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
