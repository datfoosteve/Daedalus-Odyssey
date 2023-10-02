// src/app/projects/page.tsx

import axios from 'axios';
import RepositoryCard from '../../components/RepositoryCard';
import Repository from '../../types/Repository';  // Adjust the import path to match your project structure

interface ProjectsPageProps {
    repositories: Repository[];
  }

// Define an async function to fetch data
async function fetchRepositories() {
  const response = await axios.get('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${process.env.GITHUB_PAT}`,
    },
  });
  return response.data;
}

// Use getServerSideProps to fetch data server-side
export async function getServerSideProps() {
  const repositories = await fetchRepositories();
  return { props: { repositories } };
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ repositories }) => {
    return (
      <div>
        {repositories.map((repo: Repository) => (
          <RepositoryCard key={repo.id} {...repo} />
        ))}
      </div>
    );
  };

export default ProjectsPage;
