'use client';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

const technologies: Technology[] = [
  { name: 'Power BI', icon: '📊', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tally Prime', icon: '💼', color: 'from-purple-500 to-pink-500' },
  { name: 'Zoho', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
  { name: 'Excel', icon: '📈', color: 'from-green-500 to-emerald-500' },
  { name: 'Python', icon: '🐍', color: 'from-blue-600 to-indigo-600' },
  { name: 'Node.js', icon: '💚', color: 'from-green-600 to-teal-600' },
  { name: 'SQL', icon: '🗄️', color: 'from-orange-500 to-red-500' },
  { name: 'Azure', icon: '☁️', color: 'from-blue-400 to-blue-600' },
  { name: 'REST API', icon: '🔌', color: 'from-indigo-500 to-purple-500' },
  { name: 'Power Automate', icon: '⚙️', color: 'from-cyan-500 to-blue-500' },
  { name: 'VBA', icon: '📝', color: 'from-gray-600 to-gray-800' },
  { name: 'TDL', icon: '⚡', color: 'from-pink-500 to-rose-500' },
];

// Tech Card
const TechCard = ({ tech }: { tech: Technology }) => (
  <div className="group relative w-32 h-32">
    <div className="relative bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:bg-background hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden h-full">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
      />
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="text-3xl mb-2 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 filter group-hover:drop-shadow-lg">
          {tech.icon}
        </div>
        <div className="text-xs font-bold text-center text-foreground group-hover:text-primary transition-colors">{tech.name}</div>
      </div>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
    </div>
  </div>
);

const TechnologiesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technology Stack</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Tools & Technologies We Master</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver world-class solutions
          </p>
        </div>

        {/* Auto-scrolling Container */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-scroll-right">
              {technologies.map((tech, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4 py-4">
                  <TechCard tech={tech} />
                </div>
              ))}
              {technologies.map((tech, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 py-4">
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          {/* <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {technologies
                .slice()
                .reverse()
                .map((tech, index) => (
                  <div key={`reverse-first-${index}`} className="flex-shrink-0 mx-4 py-4">
                    <TechCard tech={tech} />
                  </div>
                ))}
              {technologies
                .slice()
                .reverse()
                .map((tech, index) => (
                  <div key={`reverse-duplicate-${index}`} className="flex-shrink-0 mx-4 py-4">
                    <TechCard tech={tech} />
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
