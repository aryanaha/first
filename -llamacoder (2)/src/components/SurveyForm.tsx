import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, ArrowRight, User, Target, Scale } from 'lucide-react';

interface SurveyFormProps {
  onNext: (data: { name: string; age: string; weight: string; goal: string }) => void;
  onBack: () => void;
}

export function SurveyForm({ onNext, onBack }: SurveyFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    goal: ''
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onNext(formData);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" onClick={onBack} className="text-slate-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Welcome to FitAI
        </h1>
        <p className="text-slate-400">Step {step} of 4: Tell us about yourself</p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-xl">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-semibold">What's your name?</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 h-12 text-lg"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-semibold">How old are you?</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => updateField('age', e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 h-12 text-lg"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Scale className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-semibold">What's your weight?</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight"
                value={formData.weight}
                onChange={(e) => updateField('weight', e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 h-12 text-lg"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-semibold">What's your goal?</h2>
            </div>
            <RadioGroup value={formData.goal} onValueChange={(value) => updateField('goal', value)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'lose-fat', label: 'Lose Fat', desc: 'Burn calories and slim down' },
                  { value: 'build-muscle', label: 'Build Muscle', desc: 'Increase strength and size' },
                  { value: 'improve-endurance', label: 'Improve Endurance', desc: 'Boost stamina and cardio' },
                  { value: 'stay-active', label: 'Stay Active', desc: 'Maintain general fitness' }
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.goal === option.value
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                    onClick={() => updateField('goal', option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                    <h3 className="font-semibold text-lg mb-1">{option.label}</h3>
                    <p className="text-sm text-slate-400">{option.desc}</p>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              (step === 1 && !formData.name) ||
              (step === 2 && !formData.age) ||
              (step === 3 && !formData.weight) ||
              (step === 4 && !formData.goal)
            }
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
          >
            {step === 4 ? 'Start Journey' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}