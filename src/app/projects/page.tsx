// src/app/projects/page.tsx

'use client' // Error components must be Client Components

import React, { useState, useEffect, FC } from 'react';
import RepositoryCard from '../../components/RepositoryCard';
import Repository from '../../types/Repository';  // adjust the import path to match your project structure

const ProjectsPage: FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);  // use Repository type here

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch('/projects');
      const data = await response.json();
      setRepositories(data);
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      {repositories.map((repo: Repository) => (  // use Repository type here
        <RepositoryCard
          key={repo.id}
          id={repo.id}
          name={repo.name}
          description={repo.description}
          html_url={repo.html_url}
          language={repo.language}
          stargazers_count={repo.stargazers_count}
          forks_count={repo.forks_count}
          owner={repo.owner}  // ensure this property exists in your data
          created_at={repo.created_at}  // ensure this property exists in your data
          updated_at={repo.updated_at}  // ensure this property exists in your data
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
