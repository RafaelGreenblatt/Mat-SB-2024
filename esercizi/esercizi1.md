<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "1." counter(h2) 
}
</style>

# Esercizi - Settimana 1

## Esercizio

Risolvi le sequenti disequazioni.

1.  $5 x - 8 \le 12$
2. $-2 x + 5 > x - 7$
3. $\frac{x-1}3 + \frac{x+2}5 \le \frac35$

::: details

1. $5x-8 \le 12 \to 5 x \le 20 \to \boxed{ x \le 4 }$
2. $-2 x + 5 > x - 7 \to - 3 x > -12 \to x < 4 \to \boxed{x < \frac13}$
3. $\frac{x-1}3 + \frac{x+2}5 \le \frac35 \to 5x-5 +3x+6 \le 9 \to 8 x + 1 \le 9 \to \boxed{x \le 1}$
:::

## Esercizio


Risolvi le sequenti disequazioni, scrivendo il risultato come un intervallo.

1. $|5x-1| > 14$
2. $|3x+2| + 1 \le 9$
3. $|x-3| < -4$

::: details

1. $|5x-1| > 14 \to -14 < 5 x -1 < 14 \to -13 < 5x < 15 \to \frac{-13}5 < x < 3 \to \boxed{ x \in \left(-\frac{13}5,3\right) }$
2. $|3x+2| + 1 \le 9 \to |3x+2| \le 8 \to -8 \le 3x+2 \le 8 \to -10 \le 3x \le 6 \to x \in \left[ -\frac{10}3, 2\right]$
3. Il valore assoluto è sempre positivo, quindi questa disuguaglianze è sempre falso; $\boxed{x \in \emptyset}$.  Per vedere questo in altro modo, iniziando come sopra otteniamo $4 < x-3 < -4$, quindi $4 < -4$, che è impossibile.
:::

## Esercizio

Sia $y = m x + b$, con $x = 2.4 \pm 0.2$, $m = 1.1 \pm 0.1$, $b = 4.5 \pm 0.5$.  Scrivere $y$ con un valore stimato ed errore assoluto.

::: details
Possiamo scrivere i dati in termini di intervalli come 
$$ x \in [2,2,2.6], \quad m \in [1.0,1.2], \quad b \in [4.0,5.0] $$
da cui segue $mx \in [2.2,3.12]$ e poi $y = mx + b \in [6.2,8.12]$.
Per trovare il valore stimato ed errore assoluto, osserviamo che per riprodurre questo intervallo dobbiamo avere $v_y + e_y = 8.12$ e $v_y - e_y=6.2$, cioè 
$$
\begin{cases}
v_y + e_y = 8.12
\\
v_y - e_y=6.2
\end{cases}
\to
\begin{cases}
2 v_y = 8.12 + 6.2 = 14.32
\\
2 e_y= 8.12 - 6.2 = 1.92
\end{cases}
\to
\begin{cases}
v_y = 7.16
\\
e_y= 0.96
\end{cases}
$$ 
ovvero $\boxed{y = 7.16 \pm 0.96}$.
:::

