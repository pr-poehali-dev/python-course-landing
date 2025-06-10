import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Instructor = () => {
  const achievements = [
    { icon: "Code", text: "8+ лет в Python разработке" },
    { icon: "Building", text: "Senior Developer в IT-компании" },
    { icon: "Users", text: "1000+ студентов обучено" },
    { icon: "Award", text: "Сертифицированный инструктор" },
  ];

  const skills = [
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Machine Learning",
    "Data Science",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Ваш преподаватель
          </h2>
          <p className="text-xl text-gray-600">
            Учитесь у практикующего разработчика с богатым опытом
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="User" size={64} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Александр Иванов</h3>
                    <p className="text-purple-200 mt-2">
                      Senior Python Developer
                    </p>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">
                      О преподавателе
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Александр — опытный Python-разработчик с 8-летним стажем в
                      IT-индустрии. Работал в крупных технологических компаниях,
                      создавал высоконагруженные системы и руководил командами
                      разработчиков.
                    </p>
                    <p className="text-gray-600">
                      Последние 3 года активно занимается преподаванием, помог
                      более чем 1000 студентам освоить Python и найти работу в
                      IT-сфере.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">
                      Достижения
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center">
                          <Icon
                            name={achievement.icon}
                            size={20}
                            className="text-purple-600 mr-3"
                          />
                          <span className="text-gray-600">
                            {achievement.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">
                      Экспертиза
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
