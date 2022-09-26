
export interface Frontmatter {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  readMore: string;
  image?: string;
  colorPalette: string;
  tags: string[];
  headerAnimation: string;
}

export default interface PortfolioModel {
  code: string;
  slug: string;
  frontmatter: Frontmatter;

}
