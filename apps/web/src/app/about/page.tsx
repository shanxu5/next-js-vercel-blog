import { fetchCompanyStats } from '@repo/api/brand';

export default async function AboutSection() {
  const stats = await fetchCompanyStats();
  return (
    <section
      className="container mx-auto px-6 py-32 md:py-40 lg:py-48"
      id="about"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <span className="font-mono text-primary text-sm">My Company</span>
        </div>
        <h1 className="mb-8 text-balance font-bold text-5xl leading-tight md:text-6xl lg:text-7xl">
          Building digital experiences that{' '}
          <span className="text-primary">inspire</span> and{' '}
          <span className="text-primary">engage</span>
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card/50 p-6 backdrop-blur">
            <div className="mb-2 font-bold text-4xl text-primary">
              {stats.yearsInBusiness}+
            </div>
            <div className="text-muted-foreground text-sm">
              Years Experience
            </div>
          </div>
          <div className="bg-card/50 p-6 backdrop-blur">
            <div className="mb-2 font-bold text-4xl text-primary">
              {stats.projectsCompleted}+
            </div>
            <div className="text-muted-foreground text-sm">
              Projects Completed
            </div>
          </div>
          <div className="bg-card/50 p-6 backdrop-blur">
            <div className="mb-2 font-bold text-4xl text-primary">
              {stats.clientCount}+
            </div>
            <div className="text-muted-foreground text-sm">Happy Clients</div>
          </div>
          <div className="bg-card/50 p-6 backdrop-blur">
            <div className="mb-2 font-bold text-4xl text-primary">
              {stats.satisfactionRate}%
            </div>
            <div className="text-muted-foreground text-sm">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
