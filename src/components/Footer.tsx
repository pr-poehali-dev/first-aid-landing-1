import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-firstaid-dark text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-firstaid-primary mr-2" />
            <p className="text-lg font-semibold">ПерваяПомощь.рф</p>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>© {new Date().getFullYear()} Все права защищены. Информация на сайте носит ознакомительный характер.</p>
            <p className="mt-1">В экстренных случаях немедленно вызывайте скорую помощь по номеру 103 или 112.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
