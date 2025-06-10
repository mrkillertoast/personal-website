export interface IProjectItem {
	id: string;
	title: string;
	status: 'completed' | 'in-progress' | 'idea' | 'archived' | 'draft';
	postingDate: string;
	imageUrl?: string;
	tagline?: string;
	description: string;
	tags?: Array<string>;
	githubUrl?: string;
	liveUrl?: string;
}