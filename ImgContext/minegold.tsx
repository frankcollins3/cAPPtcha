import React, { createContext, useContext, ReactNode, useState } from "react";

// type the state which will be read-only 'string'
type imgContextType = {
    // first 6 images aren't captcha validating 
    kiss: string;
    signupsigns: string;
    dynamite: string;
    helmet: string;
    barrier: string;
    cactus: string;

    // these 3 images have gold in them which means they do validate the captcha once clicked.
    trophy: string;
    gold: string;
    cart: string;
    luckypull: string;
};


// define values which will remain static
const imgDefaults: imgContextType = {
    // no gold in the img. these images don't validate the captcha.
    kiss: 'minegoldimg/kiss.png',
    signupsigns: 'minegoldimg/signupsigns.png',
    dynamite: 'minegoldimg/dynamite.png',
    helmet: 'minegoldimg/helmet.png',
    barrier: 'minegoldimg/barrier.png',
    cactus: 'minegoldimg/cactus.png',

    trophy: 'minegoldimg/trophy.png',
    gold: 'minegoldimg/gold.png',
    cart: 'minegoldimg/cart.png',
    luckypull: `minegoldimg/luckypull.png`

};

// createContext
const ImgContext = createContext<imgContextType>(imgDefaults);

export function useGoldMineImage() {
    return useContext(ImgContext);
}

type Props = {
    children: ReactNode;
};

export function ImgProvider({ children }: Props) {    
    const [kiss, setkiss] = useState<string>(`minegoldimg/kiss.png`);
    const [signupsigns, setsignupsigns] = useState<string>(`minegoldimg/signupsigns.png`);
    const [dynamite, setdynamite] = useState<string>(`minegoldimg/dynamite.png`);
    const [helmet, sethelmet] = useState<string>(`minegoldimg/helmet.png`);
    const [barrier, setbarrier] = useState<string>(`minegoldimg/barrier.png`);
    const [cactus, setcactus] = useState<string>(`minegoldimg/cactus.png`);

    const [trophy, settrophy] = useState<string>(`minegoldimg/trophy.png`);
    const [gold, setgold] = useState<string>(`minegoldimg/gold.png`);
    const [cart, setcart] = useState<string>(`minegoldimg/cart.png`);
    const [luckypull, setLuckypull] = useState<string>(`minegoldimg/luckypull.png`);
        
    const value = {
        kiss,
        signupsigns,
        dynamite,
        helmet,
        barrier,
        cactus,

        trophy,
        gold,
        cart,

        luckypull
    };

    return (
        <>
            <ImgContext.Provider value={value}>
                {children}
            </ImgContext.Provider>
        </>
    );}
