import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-firstaid-light to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-firstaid-dark mb-4">Спасение жизни начинается с вас</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Узнайте основы первой помощи и будьте готовы действовать в критических ситуациях. 
          Ваши знания и решительность могут спасти чью-то жизнь.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-firstaid-primary hover:bg-red-700 text-white" 
            size="lg"
            onClick={() => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Экстренные случаи
          </Button>
          <Button 
            variant="outline" 
            className="border-firstaid-primary text-firstaid-primary hover:bg-firstaid-primary hover:text-white"
            size="lg"
            onClick={() => document.getElementById('basics')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Изучить основы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
