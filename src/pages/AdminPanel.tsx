import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle2, ImagePlus, Save, Edit, Trash2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [selectedSection, setSelectedSection] = useState("hero");

  // Демо-данные текстового содержимого
  const [contentData, setContentData] = useState({
    hero: {
      title: "Спасение жизни начинается с вас",
      description: "Узнайте основы первой помощи и будьте готовы действовать в критических ситуациях. Ваши знания и решительность могут спасти чью-то жизнь."
    },
    about: {
      title: "О проекте",
      description: "Наша миссия — предоставить простые и понятные инструкции по оказанию первой помощи, которые могут спасти жизнь в критической ситуации."
    },
    emergency: {
      title: "Экстренные случаи",
      description: "В экстренных ситуациях каждая секунда на счету. Быстрая и правильная реакция может спасти жизнь."
    }
  });

  // Демо-данные изображений
  const [images, setImages] = useState([
    { id: 1, name: "hero-image.jpg", section: "hero", url: "/placeholder.svg" },
    { id: 2, name: "about-image.jpg", section: "about", url: "/placeholder.svg" },
    { id: 3, name: "emergency-banner.jpg", section: "emergency", url: "/placeholder.svg" }
  ]);

  const handleTextChange = (section: string, field: string, value: string) => {
    setContentData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSaveContent = () => {
    // Имитация сохранения на сервер
    setSaveStatus("idle");
    setTimeout(() => {
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    }, 1000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setUploadStatus("uploading");
    
    // Имитация загрузки файла
    setTimeout(() => {
      const file = e.target.files![0];
      const newImage = {
        id: Date.now(),
        name: file.name,
        section: selectedSection,
        url: URL.createObjectURL(file)
      };
      
      setImages(prev => [...prev, newImage]);
      setUploadStatus("success");
      
      setTimeout(() => setUploadStatus("idle"), 3000);
    }, 1500);
  };

  const handleDeleteImage = (id: number) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Панель администратора</h1>
            <Button 
              variant="default" 
              onClick={() => window.location.href = "/"}
            >
              Вернуться на сайт
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Редактирование контента</TabsTrigger>
              <TabsTrigger value="images">Управление изображениями</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Редактирование текста</CardTitle>
                  <CardDescription>
                    Выберите раздел сайта и отредактируйте его содержимое.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="section">Выберите раздел</Label>
                    <Select 
                      value={selectedSection} 
                      onValueChange={setSelectedSection}
                    >
                      <SelectTrigger id="section">
                        <SelectValue placeholder="Выберите раздел" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hero">Главный баннер</SelectItem>
                        <SelectItem value="about">О проекте</SelectItem>
                        <SelectItem value="emergency">Экстренные случаи</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedSection && (
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Заголовок</Label>
                        <Input
                          id="title"
                          value={contentData[selectedSection as keyof typeof contentData]?.title || ""}
                          onChange={(e) => handleTextChange(selectedSection, "title", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Описание</Label>
                        <Textarea
                          id="description"
                          rows={5}
                          value={contentData[selectedSection as keyof typeof contentData]?.description || ""}
                          onChange={(e) => handleTextChange(selectedSection, "description", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div>
                    {saveStatus === "success" && (
                      <Alert variant="default" className="bg-green-50 text-green-800 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertTitle>Сохранено</AlertTitle>
                        <AlertDescription>
                          Изменения успешно сохранены
                        </AlertDescription>
                      </Alert>
                    )}
                    {saveStatus === "error" && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Ошибка</AlertTitle>
                        <AlertDescription>
                          Не удалось сохранить изменения
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                  <Button 
                    onClick={handleSaveContent}
                    disabled={saveStatus === "success"}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Сохранить изменения
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="images" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Загрузка изображений</CardTitle>
                  <CardDescription>
                    Загрузите новые или замените существующие изображения для различных разделов сайта.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-section">Выберите раздел</Label>
                    <Select 
                      value={selectedSection} 
                      onValueChange={setSelectedSection}
                    >
                      <SelectTrigger id="image-section">
                        <SelectValue placeholder="Выберите раздел" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hero">Главный баннер</SelectItem>
                        <SelectItem value="about">О проекте</SelectItem>
                        <SelectItem value="emergency">Экстренные случаи</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="image-upload">Загрузить изображение</Label>
                    <div className="flex w-full items-center gap-2">
                      <Input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full"
                        disabled={uploadStatus === "uploading"}
                      />
                      <Button variant="outline" size="icon" disabled={uploadStatus === "uploading"}>
                        <ImagePlus className="h-4 w-4" />
                      </Button>
                    </div>
                    {uploadStatus === "uploading" && (
                      <p className="text-sm text-muted-foreground">Загрузка...</p>
                    )}
                    {uploadStatus === "success" && (
                      <Alert variant="default" className="mt-2 bg-green-50 text-green-800 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertTitle>Успешно загружено</AlertTitle>
                      </Alert>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Существующие изображения</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {images
                        .filter(img => selectedSection === "all" || img.section === selectedSection)
                        .map(image => (
                          <div key={image.id} className="border rounded-md overflow-hidden">
                            <div className="aspect-video bg-gray-100 relative">
                              <img 
                                src={image.url} 
                                alt={image.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3">
                              <p className="text-sm font-medium truncate mb-1">{image.name}</p>
                              <p className="text-xs text-gray-500 mb-2">Раздел: {image.section}</p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="h-3.5 w-3.5 mr-1" />
                                  Заменить
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => handleDeleteImage(image.id)}
                                >
                                  <Trash2 className="h-3.5 w-3.5 mr-1" />
                                  Удалить
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;