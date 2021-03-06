import io from './io'

// 获取油费
export const getGasPrice = () => {
    return io.get('/api/v1.0/flipcoin/ethereum/getSuggestGasPrice')
}

// 获取下注参数
export const getBetParams = ({ betmask, modulo = 2, amount, address }) => {
    return io({
        method: 'get',
        url: '/api/v1.0/flipcoin/ethereum/getPlaceBetParams',
        params: { betmask, modulo, amount, address }
    })
}

// 结算
export const settleBet = (params) => {
    return io({
        method: 'get',
        url: '/api/v1.0/flipcoin/ethereum/settleBet',
        params
    })
}

// 获取所有投注记录
export const getRecord = () => {
    return io({
        method: 'get',
        url: '/api/v1.0/flipcoin/ethereum/getBetsAll'
    })
}

// 获取我的投注记录
export const getMyRecord = ({ address }) => {
    return io({
        method: 'get',
        url: '/api/v1.0/flipcoin/ethereum/getBetsMe',
        params: { address }
    })
}

// 获取下注系数
export const getAmountParams = () => {
    return io.get('/api/v1.0/flipcoin/ethereum/getSuggestBetAmount')
}