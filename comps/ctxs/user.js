import { signIn } from "next-auth/client"
import { createContext, useEffect, useState } from "react";
import user from "../../utils/models/user";
let UserContext= createContext({
    /**
     * @type {user}
     */
user:undefined
});

export {UserContext}