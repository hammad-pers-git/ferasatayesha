import React from 'react';
import { Brain, User, Heart, Shield } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesBarProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'psychological-assessment',
    title: 'Psychological Assessment',
    description: 'Gain clarity and understanding through evidence-based assessment.',
    iconName: 'brain',
    fullDescription:
      'Comprehensive diagnostic evaluations for personality, cognitive functioning, attention, mood disorders, and neurodiversity. Clinical reports provide clear guidance for treatment and educational or workplace accommodations.',
    duration: '60-90 min',
    suitableFor: ['Adults', 'Adolescents', 'Clinical Diagnosis', 'Academic/Work Profiling'],
  },
  {
    id: 'individual-counselling',
    title: 'Individual Counselling',
    description: 'Support for emotional challenges, stress, anxiety, depression and more.',
    iconName: 'user',
    fullDescription:
      'One-on-one confidential psychotherapy utilizing Cognitive Behavioral Therapy (CBT), psychodynamic insight, and mindfulness-based stress reduction tailored to your unique emotional needs.',
    duration: '50 min',
    suitableFor: ['Anxiety & Panic', 'Depression', 'Grief & Loss', 'Life Transitions'],
  },
  {
    id: 'couples-marriage-counselling',
    title: 'Couples & Marriage Counselling',
    description: 'Build healthier communication and stronger relationships.',
    iconName: 'heart',
    fullDescription:
      'Facilitated relationship therapy focusing on de-escalating conflicts, rebuilding broken trust, healing emotional distance, and creating enduring emotional intimacy and mutual respect.',
    duration: '60 min',
    suitableFor: ['Premarital', 'Married Couples', 'Communication Breakdown', 'Trust Recovery'],
  },
  {
    id: 'mental-health-support',
    title: 'Mental Health Support',
    description: 'Compassionate support for balanced and fulfilling life.',
    iconName: 'shield',
    fullDescription:
      'Holistic psychiatric and emotional guidance fostering psychological resilience, self-compassion routines, healthy boundaries, and preventative mental wellness care.',
    duration: '50 min',
    suitableFor: ['Burnout Prevention', 'Self-Esteem', 'Emotional Resilience', 'Holistic Balance'],
  },
];

export const ServicesBar: React.FC<ServicesBarProps> = () => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-5 h-5 text-[#6c628e]" />;
      case 'user':
        return <User className="w-5 h-5 text-[#6c628e]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#6c628e]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#6c628e]" />;
    }
  };

  return (
    <section id="services" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 mb-16 md:mb-20">
      <div
        id="services-bar-container"
        className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 gap-6 sm:gap-4 lg:gap-0">
          {servicesData.map((item, index) => (
            <div
              key={item.id}
              id={`service-card-${item.id}`}
              className={`flex flex-col items-start pt-4 sm:pt-0 ${
                index !== 0 ? 'lg:pl-7' : 'lg:pr-5'
              } ${index !== servicesData.length - 1 ? 'lg:pr-7' : ''} select-none`}
            >
              {/* Icon in light purple rounded circle */}
              <div
                id={`service-icon-${item.id}`}
                className="w-11 h-11 rounded-full bg-[#f3effa] flex items-center justify-center mb-4 shrink-0"
              >
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3
                id={`service-title-${item.id}`}
                className="text-[15px] font-semibold text-[#1a2b49] mb-2 leading-snug"
              >
                {item.title}
              </h3>

              {/* Subtext description */}
              <p
                id={`service-desc-${item.id}`}
                className="text-slate-500 text-xs leading-relaxed font-sans"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
