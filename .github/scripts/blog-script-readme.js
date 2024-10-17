const fs = require('fs');
const axios = require('axios');
const Parser = require('rss-parser');

const parser = new Parser();
const README_PATH = 'README.md';

const HASHNODE_USERNAME = 'your-hashnode-username';
const GITBOOK_SPACE_ID = 'your-gitbook-space-id';

async function getHashnodePosts() {
  const response = await axios.post('https://api.hashnode.com', {
    query: `
      {
        user(username: "${HASHNODE_USERNAME}") {
          publication {
            posts(page: 1) {
              title
              brief
              slug
            }
          }
        }
      }
    `
  });
  return response.data.data.user.publication.posts.slice(0, 5);
}

async function getGitBookPosts() {
  const feed = await parser.parseURL(`https://${GITBOOK_SPACE_ID}.gitbook.io/rss.xml`);
  return feed.items.slice(0, 5);
}

async function updateReadme() {
  const HASHNODE_USERNAME = process.env.HASHNODE_USERNAME;
  const GITBOOK_SPACE_ID = process.env.GITBOOK_SPACE_ID;

  let content = '## Latest Blog Posts\n';
  content += '### Hashnode\n';
  hashnodePosts.forEach(post => {
    content += `- [${post.title}](https://${HASHNODE_USERNAME}.hashnode.dev/${post.slug})\n`;
  });
  content += '\n### GitBook\n';
  gitbookPosts.forEach(post => {
    content += `- [${post.title}](${post.link})\n`;
  });

  const readme = fs.readFileSync(README_PATH, 'utf-8');
  const updatedReadme = readme.replace(
    /<!-- BLOG-POST-LIST:START -->[\s\S]*<!-- BLOG-POST-LIST:END -->/,
    `<!-- BLOG-POST-LIST:START -->\n${content}\n<!-- BLOG-POST-LIST:END -->`
  );

  fs.writeFileSync(README_PATH, updatedReadme);
}

updateReadme();
