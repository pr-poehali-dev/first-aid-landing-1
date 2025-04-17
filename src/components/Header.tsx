import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-firstaid-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6" />
          <h1 className="text-2xl font-bold">ПерваяПомощь.рф</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">О проекте</a></li>
            <li><a href="#emergency" className="hover:underline">Экстренные случаи</a></li>
            <li><a href="#basics" className="hover:underline">Базовые навыки</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
