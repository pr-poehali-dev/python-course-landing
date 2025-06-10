import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CourseProgram = () => {
  const modules = [
    {
      week: "Недели 1-2",
      title: "Основы Python",
      topics: [
        "Синтаксис и переменные",
        "Типы данных и операторы",
        "Условные конструкции",
        "Циклы и функции",
      ],
      project: "Калькулятор с GUI",
    },
    {
      week: "Недели 3-4",
      title: "Структуры данных",
      topics: [
        "Списки и кортежи",
        "Словари и множества",
        "Работа с файлами",
        "Обработка исключений",
      ],
      project: "Система управления задачами",
    },
    {
      week: "Недели 5-6",
      title: "ООП в Python",
      topics: [
        "Классы и объекты",
        "Наследование",
        "Полиморфизм",
        "Модули и пакеты",
      ],
      project: 'Игра "Крестики-нолики"',
    },
    {
      week: "Недели 7-8",
      title: "Работа с данными",
      topics: [
        "Библиотеки pandas и numpy",
        "Анализ данных",
        "Визуализация с matplotlib",
        "Работа с API",
      ],
      project: "Анализатор курса валют",
    },
    {
      week: "Недели 9-10",
      title: "Веб-разработка",
      topics: [
        "Основы Flask/Django",
        "Базы данных SQLite",
        "HTML шаблоны",
        "Формы и авторизация",
      ],
      project: "Веб-приложение блог",
    },
    {
      week: "Недели 11-12",
      title: "Финальный проект",
      topics: [
        "Планирование архитектуры",
        "Тестирование кода",
        "Развертывание приложения",
        "Презентация проекта",
      ],
      project: "Выпускной проект по выбору",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Программа курса
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Структурированное обучение от основ до создания полноценных
            приложений
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800"
                  >
                    {module.week}
                  </Badge>
                  <Icon name="BookOpen" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-800 mt-2">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {module.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Lightbulb"
                      size={20}
                      className="text-green-600 mr-2"
                    />
                    <span className="font-semibold text-green-800">
                      Проект:
                    </span>
                  </div>
                  <p className="text-green-700 mt-1">{module.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
