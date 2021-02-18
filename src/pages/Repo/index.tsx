import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/thiagomathiassimon"}>
          thiagomathiassimon
        </Link>

        <span>/</span>

        <Link
          className={"reponame"}
          to={
            "/thiagomathiassimon/Projeto-de-aplicacao-1-To-Do-List-Thiago-Mathias-Simon"
          }
        >
          Projeto-de-aplicacao-1-To-Do-List-Thiago-Mathias-Simon
        </Link>
      </Breadcrumb>

      <p>
        Repositório do Projeto de aplicação 1 (primeiro projeto avaliativo do
        curso DEVinHouse).
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>10</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={
          "https://github.com/thiagomathiassimon/Projeto-de-aplicacao-1-To-Do-List-Thiago-Mathias-Simon"
        }
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
