<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed, reactive } from 'vue';
import { Link } from '@inertiajs/vue3';
import { ArrowRight, Building2, Users2, Briefcase, Award, Shield, MessageCircle, CheckCircle2, Clock, Wrench, HeartHandshake, AlertCircle, Play, Star, Factory } from 'lucide-vue-next';
import AppLayout from '@/Layouts/AppLayout.vue';
import { useAnimation } from '@/composables/useAnimation';
import 'animate.css';
import { useScroll, useParallax } from '@vueuse/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

defineOptions({
  layout: AppLayout,
});

const isDevelopment = ref(import.meta.env.DEV || false);

const stats = [
  {
    label: 'Tahun Pengalaman',
    value: '25+',
    icon: Building2,
    ariaLabel: 'Statistik tahun pengalaman perusahaan',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50/50',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    label: 'Klien Puas',
    value: '500+',
    icon: Users2,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50/50',
    gradient: 'from-orange-600 to-orange-800'
  },
  {
    label: 'Proyek Selesai',
    value: '1000+',
    icon: Briefcase,
    color: 'text-green-600',
    bgColor: 'bg-green-50/50',
    gradient: 'from-green-600 to-green-800'
  },
  {
    label: 'Penghargaan',
    value: '50+',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50/50',
    gradient: 'from-purple-600 to-purple-800'
  },
];

const services = [
  {
    title: 'Konstruksi Residensial',
    description: 'Membangun rumah impian Anda dengan kualitas terbaik dan desain modern.',
    href: '/services/residential',
    icon: Building2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Konstruksi Komersial',
    description: 'Solusi konstruksi untuk gedung perkantoran, retail, dan properti komersial.',
    href: '/services/commercial',
    icon: Briefcase,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Renovasi & Rekonstruksi',
    description: 'Memberikan wajah baru pada bangunan lama dengan sentuhan profesional.',
    href: '/services/renovation',
    icon: Wrench,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'Gedung Perkantoran Modern Jakarta',
    description: 'Pembangunan gedung 20 lantai dengan konsep green building',
    image: '/images/dummy/project-1.jpg',
    category: 'Komersial',
    completionDate: '2023',
    stats: {
      area: '50.000 m²',
      duration: '24 bulan',
      investment: '$50M'
    }
  },
  {
    id: 2,
    title: 'Perumahan Elite BSD',
    description: 'Kompleks perumahan mewah dengan 150 unit rumah',
    image: '/images/dummy/project-2.jpg',
    category: 'Residensial',
    completionDate: '2023',
    stats: {
      area: '20 hektar',
      units: '150 unit',
      investment: '$75M'
    }
  },
  {
    id: 3,
    title: 'Mall Serpong City Center',
    description: 'Pusat perbelanjaan modern 5 lantai',
    image: '/images/dummy/project-3.jpg',
    category: 'Komersial',
    completionDate: '2022',
    stats: {
      area: '100.000 m²',
      tenants: '200+',
      investment: '$100M'
    }
  }
];

const trustIndicators = [
  {
    icon: Shield,
    title: 'Tersertifikasi ISO 9001:2015',
    description: 'Standar internasional untuk sistem manajemen mutu',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: CheckCircle2,
    title: 'Garansi Konstruksi',
    description: 'Jaminan kualitas konstruksi hingga 10 tahun',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Track record 95% proyek selesai sesuai jadwal',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'Teknologi Modern',
    description: 'Menggunakan teknologi dan peralatan konstruksi terkini',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: HeartHandshake,
    title: 'Tim Berpengalaman',
    description: 'Didukung oleh tim profesional dengan pengalaman 20+ tahun',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Shield,
    title: 'Standar Keamanan Tinggi',
    description: 'Menerapkan standar K3 internasional di setiap proyek',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO PT Maju Bersama',
    content: 'Kualitas pengerjaan sangat baik dan tepat waktu. Tim sangat profesional dan komunikatif.',
    image: '/images/dummy/testimonial-1.jpg',
    rating: 5,
    project: 'Gedung Perkantoran Jakarta',
    date: 'Januari 2023'
  },
  {
    id: 2,
    name: 'Linda Wijaya',
    role: 'Direktur PT Metro Property',
    content: 'Hasil konstruksi melampaui ekspektasi kami. Sangat merekomendasikan untuk proyek skala besar.',
    image: '/images/dummy/testimonial-2.jpg',
    rating: 5,
    project: 'Mall Serpong City',
    date: 'Maret 2023'
  }
];

const counterRef = ref(null);
const count = ref(0);
const targetValue = 500;

const { observeElement } = useAnimation();

const heroRef = ref(null);
const statsRef = ref(null);
const servicesRef = ref(null);
const projectsRef = ref(null);
const testimonialsRef = ref(null);

const { y: scrollY } = useScroll(window)
const parallaxRef = ref(null)
const parallax = useParallax(parallaxRef)

onMounted(async () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
        observer.disconnect();
      }
    });
  });

  if (counterRef.value) {
    observer.observe(counterRef.value);
  }

  if (heroRef.value) {
    heroRef.value.classList.add('animate__animated', 'animate__fadeIn');
  }

  const elements = [
    { ref: statsRef.value, animation: 'fade-up' },
    { ref: servicesRef.value, animation: 'fade-up' },
    { ref: projectsRef.value, animation: 'fade-up' },
    { ref: testimonialsRef.value, animation: 'fade-up' }
  ];

  elements.forEach(({ ref, animation }) => {
    if (ref) {
      ref.classList.add('opacity-0');
      observeElement(ref, animation);
    }
  });

  // Hero Section Parallax & Text Animation
  gsap.from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    stagger: 0.2
  })

  gsap.from('.hero-description', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
  })

  // Wait for next DOM update
  await nextTick();

  // Services Section Animation
  const servicesSection = document.querySelector('.services-section');
  const serviceCards = document.querySelectorAll('.service-card');

  if (servicesSection && serviceCards.length) {
    gsap.from(serviceCards, {
      scrollTrigger: {
        trigger: servicesSection,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });
  }

  // Make sure services section has the correct class
  if (servicesRef.value) {
    servicesRef.value.classList.add('services-section');
  }

  // Stats Section Animation
  if (statsRef.value) {
    const statsCards = statsRef.value.querySelectorAll('.stats-card');
    if (statsCards.length) {
      gsap.from(statsCards, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: statsRef.value,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }

  // Projects Reveal Animation
  gsap.utils.toArray('.project-card').forEach((card: any) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })

  // Section Titles Animation
  gsap.utils.toArray('.section-title').forEach((section: any) => {
    if (section) {
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }
  })

  // Stats Section Animation
  const statsGrid = document.querySelector('.grid-cols-2.md\\:grid-cols-4')
  if (statsGrid) {
    gsap.from(statsGrid.children, {
      scrollTrigger: {
        trigger: statsGrid,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        from: 'start',
        amount: 0.5
      },
      ease: 'power3.out'
    })
  }

  // Projects Section Animation
  const projectCards = document.querySelectorAll('.project-card')
  if (projectCards.length) {
    projectCards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 15%',
          scrub: 1
        },
        y: 100,
        opacity: 0.5,
        scale: 0.95,
        duration: 2
      })
    })
  }

  // Testimonials Section Animation
  const testimonialCards = document.querySelectorAll('.testimonial-card')
  if (testimonialCards.length) {
    gsap.from(testimonialCards, {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.3,
        from: 'center'
      },
      ease: 'power3.out'
    })
  }

  // Utility function for section title animations
  const animateSectionTitle = (section: string) => {
    const title = document.querySelector(`${section} h2`);
    const subtitle = document.querySelector(`${section} p`);

    if (title && subtitle) {
      gsap.from([title, subtitle], {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }
  };

  // Animate all section titles
  ['#trust-indicators', '#services', '#featured-projects', '#why-choose-us', '#testimonials', '#social-proof'].forEach(section => {
    animateSectionTitle(section);
  });

  // Trust Indicators Animation
  gsap.from('.trust-indicator-card', {
    scrollTrigger: {
      trigger: '#trust-indicators',
      start: 'top 75%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Services Cards Animation
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '#services',
      start: 'top 75%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Featured Projects Animation
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '#featured-projects',
      start: 'top 75%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Why Choose Us Cards Animation
  gsap.from('.why-choose-card', {
    scrollTrigger: {
      trigger: '#why-choose-us',
      start: 'top 75%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Testimonials Animation
  gsap.from('.testimonial-card', {
    scrollTrigger: {
      trigger: '#testimonials',
      start: 'top 75%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Social Proof Items Animation
  gsap.from('.award-item', {
    scrollTrigger: {
      trigger: '#social-proof',
      start: 'top 75%'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.media-item', {
    scrollTrigger: {
      trigger: '.media-features',
      start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.partner-item', {
    scrollTrigger: {
      trigger: '.partners',
      start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });
});

const animateCounter = () => {
  const duration = 2000;
  const steps = 60;
  const increment = targetValue / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    count.value = Math.round(current);

    if (current >= targetValue) {
      count.value = targetValue;
      clearInterval(timer);
    }
  }, duration / steps);
};

// Add a watch effect for visibility
const isStatsVisible = ref(false);
const { y: statsScrollY } = useScroll(window);

watch(statsScrollY, (newY) => {
  if (statsRef.value) {
    const rect = statsRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    isStatsVisible.value = rect.top < windowHeight && rect.bottom > 0;
  }
});

// Add this after the existing featuredProjects array
const enhancedProjects = [
  {
    id: 1,
    title: 'Gedung Perkantoran Modern Jakarta',
    description: 'Pembangunan gedung 20 lantai dengan konsep green building',
    category: 'Komersial',
    completionDate: '2023',
    beforeAfter: {
      before: '/images/dummy/project-1-before.jpg',
      after: '/images/dummy/project-1-after.jpg'
    },
    challenges: [
      'Lokasi di pusat kota yang padat',
      'Persyaratan green building yang ketat',
      'Timeline konstruksi yang ketat'
    ],
    solutions: [
      'Manajemen logistik just-in-time',
      'Implementasi sistem otomasi gedung',
      'Tim kerja 24/7 dengan shift optimal'
    ],
    results: {
      'Area': '50.000 m²',
      'Timeline': '24 bulan',
      'Efisiensi': '15% lebih cepat',
      'Rating': 'EDGE Certified'
    }
  },
  {
    id: 2,
    title: 'Perumahan Elite BSD',
    description: 'Kompleks perumahan mewah dengan 150 unit rumah',
    category: 'Residensial',
    completionDate: '2023',
    beforeAfter: {
      before: '/images/dummy/project-2-before.jpg',
      after: '/images/dummy/project-2-after.jpg'
    },
    challenges: [
      'Topografi tanah yang berkontur',
      'Sistem drainase kompleks',
      'Standar kualitas premium'
    ],
    solutions: [
      'Cut and fill engineering',
      'Sistem drainase terpadu',
      'Quality control ketat'
    ],
    results: {
      'Area': '20 hektar',
      'Unit': '150 rumah',
      'ROI': '25%',
      'Okupansi': '95%'
    }
  }
];

// Add this after the existing testimonials array
const enhancedTestimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO',
    company: {
      name: 'PT Maju Bersama',
      logo: '/images/dummy/company-1-logo.png'
    },
    content: 'Kualitas pengerjaan sangat baik dan tepat waktu. Tim sangat profesional dan komunikatif.',
    image: '/images/dummy/testimonial-1.jpg',
    project: {
      name: 'Gedung Perkantoran Jakarta',
      value: 'Rp 500M',
      duration: '24 bulan'
    },
    metrics: {
      'Ketepatan Waktu': '98%',
      'Kualitas': '9.5/10',
      'Kepuasan': '100%'
    },
    video: 'https://youtube.com/watch?v=example1'
  },
  {
    id: 2,
    name: 'Linda Wijaya',
    role: 'Direktur',
    company: {
      name: 'PT Metro Property',
      logo: '/images/dummy/company-2-logo.png'
    },
    content: 'Hasil konstruksi melampaui ekspektasi kami. Sangat merekomendasikan untuk proyek skala besar.',
    image: '/images/dummy/testimonial-2.jpg',
    project: {
      name: 'Mall Serpong City',
      value: 'Rp 750M',
      duration: '36 bulan'
    },
    metrics: {
      'Ketepatan Waktu': '95%',
      'Kualitas': '9.8/10',
      'Kepuasan': '100%'
    },
    video: 'https://youtube.com/watch?v=example2'
  }
];

// Add this for the social proof section
const socialProof = {
  awards: [
    {
      title: 'Best Construction Company',
      organization: 'Property Awards 2023',
      image: '/images/dummy/award-1.png'
    },
    {
      title: 'Green Building Excellence',
      organization: 'GBCI Indonesia',
      image: '/images/dummy/award-2.png'
    }
  ],
  mediaFeatures: [
    {
      outlet: 'Kompas',
      logo: '/images/dummy/media-1.png',
      title: 'Inovasi Konstruksi Masa Depan',
      date: 'Dec 2023',
      link: '#'
    },
    {
      outlet: 'Bisnis Indonesia',
      logo: '/images/dummy/media-2.png',
      title: 'Pemimpin Industri Konstruksi',
      date: 'Nov 2023',
      link: '#'
    }
  ],
  partnerships: [
    {
      name: 'PT Steel Indonesia',
      logo: '/images/dummy/partner-1.png',
      since: '2010'
    },
    {
      name: 'Concrete Solutions',
      logo: '/images/dummy/partner-2.png',
      since: '2015'
    }
  ]
};

const constructionServices = reactive([
  {
    id: 1,
    title: 'Konstruksi Residensial Premium',
    description: 'Membangun hunian mewah dengan standar internasional dan teknologi modern',
    icon: Building2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    image: '/dummy/services/residential.jpg',
    categories: [
      {
        name: 'Rumah Mewah',
        features: [
          'Desain arsitektur kontemporer',
          'Smart home system terintegrasi',
          'Material premium Grade-A'
        ]
      },
      {
        name: 'Apartment & Condominium',
        features: [
          'Fasilitas premium',
          'Sistem pengelolaan gedung pintar',
          'Optimasi ruang & efisiensi energi'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Konstruksi Komersial',
    description: 'Solusi konstruksi untuk properti komersial dengan standar internasional',
    icon: Building2,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    image: '/dummy/services/commercial.jpg',
    categories: [
      {
        name: 'Gedung Perkantoran',
        features: [
          'Green building design',
          'Smart building system',
          'Flexible workspace design',
          'Energy efficient solutions',
          'Premium finishing'
        ]
      },
      {
        name: 'Pusat Perbelanjaan',
        features: [
          'Design modern & atraktif',
          'Traffic flow optimization',
          'Digital integration ready',
          'Tenant mix planning'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Konstruksi Industrial',
    description: 'Fasilitas industri modern dengan fokus pada efisiensi dan keamanan',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    image: '/dummy/services/industrial.jpg',
    categories: [
      {
        name: 'Pabrik & Warehouse',
        features: [
          'Layout optimal untuk produksi',
          'Sistem ventilasi industrial',
          'Loading dock modern',
          'Fire safety system'
        ]
      },
      {
        name: 'Data Center',
        features: [
          'Cooling system redundant',
          'Security system tier-4',
          'Power backup system',
          'Raised floor system'
        ]
      }
    ]
  }
]);

const specializedServices = reactive([
  {
    id: 1,
    title: 'Design & Build',
    description: 'Layanan terintegrasi dari konsep hingga konstruksi',
    features: [
      'Konsultasi desain komprehensif',
      'BIM Integration',
      'Value engineering',
      'Fast-track construction'
    ],
    expertise: [
      'Green building design',
      'Smart building integration',
      'Sustainable materials'
    ]
  },
  {
    id: 2,
    title: 'Renovasi & Retrofit',
    description: 'Modernisasi dan peningkatan bangunan existing',
    features: [
      'Structural strengthening',
      'Façade upgrade',
      'MEP system upgrade',
      'Interior renovation'
    ],
    expertise: [
      'Heritage building restoration',
      'Seismic retrofitting',
      'Energy efficiency upgrade'
    ]
  },
  {
    id: 3,
    title: 'Project Management',
    description: 'Manajemen proyek profesional dengan standar internasional',
    features: [
      'Schedule optimization',
      'Cost control',
      'Quality assurance',
      'Risk management'
    ],
    expertise: [
      'PMI certified managers',
      'Lean construction',
      'Agile methodology'
    ]
  }
]);

const productOfferings = reactive([
  {
    id: 1,
    category: 'Precast Concrete',
    products: [
      {
        name: 'Structural Precast',
        specifications: [
          'Grade 40-50 concrete',
          'Custom dimensions',
          'Seismic resistant design'
        ],
        applications: [
          'Column & beam system',
          'Wall panels',
          'Floor slabs'
        ]
      },
      {
        name: 'Architectural Precast',
        specifications: [
          'Custom finishing options',
          'Weather resistant',
          'Various textures'
        ],
        applications: [
          'Façade elements',
          'Decorative panels',
          'Landscape elements'
        ]
      }
    ]
  },
  {
    id: 2,
    category: 'Steel Structures',
    products: [
      {
        name: 'Structural Steel',
        specifications: [
          'JIS/ASTM standard',
          'Hot-dip galvanized',
          'Custom fabrication'
        ],
        applications: [
          'Industrial buildings',
          'High-rise structures',
          'Long-span structures'
        ]
      },
      {
        name: 'Steel Composite',
        specifications: [
          'Fire-rated coating',
          'Composite action design',
          'Custom connections'
        ],
        applications: [
          'Office buildings',
          'Parking structures',
          'Mixed-use buildings'
        ]
      }
    ]
  }
]);
</script>

<template>
  <!-- Hero Section -->
  <section
    ref="heroRef"
    class="relative min-h-screen overflow-hidden"
  >
    <!-- Parallax Background with Overlay -->
    <div
      ref="parallaxRef"
      class="absolute inset-0 z-0"
      :style="{
        transform: `translateY(${scrollY * 0.5}px)`
      }"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-black/60 z-10"></div>
      <img
        src="/images/hero-bg.jpg"
        alt="Construction Background"
        class="h-full w-full object-cover scale-110"
      />
    </div>

    <!-- Hero Content -->
    <div class="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center">
      <div class="w-full lg:w-2/3">
        <h1 class="hero-title font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          <span class="block">Membangun</span>
          <span class="block">Masa Depan Yang</span>
          <span class="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Lebih Baik
          </span>
        </h1>
        <p class="hero-description mt-8 text-xl leading-relaxed text-gray-200 max-w-2xl">
          25+ tahun pengalaman dalam industri konstruksi, menghadirkan solusi inovatif dan berkelanjutan untuk setiap proyek Anda.
        </p>
        <div class="mt-12 flex flex-col sm:flex-row gap-6">
          <Link
            href="/quote"
            class="group inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-500 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20"
          >
            Minta Penawaran
            <ArrowRight class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            class="group inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10"
          >
            Lihat Portfolio
          </Link>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Indicators -->
  <section id="trust-indicators" class="bg-white py-20 dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="indicator in trustIndicators"
          :key="indicator.title"
          class="group rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
        >
          <component
            :is="indicator.icon"
            :class="`h-14 w-14 ${indicator.color} transition-transform duration-300 group-hover:scale-110`"
          />
          <h3 class="mt-6 font-montserrat text-xl font-bold text-gray-900 dark:text-white">
            {{ indicator.title }}
          </h3>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            {{ indicator.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="bg-gray-50 py-24 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Main Services Header -->
      <div class="text-center mb-16">
        <h2 class="font-montserrat text-4xl font-bold text-blue-900 dark:text-white">Layanan Konstruksi</h2>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">Solusi konstruksi komprehensif untuk setiap kebutuhan Anda</p>
      </div>

      <!-- Main Construction Services -->
      <div class="grid gap-12 lg:grid-cols-3">
        <div v-for="service in constructionServices" :key="service.id"
             class="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
          <!-- Service Image -->
          <div class="relative h-64 overflow-hidden">
            <img :src="service.image" :alt="service.title"
                 class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>

          <!-- Service Content -->
          <div class="relative p-8">
            <component :is="service.icon" :class="`h-12 w-12 ${service.color}`" />
            <h3 class="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{{ service.title }}</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-400">{{ service.description }}</p>

            <!-- Categories -->
            <div class="mt-6 space-y-6">
              <div v-for="category in service.categories" :key="category.name"
                   class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ category.name }}</h4>

                <!-- Key Features Only -->
                <ul class="mt-3 space-y-2">
                  <li v-for="feature in category.features.slice(0, 3)" :key="feature"
                      class="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle2 class="mr-2 h-4 w-4 text-green-500" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="mt-6 grid grid-cols-2 gap-4">
              <Link :href="`/services/${service.id}`"
                    class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                Detail Layanan
                <ArrowRight class="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact"
                    class="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400">
                Konsultasi
                <MessageCircle class="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <!-- Specialized Services -->
      <div class="mt-24">
        <h3 class="text-center text-3xl font-bold text-gray-900 dark:text-white mb-12">Layanan Spesialis</h3>
        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="service in specializedServices" :key="service.id"
               class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ service.title }}</h4>
            <p class="mt-2 text-gray-600 dark:text-gray-400">{{ service.description }}</p>

            <!-- Features -->
            <div class="mt-4">
              <h5 class="font-semibold text-gray-900 dark:text-white">Fitur Utama:</h5>
              <ul class="mt-2 space-y-2">
                <li v-for="feature in service.features" :key="feature"
                    class="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle2 class="mr-2 h-4 w-4 text-green-500" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Expertise -->
            <div class="mt-4">
              <h5 class="font-semibold text-gray-900 dark:text-white">Keahlian Khusus:</h5>
              <ul class="mt-2 space-y-2">
                <li v-for="expertise in service.expertise" :key="expertise"
                    class="flex items-center text-gray-600 dark:text-gray-300">
                  <Star class="mr-2 h-4 w-4 text-yellow-500" />
                  {{ expertise }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Offerings -->
      <div class="mt-24">
        <h3 class="text-center text-3xl font-bold text-gray-900 dark:text-white mb-12">Produk Konstruksi</h3>
        <div class="grid gap-8 lg:grid-cols-2">
          <div v-for="category in productOfferings" :key="category.id"
               class="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ category.category }}</h4>

            <div class="mt-4 space-y-6">
              <div v-for="product in category.products" :key="product.name"
                   class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h5 class="font-semibold text-gray-900 dark:text-white">{{ product.name }}</h5>

                <!-- Specifications -->
                <div class="mt-3">
                  <h6 class="text-sm font-medium text-gray-700 dark:text-gray-300">Spesifikasi:</h6>
                  <ul class="mt-1 space-y-1">
                    <li v-for="spec in product.specifications" :key="spec"
                        class="text-sm text-gray-600 dark:text-gray-400">
                      • {{ spec }}
                    </li>
                  </ul>
                </div>

                <!-- Applications -->
                <div class="mt-3">
                  <h6 class="text-sm font-medium text-gray-700 dark:text-gray-300">Aplikasi:</h6>
                  <ul class="mt-1 space-y-1">
                    <li v-for="app in product.applications" :key="app"
                        class="text-sm text-gray-600 dark:text-gray-400">
                      • {{ app }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Featured Projects Section -->
  <section id="featured-projects" class="bg-gray-50 py-24 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-montserrat text-4xl font-bold text-blue-900 dark:text-white">Proyek Unggulan</h2>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">Portofolio proyek-proyek prestisius yang telah kami selesaikan</p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div v-for="project in enhancedProjects" :key="project.id"
             class="group relative rounded-2xl overflow-hidden bg-white shadow-xl dark:bg-gray-800">
          <!-- Before/After Comparison -->
          <div class="relative h-80 overflow-hidden">
            <div class="absolute inset-0 transition-transform duration-700 group-hover:opacity-0">
              <img :src="project.beforeAfter.after" :alt="`${project.title} - After`"
                   class="h-full w-full object-cover" />
            </div>
            <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <img :src="project.beforeAfter.before" :alt="`${project.title} - Before`"
                   class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Before</span>
              </div>
            </div>
          </div>

          <div class="p-8">
            <div class="flex items-center gap-4 mb-4">
              <span class="px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                {{ project.category }}
              </span>
              <span class="px-4 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200">
                {{ project.completionDate }}
              </span>
            </div>

            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">{{ project.description }}</p>

            <!-- Challenges & Solutions -->
            <div class="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Tantangan</h4>
                <ul class="space-y-2">
                  <li v-for="challenge in project.challenges" :key="challenge"
                      class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <AlertCircle class="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>{{ challenge }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Solusi</h4>
                <ul class="space-y-2">
                  <li v-for="solution in project.solutions" :key="solution"
                      class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 class="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>{{ solution }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Results -->
            <div class="mt-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Hasil</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(value, key) in project.results" :key="key"
                     class="text-center">
                  <div class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ value }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ key }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section id="why-choose-us" class="bg-white py-20 dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="font-montserrat text-4xl font-bold text-blue-900 dark:text-white">Mengapa Memilih Kami</h2>
        <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Komitmen kami untuk memberikan layanan konstruksi terbaik
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <div
          v-for="item in whyChooseUs"
          :key="item.title"
          :class="`group rounded-xl ${item.bgColor} p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-700`"
        >
          <component
            :is="item.icon"
            :class="`h-16 w-16 ${item.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`"
          />
          <h3 class="mt-6 font-montserrat text-2xl font-bold text-gray-900 dark:text-white">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Testimonials Section -->
  <section id="testimonials" class="bg-white py-24 dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-montserrat text-4xl font-bold text-blue-900 dark:text-white">Testimoni Klien</h2>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">Apa kata klien tentang kerjasama dengan kami</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div v-for="testimonial in enhancedTestimonials" :key="testimonial.id"
             class="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-700">
          <!-- Company Logo -->
          <img :src="testimonial.company.logo" :alt="testimonial.company.name"
               class="absolute top-8 right-8 h-12 opacity-50" />

          <!-- Content -->
          <div class="flex items-center gap-6 mb-6">
            <img :src="testimonial.image" :alt="testimonial.name"
                 class="h-20 w-20 rounded-full object-cover ring-4 ring-orange-100" />
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ testimonial.role }}</p>
              <p class="text-sm text-orange-500">{{ testimonial.company.name }}</p>
            </div>
          </div>

          <!-- Project Details -->
          <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
            <h4 class="font-semibold text-gray-900 dark:text-white">Detail Proyek:</h4>
            <div class="mt-2 grid grid-cols-3 gap-4">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Nilai Proyek</p>
                <p class="font-semibold text-gray-900 dark:text-white">{{ testimonial.project.value }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Durasi</p>
                <p class="font-semibold text-gray-900 dark:text-white">{{ testimonial.project.duration }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Kepuasan</p>
                <p class="font-semibold text-green-600">{{ testimonial.metrics.satisfaction }}</p>
              </div>
            </div>
          </div>

          <!-- Testimonial Content -->
          <blockquote class="text-lg italic text-gray-600 dark:text-gray-300">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Metrics -->
          <div class="mt-6 grid grid-cols-3 gap-4">
            <div v-for="(value, key) in testimonial.metrics" :key="key"
                 class="text-center p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
              <p class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ value }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ key }}</p>
            </div>
          </div>

          <!-- Video Testimonial Link -->
          <a v-if="testimonial.video" :href="testimonial.video"
             class="mt-6 inline-flex items-center text-orange-500 hover:text-orange-600">
            <Play class="h-5 w-5 mr-2" />
            Tonton Video Testimonial
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section id="social-proof" class="bg-gray-50 py-24 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Awards -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Penghargaan & Sertifikasi</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="award in socialProof.awards" :key="award.title"
               class="group text-center">
            <img :src="award.image" :alt="award.title"
                 class="h-24 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h4 class="font-semibold text-gray-900 dark:text-white">{{ award.title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ award.organization }}</p>
          </div>
        </div>
      </div>

      <!-- Media Features -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Media Coverage</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <a v-for="media in socialProof.mediaFeatures" :key="media.outlet"
             :href="media.link"
             class="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1">
            <img :src="media.logo" :alt="media.outlet"
                 class="h-12 mb-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            <h4 class="font-semibold text-gray-900 dark:text-white text-center">{{ media.title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ media.date }}</p>
          </a>
        </div>
      </div>

      <!-- Partners -->
      <div class="partners">
        <div v-for="partner in socialProof.partnerships" :key="partner.name"
             class="partner-item">
          <img :src="partner.logo" :alt="partner.name"
               class="h-12 mx-auto opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
          <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Sejak {{ partner.since }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Contact -->
  <section class="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white dark:from-gray-900 dark:to-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div>
          <h2 class="font-montserrat text-4xl font-bold">Siap Memulai Proyek?</h2>
          <p class="mt-4 text-xl text-gray-300">
            Konsultasikan kebutuhan proyek Anda dengan tim ahli kami
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            class="group rounded-lg bg-white px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:bg-gray-100"
          >
            Hubungi Kami
            <ArrowRight class="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/yourwhatsapp"
            class="flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/10"
          >
            <MessageCircle class="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating WhatsApp Button -->
  <a
    href="https://wa.me/6281234567890"
    class="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle class="h-8 w-8" />
  </a>

</template>

<style scoped>
.section-title {
  opacity: 0;
  transform: translateY(20px);
}

/* Improved animations */
.stats-grid, .service-card, .project-card, .testimonial-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Smooth scrolling with better performance */
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scroll progress bar with better positioning */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #f97316, #ea580c);
  transform-origin: 0 50%;
  z-index: 1000;
  transition: transform 0.2s ease;
}

/* Add responsive container padding */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Improved dark mode transitions */
.dark {
  transition: all 0.3s ease;
}
</style>
