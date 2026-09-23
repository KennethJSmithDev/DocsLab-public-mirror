import "./style.css";
import { findProject, projects, type Project } from "./content";

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("App root is missing");
const app: HTMLDivElement = appElement;

const email = "kenny.smith.email+dev@gmail.com";
const githubUrl = "https://github.com/KennethJSmithDev";

const navItems = [
  ["/", "Home"],
  ["/portfolio", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

const legacyRoutes: Record<string, string> = {
  "/operator": "/about",
  "/diagnostics": "/portfolio/iige",
  "/logs": "/portfolio",
};

function nav(currentPath: string): string {
  return navItems
    .map(([href, label]) => {
      const active =
        href === "/"
          ? currentPath === "/"
          : currentPath === href || currentPath.startsWith(`${href}/`);
      return `<a class="nav-link${active ? " is-current" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
    })
    .join("");
}

function layout(content: string, currentPath: string): string {
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="wordmark" href="/" aria-label="Kenneth J. Smith home">
          <span class="wordmark-mark">KJS</span>
          <span>Kenneth J. Smith</span>
        </a>
        <nav aria-label="Primary navigation"><div class="nav-list">${nav(currentPath)}</div></nav>
      </div>
    </header>
    <main id="main-content" tabindex="-1">${content}</main>
    <footer class="site-footer">
      <div>
        <span class="eyebrow">TECHNICAL PROTOTYPING & SYSTEMS DEVELOPMENT</span>
        <p>Building testable systems from unclear technical problems.</p>
      </div>
      <div class="footer-links">
        <a href="${githubUrl}">GitHub</a>
        <a href="mailto:${email}">Email</a>
      </div>
    </footer>
  `;
}

function projectCard(project: Project): string {
  const href = project.slug === "assembly" ? "/assembly" : `/portfolio/${project.slug}`;
  return `
    <a class="project-card" href="${href}">
      <span class="card-kicker">${project.status}</span>
      <h2>${project.title}</h2>
      <p>${project.summary}</p>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>
  `;
}

function home(): string {
  return `
    <section class="hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">KENNETH J. SMITH / DOC'S LAB</span>
        <h1>Technical systems made understandable.</h1>
        <p class="lede">I build technical prototypes, automation, and interactive systems by turning unclear problems into testable, working solutions.</p>
        <div class="action-row">
          <a class="button button-primary" href="/portfolio">View selected work</a>
          <a class="button button-secondary" href="/contact">Work with me</a>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Current focus">
        <span class="panel-index">CURRENT FOCUS</span>
        <h2>Proof before polish.</h2>
        <p>Unreal Engine systems, developer tooling, AI-assisted engineering workflows, and web prototypes built around clear evidence and inspectable behavior.</p>
        <ul class="plain-list">
          <li>Unreal Engine 5.8</li>
          <li>C++ / Blueprint systems</li>
          <li>Editor tooling and plugins</li>
          <li>Workflow automation</li>
          <li>Interactive web prototyping</li>
        </ul>
      </aside>
    </section>

    <section class="section-block">
      <div class="section-label"><span>SELECTED WORK</span><span>PUBLIC CASE STUDIES</span></div>
      <div class="project-grid">${projects.slice(0, 3).map(projectCard).join("")}</div>
      <div class="section-action"><a href="/portfolio">See all work →</a></div>
    </section>
  `;
}

function portfolio(): string {
  return `
    <section class="page-heading">
      <span class="eyebrow">SELECTED WORK</span>
      <h1>Projects and technical systems.</h1>
      <p class="lede">A focused set of prototypes and systems spanning Unreal Engine, developer tooling, local-first software, automation, and interactive experiences.</p>
    </section>
    <div class="project-grid">${projects.map(projectCard).join("")}</div>
  `;
}

function projectDetail(project: Project): string {
  return `
    <section class="page-heading">
      <span class="eyebrow">${project.status}</span>
      <h1>${project.title}</h1>
      <p class="lede">${project.summary}</p>
    </section>
    <section class="two-column">
      <article class="surface">
        <span class="eyebrow">FOCUS</span>
        <h2>What this work explores</h2>
        <div class="tag-list">${project.focus.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
        <p class="project-note">This public case-study surface intentionally stays concise. Technical claims are limited to the current published project state.</p>
      </article>
      <aside class="surface">
        <span class="eyebrow">NEXT</span>
        <h2>Keep exploring</h2>
        <div class="stacked-links">
          <a href="/portfolio">All selected work →</a>
          <a href="/contact">Discuss a project →</a>
        </div>
      </aside>
    </section>
  `;
}

function about(): string {
  return `
    <section class="page-heading">
      <span class="eyebrow">ABOUT</span>
      <h1>I build the path from idea to evidence.</h1>
      <p class="lede">My work centers on technical prototyping and systems development: understanding what already exists, finding the actual missing boundary, and building the smallest useful thing that proves the next step.</p>
    </section>
    <section class="two-column">
      <article class="surface">
        <span class="eyebrow">WORK</span>
        <h2>Where I spend my time</h2>
        <ul class="plain-list">
          <li>Unreal Engine technical prototyping</li>
          <li>C++ and Blueprint systems</li>
          <li>Editor tools and plugins</li>
          <li>Gameplay and system architecture</li>
          <li>AI-assisted engineering workflows</li>
          <li>MCP and tool integrations</li>
          <li>Debugging and dependency closure</li>
          <li>Interactive 3D and web prototyping</li>
        </ul>
      </article>
      <aside class="surface">
        <span class="eyebrow">APPROACH</span>
        <h2>Make the uncertainty smaller.</h2>
        <p>I prefer bounded experiments, explicit ownership, reproducible evidence, and systems that remain understandable after the prototype becomes real software.</p>
      </aside>
    </section>
  `;
}

function contact(): string {
  return `
    <section class="page-heading">
      <span class="eyebrow">CONTACT</span>
      <h1>Have a technical problem worth untangling?</h1>
      <p class="lede">For prototyping, automation, interactive systems, Unreal Engine work, or technical investigation, email is the simplest way to start.</p>
    </section>
    <section class="surface contact-panel">
      <span class="eyebrow">DIRECT CONTACT</span>
      <h2>${email}</h2>
      <p>Include the problem, what you have already tried, and what a useful outcome would look like. Perfect terminology is optional.</p>
      <div class="action-row">
        <a class="button button-primary" href="mailto:${email}">Send email</a>
        <a class="button button-secondary" href="${githubUrl}">View GitHub</a>
      </div>
    </section>
  `;
}

function notFound(): string {
  return `
    <section class="page-heading">
      <span class="eyebrow">404</span>
      <h1>That page isn't here.</h1>
      <p class="lede">The public site stays intentionally small. Use the main work index to find the current project surfaces.</p>
      <a class="button button-primary" href="/portfolio">View selected work</a>
    </section>
  `;
}

function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const replacement = legacyRoutes[normalized];
  if (replacement) {
    window.history.replaceState(null, "", replacement);
    return replacement;
  }
  if (normalized === "/portfolio/assembly") {
    window.history.replaceState(null, "", "/assembly");
    return "/assembly";
  }
  if (normalized === "/docslab") return "/";
  return normalized;
}

function render(): void {
  const path = normalizePath(window.location.pathname);
  let content = "";
  let title = "Kenneth J. Smith — Technical Prototyping & Systems Development";

  if (path === "/") {
    content = home();
  } else if (path === "/portfolio") {
    content = portfolio();
    title = "Selected Work — Kenneth J. Smith";
  } else if (path === "/about") {
    content = about();
    title = "About — Kenneth J. Smith";
  } else if (path === "/contact") {
    content = contact();
    title = "Contact — Kenneth J. Smith";
  } else if (path === "/assembly") {
    const project = findProject("assembly");
    content = project ? projectDetail(project) : notFound();
    title = "Assembly — Kenneth J. Smith";
  } else if (path.startsWith("/portfolio/")) {
    const project = findProject(path.slice("/portfolio/".length));
    content = project ? projectDetail(project) : notFound();
    title = project ? `${project.title} — Kenneth J. Smith` : "Not Found — Kenneth J. Smith";
  } else {
    content = notFound();
    title = "Not Found — Kenneth J. Smith";
  }

  app.innerHTML = layout(content, path);
  document.title = title;
}

render();
