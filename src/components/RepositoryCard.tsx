// src/components/RepositoryCard.tsx

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface RepositoryProps {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const RepositoryCard: React.FC<RepositoryProps> = ({
  name,
  description,
  html_url,
  language,
  stargazers_count,
  forks_count,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div>
        Language: {language} | Stars: {stargazers_count} | Forks: {forks_count}
      </div>
    </CardContent>
  </Card>
);

export default RepositoryCard;