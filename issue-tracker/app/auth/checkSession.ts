import {getServerSession} from "next-auth/next"
import authOptions from "@/app/auth/authOptions";

const checkSession = async (request: any) => {
    const session = await getServerSession({req: request, ...authOptions});
    if (!session) {
        return false;
    }
    return true;
}

export default checkSession;