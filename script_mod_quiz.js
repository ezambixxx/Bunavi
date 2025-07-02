// ===============================
// SCRIPT MOD QUIZ GABUNGAN LENGKAP - FIXED
// ===============================

// ===============================
// ANIMASI DAN TIPS HARIAN
// ===============================
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
}

const tips = [
    { title: "Tips Hari Ini", content: "Hidrasi adalah kunci! Minumlah 8-10 gelas air setiap hari untuk menjaga kesehatan ibu dan janin." },
    { title: "Nutrisi Penting", content: "Konsumsi makanan kaya asam folat seperti sayuran hijau, kacang-kacangan, dan buah jeruk." },
    { title: "Aktivitas Fisik", content: "Lakukan jalan santai 30 menit setiap hari untuk menjaga kebugaran selama kehamilan." },
    { title: "Istirahat Cukup", content: "Tidur 7-9 jam setiap malam penting untuk kesehatan ibu dan perkembangan janin." }
];

function rotateTips() {
    const tipContent = document.querySelector('.tip-content');
    const tipHeader = document.querySelector('.tip-header h4');
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    tipHeader.textContent = randomTip.title;
    tipContent.innerHTML = `<p><strong>${randomTip.content.split('!')[0]}!</strong> ${randomTip.content.split('!')[1]}</p>`;
}

// ===============================
// MODAL TRIMESTER (LENGKAP DENGAN ANIMASI)
// ===============================
function selectTrimester(trimester) {
    document.querySelectorAll('.trimester').forEach(t => t.classList.remove('active'));
    const selected = document.querySelector(`.trimester-${trimester}`);
    selected.classList.add('active');

    const modal = document.getElementById('trimesterModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.parentElement.classList.remove('modal-trimester-1', 'modal-trimester-2', 'modal-trimester-3');
    modalContent.parentElement.classList.add(`modal-trimester-${trimester}`);

    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';

    const data = {
        1: `
        <div class="trimester-content">
            <h2 class="trimester-title">TRIMESTER 1 (0–13 Minggu)</h2>
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
            <h2 class="trimester-title">TRIMESTER 2 (14–27 Minggu)</h2>
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
            <h2 class="trimester-title">TRIMESTER 3 (28–40 Minggu)</h2>
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

    // Animasi bertahap untuk setiap section
    setTimeout(() => {
        const sections = modalContent.querySelectorAll('.trimester-section');
        sections.forEach((sec, i) => {
            setTimeout(() => {
                sec.classList.add('visible');
            }, i * 200);
        });
    }, 100);
}

function closeModal() {
    document.getElementById('trimesterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners untuk modal
window.onclick = function (e) {
    if (e.target === document.getElementById('trimesterModal')) closeModal();
};

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// ===============================
// TOPIC CARD INTERACTION (DARI VERSI ASLI)
// ===============================
function openTopic(topic) {
    const card = event.currentTarget;
    const progressBar = card.querySelector('.progress-fill');
    
    // Animasi progress bar saat diklik
    progressBar.style.width = '25%';
    progressBar.style.transition = 'width 0.5s ease';
    
    setTimeout(() => {
        // Cek apakah ada quiz untuk topik ini
        if (topicQuizzes[topic]) {
            startTopicQuiz(topic);
        } else {
            alert(`Membuka topik: ${topic}`);
        }
    }, 500);
}

// ===============================
// QUIZ INTERACTION (VERSI SEDERHANA DARI ASLI)
// ===============================
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

// ===============================
// QUIZ TOPIK MODERN (LENGKAP)
// ===============================
const topicQuizzes = {
    nutrition: {
        questions: [
            { q: "Apa nutrisi penting selama kehamilan?", a: ["Protein", "Kalsium", "Zat Besi", "Semua benar"], c: 3 },
            { q: "Berapa gelas air yang disarankan setiap hari?", a: ["5-6 gelas", "8-10 gelas", "10-12 gelas", "12-15 gelas"], c: 1 },
            { q: "Apa contoh makanan sehat untuk ibu hamil?", a: ["Mie instan", "Soda", "Sayur dan buah segar", "Gorengan"], c: 2 },
            { q: "Apa manfaat zat besi untuk ibu hamil?", a: ["Mencegah anemia", "Memperkuat tulang", "Mencegah infeksi", "Meningkatkan energi"], c: 0 },
            { q: "Kapan waktu terbaik ibu hamil sarapan?", a: ["Setelah jam 10", "Sebelum jam 9", "Boleh kapan saja", "Tidak perlu sarapan"], c: 1 }
        ]
    },
    exercise: {
        questions: [
            { q: "Olahraga yang aman untuk ibu hamil?", a: ["Yoga prenatal", "Lari cepat", "Bersepeda gunung", "Angkat beban berat"], c: 0 },
            { q: "Durasi jalan santai yang dianjurkan?", a: ["10 menit", "20-30 menit", "60 menit", "Tidak perlu"], c: 1 },
            { q: "Apa manfaat olahraga saat hamil?", a: ["Menambah stres", "Membantu kualitas tidur", "Menambah berat badan", "Semua salah"], c: 1 },
            { q: "Kapan olahraga sebaiknya dihentikan?", a: ["Merasa lelah ringan", "Sedikit mual", "Terjadi perdarahan", "Setelah makan"], c: 2 },
            { q: "Apa risiko dari olahraga berlebihan saat hamil?", a: ["Kehamilan sehat", "Kelelahan ekstrem", "Janin kuat", "Nafsu makan tinggi"], c: 1 }
        ]
    },
    prenatal: {
        questions: [
            { q: "Berapa kali minimal pemeriksaan kehamilan?", a: ["3 kali", "4 kali", "6 kali", "8 kali"], c: 2 },
            { q: "Kapan pemeriksaan kehamilan pertama dilakukan?", a: ["Setelah 2 bulan hamil", "Segera setelah terlambat haid", "Menjelang melahirkan", "Setelah 3 bulan"], c: 1 },
            { q: "Apa yang diperiksa saat kontrol kehamilan?", a: ["Hanya berat badan", "Tekanan darah dan detak jantung janin", "Hanya USG", "Hanya laboratorium"], c: 1 },
            { q: "Mengapa USG penting selama kehamilan?", a: ["Untuk mengetahui jenis kelamin", "Memantau perkembangan janin", "Untuk foto kenangan", "Semua salah"], c: 1 },
            { q: "Kapan sebaiknya periksa ke dokter kandungan?", a: ["Hanya saat sakit", "Minimal 1x di trimester 3", "Setiap minggu", "Tidak perlu"], c: 1 }
        ]
    },
    symptoms: {
        questions: [
            { q: "Gejala normal di trimester 1?", a: ["Perdarahan hebat", "Mual dan muntah", "Nyeri perut hebat", "Demam tinggi"], c: 1 },
            { q: "Kapan gerakan janin mulai terasa?", a: ["1 bulan", "3 bulan", "5 bulan", "8 bulan"], c: 2 },
            { q: "Tanda bahaya yang harus diwaspadai?", a: ["Mual ringan", "Perdarahan", "Kaki sedikit bengkak", "Sering buang air kecil"], c: 1 },
            { q: "Perubahan emosi saat hamil disebabkan?", a: ["Kurang tidur", "Perubahan hormon", "Terlalu banyak pikiran", "Kurang olahraga"], c: 1 },
            { q: "Apa yang harus dilakukan jika mual berlebihan?", a: ["Tidak makan", "Makan dalam porsi kecil tapi sering", "Minum obat bebas", "Tidur terus"], c: 1 }
        ]
    },
    preparation: {
        questions: [
            { q: "Kapan sebaiknya menyiapkan tas persalinan?", a: ["Trimester 1", "Trimester 2", "Trimester 3", "Saat kontraksi"], c: 2 },
            { q: "Apa yang harus dipersiapkan untuk IMD?", a: ["Susu formula", "Pakaian bayi", "Kontak kulit ibu-bayi", "Botol susu"], c: 2 },
            { q: "Tanda-tanda akan melahirkan?", a: ["Mual muntah", "Kontraksi teratur", "Sakit kepala", "Kaki bengkak"], c: 1 },
            { q: "Apa manfaat kelas ibu hamil?", a: ["Mendapat hadiah", "Belajar teknik persalinan", "Bertemu teman", "Semua benar"], c: 3 },
            { q: "Dokumen penting untuk persalinan?", a: ["KTP dan KK", "Buku KIA", "Kartu BPJS", "Semua benar"], c: 3 }
        ]
    },
    mental: {
        questions: [
            { q: "Cara menjaga kesehatan mental saat hamil?", a: ["Isolasi diri", "Berbagi dengan orang terdekat", "Bekerja terus", "Menahan emosi"], c: 1 },
            { q: "Teknik relaksasi yang disarankan?", a: ["Menonton TV terus", "Latihan pernapasan", "Begadang", "Makan berlebihan"], c: 1 },
            { q: "Berapa jam tidur yang dibutuhkan ibu hamil?", a: ["4-5 jam", "6-7 jam", "8-9 jam", "10-12 jam"], c: 2 },
            { q: "Apa yang harus dilakukan jika merasa cemas berlebihan?", a: ["Diam saja", "Konsultasi dengan tenaga kesehatan", "Minum obat penenang", "Tidak usah dipikirkan"], c: 1 },
            { q: "Dukungan terpenting selama kehamilan?", a: ["Materi", "Keluarga dan pasangan", "Media sosial", "Tetangga"], c: 1 }
        ]
    }
};

// ===============================
// FUNGSI QUIZ TOPIK (DENGAN MODAL)
// ===============================
function startTopicQuiz(topicKey) {
    const topic = topicQuizzes[topicKey];
    if (!topic) return alert("Kuis belum tersedia untuk topik ini.");
    
    let current = 0, score = 0;
    
    // Buat atau gunakan modal untuk quiz
    let modal = document.getElementById('topicModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'topicModal';
        modal.style.cssText = `
            display: none; position: fixed; z-index: 1000; left: 0; top: 0;
            width: 100%; height: 100%; background-color: rgba(0,0,0,0.8);
        `;
        modal.innerHTML = `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        margin: 5% auto; padding: 20px; width: 80%; max-width: 600px; 
                        border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <span onclick="closeTopicModal()" style="color: white; float: right; 
                      font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
                <div id="topicContent"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const container = document.getElementById('topicContent');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    function renderQuestion() {
        const q = topic.questions[current];
        container.innerHTML = `
            <h3 style="color: white; text-align: center; margin-bottom: 20px;">
                Pertanyaan ${current + 1} dari ${topic.questions.length}
            </h3>
            <h4 style="color: white; text-align: center; margin-bottom: 30px;">${q.q}</h4>
            <div class="quiz-options" style="margin: 1rem 0;">
                ${q.a.map((opt, i) => `
                    <div class="quiz-option" data-index="${i}" onclick="selectTopicQuizOption(this)"
                         style="background: rgba(255,255,255,0.1); color: white; padding: 15px; 
                                margin: 10px 0; border-radius: 10px; cursor: pointer; 
                                transition: all 0.3s ease; border: 2px solid transparent;">
                        ${opt}
                    </div>
                `).join("")}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="submitTopicAnswer()" 
                        style="background: #4CAF50; color: white; border: none; 
                               padding: 12px 30px; border-radius: 25px; cursor: pointer; 
                               font-size: 16px; transition: all 0.3s ease;">
                    Jawab
                </button>
            </div>
        `;
        
        // Style untuk hover effect
        const style = document.createElement('style');
        style.textContent = `
            .quiz-option:hover { 
                background: rgba(255,255,255,0.2) !important; 
                transform: translateY(-2px);
            }
            .quiz-option.selected { 
                background: rgba(76, 175, 80, 0.3) !important; 
                border-color: #4CAF50 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Fungsi untuk memilih opsi quiz
    window.selectTopicQuizOption = function(el) {
        document.querySelectorAll(".quiz-option").forEach(opt => {
            opt.classList.remove("selected");
            opt.style.background = "rgba(255,255,255,0.1)";
            opt.style.borderColor = "transparent";
        });
        el.classList.add("selected");
        el.style.background = "rgba(76, 175, 80, 0.3)";
        el.style.borderColor = "#4CAF50";
    };

    // Fungsi untuk submit jawaban
    window.submitTopicAnswer = function() {
        const selected = container.querySelector(".quiz-option.selected");
        if (!selected) return alert("Pilih jawaban terlebih dahulu!");
        
        const idx = parseInt(selected.dataset.index);
        if (idx === topic.questions[current].c) score++;
        
        current++;
        if (current < topic.questions.length) {
            renderQuestion();
        } else {
            showTopicQuizResult();
        }
    };

    function showTopicQuizResult() {
        const percentage = Math.round((score / topic.questions.length) * 100);
        updateTopicProgress(topicKey, percentage);
        
        let resultColor = percentage >= 80 ? '#4CAF50' : percentage >= 60 ? '#FF9800' : '#F44336';
        let resultText = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : 'Keep Learning!';
        
        container.innerHTML = `
            <div style="text-align: center; color: white;">
                <h2 style="color: ${resultColor}; margin-bottom: 20px;">${resultText}</h2>
                <h3 style="margin-bottom: 15px;">Skor Anda: ${score} dari ${topic.questions.length}</h3>
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <p style="font-size: 18px;">Persentase: ${percentage}%</p>
                    <div style="background: rgba(255,255,255,0.2); height: 10px; border-radius: 5px; margin: 10px 0;">
                        <div style="background: ${resultColor}; height: 100%; width: ${percentage}%; 
                                    border-radius: 5px; transition: width 1s ease;"></div>
                    </div>
                </div>
                <p style="margin: 20px 0;">Progress topik ini telah diperbarui!</p>
                <button onclick="closeTopicModal()" 
                        style="background: #2196F3; color: white; border: none; 
                               padding: 12px 30px; border-radius: 25px; cursor: pointer; 
                               font-size: 16px; margin-top: 20px;">
                    Tutup
                </button>
            </div>
        `;
    }

    renderQuestion();
}

// Fungsi untuk menutup modal quiz topik
window.closeTopicModal = function() {
    const modal = document.getElementById('topicModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// ===============================
// PROGRESS MANAGEMENT
// ===============================
function updateTopicProgress(topicKey, percentage) {
    if (!window.topicProgress) window.topicProgress = {};
    window.topicProgress[topicKey] = percentage;

    // Simpan ke localStorage
    localStorage.setItem("topicProgress", JSON.stringify(window.topicProgress));

    updateProgressUI();
}

function updateProgressUI() {
    const progress = window.topicProgress || {};
    document.querySelectorAll('.topic-card').forEach(card => {
        const match = card.getAttribute('onclick')?.match(/openTopic\('([^']+)'\)/);
        if (!match) return;
        const topicKey = match[1];
        const bar = card.querySelector('.progress-fill');
        if (bar && progress[topicKey] != null) {
            const percentage = progress[topicKey];
            bar.style.width = `${percentage}%`;
            bar.style.transition = 'width 0.8s ease';

            // Tambahkan warna berdasarkan persentase
            if (percentage >= 80) {
                bar.style.background = '#4CAF50'; // hijau
            } else if (percentage >= 60) {
                bar.style.background = '#FF9800'; // oranye
            } else if (percentage > 0) {
                bar.style.background = '#f44336'; // merah
            } else {
                bar.style.background = '#ddd'; // abu
            }
        }
    });
}

// ===============================
// INISIALISASI SCRIPT
// ===============================
document.addEventListener('DOMContentLoaded', function () {
    // ✅ Load progress dari localStorage
    const savedProgress = localStorage.getItem("topicProgress");
    if (savedProgress) {
        window.topicProgress = JSON.parse(savedProgress);
    }

    // Inisialisasi semua fungsi
    animateOnScroll();
    updateProgressUI();
    
    // Mulai rotasi tips setiap 10 detik
    setInterval(rotateTips, 10000);
    
    // Jalankan tips pertama kali
    setTimeout(rotateTips, 1000);
    
    console.log('Script Quiz Gabungan Lengkap berhasil dimuat!');
});
