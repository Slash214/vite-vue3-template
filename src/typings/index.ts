/**
 * @description ts 类型声明
 */

export interface myResponse<T = any, D = any> {
    data: T,
    status: number,
    code?: number,
    message?: string,
    total?: number
} 