# Github User Contribution Summary

A library with utilities to get the GitHub user contribution summary by username.

## Example

```js
const getData = async () => {
  try {
    const response = await getContributionSummary(
      'github_username',
      'github_token'
    );
    console.log(response);
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

getData();
```
