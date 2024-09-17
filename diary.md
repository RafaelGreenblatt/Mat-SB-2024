<!-- Source data can be edited in /data/diary.csv , /data/weeks.csv -->

<script setup>
import { data } from './data/csv.data.ts'

const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Programma/diario delle Lezioni

Questa pagina è una programma provvisoria con le mie intenzioni per il corso, che man mano sarà modificato per riflettere l'insegnamento realmente erogato.

Salvo indicazioni al contrario, tutte le lezioni ed esercitazioni si terrano in **Aula T7**.



<div v-if="data.diary">
<div v-for="week in weeks">

### Settimana {{ week }}

<div v-for="lettura in data.weeks.filter((el) => el.week == week )">
    Lettura consigliata: Abate sezioni {{ lettura.abate3 }}.
</div>

<div v-for="exw in data.weeks.filter((el) => el.week == week )">
 <div v-if='exw.exercises == "ex"'>
  - Settimana {{week.week}}: <a v-bind:href="'esercizi/esercizi'+week+'.html'"> esercizi</a>
 </div>
 <div v-if='exw.exercises == "sol"'>
  - Settimana {{week.week}}: <a v-bind:href="'esercizi/esercizi'+week+'.html'"> esercizi</a>, <a v-bind:href="'esercizi/soluzioni'+week+'.html'"> soluzioni</a>
 </div>
</div>

<!-- Produces the single items, with some conditional formatting.  In particular, 'room', if present, is BOLD -->
<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    <div v-if="diaryItem.topic">
    {{ diaryItem.date }}, {{ diaryItem.time }} <span v-if="diaryItem.room" style="font-weight:bold"> {{ diaryItem.room}} </span> - {{ diaryItem.type}} ({{ diaryItem.docente }}): {{ diaryItem.topic }}
    </div>
    <div v-else> 
    {{ diaryItem.date }}, {{ diaryItem.time }}<span v-if="diaryItem.room" style="font-weight:bold"> {{ diaryItem.room}} </span>: {{ diaryItem.type}} ({{ diaryItem.docente }})
    </div>
  </li>
</ul>

</div>

### Eventuale lezioni di ricupero

Se necessario per annulamento di lezioni o altri eventualità, ci potrebbero essere lezioni o esercitazioni nel periodo 12-19 dicembre, nei giorni ed orari consueti.

</div>
