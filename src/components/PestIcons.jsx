const SvgContainer = ({ children, className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Individual Icon Components
const Ant = ({ className }) => <SvgContainer className={className}><circle cx="9" cy="12" r="1.5"/><circle cx="13" cy="12" r="2"/><circle cx="17" cy="12" r="1.5"/><path d="M10 10l-2-2M16 10l2-2M10 14l-2 2M16 14l2 2"/></SvgContainer>;
const Bedbug = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="12" rx="5" ry="7"/><path d="M9 9h6M9 12h6M9 15h6"/><path d="M8 8l-3-2M8 16l-3 2M16 8l3-2M16 16l3 2"/></SvgContainer>;
const Moth = ({ className }) => <SvgContainer className={className}><path d="M12 12c-4-6-10-4-8 2 2 6 8 6 8-2Z"/><path d="M12 12c4-6 10-4 8 2-2 6-8 6-8-2Z"/><circle cx="12" cy="13" r="1.5"/><path d="M10 9l-2-3M14 9l2-3"/></SvgContainer>;
const Beetle = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="13" rx="5" ry="7"/><path d="M12 6v14M8 9h8M8 17h8"/><path d="M7 10l-3-2M7 16l-3 2M17 10l3-2M17 16l3 2"/></SvgContainer>;
const Cockroach = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="12" rx="4" ry="8"/><path d="M12 4v16"/><path d="M10 6L7 3M14 6l3-3"/><path d="M9 9l-4-2M9 15l-4 2M15 9l4-2M15 15l4 2"/></SvgContainer>;
const Mouse = ({ className }) => <SvgContainer className={className}><ellipse cx="10" cy="13" rx="7" ry="5"/><circle cx="16" cy="11" r="4"/><circle cx="18" cy="10" r="1" fill="currentColor"/><path d="M19 12h3M5 13H2"/></SvgContainer>;
const Flea = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="12" rx="4" ry="7"/><path d="M9 10l-4-2M9 14l-4 2M15 10l4-2M15 14l4 2"/><path d="M11 18l-2 3M13 18l2 3"/></SvgContainer>;
const Wasp = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="13" rx="3" ry="7"/><path d="M9 11h6M9 15h6"/><path d="M12 6c-5-4-8 2-3 5M12 6c5-4 8 2 3 5"/><path d="M12 20v2"/></SvgContainer>;
const Bee = ({ className }) => <SvgContainer className={className}><ellipse cx="12" cy="13" rx="4" ry="6"/><path d="M8 11h8M8 15h8"/><path d="M12 8c-5-4-7 2-2 5M12 8c5-4 7 2 2 5"/></SvgContainer>;
const Squirrel = ({ className }) => <SvgContainer className={className}><path d="M16 16c-4 4-10 0-8-6 1-4 6-6 10-2"/><path d="M16 16c4 0 7-5 5-10-2-4-7-3-6 1 0 3 4 3 4 0"/><circle cx="12" cy="11" r="3"/><path d="M10 8l-2-3M14 8l2-3"/></SvgContainer>;
const Hygiene = ({ className }) => <SvgContainer className={className}><path d="M9 8h6v12c0 2-2 3-5 3s-5-1-5-3V8Z"/><path d="M11 8V3h2v5"/><path d="M18 9l3-3M19 13h2M18 17l2 2"/></SvgContainer>;
const Bird = ({ className }) => <SvgContainer className={className}><path d="M5 13c5-6 10-7 14-2"/><path d="M12 11c3-6 8-8 11-3-4 0-6 4-8 7"/><path d="M9 13c2 3 5 4 8 3"/><path d="M18 10l4-1-3 3"/></SvgContainer>;

export const PestIcon = ({ type, className = "" }) => {
  const iconMap = {
    ant: <Ant className={className} />,
    bedbug: <Bedbug className={className} />,
    moth: <Moth className={className} />,
    beetle: <Beetle className={className} />,
    cockroach: <Cockroach className={className} />,
    mouse: <Mouse className={className} />,
    flea: <Flea className={className} />,
    wasp: <Wasp className={className} />,
    bee: <Bee className={className} />,
    squirrel: <Squirrel className={className} />,
    hygiene: <Hygiene className={className} />,
    bird: <Bird className={className} />
  };

  return iconMap[type] || iconMap.ant;
};