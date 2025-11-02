import { Request, Response } from "express";
import { RegisterUser, LoginUser } from "../types/User";
import { AppError } from "../errors/AppError";

export async function getUserProfile(req: Request, res: Response) {
    console.log("🎮 getUserProfile controller pinged!");
    res.json({ message: "getUserProfile controller reached!", status: "Status good yo!" });
}

export async function registerUser(req: Request, res: Response) {
    const newUser: RegisterUser = req.body;

    if (!newUser.email || !newUser.user_name || !newUser.password) {
        throw new AppError("Please enter all required fields.");
    }

    console.log("🎮 registerUser controller pinged!");
    console.log(`👤 New User: ${JSON.stringify(newUser, null, 2)}`);
    res.json({ message: "registerUser controller reached!", status: "Status good yo!" });
}

export async function loginUser(req: Request, res: Response) {
    const user: LoginUser = req.body;

    if (!user.email || !user.password) {
        throw new AppError("Please enter all required fields.");
    }

    console.log("🎮 loginUser controller pinged!");
    console.log(`👤 Logged In User: ${JSON.stringify(user, null, 2)}`);
    res.json({ message: "loginUser controller reached!", status: "Status good yo!" });
}

export async function updateUserProfile(req: Request, res: Response) {
    console.log("🎮 updateUserProfile controller pinged!");
    res.json({ message: "updateUserProfile controller reached!", status: "Status good yo!" });
}

export async function deleteUserProfile(req: Request, res: Response) {
    console.log("🎮 deleteUserProfile controller pinged!");
    res.json({ message: "deleteUserProfile controller reached!", status: "Status good yo!" });
}

