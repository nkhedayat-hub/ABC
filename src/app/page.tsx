"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [language, setLanguage] = useState("fa"); // 'fa' for Persian, 'en' for English

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  const exercises = [
    {
      name: {
        fa: "شنا",
        en: "Push-up",
      },
      description: {
        fa: "یک تمرین قدرتی برای بالاتنه",
        en: "A strength exercise for the upper body",
      },
      details: {
        fa: "سینه متوسط",
        en: "Intermediate Chest",
      },
    },
    {
      name: {
        fa: "اسکات",
        en: "Squat",
      },
      description: {
        fa: "یک تمرین قدرتی برای پایین تنه",
        en: "A strength exercise for the lower body",
      },
      details: {
        fa: "پا آسان",
        en: "Easy Legs",
      },
    },
    {
      name: {
        fa: "پلانک",
        en: "Plank",
      },
      description: {
        fa: "یک تمرین برای تقویت عضلات مرکزی بدن",
        en: "An exercise to strengthen the core muscles",
      },
      details: {
        fa: "شکم آسان",
        en: "Easy Abs",
      },
    },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  return (
    <main className="container mx-auto px-4 py-12 bg-brand-secondary">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-wood-dark">ABC Move</h1>
        <p className="text-xl text-wood-medium mt-4">
          {language === "fa"
            ? "تمرینات را به انگلیسی یا فارسی جستجو کنید"
            : "Search exercises in English or Persian"}
        </p>
        <button
          onClick={toggleLanguage}
          className="mt-6 px-6 py-2 bg-brand-primary text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          {language === "fa" ? "Switch to English" : "تغییر به فارسی"}
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                {exercise.name[language]}
              </h2>
              <p className="text-lg text-wood-dark mb-2">
                {exercise.description[language]}
              </p>
              <p className="text-md text-wood-medium">
                {exercise.details[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
