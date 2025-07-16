import { Button } from "@/components/ui/button";
import { Shield, Code, Globe, Lock, Zap, Users } from "lucide-react";

export default function StaticLanding() {
  const handleViewDocs = () => {
    window.location.href = "./docs.html";
  };

  const handleGitHub = () => {
    window.open("https://github.com/yourusername/nexxauth", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-red-500 mr-3" />
              <span className="text-xl font-bold">Nexx Auth</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleViewDocs} variant="ghost" className="text-white hover:text-red-400">
                Documentation
              </Button>
              <Button onClick={handleGitHub} variant="ghost" className="text-white hover:text-red-400">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="h-20 w-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Nexx Auth
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade multi-tenant authentication system with advanced security features
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleViewDocs}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            >
              <Code className="h-5 w-5 mr-2" />
              View Documentation
            </Button>
            <Button 
              onClick={handleGitHub}
              variant="outline" 
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 text-lg"
            >
              <Globe className="h-5 w-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Enterprise Security Features
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Lock className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">HWID Locking</h3>
              <p className="text-gray-300">
                Prevent account sharing across devices by locking accounts to specific hardware IDs for maximum security.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Zap className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Version Control</h3>
              <p className="text-gray-300">
                Force application updates by requiring specific version numbers and maintain control over user access.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Users className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-Tenant</h3>
              <p className="text-gray-300">
                Complete isolation between tenants with separate user management and API keys for each application.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Shield className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Blacklist Protection</h3>
              <p className="text-gray-300">
                Advanced blocking system supporting IP addresses, usernames, emails, and hardware IDs.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Globe className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Webhooks</h3>
              <p className="text-gray-300">
                Instant notifications via Discord or custom webhooks for all authentication events.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
              <Code className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-gray-300">
                Simple REST API with examples for C#, Python, JavaScript, and more programming languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Preview */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Simple API Integration
            </span>
          </h2>
          
          <div className="bg-gray-900/80 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-red-400">POST /api/v1/login</h3>
              <Button onClick={handleViewDocs} variant="ghost" className="text-red-400 hover:text-white">
                View Full API →
              </Button>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`{
  "username": "user123",
  "password": "secure_password",
  "hwid": "hardware_id_string",
  "app_version": "1.0.0",
  "license_key": "your_license_key"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-lg font-semibold">Nexx Auth</span>
          </div>
          <p className="text-gray-400">
            Enterprise-grade authentication system built for security and scalability.
          </p>
        </div>
      </footer>
    </div>
  );
}