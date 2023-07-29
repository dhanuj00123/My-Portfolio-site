import { createContext,useState,useMemo } from "react";
import { createTheme } from "@mui/material";
 
//colors


export const tokens = (mode:string)=>({
    ...(mode === 'dark')?{
            secondary: {
    100: "#dfd8fc",
    200: "#bfb1f8",
    300: "#9e89f5",
    400: "#7e62f1",
    500: "#5e3bee",
    600: "#4b2fbe",
    700: "#38238f",
    800: "#26185f",
    900: "#130c30"
}, 
primary: {
    100: "#fdfeff",
    200: "#fbfeff",
    300: "#f9fdff",
    400: "#f7fdff",
    500: "#f5fcff",
    600: "#c4cacc",
    700: "#939799",
    800: "#626566",
    900: "#313233"
}, 
body: {
    100: "#d2d2dd",
    200: "#a4a5ba",
    300: "#777898",
    400: "#494b75",
    500: "#1c1e53",
    600: "#161842",
    700: "#111232",
    800: "#0b0c21",
    900: "#060611"
}, 
Heading: {
    100: "#d4d4d7",
    200: "#a9a9af",
    300: "#7e7f88",
    400: "#535460",
    500: "#282938",
    600: "#20212d",
    700: "#181922",
    800: "#101016",
    900: "#08080b"
}, 

    }:{
secondary: {
    100: "#130c30",
    200: "#26185f",
    300: "#38238f",
    400: "#4b2fbe",
    500: "#5e3bee",
    600: "#7e62f1",
    700: "#9e89f5",
    800: "#bfb1f8",
    900: "#dfd8fc",
}, 
primary: {
    100: "#313233",
    200: "#626566",
    300: "#939799",
    400: "#c4cacc",
    500: "#f5fcff",
    600: "#f7fdff",
    700: "#f9fdff",
    800: "#fbfeff",
    900: "#fdfeff",
}, 
body: {
    100: "#060611",
    200: "#0b0c21",
    300: "#111232",
    400: "#161842",
    500: "#1c1e53",
    600: "#494b75",
    700: "#777898",
    800: "#a4a5ba",
    900: "#d2d2dd",
}, 
Heading: {
    100: "#08080b",
    200: "#101016",
    300: "#181922",
    400: "#20212d",
    500: "#282938",
    600: "#535460",
    700: "#7e7f88",
    800: "#a9a9af",
    900: "#d4d4d7",
}, 
    }
})

//mui theam seting
 export const themeSettings = (mode?:string)=>{

    const colors = mode ? tokens(mode) : tokens('light');
 return  {
    palette:{
        mode:mode,
        ...(mode ==='dark'?{
            primary:{
                main:colors.primary[500],
            },
            secondary:{
                main:colors.secondary[500]
            },
            neutral:{
                dark:colors.body[700],
                 main:colors.body[500],
                  light:colors.body[100],
            },
            background:{
                default:colors.Heading[500]
            }}:{
                 primary:{
                main:colors.primary[500],
            },
            secondary:{
                main:colors.secondary[500]
            },
            neutral:{
                dark:colors.body[700],
                 main:colors.body[500],
                  light:colors.body[100],
            },
            background:{
                default:colors.primary[500]
            }
            }

        )
    },
    typography:{
        fontFamily:'Oswald',
        fontSize:12,
        h1:{
            fontFamily:'Oswald',
            fontSize:40,
        },
        h2:{
            fontFamily:'Oswald',
            fontSize:32,
        },
        h3:{
            fontFamily:'Oswald',
            fontSize:24,
        },
        h4:{
            fontFamily:'Oswald',
            fontSize:20,
        },
        h5:{
            fontFamily:'Oswald',
            fontSize:16,
        },
        h6:{
            fontFamily:'Oswald',
            fontSize:14,
        },
    },
 };
};

export const ColorModeContext = createContext({
    toggleColorMode:()=>{

    }
})

export const useMode =() =>{
    const[mode,setMode]=useState('light')

    const colorMode = useMemo(
        ()=>({
toggleColorMode:()=> 
 setMode((prev) =>(prev ==='light'?'dark':'light')),
    }),[]
    );
        
const theme =  useMemo (()=>createTheme(),[mode])
    return [theme,colorMode]
}
 