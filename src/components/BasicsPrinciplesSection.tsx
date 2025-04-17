import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, PhoneCall, AlertCircle } from "lucide-react";

const BasicsPrinciplesSection = () => {
  return (
    <section id="basics-principles" className="py-16 bg-firstaid-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-firstaid-dark">Основы первой помощи</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <BookOpen className="text-firstaid-primary mr-2 h-6 w-6" />
                Общие принципы первой помощи
              </h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-firstaid-primary mr-2">1.</span>
                  <p><span className="font-semibold">Безопасность прежде всего:</span> Убедитесь, что вы и пострадавший находитесь в безопасности, прежде чем оказывать помощь.</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-firstaid-primary mr-2">2.</span>
                  <p><span className="font-semibold">Вызов помощи:</span> При серьезной ситуации как можно скорее вызовите скорую помощь (103 или 112).</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-firstaid-primary mr-2">3.</span>
                  <p><span className="font-semibold">Оценка состояния:</span> Проверьте сознание, дыхание и пульс пострадавшего.</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-firstaid-primary mr-2">4.</span>
                  <p><span className="font-semibold">Не навреди:</span> Если вы не уверены в своих действиях, лучше ограничиться вызовом помощи и обеспечением комфорта пострадавшему.</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-firstaid-primary mr-2">5.</span>
                  <p><span className="font-semibold">Поддержка пострадавшего:</span> Говорите с пострадавшим спокойно, даже если кажется, что он без сознания.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <PhoneCall className="text-firstaid-primary mr-2 h-6 w-6" />
                Алгоритм действий при оказании первой помощи
              </h3>
              
              <ol className="space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold">Осмотрите место происшествия</p>
                  <p className="text-sm">Оцените безопасность, устраните явные опасности, если возможно.</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <p className="font-semibold">Оцените состояние пострадавшего</p>
                  <p className="text-sm">Проверьте сознание, дыхание, наличие сильного кровотечения.</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <p className="font-semibold">Вызовите скорую помощь</p>
                  <p className="text-sm">Сообщите: точное местоположение, что произошло, количество пострадавших, их состояние и оказываемая помощь.</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <p className="font-semibold">Окажите первую помощь</p>
                  <p className="text-sm">Действуйте по приоритетам: сначала устраните опасные для жизни состояния.</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <p className="font-semibold">Контролируйте состояние</p>
                  <p className="text-sm">Продолжайте следить за пострадавшим до прибытия медиков.</p>
                </li>
              </ol>
              
              <div className="mt-6 bg-red-50 p-3 rounded-md border border-firstaid-primary">
                <p className="flex items-center text-sm font-semibold text-firstaid-primary">
                  <AlertCircle className="mr-2 h-4 w-4" /> 
                  При остановке сердца немедленно приступайте к сердечно-лёгочной реанимации!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">Универсальный набор первой помощи</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-firstaid-primary">Перевязочные материалы</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Стерильные бинты (разных размеров)</li>
                <li>Марлевые салфетки</li>
                <li>Пластыри (разных размеров)</li>
                <li>Эластичные бинты</li>
                <li>Медицинская вата</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-firstaid-primary">Инструменты и средства</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Ножницы с тупыми концами</li>
                <li>Пинцет</li>
                <li>Антисептик (хлоргексидин, мирамистин)</li>
                <li>Перекись водорода</li>
                <li>Медицинские перчатки</li>
                <li>Маска для проведения СЛР</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-firstaid-primary">Дополнительно</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Термометр</li>
                <li>Пакет холода</li>
                <li>Одноразовые шприцы</li>
                <li>Жгут кровоостанавливающий</li>
                <li>Список экстренных номеров</li>
                <li>Инструкция по оказанию первой помощи</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicsPrinciplesSection;
