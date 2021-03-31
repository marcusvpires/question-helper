import React from "react";
import * as S from "./styled";

class Header extends React.Component {
  constructor(props) {
    super(props);
    let repository = window.localStorage.getItem('repository')
    if (!repository) { repository = 'Undefined' }
    this.state = { repository: repository };
    this.repositoryChange = this.repositoryChange.bind(this);
  }

  repositoryChange(event) {
    this.setState({ repository: event.target.value });
    localStorage.setItem('repository', event.target.value);
  }

  render() {
    return (
      <S.HeaderWrapper>
        <S.HeaderRepository
          type="text"
          name="Repository name"
          title="Repository name"
          placeholder="Repository"
          value={this.state.repository}
          onChange={this.repositoryChange}
        />
      </S.HeaderWrapper>
    );
  }
}

export default Header;
