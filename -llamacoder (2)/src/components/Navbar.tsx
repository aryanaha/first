import { Button } from './ui/button';
import { Home, Trophy, Flame, Zap } from 'lucide-react';

interface NavbarProps {
  userStats: { points: number; streak: number; workouts: number };
  userName: string;
  onHomeClick: () => void;
}

export function Navbar({ userStats, userName, onHomeClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl">FitAI</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-slate-300">{userStats.points} pts</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-slate-300">{userStats.streak} day streak</span>
            </div>
          </div>

          {userName && (
            <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">{userName}</div>
                <div className="text-xs text-slate-400">{userStats.workouts} workouts</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}