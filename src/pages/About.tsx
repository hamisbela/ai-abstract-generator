import { Card } from "@/components/ui/card";
import { Table, Star, Calculator, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 text-transparent bg-clip-text">
            About Us ✨
          </h1>
          <p className="text-xl text-gray-600">
            Empowering users with AI-powered Google Sheets formulas
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Google Sheets Formula Generator, where artificial intelligence meets
              spreadsheet expertise to help users create powerful Google Sheets formulas. Our platform
              leverages cutting-edge AI technology to generate accurate, efficient formulas for any
              spreadsheet need. ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Table className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Making Google Sheets formulas accessible to everyone, from beginners
                to spreadsheet power users.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Calculator className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in simplifying complex spreadsheet tasks and making powerful
                formula creation accessible to users of all skill levels.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform uses advanced natural language processing to understand your
              formula requirements and generate the exact Google Sheets formula you need. We combine
              spreadsheet expertise with AI capabilities to create accurate, efficient formulas
              that work perfectly in your spreadsheets.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're committed to providing a reliable, user-friendly tool that helps users
              create perfect Google Sheets formulas. We continuously improve our AI models
              and user experience based on feedback from our community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}