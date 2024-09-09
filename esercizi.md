<!-- Checks /data/weeks.csv to see what should be posted; uses column "exercises":  'ex' to link to exercises, 'sol' to link to solutions.   -->

<script setup>
import { data } from './data/csv.data.ts'
const expre = 'esercizi/esercizi'
const post = '.html'
</script>

# Esercizi

Una volta pronti, gli esercizi da svolgere nelle esercitazioni saranno pubblicati in questa pagina.

<div v-for='week in data.weeks'>
 <div v-if='week.exercises == "ex"'>
  - Settimana {{week.week}}: <a v-bind:href="'esercizi/esercizi'+week.week+'.html'"> esercizi</a>
 </div>
 <div v-if='week.exercises == "sol"'>
  - Settimana {{week.week}}: <a v-bind:href="'esercizi/esercizi'+week.week+'.html'"> esercizi</a>, <a v-bind:href="'esercizi/soluzioni'+week.week+'.html'"> soluzioni</a>
 </div>
</div>


