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

    setTimeout(() => {
        const sections = modalContent.querySelectorAll('.trimester-section');
        sections.forEach((sec, i) => {
            setTimeout(() => {
                sec.classList.add('visible');
            }, i * 200);
        });
    }, 100);
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

document.addEventListener('DOMContentLoaded', function() {
            // Remove loading class after page loads
            setTimeout(() => {
                document.querySelectorAll('.loading').forEach(el => {
                    el.classList.remove('loading');
                });
            }, 100);

            // Enhanced dropdown functionality
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    let hoverTimeout;
                    
                    item.addEventListener('mouseenter', () => {
                        clearTimeout(hoverTimeout);
                        dropdown.style.opacity = '1';
                        dropdown.style.visibility = 'visible';
                        dropdown.style.transform = 'translateY(0)';
                    });
                    
                    item.addEventListener('mouseleave', () => {
                        hoverTimeout = setTimeout(() => {
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            dropdown.style.transform = 'translateY(-10px)';
                        }, 100);
                    });
                }
            });

            // Enhanced card hover effects
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.05)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Parallax effect for floating shapes
            window.addEventListener('mousemove', (e) => {
                const shapes = document.querySelectorAll('.shape');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.5;
                    const xOffset = (x - 0.5) * speed * 20;
                    const yOffset = (y - 0.5) * speed * 20;
                    
                    shape.style.transform += ` translate(${xOffset}px, ${yOffset}px)`;
                });
            });

            // Intersection Observer for fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document.querySelectorAll('.card, .article-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        });

        // Service Worker Registration
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js")
                .then(() => console.log("Service Worker Registered"))
                .catch(error => console.error("Service Worker Failed", error));
        }

const asiQuestions = [
    {
        question: "🤱 Berapa lama ASI eksklusif diberikan?",
        options: ["Sampai 4 bulan", "Sampai 6 bulan", "Sampai 8 bulan", "Sampai 1 tahun"],
        answer: 1
    },
    {
        question: "🧠 Kandungan ASI penting untuk otak adalah?",
        options: ["Protein dan kalsium", "Vitamin C dan zat besi", "DHA dan ARA", "Laktosa dan lemak"],
        answer: 2
    },
    {
        question: "🛡️ ASI pertama yang keluar setelah melahirkan disebut?",
        options: ["Kolostrum", "Foremilk", "Hindmilk", "Mature milk"],
        answer: 0
    },
    {
        question: "❤️ Manfaat ASI jangka panjang adalah?",
        options: ["Membuat bayi lebih cerdas saja", "Hanya melindungi dari diare", "Mengurangi berat badan ibu", "Mengurangi risiko obesitas dan diabetes"],
        answer: 3
    },
    {
        question: "🧬 Antibodi dalam ASI yang melindungi bayi adalah?",
        options: ["Immunoglobulin G (IgG)", "Immunoglobulin A (IgA)", "Immunoglobulin M (IgM)", "Immunoglobulin E (IgE)"],
        answer: 1
    }
];

let asiQuizIndex = 0;

function renderAsiQuestion() {
    const container = document.getElementById("asi-question-container");
    const q = asiQuestions[asiQuizIndex];

    container.innerHTML = `
        <h3>${q.question}</h3>
        <div class="quiz-options">
            ${q.options.map((opt, i) =>
                `<div class="quiz-option" onclick="selectOption(this, ${i})">${opt}</div>`).join("")}
        </div>
        <button class="btn" onclick="submitAsiAnswer()">Jawab</button>
    `;
}

function selectOption(el, index) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    el.dataset.index = index;
}

function submitAsiAnswer() {
    const selected = document.querySelector('.quiz-option.selected');
    if (!selected) {
        alert("Pilih dulu jawabanmu!");
        return;
    }
    const selectedIndex = parseInt(selected.dataset.index);
    const correctIndex = asiQuestions[asiQuizIndex].answer;

    if (selectedIndex === correctIndex) {
        selected.classList.add("correct");
    } else {
        selected.classList.add("incorrect");
        document.querySelectorAll(".quiz-option")[correctIndex].classList.add("correct");
    }

    setTimeout(() => {
        asiQuizIndex++;
        if (asiQuizIndex < asiQuestions.length) {
            renderAsiQuestion();
        } else {
            document.getElementById("asi-question-container").innerHTML = `
                <h3>🎉 Kuis selesai!</h3>
                <p>Terima kasih sudah menjawab semua pertanyaan tentang ASI!</p>
            `;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("asi-question-container")) {
        renderAsiQuestion();
    }
});

const suforQuestions = [
    {
        question: "🎯 Mengapa ASI disebut 'makanan hidup'?",
        options: [
            "Karena berasal dari makhluk hidup",
            "Karena mengandung sel hidup dan antibodi",
            "Karena mudah basi",
            "Karena selalu hangat"
        ],
        answer: 1
    },
    {
        question: "🧬 Apa keunggulan utama ASI dalam hal imunitas?",
        options: [
            "ASI mengandung lebih banyak vitamin",
            "ASI lebih mudah dicerna",
            "ASI mengandung immunoglobulin dan antibodi alami",
            "ASI selalu dalam suhu yang tepat"
        ],
        answer: 2
    },
    {
        question: "💰 Penghematan per bulan dengan ASI eksklusif?",
        options: [
            "Rp 100.000 - 200.000",
            "Rp 300.000 - 500.000",
            "Rp 50.000 - 100.000",
            "Tidak ada penghematan signifikan"
        ],
        answer: 1
    },
    {
        question: "🍼 Kapan susu formula bisa dipertimbangkan?",
        options: [
            "Ketika ibu memiliki kondisi medis tertentu",
            "Ketika bayi sering menangis",
            "Ketika ASI terasa kurang",
            "Ketika bayi berusia 3 bulan"
        ],
        answer: 0
    },
    {
        question: "⚡ Apa itu komposisi ASI yang 'dinamis'?",
        options: [
            "ASI berubah warna setiap hari",
            "ASI memiliki rasa yang berbeda-beda",
            "ASI mengandung banyak vitamin",
            "Komposisi menyesuaikan kebutuhan bayi"
        ],
        answer: 3
    }
];

let suforQuizIndex = 0;


function renderSuforQuestion() {
    const container = document.getElementById("sufor-quiz-container");
    const q = suforQuestions[suforQuizIndex];

    container.innerHTML = `
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <div class="quiz-option" onclick="selectSuforOption(this, ${i})">${opt}</div>
            `).join("")}
        </div>
        <button class="btn" onclick="submitSuforAnswer()">Jawab</button>
    `;
}

function selectSuforOption(el, index) {
    document.querySelectorAll('#sufor-quiz-container .quiz-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    el.dataset.index = index;
}

function submitSuforAnswer() {
    const selected = document.querySelector('#sufor-quiz-container .quiz-option.selected');
    if (!selected) {
        alert("Pilih dulu jawabanmu!");
        return;
    }

    const selectedIndex = parseInt(selected.dataset.index);
    const correctIndex = suforQuestions[suforQuizIndex].answer;

    if (selectedIndex === correctIndex) {
        selected.classList.add("correct");
    } else {
        selected.classList.add("incorrect");
        document.querySelectorAll("#sufor-quiz-container .quiz-option")[correctIndex].classList.add("correct");
    }

    setTimeout(() => {
        suforQuizIndex++;
        if (suforQuizIndex < suforQuestions.length) {
            renderSuforQuestion();
        } else {
            document.getElementById("sufor-quiz-container").innerHTML = `
                <h3>🎉 Kuis selesai!</h3>
                <p>Terima kasih sudah menjawab semua pertanyaan tentang ASI vs Sufor!</p>
            `;
        }
    }, 1000);
}

if (document.getElementById("sufor-quiz-container")) {
    renderSuforQuestion();
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            const rect = dropdown.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            if (rect.right > windowWidth) {
                // Kalau keluar layar, flip ke kiri
                dropdown.style.left = 'auto';
                dropdown.style.right = '0';
                dropdown.style.transformOrigin = 'top right';
            } else {
                // Normal, tetap ke kiri
                dropdown.style.left = '0';
                dropdown.style.right = 'auto';
                dropdown.style.transformOrigin = 'top left';
            }
        }
    });
});

document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      const parent = this.parentElement;

      // Tutup dropdown lain
      document.querySelectorAll('.has-dropdown').forEach(item => {
        if (item !== parent) item.classList.remove('open');
      });

      // Buka dropdown ini
      parent.classList.add('open');
    }
  });
});

document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // cegah lompat halaman
        const parent = this.parentElement;

        // Toggle .open
        parent.classList.toggle('open');
      }
    });
  });

  // Opsional: klik di luar nutup dropdown
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-dropdown').forEach(item => {
      if (!item.contains(e.target)) {
        item.classList.remove('open');
      }
    });
  });
