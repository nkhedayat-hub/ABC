import { exercises } from '@/data/exercises';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const exercise = exercises.find(ex => ex.slug === slug);

  if (!exercise) {
    notFound(); // This will render the not-found.tsx file or a default 404 page
  }

  const {
    name_fa,
    name_en,
    difficulty,
    body_part,
    equipment,
    beginner_sets,
    duration_type,
    instructions_fa,
    instructions_en,
    mistakes_fa,
    cues_fa,
    video_url,
  } = exercise;

  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back to Search Link */}
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            &rarr; بازگشت به جستجو
          </Link>
        </div>

        {/* Video/Image Placeholder */}
        <div className="mb-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl shadow-sm flex items-center justify-center">
            {/* In a real app, you would have an Image or a video player here */}
            <p className="text-gray-500">Image/Video Placeholder</p>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            ویدیو: <a href={video_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">(به زودی)</a>
          </p>
        </div>

        {/* Header */}
        <header className="text-right mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">{name_fa}</h1>
          <p className="text-xl text-gray-500 mt-1">{name_en}</p>
        </header>

        {/* Tags */}
        <div className="flex justify-end items-center space-x-3 space-x-reverse mb-8 text-gray-700">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {difficulty === 'beginner' ? 'مبتدی' : difficulty}
          </span>
          <span className="text-gray-300">•</span>
          <span>{body_part.join('، ')}</span>
          <span className="text-gray-300">•</span>
          <span>{equipment.join('، ')}</span>
        </div>

        {/* Info Box for Beginners */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-8">
          <h3 className="font-bold text-lg mb-2">پیشنهاد برای مبتدی‌ها:</h3>
          <p className="text-lg text-gray-800">
            {beginner_sets} {duration_type === 'reps' ? 'تکرار' : ''}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {/* How to do it (Persian) */}
          <section>
            <h2 className="text-2xl font-bold border-r-4 border-blue-500 pr-4 mb-4">آموزش حرکت</h2>
            <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed text-gray-700">
              {instructions_fa.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-2xl font-bold border-r-4 border-red-500 pr-4 mb-4">اشتباهات رایج</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {mistakes_fa.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </section>

          {/* Coach Cues */}
          <section>
            <h2 className="text-2xl font-bold border-r-4 border-green-500 pr-4 mb-4">نکات مربی</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {cues_fa.map((cue, index) => (
                <li key={index}>{cue}</li>
              ))}
            </ul>
          </section>

          {/* Instructions (English) - Optional */}
          <section className="pt-4 border-t" dir="ltr">
            <h2 className="text-xl font-bold mb-4">Instructions (EN)</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
              {instructions_en.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}

// Optional: To handle the case where a slug does not match any exercise,
// we can implement a basic not-found display.
// Create a `not-found.tsx` file in the same directory or at the app root
// with a simple message. For now, Next.js's default 404 will be used.
