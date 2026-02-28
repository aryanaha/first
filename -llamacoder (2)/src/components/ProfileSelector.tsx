import { Button } from './ui/button';
import { ArrowLeft, Zap, Flame, Dumbbell, Trophy } from 'lucide-react';

interface ProfileSelectorProps {
  onSelect: (level: 'beginner' | 'intermediate' | 'expert' | 'pro') => void;
  onBack: () => void;
}

const levels = [
  {
    id: 'beginner' as const,
    name: 'Beginner',
    description: 'Just starting out',
    icon: Zap,
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30',
    hoverColor: 'hover:border-green-500',
    exercises: 3,
  },
  {
    id: 'intermediate' as const,
    name: 'Intermediate',
    description: 'Some experience',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-500/30',
    hoverColor: 'hover:border-orange-500',
    exercises: 4,
  },
  {
    id: 'expert' as const,
    name: 'Expert',
    description: 'Regular exerciser',
    icon: Dumbbell,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    hoverColor: 'hover:border-purple-500',
    exercises: 5,
  },
  {
    id: 'pro' as const,
    name: 'Pro',
    description: 'Elite athlete',
    icon: Trophy,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    hoverColor: 'hover:border-cyan-500',
    exercises: 6,
  },
];

export function ProfileSelector({ onSelect, onBack }: ProfileSelectorProps) {
  return (
    <div className="animate-fade-in-up">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-white">Select Your Level</h2>
          <p className="text-slate-400">Choose the difficulty that matches your fitness</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {levels.map((level, index) => {
          const Icon = level.icon;
          return (
            <button
              key={level.id}
              onClick={() => onSelect(level.id)}
              className={`group relative p-6 bg-slate-800/80 backdrop-blur-sm rounded-3xl border-2 ${level.borderColor} ${level.hoverColor} text-left transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${level.color.split('-')[1]}-500/20 animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{level.name}</h3>
                <p className="text-slate-400 mb-4">{level.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-white transition-colors">
                  <span className="px-2 py-1 bg-slate-900/50 rounded-lg border border-slate-700">
                    {level.exercises} exercises
                  </span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Start now →
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}