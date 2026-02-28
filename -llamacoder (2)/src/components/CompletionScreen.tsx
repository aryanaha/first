import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle2, Trophy, Flame, Zap, Home, RotateCcw } from 'lucide-react';

interface CompletionScreenProps {
  stats: { points: number; streak: number; workouts: number };
  onRestart: () => void;
  onHome: () => void;
}

export function CompletionScreen({ stats, onRestart, onHome }: CompletionScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-lg w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-full shadow-lg shadow-cyan-500/30">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FitAI Workout Complete!
          </h1>
          <p className="text-slate-400 text-lg">Great job! You've crushed this session.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 space-y-2">
            <div className="flex justify-center text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold">{stats.points}</div>
            <div className="text-sm text-slate-400">Points</div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 space-y-2">
            <div className="flex justify-center text-orange-400">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold">{stats.streak}</div>
            <div className="text-sm text-slate-400">Day Streak</div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 space-y-2">
            <div className="flex justify-center text-purple-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold">{stats.workouts}</div>
            <div className="text-sm text-slate-400">Workouts</div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
          <p className="text-lg font-medium text-cyan-100">
            Consistency is key! Keep pushing towards your goals with FitAI.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRestart}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg shadow-lg shadow-cyan-500/20"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Start Another Workout
          </Button>
          <Button
            onClick={onHome}
            variant="outline"
            className="border-slate-700 hover:bg-slate-800 text-white px-8 py-6 text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}