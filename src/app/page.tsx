'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStatement from '@/components/BrandStatement';
import PillarsSection from '@/components/PillarsSection';
import TrainingSection from '@/components/TrainingSection';
import FacilityGallery from '@/components/FacilityGallery';
import TransformationSection from '@/components/TransformationSection';
import CoachesSection from '@/components/CoachesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MembershipSection from '@/components/MembershipSection';
import CtaBanner from '@/components/CtaBanner';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';
import MobileStickyCta from '@/components/MobileStickyCta';
import EnquiryModal from '@/components/EnquiryModal';

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleOpenEnquiry = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#F5F5F5] selection:bg-[#FFE600] selection:text-black">
      {/* Fixed Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Brand Manifesto Statement */}
        <BrandStatement />

        {/* 3. The Lab Pillars Section */}
        <PillarsSection />

        {/* 4. Training Programs */}
        <TrainingSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Facility Gallery */}
        <FacilityGallery />

        {/* 6. Transformations Before/After Slider */}
        <TransformationSection />

        {/* 7. Coaches & Leadership */}
        <CoachesSection />

        {/* 8. Member Voice & Testimonials */}
        <TestimonialsSection />

        {/* 9. Membership Consultation Tiers */}
        <MembershipSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. High-Impact Cinematic CTA */}
        <CtaBanner onOpenEnquiry={handleOpenEnquiry} />

        {/* 11. Location, Map & Visiting Hours */}
        <LocationSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Curated Instagram Community Grid */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyCta onOpenEnquiry={handleOpenEnquiry} />

      {/* Inquiry Dialog Modal */}
      <EnquiryModal isOpen={enquiryOpen} onClose={handleCloseEnquiry} initialPlan={selectedPlan} />
    </div>
  );
}
