import axios from 'axios';
import {
  GITHUB_USER_RESOURCE_QUERY,
  NAME_PLACEHOLDER,
  BASE_URL,
  GITHUB_PULL_REQUEST_COUNT_BY_STATE,
  GITHUB_ISSUE_COUNT_BY_STATE,
} from './constants';

// Axios Instance
const API_CLIENT = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types Start
export interface ContributionDays {
  contributionCount: number;
  date: string;
}
export interface ContributionWeeks {
  contributionDays: ContributionDays[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeeks[];
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
  totalRepositoryContributions: number;
  totalPullRequestReviewContributions: number;
}

export interface LanguageEdgeNode {
  name: string;
  color: string;
}

export interface LanguageEdge {
  node: LanguageEdgeNode;
}

export interface Language {
  edges: LanguageEdge[];
}

export interface PinnedItemNode {
  name: string;
  description: string;
  nameWithOwner: string;
  url: string;
  languages: Language;
  visibility: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
}

export interface PinnedItems {
  totalCount: number;
  nodes: PinnedItemNode[];
}

export interface TotalCount {
  totalCount: number;
}

export interface OrganizationNode {
  name: string;
  url: string;
  avatarUrl: string;
}

export interface UserOrganizations {
  totalCount: number;
  edges: {
    node: OrganizationNode;
  }[];
}

export interface GithubUserResource {
  data: {
    user: {
      contributionsCollection: ContributionsCollection;
      pinnedItems: PinnedItems;
      pullRequests: TotalCount;
      issues: TotalCount;
      starredRepositories: TotalCount;
      repositoriesContributedTo: TotalCount;
      repositories: TotalCount;
      gists: TotalCount;
      followers: TotalCount;
      organizations: UserOrganizations;
    };
  };
}

export interface SummaryOverview {
  totalPullRequests: number;
  totalIssues: number;
  totalStarredRepositories: number;
  totalRepositoriesContributedTo: number;
  totalRepositories: number;
  totalGists: number;
  totalFollowers: number;
  totalPullRequestReviewed: number;
  popularRepositories: PinnedItemNode[];
  contributedOrganizations: OrganizationNode[];
}

export interface UserContribution
  extends Pick<ContributionCalendar, 'totalContributions'> {
  contributionDays: ContributionDays[];
}

export interface PullRequestCount {
  data: {
    user: {
      pullRequests: {
        totalCount: number;
      };
    };
  };
}
export interface IssueCount {
  data: {
    user: {
      issues: {
        totalCount: number;
      };
    };
  };
}

export interface PullRequestCountByState {
  open: number;
  closed: number;
  merged: number;
}

export type IssueCountByState = Pick<
  PullRequestCountByState,
  'open' | 'closed'
>;

export interface ContributionSummary extends SummaryOverview {
  totalContributionCount: number;
  contributionByDate: ContributionDays[];
}

export interface FunctionParam {
  userName: string;
  githubToken: string;
}

export interface ResourceCount {
  count: number;
  state: PullRequestState | IssueState;
}

export enum PullRequestState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  MERGED = 'MERGED',
}

export enum IssueState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

// Types End

/**
 * Get contribution summary
 * @param param FunctionParam
 * @returns user contribution summary
 */
export const getContributionSummary = async (
  param: FunctionParam
): Promise<ContributionSummary> => {
  const { userName, githubToken } = param;

  const query = GITHUB_USER_RESOURCE_QUERY.replace(NAME_PLACEHOLDER, userName);

  const apiData = JSON.stringify({
    query,
  });

  const response = await API_CLIENT.post<GithubUserResource>('', apiData, {
    headers: { Authorization: `bearer ${githubToken}` },
  });

  const userResource = response.data.data.user;

  const contributionsCollection = userResource.contributionsCollection;
  const contributionCalendar = contributionsCollection.contributionCalendar;

  const contributionDays: ContributionDays[] =
    contributionCalendar.weeks.reduce((prev, curr) => {
      return [...prev, ...curr.contributionDays];
    }, [] as ContributionDays[]);

  return {
    totalContributionCount: contributionCalendar.totalContributions,
    contributionByDate: contributionDays,
    totalPullRequests: userResource.pullRequests.totalCount,
    totalIssues: userResource.issues.totalCount,
    totalStarredRepositories: userResource.starredRepositories.totalCount,
    totalRepositoriesContributedTo:
      userResource.repositoriesContributedTo.totalCount,
    totalRepositories: userResource.repositories.totalCount,
    totalGists: userResource.gists.totalCount,
    totalFollowers: userResource.followers.totalCount,
    totalPullRequestReviewed:
      userResource.contributionsCollection.totalPullRequestReviewContributions,
    popularRepositories: userResource.pinnedItems.nodes,
    contributedOrganizations: userResource.organizations.edges.map(
      (edge) => edge.node
    ),
  };
};

/**
 * Get pull request count by state
 * @param param FunctionParam
 * @param state PullRequestState
 * @returns pull request count by state
 */
export const getPullRequestCountByState = async (
  param: FunctionParam,
  state: PullRequestState
): Promise<ResourceCount> => {
  const { userName, githubToken } = param;
  const query = GITHUB_PULL_REQUEST_COUNT_BY_STATE.replace(
    NAME_PLACEHOLDER,
    userName
  );
  const apiData = JSON.stringify({
    query,
    variables: { states: state },
  });

  const response = await API_CLIENT.post<PullRequestCount>('', apiData, {
    headers: { Authorization: `bearer ${githubToken}` },
  });

  const count = response.data.data.user.pullRequests.totalCount;

  return { state, count };
};

/**
 * Get issue count by state
 * @param param FunctionParam
 * @param state IssueState
 * @returns pull issue count by state
 */
export const getIssueCountByState = async (
  param: FunctionParam,
  state: IssueState
): Promise<ResourceCount> => {
  const { userName, githubToken } = param;
  const query = GITHUB_ISSUE_COUNT_BY_STATE.replace(NAME_PLACEHOLDER, userName);
  const apiData = JSON.stringify({
    query,
    variables: { states: state },
  });

  const response = await API_CLIENT.post<IssueCount>('', apiData, {
    headers: { Authorization: `bearer ${githubToken}` },
  });

  const count = response.data.data.user.issues.totalCount;

  return { state, count };
};
