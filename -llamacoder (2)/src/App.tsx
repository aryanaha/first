import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { SurveyForm } from './components/SurveyForm';
import { ProfileSelector } from './components/ProfileSelector';
import { WorkoutSession } from './components/WorkoutSession';
import { CompletionScreen } from './components/CompletionScreen';
import { getExercisesByLevel } from './utils/exercises';

type Page = 'landing' | 'survey' | 'profile' | 'workout' | 'completion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userData, setUserData] = useState({ name: '', goal: '' });
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'expert' | 'pro'>('beginner');
  const [workoutExercises, setWorkoutExercises] = useState(getExercisesByLevel('beginner'));
  
  // Stats start at 0
  const [userStats, setUserStats] = useState({ points: 0, streak: 0, workouts: 0 });

  // Set browser title to .com and load user data from localStorage on mount
  useEffect(() => {
    document.title = "FitAI.com - AI Powered Fitness";
    
    const savedUserData = localStorage.getItem('fitai_user_data');
    if (savedUserData) {
      try {
        setUserData(JSON.parse(savedUserData));
      } catch (e) {
        console.error('Failed to parse user data', e);
      }
    }
  }, []);

  const handleStartJourney = () => {
    // If we already have the user's name, skip the survey and go to profile selection
    if (userData.name) {
      setCurrentPage('profile');
    } else {
      setCurrentPage('survey');
    }
  };

  const handleSurveyComplete = (data: { name: string; age: string; weight: string; goal: string }) => {
    const dataToSave = { name: data.name, goal: data.goal };
    setUserData(dataToSave);
    // Save to localStorage so we don't ask again
    localStorage.setItem('fitai_user_data', JSON.stringify(dataToSave));
    setCurrentPage('profile');
  };

  const handleLevelSelect = (level: 'beginner' | 'intermediate' | 'expert' | 'pro') => {
    setSelectedLevel(level);
    setWorkoutExercises(getExercisesByLevel(level));
    setCurrentPage('workout');
  };

  const handleWorkoutComplete = () => {
    setUserStats(prev => ({
      points: prev.points + 100,
      streak: prev.streak + 1,
      workouts: prev.workouts + 1
    }));
    setCurrentPage('completion');
  };

  const handleBackToHome = () => {
    setCurrentPage('landing');
  };

  const handleRestart = () => {
    setCurrentPage('profile');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      <Navbar 
        userStats={userStats} 
        userName={userData.name}
        onHomeClick={handleBackToHome}
      />
      
      <main className="flex-grow pt-20">
        {currentPage === 'landing' && <LandingPage onStart={handleStartJourney} />}
        {currentPage === 'survey' && (
          <div className="container mx-auto px-4 py-12">
            <SurveyForm onNext={handleSurveyComplete} onBack={handleBackToHome} />
          </div>
        )}
        {currentPage === 'profile' && (
          <div className="container mx-auto px-4 py-12">
            <ProfileSelector onSelect={handleLevelSelect} onBack={handleBackToHome} />
          </div>
        )}
        {currentPage === 'workout' && (
          <WorkoutSession 
            exercises={workoutExercises} 
            onComplete={handleWorkoutComplete}
            onExit={handleBackToHome}
          />
        )}
        {currentPage === 'completion' && (
          <CompletionScreen 
            stats={userStats}
            onRestart={handleRestart}
            onHome={handleBackToHome}
          />
        )}
      </main>

      {currentPage === 'landing' && <Footer />}
    </div>
  );
}