import { useState, useEffect } from 'react';
import { Play, Pause, Check, List, Clock, Flame } from 'lucide-react';
import { Button } from './ui/button';
import { Exercise } from '../utils/exercises';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  isActive: boolean;
  onComplete: () => void;
  onStart: () => void;
}

export function ExerciseCard({ exercise, index, isActive, onComplete, onStart }: ExerciseCardProps) {
  const [timeLeft, setTimeLeft] = useState(exercise.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showDone, setShowDone] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      handleComplete();
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused, timeLeft]);

  // Countdown Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showCountdown && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showCountdown && countdown === 0) {
      setShowCountdown(false);
      setIsRunning(true);
      setIsPaused(false);
    }
    return () => clearInterval(interval);
  }, [showCountdown, countdown]);

  const handleStart = () => {
    onStart();
    setShowCountdown(true);
    setCountdown(3);
  };

  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev);
  };

  const handleComplete = () => {
    setIsRunning(false);
    setShowDone(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const progress = ((exercise.duration - timeLeft) / exercise.duration) * 100;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      id={`exercise-${index}`}
      className={`relative transition-all duration-700 ${
        isActive ? 'scale-100 opacity-100 z-10' : 'scale-95 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
      }`}
    >
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
        
        {/* Header / Visual Area */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 border-b border-slate-700">
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {exercise.duration}s
            </span>
            <span className="px-3 py-1 bg-orange-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-orange-400/20 flex items-center gap-1">
              <Flame className="w-3 h-3" />
              {exercise.calories} cal
            </span>
          </div>

          {/* Icon and Title */}
          <div className="flex flex-col items-center justify-center pt-4">
            <div className={`text-6xl mb-4 transition-transform duration-500 ${isRunning && !isPaused ? 'animate-bounce-slow' : ''}`}>
              {exercise.icon}
            </div>
            <h3 className="text-3xl font-bold text-white text-center">{exercise.name}</h3>
            <p className="text-slate-400 text-center mt-2 max-w-md">{exercise.description}</p>
          </div>

          {/* Countdown Overlay */}
          {showCountdown && (
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center z-20 animate-fade-in">
              <div className="text-9xl font-black text-cyan-400 animate-bounce-slow drop-shadow-2xl">
                {countdown > 0 ? countdown : 'GO!'}
              </div>
            </div>
          )}

          {/* Done Overlay */}
          {showDone && (
            <div className="absolute inset-0 bg-green-500/90 backdrop-blur-md flex items-center justify-center z-20 animate-scale-in">
              <div className="text-center">
                <Check className="w-24 h-24 text-white mx-auto mb-4 animate-bounce" />
                <p className="text-4xl font-bold text-white">Done!</p>
              </div>
            </div>
          )}

          {/* Active Timer Overlay */}
          {isRunning && !showDone && (
            <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center z-10 transition-all duration-300 ${isPaused ? 'bg-slate-900/98' : ''}`}>
              {/* Circular Progress */}
              <div className="relative mb-6">
                <svg className="w-64 h-64 transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-linear"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Timer Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl font-black text-white drop-shadow-lg">
                    {timeLeft}
                  </span>
                  {isPaused && (
                    <span className="text-sm font-bold text-cyan-400 mt-2 animate-pulse uppercase tracking-widest">
                      Paused
                    </span>
                  )}
                </div>
              </div>

              {/* Pause/Resume Button */}
              <button
                onClick={handlePauseToggle}
                className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                {isPaused ? (
                  <>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Pause
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Instructions Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <List className="w-5 h-5" />
            <h4 className="font-bold uppercase tracking-wider text-sm">Instructions</h4>
          </div>
          
          <ol className="space-y-3">
            {exercise.instructions.map((instruction, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-cyan-400 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-slate-300 leading-relaxed">{instruction}</span>
              </li>
            ))}
          </ol>

          {!isRunning && !showDone && (
            <div className="mt-8">
              <Button
                onClick={handleStart}
                disabled={!isActive}
                className={`w-full h-14 text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-cyan-500/50 animate-pulse-glow'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isActive ? (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Exercise
                  </>
                ) : (
                  'Coming Up...'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}