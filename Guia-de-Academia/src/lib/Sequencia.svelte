<script>
    import { mostrar_sequencia } from '../store'
    import { exercicios_selecionados } from '../store'
    import { greed } from '../greed';
    import { exercicios } from '../store';

    let indices = greed()
    let exercicios_resposta = []
    for(let i = 0; i < indices.length; i++) exercicios_resposta.push(exercicios[indices[i]])
</script>

<main class="container">
    <button on:click={() => mostrar_sequencia.set(false)}>
        Voltar para o Menu
    </button>
    <div>
        {#each exercicios_resposta as exer, i}
            <img src={exer.icon} alt={exer.name} width=10%/>
            <item>
                {i+1}° {exer.name}
            </item>
        {/each}
    </div>
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        gap: 30px;
        background-color: coral;
        border-radius: 0.5em;
        border: 2px solid rgba(255, 62, 0, 0);
    }

    button {
        font-family: fantasy;
        font-size: medium;
        padding: 1em 2em;
        color: black;
        background-color: #ff3e00;
        border-radius: 2em;
        border: 2px solid rgba(255, 62, 0, 0);
        outline: none;
        width: 200px;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
    }

    button:focus {
        border: 2px solid #ff3e00;
    }

    button:active {
        background-color: rgba(255, 62, 0, 0.2);
    }

    div {
        font-family: fantasy;
        font-size: medium;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        color: black;
        background-color: #ff3e00;
        border-radius: 0.5em;
        border: 2px solid rgba(255, 62, 0, 0);
        padding: 1em 2em;
    }
</style>