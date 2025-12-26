export interface BaseJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

export interface Job extends BaseJob {
  description: string;
  skills?: string[];
}

export interface JobDetails extends BaseJob {
  level?: 'entry' | 'fresher' | 'mid' | 'senior';

  salary?: string;
  postedDate?: string;
  deadline?: string;
  openings?: string;

  description: string;
  fullDescription?: string;

  skills?: string[];
  responsibilities?: string[];
  requirements?: string[];
  niceToHave?: string[];
}
