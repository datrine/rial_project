import Knex from "knex";
import createDBConn from "./conn";

/**
 * 
 * @type {{username:string,amountToVerify:number,trx:Knex.Transaction}} 
 */
let params;

/**
 * 
 * @param {object} param0 
 * @param {string} param0.username
 * @param {number} param0.amountToVerify
 * @returns 
 */
async function subtractBalance({ username, amountToSubtract, wallet }) {
    try {
        let knex=createDBConn()
        let updateResponse = await knex("wallets").where({
            username
        }).update({
            balance: wallet.balance - amountToSubtract,
        });
        if (!updateResponse) {
            return {
                err: "No changes made.",
                proceed: false
            }
        }
        let { wallet: updateWallet } = await getWallet({ username })
        return { proceed: true, wallet: updateWallet };
    } catch (error) {

    }
}

/**
 * 
 * @param {object} param0 
 * @param {object} param0.wallet
 * @param {params} param0.amountToVerify
 * @returns 
 */
async function verifyBalance({ wallet, amountToVerify }) {
    try {
        let knex=createDBConn()
        console.log(`Amount to verify: ${amountToVerify}. Wallet balance: ${wallet.balance}`)
        if (amountToVerify > wallet.balance) {
            return { err: "You don't have sufficient balance.", wallet, proceed: false }
        }
        if (wallet.hold === true) {
            if (wallet.amountOnHold + amountToVerify > wallet.balance) {
                return { err: "You don't have sufficient balance. Try less", wallet, proceed: false }
            }
        }
        return { proceed: true, wallet, info: "Amount verified as deductable..." };
    } catch (error) {

    }
}

/**
 * 
 * @param {params} param0 
 * @returns 
 */
async function getWallet({ username }) {
    try {
        let knex=createDBConn()
        let wallets = await knex.select("*").from("wallets").where({ username });
        let wallet = wallets[0]
        if (!wallet) {
            return { err: "Wallet does not exist. Nothing to release" }
        }
        return { wallet }
    } catch (error) {
    }
}

async function getUser({ email }) {
    try {
        let knex=createDBConn()
        console.log(email)
        let users = await knex("users").where({ email }).select();
        let user = users[0]
        if (!user) {
            return { err: "User does not exist." }
        }
        return { user }
    } catch (error) {
    }
}

/**
 * 
 * @param {params} param0 
 * @returns 
 */
async function holdBalance({ username, amountToVerify, }) {
    try {
        let knex=createDBConn()
        let updateResponse = await knex("wallets").where({
            username
        }).update({
            hold: true,
            holdTime: new Date()
        }).increment({amountOnHold:amountToVerify});
        console.log(updateResponse)
        if (!updateResponse) {
            return { err: "No hold made.", proceed: false, }
        }
        let { wallet: updateWallet } = await getWallet({ username })
        return { info: "Update made.", wallet: updateWallet, proceed: true }
    } catch (error) {
        throw { err: error }
    }
}

/**
 * 
 * @param {object} param0 
 * @returns 
 */

 async function updateTransaction({ username,requestID, state, }) {
    try {
        let knex=createDBConn()
        let updateResponse = await knex("transactions").where({
            username,requestID
        }).update({
            state,
            updatedOn: new Date()
        });
        
        if (!updateResponse) {
            return { err: "No transaction changes made.", proceed: false, }
        }
        return { info: "Update made to transaction.", proceed: true }
    } catch (error) {
        throw { err: error }
    }
}

/**
 * 
 * @param {params} param0 
 * @returns 
 */

 async function startTransaction({ username,requestID,amount,service ,platform="abtospay"}) {
    try {
        let knex=createDBConn()
        
        let insertRes = await knex("transactions").
        insert({ username,amount,state:"successful", requestID, platform,service});

        if (!insertRes) {
            return { err: "Transaction not started.", proceed: false, }
        }
        console.log("Transaction saved...")
        return { info: "Transaction saved.", proceed: true }
    } catch (error) {
        throw { err: error }
    }
}
/**
 * 
 * @param {object} param0
 * @param {string} param0.string
 * @param {number} param0.amountToRelease
 * @returns 
 */
async function releaseBalance({ username, amountToRelease }) {
    try {
      let knex=  createDBConn()
        let updateResponse = await knex("wallets").where({
            username
        }).update({
            hold: true,
            holdTime: undefined
        }).decrement({ amountOnHold: amountToRelease });
        if (!updateResponse) {
            return { info: "No release made. Already released", }
        }
        let updateWallet = await getWallet({ username })
        return { info: "Wallet released.", wallet: updateWallet, proceed: true, }
    } catch (error) {

    }
}



export {
    holdBalance,
    releaseBalance,
    subtractBalance,
    verifyBalance,
    getWallet,
    getUser,startTransaction,updateTransaction
};