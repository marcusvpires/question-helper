import ReactDOM from "react-dom";
import Repository from "../components/Repository";

export const create = (repository, selectRepository, setSelectRepository) => {
  try {
    ReactDOM.render(
      <Repository
        repository={repository}
        selectRepository={selectRepository}
        setSelectRepository={setSelectRepository}
      />,
      document.getElementById(repository.id)
    );
  } catch {
    const wrapper = document.createElement("li");
    wrapper.classList.add("RepositoryWrapper");
    wrapper.id = repository.id;

    document.getElementById("repositorySection").appendChild(wrapper);
    ReactDOM.render(
      <Repository
        repository={repository}
        selectRepository={selectRepository}
        setSelectRepository={setSelectRepository}
      />,
      document.getElementById(repository.id)
    );
    wrapper.scrollIntoView({ behavior: "smooth" });
  }
};
