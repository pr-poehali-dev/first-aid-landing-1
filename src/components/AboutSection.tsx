import { EditableText, EditableImage } from "@/components/ui/editable-content";
import placeholderImage from "/placeholder.svg";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <EditableText
          initialText="О проекте"
          as="h2"
          className="text-3xl font-bold text-center mb-8 text-firstaid-dark"
        />
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <EditableImage
              initialSrc={placeholderImage}
              alt="О проекте первой помощи"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <EditableText
              initialText="Наша миссия - сделать знания о первой помощи доступными каждому"
              as="h3"
              className="text-2xl font-semibold text-firstaid-dark"
            />
            
            <EditableText
              initialText="Проект 'ПерваяПомощь.рф' создан для того, чтобы предоставить каждому человеку базовые знания и навыки оказания первой помощи. Мы верим, что эти знания должны быть доступны всем, ведь они могут спасти жизнь в критической ситуации."
              className="text-gray-700"
            />
            
            <EditableText
              initialText="Информация на сайте основана на современных медицинских рекомендациях и регулярно обновляется. Мы стремимся сделать материалы максимально понятными и практичными, чтобы вы могли применить их в реальной жизни."
              className="text-gray-700"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <EditableText
                    initialText="5000+"
                    as="h4"
                    className="text-2xl font-bold text-firstaid-primary text-center"
                  />
                  <EditableText
                    initialText="Спасенных жизней благодаря нашим инструкциям"
                    className="text-center text-gray-600"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <EditableText
                    initialText="100 000+"
                    as="h4"
                    className="text-2xl font-bold text-firstaid-primary text-center"
                  />
                  <EditableText
                    initialText="Обученных людей по всей России"
                    className="text-center text-gray-600"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
