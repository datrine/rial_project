import { signIn } from "next-auth/client"
import { createContext, useEffect, useState } from "react";
import wallet from "../../utils/models/wallet";
let WalletContext= createContext({
    /**
     * @type {wallet}
     */
wallet:undefined,
changeContext:()=>{}
});

export {WalletContext}