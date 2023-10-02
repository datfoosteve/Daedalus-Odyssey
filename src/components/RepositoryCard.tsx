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
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  created_at: string;
  updated_at: string;
}

const RepositoryCard: React.FC<RepositoryProps> = ({
  name,
  description,
  html_url,
  language,
  stargazers_count,
  forks_count,
  owner,
  created_at,
  updated_at,
}) => (
  <Card className="bg-white shadow-lg rounded-lg p-6 mb-4">
    <CardHeader className="mb-4">
      <CardTitle>
        <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {name}
        </a>
      </CardTitle>
      <CardDescription className="text-gray-700">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center mb-2">
        <img src={owner.avatar_url} alt={`${owner.login}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
        <a href={owner.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {owner.login}
        </a>
      </div>
      <div className="text-gray-700">
        Language: {language} | Stars: {stargazers_count} | Forks: {forks_count}
      </div>
      <div className="text-gray-500 text-sm mt-2">
        Created: {new Date(created_at).toLocaleDateString()} | Updated: {new Date(updated_at).toLocaleDateString()}
      </div>
    </CardContent>
  </Card>
);

export default RepositoryCard;
