export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  description: string;
  instructions: string[];
  icon: string;
  level: 'beginner' | 'intermediate' | 'expert' | 'pro';
}

const exercises: Exercise[] = [
  // BEGINNER EXERCISES
  {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    duration: 30,
    calories: 8,
    description: 'A classic cardio exercise that gets your heart rate up and works your whole body.',
    instructions: [
      'Stand upright with your legs together and arms at your sides.',
      'Jump up spreading your legs to shoulder-width apart while raising your arms above your head.',
      'Jump back to the starting position.',
      'Keep a steady rhythm.'
    ],
    icon: '🏃',
    level: 'beginner'
  },
  {
    id: 'bodyweight-squats',
    name: 'Bodyweight Squats',
    duration: 45,
    calories: 10,
    description: 'Builds strength in your legs and glutes without any equipment.',
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Lower your body as if sitting back into a chair.',
      'Keep your chest up and knees behind your toes.',
      'Push through your heels to return to standing.'
    ],
    icon: '🦵',
    level: 'beginner'
  },
  {
    id: 'high-knees',
    name: 'High Knees',
    duration: 30,
    calories: 9,
    description: 'A high-intensity cardio move that engages your core and legs.',
    instructions: [
      'Stand in place with feet hip-width apart.',
      'Lift one knee toward your chest as high as possible.',
      'Quickly switch to the other knee.',
      'Pump your arms to maintain momentum.'
    ],
    icon: '🔥',
    level: 'beginner'
  },
  {
    id: 'wall-pushups',
    name: 'Wall Push-ups',
    duration: 45,
    calories: 6,
    description: 'A beginner-friendly upper body exercise targeting chest and arms.',
    instructions: [
      'Stand arm-length away from a wall.',
      'Place palms flat against the wall at shoulder height.',
      'Bend elbows to lower your face toward the wall.',
      'Push back to the starting position.'
    ],
    icon: '💪',
    level: 'beginner'
  },
  {
    id: 'marching-in-place',
    name: 'Marching in Place',
    duration: 30,
    calories: 5,
    description: 'A low-impact warm-up exercise that improves coordination.',
    instructions: [
      'Stand tall with feet hip-width apart.',
      'Lift one knee to hip level, then lower it.',
      'Lift the other knee to hip level.',
      'Swing your arms naturally as you march.'
    ],
    icon: '🥁',
    level: 'beginner'
  },
  {
    id: 'calf-raises',
    name: 'Calf Raises',
    duration: 30,
    calories: 4,
    description: 'Strengthens the calves and improves ankle stability.',
    instructions: [
      'Stand with feet hip-width apart.',
      'Rise onto the balls of your feet.',
      'Hold for a second at the top.',
      'Slowly lower your heels back down.'
    ],
    icon: '⬆️',
    level: 'beginner'
  },
  {
    id: 'arm-circles',
    name: 'Arm Circles',
    duration: 30,
    calories: 4,
    description: 'Loosens up the shoulders and improves arm mobility.',
    instructions: [
      'Extend your arms out to the sides at shoulder height.',
      'Make small circular motions with your arms.',
      'Do this for 15 seconds forward.',
      'Reverse direction for 15 seconds.'
    ],
    icon: '🔄',
    level: 'beginner'
  },
  {
    id: 'butt-kicks',
    name: 'Butt Kicks',
    duration: 30,
    calories: 7,
    description: 'A dynamic cardio move that warms up the hamstrings.',
    instructions: [
      'Jog in place.',
      'Kick your heels up toward your glutes with each step.',
      'Keep your knees pointing down.',
      'Move as quickly as you can.'
    ],
    icon: '👟',
    level: 'beginner'
  },

  // INTERMEDIATE EXERCISES
  {
    id: 'burpees',
    name: 'Burpees',
    duration: 45,
    calories: 15,
    description: 'A full-body, high-intensity exercise that builds strength and cardio.',
    instructions: [
      'Start in a standing position.',
      'Drop into a squat with hands on the ground.',
      'Kick feet back into a plank position.',
      'Do a push-up, jump feet back to hands, and jump up.'
    ],
    icon: '💥',
    level: 'intermediate'
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    duration: 45,
    calories: 12,
    description: 'A dynamic plank that targets the core while building cardio endurance.',
    instructions: [
      'Start in a high plank position.',
      'Drive one knee toward your chest.',
      'Quickly switch legs, bringing the other knee forward.',
      'Keep your hips down and core tight.'
    ],
    icon: '⛰️',
    level: 'intermediate'
  },
  {
    id: 'lunges',
    name: 'Lunges',
    duration: 45,
    calories: 11,
    description: 'Unilateral leg exercise that improves balance and strength.',
    instructions: [
      'Stand with feet hip-width apart.',
      'Step forward with one leg, lowering hips until both knees are bent at 90 degrees.',
      'Keep front knee above ankle, not pushing past toes.',
      'Return to standing and switch legs.'
    ],
    icon: '🚶',
    level: 'intermediate'
  },
  {
    id: 'plank',
    name: 'Plank',
    duration: 60,
    calories: 8,
    description: 'An isometric core strength exercise that stabilizes the entire body.',
    instructions: [
      'Lie face down, then prop up on forearms and toes.',
      'Keep body in a straight line from head to heels.',
      'Engage your core and squeeze glutes.',
      'Hold the position without letting hips sag.'
    ],
    icon: '🧱',
    level: 'intermediate'
  },
  {
    id: 'standard-pushups',
    name: 'Standard Push-ups',
    duration: 45,
    calories: 10,
    description: 'Classic upper body exercise for chest, shoulders, and triceps.',
    instructions: [
      'Start in a high plank position, hands slightly wider than shoulders.',
      'Lower body until chest nearly touches the floor.',
      'Keep elbows at a 45-degree angle.',
      'Push back up to starting position.'
    ],
    icon: '🔽',
    level: 'intermediate'
  },
  {
    id: 'tricep-dips',
    name: 'Tricep Dips',
    duration: 45,
    calories: 9,
    description: 'Targets the back of the arms using a chair or bench.',
    instructions: [
      'Sit on edge of a chair, hands gripping edge next to hips.',
      'Slide hips off chair, legs extended or bent.',
      'Lower body by bending elbows to 90 degrees.',
      'Push back up to straighten arms.'
    ],
    icon: '💺',
    level: 'intermediate'
  },
  {
    id: 'glute-bridges',
    name: 'Glute Bridges',
    duration: 45,
    calories: 7,
    description: 'Activates and strengthens the glutes and hamstrings.',
    instructions: [
      'Lie on back with knees bent, feet flat on floor.',
      'Lift hips toward ceiling, squeezing glutes at the top.',
      'Hold for a second, then lower back down.',
      'Keep core engaged throughout.'
    ],
    icon: '🌉',
    level: 'intermediate'
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    duration: 30,
    calories: 7,
    description: 'Strengthens the obliques and lateral core muscles.',
    instructions: [
      'Lie on side, prop up on forearm, feet stacked.',
      'Lift hips to form a straight line.',
      'Keep core tight and don\'t let hips drop.',
      'Hold for time, then switch sides.'
    ],
    icon: '📐',
    level: 'intermediate'
  },

  // EXPERT EXERCISES
  {
    id: 'jump-squats',
    name: 'Jump Squats',
    duration: 45,
    calories: 14,
    description: 'Plyometric exercise that builds explosive power in the legs.',
    instructions: [
      'Perform a standard squat.',
      'Explode upward, jumping as high as possible.',
      'Land softly and immediately go into the next squat.',
      'Use arms to generate momentum.'
    ],
    icon: '🚀',
    level: 'expert'
  },
  {
    id: 'tuck-jumps',
    name: 'Tuck Jumps',
    duration: 30,
    calories: 13,
    description: 'Advanced cardio move requiring explosive leg power.',
    instructions: [
      'Stand with knees slightly bent.',
      'Jump up, bringing knees toward chest.',
      'Grab knees with hands at the peak of the jump.',
      'Land softly on balls of feet.'
    ],
    icon: '🦘',
    level: 'expert'
  },
  {
    id: 'spiderman-pushups',
    name: 'Spiderman Push-ups',
    duration: 45,
    calories: 13,
    description: 'Combines push-ups with core engagement and hip mobility.',
    instructions: [
      'Start in a high plank.',
      'As you lower, bring one knee to your elbow.',
      'Push up and return leg to start.',
      'Alternate sides with each rep.'
    ],
    icon: '🕷️',
    level: 'expert'
  },
  {
    id: 'diamond-pushups',
    name: 'Diamond Push-ups',
    duration: 45,
    calories: 12,
    description: 'Targets the triceps and inner chest with a narrow hand position.',
    instructions: [
      'Form a diamond shape with index fingers and thumbs.',
      'Perform a push-up keeping elbows close to body.',
      'Lower chest to hands.',
      'Push back up maintaining the diamond grip.'
    ],
    icon: '💎',
    level: 'expert'
  },
  {
    id: 'russian-twists',
    name: 'Russian Twists',
    duration: 45,
    calories: 10,
    description: 'Oblique exercise that strengthens the rotational core.',
    instructions: [
      'Sit on floor, knees bent, lean back slightly.',
      'Lift feet off ground (optional for advanced).',
      'Clasp hands together and rotate torso side to side.',
      'Touch hands to ground on each side.'
    ],
    icon: '🌀',
    level: 'expert'
  },
  {
    id: 'pistol-squats-modified',
    name: 'Pistol Squats (Modified)',
    duration: 45,
    calories: 12,
    description: 'Advanced single-leg squat for balance and leg strength.',
    instructions: [
      'Stand on one leg, extend other leg forward.',
      'Lower into a squat as far as possible.',
      'Use a chair or wall for balance if needed.',
      'Push through heel to return to standing.'
    ],
    icon: '🔫',
    level: 'expert'
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunches',
    duration: 45,
    calories: 10,
    description: 'Dynamic core exercise targeting the abs and obliques.',
    instructions: [
      'Lie on back, hands behind head, legs raised.',
      'Bring right elbow to left knee while extending right leg.',
      'Switch sides in a pedaling motion.',
      'Keep shoulder blades off the ground.'
    ],
    icon: '🚴',
    level: 'expert'
  },
  {
    id: 'leg-raises',
    name: 'Leg Raises',
    duration: 45,
    calories: 9,
    description: 'Isolate the lower abs with this challenging movement.',
    instructions: [
      'Lie flat on back, legs straight, hands under glutes.',
      'Keep legs straight and raise them to 90 degrees.',
      'Slowly lower legs without touching the ground.',
      'Keep lower back pressed into the floor.'
    ],
    icon: '📈',
    level: 'expert'
  },

  // PRO EXERCISES
  {
    id: 'plyo-pushups',
    name: 'Plyo Push-ups',
    duration: 40,
    calories: 15,
    description: 'Explosive push-ups where hands leave the ground.',
    instructions: [
      'Get into push-up position.',
      'Lower chest to floor.',
      'Explode up so hands leave the ground.',
      'Land softly with elbows slightly bent.'
    ],
    icon: '✈️',
    level: 'pro'
  },
  {
    id: 'burpee-pullups',
    name: 'Burpee Pull-ups',
    duration: 60,
    calories: 18,
    description: 'The ultimate full-body conditioning movement.',
    instructions: [
      'Start under a pull-up bar.',
      'Do a burpee, jump up to grab the bar.',
      'Perform a pull-up.',
      'Drop down and repeat.'
    ],
    icon: '🏋️',
    level: 'pro'
  },
  {
    id: 'single-leg-deadlift',
    name: 'Single Leg Deadlift',
    duration: 45,
    calories: 11,
    description: 'Advanced balance and posterior chain exercise.',
    instructions: [
      'Stand on one leg, slight knee bend.',
      'Hinge at hips, lowering torso while raising leg behind.',
      'Keep back straight and reach toward ground.',
      'Return to standing by squeezing glutes.'
    ],
    icon: '🦢',
    level: 'pro'
  },
  {
    id: 'v-ups',
    name: 'V-Ups',
    duration: 45,
    calories: 11,
    description: 'Advanced ab exercise creating a V shape with the body.',
    instructions: [
      'Lie flat, arms extended overhead, legs straight.',
      'Simultaneously lift legs and torso, reaching for toes.',
      'Balance on tailbone, forming a V shape.',
      'Lower back down with control.'
    ],
    icon: '✌️',
    level: 'pro'
  },
  {
    id: 'bear-crawls',
    name: 'Bear Crawls',
    duration: 45,
    calories: 12,
    description: 'Full-body mobility and strength exercise.',
    instructions: [
      'Start on hands and knees, hover knees off ground.',
      'Move opposite hand and opposite foot forward.',
      'Keep hips low and back flat.',
      'Crawl forward for distance, then backward.'
    ],
    icon: '🐻',
    level: 'pro'
  },
  {
    id: 'jumping-lunges',
    name: 'Jumping Lunges',
    duration: 40,
    calories: 14,
    description: 'High-intensity plyometric leg exercise.',
    instructions: [
      'Drop into a lunge position.',
      'Explode upward, switching legs in mid-air.',
      'Land softly in a lunge with opposite leg forward.',
      'Maintain rhythm and balance.'
    ],
    icon: '🦘',
    level: 'pro'
  },
  {
    id: 'toes-to-bar',
    name: 'Toes to Bar',
    duration: 45,
    calories: 12,
    description: 'Advanced gymnastic movement for core strength.',
    instructions: [
      'Hang from a bar with straight arms.',
      'Engage core and lift toes to touch the bar.',
      'Lower legs with control.',
      'Avoid swinging; use pure core strength.'
    ],
    icon: '📊',
    level: 'pro'
  },
  {
    id: 'handstand-pushups',
    name: 'Handstand Push-ups (Wall)',
    duration: 60,
    calories: 15,
    description: 'Elite upper body strength exercise targeting shoulders.',
    instructions: [
      'Kick up into a handstand against a wall.',
      'Lower head toward ground by bending elbows.',
      'Push back up to full extension.',
      'Keep core tight and body straight.'
    ],
    icon: '🤸',
    level: 'pro'
  }
];

export function getExercisesByLevel(level: 'beginner' | 'intermediate' | 'expert' | 'pro'): Exercise[] {
  const filtered = exercises.filter(ex => ex.level === level);
  // Shuffle and return specific number based on level
  const count = level === 'beginner' ? 3 : level === 'intermediate' ? 4 : level === 'expert' ? 5 : 6;
  return shuffleArray(filtered).slice(0, count);
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}