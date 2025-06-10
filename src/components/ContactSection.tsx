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
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@python_courses",
      link: "https://t.me/python_courses",
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
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
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative h-32">
                  <img
                    src={contact.image}
                    alt={contact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4 -mt-6 relative z-10">
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
