import React from "react";
import "./i18n";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSelectorWrapper = styled.div`
  text-align: right;
  margin-top: 13px;
  margin-right: 44px;
`;
const Label = styled.label`
  color: white;
`;
const select = styled.select`
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  background: mintcream;
`;
class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      value: "en-US"
    };
  }
  componentWillMount() {
    var languages = navigator.languages;
    //var languages = acceptLanguage.split(',') || [];
    //languages = this.state.languages.concat(languages);
    this.setState(
      {
        languages: [...this.state.languages, languages]
      },
      () => {}
    );
  }

  changeLanguage = (i18n, event) => {
    i18n.changeLanguage(event.target.value);
    this.setState({
      value: event.target.value
    });
  };
  render() {
    const { t, i18n } = this.props;
    const selectItems1 = this.state.languages[0].map((language ,index) => (
      <option key={index}>{language}</option>
    ));
    return (
      <LanguageSelectorWrapper>
        <Label>Language:</Label>{" "}
        <select
          value={this.state.value}
          onChange={this.changeLanguage.bind(this, i18n)}
        >
          {selectItems1}
        </select>
      </LanguageSelectorWrapper>
    );
  }
}

export default withTranslation()(LanguageSelector);
