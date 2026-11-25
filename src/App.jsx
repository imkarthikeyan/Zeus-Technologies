
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Code2,
  ExternalLink,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Plus,
  Search,
  ShieldCheck,
  Upload,
  X
} from "lucide-react";

import { ThemeProvider } from "./Context/ThemeContext.jsx";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ThunderCursor from "./Components/ThunderCursor/ThunderCursor";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import zeusLogo from "./assets/logo.jpeg";

import "./styles/Global.css";

const services = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Web Designing",
    text: "Fast, polished, responsive websites for businesses and commerce.",
    items: ["E-commerce", "Company portals", "UI/UX design"]
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Data Analysis",
    text: "Turn raw information into clear decisions and measurable growth.",
    items: ["Business development", "Data visualization", "Product launches"]
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Content Creating",
    text: "Scroll-stopping visual content built for every social platform.",
    items: ["Instagram creatives", "Posters", "Social media campaigns"]
  }
];

const brandGrowthProject = {
  id: "brand-growth",
  title: "Brand Growth",
  category: "Poster Design",
  type: "Promotional Poster Design",
  description:
    "A vibrant promotional poster for a branding and marketing company, combining a purple gradient, neon accents, bold typography and a clear call-to-action.",
  tools: "Canva",
  image: null
};

const knrProject = {
  id: "knr-transports",
  title: "KNR Transports",
  category: "Branding",
  type: "Brand Identity & Visual System",
  description:
    "A professional transport brand identity built around bold typography and road-inspired curves. The yellow, black and white system communicates speed, reliability and connectivity.",
  tools: "Adobe Creative Suite",
  deliverables: ["Logo design", "Letterhead", "Business cards", "Vehicle branding", "Packaging"],
  image: zeusLogo
};

const SectionHeading = ({ eyebrow, title, text }) => (
  <div className="section-heading reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {text && <p className="section-copy">{text}</p>}
  </div>
);

const HomePage = () => (
  <main>
    <section className="hero section-shell">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Digital studio for bold brands</p>
          <h1>We build ideas that <span>move business.</span></h1>
          <p className="hero-description">
            Zeus Technology creates powerful websites, meaningful brands,
            data-led growth strategies and memorable content.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/contact">Start a project <ArrowRight size={18} /></Link>
            <Link className="text-button" to="/portfolio">Explore our work <ExternalLink size={16} /></Link>
          </div>
        </div>
        <div className="hero-visual reveal" aria-label="Zeus Technology 3D brand visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="zeus-card">
            <img src={zeusLogo} alt="Zeus Technology" />
          </div>
        </div>
      </div>
      <div className="hero-ticker">
        <span>Web Design</span><b>+</b><span>Data Analysis</span><b>+</b>
        <span>Brand Identity</span><b>+</b><span>Digital Growth</span>
      </div>
    </section>

    <section className="services-section section-shell">
      <SectionHeading
        eyebrow="What we do"
        title={<>Designed to deliver.<br /><span>Built to scale.</span></>}
        text="One creative technology partner from first idea to launch and beyond."
      />
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card reveal" key={service.title}>
              <div className="card-number">{service.number}</div>
              <div className="service-icon"><Icon /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link to="/services" aria-label={`View ${service.title}`}><ArrowRight /></Link>
            </article>
          );
        })}
      </div>
    </section>

    <section className="process-section section-shell">
      <SectionHeading eyebrow="Our process" title="Simple process. Powerful results." />
      <div className="process-grid">
        {[
          ["01", "Discover", "We understand your audience, goals and market."],
          ["02", "Create", "We shape the strategy, design and experience."],
          ["03", "Launch", "We deliver, test and help your brand grow."]
        ].map(([number, title, text]) => (
          <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  </main>
);

const ServicesPage = () => (
  <main>
    <section className="page-hero section-shell">
      <p className="eyebrow">Our services</p>
      <h1>Technology with a <span>creative edge.</span></h1>
    </section>
    <section className="services-detail section-shell">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article className="service-detail" key={service.title}>
            <div className="service-icon"><Icon /></div>
            <div><p className="eyebrow">{service.number}</p><h2>{service.title}</h2></div>
            <p>{service.text}</p>
            <ul>{service.items.map((item) => <li key={item}><ShieldCheck />{item}</li>)}</ul>
          </article>
        );
      })}
    </section>
  </main>
);

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All Projects");
  const [projects, setProjects] = useState([brandGrowthProject, knrProject]);
  const [modalOpen, setModalOpen] = useState(false);
  const [preview, setPreview] = useState("");
  const [form, setForm] = useState({ title: "", category: "Graphic Design", description: "" });
  const filters = ["All Projects", "Logo Design", "Branding", "Poster Design", "Graphic Design", "UI/UX Design", "Web Development"];

  const filtered = filter === "All Projects" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => () => {
    if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
  }, [preview]);

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const nextPreview = URL.createObjectURL(file);
    setPreview((current) => {
      if (current.startsWith("blob:")) URL.revokeObjectURL(current);
      return nextPreview;
    });
  };

  const addProject = (event) => {
    event.preventDefault();
    if (!form.title.trim()) return;
    setProjects((current) => [{
      id: `${Date.now()}-${form.title}`,
      title: form.title,
      category: form.category,
      type: "Creative Project",
      description: form.description || "A new creative project added to the Zeus Technology portfolio.",
      tools: "Project image",
      image: preview
    }, ...current]);
    setForm({ title: "", category: "Graphic Design", description: "" });
    setPreview("");
    setModalOpen(false);
  };

  return (
    <main>
      <section className="page-hero portfolio-hero section-shell">
        <p className="eyebrow">Our Creative Works</p>
        <h1>Ideas transformed into <span>impactful experiences.</span></h1>
        <p>Explore identity, visual communication and digital experiences created at Zeus Technology.</p>
      </section>

      <section className="portfolio-section section-shell">
        <div className="portfolio-toolbar">
          <div className="portfolio-filters" role="tablist" aria-label="Portfolio categories">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
                role="tab"
                aria-selected={filter === item}
              >{item}</button>
            ))}
          </div>
          <button className="add-project" onClick={() => setModalOpen(true)}><Plus /> Add project</button>
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, index) => (
            <article className={`portfolio-card ${index === 0 ? "featured" : ""}`} key={project.id}>
              <div className={`portfolio-image ${project.id === "brand-growth" ? "poster-preview" : ""}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="poster-art">
                    <div className="poster-ring" />
                    <p>Grow beyond.</p>
                    <strong>BRAND<br />GROWTH</strong>
                    <span>Build. Brand. Launch.</span>
                  </div>
                )}
                <div className="portfolio-overlay"><span>View project</span><ArrowRight /></div>
              </div>
              <div className="portfolio-info">
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <span>{project.type}</span>
              </div>
              <div className="project-story">
                <p>{project.description}</p>
                {project.deliverables && (
                  <ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                )}
                <small>{project.tools && `Tools: ${project.tools}`}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setModalOpen(false)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close"><X /></button>
            <p className="eyebrow">Add to portfolio</p>
            <h2 id="project-modal-title">Create a project</h2>
            <form onSubmit={addProject}>
              <label>Project name<input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required /></label>
              <label>Category
                <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
                  {filters.slice(1).map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>Description<textarea rows="4" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /></label>
              <label className="upload-box">
                <input type="file" accept="image/*" onChange={handleImage} />
                {preview ? <img src={preview} alt="Selected project preview" /> : <><Upload /><span>Upload project image</span><small>PNG, JPG or WebP</small></>}
              </label>
              <button className="primary-button" type="submit">Add project <ArrowRight size={18} /></button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

const CareerPage = () => (
  <main>
    <section className="page-hero section-shell">
      <p className="eyebrow">Careers</p>
      <h1>Build the future <span>with us.</span></h1>
    </section>
    <section className="career-section section-shell">
      <div><Palette /><h2>Designers</h2><p>We value curious minds who turn ideas into clear visual experiences.</p></div>
      <div><Code2 /><h2>Developers</h2><p>Join us to build reliable, modern and accessible digital products.</p></div>
      <div><Search /><h2>Strategists</h2><p>Help brands understand people, data and opportunities.</p></div>
    </section>
  </main>
);

const ContactPage = () => (
  <main>
    <section className="contact-section section-shell">
      <div className="contact-copy">
        <p className="eyebrow">Start a conversation</p>
        <h1>Have an idea?<br /><span>Let us create it.</span></h1>
        <a href="mailto:thekarthikeyan.dg@gmail.com"><Mail /> thekarthikeyan.dg@gmail.com</a>
      </div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); alert("Thank you! We will contact you soon."); }}>
        <label>Name<input name="name" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Service
          <select name="service"><option>Web Designing</option><option>Data Analysis</option><option>Content Creating</option><option>Brand Identity</option></select>
        </label>
        <label>Tell us about your project<textarea name="message" rows="5" required /></label>
        <button className="primary-button" type="submit">Send inquiry <ArrowRight size={18} /></button>
      </form>
    </section>
  </main>
);

const PrivacyPage = () => (
  <main>
    <section className="page-hero section-shell">
      <p className="eyebrow">Legal</p>
      <h1>Privacy <span>Policy.</span></h1>
    </section>
    <section className="privacy-section section-shell">
      <h2>Information we collect</h2>
      <p>We may collect contact and project details you voluntarily submit through our forms.</p>
      <h2>How we use information</h2>
      <p>Information is used to respond to enquiries, deliver services and improve the Zeus Technology experience.</p>
      <h2>Contact</h2>
      <p>For privacy questions, email <a href="mailto:thekarthikeyan.dg@gmail.com">thekarthikeyan.dg@gmail.com</a>.</p>
    </section>
  </main>
);

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ThunderCursor />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
