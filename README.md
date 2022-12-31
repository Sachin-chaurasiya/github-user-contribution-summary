# Github User Contribution Summary

A library with utilities to get the GitHub user contribution summary by username.

> To get your personal access token you can refer this guide [creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Usage

1. Codesandbox example

[github-user-contribution-summary](https://codesandbox.io/embed/determined-monad-gjxyqd?fontsize=14&hidenavigation=1&theme=dark)

2. With ES6

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
        {
            "contributionCount": 14,
            "date": "2022-11-19"
        },
        {
            "contributionCount": 17,
            "date": "2022-11-20"
        },
        {
            "contributionCount": 19,
            "date": "2022-11-21"
        },
        {
            "contributionCount": 15,
            "date": "2022-11-22"
        },
        {
            "contributionCount": 19,
            "date": "2022-11-23"
        },
        {
            "contributionCount": 1,
            "date": "2022-11-24"
        },
        {
            "contributionCount": 14,
            "date": "2022-11-25"
        },
        {
            "contributionCount": 7,
            "date": "2022-11-26"
        },
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

3. With CommonJs

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
        {
            "contributionCount": 14,
            "date": "2022-11-19"
        },
        {
            "contributionCount": 17,
            "date": "2022-11-20"
        },
        {
            "contributionCount": 19,
            "date": "2022-11-21"
        },
        {
            "contributionCount": 15,
            "date": "2022-11-22"
        },
        {
            "contributionCount": 19,
            "date": "2022-11-23"
        },
        {
            "contributionCount": 1,
            "date": "2022-11-24"
        },
        {
            "contributionCount": 14,
            "date": "2022-11-25"
        },
        {
            "contributionCount": 7,
            "date": "2022-11-26"
        },
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
