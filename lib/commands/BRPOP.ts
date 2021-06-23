import { transformReplyStringArray } from './generic-transformers';

export const FIRST_KEY_INDEX = 1;

export function transformArguments(key: string | Array<string>, timeout: number): Array<string> {
    const args = ['BRPOP'];

    if (typeof key === 'string') {
        args.push(key);
    } else {
        args.push(...key);
    }

    args.push(timeout.toString());

    return args;
}

type BRPOPReply = null | {
    key: string;
    element: string;
};

export function transformReply(reply: null | [string, string]): BRPOPReply {
    if (reply === null) return null;

    return {
        key: reply[0],
        element: reply[1]
    };
}
