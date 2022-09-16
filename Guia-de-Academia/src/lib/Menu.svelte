<script>
    import { mostrar_sequencia } from '../store';
    import { exercicios_selecionados } from '../store';
    import { exercicios } from '../store'

</script>

<main class="container">
    <button on:click={() => mostrar_sequencia.set(true)}>
        Mostrar Sequência de Treino
    </button>

    <div>
        {#each exercicios as exer, i}
            <img src={exer.icon} alt={exer.name} width=10%/>
            <label>
                <input type="checkbox" value={exer} bind:group={$exercicios_selecionados}>
                {exer.name}
            </label>
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

    label {
        display: flex;
        justify-content: flex-start;
        outline: none;
        width: 23%;
    }

    input {
        padding: 1em 2em;
    }

</style>