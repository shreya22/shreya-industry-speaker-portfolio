const repoBasePath = "/shreya-industry-speaker-portfolio";

export const basePath = process.env.NODE_ENV === "production" ? repoBasePath : "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
