import { signIn } from "next-auth/client"
import { createContext, useEffect, useState } from "react";
import transaction from "../../utils/models/transaction";
let TransactionContext= createContext({
    /**
     * @type {transaction}
     */
transaction:undefined
});

export {TransactionContext}