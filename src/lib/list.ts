import type { ArticleFrontmatter, ProjectFrontmatter } from "./types";
import { getShortDescription, processContentInDir } from "./utils";

export const articles = (
  await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>(
    "blog",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        time: data.frontmatter.time,
        featured: data.frontmatter.featured,
        timestamp: data.frontmatter.timestamp,
        filename: `/blog/${data.frontmatter.filename}`,
      };
    }
  )
).sort((a, b) => {
  const dateA = new Date(a.timestamp);
  const dateB = new Date(b.timestamp);
  return dateB.getTime() - dateA.getTime();
});

export const events = (
  await processContentInDir<ProjectFrontmatter, ProjectFrontmatter>(
    "events",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        githubUrl: data.frontmatter.githubUrl,
        liveUrl: data.frontmatter.liveUrl,
        featured: data.frontmatter.featured,
        timestamp: data.frontmatter.timestamp,
        filename: `/events/${data.frontmatter.filename}`,
      };
    }
  )
).sort((a, b) => {
  const dateA = new Date(a.timestamp);
  const dateB = new Date(b.timestamp);
  return dateB.getTime() - dateA.getTime();
});
