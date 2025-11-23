export type Exercise = {
  id: string;
  slug: string;
  name_en: string;
  name_fa: string;
  search_terms_en: string[];
  search_terms_fa: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  body_part: string[];
  equipment: string[];
  photo_url: string;
  video_url: string;
  instructions_en: string[];
  instructions_fa: string[];
  mistakes_fa: string[];
  cues_fa: string[];
  duration_type: "reps" | "seconds";
  beginner_sets: string;
  note_fa?: string;
};

export const exercises: Exercise[] = [
  {
    id: "1",
    slug: "bodyweight-squat",
    name_en: "Bodyweight Squat",
    name_fa: "اسکوات با وزن بدن",
    search_terms_en: ["squat", "leg", "beginner", "bodyweight"],
    search_terms_fa: ["اسکوات", "پا", "مبتدی", "وزن بدن"],
    difficulty: "beginner",
    body_part: ["پایین تنه", "چهارسر ران", "همسترینگ", "سرینی"],
    equipment: ["بدون وسیله"],
    photo_url: "/images/squat.jpg",
    video_url: "https://example.com/squat-video",
    instructions_en: [
      "Stand with your feet shoulder-width apart, toes pointing slightly out.",
      "Keep your chest up and core engaged.",
      "Lower your hips back and down as if sitting in a chair.",
      "Go as low as you can comfortably, aiming for thighs parallel to the floor.",
      "Push through your heels to return to the starting position.",
    ],
    instructions_fa: [
      "پاها را به اندازه عرض شانه باز کنید و پنجه‌ها را کمی به بیرون متمایل کنید.",
      "سینه را بالا نگه دارید و عضلات شکم را منقبض کنید.",
      "با خم کردن زانوها، باسن را به سمت عقب و پایین ببرید، انگار می‌خواهید روی یک صندلی بنشینید.",
      "تا جایی که راحت هستید پایین بروید، هدف این است که ران‌ها موازی با زمین شوند.",
      "با فشار از پاشنه‌ها به حالت اولیه بازگردید.",
    ],
    mistakes_fa: [
      "قوز کردن کمر",
      "جمع شدن زانوها به سمت داخل",
      "بلند شدن پاشنه‌ها از روی زمین",
      "نگاه کردن به پایین",
    ],
    cues_fa: [
      "سینه بالا!",
      "روی صندلی فرضی بنشین.",
      "زانوها بیرون.",
      "با پاشنه فشار بده.",
    ],
    duration_type: "reps",
    beginner_sets: "۲ × ۱۰",
    note_fa: "این یک حرکت بنیادی برای تقویت کل پایین‌تنه است.",
  },
  {
    id: "2",
    slug: "glute-bridge",
    name_en: "Glute Bridge",
    name_fa: "پل باسن",
    search_terms_en: ["glute", "bridge", "hamstrings", "beginner"],
    search_terms_fa: ["پل", "باسن", "همسترینگ", "مبتدی", "سرینی"],
    difficulty: "beginner",
    body_part: ["سرینی", "همسترینگ"],
    equipment: ["بدون وسیله"],
    photo_url: "/images/glute-bridge.jpg",
    video_url: "https://example.com/glute-bridge-video",
    instructions_en: [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms by your sides with palms facing down.",
      "Engage your core and glutes, then lift your hips off the floor until your body forms a straight line from your shoulders to your knees.",
      "Squeeze your glutes at the top.",
      "Slowly lower your hips back to the starting position.",
    ],
    instructions_fa: [
      "به پشت دراز بکشید، زانوها را خم کنید و کف پاها را به اندازه عرض لگن روی زمین قرار دهید.",
      "دست‌ها را کنار بدن، کف دست رو به پایین قرار دهید.",
      "عضلات شکم و باسن را منقبض کرده و لگن را از زمین بلند کنید تا بدن از شانه‌ها تا زانوها در یک خط مستقیم قرار گیرد.",
      "در بالای حرکت، عضلات باسن را کاملاً منقبض کنید.",
      "به آرامی لگن را به حالت اولیه بازگردانید.",
    ],
    mistakes_fa: [
      "قوس دادن بیش از حد به کمر",
      "بالا بردن بیش از حد لگن",
      "عدم انقباض عضلات باسن",
    ],
    cues_fa: [
      "باسن رو سفت کن!",
      "با پاشنه به زمین فشار بده.",
      "کمرت رو صاف نگه دار.",
    ],
    duration_type: "reps",
    beginner_sets: "۲ × ۱۲",
  },
  {
    id: "3",
    slug: "wall-push-up",
    name_en: "Wall Push-up",
    name_fa: "شنا روی دیوار",
    search_terms_en: ["push-up", "wall", "chest", "beginner"],
    search_terms_fa: ["شنا", "دیوار", "سینه", "مبتدی"],
    difficulty: "beginner",
    body_part: ["سینه", "شانه", "پشت بازو"],
    equipment: ["دیوار"],
    photo_url: "/images/wall-pushup.jpg",
    video_url: "https://example.com/wall-pushup-video",
    instructions_en: [
      "Stand facing a wall, about arm's length away.",
      "Place your hands on the wall, slightly wider than your shoulders.",
      "Keeping your body in a straight line, bend your elbows and lean towards the wall.",
      "Push back to the starting position.",
    ],
    instructions_fa: [
      "روبروی یک دیوار، به فاصله یک دست از آن بایستید.",
      "دست‌ها را کمی بیشتر از عرض شانه باز کرده و روی دیوار قرار دهید.",
      "بدن را در یک خط مستقیم نگه دارید، آرنج‌ها را خم کرده و به سمت دیوار متمایل شوید.",
      "با فشار دست‌ها به حالت اولیه بازگردید.",
    ],
    mistakes_fa: [
      "افتادن لگن",
      "خم شدن گردن",
      "فاصله خیلی زیاد یا خیلی کم از دیوار",
    ],
    cues_fa: [
      "بدنت رو مثل یک تخته صاف نگه دار.",
      "شکمت رو سفت کن.",
      "آروم و با کنترل.",
    ],
    duration_type: "reps",
    beginner_sets: "۲ × ۱۰",
  },
  {
    id: "4",
    slug: "plank",
    name_en: "Plank",
    name_fa: "پلانک",
    search_terms_en: ["plank", "core", "abs", "beginner"],
    search_terms_fa: ["پلانک", "شکم", "مرکزی", "مبتدی"],
    difficulty: "beginner",
    body_part: ["مرکزی", "شکم"],
    equipment: ["بدون وسیله"],
    photo_url: "/images/plank.jpg",
    video_url: "https://example.com/plank-video",
    instructions_en: [
      "Place your forearms on the ground with your elbows aligned below your shoulders.",
      "Your arms should be parallel to your body at about shoulder-width distance.",
      "Hold your body in a straight line from your head to your heels.",
      "Engage your core and hold the position.",
    ],
    instructions_fa: [
      "ساعدها را روی زمین قرار دهید، طوری که آرنج‌ها دقیقاً زیر شانه‌ها باشند.",
      "دست‌ها موازی با بدن و به اندازه عرض شانه باز باشند.",
      "بدن را از سر تا پاشنه‌ها در یک خط مستقیم نگه دارید.",
      "عضلات شکم و باسن را منقبض کرده و این حالت را حفظ کنید.",
    ],
    mistakes_fa: [
      "افتادن لگن به سمت زمین",
      "بالا بردن بیش از حد باسن",
      "نگاه کردن به بالا یا جلو",
    ],
    cues_fa: [
      "شکمت رو سفت کن، نذار بیفته.",
      "باسنت رو پایین بیار.",
      "کمرت صاف باشه.",
      "به زمین نگاه کن.",
    ],
    duration_type: "seconds",
    beginner_sets: "۲ × ۲۰ ثانیه",
  },
  {
    id: "5",
    slug: "side-plank",
    name_en: "Side Plank",
    name_fa: "پلانک جانبی",
    search_terms_en: ["side plank", "core", "obliques", "beginner"],
    search_terms_fa: ["پلانک", "جانبی", "پهلو", "مبتدی"],
    difficulty: "beginner",
    body_part: ["مرکزی", "پهلو"],
    equipment: ["بدون وسیله"],
    photo_url: "/images/side-plank.jpg",
    video_url: "https://example.com/side-plank-video",
    instructions_en: [
      "Lie on your side with your feet stacked on top of each other.",
      "Place your forearm on the floor, with your elbow directly under your shoulder.",
      "Lift your hips until your body forms a straight line from your head to your feet.",
      "Hold the position, then switch sides.",
    ],
    instructions_fa: [
      "به پهلو دراز بکشید و پاها را روی هم قرار دهید.",
      "ساعد را روی زمین بگذارید، طوری که آرنج دقیقاً زیر شانه باشد.",
      "لگن را بلند کنید تا بدن از سر تا پاها در یک خط مستقیم قرار گیرد.",
      "این حالت را حفظ کنید، سپس برای سمت دیگر تکرار کنید.",
    ],
    mistakes_fa: [
      "افتادن لگن به سمت پایین",
      "جلو یا عقب رفتن شانه",
      "عدم تعادل",
    ],
    cues_fa: [
      "لگنت رو بالا بکش.",
      "پهلوت رو منقبض کن.",
      "صاف و مستقیم باش.",
    ],
    duration_type: "seconds",
    beginner_sets: "۲ × ۱۵ ثانیه (هر طرف)",
  },
];
