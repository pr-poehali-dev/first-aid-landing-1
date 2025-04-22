import { Heart } from "lucide-react";
import { EditableText } from "@/components/ui/editable-content";

const Header = () => {
  return (
    <header className="bg-firstaid-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6" />
          <EditableText
            initialText="ПерваяПомощь.рф"
            as="h1"
            className="text-2xl font-bold"
          />
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4 md:space-x-6">
            <li><a href="#about" className="hover:underline">
              <EditableText initialText="О проекте" as="span" />
            </a></li>
            <li><a href="#basics-principles" className="hover:underline">
              <EditableText initialText="Основы" as="span" />
            </a></li>
            <li><a href="#emergency" className="hover:underline">
              <EditableText initialText="Экстренные случаи" as="span" />
            </a></li>
            <li><a href="#situations" className="hover:underline">
              <EditableText initialText="Различные ситуации" as="span" />
            </a></li>
            <li><a href="#basics" className="hover:underline">
              <EditableText initialText="Базовые навыки" as="span" />
            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
