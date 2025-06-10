import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600 hover:bg-purple-700 text-white">
            🐍 Программирование на Python
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Освой Python с нуля до профессионала
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Практический курс программирования для начинающих и опытных
            разработчиков. Изучай Python через реальные проекты и получи
            востребованную профессию.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            >
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-100 hover:bg-purple-800/50 px-8 py-4 text-lg"
            >
              Посмотреть программу
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-200">
                12 недель
              </div>
              <div className="text-purple-300">Длительность курса</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-200">
                15 проектов
              </div>
              <div className="text-purple-300">В портфолио</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-200">500+</div>
              <div className="text-purple-300">Выпускников</div>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
