import React, { useState, useRef, useEffect } from "react";
import { useEditMode } from "@/context/EditContext";
import { Button } from "./button";
import { ImagePlus, Check, X } from "lucide-react";

interface EditableTextProps {
  initialText: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  onSave?: (newText: string) => void;
}

export const EditableText = ({
  initialText,
  className = "",
  as = "p",
  onSave,
}: EditableTextProps) => {
  const { isEditMode } = useEditMode();
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(initialText);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const Component = as;

  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (!isEditMode) return;
    setIsEditing(true);
    setEditedText(text);
  };

  const handleSave = () => {
    setText(editedText);
    setIsEditing(false);
    if (onSave) {
      onSave(editedText);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  if (!isEditMode) {
    return <Component className={className}>{text}</Component>;
  }

  if (isEditing) {
    return (
      <div className="relative">
        <textarea
          ref={textRef}
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className={`w-full min-h-[100px] p-2 border border-gray-300 rounded-md ${className}`}
        />
        <div className="flex gap-2 mt-2">
          <Button
            size="sm"
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700"
          >
            <Check className="w-4 h-4 mr-1" /> Сохранить
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCancel}
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <X className="w-4 h-4 mr-1" /> Отменить
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Component
      className={`${className} cursor-pointer hover:bg-gray-100 hover:outline hover:outline-dashed hover:outline-1 hover:outline-gray-300 p-1`}
      onClick={handleEdit}
    >
      {text}
    </Component>
  );
};

interface EditableImageProps {
  initialSrc: string;
  alt: string;
  className?: string;
  onSave?: (newSrc: string) => void;
}

export const EditableImage = ({
  initialSrc,
  alt,
  className = "",
  onSave,
}: EditableImageProps) => {
  const { isEditMode } = useEditMode();
  const [src, setSrc] = useState(initialSrc);
  const [isEditing, setIsEditing] = useState(false);
  const [tempSrc, setTempSrc] = useState(initialSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (!isEditMode) return;
    setIsEditing(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSrc(tempSrc);
    setIsEditing(false);
    if (onSave) {
      onSave(tempSrc);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempSrc(src);
  };

  const handleImageClick = () => {
    if (isEditMode) {
      handleEdit();
    }
  };

  if (!isEditMode) {
    return <img src={src} alt={alt} className={className} />;
  }

  if (isEditing) {
    return (
      <div className="relative">
        <img src={tempSrc} alt={alt} className={`${className} mb-2`} />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <div className="flex gap-2 mt-2">
          <Button
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ImagePlus className="w-4 h-4 mr-1" /> Выбрать изображение
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700"
          >
            <Check className="w-4 h-4 mr-1" /> Сохранить
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCancel}
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <X className="w-4 h-4 mr-1" /> Отменить
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative cursor-pointer group" onClick={handleImageClick}>
      <img
        src={src}
        alt={alt}
        className={`${className} hover:opacity-80 transition-opacity`}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 transition-opacity">
        <ImagePlus className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};
