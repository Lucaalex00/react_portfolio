import React, { useEffect, useState } from 'react';
import FetchGitHubRepos from '../../stores/apiProjects';

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Function to generate a random dark color
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // Ensure the color is not too light
    const isTooLight = parseInt(color.substring(1), 16) > 0xFFFFFF;
    return isTooLight ? generateRandomColor() : color;
  };

  useEffect(() => {
    // CALL API
    const getRepos = async () => {
      try {
        const data = await FetchGitHubRepos(); 
        if (data) {
          setRepos(data); 
        }
      } catch (err) {
        setError("Error during resources' loading");
      } finally {
        setLoading(false); 
      }
    };

    getRepos(); // CALL API WHEN PAGE IS REFRESH
  }, []);

  // LOADING
  if (loading) {
    return <p className="text-center  text-lg">Caricamento...</p>;
  }

  // ERROR
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // repo views
  return (
    <div className="p-5 my-[150px]">
      <h1 className="text-center text-3xl font-bold mb-8">Repository di GitHub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white text-white text-shadow-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            style={{ backgroundColor: generateRandomColor() }}
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <h3 className="text-xl font-bold mb-3">{repo.name}</h3>
            <p className="text-sm italic mb-4">
              {repo.description || 'No description available.'}
            </p>
            <p className="text-sm mb-2">
              <strong>Language:</strong> {repo.language || 'N/A'}
            </p>
            <p className="text-sm mb-2">
              <strong>Created:</strong> {new Date(repo.created_at).toLocaleDateString()}
            </p>
            <p className="text-sm">
              <strong>Last updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
