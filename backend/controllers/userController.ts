import { Request, Response } from "express";
import { RegisterUser, LoginUser } from "../types/User";
import { AppError } from "../errors/AppError";

export async function handleGetUserProfile(req: Request, res: Response) {
    console.log("🎮 handleGetUserProfile controller pinged!");
    res.json({ message: "handleGetUserProfile controller reached!", status: "Status good yo!" });
}

export async function handleRegisterUser(req: Request, res: Response) {
    const newUser: RegisterUser = req.body;

    if (!newUser.email || !newUser.user_name || !newUser.password) {
        throw new AppError("Please enter all required fields.");
    }

    console.log("🎮 handleRegisterUser controller pinged!");
    console.log(`👤 New User: ${JSON.stringify(newUser, null, 2)}`);
    res.json({ message: "handleRegisterUser controller reached!", status: "Status good yo!" });
}

export async function handleLoginUser(req: Request, res: Response) {
    const user: LoginUser = req.body;

    if (!user.email || !user.password) {
        throw new AppError("Please enter all required fields.");
    }

    console.log("🎮 handleLoginUser controller pinged!");
    console.log(`👤 Logged In User: ${JSON.stringify(user, null, 2)}`);
    res.json({ message: "handleLoginUser controller reached!", status: "Status good yo!" });
}

export async function handleUpdateUserProfile(req: Request, res: Response) {
    console.log("🎮 handleUpdateUserProfile controller pinged!");
    res.json({ message: "handleUpdateUserProfile controller reached!", status: "Status good yo!" });
}

export async function handleDeleteUserProfile(req: Request, res: Response) {
    console.log("🎮 handleDeleteUserProfile controller pinged!");
    res.json({ message: "handleDeleteUserProfile controller reached!", status: "Status good yo!" });
}

