import { useTokenStore } from "../store/useTokenStore";

export const TokenInput = () => {
    const token = useTokenStore((state) => state.token);
    const setToken = useTokenStore((state) => state.setToken);


    return <input
        onChange={e => setToken(e.target.value)}
        value={token}
        autoComplete="off"
        autoCorrect="off"
        type="password"
        placeholder="Enter your token" className="border rounded p-1 w-full border-gray-500 text-xs" />;
}
