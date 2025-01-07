import React, { useState } from 'react';
import { ClipboardCheck, DollarSign, TrendingUp, Shield, Phone } from 'lucide-react';
import DemoForm from './DemoForm';

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
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
              onClick={() => setIsFormOpen(true)} 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sound Familiar?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              &ldquo;Where did those units go?&rdquo;
            </h3>
            <p className="text-gray-600">
              Tired of scrambling through paper records when products go missing between shifts?
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              &ldquo;Are we audit-ready?&rdquo;
            </h3>
            <p className="text-gray-600">
              Worried about failing compliance checks due to incomplete tracking records?
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              &ldquo;Can we trust these counts?&rdquo;
            </h3>
            <p className="text-gray-600">
              Frustrated by unreliable manual counting, especially during night shifts?
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              &ldquo;Where&apos;s the bottleneck?&rdquo;
            </h3>
            <p className="text-gray-600">
              Struggling to identify where and why production slowdowns occur?
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Smart Way to Track Production
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">No New Hardware</h3>
              <p className="text-gray-600">
                Uses your existing cameras and workers&apos; phones - no expensive equipment needed
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Automated Counting</h3>
              <p className="text-gray-600">
                AI-powered computer vision tracks products automatically through each stage
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Audit-Ready</h3>
              <p className="text-gray-600">
                Complete digital trail of every product movement for perfect compliance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            The Numbers That Matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Count Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-gray-600">Time Saved on Tracking</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Audit Compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Production?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join forward-thinking manufacturers who&apos;ve eliminated the stress of manual tracking.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Your Demo
          </button>
        </div>
      </div>

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
};

export default LandingPage;