import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Exercise } from "../../../lib/types";

async function getExercise(id: string): Promise<Exercise | undefined> {
  const filePath = path.join(process.cwd(), "data", "exercises.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  const exercises: Exercise[] = JSON.parse(fileContent);
  return exercises.find((ex) => ex.id === parseInt(id));
}

export default async function ExercisePage({
  params,
}: {
  params: { id: string };
}) {
  const exercise = await getExercise(params.id);

  if (!exercise) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {exercise.name_en} / {exercise.name_fa}
          </h1>
          <div className="flex justify-between text-lg text-gray-600 mb-4">
            <span>{exercise.muscle_group_fa}</span>
            <span>{exercise.difficulty_fa}</span>
            <span>{exercise.equipment_fa}</span>
          </div>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={exercise.video_url.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div>
          <img
            src={exercise.image_url}
            alt={exercise.name_en}
            className="w-full h-auto rounded-lg mb-4"
          />
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Instructions</h2>
              <ul className="list-disc list-inside">
                {exercise.instructions_fa.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Do's</h2>
              <ul className="list-disc list-inside">
                {exercise.dos_fa.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Don'ts</h2>
              <ul className="list-disc list-inside">
                {exercise.donts_fa.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Breathing</h2>
              <p>{exercise.breathing_fa}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Safety</h2>
              <p>{exercise.safety_fa}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
