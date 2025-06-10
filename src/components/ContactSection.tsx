import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      icon: "Mail",
      title: "Email",
      value: "info@python-courses.ru",
      link: "mailto:info@python-courses.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@python_courses",
      link: "https://t.me/python_courses",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Свяжитесь с нами для получения консультации или записи на курс
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                    <Icon
                      name={contact.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href={contact.link}
                    className="text-purple-200 hover:text-white transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-white/10 border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Бесплатная консультация
                </h3>
                <p className="text-purple-200 mb-6">
                  Расскажем о курсе, поможем выбрать подходящий тариф и ответим
                  на все вопросы
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-900"
                  >
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать программу
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
