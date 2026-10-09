export interface NavItem {
  label: string;
  href: string;
}

export interface TrainingProgram {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tag: string;
  focus: string[];
  image: string;
}

export interface FacilityArea {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  specs: string;
  image: string;
}

export interface Transformation {
  id: string;
  name: string;
  goal: string;
  duration: string;
  result: string;
  statLabel: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  isPlaceholder: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  highlight: string;
  isPlaceholder: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  badge: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    fullAddress: string;
    pincode: string;
    landmark: string;
    timing: string;
    hours: {
      weekdays: string;
      sunday: string;
    };
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappUrl: string;
    email: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
  };
  mapsUrl: string;
  googleRating: string;
  facility: {
    size: string;
    services: string[];
    specialFacilities: string[];
    recovery: string[];
  };
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    headline: string[];
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationLeft: string;
    scrollIndicator: string;
    bgImage: string;
  };
  brandStatement: {
    label: string;
    headline: string[];
    paragraphs: string[];
    quoteAuthor: string;
  };
  pillars: {
    number: string;
    title: string;
    tagline: string;
    lines: string[];
  }[];
  training: TrainingProgram[];
  facilityAreas: FacilityArea[];
  transformations: Transformation[];
  coaches: Coach[];
  testimonials: Testimonial[];
  membershipPlans: MembershipPlan[];
  instagramFeed: InstagramPost[];
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'STRENGTH LAB',
  tagline: 'BUILT DIFFERENT.',
  subTagline: 'Tumakuru’s Premier High-Performance Strength & Conditioning Club',
  badge: 'EST. TUMAKURU // KARNATAKA',
  location: {
    city: 'Tumakuru',
    state: 'Karnataka',
    country: 'India',
    address: 'KNS Mansion, 2nd Floor, B.H. Road, Shankarapuram',
    fullAddress: '2nd Floor, KNS Mansion, Bangalore-Honnavar Highway (B.H. Road), Shankarapuram, Tumakuru, Karnataka 572102',
    pincode: '572102',
    landmark: 'B.H. Road (Bangalore-Honnavar Highway)',
    timing: '5:30 AM – 10:00 PM',
    hours: {
      weekdays: 'Mon – Sat: 5:30 AM – 10:00 PM',
      sunday: 'Sun: 6:00 AM – 1:00 PM',
    },
  },
  contact: {
    phone: '+917996855559',
    phoneDisplay: '+91 79968 55559',
    whatsappNumber: '917996855559',
    whatsappMessage: "Hi Strength Lab, I'm interested in joining the gym. I'd like to schedule a visit and know more about membership options.",
    whatsappUrl: '',
    email: 'info@strengthlab.in',
  },
  social: {
    instagram: 'https://www.instagram.com/strengthlabofficial/',
    instagramHandle: '@strengthlabofficial',
  },
  mapsUrl: 'https://maps.google.com/?q=Strength+Lab+KNS+Mansion+Tumakuru',
  googleRating: '5.0 ★ Top Rated in Tumakuru',
  facility: {
    size: '13,000+ sq. ft.',
    services: [
      'Strength & Conditioning',
      'CrossFit',
      'HIIT Training',
      'Personal Training',
      'Gym & Cardio',
    ],
    specialFacilities: ['Rooftop Turf', 'Pickleball Court', 'Nutrition Café'],
    recovery: ['Ice Baths', 'Infrared Saunas', 'Steam Baths'],
  },
  navItems: [
    { label: 'THE LAB', href: '#the-lab' },
    { label: 'TRAINING', href: '#training' },
    { label: 'FACILITY', href: '#facility' },
    { label: 'TRANSFORMATIONS', href: '#transformations' },
    { label: 'COACHES', href: '#coaches' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'CONTACT', href: '#contact' },
  ],
  hero: {
    eyebrow: 'STRENGTH LAB — TUMAKURU, KARNATAKA',
    headline: ['BUILT', 'DIFFERENT.'],
    subheadline: 'A place for people who take their strength, performance and progress seriously. Elite competition equipment, open-sky rooftop turf, and advanced contrast recovery.',
    ctaPrimary: 'START YOUR JOURNEY',
    ctaSecondary: 'EXPLORE THE LAB',
    locationLeft: 'TUMAKURU · KARNATAKA',
    scrollIndicator: 'SCROLL TO EXPLORE',
    bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  },
  brandStatement: {
    label: 'THE LAB / 01',
    headline: ["THIS ISN'T", 'JUST A GYM.'],
    paragraphs: [
      "It's where consistency becomes strength.",
      'Where discipline becomes a habit.',
      "And where every session moves you closer to the person you're building.",
    ],
    quoteAuthor: 'STRENGTH LAB TUMAKURU // FOUNDED ON DISCIPLINE',
  },
  pillars: [
    {
      number: '01',
      title: 'STRENGTH',
      tagline: 'LIFT WITH PURPOSE',
      lines: ['Train with purpose.', 'Build real, durable strength.'],
    },
    {
      number: '02',
      title: 'PERFORMANCE',
      tagline: 'MOVE UNRESTRICTED',
      lines: ['Move better.', 'Work harder.', 'Perform better every single day.'],
    },
    {
      number: '03',
      title: 'CONSISTENCY',
      tagline: 'SHOW UP AGAIN',
      lines: ["Progress isn't one great workout.", "It's showing up when motivation fades."],
    },
  ],
  training: [
    {
      id: 'strength-conditioning',
      number: '01',
      title: 'STRENGTH TRAINING',
      tagline: 'Progressive Heavy Iron & Compound Mastery',
      description: 'Build raw power, functional muscle, and structural resilience through periodized barbell and resistance training.',
      tag: 'STRENGTH',
      focus: ['Barbell Compound Lifts', 'Hypertrophy Protocols', 'Olympic Platforms', 'Targeted Progression'],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'crossfit-functional',
      number: '02',
      title: 'CROSSFIT & FUNCTIONAL',
      tagline: 'High-Output Athletic Engine',
      description: 'Constantly varied functional movements executed at high intensity. Built to forge cardiovascular engine and mental grit.',
      tag: 'PERFORMANCE',
      focus: ['Metabolic Conditioning', 'Gymnastics Elements', 'Kettlebell & Rig Work', 'Team Energy'],
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'hiit-conditioning',
      number: '03',
      title: 'HIIT & CONDITIONING',
      tagline: 'Maximum Work Capacity',
      description: 'Intense interval training designed to accelerate calorie expenditure, enhance VO2 max, and build tireless stamina.',
      tag: 'CONDITIONING',
      focus: ['Cardio Acceleration', 'Short Rest Intervals', 'Turf Sprints', 'High Calorie Burn'],
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'personal-coaching',
      number: '04',
      title: 'PERSONAL TRAINING',
      tagline: 'Dedicated 1-on-1 Transformation',
      description: 'Custom programming tailored to your biomechanics, nutrition habits, and specific lifestyle targets with dedicated accountability.',
      tag: 'PERSONALIZED',
      focus: ['Biomechanics Assessment', 'Custom Nutrition Guidance', 'Direct Accountability', 'Goal Milestones'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  facilityAreas: [
    {
      id: 'heavy-iron',
      number: '01',
      title: 'HEAVY IRON & SQUAT RIGS',
      category: 'MAIN LIFTING FLOOR',
      description: 'Precision racks, competition calibrated bumper plates, cast iron dumbbells up to heavy denominations, and deadlift platforms.',
      specs: 'Competition Barbells · Calibrated Plates · Power Racks',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'rooftop-turf',
      number: '02',
      title: 'ROOFTOP FUNCTIONAL TURF',
      category: 'OPEN AIR ARENA',
      description: 'Tumakuru’s only dedicated rooftop training turf. Sled pushes, sprint tracks, tire flips, and open-sky conditioning sessions.',
      specs: 'All-Weather AstroTurf · Prowler Sleds · Battle Ropes',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'recovery-lab',
      number: '03',
      title: 'ADVANCED RECOVERY LAB',
      category: 'CONTRAST THERAPY',
      description: 'Purpose-built cold plunge ice baths, dry cedar sauna, and therapeutic steam room for expedited muscular recovery and mental calm.',
      specs: 'Cold Plunge Tub · Finnish Sauna · Eucalyptus Steam',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'pickleball',
      number: '04',
      title: 'PICKLEBALL COURT',
      category: 'SPORT & MOBILITY',
      description: 'Regulation rooftop Pickleball court designed for competitive rallies, footwork drill, and active recovery with your training crew.',
      specs: 'Non-slip Surface · Regulation Net · Floodlight Ready',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'nutrition-bar',
      number: '05',
      title: 'PERFORMANCE FUEL CAFÉ',
      category: 'NUTRITION & COMMUNITY',
      description: 'Clean pre-workout espresso, cold-pressed recovery shakes, and curated macro meals right inside the facility.',
      specs: 'Custom Protein Shakes · Clean Whole Foods · Espresso Bar',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  transformations: [
    {
      id: 'trans-01',
      name: 'MEMBER LOG // 01',
      goal: 'Fat Loss & Lean Muscle',
      duration: '16 WEEKS',
      result: '-12 KG FAT',
      statLabel: 'BODY FAT REDUCTION',
      quote: 'Consistency here changed everything. The energy in the gym pulls you through on the days you want to quit.',
      beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?q=80&w=800&auto=format&fit=crop',
      isPlaceholder: true,
    },
    {
      id: 'trans-02',
      name: 'MEMBER LOG // 02',
      goal: 'Strength & Powerlifting',
      duration: '12 WEEKS',
      result: '+45 KG TOTAL',
      statLabel: 'BIG 3 COMPOUND INCREASE',
      quote: 'Proper coaching on barbell mechanics turned my squat from painful to effortless PRs.',
      beforeImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
      isPlaceholder: true,
    },
  ],
  coaches: [
    {
      id: 'coach-01',
      name: 'HEAD COACH',
      role: 'FOUNDER & HEAD OF STRENGTH',
      specialization: 'Strength & Conditioning, Biomechanics',
      experience: 'DEMO PROFILE // TO BE REPLACED WITH OWNER DATA',
      bio: 'Leading the Strength Lab training philosophy with focus on disciplined progression, injury prevention, and athletic performance.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
      isPlaceholder: true,
    },
    {
      id: 'coach-02',
      name: 'CROSSFIT SPECIALIST',
      role: 'SENIOR PERFORMANCE COACH',
      specialization: 'CrossFit, Gymnastics, Metabolic Engine',
      experience: 'DEMO PROFILE // TO BE REPLACED WITH STAFF DATA',
      bio: 'Dedicated to helping athletes break through mental barriers and master functional movement standards safely.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      isPlaceholder: true,
    },
    {
      id: 'coach-03',
      name: 'RECOVERY & MOBILITY COACH',
      role: 'HEAD OF ATHLETE RECOVERY',
      specialization: 'Contrast Therapy, Breathwork, Joint Mobility',
      experience: 'DEMO PROFILE // TO BE REPLACED WITH STAFF DATA',
      bio: 'Managing the cold plunge protocols, sauna contrast sessions, and post-training restorative routines for optimal tissue repair.',
      image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=800&auto=format&fit=crop',
      isPlaceholder: true,
    },
  ],
  testimonials: [
    {
      id: 'review-01',
      name: 'Verified Tumakuru Athlete',
      role: 'Strength Member since 2024',
      content: 'Strength Lab is unlike any gym in Tumakuru. The floor space is massive, the bars are legit competition grade, and the atmosphere makes you want to lift heavy with zero distractions.',
      rating: 5,
      highlight: 'Best equipment & serious training culture in town',
      isPlaceholder: true,
    },
    {
      id: 'review-02',
      name: 'Tumakuru Resident',
      role: 'CrossFit & Turf Athlete',
      content: 'The rooftop turf at sunrise is pure therapy. Sled pushes in the morning followed by the cold plunge ice bath is an unmatched routine. Worth every rupee.',
      rating: 5,
      highlight: 'Rooftop turf + ice bath combination is elite',
      isPlaceholder: true,
    },
    {
      id: 'review-03',
      name: 'Fitness Enthusiast',
      role: 'Personal Training Member',
      content: 'Clean, respectful, and zero cheese. People come here to put in real work. If you take your training seriously, this is the only gym in Tumakuru that matches that standard.',
      rating: 5,
      highlight: 'Zero fluff, pure discipline and results',
      isPlaceholder: true,
    },
  ],
  membershipPlans: [
    {
      id: 'discovery-day-pass',
      name: 'LAB DISCOVERY PASS',
      badge: 'FIRST EXPERIENCE',
      tagline: 'Experience the facility and full equipment before committing.',
      features: [
        'Full Day Access to the Training Floor',
        'Access to Free Weights, Racks & Cardio',
        'Rooftop Functional Turf Access',
        'Introductory Movement & Form Consultation',
      ],
      ctaText: 'ENQUIRE FOR PASS',
      isPopular: false,
    },
    {
      id: 'strength-performance',
      name: 'PERFORMANCE ACCESS',
      badge: 'MOST POPULAR',
      tagline: 'Complete access to the gym, rooftop turf, and functional training zones.',
      features: [
        'Unlimited Access to Main Lifting Floor',
        'Rooftop Functional Turf & Sled Track',
        'Pickleball Court Access (Scheduled slots)',
        'Locker & Shower Facility',
        'Exclusive Member Community Access',
      ],
      ctaText: 'DISCUSS ON WHATSAPP',
      isPopular: true,
    },
    {
      id: 'elite-recovery',
      name: 'ELITE LAB & RECOVERY',
      badge: 'FULL PROTOCOL',
      tagline: 'The ultimate training and contrast recovery package for dedicated athletes.',
      features: [
        'All Performance Access Inclusions',
        'Dedicated Recovery Lab (Ice Bath & Sauna)',
        'Priority 1-on-1 Trainer Assessment',
        'Personalized Macro & Nutrition Blueprint',
        'Discounts at Performance Fuel Café',
      ],
      ctaText: 'REQUEST ELITE ACCESS',
      isPopular: false,
    },
  ],
  instagramFeed: [
    {
      id: 'ig-1',
      imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      caption: 'The standard is the standard. Heavy deadlifts on the platform. #BuiltDifferent',
      likes: '284',
    },
    {
      id: 'ig-2',
      imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop',
      caption: 'Rooftop turf morning work. Sled pushes under the open Tumakuru sky.',
      likes: '342',
    },
    {
      id: 'ig-3',
      imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
      caption: '3 minutes at 4°C. Mental discipline meets muscular recovery.',
      likes: '419',
    },
    {
      id: 'ig-4',
      imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
      caption: 'CrossFit conditioning block done. Consistency is the only secret.',
      likes: '390',
    },
  ],
  faq: [
    {
      question: 'Where is Strength Lab located in Tumakuru?',
      answer: 'We are situated on the 2nd Floor of KNS Mansion along Bangalore-Honnavar Highway (B.H. Road), Shankarapuram, Tumakuru, Karnataka 572102. Centrally accessible with dedicated parking space.',
    },
    {
      question: 'What are the operating gym hours?',
      answer: 'Strength Lab is open Monday through Saturday from 5:30 AM to 10:00 PM. On Sundays, we are open for morning sessions from 6:00 AM to 1:00 PM.',
    },
    {
      question: 'What makes Strength Lab different from other gyms in Tumakuru?',
      answer: 'Strength Lab spans 13,000+ sq. ft. of elite training space. In addition to commercial-grade strength equipment, we feature Tumakuru’s only dedicated Rooftop Turf, regulation Pickleball court, Nutrition Café, and an Advanced Recovery Lab with Cold Plunge Ice Baths and Saunas.',
    },
    {
      question: 'Can beginners train at Strength Lab?',
      answer: 'Absolutely. "Built Different" is about your mindset and commitment to progress, not your starting point. Our certified coaches provide movement assessments and structured guidance for lifters of all levels.',
    },
    {
      question: 'How do I inquire about membership or schedule a tour?',
      answer: 'You can tap the WhatsApp or Call button directly on this website. Our team will promptly share membership options and arrange a personalized facility walkthrough.',
    },
  ],
  seo: {
    title: 'Strength Lab | Premium Gym & Fitness Club in Tumakuru',
    description: 'Strength Lab is Tumakuru’s premier 13,000+ sq. ft. strength and athletic facility in KNS Mansion, B.H. Road. Experience heavy iron, rooftop turf, CrossFit, and contrast recovery ice baths.',
    keywords: [
      'strength lab tumakuru',
      'gym in tumakuru',
      'best gym in tumakuru',
      'fitness center tumakuru',
      'crossfit tumakuru',
      'ice bath gym tumakuru',
      'rooftop gym tumakuru',
      'personal trainer tumakuru',
      'kns mansion gym tumakuru',
      'luxury gym karnataka',
    ],
    canonicalUrl: 'https://strengthlab.in',
  },
};

// Compute WhatsApp pre-filled URL dynamically
siteConfig.contact.whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
