import { exercicios_selecionados } from './store'

let exer = []
exercicios_selecionados.subscribe(
    value => {
        exer = value
    }
)

let fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]

export let greed = () => {
    let rendimento_total = 0
    for(let i = 0; i < exer.length; i++) rendimento_total += exer[i].rendimento
    console.log(rendimento_total)
    let qnt = []
    for(let i = 0; i < 24; i++) qnt[i] = 0
    let max = 75025
    let pos = 24
    while(pos>0) {
        if(rendimento_total >= max) {
            qnt[pos-1] = 1
            rendimento_total -= max
        }
        else {
            pos-=1
            max=fib[pos-1]
        }
    }

    let qnt_res = []
    for(let i = 0; i < 24; i++) if(qnt[i] != 0) qnt_res.push(i)
    return qnt_res
}