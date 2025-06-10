import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Code",
      title: "Практический подход",
      description:
        "Каждый урок подкреплен реальными проектами и задачами из IT-индустрии",
    },
    {
      icon: "Users",
      title: "Персональный ментор",
      description:
        "Индивидуальная поддержка и обратная связь на каждом этапе обучения",
    },
    {
      icon: "Briefcase",
      title: "Помощь с трудоустройством",
      description:
        "Составление резюме, подготовка к собеседованиям и рекомендации",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное время, доступ к материалам 24/7",
    },
    {
      icon: "Award",
      title: "Сертификат",
      description: "Получите официальный сертификат о прохождении курса",
    },
    {
      icon: "Zap",
      title: "Быстрый старт",
      description: "Начните писать код уже на первом занятии",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Почему выбирают наши курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали уникальную методику обучения, которая помогает освоить
            Python быстро и эффективно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                  <Icon
                    name={benefit.icon}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 line-height-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
