import React, { useEffect, useState, useCallback } from 'react';
import FetchGitHubRepos from '../../stores/apiProjects';

// Function to generate a consistent color for a repository based on its ID
const getColorForRepo = (repoId) => {
  // Generate a consistent color based on repoId
  const seed = parseInt(repoId, 10);
  const color = `#${(seed * 1234567).toString(16).slice(-6)}`;
  return color;
};

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]); 
  const [filteredRepos, setFilteredRepos] = useState([]); // State for filtered repos
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [filter, setFilter] = useState(''); // State for combined name and language filter
  const [sortOrder, setSortOrder] = useState('desc'); // State for sorting order

  useEffect(() => {
    // Fetch repos from API
    const getRepos = async () => {
      try {
        const data = await FetchGitHubRepos(); 
        if (data) {
          setRepos(data); 
          setFilteredRepos(data); // Set filtered repos to all repos initially
        }
      } catch (err) {
        setError("Error during resources' loading");
      } finally {
        setLoading(false); 
      }
    };

    getRepos(); // Fetch repos when the page is refreshed
  }, []);

  // Function to handle filtering and sorting
  const handleFilterAndSort = useCallback(() => {
    const lowercasedFilter = filter.toLowerCase();

    // Filter repos based on name and language
    let filtered = repos.filter(repo =>
      repo.name.toLowerCase().includes(lowercasedFilter) ||
      (repo.language || '').toLowerCase().includes(lowercasedFilter)
    );

    // Sort repos by creation date
    filtered.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setFilteredRepos(filtered);
  }, [filter, sortOrder, repos]); // Include dependencies in useCallback

  // Effect to apply filter and sorting whenever filter or sort order changes
  useEffect(() => {
    handleFilterAndSort();
  }, [handleFilterAndSort]); // Include handleFilterAndSort in dependencies

  // Handle filter input change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // Repo views
  return (
    <div className="p-5 my-20 mx-auto max-w-screen-lg">
      <h1 className="text-center text-3xl font-bold mb-8">GitHub Repositories</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
        {/* Combined input for name and language filter */}
        <input
          type="text"
          placeholder="Filter by name or language..."
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border mt-5 border-gray-300 bg-transparent text-gray-900 rounded flex-grow"
          style={{ maxWidth: '400px' }}
        />
        
        {/* Dropdown selector for sorting */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 border bg-transparent border-gray-800 rounded"
        >
          <option value="desc">Newest first</option>
          <option value="asc">Oldest first</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            style={{ backgroundColor: getColorForRepo(repo.id) }}
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
