<!-- Checks /data/weeks.csv to see what should be posted; uses columns "questions", "exercises", "solutions" to decide what to show  -->

<script setup>
import { data } from './data/csv.data.ts'
const expre = 'esercizi/esercizi'
const post = '.html'
</script>

# Esercizi

Per ogni settimana si trovano alcune domande semplici che potete usare per verificare la vostra comprensione della materiale, ed esempi di esercizi con soluzioni, compreso esempi presentati nelle lezioni e/o esercitazioni.
La pagina dovrebbe essere aggiorniato durante il corso.

L'intenzione è di dare uno stimolo per lo studio e di dare un'idea delle tipologia di domande che saranno utilizzate per le esami.  Non sono però esaustivi di tutte la materia del corso o tutti i possibili tipi di quesiti.  Ci sono anche numerose altri esercizi nei [libri di riferimento del corso](./#testi-adottati).

<ul>
<div v-for='week in data.weeks'>
 <li v-if='week.questions'>
  <div v-if='week.solutions'>
  Settimana {{week.week}}: <a v-bind:href="'esercizi/domande'+week.week+'.html'"> domande</a>, <a v-bind:href="'esercizi/esercizi'+week.week+'_nosoln.html'">esercizi</a>, <a v-bind:href="'esercizi/esercizi'+week.week+'.html'">esercizi (con soluzioni)</a>
  </div>
  <div v-else-if='week.exercises'>
  Settimana {{week.week}}: <a v-bind:href="'esercizi/domande'+week.week+'.html'"> domande</a>, <a v-bind:href="'esercizi/esercizi'+week.week+'_nosoln.html'">esercizi</a>
  </div>
  <div v-else>
  Settimana {{week.week}}: <a v-bind:href="'esercizi/domande'+week.week+'.html'"> domande</a>
  </div>
 </li>
</div>
</ul>


