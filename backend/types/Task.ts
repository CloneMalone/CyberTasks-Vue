export interface Task {
	id: string;
	user_id: string;
	name: string;
	description?: string;
	priority: 'low' | 'medium' | 'high';
	status: 'in-progress' | 'done';
	created_at: Date;
	updated_at: Date;
}

export interface CreateTask {
    name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
}