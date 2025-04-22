import { useEditMode } from "@/context/EditContext";
import { Button } from "@/components/ui/button";
import { Pencil, Save } from "lucide-react";

const EditModeToggle = () => {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <Button
      onClick={toggleEditMode}
      className={`fixed bottom-4 right-4 z-50 shadow-lg ${
        isEditMode ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {isEditMode ? (
        <>
          <Save className="mr-2 h-4 w-4" /> Завершить редактирование
        </>
      ) : (
        <>
          <Pencil className="mr-2 h-4 w-4" /> Режим редактирования
        </>
      )}
    </Button>
  );
};

export default EditModeToggle;
