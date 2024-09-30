<!--@include: ../notation.md-->

# Questions in preparation

## Exercise

Write out the following sets explicitly; for example,

$$ \{ n \in \bN | 2 \le n < 7 \} = \{2,3,4,5,6\}\ . $$

1. $\{ n \in \bZ | \sqrt3 \le n \le 7 \}$
2. $\{ n \in \bZ | -2 < n \le 5\}$
3. x

::: tip
blah
:::

::: details Soluzione
1. Something
:::

## Word problem

Let $B$ be the set of drosofila with white eyes

## Esercizio

Risolvi le sequenti disequazioni, scrivendo il risultato in termini di intervalli.

Esempio - $x - 15 < 4$:

$$x - 15 < 4 \Leftrightarrow x < 19 \Leftrightarrow \boxed{ x \in (-\infty,19)} $$

1.  $5 x - 8 \le 12$

## Domanda

Sia $a \le b$, $c > b$.  Quali delle delle affermazioni seguenti sono vere?

1. $a \le c$
1. $a < c$
1. $a=c$
1. Nessuno delle affermazioni sopra

:::details Soluzione
Riscrivendo,
$$a \le b < c \Rightarrow a < c,$$
ma se questo è vero, è anche vero che $a \le c$.  Quindo, sono vere $\boxed{\text{1 e 2}}$.
:::

## Domanda

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
\Rightarrow
\begin{cases}
2 v_y = 8.12 + 6.2 = 14.32
\\
2 e_y= 8.12 - 6.2 = 1.92
\end{cases}
\Rightarrow
\begin{cases}
v_y = 7.16
\\
e_y= 0.96
\end{cases}
$$ 
ovvero $\boxed{y = 7.16 \pm 0.96}$.
:::



