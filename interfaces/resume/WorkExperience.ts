export interface WorkItem {
    description: string;
}

export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    website?: string;
    items: WorkItem[];
} 