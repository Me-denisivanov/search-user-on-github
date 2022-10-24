import { GitHubUser } from './../types/user';

export const isGitHubUser = (user: any): user is GitHubUser => 'id' in user;
