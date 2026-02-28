import { Button } from './ui/button';
import { ArrowRight, Zap } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Fitness Revolution</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Welcome to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FitAI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your personal AI trainer that creates custom fat-burning workouts tailored to your fitness level.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-7 text-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105"
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}