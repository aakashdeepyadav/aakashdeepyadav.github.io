import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      school: "Lovely Professional University, Punjab",
      period: "Aug'23 – Present",
      icon: GraduationCap,
    },
    {
      degree: "Intermediate",
      field: "General Education",
      school: "Tiny Tots Sr. Sec. School, Ayodhya",
      period: "Apr'20 – Mar'22",
      icon: BookOpen,
    },
    {
      degree: "Matriculation",
      field: "General Education",
      school: "Tiny Tots Sr. Sec. School, Ayodhya",
      period: "Apr'18 – Mar'20",
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Education</h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors"
              >
                {index !== educationData.length - 1 && (
                  <div className="absolute left-8 top-full w-1 h-6 bg-gray-700" />
                )}

                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-white/10 flex-shrink-0">
                    <IconComponent className="text-gray-400" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm">
                          {edu.field}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm">{edu.school}</p>

                    {index === 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                        <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">
                          🚀 Current
                        </span>
                        <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">
                          Active Learning
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
