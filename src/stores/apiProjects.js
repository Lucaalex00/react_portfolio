const FetchGitHubRepos = async () => {
    const url = "https://api.github.com/users/Lucaalex00/repos?per_page=100";

    try {
        const response = await fetch(url);

        // CHECK RESPONSE
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log(data);
        return data; 
    } catch (error) {

        console.error("Errore durante la chiamata API:", error);
        return null; 
    }
};
export default FetchGitHubRepos;