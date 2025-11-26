"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Exercise } from "../../../lib/types";
import ExerciseModal from "../../../components/ExerciseModal";

export default function AdminDashboard() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const router = useRouter();

  const fetchExercises = async () => {
    const response = await fetch("/api/exercises");
    if (response.ok) {
      const data = await response.json();
      setExercises(data);
    } else {
      router.push("/admin");
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [router]);

  const handleCreate = () => {
    setSelectedExercise(null);
    setIsModalOpen(true);
  };

  const handleEdit = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this exercise?")) {
      await fetch(`/api/exercises/delete/${id}`, { method: "DELETE" });
      fetchExercises();
    }
  };

  const handleSave = async (exercise: Exercise) => {
    if (exercise.id) {
      await fetch(`/api/exercises/update/${exercise.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exercise),
      });
    } else {
      await fetch("/api/exercises/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exercise),
      });
    }
    fetchExercises();
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="mb-8">
        <button
          onClick={handleCreate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Exercise
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name (EN)</th>
            <th className="py-2 px-4 border">Name (FA)</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td className="py-2 px-4 border">{exercise.name_en}</td>
              <td className="py-2 px-4 border">{exercise.name_fa}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(exercise)}
                  className="text-blue-500 hover:underline mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exercise.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
