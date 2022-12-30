import React, { useMemo } from 'react';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';

/**
 * AppProvider 
 *   Wrapper all provider for App
 * @param {any}  props Properties
 * @return {React.Component} AppProvider Component
 */
export const AppProvider = (props: any) => {
    const children = useMemo(() => props.children, [props.children])

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default AppProvider