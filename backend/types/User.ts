export interface User {
	id: string;
	created_at: Date;
	updated_at: Date;
	user_name: string;
	email: string;
	password_hash: string;
	first_name: string;
	last_name: string;
	profile_pic_url: string;
}

export interface LoginUser {
	email: string;
	password: string;
}

export interface RegisterUser extends LoginUser {
	email: string;
	user_name: string;
	password: string;
}
