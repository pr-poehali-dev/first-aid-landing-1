import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const BasicsSection = () => {
  return (
    <section id="basics" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-firstaid-dark">Базовые навыки первой помощи</h2>
        
        <Tabs defaultValue="wounds" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="wounds">Раны и порезы</TabsTrigger>
            <TabsTrigger value="burns">Ожоги</TabsTrigger>
            <TabsTrigger value="fractures">Переломы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wounds">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Обработка ран и порезов</h3>
                  <p className="text-gray-700">
                    Правильная обработка ран предотвращает инфекцию и ускоряет заживление. 
                    Следуйте этим шагам для оказания первой помощи при ранах и порезах.
                  </p>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Остановите кровотечение</p>
                        <p className="text-gray-600">Прижмите рану чистой тканью или марлей до остановки кровотечения.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Очистите рану</p>
                        <p className="text-gray-600">Промойте рану чистой проточной водой, удалите видимые загрязнения.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Дезинфицируйте</p>
                        <p className="text-gray-600">Обработайте края раны антисептиком (хлоргексидин, мирамистин).</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Наложите повязку</p>
                        <p className="text-gray-600">Накройте рану стерильной повязкой или пластырем, регулярно меняйте.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="burns">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Первая помощь при ожогах</h3>
                  <p className="text-gray-700">
                    Ожоги требуют быстрой и правильной помощи для минимизации повреждений тканей и уменьшения боли.
                  </p>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Охладите ожог</p>
                        <p className="text-gray-600">Поместите пострадавший участок под прохладную (не холодную) проточную воду на 10-15 минут.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Защитите ожог</p>
                        <p className="text-gray-600">Накройте ожог стерильной неприлипающей повязкой или чистой тканью.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Чего нельзя делать</p>
                        <p className="text-gray-600">Не прикладывайте лед, не используйте масло, не вскрывайте волдыри, не удаляйте прилипшую одежду.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Когда обращаться к врачу</p>
                        <p className="text-gray-600">При ожогах лица, рук, ног, гениталий, больших площадей, глубоких ожогах обязательно обратитесь за медицинской помощью.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fractures">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Помощь при переломах и вывихах</h3>
                  <p className="text-gray-700">
                    Правильно оказанная первая помощь при переломах и вывихах поможет предотвратить дополнительные повреждения и облегчить боль.
                  </p>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Обеспечьте неподвижность</p>
                        <p className="text-gray-600">Зафиксируйте конечность в том положении, в котором она находится, используя шину или подручные материалы.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Приложите холод</p>
                        <p className="text-gray-600">Для уменьшения отека и боли приложите холод, завернутый в ткань, на 15-20 минут.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Поднимите конечность</p>
                        <p className="text-gray-600">Если возможно, поднимите травмированную конечность выше уровня сердца для уменьшения отека.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check className="text-firstaid-secondary mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Вызовите скорую</p>
                        <p className="text-gray-600">При подозрении на перелом обязательно обратитесь за медицинской помощью, не пытайтесь вправлять кости самостоятельно.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BasicsSection;
