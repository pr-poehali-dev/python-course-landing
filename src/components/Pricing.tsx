import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      price: "29,000",
      duration: "12 недель",
      popular: false,
      features: [
        "Доступ к записям лекций",
        "Практические задания",
        "Проверка кода",
        "Сертификат о прохождении",
        "Доступ к материалам 6 месяцев",
      ],
      buttonText: "Выбрать план",
      buttonVariant: "outline" as const,
    },
    {
      name: "Стандарт",
      price: "49,000",
      duration: "12 недель",
      popular: true,
      features: [
        "Все из базового плана",
        "Онлайн занятия с преподавателем",
        "Персональная обратная связь",
        "Групповые проекты",
        "Помощь с резюме",
        "Доступ к материалам 1 год",
      ],
      buttonText: "Начать обучение",
      buttonVariant: "default" as const,
    },
    {
      name: "Премиум",
      price: "79,000",
      duration: "12 недель",
      popular: false,
      features: [
        "Все из стандартного плана",
        "Индивидуальные занятия",
        "Менторство 1-на-1",
        "Подготовка к собеседованиям",
        "Помощь с трудоустройством",
        "Пожизненный доступ к материалам",
      ],
      buttonText: "Получить консультацию",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Тарифы и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий план обучения и начните свой путь в
            программировании
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? "border-purple-500 border-2 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    Популярный
                  </Badge>
                </div>
              )}

              <CardHeader
                className={`text-center pb-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-50 to-indigo-50"
                    : ""
                }`}
              >
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">₽</span>
                </div>
                <p className="text-gray-500 mt-2">{plan.duration}</p>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : ""
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не знаете, какой план выбрать? Получите бесплатную консультацию!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
