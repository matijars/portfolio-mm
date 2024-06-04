export interface ProjectInterface {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github: Link;
    liveDemo: Link;
  };
}

export interface Link {
  url: string;
  svg: string;
  text: string;
}
