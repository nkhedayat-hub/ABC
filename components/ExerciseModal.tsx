"use client";

import { useState } from "react";
import { Exercise } from "../../../lib/types";

export default function ExerciseModal({
  exercise,
  onClose,
  onSave,
}: {
  exercise?: Exercise | null;
  onClose: () => void;
  onSave: (exercise: Exercise) => void;
}) {
  const [formData, setFormData] = useState<Exercise>(
    exercise || ({} as Exercise)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          {exercise ? "Edit Exercise" : "Create Exercise"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name_en"
              value={formData.name_en || ""}
              onChange={handleChange}
              placeholder="Name (EN)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="name_fa"
              value={formData.name_fa || ""}
              onChange={handleChange}
              placeholder="Name (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="description_fa"
              value={formData.description_fa || ""}
              onChange={handleChange}
              placeholder="Description (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="muscle_group_fa"
              value={formData.muscle_group_fa || ""}
              onChange={handleChange}
              placeholder="Muscle Group (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="difficulty_fa"
              value={formData.difficulty_fa || ""}
              onChange={handleChange}
              placeholder="Difficulty (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="equipment_fa"
              value={formData.equipment_fa || ""}
              onChange={handleChange}
              placeholder="Equipment (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="image_url"
              value={formData.image_url || ""}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-2 border rounded col-span-2"
            />
            <input
              type="text"
              name="video_url"
              value={formData.video_url || ""}
              onChange={handleChange}
              placeholder="Video URL"
              className="p-2 border rounded col-span-2"
            />
            <textarea
              name="instructions_fa"
              value={
                Array.isArray(formData.instructions_fa)
                  ? formData.instructions_fa.join("\n")
                  : formData.instructions_fa || ""
              }
              onChange={handleChange}
              placeholder="Instructions (FA)"
              className="p-2 border rounded col-span-2"
            />
            <textarea
              name="dos_fa"
              value={
                Array.isArray(formData.dos_fa)
                  ? formData.dos_fa.join("\n")
                  : formData.dos_fa || ""
              }
              onChange={handleChange}
              placeholder="Do's (FA)"
              className="p-2 border rounded col-span-2"
            />
            <textarea
              name="donts_fa"
              value={
                Array.isArray(formData.donts_fa)
                  ? formData.donts_fa.join("\n")
                  : formData.donts_fa || ""
              }
              onChange={handleChange}
              placeholder="Don'ts (FA)"
              className="p-2 border rounded col-span-2"
            />
            <input
              type="text"
              name="breathing_fa"
              value={formData.breathing_fa || ""}
              onChange={handleChange}
              placeholder="Breathing (FA)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="safety_fa"
              value={formData.safety_fa || ""}
              onChange={handleChange}
              placeholder="Safety (FA)"
              className="p-2 border rounded"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
