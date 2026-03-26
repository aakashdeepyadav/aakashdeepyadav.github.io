import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.4, delay },
});

const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "2023 – Present",
    highlights: [
      "CGPA: 8.19",
      // "Coursework: Data Structures, Algorithms, DBMS, OS, Software Engineering, ML",
      // "Part of coding clubs, participate in contests regularly",
      // "Built and deployed projects during hackathons",
    ],
    current: true,
    image: "/images/lovely_professional_university.jpg",
  },
  {
    degree: "Intermediate",
    school: "Tiny Tots Sr. Sec. School",
    location: "Ayodhya, India",
    period: "2020 – 2022",
    highlights: ["Percentage: 82"],
    current: false,
    image: "/images/tiny_tots_sr_sec_school.jpg",
  },
  {
    degree: "Matriculation",
    school: "Tiny Tots Sr. Sec. School",
    location: "Ayodhya, India",
    period: "2018 – 2020",
    highlights: ["Percentage: 83"],
    current: false,
    image: "/images/Tiny_Tots.jpg",
  },
];

const Education = () => (
  <section
    id="education"
    className="relative py-28 section-divider overflow-hidden"
  >
    <div className="wrapper relative z-10">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold theme-text-heading mb-3">
          Educational Journey
        </h2>
        <p className="theme-text-muted text-base max-w-xl">
          Where I learned the fundamentals
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div
          className="absolute left-[23px] sm:left-1/2 sm:-translate-x-[1px] top-0 bottom-0 w-[2px]"
          style={{ background: "var(--border-tag)" }}
        />

        <div className="space-y-10">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.08)}
              className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-2 w-4 h-4 rounded-full z-10 border-[3px]"
                style={{
                  backgroundColor: edu.current
                    ? "#00b4d8"
                    : "var(--text-faint)",
                  borderColor: "var(--bg-primary)",
                }}
              />

              {/* Card */}
              <div
                className={`${i % 2 === 0 ? "sm:col-start-1 sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}
              >
                <div className="glass-card overflow-hidden">
                  {/* Institution Image */}
                  <div
                    className="h-32 w-full overflow-hidden"
                    style={{ backgroundColor: "var(--bg-card-alt)" }}
                  >
                    <img
                      src={edu.image}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap
                        size={18}
                        style={{ color: "#00b4d8" }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold theme-text-heading text-[15px] mb-1">
                          {edu.degree}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#00b4d8" }}
                        >
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-xs theme-text-muted flex items-center gap-1 px-2 py-0.5 rounded-md theme-bg-tag"
                        style={{ border: "1px solid var(--border-tag)" }}
                      >
                        <Calendar size={11} /> {edu.period}
                      </span>
                      <span className="text-xs theme-text-faint flex items-center gap-1">
                        <MapPin size={11} /> {edu.location}
                      </span>
                      {edu.current && (
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-lg"
                          style={{
                            color: "#00b4d8",
                            backgroundColor: "rgba(0, 180, 216, 0.08)",
                            border: "1px solid rgba(0, 180, 216, 0.2)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {edu.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xs theme-text-muted"
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-[6px] flex-shrink-0"
                              style={{ backgroundColor: "#00b4d8" }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Empty space for the other side */}
              {i % 2 === 0 ? (
                <div className="hidden sm:block" />
              ) : (
                <div className="hidden sm:block sm:col-start-1 sm:row-start-1" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
