import { Button, buttonVariants } from "../ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Link } from "@tanstack/react-router"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"

export function Navbaar() {
    const { data: session, isPending } = authClient.useSession()

    const handleSignOut = async () => {
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

    return (
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur text-foreground supports-backdrop-filter:bg-background/60">
            <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <img 
                    src="https://tanstack.com/images/logos/logo-color-banner-600.png" 
                    alt="Tanstack Start Logo" 
                    className="size-8"/>
                    <h1 className="text-lg font-semibold text-foreground">TanStack Start</h1>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {isPending ? null : session ? (
                        <>
                        <Button onClick={handleSignOut} className={buttonVariants({ variant: 'secondary' })}>Logout</Button>
                        <Link to="/" className={buttonVariants()}>Dashboard</Link>
                        </>
                    ): (
                        <>
                        <Link 
                        to='/login' 
                        className={buttonVariants({ variant: 'secondary' })}
                    >
                        Login
                    </Link>
                    <Link 
                        to='/signup' 
                        className={buttonVariants()}
                    >
                        Get Started 
                    </Link>
                    </>
                    )}
                </div>
            </div>
        </nav>
    )
}

