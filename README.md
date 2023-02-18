# Github User Contribution Summary

<div align="center">
<h4 align="center">A library with utilities to get the GitHub user contribution summary by username.
</h4>
<p align="center">
    <a href="https://ygc.sachinchaurasiya.dev" target="blank">View Demo</a>
    ·
    <a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/issues/new/choose">Request Feature</a>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/github-user-contribution-summary" target="blank">
<img alt="Package-Version" src="https://img.shields.io/github/package-json/v/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square">
</a>
  <a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square" alt="Your-Github-Contributions licence" />
</a>
<a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/fork" target="blank">
<img src="https://img.shields.io/github/forks/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square" alt="Your-Github-Contributions forks"/>
</a>
<a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square" alt="Your-Github-Contributions stars"/>
</a>
<a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/issues" target="blank">
<img src="https://img.shields.io/github/issues/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square" alt="Your-Github-Contributions issues"/>
</a>
<a href="https://github.com/Sachin-chaurasiya/github-user-contribution-summary/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/Sachin-chaurasiya/github-user-contribution-summary?style=flat-square" alt="Your-Github-Contributions pull-requests"/>
</a>
</p>
</div>

> To get your personal access token you can refer this guide [creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Installation

```bash
npm install github-user-contribution-summary

#OR

yarn add github-user-contribution-summary
```

## Usage

### With ES6

#### ContributionSummary

```js
import { getContributionSummary } from 'github-user-contribution-summary';

const getUserContributionSummary = async () => {

  const argument = {
    userName: 'Sachin-chaurasiya',
    githubToken: '',
  };

  try {
    const response = await getContributionSummary(
      argument
    );
    console.log(response);
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

getUserContributionSummary();

// Output

{
    "totalContributionCount": 3287,
    "contributionByDate": [
        {
            "contributionCount": 5,
            "date": "2022-11-18"
        },
        ...
     ],
    "totalPullRequests": 705,
    "totalIssues": 316,
    "totalStarredRepositories": 171,
    "totalRepositoriesContributedTo": 31,
    "totalRepositories": 60,
    "totalGists": 3,
    "totalFollowers": 63,
    "totalPullRequestReviewed": 604
}
```

#### Pull Request Count

```js
import { getPullRequestCountByState } from 'github-user-contribution-summary'

const getPullRequestCount = async () => {
  try {
    const data = await getPullRequestCountByState(
      {
        userName: 'Sachin-chaurasiya',
        githubToken: '',
      },
      'MERGED'
    );

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
};

getPullRequestCount();

// Output

{ state: 'MERGED', count: 671 }

```

#### Issue Count

```js
import { getIssueCountByState } from 'github-user-contribution-summary'

const getIssueCount = async () => {
  try {
    const data = await getIssueCountByState(
      {
        userName: 'Sachin-chaurasiya',
        githubToken: '',
      },
      'CLOSED'
    );

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
};

getIssueCount();

// Output

{ state: 'CLOSED', count: 301 }

```

### With CommonJs

#### ContributionSummary

```js
const  { getContributionSummary } = require('github-user-contribution-summary');

const getUserContributionSummary = async () => {

  const argument = {
    userName: 'Sachin-chaurasiya',
    githubToken: '',
  };

  try {
    const response = await getContributionSummary(
      argument
    );
    console.log(response);
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

getUserContributionSummary();

// Output

{
    "totalContributionCount": 3287,
    "contributionByDate": [
        {
            "contributionCount": 5,
            "date": "2022-11-18"
        },
        ...
     ],
    "totalPullRequests": 705,
    "totalIssues": 316,
    "totalStarredRepositories": 171,
    "totalRepositoriesContributedTo": 31,
    "totalRepositories": 60,
    "totalGists": 3,
    "totalFollowers": 63,
    "totalPullRequestReviewed": 604
}
```

## Contributors

We ❤️ all contributions, big and small! Check out our [CONTRIBUTING](./CONTRIBUTING.md) guide to get started and let us know how we can help.

Don't want to miss anything? Give the project a ⭐ 🚀 

A HUGE THANK YOU to all our supporters!

[![Stargazers repo roster for @Sachin-chaurasiya/github-user-contribution-summary](https://reporoster.com/stars/Sachin-chaurasiya/github-user-contribution-summary)](https://github.com/Sachin-chaurasiya/github-user-contribution-summary/stargazers)
