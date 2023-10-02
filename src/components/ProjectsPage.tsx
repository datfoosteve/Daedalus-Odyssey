import React, { useState, useEffect } from 'react';
import RepositoryCard from '@/components/RepositoryCard';

const ProjectsPage: React.FC = () => {
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
          <RepositoryCard key={repo.id} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
