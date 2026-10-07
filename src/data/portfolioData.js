export const portfolioData = {
  personal: {
    name: "Muhammad Dimas Rafi",
    shortName: "Dimas",
    title: "Fullstack Developer (Coding + AI)",
    subtitle: "Fullstack Developer combining robust engineering foundations with modern AI workflows to build scalable, high-impact web applications.",
    location: "Kota Bekasi, Indonesia",
    status: "Available for projects & full-time roles",
    bio: "Hello there! I'm Muhammad Dimas Rafi, a Fullstack Developer who unites solid coding principles with modern AI-assisted engineering. From designing resilient backend architectures to crafting fast, intuitive frontend experiences, I build reliable digital solutions. By integrating modern AI workflows into real-world software engineering, I streamline iteration, maintain clean code standards, and deliver impactful results.",
    whatsapp: "6282130869378",
    email: "m.dimas.rafi12@gmail.com",
    cvUrl: "https://drive.google.com/file/d/1gZgR6Z1CTFtGEqpPe_MnkI9qEv-A8pMh/view?usp=sharing",
    socials: [
      { name: "GitHub", url: "https://github.com/DimassRfyy", icon: "Github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-dimas-rafi", icon: "Linkedin" },
      { name: "Instagram", url: "https://www.instagram.com/dimass_rfyy/", icon: "Instagram" },
      { name: "WhatsApp", url: "https://wa.me/6282130869378", icon: "MessageSquare" }
    ],
    stats: [
      { label: "Repositories on GitHub", value: "30+" },
      { label: "Production & Internships", value: "5+" },
      { label: "Core Mindset", value: "Coding + AI" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: "Advanced", icon: "/images/icon/react.svg", highlight: "Hooks, SPA, State" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "/images/icon/javascript.svg", highlight: "Async/Await, DOM" },
        { name: "TypeScript", level: "Intermediate", icon: "/images/icon/typescript.png", highlight: "Type Safety, Generics" },
        { name: "Tailwind CSS", level: "Advanced", icon: "/images/icon/tailwindcss.svg", highlight: "Responsive, Design Systems" },
        { name: "HTML5 & Semantic", level: "Expert", icon: "/images/icon/html.svg", highlight: "SEO, Accessibility" },
        { name: "CSS3 & SASS", level: "Advanced", icon: "/images/icon/css.svg", highlight: "Animations, Layouts" },
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Laravel", level: "Advanced", icon: "/images/icon/laravel-svgrepo-com.svg", highlight: "MVC, Eloquent, Blade" },
        { name: "RESTful APIs", level: "Advanced", icon: null, highlight: "JSON, JWT, Sanctum" },
        { name: "MySQL / MariaDB", level: "Advanced", icon: null, highlight: "Relations, Optimization" },
        { name: "PHP", level: "Advanced", icon: null, highlight: "OOP, Clean Code" },
      ]
    },
    {
      category: "DevOps & AI Tools",
      items: [
        { name: "AI Coding & LLM Workflows", level: "Advanced", icon: null, highlight: "AI-Assisted Eng, Code Verification" },
        { name: "Git & GitHub", level: "Advanced", icon: "/images/icon/git.svg", highlight: "CI/CD, Workflows" },
        { name: "Docker", level: "Intermediate", icon: "/images/icon/docker.png", highlight: "Containers, Environments" },
        { name: "Postman", level: "Advanced", icon: null, highlight: "API Testing, Mocking" },
        { name: "Figma to Code", level: "Advanced", icon: null, highlight: "Pixel Perfection, Tokens" },
      ]
    }
  ],

  projects: [
    {
      id: "salonkita-lms",
      title: "Salonkita LMS Platform",
      category: "Frontend",
      description: "Platform Learning Management System (LMS) interaktif untuk pelatihan beauty profesional daring, menyajikan katalog kelas, sistem mentor & coach, modul pembelajaran terstruktur, dan sertifikat digital.",
      image: "/images/salonkita_lms.png",
      tags: ["Tailwind CSS", "HTML5", "JavaScript", "LMS Platform", "Responsive UI"],
      liveUrl: "https://salonkita.net",
      featured: true,
      color: "block-pink",
      highlights: [
        "Katalog kelas edukasi kecantikan interaktif dengan navigasi mentor & coach",
        "Tampilan antarmuka modern, bersih, dan responsif menggunakan Tailwind CSS",
        "Akses modul pembelajaran fleksibel dan informasi program sertifikasi resmi",
        "Platform live production yang melayani peserta pelatihan di salonkita.net"
      ]
    },
    {
      id: "winnipos",
      title: "Winni POS (Point of Sales)",
      category: "Fullstack",
      description: "Comprehensive website-based Point of Sales application featuring menu management, employee role management, live cashier checkout, thermal receipt printing, and daily/monthly revenue analytics.",
      image: "/images/winnipos.png",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js"],
      liveUrl: "https://winnipos.web.id",
      githubUrl: "https://github.com/DimassRfyy",
      featured: true,
      color: "block-lime",
      highlights: [
        "Real-time cashier checkout & order calculation",
        "Automated thermal receipt formatting & printing",
        "Role-based access control for cashiers and managers",
        "Interactive revenue statistics and stock monitoring"
      ]
    },
    {
      id: "e-staycation",
      title: "E-Staycation",
      category: "Fullstack",
      description: "Full-featured vacation and hotel room reservation web platform with interactive room availability, reservation management, amenities showcase, and customer booking portal.",
      image: "/images/e-staycation.jpeg",
      tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "Blade"],
      githubUrl: "https://github.com/DimassRfyy/E-Staycation",
      featured: true,
      color: "block-lilac",
      highlights: [
        "Multi-room booking and date range availability engine",
        "Dynamic hotel amenities and destination showcase",
        "Admin panel for room pricing, photos, and guest logs",
        "Mobile-optimized customer booking journey"
      ]
    },
    {
      id: "koskita",
      title: "KosKita Marketplace",
      category: "Fullstack",
      description: "Modern boarding house (kost) rental platform seamlessly integrated with Midtrans payment gateway, room filtering by location, automated billing, and tenant dashboard.",
      image: "/images/koskita.jpeg",
      tags: ["Laravel", "Midtrans Payment", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/DimassRfyy/KosKita",
      featured: true,
      color: "block-coral",
      highlights: [
        "Integrated Midtrans Payment Gateway (Virtual Account, QRIS, e-Wallet)",
        "Advanced filter by room facilities, location, and price tier",
        "Automated monthly invoice generation and verification",
        "Responsive tenant-to-owner messaging interface"
      ]
    },
    {
      id: "growhabit",
      title: "GrowHabit Tracking App",
      category: "Frontend",
      description: "Productivity and habit tracker application helping users build sustainable daily routines with streak tracking, visual milestone completion, and goal analytics.",
      image: "/images/growhabit.png",
      tags: ["React.js", "Tailwind CSS", "Local Storage", "Framer Motion"],
      githubUrl: "https://github.com/DimassRfyy",
      featured: false,
      color: "block-mint",
      highlights: [
        "Daily streak calculations and gamification rewards",
        "Customizable habit frequencies and reminders",
        "Smooth interactive micro-animations on task completion"
      ]
    }
  ],

  certificates: [
    {
      id: "bnsp-web-programmer",
      title: "Junior Web Programmer (BNSP)",
      issuer: "BNSP",
      date: "Certified 2025",
      image: "/images/Sertifikat Kompetensi Web Programmer.png",
      description: "Sertifikasi Kompetensi Nasional resmi Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Universitas Siliwangi pada kualifikasi Junior Web Programmer.",
      badge: "BNSP Certified"
    },
    {
      id: "magang-kominfo",
      title: "Diskominfo Jawa Timur",
      issuer: "Diskominfo Provinsi Jawa Timur",
      date: "Certified 2026",
      image: "/images/sertif-kominfo.jpg",
      description: "Sertifikat resmi penyelesaian Program Magang Bidang Aplikasi Informatika di Dinas Komunikasi dan Informatika Jawa Timur pada proyek Majadigi dengan predikat BAIK.",
      badge: "Diskominfo Jatim"
    },
    {
      id: "rakamin",
      title: "Fullstack Web Development",
      issuer: "Rakamin Academy",
      date: "Certified 2023",
      image: "/images/rakamin-certificate.png",
      description: "Intensive training program covering modern web development, database modeling, RESTful API design, and team collaboration workflows.",
      badge: "Bootcamp Verified"
    },
    {
      id: "sertif3",
      title: "Software Development Competency",
      issuer: "Udemy",
      date: "Certified 2024",
      image: "/images/sertif3.jpg",
      description: "Demonstrated skills in practical algorithmic problem solving, web application lifecycle, and professional engineering practice.",
      badge: "Academic Honor"
    }
  ],

  experiences: [
    {
      role: "Web Specialist",
      organization: "salonkita®️",
      period: "Apr 2025 — Saat ini",
      location: "Indonesia · Magang",
      website: "",
      linkedin: "https://www.linkedin.com/in/muhammad-dimas-rafi-8b221b33a/",
      description: "Web Specialist pada platform salonkita®️, bertanggung jawab dalam pengembangan dan pemeliharaan antarmuka web, memastikan tampilan responsif, modern, dan performa optimal.",
      responsibilities: [
        "Mengembangkan dan merancang tata letak antarmuka web yang responsif menggunakan HTML dan Tailwind CSS.",
        "Memelihara konsistensi desain sistem antarmuka serta meningkatkan pengalaman pengguna (UX) secara menyeluruh.",
        "Mengoptimalkan performa halaman web untuk aksesibilitas dan kecepatan muat lintas berbagai peramban & perangkat."
      ],
      tags: ["HTML", "Tailwind CSS", "Frontend", "UI/UX", "Web Specialist"]
    },
    {
      role: "Mobile Developer Intern",
      organization: "Diskominfo Jawa Timur",
      period: "Agt 2025 — Jan 2026",
      location: "Malang, Jawa Timur, ID",
      website: "https://kominfo.jatimprov.go.id",
      linkedin: "https://www.linkedin.com/in/muhammad-dimas-rafi",
      description: "Mobile Developer Intern pada proyek Majadigi dengan penempatan di Dinas Komunikasi dan Informatika Jawa Timur, berkontribusi dalam pengembangan aplikasi layanan publik dan kolaborasi tim profesional.",
      responsibilities: [
        "Berkontribusi dalam pengembangan aplikasi mobile layanan publik Majadigi untuk memudahkan akses warga Jawa Timur.",
        "Berkolaborasi dengan tim profesional, engineer, dan instansi pemerintahan dalam implementasi kebutuhan aplikasi.",
        "Mengintegrasikan endpoint REST API layanan publik serta memastikan kestabilan dan keamanan alur data aplikasi.",
        "Menyelesaikan program magang di Bidang Aplikasi Informatika dengan predikat resmi BAIK."
      ],
      tags: ["Mobile Development", "Majadigi", "Public Services", "REST APIs", "Team Collaboration"]
    },
    {
      role: "Laravel Developer Intern",
      organization: "PT. Winnicode Garuda Indonesia",
      period: "Jan 2025 — Jun 2025",
      location: "Bandung, Jawa Barat, ID · Jarak Jauh",
      website: "https://winnicode.com",
      linkedin: "https://www.linkedin.com/in/muhammad-dimas-rafi",
      description: "Fullstack Developer pada proyek portal berita berbasis Laravel, terlibat dalam pengembangan aplikasi dari perancangan hingga pengujian.",
      responsibilities: [
        "Membangun arsitektur backend, manajemen database MySQL, dan endpoint API portal berita menggunakan Laravel.",
        "Mengembangkan fitur komprehensif termasuk manajemen artikel, kategori berita, otentikasi peran, dan dashboard redaksi.",
        "Melakukan pengujian fitur (testing) dan optimasi query untuk memastikan kecepatan akses portal berita.",
        "Bekerja secara jarak jauh (remote) dengan standar kontrol versi Git dan kolaborasi agile tim profesional."
      ],
      tags: ["Laravel", "PHP", "MySQL", "News Portal", "REST APIs", "Remote Work"]
    },
    {
      role: "Fullstack Program Participant",
      organization: "Rakamin Academy",
      period: "2023",
      location: "Jakarta (Remote), ID",
      website: "https://rakamin.com",
      linkedin: "https://www.linkedin.com/company/rakamin-academy/",
      description: "Completed intensive fullstack web development bootcamp covering modern web technologies, agile teamwork, and real-case enterprise problem solving.",
      responsibilities: [
        "Mastered fullstack web engineering principles and API design standards.",
        "Implemented real-world problem sets under guidance of industry tech mentors.",
        "Practiced collaborative Git workflows and Agile sprint planning."
      ],
      tags: ["Fullstack Bootcamp", "REST APIs", "Agile", "Version Control"]
    }
  ]
};
