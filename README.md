# Github User Contribution Summary

A library with utilities to get the GitHub user contribution summary by username.

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
