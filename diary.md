<!-- Source data can be edited in /data/diary.csv -->

<script setup>
import { data } from './data/csv.data.ts'

const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Diario delle Lezioni

Si noti che le settimane sono settimane "tematiche", di due lezioni seguite da una esercitazione (quindi da mercoledì al lunedì).

Salvo indicazioni al contrario, tutte le lezioni ed esercitazioni si terrano in **Aula T7**.

<div v-if="data.diary">
<div v-for="week in weeks">

### Settimana {{ week }}

<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    <div v-if="diaryItem.time">
    {{ diaryItem.date }}, {{ diaryItem.time }}: {{ diaryItem.type}} - {{ diaryItem.topic }}
    </div>
    <div v-else>  <b> {{ diaryItem.date }}:  {{ diaryItem.topic }} </b> </div>
  </li>
</ul>

</div>
</div>
