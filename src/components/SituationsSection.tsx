import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Thermometer, 
  Beaker, 
  Bug, 
  ZapOff, 
  Snowflake, 
  AlertOctagon
} from "lucide-react";

const SituationsSection = () => {
  return (
    <section id="situations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-firstaid-dark">
          Первая помощь при различных ситуациях
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Узнайте, как правильно действовать в специфических ситуациях, 
          требующих оказания первой помощи.
        </p>
        
        <Tabs defaultValue="poisoning" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="poisoning">Отравления</TabsTrigger>
            <TabsTrigger value="stings">Укусы и ужаления</TabsTrigger>
            <TabsTrigger value="environmental">Воздействие среды</TabsTrigger>
          </TabsList>
          
          <TabsContent value="poisoning">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Beaker className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Пищевое отравление
                  </CardTitle>
                  <CardDescription>
                    Симптомы: тошнота, рвота, диарея, боль в животе, слабость
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Прекратите приём пищи.</li>
                    <li>Обеспечьте обильное питьё маленькими порциями (слабо сладкий чай, вода).</li>
                    <li>При рвоте поверните голову набок, чтобы избежать попадания рвотных масс в дыхательные пути.</li>
                    <li>Примите сорбенты (активированный уголь, смекта) согласно инструкции.</li>
                    <li>При высокой температуре примите жаропонижающее.</li>
                    <li>Обратитесь к врачу, особенно если:
                      <ul className="list-disc pl-5 mt-1 text-sm">
                        <li>Симптомы не улучшаются в течение 24 часов</li>
                        <li>Рвота или диарея с кровью</li>
                        <li>Высокая температура</li>
                        <li>Сильная боль в животе</li>
                        <li>Пострадавший - ребёнок или пожилой человек</li>
                      </ul>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertOctagon className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Химическое отравление
                  </CardTitle>
                  <CardDescription>
                    При попадании химических веществ внутрь или на кожу/слизистые
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">При проглатывании:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>НЕ вызывайте рвоту, если проглочены кислоты, щелочи, нефтепродукты, растворители!</li>
                        <li>Дайте выпить воды (если пострадавший в сознании).</li>
                        <li>Немедленно вызовите скорую помощь.</li>
                        <li>Сохраните упаковку от вещества для медиков.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">При попадании на кожу:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Удалите загрязнённую одежду.</li>
                        <li>Промывайте поражённый участок проточной водой не менее 15-20 минут.</li>
                        <li>При обширном поражении обратитесь к врачу.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">При попадании в глаза:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Промывайте глаза проточной водой не менее 15-20 минут.</li>
                        <li>Направьте струю от внутреннего угла глаза к наружному.</li>
                        <li>Обязательно обратитесь к врачу.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="stings">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bug className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Укусы насекомых
                  </CardTitle>
                  <CardDescription>
                    Пчёлы, осы, шершни, клещи и другие насекомые
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Пчёлы и осы:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Если осталось жало (у пчёл), аккуратно удалите его пинцетом или ногтями.</li>
                        <li>Промойте место укуса водой с мылом.</li>
                        <li>Приложите холод на 10-15 минут.</li>
                        <li>При отёке и зуде можно использовать антигистаминные средства.</li>
                        <li>При множественных укусах, укусах в область шеи, рта или глаз, а также при признаках аллергической реакции немедленно вызовите скорую помощь.</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Клещи:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Удалите клеща как можно скорее специальным устройством или пинцетом, захватив как можно ближе к коже.</li>
                        <li>Извлекайте клеща плавным выкручивающим движением, не сдавливая тело.</li>
                        <li>После удаления обработайте место укуса антисептиком.</li>
                        <li>Сохраните клеща в плотно закрытой ёмкости для анализа.</li>
                        <li>Обратитесь к врачу для консультации о дальнейших действиях.</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertOctagon className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Укусы животных и змей
                  </CardTitle>
                  <CardDescription>
                    Домашние питомцы, дикие животные и ядовитые змеи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Укусы животных:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Промойте рану обильным количеством воды с мылом.</li>
                        <li>Обработайте края раны антисептиком.</li>
                        <li>Наложите чистую повязку.</li>
                        <li>Обязательно обратитесь к врачу из-за риска бешенства.</li>
                        <li>Если возможно, соберите информацию о животном (домашнее/дикое, вакцинировано ли).</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Укусы змей:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Обеспечьте пострадавшему покой, минимизируйте движения пострадавшей конечности.</li>
                        <li>Снимите с конечности часы, кольца и другие сдавливающие предметы.</li>
                        <li>Промойте место укуса водой.</li>
                        <li>Наложите чистую повязку.</li>
                        <li>НЕ накладывайте жгут, НЕ прижигайте место укуса, НЕ высасывайте яд!</li>
                        <li>Немедленно вызовите скорую помощь или транспортируйте пострадавшего в больницу.</li>
                        <li>По возможности запомните или сфотографируйте змею (если это безопасно).</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="environmental">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Перегрев и тепловой удар
                  </CardTitle>
                  <CardDescription>
                    Симптомы: слабость, головокружение, тошнота, учащенное сердцебиение, высокая температура
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Переместите пострадавшего в прохладное место, в тень.</li>
                    <li>Уложите пострадавшего, приподняв ноги и слегка опустив голову.</li>
                    <li>Расстегните или снимите стесняющую одежду.</li>
                    <li>Охладите тело:
                      <ul className="list-disc pl-5 mt-1 text-sm">
                        <li>Приложите холодные компрессы к шее, подмышкам, паху</li>
                        <li>Оберните влажной прохладной тканью</li>
                        <li>Обмахивайте или направьте вентилятор</li>
                      </ul>
                    </li>
                    <li>Если пострадавший в сознании, давайте пить прохладную воду небольшими порциями.</li>
                    <li>При потере сознания, судорогах, высокой температуре тела – немедленно вызовите скорую помощь.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Snowflake className="mr-2 h-5 w-5 text-blue-500" />
                    Переохлаждение и обморожение
                  </CardTitle>
                  <CardDescription>
                    Длительное воздействие холода на организм или отдельные его части
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Переохлаждение:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Переместите пострадавшего в тёплое помещение.</li>
                        <li>Снимите мокрую одежду и укутайте сухими тёплыми вещами или одеялами.</li>
                        <li>Согревайте постепенно, начиная с туловища.</li>
                        <li>Предложите тёплое питье (чай, молоко, бульон).</li>
                        <li>Не растирайте тело спиртом!</li>
                        <li>При сильном переохлаждении вызовите скорую помощь.</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Обморожение:</p>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Переместите пострадавшего в тёплое помещение.</li>
                        <li>НЕ растирайте обмороженные участки снегом или шерстяной тканью!</li>
                        <li>НЕ погружайте обмороженные конечности в горячую воду!</li>
                        <li>Поместите обмороженную часть тела в тёплую воду (32-40°C) или приложите тёплые компрессы на 20-30 минут.</li>
                        <li>После отогревания наложите сухую стерильную повязку.</li>
                        <li>Обратитесь к врачу, особенно при образовании волдырей или потемнении кожи.</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ZapOff className="mr-2 h-5 w-5 text-firstaid-primary" />
                    Поражение электрическим током
                  </CardTitle>
                  <CardDescription>
                    Крайне опасное состояние, требующее немедленных действий
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-2">Действия при поражении электрическим током:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <p className="font-medium">Обеспечьте безопасность</p>
                          <p className="text-sm">НЕ прикасайтесь к пострадавшему, пока не убедитесь, что он не контактирует с источником тока. Отключите электричество или отодвиньте провод сухим непроводящим предметом (деревянная палка, резиновые перчатки).</p>
                        </li>
                        <li>
                          <p className="font-medium">Вызовите скорую помощь</p>
                          <p className="text-sm">Сообщите о поражении электрическим током, это приоритетный вызов.</p>
                        </li>
                        <li>
                          <p className="font-medium">Проверьте состояние</p>
                          <p className="text-sm">Оцените сознание, дыхание и пульс пострадавшего.</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2">Дальнейшие действия:</p>
                      <ol className="list-decimal pl-5 space-y-2" start={4}>
                        <li>
                          <p className="font-medium">При отсутствии сознания, дыхания или пульса</p>
                          <p className="text-sm">Приступайте к сердечно-лёгочной реанимации до появления признаков жизни или прибытия медиков.</p>
                        </li>
                        <li>
                          <p className="font-medium">При наличии дыхания и пульса</p>
                          <p className="text-sm">Уложите пострадавшего на спину, обеспечьте приток свежего воздуха, расстегните стесняющую одежду.</p>
                        </li>
                        <li>
                          <p className="font-medium">Осмотрите на наличие ожогов</p>
                          <p className="text-sm">При их наличии, накройте чистой сухой тканью. НЕ применяйте мази, кремы, масла.</p>
                        </li>
                        <li>
                          <p className="font-medium">Контролируйте состояние</p>
                          <p className="text-sm">Даже если пострадавший пришел в себя, он должен быть обязательно осмотрен врачом.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 border border-firstaid-primary rounded-md">
                    <p className="text-sm font-semibold text-firstaid-primary">
                      ⚠️ Важно: Даже при отсутствии видимых повреждений, поражение током может вызвать серьезные внутренние травмы и нарушения сердечного ритма, проявляющиеся позже. Всегда обращайтесь за медицинской помощью!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SituationsSection;
