import {lazy} from "react"

export const path = '/posts';
export const title = 'Posts';
export const exact = true;
export const component = lazy(() => import('./posts.js'));
