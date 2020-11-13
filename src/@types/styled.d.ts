import 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme {
        theme: string,

        colors: {
            primary: string,
            secondary: string,
            background: string,
            title: string,
            text: string,
            inputText: string,
            inputBackground: string,
            recipeText: string
        }
    }
}