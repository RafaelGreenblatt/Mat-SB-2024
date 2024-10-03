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

Sia $y = m x + b$, con $x = 2,4 \pm 0,2$, $m = 1,1 \pm 0,1$, $b = 4,5 \pm 0,5$.  Scrivere $y$ con un valore stimato ed errore assoluto.

::: details
Possiamo scrivere i dati in termini di valori minimi e massimi come 
$$ 2,2 \le x \le 2,6, \quad 1,0 \le m \le1.2, \quad 4,0 \le b \le 5.0 $$
da cui segue $2,3 \le mx \le 3,12$ e poi $6,2 \le y = mx + b \le 8,12$.
Per trovare il valore stimato ed errore assoluto, osserviamo che per riprodurre questo intervallo dobbiamo avere $v_y + e_y = 8.12$ e $v_y - e_y=6.2$, cioè 
$$
\begin{cases}
v_y + e_y = 8,12
\\
v_y - e_y=6,2
\end{cases}
\to
\begin{cases}
2 v_y = 8,12 + 6,2 = 14,32
\\
2 e_y= 8,12 - 6,2 = 1,92
\end{cases}
\to
\begin{cases}
v_y = 7,16
\\
e_y= 0,96
\end{cases}
$$ 
ovvero $\boxed{y = 7,16 \pm 0,96}$.
:::

## Esercizio

Sia $x = \frac{a}{b}$, con $a = 7 \pm 11$, $b = 1,0 \pm 1,5$.  Scrivere $x$ con un valore stimato ed errore assoluto.

::: details
Iniziando come nell'esercizio precedente, abbiamo
$$ a \in [6,8] , \quad b \in [\tfrac12, \tfrac32] ; $$
quindi 
$$ x \in \left[\frac6{3/2},\frac8{1/2} \right] = [4,16] $$
o, equivalentemente,
$$ \boxed{x = 10 \pm 6}. $$
:::

## Esercizio

Scrivere esplicitamente le seguenti insieme; ad esempio,


$$ \{ n \in \bN | 2 \le n < 7 \} = \boxed{\{2,3,4,5,6\}}\ . $$

1. $\{ n \in \bZ | \sqrt3 \le n \le 5 \}$
2. $\{ n \in \bZ | -2 < n \le 3\}$
3. $\{ n \in \bN | -2 < n \le 3\}$


::: details 
1. $\{2,3,4,5\}$
2. $\{-1,0,1,2,3\}$
3. $\{0,1,2,3\}$
:::

## Esercizio

Scrivere il risultato delle seguenti sia come un singolo intervallo, sia come un insieme caratterizzato per una proposizione.

Esempio: 
$$
[2,5] \cup [3,6)
= 
[2,7)
=
\{ x \in \bR | 2 \le x < 7 \}
$$

1. $(2,5] \cap (3,7]$
2. $(2,5] \cup (3,7]$
3. $(2,5] \setminus (3,7]$

::: details
1. $(2,5] \cap (3,7] = \boxed{(3,5]} = \boxed{\{ x \in \bR | 3 < x \le 5\}}$
2. $(2,5] \cup (3,7] = \boxed{(2,7]} = \boxed{\{ x \in \bR | 2 < x \le 7\}}$
3. $(2,5] \setminus (3,7] = \boxed{(2,3]} = \boxed{\{ x \in \bR | 2 < x \le 3\}}$
:::
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
2. $|3x+2| + 1 \le 9 \to |3x+2| \le 8 \to -8 \le 3x+2 \le 8 \to -10 \le 3x \le 6 \to x \in \boxed{\left[ -\frac{10}3, 2\right]}$
3. Il valore assoluto è sempre positivo, quindi questa disuguaglianze è sempre falso; $\boxed{x \in \emptyset}$.  Per vedere questo in altro modo, iniziando come sopra otteniamo $4 < x-3 < -4$, quindi $4 < -4$, che è impossibile.
:::



