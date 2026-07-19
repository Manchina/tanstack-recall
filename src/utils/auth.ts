import { authClient } from "#/lib/auth-client"
import { toast } from "sonner"

export const handleSignOut = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                toast.success('Signed out successfully')
            },
            onError: ({error}) => {
                toast.error(error.message)
            }
        }
    })
}