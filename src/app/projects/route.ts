// src/app/projects/route.ts

// src/app/projects/route.ts

// src/app/projects/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(): Promise<NextResponse> {
  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_PAT}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    // Use NextResponse.json to return a JSON error response with a status code of 500
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}



// This code defines a route in a Next.js application that fetches a list of repositories from the GitHub API and returns them as a JSON response.

// The GET function is an asynchronous function that returns a Promise of a NextResponse object. Inside the function, an HTTP GET request is made to the GitHub API to fetch a list of repositories for the authenticated user. 
// If the request is successful, 
// the response data is returned as a JSON response using the NextResponse.json method.
//  If the request fails, an error message is logged to the console, and a JSON error response with a status code of 500 is returned using the NextResponse.json method.

