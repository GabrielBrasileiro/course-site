import { UserEnum } from "../enums/user-enum";

export class Constants {

    public static get ADMIN(): number { return UserEnum.Admin }
    public static get USER(): number { return UserEnum.User }
    public static get TEACHER(): number { return UserEnum.Teacher }
    public static get COORDINATOR(): number { return UserEnum.Coordinator }

    public static get COURSE_PATH(): string { return '/courses' }
    public static get USER_PATH(): string { return '/users' }

} 