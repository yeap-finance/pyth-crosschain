import React from 'react'
import * as solanaWeb3  from '@solana/web3.js';
import {Account} from "@solana/web3.js";


const KeyContext = React.createContext<Account>(new Account([14,173,153,4,176,224,201,111,32,237,183,185,159,247,22,161,89,84,215,209,212,137,10,92,157,49,29,192,101,164,152,70,87,65,8,174,214,157,175,126,98,90,54,24,100,177,247,77,19,112,47,44,165,109,233,102,14,86,109,29,134,145,132,141]));
export default KeyContext
