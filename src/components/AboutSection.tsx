import { Card, CardContent } from "@/components/ui/card";
import { Timer, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-firstaid-dark">Почему знание первой помощи важно</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-firstaid-primary/10 p-4 rounded-full mb-4">
                <Timer className="h-8 w-8 text-firstaid-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Время имеет значение</h3>
              <p className="text-gray-600">
                В критических ситуациях первые минуты могут определить шансы на выживание. Быстрая реакция спасает жизни.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-firstaid-secondary/10 p-4 rounded-full mb-4">
                <Target className="h-8 w-8 text-firstaid-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Уверенность в себе</h3>
              <p className="text-gray-600">
                Знание основ первой помощи даёт уверенность в своих силах и возможность действовать без паники в экстренных ситуациях.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-firstaid-primary/10 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-firstaid-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Спасение жизней</h3>
              <p className="text-gray-600">
                Правильно оказанная первая помощь значительно увеличивает шансы пострадавшего на выздоровление и спасение жизни.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
