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





