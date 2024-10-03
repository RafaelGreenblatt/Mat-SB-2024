<!-- Checks /data/weeks.csv to see what should be posted; uses columns "questions", "exercises", "solutions" to decide what to show  -->

<script setup>
import { data } from '../data/csv.data.ts'
</script>

# List of PDFs

Note that not all of these PDFs exist yet.

<ul>
 <li v-for='week in data.weeks'>
  Week {{week.week}}: <a v-bind:href="'domande'+week.week+'.pdf'">questions</a>, <a v-bind:href="'esercizi'+week.week+'_nosoln.pdf'">exercises</a>, <a v-bind:href="'esercizi'+week.week+'.pdf'">exercises (with solutions)</a>
 </li>
</ul>


