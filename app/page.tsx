'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { exercises, Exercise } from '../data/exercises';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    // Show all exercises by default when search is empty
    if (!searchTerm) {
      setFilteredExercises(exercises);
      return;
    }

    const lowercasedQuery = searchTerm.toLowerCase().trim();
    const results = exercises.filter(exercise => {
      const { name_en, name_fa, search_terms_en, search_terms_fa } = exercise;
      // Check if any of the terms match the search query
      return (
        name_en.toLowerCase().includes(lowercasedQuery) ||
        name_fa.includes(lowercasedQuery) || // Persian text doesn't have a concept of lowercase
        search_terms_en.some(term => term.toLowerCase().includes(lowercasedQuery)) ||
        search_terms_fa.some(term => term.includes(lowercasedQuery))
      );
    });
    setFilteredExercises(results);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">ABC Move</h1>
          <p className="text-lg text-gray-600 mt-2" dir="rtl">
            حرکت‌ها را به فارسی یا انگلیسی جستجو کن
          </p>
        </header>

        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="جستجوی حرکت… / Search exercise…"
            className="w-full px-4 py-3 text-lg text-right text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            dir="rtl"
          />
        </div>

        <div className="space-y-4">
          {filteredExercises.length > 0 ? (
            filteredExercises.map(exercise => (
              <Link href={`/exercise/${exercise.slug}`} key={exercise.id}>
                <div className="block bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-400 transition-all duration-200">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                      {/* Placeholder for photo_url. In a real app, you'd use an <Image> component */}
                    </div>
                    <div className="flex-grow text-right" dir="rtl">
                      <h2 className="text-xl font-bold text-gray-800">{exercise.name_fa}</h2>
                      <p className="text-md text-gray-500">{exercise.name_en}</p>
                      <div className="flex justify-end items-center space-x-2 space-x-reverse mt-3 text-sm text-gray-600">
                        <span>{exercise.equipment[0]}</span>
                        <span className="text-gray-300">•</span>
                        <span>{exercise.body_part[0]}</span>
                        <span className="text-gray-300">•</span>
                        <span className="capitalize">
                          {exercise.difficulty === 'beginner' ? 'مبتدی' : exercise.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500" dir="rtl">
                هیچ حرکتی با این نام پیدا نشد. نام دیگری را امتحان کن.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
