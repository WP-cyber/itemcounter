import React from 'react';
import { ClipboardCheck, Shield, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface PainPointProps {
  question: string;
  description: string;
}

const PainPoint: React.FC<PainPointProps> = ({ question, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-3">{question}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "No New Hardware",
      description: "Uses your existing cameras and workers&apos; phones"
    },
    {
      icon: <ClipboardCheck className="text-blue-600" size={24} />,
      title: "Automated Counting",
      description: "AI-powered computer vision tracks products automatically"
    },
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: "Audit-Ready",
      description: "Complete digital trail of every product movement"
    }
  ];

  const painPoints = [
    {
      question: "&ldquo;Where did those units go?&rdquo;",
      description: "Tired of scrambling through paper records when products go missing between shifts?"
    },
    {
      question: "&ldquo;Are we audit-ready?&rdquo;",
      description: "Worried about failing compliance checks due to incomplete tracking records?"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white" aria-label="hero">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Stop Losing Sleep Over Missing Product Counts
            </h1>
            <p className="text-xl mb-8">
              Transform your production tracking from a manual nightmare into automated certainty - 
              using just your existing cameras and workers&apos; phones.
            </p>
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              aria-label="Book a demonstration"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="container mx-auto px-4 py-16" aria-label="pain-points">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sound Familiar?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <PainPoint
              key={index}
              question={point.question}
              description={point.description}
            />
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-50 py-16" aria-label="solutions">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Smart Way to Track Production
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white" aria-label="call-to-action">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Production?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join forward-thinking manufacturers who&apos;ve eliminated the stress of manual tracking.
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            aria-label="Schedule a demonstration"
          >
            Schedule Your Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;