---
layout: default
title: Chronik lesen
sitemap: false
---

<meta name="robots" content="noindex, nofollow">

<style>
  .pw-container {
    max-width: 440px;
    margin: 80px auto;
    text-align: center;
    padding: 40px 30px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }
  .pw-container h2 {
    margin-top: 0;
    color: #2a5d8f;
  }
  .pw-container p {
    color: #666;
    font-size: 0.95em;
    margin-bottom: 24px;
  }
  .pw-input {
    width: 100%;
    max-width: 260px;
    padding: 10px 14px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
  }
  .pw-input:focus {
    outline: none;
    border-color: #2a5d8f;
  }
  .pw-btn {
    display: inline-block;
    margin-top: 16px;
    padding: 10px 28px;
    background: #2a5d8f;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
  }
  .pw-btn:hover {
    background: #1e4a73;
  }
  .pw-error {
    color: #c44;
    font-size: 0.9em;
    margin-top: 12px;
    display: none;
  }

  .chronik-content {
    display: none;
    max-width: 900px;
    margin: 0 auto;
  }
  .chronik-content h2 {
    color: #2a5d8f;
    margin-top: 0;
  }
  .band-section {
    margin-bottom: 40px;
  }
  .band-section h3 {
    color: #333;
    margin-bottom: 12px;
  }
  .pdf-embed {
    width: 100%;
    height: 80vh;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
  .download-link {
    display: inline-block;
    margin-top: 8px;
    font-size: 0.9em;
    color: #2a5d8f;
  }
</style>

<div class="pw-container" id="pw-gate">
  <h2>Chronik lesen</h2>
  <p>Diese Seite ist den Besitzern der gedruckten Pilz-Chronik vorbehalten. Das Passwort findest du im Buch.</p>
  <input type="password" class="pw-input" id="pw-field" placeholder="Passwort" onkeydown="if(event.key==='Enter') checkPw()">
  <br>
  <button class="pw-btn" onclick="checkPw()">Zugang</button>
  <div class="pw-error" id="pw-error">Falsches Passwort.</div>
</div>

<div class="chronik-content" id="chronik-content">
  <h2>Pilz-Chronik – Band 1 & 2</h2>
  <p style="color:#666; margin-bottom:30px;">Die vollständigen Bände als PDF. Bitte nur zum persönlichen Gebrauch – einige Abbildungen sind ausschließlich für die private Nutzung lizenziert.</p>

  <div class="band-section">
    <h3>Band 1</h3>
    <embed src="{{ '/assets/Band_1-kompr.pdf' | relative_url }}" type="application/pdf" class="pdf-embed">
    <br><a href="{{ '/assets/Band_1-kompr.pdf' | relative_url }}" class="download-link" download>↓ Band 1 herunterladen (PDF)</a>
  </div>

  <div class="band-section">
    <h3>Band 2</h3>
    <embed src="{{ '/assets/Band_2-kompr.pdf' | relative_url }}" type="application/pdf" class="pdf-embed">
    <br><a href="{{ '/assets/Band_2-kompr.pdf' | relative_url }}" class="download-link" download>↓ Band 2 herunterladen (PDF)</a>
  </div>
</div>

<script>
function checkPw() {
  var input = document.getElementById('pw-field').value;
  if (input === 'pilz2025') {
    document.getElementById('pw-gate').style.display = 'none';
    document.getElementById('chronik-content').style.display = 'block';
  } else {
    document.getElementById('pw-error').style.display = 'block';
    document.getElementById('pw-field').value = '';
  }
}
</script>
