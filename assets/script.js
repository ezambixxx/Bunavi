// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
}

// Trimester selection - interaktif & animatif
function selectTrimester(trimester) {
    document.querySelectorAll('.trimester').forEach(t => t.classList.remove('active'));
    document.querySelector(`.trimester-${trimester}`).classList.add('active');

    const modal = document.getElementById('trimesterModal');
    const modalContent = document.getElementById('modalContent');
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';

    const data = {
        1: `
        <div class="trimester-content">
            <h2 class="trimester-title">🟢 TRIMESTER 1 (0–13 Minggu)</h2>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perubahan Fisik Ibu</div>
                <div class="section-content">
                    <ul>
                        <li>Mual, muntah, mudah lelah.</li>
                        <li>Berat badan naik 1–3 kg.</li>
                        <li>Rawan keguguran.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perkembangan Janin</div>
                <div class="section-content">
                    <ul>
                        <li>Dari sebesar biji beras hingga sebesar jeruk nipis (10 cm, 28 gram).</li>
                        <li>Pembentukan awal organ penting: otak, jantung, paru-paru.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Hal yang Harus Dilakukan</div>
                <div class="section-content">
                    <ul>
                        <li>Periksa kehamilan minimal 1 kali.</li>
                        <li>Minum Tablet Tambah Darah (TTD)/Multivitamin setiap hari.</li>
                        <li>Makan sering dengan porsi kecil (3x makan utama + 2x kudapan).</li>
                        <li>Periksa USG dan laboratorium lengkap.</li>
                        <li>Pantau tanda bahaya: demam tinggi, perdarahan, mual hebat, nyeri perut hebat, keputihan berbau, dll.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section warning-section">
                <div class="section-title" data-icon="❌">Hal yang Tidak Boleh Dilakukan</div>
                <div class="section-content">
                    <ul>
                        <li>Minum alkohol, merokok, konsumsi jamu/obat tanpa resep.</li>
                        <li>Aktivitas berat, tidur telentang terlalu lama.</li>
                    </ul>
                </div>
            </div>
        </div>`,
        2: `
        <div class="trimester-content">
            <h2 class="trimester-title">🟡 TRIMESTER 2 (14–27 Minggu)</h2>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perubahan Fisik Ibu</div>
                <div class="section-content">
                    <ul>
                        <li>Gejala trimester 1 mulai mereda.</li>
                        <li>Berat badan naik 4–8 kg.</li>
                        <li>Mulai merasakan gerakan janin.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perkembangan Janin</div>
                <div class="section-content">
                    <ul>
                        <li>Tumbuh dari sebesar apel hingga sebesar jagung (34 cm, 1000 gram).</li>
                        <li>Fungsi organ mulai berkembang.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Hal yang Harus Dilakukan</div>
                <div class="section-content">
                    <ul>
                        <li>Periksa kehamilan minimal 2 kali.</li>
                        <li>Pantau gerakan bayi (≥10x dalam 12 jam).</li>
                        <li>Diskusikan rencana kelahiran dengan tenaga kesehatan.</li>
                        <li>Jaga kesehatan jiwa: istirahat cukup, kelola stres.</li>
                        <li>Makan bergizi, minum cukup air (8–12 gelas/hari).</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section warning-section">
                <div class="section-title" data-icon="⚠️">Tanda Bahaya</div>
                <div class="section-content">
                    <ul>
                        <li>Perdarahan, nyeri perut hebat, pandangan kabur.</li>
                        <li>Keputihan berbau, demam, jantung berdebar, muntah darah.</li>
                    </ul>
                </div>
            </div>
        </div>`,
        3: `
        <div class="trimester-content">
            <h2 class="trimester-title">🔴 TRIMESTER 3 (28–40 Minggu)</h2>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perubahan Fisik Ibu</div>
                <div class="section-content">
                    <ul>
                        <li>Lelah, tidak nyaman, sulit tidur.</li>
                        <li>Sering buang air kecil, kaki bengkak.</li>
                        <li>Berat badan naik 4–8 kg.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Perkembangan Janin</div>
                <div class="section-content">
                    <ul>
                        <li>Tumbuh dari sebesar pepaya hingga semangka (48 cm, 2500–3999 gram).</li>
                        <li>Organ bayi siap untuk kelahiran.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section">
                <div class="section-title" data-icon="✅">Hal yang Harus Dilakukan</div>
                <div class="section-content">
                    <ul>
                        <li>Periksa kehamilan minimal 3 kali, salah satunya oleh dokter.</li>
                        <li>Pelajari tanda-tanda awal melahirkan: lendir darah, kontraksi teratur.</li>
                        <li>Persiapan persalinan: dokumen, pendamping, transportasi, donor darah.</li>
                        <li>Pelajari IMD (Inisiasi Menyusu Dini) dan ASI eksklusif.</li>
                        <li>Diskusikan KB pasca persalinan.</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section danger-section">
                <div class="section-title" data-icon="⚠️">Tanda Bahaya</div>
                <div class="section-content">
                    <ul>
                        <li>Pusing berat, perdarahan hebat.</li>
                        <li>Kontraksi disertai nyeri hebat.</li>
                        <li>Ketuban pecah tapi tidak ada kontraksi.</li>
                        <li>Gerakan janin berkurang (&lt;10x dalam 12 jam).</li>
                    </ul>
                </div>
            </div>
            <div class="trimester-section notes-section">
                <div class="section-title" data-icon="📌">Catatan Umum</div>
                <div class="section-content">
                    <ul>
                        <li>Periksa kehamilan minimal 6 kali sepanjang kehamilan.</li>
                        <li>Pantau tanda bahaya setiap minggu.</li>
                        <li>Kelas ibu hamil disarankan diikuti minimal 1 kali bersama suami.</li>
                        <li>Jaga kesehatan jiwa, tidur cukup, hindari stres berlebihan.</li>
                        <li>Dukungan dari pasangan dan keluarga sangat penting.</li>
                    </ul>
                </div>
            </div>
        </div>`
    };

    modalContent.innerHTML = data[trimester];
}

// Tutup modal
function closeModal() {
    document.getElementById('trimesterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
window.onclick = function (e) {
    if (e.target === document.getElementById('trimesterModal')) closeModal();
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// Topic card interaksi
function openTopic(topic) {
    const card = event.currentTarget;
    const progressBar = card.querySelector('.progress-fill');
    progressBar.style.width = '25%';
    setTimeout(() => {
        alert(`Membuka topik: ${topic}`);
    }, 500);
}

// Quiz interaction (versi sederhana)
function selectOption(option) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
}

function nextQuestion() {
    const selectedOption = document.querySelector('.quiz-option.selected');
    if (!selectedOption) {
        alert('Silakan pilih jawaban terlebih dahulu!');
        return;
    }
    alert('Jawaban Anda telah disimpan!');
}

// Tips harian rotasi
const tips = [
    {
        title: "Tips Hari Ini",
        content: "Hidrasi adalah kunci! Minumlah 8-10 gelas air setiap hari untuk menjaga kesehatan ibu dan janin."
    },
    {
        title: "Nutrisi Penting",
        content: "Konsumsi makanan kaya asam folat seperti sayuran hijau, kacang-kacangan, dan buah jeruk."
    },
    {
        title: "Aktivitas Fisik",
        content: "Lakukan jalan santai 30 menit setiap hari untuk menjaga kebugaran selama kehamilan."
    },
    {
        title: "Istirahat Cukup",
        content: "Tidur 7-9 jam setiap malam penting untuk kesehatan ibu dan perkembangan janin."
    }
];

function rotateTips() {
    const tipContent = document.querySelector('.tip-content');
    const tipHeader = document.querySelector('.tip-header h4');
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    tipHeader.textContent = randomTip.title;
    tipContent.innerHTML = `<p><strong>${randomTip.content.split('!')[0]}!</strong> ${randomTip.content.split('!')[1]}</p>`;
}

// Init script
document.addEventListener('DOMContentLoaded', function () {
    animateOnScroll();
    setInterval(rotateTips, 10000);
});
