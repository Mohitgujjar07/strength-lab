export interface NavItem {
  label: string;
  href: string;
}

export interface TrainingProgram {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface FacilityArea {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Transformation {
  id: string;
  name: string;
  goal: string;
  duration: string;
  result: string;
  isPlaceholder: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating?: number;
  isPlaceholder: boolean;
}

export interface Pillar {
  number: string;
  title: string;
  lines: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    pincode: string;
    landmark: string;
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
  };
  brandStatement: {
    headline: string[];
    paragraphs: string[];
    label: string;
  };
  pillars: Pillar[];
  training: TrainingProgram[];
  facilityAreas: FacilityArea[];
  transformations: Transformation[];
  coaches: Coach[];
  testimonials: Testimonial[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
  };
  analytics: {
    gaId: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'STRENGTH LAB',
  tagline: 'BUILT DIFFERENT.',
  location: {
    city: 'Tumakuru',
    state: 'Karnataka',
    country: 'India',
    address: 'KNS Mansion, 2nd Floor, B.H. Road, Shankarapuram',
    pincode: '572102',
    landmark: 'B.H. Road (Bangalore-Honnavar Highway)',
  },
  contact: {
    phone: '+917996855559',
    phoneDisplay: '+91 79968 55559',
    whatsappNumber: '917996855559',
    whatsappMessage:
      "Hi Strength Lab, I'm interested in joining the gym. I'd like to know more about membership and training.",
    whatsappUrl: '',
    email: '',
  },
  social: {
    instagram: 'https://www.instagram.com/strengthlabofficial/',
    instagramHandle: '@strengthlabofficial',
  },
  mapsUrl: 'https://maps.google.com/?q=Strength+Lab+Tumakuru+Karnataka',
  facility: {
    size: '13,000+ sq. ft.',
    services: [
      'Strength & Conditioning',
      'CrossFit',
      'HIIT',
      'Personal Training',
      'Gym & Cardio',
    ],
    specialFacilities: ['Rooftop Turf', 'Pickleball Court', 'Nutrition Café'],
    recovery: ['Ice Baths', 'Saunas', 'Steam Baths'],
  },
  navItems: [
    { label: 'THE LAB', href: '#the-lab' },
    { label: 'TRAINING', href: '#training' },
    { label: 'FACILITY', href: '#facility' },
    { label: 'TRANSFORMATIONS', href: '#transformations' },
    { label: 'CONTACT', href: '#contact' },
  ],
  hero: {
    eyebrow: 'STRENGTH LAB — TUMAKURU',
    headline: ['BUILT', 'DIFFERENT.'],
    subheadline:
      'A place for people who take their strength, performance and progress seriously.',
    ctaPrimary: 'START YOUR JOURNEY',
    ctaSecondary: 'EXPLORE THE LAB',
    locationLeft: 'TUMAKURU · KARNATAKA',
    scrollIndicator: 'SCROLL TO EXPLORE',
  },
  brandStatement: {
    headline: ["THIS ISN'T", 'JUST A GYM.'],
    paragraphs: [
      "It's where consistency becomes strength.",
      'Where discipline becomes a habit.',
      "And where every session moves you closer to the person you're building.",
    ],
    label: 'THE LAB / 01',
  },
  pillars: [
    {
      number: '01',
      title: 'STRENGTH',
      lines: ['Train with purpose.', 'Build real strength.'],
    },
    {
      number: '02',
      title: 'PERFORMANCE',
      lines: ['Move better.', 'Work harder.', 'Perform better.'],
    },
    {
      number: '03',
      title: 'CONSISTENCY',
      lines: [
        "Progress isn't one great workout.",
        "It's showing up again.",
      ],
    },
  ],
  training: [
    {
      id: 'strength-conditioning',
      number: '01',
      title: 'STRENGTH & CONDITIONING',
      description:
        'Build functional power and athletic performance through structured resistance training.',
      tag: 'STRENGTH',
    },
    {
      id: 'crossfit',
      number: '02',
      title: 'CROSSFIT',
      description:
        'High-intensity functional movements designed to push your limits and build work capacity.',
      tag: 'PERFORMANCE',
    },
    {
      id: 'hiit',
      number: '03',
      title: 'HIIT TRAINING',
      description:
        'Explosive interval training to build endurance, burn fat, and improve overall conditioning.',
      tag: 'CONDITIONING',
    },
    {
      id: 'personal-training',
      number: '04',
      title: 'PERSONAL TRAINING',
      description:
        'One-on-one coaching tailored to your specific goals, body, and training level.',
      tag: 'PERSONALIZED',
    },
  ],
  facilityAreas: [
    {
      id: 'strength-zone',
      number: '01',
      title: 'STRENGTH ZONE',
      description: 'Free weights, racks, and platforms for serious lifting.',
    },
    {
      id: 'conditioning',
      number: '02',
      title: 'CONDITIONING AREA',
      description: 'Cardio equipment and functional training space.',
    },
    {
      id: 'rooftop-turf',
      number: '03',
      title: 'ROOFTOP TURF',
      description: 'Open-air functional training under the sky.',
    },
    {
      id: 'recovery-zone',
      number: '04',
      title: 'RECOVERY ZONE',
      description: 'Ice baths, saunas, and steam for optimal recovery.',
    },
    {
      id: 'pickleball',
      number: '05',
      title: 'PICKLEBALL COURT',
      description: 'Dedicated court for sport and active recovery.',
    },
    {
      id: 'nutrition-cafe',
      number: '06',
      title: 'NUTRITION CAFÉ',
      description: 'Post-workout fuel to support your training.',
    },
  ],
  transformations: [
    {
      id: 't1',
      name: 'MEMBER NAME',
      goal: 'Fat Loss & Muscle Gain',
      duration: '16 WEEKS',
      result: '-12 KG',
      isPlaceholder: true,
    },
    {
      id: 't2',
      name: 'MEMBER NAME',
      goal: 'Strength & Performance',
      duration: '12 WEEKS',
      result: '+15 KG SQUAT',
      isPlaceholder: true,
    },
    {
      id: 't3',
      name: 'MEMBER NAME',
      goal: 'Body Recomposition',
      duration: '20 WEEKS',
      result: '-8% BODY FAT',
      isPlaceholder: true,
    },
  ],
  coaches: [
    {
      id: 'c1',
      name: 'COACH NAME',
      role: 'Head Coach',
      specialization: 'Strength & Conditioning',
      bio: 'Experienced strength coach dedicated to helping members build real, lasting strength.',
      isPlaceholder: true,
    },
    {
      id: 'c2',
      name: 'COACH NAME',
      role: 'CrossFit Coach',
      specialization: 'CrossFit & HIIT',
      bio: 'Certified CrossFit trainer focused on performance, technique, and functional fitness.',
      isPlaceholder: true,
    },
    {
      id: 'c3',
      name: 'COACH NAME',
      role: 'Personal Trainer',
      specialization: 'Personal Training',
      bio: 'Dedicated to personalized training programs that deliver real, measurable results.',
      isPlaceholder: true,
    },
  ],
  testimonials: [
    {
      id: 'tes1',
      name: 'MEMBER NAME',
      content:
        'The atmosphere, equipment and people make you want to keep coming back. This is not your average gym.',
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: 'tes2',
      name: 'MEMBER NAME',
      content:
        'Best gym in Tumakuru, hands down. The facilities are world-class and the coaching is exceptional.',
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: 'tes3',
      name: 'MEMBER NAME',
      content:
        "The recovery zone alone is worth the membership. Ice baths, sauna — it's a complete training experience.",
      rating: 5,
      isPlaceholder: true,
    },
  ],
  seo: {
    title: 'Strength Lab | Premium Gym in Tumakuru',
    description:
      'Strength Lab is a premium 13,000+ sq. ft. fitness facility in Tumakuru, Karnataka. Offering Strength & Conditioning, CrossFit, HIIT, Personal Training, and complete recovery zones.',
    keywords: [
      'gym tumakuru',
      'fitness center tumakuru',
      'strength lab',
      'crossfit tumakuru',
      'personal training tumakuru',
      'premium gym karnataka',
      'best gym tumakuru',
    ],
    canonicalUrl: 'https://strengthlab.in',
  },
  analytics: {
    gaId: '',
  },
};

// Computed WhatsApp URL
siteConfig.contact.whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
