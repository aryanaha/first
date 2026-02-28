import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from './ui/button';
import { ExerciseCard } from './ExerciseCard';
import { Exercise } from '../utils/exercises';

interface WorkoutSessionProps {
  exercises: Exercise[];
  onComplete: () => void;
  onExit: () => void;
}

export function WorkoutSession({ exercises, onComplete, onExit }: WorkoutSessionProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentExercise = exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / exercises.length) * 100;

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
      // Scroll to top of next exercise
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      onComplete();
    }
  };

  const handleStartExercise = () => {
    // Optional: Lock scroll or focus mode
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20" ref={containerRef}>
      {/* Workout Header */}
      <div className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onExit}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-lg font-bold text-white">Daily Workout</h2>
                <p className="text-sm text-slate-400">
                  Exercise {currentExerciseIndex + 1} of {exercises.length}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-cyan-400">
                {Math.round(progress)}%
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Exercise List */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {exercises.map((exercise, index) => (
          <div key={exercise.id} className="mb-8">
            <ExerciseCard
              exercise={exercise}
              index={index}
              isActive={index === currentExerciseIndex}
              onComplete={handleNextExercise}
              onStart={handleStartExercise}
            />
          </div>
        ))}
      </div>
    </div>
  );
}