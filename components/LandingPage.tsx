import React, { useState } from 'react';
import { ClipboardCheck, Shield, Phone, ArrowRight, Check } from 'lucide-react';
import DemoForm from './DemoForm';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "No New Hardware",
      description: "Uses your existing cameras and workers' phones"
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

  const benefits = [
    "Reduce manual counting errors by 99%",
    "Save 15+ hours per week on inventory management",
    "Real-time production tracking across all shifts",
    "Instant audit-ready reports",
    "No hardware investment required",
    "Setup completed in less than a day"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Stop Losing Sleep Over Missing Product Counts
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your production tracking from a manual nightmare into automated certainty - 
              using just your existing cameras and workers&apos; phones.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center group"
            >
              Book Your Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <p className="text-sm font-medium">TRUSTED BY LEADING MANUFACTURERS</p>
            {/* Add your client logos here */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            The Smart Way to Track Production
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Transform Your Production Tracking
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-4 mt-1">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-gray-600 mb-8">
                Book a personalized demo to see how ItemCounter can transform your production tracking process.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Your Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Production?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join forward-thinking manufacturers who&apos;ve eliminated the stress of manual tracking.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center group"
          >
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
};

export default LandingPage;