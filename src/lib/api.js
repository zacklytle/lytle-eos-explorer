import EOS from 'eosjs'

const ENDPOINT = 'https://api.eosnewyork.io';
const eos = EOS.modules.api({
    httpEndpoint: ENDPOINT
});

const getInfo = async () => {
    try {
        const res = await eos.getInfo({});
        return res.head_block_num
    } catch (err) {
        console.error(err);
        return 'Error getting head block number'
    }
};

const getBlocks = async (numBlocks = 10) => {
    const headBlock = await getInfo();
    try {
        let blocks = [];
        for (let i = 0; i < numBlocks; i++) {
            blocks.push(headBlock - i)
        }
        const requests = blocks.map(n => eos.getBlock(n));
        blocks = await Promise.all(requests);
        return blocks
    } catch (err) {
        console.error(err);
        return 'Error getting blocks'
    }
};

export {getBlocks}