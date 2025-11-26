export default function Home() {
  const exercises = [
    {
      name: "شنا / Push-up",
      description: "یک تمرین قدرتی برای بالاتنه",
      details: "سینه متوسط",
    },
    {
      name: "اسکات / Squat",
      description: "یک تمرین قدرتی برای پایین تنه",
      details: "پا آسان",
    },
    {
      name: "پلانک / Plank",
      description: "یک تمرین برای تقویت عضلات مرکزی بدن",
      details: "شکم آسان",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-wood-dark">ABC Move</h1>
        <p className="text-lg text-wood-medium mt-2">
          Search exercises in English or Persian
        </p>
      </header>
      <div className="space-y-6">
        {exercises.map((exercise, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-wood-light">
            <h2 className="text-2xl font-semibold text-brand-primary">{exercise.name}</h2>
            <p className="mt-2 text-wood-dark">{exercise.description}</p>
            <p className="mt-1 text-wood-medium">{exercise.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
