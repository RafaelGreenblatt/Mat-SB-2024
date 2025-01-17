<!-- Source data can be edited in /data/*.csv -->

<script setup>
import { data } from '/data/csv.data.ts'

const results = data.results1;
</script>

# Risultati di appello I (15 gennaio 2025)

I risultati dell'esame scritto (voto su 30 o altro esito) vengono riportati di seguito.  Gli studenti sono identificati con le ultime 4 cifre del numero di matricola e la prima lettera del cognome.

In assenza di diversa comunicazione  da parte dell'interressato/a all'indirizzo mail <greenblatt@mat.uniroma2.it>, oppure tramite [Delphi][Delphi], presumo che i voti di 18 o superiore siano accettati e verranno verbalizzati, mentre i voti inferiori non siano accettati e che l'interessato/a si sia ritirato/a dall'esame.

[Delphi]:https://delphi.uniroma2.it/

Gli esami consegnati possono essere consultati su appuntamento.  La conclusione della verbalizzazione è prevista per il 24 gennaio circa ma questa data puó variare.

<table>
 <tr>
  <th>Ultime 4 cifre matricola</th>
  <th>1ª lettera cognome</th>
  <th>Risultato</th>
  <th>Da verbalizzare</th>
 </tr>
 <tr v-for="result in results">
  <td> {{result.last4}} </td>
  <td> {{result.letter}} </td>
  <td> {{result.raw}} </td>
  <td> {{result.final}} </td>
 </tr>
</table>


