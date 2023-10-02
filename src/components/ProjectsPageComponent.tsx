//src\components\ProjectsPage.tsx

import React, { useState, useEffect } from 'react';
import RepositoryCard from '@/components/RepositoryCard';

const ProjectsPageComponent: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch('http://localhost:3000/projects');
      const data = await response.json();
      setRepositories(data);
    };

    fetchRepositories();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repositories.map((repo: any) => (
  <RepositoryCard
    key={repo.id}
    id={repo.id}
    name={repo.name}
    description={repo.description}
    html_url={repo.html_url}
    language={repo.language}
    stargazers_count={repo.stargazers_count}
    forks_count={repo.forks_count}
    owner={repo.owner}
    created_at={repo.created_at}
    updated_at={repo.updated_at}
  />
))}
      </div>
    </div>
  );
};

export default ProjectsPageComponent;
