// src/app/projects/page.tsx

import React, { useState, useEffect, FC } from 'react';  // Import React and necessary hooks
import axios from 'axios';
import RepositoryCard from '../../components/RepositoryCard';
import Repository from '../../types/Repository';  // Adjust the import path to match your project structure

// Define an async function to fetch data
async function fetchRepositories() {
  const response = await axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${process.env.GITHUB_PAT}`,
    },
  });
  return response.data;
}

interface ProjectsPageProps {
  params: { [key: string]: string };  // Define a prop type for params
}

const ProjectsPage: FC<ProjectsPageProps> = ({ params }) => {
  // Assume that `params.username` contains the GitHub username whose repositories you want to fetch
  const [repositories, setRepositories] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetchRepositories().then(setRepositories);
  }, []);
  
  return (
    <div>
      {repositories.map((repo: Repository) => (
        <RepositoryCard key={repo.id} {...repo} />
      ))}
    </div>
  );
};

export default ProjectsPage;
