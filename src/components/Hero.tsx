import { Button } from "@/components/ui/button";
import { EditableText, EditableImage } from "@/components/ui/editable-content";
import placeholderImage from "/placeholder.svg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-firstaid-light to-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <EditableText
            initialText="Спасение жизни начинается с вас"
            as="h1"
            className="text-5xl font-bold text-firstaid-dark mb-4"
          />
          <EditableText
            initialText="Узнайте основы первой помощи и будьте готовы действовать в критических ситуациях. Ваши знания и решительность могут спасти чью-то жизнь."
            className="text-xl text-gray-700 mb-8"
          />
          
          <div className="flex justify-center md:justify-start gap-4">
            <Button 
              className="bg-firstaid-primary hover:bg-red-700 text-white" 
              size="lg"
              onClick={() => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <EditableText initialText="Экстренные случаи" as="span" />
            </Button>
            <Button 
              variant="outline" 
              className="border-firstaid-primary text-firstaid-primary hover:bg-firstaid-primary hover:text-white"
              size="lg"
              onClick={() => document.getElementById('basics')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <EditableText initialText="Изучить основы" as="span" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <EditableImage
            initialSrc={placeholderImage}
            alt="Первая помощь"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
