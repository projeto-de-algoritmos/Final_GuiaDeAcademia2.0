import { writable } from "svelte/store";

export let mostrar_sequencia = writable(false)
export let exercicios_selecionados = writable([])
export let sequencia_resultado = writable([])

export const abdominal = writable({
    name: 'Abdominal',
    icon: "../icons/abdominal.png",
    id: 0

})
export const afundo_barra = writable({
    name: 'Afundo de Barra',
    icon: "../icons/afundo_barra.png",
    id: 1
})
export const agachamento_barra = writable({
    name: 'Agachamento de Barra',
    icon: "../icons/agachamento_barra.png",
    id: 2
})
export const alongamento = writable({
    name: 'Alongamento',
    icon: "../icons/alongamento.png",
    id: 3
})
export const barra_fixa = writable({
    name: 'Barra Fixa',
    icon: "../icons/barra_fixa.png",
    id: 4
})
export const bicicleta = writable({
    name: 'Bicileta',
    icon: "../icons/bicicleta.png",
    id: 5
})
export const corrida = writable({
    name: 'Corrida',
    icon: "../icons/corrida.png",
    id: 6
})
export const desenvolvimento_halteres_ombro = writable({
    name: 'Desenvolvimento com Halteres para Ombro',
    icon: "../icons/desenvolvimento_halteres_ombro.png",
    id: 7
})
export const desenvolvimento_ombros_barra = writable({

    name: 'Desenvolvimento de Ombros com Barra',
    icon: "../icons/desenvolvimento_ombros_barra.png",
    id: 8
})
export const elevacao_frontal_barra = writable({
    name: 'Elevação Frontal com Barra',
    icon: "../icons/elevacao_frontal_barra.png",
    id: 9
})
export const elevacao_lateral_halteres = writable({
    name: 'Elevação Lateral com Halteres',
    icon: "../icons/elevacao_lateral_halteres.png",
    id: 10
})
export const elevacao_panturrilha = writable({
    name: 'Elevação de Panturrilha',
    icon: "../icons/elevacao_panturrilha.png",
    id: 11
})
export const elevacao_pelvica = writable({
    name: 'Elevação Pélvica',
    icon: "../icons/elevacao_pelvica.png",
    id: 12
})
export const flexao_bracos = writable({
    name: 'Flexão de Braços',
    icon: "../icons/flexao_bracos.png",
    id: 13
})
export const leg_45 = writable({
    name: 'Leg 45°',
    icon: "../icons/leg_45.png",
    id: 14
})
export const levantamento_halteres_biceps = writable({
    name: 'Levantamento com Halteres para Bíceps',
    icon: "../icons/levantamento_halteres_biceps.png",
    id: 15
})
export const levantamento_terra = writable({
    name: 'Levantamento Terra',
    icon: "../icons/levantamento_terra.png",
    id: 16
})
export const pular_corda = writable({
    name: 'Pular Corda',
    icon: "../icons/pular_corda.png",
    id: 17
})
export const puxada_alta = writable({
    name: 'Puxada Alta',
    icon: "../icons/puxada_alta.png",
    id: 18
})
export const puxada_unilateral= writable({
    name: 'Puxada Unilateral',
    icon: "../icons/puxada_unilateral.png",
    id: 19
})
export const rosca_concentrada = writable({
    name: 'Rosca Concentrada',
    icon: "../icons/rosca_concentrada.png",
    id: 20
})
export const rosca_invertida_antebraco = writable({
    name: 'Rosca Invertida com Antebraço',
    icon: "../icons/rosca_invertida_antebraco.png",
    id: 21
})
export const  supino_barra = writable({
    name: 'Supino na Barra',
    icon: "../icons/supino_barra.png",
    id: 22
})
export const supino_inclinado_halteres = writable({
    name: 'Supino Inclinado com Halteres',
    icon: "../icons/supino_inclinado_halteres.png",
    id: 23
})