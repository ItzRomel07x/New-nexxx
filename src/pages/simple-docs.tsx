import { Button } from "@/components/ui/button";
import { Shield, Copy, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function SimpleDocs() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Nexx Auth API Documentation</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-red-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">API Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Nexx Auth provides a complete authentication system with enterprise-grade security features including HWID locking, version control, blacklist protection, and real-time webhooks.
          </p>
        </div>

        {/* Authentication Endpoint */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">User Authentication</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">POST</span>
          </div>
          
          <div className="mb-4">
            <code className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
              POST /api/v1/login
            </code>
          </div>

          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body:</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 relative">
            <Button
              onClick={() => copyToClipboard(`{
  "username": "your_username",
  "password": "your_password",
  "hwid": "hardware_id_string",
  "app_version": "1.0.0",
  "license_key": "your_license_key"
}`, 'login-body')}
              className="absolute top-2 right-2 h-8 w-8 p-0"
              variant="ghost"
            >
              {copiedStates['login-body'] ? 
                <span className="text-green-400 text-xs">✓</span> : 
                <Copy className="h-4 w-4" />
              }
            </Button>
            <pre>{`{
  "username": "your_username",
  "password": "your_password", 
  "hwid": "hardware_id_string",
  "app_version": "1.0.0",
  "license_key": "your_license_key"
}`}</pre>
          </div>

          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response:</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg relative">
            <Button
              onClick={() => copyToClipboard(`{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 123,
    "username": "your_username",
    "email": "user@example.com"
  },
  "session_token": "abc123..."
}`, 'login-response')}
              className="absolute top-2 right-2 h-8 w-8 p-0"
              variant="ghost"
            >
              {copiedStates['login-response'] ? 
                <span className="text-green-400 text-xs">✓</span> : 
                <Copy className="h-4 w-4" />
              }
            </Button>
            <pre>{`{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 123,
    "username": "your_username",
    "email": "user@example.com"
  },
  "session_token": "abc123..."
}`}</pre>
          </div>
        </div>

        {/* Registration Endpoint */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">User Registration</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">POST</span>
          </div>
          
          <div className="mb-4">
            <code className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
              POST /api/v1/register
            </code>
          </div>

          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body:</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 relative">
            <Button
              onClick={() => copyToClipboard(`{
  "username": "new_username",
  "password": "secure_password",
  "email": "user@example.com",
  "license_key": "valid_license_key"
}`, 'register-body')}
              className="absolute top-2 right-2 h-8 w-8 p-0"
              variant="ghost"
            >
              {copiedStates['register-body'] ? 
                <span className="text-green-400 text-xs">✓</span> : 
                <Copy className="h-4 w-4" />
              }
            </Button>
            <pre>{`{
  "username": "new_username",
  "password": "secure_password",
  "email": "user@example.com", 
  "license_key": "valid_license_key"
}`}</pre>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">🔒 HWID Locking</h4>
              <p className="text-gray-600 dark:text-gray-300">Prevent account sharing across devices by locking accounts to specific hardware IDs.</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">🔄 Version Control</h4>
              <p className="text-gray-600 dark:text-gray-300">Force application updates by requiring specific version numbers.</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">🚫 Blacklist System</h4>
              <p className="text-gray-600 dark:text-gray-300">Block users by IP, username, email, or hardware ID.</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">📡 Real-time Webhooks</h4>
              <p className="text-gray-600 dark:text-gray-300">Get instant notifications via Discord or custom webhooks.</p>
            </div>
          </div>
        </div>

        {/* Integration Examples */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Integration Examples</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">C# Example:</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg relative">
              <Button
                onClick={() => copyToClipboard(`using (var client = new HttpClient())
{
    var loginData = new {
        username = "testuser",
        password = "password123",
        hwid = GetHardwareId(),
        app_version = "1.0.0",
        license_key = "your_license_key"
    };
    
    var json = JsonConvert.SerializeObject(loginData);
    var content = new StringContent(json, Encoding.UTF8, "application/json");
    
    var response = await client.PostAsync("https://your-api.com/api/v1/login", content);
    var result = await response.Content.ReadAsStringAsync();
}`, 'csharp-example')}
                className="absolute top-2 right-2 h-8 w-8 p-0"
                variant="ghost"
              >
                {copiedStates['csharp-example'] ? 
                  <span className="text-green-400 text-xs">✓</span> : 
                  <Copy className="h-4 w-4" />
                }
              </Button>
              <pre className="text-sm overflow-x-auto">{`using (var client = new HttpClient())
{
    var loginData = new {
        username = "testuser",
        password = "password123",
        hwid = GetHardwareId(),
        app_version = "1.0.0",
        license_key = "your_license_key"
    };
    
    var json = JsonConvert.SerializeObject(loginData);
    var content = new StringContent(json, Encoding.UTF8, "application/json");
    
    var response = await client.PostAsync("https://your-api.com/api/v1/login", content);
    var result = await response.Content.ReadAsStringAsync();
}`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Python Example:</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg relative">
              <Button
                onClick={() => copyToClipboard(`import requests
import json

login_data = {
    "username": "testuser",
    "password": "password123",
    "hwid": get_hardware_id(),
    "app_version": "1.0.0",
    "license_key": "your_license_key"
}

response = requests.post(
    "https://your-api.com/api/v1/login",
    json=login_data,
    headers={"Content-Type": "application/json"}
)

result = response.json()
print(result)`, 'python-example')}
                className="absolute top-2 right-2 h-8 w-8 p-0"
                variant="ghost"
              >
                {copiedStates['python-example'] ? 
                  <span className="text-green-400 text-xs">✓</span> : 
                  <Copy className="h-4 w-4" />
                }
              </Button>
              <pre className="text-sm overflow-x-auto">{`import requests
import json

login_data = {
    "username": "testuser",
    "password": "password123",
    "hwid": get_hardware_id(),
    "app_version": "1.0.0",
    "license_key": "your_license_key"
}

response = requests.post(
    "https://your-api.com/api/v1/login",
    json=login_data,
    headers={"Content-Type": "application/json"}
)

result = response.json()
print(result)`}</pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}