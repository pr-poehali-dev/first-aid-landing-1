import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const EmergencySection = () => {
  return (
    <section id="emergency" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <AlertTriangle className="text-firstaid-primary mr-2 h-8 w-8" />
          <h2 className="text-3xl font-bold text-firstaid-dark">Экстренные случаи</h2>
        </div>
        
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Изучите алгоритмы действий при наиболее распространенных экстренных ситуациях.
          Эти знания могут спасти жизнь до прибытия профессиональной медицинской помощи.
        </p>
        
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              Остановка сердца
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p><strong>Признаки:</strong> Отсутствие сознания, дыхания, пульса.</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Убедитесь в безопасности места происшествия.</li>
                <li>Проверьте сознание - потрясите за плечи, спросите "Вы меня слышите?"</li>
                <li>Если нет ответа, проверьте дыхание (не более 10 секунд).</li>
                <li>Вызовите скорую помощь (103 или 112).</li>
                <li>Начните сердечно-легочную реанимацию (СЛР):
                  <ul className="list-disc pl-5">
                    <li>Положите основание ладони на центр грудной клетки.</li>
                    <li>Нажимайте на глубину 5-6 см с частотой 100-120 нажатий в минуту.</li>
                    <li>После 30 нажатий сделайте 2 вдоха.</li>
                    <li>Продолжайте цикл 30:2 до прибытия помощи.</li>
                  </ul>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              Сильное кровотечение
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p><strong>Признаки:</strong> Видимая кровь, быстрое пропитывание одежды кровью.</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Надавите непосредственно на рану (используйте чистую ткань, марлю).</li>
                <li>Поднимите конечность выше уровня сердца, если это возможно.</li>
                <li>Наложите давящую повязку - ткань и тугое бинтование.</li>
                <li>При продолжении кровотечения используйте еще один слой бинта.</li>
                <li>В критических случаях наложите жгут выше раны, отметив время наложения.</li>
                <li>Вызовите скорую помощь.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              Удушье (инородное тело в дыхательных путях)
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p><strong>Признаки:</strong> Пострадавший не может говорить, кашлять, затрудненное дыхание, синеет лицо.</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Если человек может кашлять - позвольте ему откашляться.</li>
                <li>Если кашель неэффективен:
                  <ul className="list-disc pl-5">
                    <li>Встаньте позади пострадавшего.</li>
                    <li>Обхватите его руками на уровне верхней части живота.</li>
                    <li>Сожмите одну руку в кулак и поместите ее над пупком.</li>
                    <li>Обхватите кулак другой рукой и резко надавите внутрь и вверх 5 раз.</li>
                    <li>Повторяйте до выхода инородного тела или потери сознания.</li>
                  </ul>
                </li>
                <li>Если человек потерял сознание, начните СЛР.</li>
                <li>Вызовите скорую помощь.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default EmergencySection;
