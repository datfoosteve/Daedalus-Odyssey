// app/projects/route.ts

import { Request, Response } from 'node-fetch';  // Import types from node-fetch or any fetch library you're using

export async function GET(request: Request): Promise<Response> {
  // You could use the fetch API or any other HTTP client you prefer
  const response = await fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${process.env.GITHUB_PAT}`,
    },
  });

  // Check if the request was successful
  if (!response.ok) {
    // You could return a custom error response here
    return new Response('Failed to fetch repositories', { status: response.status });
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
