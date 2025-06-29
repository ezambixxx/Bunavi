// Data kuis untuk setiap topik
const topicQuizzes = {
  nutrition: {
    questions: [
      { 
        q: "Apa nutrisi penting selama kehamilan?", 
        a: ["Protein", "Kalsium", "Zat Besi", "Semua benar"], 
        c: 3 
      },
      { 
        q: "Berapa gelas air yang disarankan setiap hari?", 
        a: ["5-6 gelas", "8-10 gelas", "10-12 gelas", "12-15 gelas"], 
        c: 1 
      },
      { 
        q: "Apa contoh makanan sehat untuk ibu hamil?", 
        a: ["Mie instan", "Soda", "Sayur dan buah segar", "Gorengan"], 
        c: 2 
      },
      { 
        q: "Apa manfaat zat besi untuk ibu hamil?", 
        a: ["Mencegah anemia", "Memperkuat tulang", "Mencegah infeksi", "Meningkatkan energi"], 
        c: 0 
      },
      { 
        q: "Kapan waktu terbaik ibu hamil sarapan?", 
        a: ["Setelah jam 10", "Sebelum jam 9", "Boleh kapan saja", "Tidak perlu sarapan"], 
        c: 1 
      }
    ]
  },
  exercise: {
    questions: [
      { 
        q: "Olahraga yang aman untuk ibu hamil?", 
        a: ["Yoga prenatal", "Lari cepat", "Bersepeda gunung", "Angkat beban berat"], 
        c: 0 
      },
      { 
        q: "Durasi jalan santai yang dianjurkan?", 
        a: ["10 menit", "20-30 menit", "60 menit", "Tidak perlu"], 
        c: 1 
      },
      { 
        q: "Apa manfaat olahraga saat hamil?", 
        a: ["Menambah stres", "Membantu kualitas tidur", "Menambah berat badan", "Semua salah"], 
        c: 1 
      },
      { 
        q: "Kapan olahraga sebaiknya dihentikan?", 
        a: ["Merasa lelah ringan", "Sedikit mual", "Terjadi perdarahan", "Setelah makan"], 
        c: 2 
      },
      { 
        q: "Apa risiko dari olahraga berlebihan saat hamil?", 
        a: ["Kehamilan sehat", "Kelelahan ekstrem", "Janin kuat", "Nafsu makan tinggi"], 
        c: 1 
      }
    ]
  },
  prenatal: {
    questions: [
      { 
        q: "Berapa kali minimal pemeriksaan kehamilan?", 
        a: ["3 kali", "4 kali", "6 kali", "8 kali"], 
        c: 2 
      },
      { 
        q: "Kapan pemeriksaan kehamilan pertama dilakukan?", 
        a: ["Setelah 2 bulan hamil", "Segera setelah terlambat haid", "Menjelang melahirkan", "Setelah 3 bulan"], 
        c: 1 
      },
      { 
        q: "Apa yang diperiksa saat kontrol kehamilan?", 
        a: ["Hanya berat badan", "Tekanan darah dan detak jantung janin", "Hanya USG", "Hanya laboratorium"], 
        c: 1 
      },
      { 
        q: "Mengapa USG penting selama kehamilan?", 
        a: ["Untuk mengetahui jenis kelamin", "Memantau perkembangan janin", "Untuk foto kenangan", "Semua salah"], 
        c: 1 
      },
      { 
        q: "Kapan sebaiknya periksa ke dokter kandungan?", 
        a: ["Hanya saat sakit", "Minimal 1x di trimester 3", "Setiap minggu", "Tidak perlu"], 
        c: 1 
      }
    ]
  },
  symptoms: {
    questions: [
      { 
        q: "Gejala normal di trimester 1?", 
        a: ["Perdarahan hebat", "Mual dan muntah", "Nyeri perut hebat", "Demam tinggi"], 
        c: 1 
      },
      { 
        q: "Kapan gerakan janin mulai terasa?", 
        a: ["1 bulan", "3 bulan", "5 bulan", "8 bulan"], 
        c: 2 
      },
      { 
        q: "Tanda bahaya yang harus diwaspadai?", 
        a: ["Mual ringan", "Perdarahan", "Kaki sedikit bengkak", "Sering buang air kecil"], 
        c: 1 
      },
      { 
        q: "Perubahan emosi saat hamil disebabkan?", 
        a: ["Kurang tidur", "Perubahan hormon", "Terlalu banyak pikiran", "Kurang olahraga"], 
        c: 1 
      },
      { 
        q: "Apa yang harus dilakukan jika mual berlebihan?", 
        a: ["Tidak makan", "Makan dalam porsi kecil tapi sering", "Minum obat bebas", "Tidur terus"], 
        c: 1 
      }
    ]
  },
  preparation: {
    questions: [
      { 
        q: "Kapan sebaiknya menyiapkan tas persalinan?", 
        a: ["Trimester 1", "Trimester 2", "Trimester 3", "Saat kontraksi"], 
        c: 2 
      },
      { 
        q: "Apa yang harus dipersiapkan untuk IMD?", 
        a: ["Susu formula", "Pakaian bayi", "Kontak kulit ibu-bayi", "Botol susu"], 
        c: 2 
      },
      { 
        q: "Tanda-tanda akan melahirkan?", 
        a: ["Mual muntah", "Kontraksi teratur", "Sakit kepala", "Kaki bengkak"], 
        c: 1 
      },
      { 
        q: "Apa manfaat kelas ibu hamil?", 
        a: ["Mendapat hadiah", "Belajar teknik persalinan", "Bertemu teman", "Semua benar"], 
        c: 3 
      },
      { 
        q: "Dokumen penting untuk persalinan?", 
        a: ["KTP dan KK", "Buku KIA", "Kartu BPJS", "Semua benar"], 
        c: 3 
      }
    ]
  },
  mental: {
    questions: [
      { 
        q: "Cara menjaga kesehatan mental saat hamil?", 
        a: ["Isolasi diri", "Berbagi dengan orang terdekat", "Bekerja terus", "Menahan emosi"], 
        c: 1 
      },
      { 
        q: "Teknik relaksasi yang disarankan?", 
        a: ["Menonton TV terus", "Latihan pernapasan", "Begadang", "Makan berlebihan"], 
        c: 1 
      },
      { 
        q: "Berapa jam tidur yang dibutuhkan ibu hamil?", 
        a: ["4-5 jam", "6-7 jam", "8-9 jam", "10-12 jam"], 
        c: 2 
      },
      { 
        q: "Apa yang harus dilakukan jika merasa cemas berlebihan?", 
        a: ["Diam saja", "Konsultasi dengan tenaga kesehatan", "Minum obat penenang", "Tidak usah dipikirkan"], 
        c: 1 
      },
      { 
        q: "Dukungan terpenting selama kehamilan?", 
        a: ["Materi", "Keluarga dan pasangan", "Media sosial", "Tetangga"], 
        c: 1 
      }
    ]
  }
};

// Variabel global untuk kuis topik
let currentTopicQuiz = null;
let currentQuestionIndex = 0;
let currentScore = 0;

// Fungsi untuk memulai kuis topik
function startTopicQuiz(topicKey) {
  const topic = topicQuizzes[topicKey];
  if (!topic) {
    alert("Kuis belum tersedia untuk topik ini.");
    return;
  }

  currentTopicQuiz = topicKey;
  currentQuestionIndex = 0;
  currentScore = 0;

  const modal = document.getElementById('topicModal');
  const container = document.getElementById('topicContent');
  
  renderTopicQuestion();
}

// Fungsi untuk menampilkan pertanyaan
function renderTopicQuestion() {
  const topic = topicQuizzes[currentTopicQuiz];
  const question = topic.questions[currentQuestionIndex];
  const container = document.getElementById('topicContent');
  
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = topic.questions.length;
  
  container.innerHTML = `
    <div class="quiz-container" style="color: white; padding: 20px;">
      <div class="quiz-header" style="text-align: center; margin-bottom: 20px;">
        <h3>Kuis: ${getTopicTitle(currentTopicQuiz)}</h3>
        <p>Pertanyaan ${questionNumber} dari ${totalQuestions}</p>
        <div class="quiz-progress" style="background: rgba(255,255,255,0.2); border-radius: 10px; height: 8px; margin: 10px 0;">
          <div class="quiz-progress-fill" style="background: #4CAF50; height: 100%; border-radius: 10px; width: ${(questionNumber/totalQuestions)*100}%;"></div>
        </div>
      </div>
      
      <div class="quiz-question-content">
        <h4 style="margin-bottom: 20px; font-size: 1.2em;">${question.q}</h4>
        <div class="quiz-options" style="display: grid; gap: 10px;">
          ${question.a.map((option, index) => `
            <div class="quiz-option" 
                 data-index="${index}" 
                 onclick="selectTopicQuizOption(this)"
                 style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; cursor: pointer; transition: all 0.3s ease; border: 2px solid transparent;">
              ${option}
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <button class="btn" onclick="submitTopicAnswer()" style="padding: 12px 30px; background: #4CAF50; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
            ${questionNumber === totalQuestions ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Fungsi untuk memilih opsi jawaban
function selectTopicQuizOption(element) {
  // Hapus selection dari semua opsi
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.classList.remove('selected');
    opt.style.border = '2px solid transparent';
    opt.style.background = 'rgba(255,255,255,0.1)';
  });
  
  // Tambahkan selection ke opsi yang dipilih
  element.classList.add('selected');
  element.style.border = '2px solid #4CAF50';
  element.style.background = 'rgba(76, 175, 80, 0.2)';
}

// Fungsi untuk submit jawaban
function submitTopicAnswer() {
  const selectedOption = document.querySelector('.quiz-option.selected');
  
  if (!selectedOption) {
    alert('Silakan pilih jawaban terlebih dahulu!');
    return;
  }
  
  const selectedIndex = parseInt(selectedOption.dataset.index);
  const topic = topicQuizzes[currentTopicQuiz];
  const correctAnswer = topic.questions[currentQuestionIndex].c;
  
  // Cek apakah jawaban benar
  if (selectedIndex === correctAnswer) {
    currentScore++;
  }
  
  currentQuestionIndex++;
  
  // Jika masih ada pertanyaan
  if (currentQuestionIndex < topic.questions.length) {
    renderTopicQuestion();
  } else {
    showTopicQuizResult();
  }
}

// Fungsi untuk menampilkan hasil kuis
function showTopicQuizResult() {
  const topic = topicQuizzes[currentTopicQuiz];
  const totalQuestions = topic.questions.length;
  const percentage = Math.round((currentScore / totalQuestions) * 100);
  const container = document.getElementById('topicContent');
  
  // Simpan progress ke memori (bukan localStorage karena tidak didukung)
  updateTopicProgress(currentTopicQuiz, percentage);
  
  let resultMessage = '';
  let resultColor = '';
  
  if (percentage >= 80) {
    resultMessage = '🎉 Luar biasa! Bunda sangat memahami materi ini!';
    resultColor = '#4CAF50';
  } else if (percentage >= 60) {
    resultMessage = '😊 Bagus! Bunda cukup memahami materi ini.';
    resultColor = '#FF9800';
  } else {
    resultMessage = '📚 Perlu belajar lagi ya, Bunda. Coba ulangi materinya.';
    resultColor = '#f44336';
  }
  
  container.innerHTML = `
    <div class="quiz-result" style="color: white; text-align: center; padding: 30px;">
      <div class="result-circle" style="width: 120px; height: 120px; border-radius: 50%; border: 8px solid ${resultColor}; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">
        ${percentage}%
      </div>
      
      <h3 style="margin-bottom: 15px;">Hasil Kuis Anda</h3>
      <p style="font-size: 18px; margin-bottom: 20px;">Skor: ${currentScore} dari ${totalQuestions}</p>
      <p style="color: ${resultColor}; font-weight: bold; margin-bottom: 30px;">${resultMessage}</p>
      
      <div class="result-actions" style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
        <button class="btn" onclick="restartTopicQuiz()" style="background: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 20px; cursor: pointer;">
          🔄 Ulangi Kuis
        </button>
        <button class="btn" onclick="closeTopicModal()" style="background: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 20px; cursor: pointer;">
          ✅ Selesai
        </button>
      </div>
    </div>
  `;
}

// Fungsi untuk mengulang kuis
function restartTopicQuiz() {
  currentQuestionIndex = 0;
  currentScore = 0;
  renderTopicQuestion();
}

// Fungsi untuk mendapatkan judul topik
function getTopicTitle(topicKey) {
  const titles = {
    nutrition: 'Nutrisi Kehamilan',
    exercise: 'Olahraga & Aktivitas',
    prenatal: 'Pemeriksaan Prenatal',
    symptoms: 'Gejala & Perubahan',
    preparation: 'Persiapan Melahirkan',
    mental: 'Kesehatan Mental'
  };
  return titles[topicKey] || 'Topik';
}

// Variabel untuk menyimpan progress (karena localStorage tidak didukung)
let topicProgress = {};

// Fungsi untuk update progress
function updateTopicProgress(topicKey, percentage) {
  topicProgress[topicKey] = percentage;
  updateProgressUI();
}

// Fungsi untuk update tampilan progress bar
function updateProgressUI() {
  document.querySelectorAll('.topic-card').forEach(card => {
    const onclickAttr = card.getAttribute('onclick');
    if (onclickAttr) {
      const match = onclickAttr.match(/openTopic\('([^']+)'\)/);
      if (match) {
        const topicKey = match[1];
        const progressBar = card.querySelector('.progress-fill');
        if (progressBar) {
          const progress = topicProgress[topicKey] || 0;
          progressBar.style.width = `${progress}%`;
          
          // Tambahkan warna berdasarkan progress
          if (progress >= 80) {
            progressBar.style.background = '#4CAF50';
          } else if (progress >= 60) {
            progressBar.style.background = '#FF9800';
          } else if (progress > 0) {
            progressBar.style.background = '#f44336';
          } else {
            progressBar.style.background = '#ddd';
          }
        }
      }
    }
  });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  updateProgressUI();
});

// CSS tambahan untuk styling kuis (tambahkan ke file CSS)
const additionalCSS = `
.quiz-option:hover {
  background: rgba(255,255,255,0.2) !important;
  transform: translateY(-2px);
}

.quiz-option.selected {
  background: rgba(76, 175, 80, 0.2) !important;
  border: 2px solid #4CAF50 !important;
}

.result-circle {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.quiz-progress-fill {
  transition: width 0.3s ease;
}
`;

// Tambahkan CSS ke head
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);