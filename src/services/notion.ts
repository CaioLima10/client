"use server";

import { NotionDatabaseResponse } from "@/utils/types/blog-notion-types";

const { Client } = require("@notionhq/client");
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DATABASE_ID = "7a155a9ddd914d23bb045d2916296630";
export async function getPosts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return typedResponse.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.title,
      text: post.properties.text,
      slug: post.properties.slug,
      author: post.properties.author,
      img: post.properties.img,
      tags: post.properties.tags,
      created_at: post.created_time,
      content: post.properties.slug.rich_text,
    };
  });
}

export async function getPost(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return {
    title: typedResponse.results[0].properties.title.title[0].plain_text,
    content: mdString.parent,
  };
}
