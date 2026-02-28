import { Button } from './ui/button';
import { ArrowRight, Dumbbell, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center animate-fade-in-up">
      {/* Logo/Icon */}
      <div className="relative mb-8 animate-float">
        <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/40 rotate-3 hover:rotate-6 transition-transform duration-500">
          <Dumbbell className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight animate-slide-down">
        Do You Want to
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
          Be Fit?
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-xl text-slate-400 mb-12 max-w-md animate-slide-up">
        AI-powered workouts tailored to your goals. Start your transformation today.
      </p>

      {/* CTA Button */}
      <Button
        onClick={onStart}
        className="group relative h-16 px-12 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50 animate-bounce-slow"
      >
        <span className="relative z-10 flex items-center gap-3">
          Let's Go
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-spin-slow" />
      </Button>

      {/* Trust Badges */}
      <div className="mt-16 flex gap-8 text-slate-500 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>AI Powered</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span>Video Guides</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span>Rewards System</span>
        </div>
      </div>
    </div>
  );
}