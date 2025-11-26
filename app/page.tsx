import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import Search from "../components/Search";
import { Exercise } from "../lib/types";

async function getExercises(): Promise<Exercise[]> {
  const filePath = path.join(process.cwd(), "data", "exercises.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const exercises = await getExercises();
  const query = searchParams?.query || "";
  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.name_en.toLowerCase().includes(query.toLowerCase()) ||
      exercise.name_fa.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">ABC Move</h1>
      <div className="mb-8">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExercises.map((exercise) => (
          <Link href={`/exercise/${exercise.id}`} key={exercise.id}>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">
                {exercise.name_en} / {exercise.name_fa}
              </h2>
              <p className="text-gray-600 mb-2">{exercise.description_fa}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{exercise.muscle_group_fa}</span>
                <span>{exercise.difficulty_fa}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
