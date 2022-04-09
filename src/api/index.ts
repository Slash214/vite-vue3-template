const baseURL = 'https://www.fastmock.site/mock/ad6546ec6973c684608e11227e797c5e/api'
import request from './request'
const prdURL = 'https://www.lovehaha.cn/api'


interface indexData {
    pageIndex?: number,
    pageSize?: number
}

interface details {
    fid: number,
    flag: string
}

export function getImg() {
    return request({
        method: 'GET',
        url: `${baseURL}/swiper`,
    })
}

export function getList(params: indexData) {
    return request({
        method: 'GET',
        url: `${prdURL}/cms/list`,
        params
    })
}

export function getDetails(params: details) {
    return request({
        method: 'GET',
        url: `${prdURL}/cms/getDetail`,
        params
    })
}

export function getCommit(params: {}) {
   return request({
       method: 'GET',
       url: `${prdURL}/commit/usercomment`,
       params
   })
}