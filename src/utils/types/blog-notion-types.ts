export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: any;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  tags: Tags;
  slug: Slug;
  title: Title;
  author: Author;
  img: Img;
  text: TextInfo;
}

export interface TextInfo {
  id: string;
  type: string;
  title: TextInfo2;
  rich_text: RichText2[];
}

export interface TextInfo2 {
  type: string;
  text: string;
  annotations: Annotations2;
  plain_text: string;
  href: any;
  content: string;
}

export interface RichText2 {
  type: File;
  files: [ImageFile];
  text: TextInfo2;
  annotations: Annotations2;
  title: string;
  img: Img;
}

export interface Post {
  id: string;
  type: string;
  rich_text: RichText2[];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  name: string;
  id: string;
  color: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: RichText[];
}

interface ImageFile {
  name: string;
  type: string;
  file: {
    url: string;
    expiry_time: string;
  };
}

export interface Img {
  id: string;
  type: File;
  files: [ImageFile];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Author {
  id: string;
  type: string;
  title: Title2[];
}

export interface author {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Title {
  id: string;
  type: string;
  title: Title2[];
}

export interface Title2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PageOrDatabase {}
