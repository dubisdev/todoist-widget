import { TokenInput } from "./components/TokenInput"

export const SettingsPage = () => {
    return (
        <div className="space-y-0.5">
            <h1 className="text-base font-bold">Todoist Widget Settings</h1>

            <div className="bg-card p-1 rounded border border-border">
                <label className="block text-sm font-medium mb-0.5">
                    API Token
                </label>
                <TokenInput />
                <p className="text-xs text-muted-foreground">
                    Find in{" "}
                    <a
                        href="https://todoist.com/app/settings/integrations/developer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-foreground hover:underline"
                    >
                        Todoist settings
                    </a>
                </p>
            </div>
        </div>
    )
}
