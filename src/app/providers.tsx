'use client'
import { store } from "@/Redux/store"
import { ThemeProvider } from "@/material/index"
import { Provider } from "react-redux"
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}

export default Providers